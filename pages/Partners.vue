<template lang="html">
  <div class="container">
    <div 
      v-if="busy"
      class="loading-image-container">
      <img 
        class="loading-image"
        src="../assets/loading.gif">
    </div>
    <br><br><br>
    <div 
      class="display-1"
    > 
      Partners Portal:
      <br>
    </div>
    <div
      class="portfolio-userwelcome"
    ><br>Welcome {{ ticker }}</div>
    <br><br><br>
    <v-flex
      v-if="hasContractMapping"
    >
      <div class="row">
        <div class="col-lg-6">
           <PartnersPanel
              :address="ethereumContractAddress"
              :url="ethBlockexplorerUrl"
              :eth="true"/>
        </div>
        <div class="col-lg-6">
          <PartnersPanel
              :address="loomContractAddress"
              :url="loomBlockexplorerUrl"
              :eth="false"/>                      
        </div>
      </div>
    </v-flex>
    <v-flex
      v-else
    >
      <PartnersPanel
        :address="ethereumContractAddress"
        :url="ethBlockexplorerUrl"
        :eth="true"/>
    </v-flex>
    <br>
    <br>
    <br>
    <div class="row">
      <div 
        class="col-lg-6 col-md-10 align-center">
        <button
          :disabled="busy"
          @click="checkContractMapping(true)"
        >
          Check Contract Mapping
        </button>
      </div>
      <div 
        class="col-lg-6 col-md-10 align-center">
        <button
          v-if="!hasContractMapping"
          :disabled="busy"
          @click="foreignContractSigner"
        >
          Click To Authorize Layer 2 Transactions On Loomnetwork
        </button>
      </div>
      <br><br><br><br>
    </div>
    
  </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

import PartnersPanel from '../components/PartnersPanel'

import axios from 'axios'
import Web3 from 'web3'
import {
  Address,
  Client,
  Contracts,
  CryptoUtils,
  EthersSigner,
  LocalAddress,
  soliditySha3
} from 'loom-js'
import { ethers } from 'ethers'

export default {
  components: {
    PartnersPanel
  },
  data() {
    return {
      live: false,
      ready: false,
      ethereumProvider: null,
      ethereumContractAddress: null,
      ethereumWalletAddr: null,
      loomClient: null,
      loomWalletAddr: null,
      busy: false,
      hasContractMapping: false,
      loomContractAddress: null,
      ticker: null,
      ethBlockexplorerUrl: null,
      loomBlockexplorerUrl: null
    }
  },

  async mounted() {
    await this.initWeb3()
    await this.getPartnerInfo()
    await this.initLoom()
    await this.checkContractMapping()
    this.ready = true
    try {
      if (this.$route.query.testSQS) {
        this.testSQS()
      }
    } catch (e) {}
  },

  methods: {
    async testSQS() {
      await axios
        .get(
          this.$store.state.WebsiteInterfaceUrl + '?pageType=sendTestSQS'
        )
        .then(response => {
          // JSON responses are automatically parsed.
          try {
            let res = response.data
            alert(res)
          } catch (e) {
            alert(e)
          }
        })
        .catch(e => {
          console.log(e)
        })
    },
    async initWeb3() {
      if (window.ethereum.networkVersion == 1) {
        this.live = true
      } else {
        this.live = false
        if (window.location.toString().includes('://cryptoraves.space/')) {
          alert('Please switch Metamask to Main Ethereum Network')
        }
      }
      let web3js
      if (window.ethereum) {
        window.web3 = new Web3(ethereum)
        web3js = new Web3(ethereum)
        await ethereum.enable()
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
        web3js = new Web3(window.web3.currentProvider)
      } else {
        alert('Metamask is not Enabled')
      }

      if (web3js) {
        this.ethereumProvider = new ethers.providers.Web3Provider(
          web3js.currentProvider
        )
        this.ethereumWalletAddr = (await this.ethereumProvider.listAccounts())[0]
      }
      window.ethereum.on('accountsChanged', function() {
        location.reload()
      })
    },
    async initLoom() {
      let client
      if (this.live) {
        this.ethBlockexplorerUrl =
            'https://etherscan.io/address/' + this.ethereumContractAddress
        this.loomBlockexplorerUrl =
            'https://basechain-blockexplorer.dappchains.com/address/' +
            this.loomContractAddress +
            '/transactions'
        client = new Client(
          'default',
          'wss://plasma.dappchains.com/websocket',
          'wss://plasma.dappchains.com/queryws'
        )
      } else {
        this.ethBlockexplorerUrl =
            'https://rinkeby.etherscan.io/address/' + this.ethereumContractAddress
        this.loomBlockexplorerUrl =
            'https://extdev-blockexplorer.dappchains.com/address/' +
            this.loomContractAddress +
            '/transactions'
        client = new Client(
          'extdev-plasma-us1',
          'wss://extdev-plasma-us1.dappchains.com/websocket',
          'wss://extdev-plasma-us1.dappchains.com/queryws'
        )
      }
      this.loomClient = client
      const storedKey = CryptoUtils.generatePrivateKey()
      var privKey = CryptoUtils.B64ToUint8Array(storedKey)
      const pubKey = CryptoUtils.publicKeyFromPrivateKey(privKey)
      this.loomWalletAddr = LocalAddress.fromPublicKey(pubKey).toString()
    },
    async getPartnerInfo() {
      await axios
        .get(
          this.$store.state.WebsiteInterfaceUrl + '?pageType=getPartnerInfo&ethOwnerAddress=' +
            this.ethereumWalletAddr
        )
        .then(response => {
          // JSON responses are automatically parsed.
          let res = response.data
          if (JSON.stringify(res) == '{}') {
            alert(`Please switch to a registered partner account.`)
            return
          }
          try {
            this.ethereumContractAddress = res['ethContractAddress']
            this.loomContractAddress = res['loomContractAddress']
            this.ticker = res['ticker']
          } catch (e) {
            console.log('Error parsing retrieved data from getPartnerInfo')
            console.log(e)
          }
        })
        .catch(e => {
          console.log(e)
        })
    },
    async foreignContractSigner() {
      const hash = soliditySha3(
        {
          type: 'address',
          value: this.ethereumContractAddress.slice(2)
        },
        {
          type: 'address',
          value: this.loomContractAddress.slice(2)
        }
      )
      var signer = new EthersSigner(this.ethereumProvider.getSigner())
      const foreignContractCreatorSig = await signer.signAsync(hash)
      const signatureString = foreignContractCreatorSig.toString('hex')

      await axios
        .get(
          this.$store.state.WebsiteInterfaceUrl + '?pageType=foreignContractSigner&hash=' +
            signatureString +
            '&ethContractOwnerAddress=' +
            this.ethereumWalletAddr
        )
        .then(response => {
          // JSON responses are automatically parsed.
          let res = response.data
          if (
            res.startsWith(
              'Local Contract Mapping Request -- LoomContractAddress: '
            )
          ) {
            console.log(res)
          } else {
            this.busy = true
            const sleep = milliseconds => {
              return new Promise(resolve => setTimeout(resolve, milliseconds))
            }
            async () => {
              await sleep(60000)
              window.location.reload()
            }
          }
        })
        .catch(e => {
          console.log(e)
        })
    },
    async checkContractMapping(button = false) {
      const ownerExtdevAddr = Address.fromString(
        `${this.loomClient.chainId}:${this.loomWalletAddr}`
      )
      const gatewayContract = await Contracts.TransferGateway.createAsync(
        this.loomClient,
        ownerExtdevAddr
      )
      const foreignContract = Address.fromString(
        `eth:${this.ethereumContractAddress}` //`eth:${tokenethereumAddress}`
      )
      var res = await gatewayContract.getContractMappingAsync(foreignContract)
      if (res) {
        if (!res.pending) {
          this.hasContractMapping = true
          this.loomContractAddress = res.to.toString().split(':')[1]
        }
        if (button) {
          if (res.pending) {
            alert(
              'Pending Map Request: Ethereum Contract: ' +
                this.ethereumContractAddress +
                ' to Loom contract: ' +
                this.loomContractAddress
            )
          } else {
            alert(
              'Mapped! Ethereum Contract: ' +
                this.ethereumContractAddress +
                ' is mapped to ' +
                this.loomContractAddress
            )
          }
        }
      } else {
        if (button) {
          alert(
            'Ethereum Contract: ' +
              this.ethereumContractAddress +
              ' is not mapped.'
          )
        }
      }
    }
  }
}
</script>
<style scoped>
@import '../assets/style/modalstyle';
.loading-image {
  margin: auto;
}
.loading-image-container {
  display: flex;
}
.portfolio-userwelcome {
  margin-bottom: 10px;
  font-size: 40px;
  font-family: 'Montserrat';
  color: rgb(0, 38, 101);
  line-height: 1.6;
  text-align: center;
}
.align-center {
  text-align: center;
}
</style>
