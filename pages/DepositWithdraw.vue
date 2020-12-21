<template lang="html">
  <div v-if="user">
    <div class="container">
      <div class="portfolio-user">
        <div
          class="portfolio-userwelcome"
        >Welcome {{ user.platformHandle }}</div>
        <div class="portfolio-userimg">
          <img
            :src="user.imgUrl"
            :title="user.platformHandle"
          >
        </div>
      </div>
      <div class="token-list-title">Token for Deposit/Withdrawal</div>
      <div 
        class="token-list"
        @click="toggle"         
      >{{ ticker }}
        <div 
          v-show="isOpen"
          class="token-options"
        >
          <div
            v-for="(option, index) in tickers"
            :key="index"
            class="token-option"
            @click="tickerSelect(option)"
          >{{ option }}</div>
        </div>
      </div>
      <div class="row user-transaction-section">
        <div class="col-lg-4 col-md-12">
          <BalancePanel
            :selected-ticker="ticker" 
            :address="ethereumAddress"
            :l1BlockExplorerUrl="l1BlockExplorerUrl"
            :l2BlockExplorerUrl="l2BlockExplorerUrl"
            :balance="loomBalance"
            :l1NetworkType="l1NetworkType"
            :l2NetworkType="l2NetworkType"
            :type="true"/>
        </div>
        <div class="user-transaction-section-buttons col-lg-4 col-md-12">
          <button
            v-if="!resumeWithdrawalNeeded"
            type="button"
            class="btn btn-danger btn-arrow-right"
            @click="showWithdraw">
            Withdraw
          </button>
          <button
            v-if="resumeWithdrawalNeeded"
            type="button"
            class="btn btn-danger btn-arrow-right"
            @click="resumeWithdrawal">
            Retry
          </button>                    
          <div class="portfolio-userimg">
            <img
              :src="TOKEN_IMAGE_URL"
              :title="ticker">
          </div>
          <button 
            v-if="!resumeWithdrawalNeeded"
            type="button"
            class="btn btn-success btn-arrow-left"
            @click="showDeposit">
            Deposit
          </button>
        </div>
        <div class="col-lg-4 col-md-12">
          <BalancePanel 
            :selected-ticker="ticker"
            :address="ethereumAddress"
            :l1BlockExplorerUrl="l1BlockExplorerUrl"
            :l2BlockExplorerUrl="l2BlockExplorerUrl"
            :balance="ethereumBalance"
            :l1NetworkType="l1NetworkType"
            :l2NetworkType="l2NetworkType"/>                        
        </div>
      </div>
      <div class="link instruction-link"><nuxt-link to="/stepinstructions">Step-by-Step Instructions</nuxt-link></div>
      <br>
      <div class="link stuck-link"><nuxt-link to="/stepinstructions/stuck">Is Your Withdrawal Stuck?</nuxt-link></div>
      <div
        v-if="enableDiagnostics"
      >
        <button 
          type="button"
          class="btn-danger"
          @click="checkAccountMappingButton">
          Check Account Mapping
        </button>
        <button 
          type="button"
          class="btn-danger"
          @click="checkContractMapping">
          Check Contract Mapping
        </button>
      </div>
    </div>
    <DepositModal 
      v-if="showDepoistModal" 
      :imageurl="TOKEN_IMAGE_URL"
      :imagetitle="ticker"
      :maxamount="ethereumBalance.toString()"
      @deposit="onDeposit"
      @closeDeposit="showDepoistModal=false"/>
    <ShowBackburnerNoticeModal
      v-if="showBackburnerNoticeModal"
    />
    <ConfirmModal
      v-if="showConfirmModal"
      :imageurl="TOKEN_IMAGE_URL"
      :imagetitle="ticker"
      :depositamount="amount"
      @confirm="onConfirm"/>
    <CompleteModal
      v-if="showCompleteModal"
      :imageurl="TOKEN_IMAGE_URL"
      :imagetitle="ticker"
      :depositamount="amount"
      :stillbusy.sync="busy"
      @complete="onComplete"/>
    <WithdrawModal
      v-if="showWithdrawModal"
      :imageurl="TOKEN_IMAGE_URL"
      :imagetitle="ticker"
      :maxamount="loomBalance"
      @withdraw="onWithdraw"
      @closeWithdraw="showWithdrawModal=false"/>
    <TransferStatus 
      v-if="showTransferStatus"    
      :imageurl="TOKEN_IMAGE_URL"
      :imagetitle="ticker"
      :withdrawamount="amount"/>
    <ConfirmWithdraw
      v-if="showConfirmWithdraw"
      :imageurl="TOKEN_IMAGE_URL"
      :imagetitle="ticker"
      :withdrawamount="amount"
      @confirmwithdraw="onConfirmWithdraw"/>
    <ConfirmWithdrawComplete
      v-if="showConfirmWithdrawComplete"
      :imageurl="TOKEN_IMAGE_URL"
      :imagetitle="ticker"
      :withdrawamount="amount"
      :stillbusy.sync="busy"
      @withdrawcomplete="onWithdrawComplete"/>
    <StuckModal
      v-if="showStuckModal"          
      :imageurl="TOKEN_IMAGE_URL"
      :imagetitle="ticker"
      :withdrawamount="amount"
      @stuck="onStuck"/>
    <SignForeign
      v-if="showSignForeign"
      :username="user.platformHandle"
      :imageurl="user.imgUrl"
      @signforeign="onSignForeign"/>      
    <WaitMappingConfirm
      v-if="showWaitMappingConfirm"
      :username="user.platformHandle"
      :imageurl="user.imgUrl"
      :stillbusy.sync="busy"
      @mappingconfirm="onMappingConfirm"/>
    <EnableMetaMask
      v-if="showEnableMetaMask"
      @metamask="showEnableMetaMask = false"/>
  </div>
  <div 
    v-else
    class="register-wallet">
    <RegisterWallet
      v-if="showRegisterWallet"
      :address="ethereumAddress"
      @registerwallet="onRegisterWallet"/>
  </div> 

</template>

<script>
import axios from 'axios'
import Web3 from 'web3'
import { ethers } from 'ethers'
import BN from 'bn.js'
import SectionHeader from '../components/SectionHeader'
import BalancePanel from '../components/BalancePanel'
import DepositModal from '../components/DepositModal'
import ConfirmModal from '../components/ConfirmModal'
import CompleteModal from '../components/CompleteModal'
import WithdrawModal from '../components/WithdrawModal'
import TransferStatus from '../components/TransferStatus'
import ConfirmWithdraw from '../components/ConfirmWithdraw'
import ShowBackburnerNoticeModal from '../components/ShowBackburnerNoticeModal'

import ConfirmWithdrawComplete from '../components/ConfirmWithdrawComplete'
import SignForeign from '../components/SignForeign'
import WaitMappingConfirm from '../components/WaitMappingConfirm'
import RegisterWallet from '../components/RegisterWallet'
import StuckModal from '../components/StuckModal'
import EnableMetaMask from '../components/EnableMetaMask'


import MetamaskHandler from "../assets/js/metamaskHandler"

export default {
  components: {
    SectionHeader,
    BalancePanel,
    DepositModal,
    ConfirmModal,
    CompleteModal,
    WithdrawModal,
    TransferStatus,
    ConfirmWithdraw,
    ConfirmWithdrawComplete,
    SignForeign,
    ShowBackburnerNoticeModal,
    WaitMappingConfirm,
    RegisterWallet,
    StuckModal,
    EnableMetaMask
  },
  data() {
    return {
      I_WANT_TO: this.$route.query['iWantTo'],
      TOKEN_IMAGE_URL: '',
      weiAmount: null,
      depositReceipt: null,
      withdrawReceipt: null,
      showDepoistModal: false,
      showConfirmModal: false,
      showCompleteModal: false,
      showWithdrawModal: false,
      showBackburnerNoticeModal: false,
      showTransferStatus: false,
      showConfirmWithdraw: false,
      showConfirmWithdrawComplete: false,
      showSignForeign: false,
      showWaitMappingConfirm: false,
      showRegisterWallet: false,
      showStuckModal: false,
      showEnableMetaMask: false,
      user: {},
      tickers: [],
      balances: [],
      ticker: null,
      isOpen: false,
      live: false,
      ready: false,
      hasAccountMapping: null,
      ethereumProvider: null,
      ethereumToken: null,
      ethereumGateway: null,
      ethereumBalance: 0,
      loomClient: null,
      loomProvider: null,
      layer2Token: null,
      loomGateway: null,
      loomWalletAddr: null,
      loomBalance: 0,
      busy: false,
      hasContractMapping: false,
      eth2loomGatewayAddress: null,
      gas: 200000,
      loomBlockexplorerUrl: null,
      ethBlockexplorerUrl: null,
      amount: '0',
      withdrawalHash: null,
      depositHash: null,
      iteration: 0,
      coinMultiplier: 0,
      resumeWithdrawalNeeded: false,
      enableDiagnostics: false,
      forceLive: false
    }
  },
  async mounted() {
    try {
      if (this.$route.query.resumeWithdrawalNeeded) {
        this.resumeWithdrawalNeeded = true
      }
    } catch (e) {}
    try {
      if (this.$route.query.ticker) {
        this.ticker = this.$route.query.ticker
      }
    } catch (e) {}
    try {
      if (this.$route.query.enableDiagnostics) {
        this.enableDiagnostics = true
      }
    } catch (e) {}
    try {
      if (this.$route.query.forceLive) {
        this.forceLive = true
      }
    } catch (e) {}

    await this.initWeb3()
    await this.loadWebData()
    /*var res = await this.initWeb3()
    if (!res) {
      console.log('no results')
    }
    
    await this.initLoom()
    */
    if (!this.user) {
      return 0
    }
    if (!this.loomWalletAddr) {
      return 0
    }
    //await this.initContracts()
    //await this.mapAddresses()
    //await this.addEventListeners()
    //await this.updateBalances()
    this.ready = true
    
    //await this.checkContractMapping()
  },
  mixins: [MetamaskHandler],
  methods: {
    toggle: function() {
      this.isOpen = !this.isOpen
    },
    showDeposit: function() {
      this.showDepoistModal = true
    },
    onDeposit: function(amount) {
      this.showDepoistModal = false
      this.amount = amount
      if (this.amount > 0) {
        this.deposit()
      }
    },
    async onConfirm() {
      this.showConfirmModal = false
      this.depositReceipt = await this.ethereumGateway.contract.depositERC20(
        this.weiAmount,
        this.ETHEREUM_CONTRACT_ADDR,
        { gasLimit: this.gas }
      )
      this.putTxHash(this.depositReceipt.hash, 'deposit')
      // alert('Please wait up to 30min for deposit to complete.') //Modal 3 -- While this.busy add status bar here after clicking ok: $TICKER Deposit Awaiting Confirmation
      this.showCompleteModal = true
    },
    onComplete: function() {
      this.showCompleteModal = false
      this.depositHash = this.depositReceipt.hash
    },
    showWithdraw: function() {
      this.showWithdrawModal = true
    },
    onWithdraw: function(amount) {
      this.showWithdrawModal = false
      this.amount = amount
      if (this.amount) {
        this.withdrawERC20()
      }
    },
    async onConfirmWithdraw() {
      this.showConfirmWithdraw = false
      await this._withdrawCoinsFromMainNetGateway(this.withdrawReceipt)
    },
    onWithdrawComplete: function() {
      this.showConfirmWithdrawComplete = false
      this.withdrawalHash = this.withdrawReceipt.hash
    },
    async onSignForeign() {
      this.showSignForeign = false
      const signer = getMetamaskSigner(this.web3js.currentProvider)
      const plasmaEthSigner = new EthersSigner(signer)
      const hash = soliditySha3(
        {
          type: 'address',
          value: this.user.dappchainAddress.toLowerCase().slice(2)
        },
        {
          type: 'address',
          value: this.ethereumAddress.slice(2)
        }
      )
      //console.log(this.ethereumAddress + ' <-- Ethereum Address')
      //console.log(this.user.dappchainAddress + ' <-- Loom Address')
      //console.log(hash + ' <-- hash produced from addresses')
      //console.log('PlasmaEthSigner containing the current Ethereum address:')
      //console.log(plasmaEthSigner)
      const foreignAccountSig = await plasmaEthSigner.signAsync(hash)
      const signatureString = foreignAccountSig.toString('hex')
      //sendHexSig(signatureString)
      console.log('Hex Signature passed to backend')
      //console.log(signatureString)
      await this.sendHexSig(signatureString)
    },
    onMappingConfirm: function() {
      this.showWaitMappingConfirm = false
      window.location.reload(true)
    },
    onRegisterWallet: function() {
      this.showRegisterWallet = false
      window.location.reload(true)
    },
    onStuck: function() {
      this.showStuckModal = false
    },
    async putTxHash(hash, method) {
      var webDataUrl =
        this.$store.state.WebsiteInterfaceUrl +
        '?pageType=putTxHash&txHash=' +
        hash +
        '&method=' +
        method
      axios
        .get(webDataUrl)
        .then(response => {
          if (response.data.toLowerCase() == 'Txn Hash Saved 1 None') {
            //refresh
            console.log('Tx Hash Saved')
          }
        })
        .catch(e => {
          throw new Error(e)
        })
    },
    async confirmLocalMapping() {
      const sleep = milliseconds => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
      const delayAndTryAgain = async () => {
        await sleep(30000)
        //do stuff
        if (this.iteration <= 10) {
          this.iteration++
          this.confirmLocalMapping()
        }
      }
      var webDataUrl =
        this.$store.state.WebsiteInterfaceUrl +
        '?pageType=pingForLocalMappingConfirmation&ethAddress=' +
        this.ethereumAddress
      axios
        .get(webDataUrl)
        .then(response => {
          if (response.data.toLowerCase() == 'address mapping confirmed!') {
            //refresh
            this.busy = false
          }
        })
        .catch(e => {
          throw new Error(e)
        })
      //wait and try again
      console.log('Waiting For Mapping Confirmation ' + this.iteration)
      delayAndTryAgain()
    },
    async sendHexSig(sig) {
      var webDataUrl =
        this.$store.state.WebsiteInterfaceUrl +
        '?pageType=localAccountSigner&u=' +
        this.user.platformHandle +
        '&s=' +
        sig
      axios
        .get(webDataUrl)
        .then(response => {
          this.showWaitMappingConfirm = true
          console.log(response.data)
          this.confirmLocalMapping()
        })
        .catch(e => {
          throw new Error(e)
        })
    },
    async signForeign() {
      this.busy = true
      this.showSignForeign = true //Modal 7
    },
    async manageAccountMapping() {
      const client = this.loomClient
      client.on('error', console.error)
      const callerAddress = await this._setupSigner(
        client,
        this.web3js.currentProvider
      )
      let loomProvider = await this._createLoomProvider(client, callerAddress)
      this.web3Loom = new Web3(loomProvider)
      this.loomProvider = new ethers.providers.Web3Provider(
        this.web3Loom.currentProvider
      )
      let accountMapping = await this._loadMapping(callerAddress, client)
      if (accountMapping) {
        this.loomWalletAddr = accountMapping.loom.toString().split(':')[1]
        this.hasAccountMapping = true
      } else {
        //sign new mapping and send to server
        await this.signForeign()
      }
    },
    async _loadMapping(ethereumAccount, client) {
      const mapper = await AddressMapper.createAsync(client, ethereumAccount)
      let accountMapping = { ethereum: null, plasma: null }
      try {
        const mapping = await mapper.getMappingAsync(ethereumAccount)
        accountMapping = {
          ethereum: mapping.from,
          loom: mapping.to
        }
      } catch (error) {
        if (!error.data.toString().includes('failed to map address')) {
          console.error(error)
        }
        accountMapping = null
      } finally {
        mapper.removeAllListeners()
      }
      return accountMapping
    },
    async _createLoomProvider(client, callerAddress) {
      const dummyKey = CryptoUtils.generatePrivateKey()
      const publicKey = CryptoUtils.publicKeyFromPrivateKey(dummyKey)
      const dummyAccount = LocalAddress.fromPublicKey(publicKey).toString()
      const loomProvider = new LoomProvider(
        client,
        dummyKey,
        () => client.txMiddleware
      )
      loomProvider.setMiddlewaresForAddress(
        callerAddress.local.toString(),
        client.txMiddleware
      )
      loomProvider.callerChainId = callerAddress.chainId
      // remove dummy account
      loomProvider.accounts.delete(dummyAccount)
      loomProvider._accountMiddlewares.delete(dummyAccount)
      return loomProvider
    },
    async _setupSigner(plasmaClient, provider) {
      const signer = getMetamaskSigner(provider)
      const ethAddress = await signer.getAddress()
      const callerAddress = new Address(
        'eth',
        LocalAddress.fromHexString(ethAddress)
      )
      plasmaClient.txMiddleware = [
        new NonceTxMiddleware(callerAddress, plasmaClient),
        new SignedEthTxMiddleware(signer)
      ]
      return callerAddress
    },
    async manageAccountMappingOld() {
      const signer = getMetamaskSigner(this.web3js.currentProvider)
      const ethereumAddress = Address.fromString(`eth:${this.ethereumAddress}`)
      const plasmaEthSigner = new EthersSigner(signer)
      const privateKey = CryptoUtils.generatePrivateKey()
      const publicKey = CryptoUtils.publicKeyFromPrivateKey(privateKey)
      const loomWalletAddr = new Address(
        this.loomClient.chainId,
        LocalAddress.fromPublicKey(publicKey)
      )
      this.hasAccountMapping = await this.checkAccountMapping(
        ethereumAddress,
        loomWalletAddr
      )
      this.loomClient.txMiddleware = createDefaultTxMiddleware(
        this.loomClient,
        CryptoUtils.B64ToUint8Array(privateKey)
      )
      const provider = new LoomProvider(this.loomClient, privateKey)
      const web3Provider = new Web3(provider)
      this.loomProvider = new ethers.providers.Web3Provider(
        web3Provider.currentProvider
      )
      if (this.hasAccountMapping) {
        return true
      }
      alert(
        'Step 1: Sign the next transaction to link your wallet to Cryptoraves'
      )
      try {
        const mapper = await AddressMapper.createAsync(
          this.loomClient,
          loomWalletAddr
        )
        await mapper.addIdentityMappingAsync(
          ethereumAddress,
          loomWalletAddr,
          plasmaEthSigner
        )
        this.loomClient.disconnect()
      } catch (e) {
        if (e.message.includes('Identity mapping already exists.')) {
        } else {
          console.error(e)
        }
        this.loomClient.disconnect()
        return false
      }
    },
    async checkContractMapping() {
      const ownerLoomAddr = Address.fromString(
        `${this.loomClient.chainId}:${this.loomWalletAddr}`
      )
      const gatewayContract = await Contracts.TransferGateway.createAsync(
        this.loomClient,
        ownerLoomAddr
      )
      const foreignContract = Address.fromString(
        `eth:${this.ETHEREUM_CONTRACT_ADDR}`
      )
      var res = await gatewayContract.getContractMappingAsync(foreignContract)
      if (res) {
        alert(
          'Mapped! Ethereum Contract: ' +
            this.ETHEREUM_CONTRACT_ADDR +
            ' is mapped to ' +
            res.to.toString() +
            ' with status pending: ' +
            res.pending
        )
      } else {
        alert(
          'Ethereum Contract: ' +
            this.ETHEREUM_CONTRACT_ADDR +
            ' is not mapped.'
        )
      }
    },
    async checkAccountMappingButton() {
      const ethereumAddress = Address.fromString(`eth:${this.ethereumAddress}`)
      const loomWalletAddr = new Address(
        this.loomClient.chainId,
        this.loomWalletAddr
      )
      await this.checkAccountMapping(ethereumAddress, loomWalletAddr, true)
    },
    async checkAccountMapping(ethAddr, loomAddr, msg = false) {
      try {
        const mapper = await AddressMapper.createAsync(
          this.loomClient,
          loomAddr
        )
        var hasAccountMapping = await mapper.hasMappingAsync(ethAddr)
        if (hasAccountMapping) {
          var mappings = await mapper.getMappingAsync(ethAddr)
          if (msg) {
            alert(
              'Loom address: ' +
                mappings.to.local.toString() +
                ' is mapped to Eth Address: ' +
                mappings.from.toString().split(':')[1]
            )
          } else {
            this.loomWalletAddr = mappings.to.toString().split(':')[1]
          }
        }
        return this.loomWalletAddr
      } catch (e) {
        console.error(e)
      }
      return false
    },

    async initLoom() {
      let client
      if (window.ethereum.networkVersion == 1 || this.forceLive) {
        this.live = true
        client = new Client(
          'default',
          'wss://plasma.dappchains.com/websocket',
          'wss://plasma.dappchains.com/queryws'
        )
      } else {
        this.live = false
        client = new Client(
          'extdev-plasma-us1',
          'wss://extdev-plasma-us1.dappchains.com/websocket',
          'wss://extdev-plasma-us1.dappchains.com/queryws'
        )
      }
      this.loomClient = client

      await this.manageAccountMapping()
    },
    async initContracts() {
      const tokenABI = [
        'function balanceOf(address who) external view returns (uint256)',
        'function approve(address spender, uint256 value) external returns (bool) @50000',
        'function transfer(address to, uint256 value) external returns (bool) @30000',
        'event Transfer(address indexed from, address indexed to, uint256 value)'
      ]
      try {
        this.ethereumToken = new ethers.Contract(
          this.ETHEREUM_CONTRACT_ADDR,
          tokenABI,
          this.ethereumProvider.getSigner()
        )
      } catch (e) {
        console.log(e)
        window.location.reload(true)
      }
      this.layer2Token = new ethers.Contract(
        this.LOOM_CONTRACT_ADDR,
        tokenABI,
        this.loomProvider.getSigner()
      )
      this.ethereumGateway = await this.getEthereumGatewayContract()
      this.loomGateway = await Contracts.TransferGateway.createAsync(
        this.loomClient,
        Address.fromString('eth:' + this.ethereumAddress)
      )
    },
    async transportIndicator(verified) {
      var webDataUrl =
        this.$store.state.WebsiteInterfaceUrl +
        '?pageType=depWithdrawindicator&p=' +
        this.user.platformHandle +
        '&t=' +
        this.user.ticker +
        '&v=' +
        verified
      axios
        .get(webDataUrl)
        .catch(e => {
          throw new Error(e)
        })
    },
    async loadWebData() {
      var webDataUrl =
        this.$store.state.WebsiteInterfaceUrl +
        '?pageType=getweb3PortalData&ethAddress=' +
        this.ethereumAddress
      axios
        .get(webDataUrl)
        .then(response => {
          let res = response.data
          // JSON responses are automatically parsed.
          this.user = res.user
          if (!this.user) {
            this.showRegisterWallet = true
            return 0
          }
          this.balances = res.balances
          this.tickers = res.tickers
          if (this.tickers) {
            if (!this.tickers.includes(this.ticker)) {
              this.ticker = this.tickers[0]
            }
            this.tickerSelect(this.ticker)
          }
        })
        .catch(e => {
          throw new Error(e)
        })
    },
    async tickerSelect(option) {
      try {
        event.stopPropagation()
      } catch (e) {}
      this.isOpen = false
      this.ticker = option
      for (var i = 0; i < this.tickers.length; i++) {
        if (this.balances[i].ticker == this.ticker) {
          this.ETHEREUM_CONTRACT_ADDR = this.balances[i].ethContractAddress
          this.ETHEREUM_CONTRACT_OWNER_ADDR = this.balances[
            i
          ].ethContractOwnerAddress
          this.LOOM_CONTRACT_ADDR = this.balances[i].loomContractAddress
          this.NUM_DECIMALS = this.balances[i].decimals
          this.TOTAL_SUPPLY = this.balances[i].totalSupply
          this.TOKEN_IMAGE_URL = this.balances[i].tokenImgUrl
          this.coinMultiplier = new BN(10).pow(new BN(this.NUM_DECIMALS))
          if (this.ready) {
            await this.initContracts()
            await this.updateBalances()
          }
        }
      }
    },
    async goBlockExplorer(link) {
      window.open(link)
    },
    // Returns a new wrapper for the Ethereum Gateway contract
    async getEthereumGatewayContract() {
      const networkId = await this.web3js.eth.net.getId()
      let version
      switch (networkId) {
        case 1: // Ethereum Mainnet
          this.eth2loomGatewayAddress =
            '0xe080079ac12521d57573f39543e1725ea3e16dcc'
          this.ethBlockexplorerUrl =
            'https://etherscan.io/address/' + this.ethereumAddress
          this.loomBlockexplorerUrl =
            'https://basechain-blockexplorer.dappchains.com/address/' +
            this.loomWalletAddr +
            '/transactions'
          version = 1
          break

        case 4: // Rinkeby
          this.eth2loomGatewayAddress =
            '0x9c67fD4eAF0497f9820A3FBf782f81D6b6dC4Baa'
          this.ethBlockexplorerUrl =
            'https://rinkeby.etherscan.io/address/' + this.ethereumAddress
          this.loomBlockexplorerUrl =
            'https://extdev-blockexplorer.dappchains.com/address/' +
            this.loomWalletAddr +
            '/transactions'
          version = 2
          break

        default:
          throw new Error(
            'Ethereum Gateway is not deployed on network ' + networkId
          )
      }
      /*
      * If you're running `loom-js` in Node.js, change the following line to something like:
      * const signer = new OfflineWeb3Signer(web3, account)
      */
      const ethereumGatewayContract = await createEthereumGatewayAsync(
        version,
        this.eth2loomGatewayAddress, // In this example, we're instantiating the Ethereum transfer gateway
        this.ethereumProvider.getSigner()
      )
      return ethereumGatewayContract
    },
    async addEventListeners() {
      let ethereumReceiveFilter = this.ethereumToken.filters.Transfer(
        null,
        this.ethereumAddress
      )
      this.ethereumToken.on(ethereumReceiveFilter, () => {
        this.updateBalances()
        if (this.withdrawalHash) {
          this.busy = false
          this.withdrawalHash = null
        }
      })

      let ethereumSendFilter = this.ethereumToken.filters.Transfer(
        this.ethereumAddress,
        null
      )
      this.ethereumToken.on(ethereumSendFilter, () => {
        this.updateBalances()
      })

      let loomReceiveFilter = this.layer2Token.filters.Transfer(
        null,
        this.loomWalletAddr
      )
      this.layer2Token.on(loomReceiveFilter, () => {
        this.updateBalances()
        this.showCompleteModal = false
        if (this.depositHash) {
          this.busy = false
          this.depositHash = null
        }
      })
      let loomSendFilter = this.layer2Token.filters.Transfer(
        this.loomWalletAddr,
        null
      )
      this.layer2Token.on(loomSendFilter, () => {
        this.updateBalances()
      })
    },

    async updateBalances() {
      const ethereumBalance = await this.ethereumToken.balanceOf(
        this.ethereumAddress,
        { from: this.ethereumAddress }
      )
      this.ethereumBalance = Number(
        ethers.utils.formatUnits(ethereumBalance.toString(), this.NUM_DECIMALS)
      )
      const loomBalance = await this.layer2Token.balanceOf(this.loomWalletAddr)
      this.loomBalance = Number(
        ethers.utils.formatUnits(loomBalance.toString(), this.NUM_DECIMALS)
      )
    },
    async deposit() {
      this.busy = true
      this.weiAmount = ethers.utils.parseUnits(
        this.amount.toString(),
        this.NUM_DECIMALS
      )
      await this.ethereumToken.approve(
        this.ethereumGateway.contract.address,
        this.weiAmount.toString(),
        { gasLimit: this.gas }
      )
      this.showConfirmModal = true
    },
    async resumeWithdrawal() {
      // const receipt = await this._getWithdrawalReceipt()
      // if (receipt !== undefined) {
      //   await this._withdrawCoinsFromMainNetGateway(receipt)
      // }
      try {
        this.withdrawReceipt = await this._getWithdrawalReceipt()
        if (this.withdrawReceipt !== undefined) {
          await this._withdrawCoinsFromMainNetGateway(this.withdrawReceipt)
        }
      } catch (e) {
        console.log('-- Withdrawal Timeout --')
      }
    },
    async withdrawERC20() {
      this.busy = true
      const amount = this.amount
      //this._approveFee()
      console.log('Transferring to Loom Gateway.')
      const res = await this._transferCoinsToLoomGateway(amount)
      if (res == 'Resume Withdrawal') {
        return false
      }
      this.showTransferStatus = false
      console.log('Getting withdrawal receipt')
      try {
        this.withdrawReceipt = await this._getWithdrawalReceipt()
      } catch (e) {
        console.log('-- Delayed Withdrawal? -- ')
        console.log(e)
      }
      // alert('Now confirm the next transaction to get your tokens.') //Modal 6
      this.showConfirmWithdraw = true
      console.log('Withdrawing from MainNet Gateway')
      this.busy = false
      // await this._withdrawCoinsFromMainNetGateway(receipt)
      // this.withdrawalHash = receipt.hash
    },
    async _approveFee() {
      const EthCoin = Contracts.EthCoin
      this.ethCoin = await EthCoin.createAsync(
        this.loomClient,
        Address.fromString('eth:' + this.ethereumAddress)
      )
      await this.ethCoin.approveAsync(
        this.loomGateway.address,
        new BN(this.gas)
      )
    },
    async _withdrawCoinsFromMainNetGateway(receipt) {
      const gatewayContract = this.ethereumGateway
      const tx = await gatewayContract.withdrawAsync(receipt, {
        gasLimit: this.gas
      })
      console.log(`Tokens withdrawn from MainNet Gateway.`)
      console.log(`Ethereum tx hash: ${tx.hash}`)
      // alert(
      //   'Token withdraw request processed. Please allow up to 30 min for tokens to arrive in your account.' //While this.busy status bar here after clcking ok: $TICKER Withdraw Awaiting Confirmation
      // )
      this.showConfirmWithdrawComplete = true
    },
    async _getWithdrawalReceipt() {
      const userLocalAddr = Address.fromString(
        this.loomClient.chainId + ':' + this.loomWalletAddr
      )
      const gatewayContract = this.loomGateway
      const receipt = await gatewayContract.withdrawalReceiptAsync(
        userLocalAddr
      )
      return receipt
    },
    async _transferCoinsToLoomGateway(amount) {
      const amountInWei = ethers.utils
        .parseUnits(amount.toString(), this.NUM_DECIMALS)
        .toString()

      const ethAddress = this.ethereumAddress
      const ownerMainnetAddr = Address.fromString('eth:' + ethAddress)
      var gatewayContract = this.loomGateway
      const dAppChainGatewayAddr = this.web3Loom.utils.toChecksumAddress(
        this.loomGateway.address.local.toString()
      )

      console.log('Approving Loom Transfer Gateway to take the coins.')
      var res = await this.layer2Token.approve(dAppChainGatewayAddr, amountInWei)
      this.withdrawalHash = res.hash
      const timeout = 60 * 5000
      const loomCoinContractAddress = this.LOOM_CONTRACT_ADDR
      const tokenAddress = Address.fromString(
        this.loomClient.chainId + ':' + loomCoinContractAddress
      )
      const mainNetContractAddress = this.ETHEREUM_CONTRACT_ADDR
      const receiveSignedWithdrawalEvent = new Promise((resolve, reject) => {
        let timer = setTimeout(
          () =>
            reject(
              new Error('Timeout while waiting for withdrawal to be signed'),
              this.resumeWithdrawal()
            ),
          timeout
        )
        const listener = event => {
          const tokenEthAddress = Address.fromString(
            'eth:' + mainNetContractAddress
          )
          if (
            event.tokenContract.toString() === tokenEthAddress.toString() &&
            event.tokenOwner.toString() === ownerMainnetAddr.toString()
          ) {
            clearTimeout(timer)
            timer = null
            gatewayContract.removeAllListeners(
              Contracts.TransferGateway.EVENT_TOKEN_WITHDRAWAL
            )
            console.log(
              'Oracle signed tx ',
              CryptoUtils.bytesToHexAddr(event.sig)
            )
            resolve(event)
          }
        }
        gatewayContract.on(
          Contracts.TransferGateway.EVENT_TOKEN_WITHDRAWAL,
          listener
        )
      })
      try {
        await gatewayContract.withdrawERC20Async(
          new BN(amountInWei, 10),
          tokenAddress,
          ownerMainnetAddr
        )
      } catch (e) {
        console.log('-- Pending Withdrawal Already Exists --')
        /*alert(
          'The blockchain says hold up.  Please sign the next transaction to unclog it and wait 30 minutes before the next withdraw attempt.'
        )*/
        this.showStuckModal = true
        this.busy = false
        await this.resumeWithdrawal()
        return 'Resume Withdrawal'
      }
      // Note for Bryan : We got res1 = Undefined Value here//
      // alert('Please wait a few minutes for the next prompt.') //Modal 5 -- show a status bar while waiting
      // alert(this.busy)
      this.showTransferStatus = true
      console.log('Logging withdrawal.')
      await this.putTxHash(this.withdrawalHash, 'withdraw')
      this.busy = true
      await receiveSignedWithdrawalEvent
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:Bold');
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url('https://fonts.googleapis.com/css?family=Montserrat:Bold');
/* Banner */
.user-title {
  position: absolute;
  margin: 20px;
  right: 10px;
  text-align: center;
}
.user-title-1 {
  font-size: 20px;
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: bold;
  color: rgb(0, 38, 101);
}
.user-title-link {
  font-size: 15px;
  color: rgb(0, 38, 101);
  font-family: 'Montserrat';
  text-align: center;
  line-height: 1.2em;
  margin: 20px auto auto auto;
}
/* Token List */
.token-list-title {
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Montserrat';
  color: rgb(0, 38, 101);
  line-height: 1.6;
  text-align: center;
}
.token-list {
  position: relative;
  margin: auto;
  z-index: 2;
  display: block;
  width: 200px;
  height: 40px;
  padding: 0 20px;
  background-color: rgb(2, 49, 124);
  border-radius: 10px;
  font-family: 'Roboto Condensed';
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
  color: white;
  cursor: pointer;
}
.token-list:after {
  opacity: 0.5;
  float: right;
  content: '▼';
}
.token-list:hover:after {
  opacity: 1;
}
.token-options {
  position: absolute;
  z-index: 1;
  margin-top: 3px;
  left: 0;
  width: 200px;
  background-color: rgb(2, 49, 124);
  color: white;
  border-radius: 10px;
}
.token-option {
  cursor: pointer;
  padding: 5px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  font-family: 'Roboto Condensed';
  font-weight: bold;
  font-size: 15px;
  line-height: 1.5;
}

/* Hover state */
.token-option:hover {
  opacity: 0.7;
}

/* Reset last child for a nice layout */
.token-option:last-child {
  border-bottom: none;
}

.user-transaction-section {
  margin-top: 100px;
}
.portfolio-user {
  padding-top: 100px;
}
.portfolio-userwelcome {
  margin-bottom: 10px;
  font-size: 40px;
  font-family: 'Montserrat';
  color: rgb(0, 38, 101);
  line-height: 1.6;
  text-align: center;
}
.portfolio-userimg {
  background: white;
  display: flex;
  margin: auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid lightgrey;
  animation: avatar-from-effect 2s infinite;
  transition: all 0.5s ease-out;
}
@keyframes avatar-from-effect {
  0% {
    box-shadow: 0 0 0 0px rgb(43, 96, 222, 0.8);
  }
  100% {
    box-shadow: 0 0 0 15px rgb(43, 96, 222, 0);
  }
}

.portfolio-userimg img {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: auto;
}

.portfolio-userimg img:hover {
  cursor: pointer;
  opacity: 0.7;
}

.address-link:hover {
  cursor: pointer;
  text-decoration: underline;
}
.user-transaction-section-buttons {
  font-family: 'Roboto Condensed';
  text-align: center;
  display: flex;
  flex-direction: column;
}

.btn {
  font-family: 'Montserrat';
  margin: 30px auto 30px auto;
  width: 150px;
  font-size: 15px;
  font-weight: bold;
  border: none;
}
.btn-danger {
  background: #9a1bf7;
}
.btn-success {
  background: rgb(18, 220, 66);
}
.btn-arrow-right,
.btn-arrow-left {
  position: relative;
  padding-left: 18px;
  padding-right: 18px;
}
.btn-arrow-right {
  padding-left: 36px;
}
.btn-arrow-left {
  padding-right: 36px;
}
.btn-arrow-right:before,
.btn-arrow-right:after,
.btn-arrow-left:before,
.btn-arrow-left:after {
  /* make two squares (before and after), looking similar to the button */
  content: '';
  position: absolute;
  top: 5px; /* move it down because of rounded corners */
  width: 22px; /* same as height */
  height: 22px; /* button_outer_height / sqrt(2) */
  background: inherit; /* use parent background */
  border: inherit; /* use parent border */
  border-left-color: transparent; /* hide left border */
  border-bottom-color: transparent; /* hide bottom border */
  border-radius: 0px 4px 0px 0px; /* round arrow corner, the shorthand property doesn't accept "inherit" so it is set to 4px */
  -webkit-border-radius: 0px 4px 0px 0px;
  -moz-border-radius: 0px 4px 0px 0px;
}
.btn-arrow-right:before,
.btn-arrow-right:after {
  transform: rotate(
    45deg
  ); /* rotate right arrow squares 45 deg to point right */
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
}
.btn-arrow-left:before,
.btn-arrow-left:after {
  transform: rotate(
    225deg
  ); /* rotate left arrow squares 225 deg to point left */
  -webkit-transform: rotate(225deg);
  -moz-transform: rotate(225deg);
  -o-transform: rotate(225deg);
  -ms-transform: rotate(225deg);
}
.btn-arrow-right:before,
.btn-arrow-left:before {
  /* align the "before" square to the left */
  left: -11px;
}
.btn-arrow-right:after,
.btn-arrow-left:after {
  /* align the "after" square to the right */
  right: -11px;
}
.btn-arrow-right:after,
.btn-arrow-left:before {
  /* bring arrow pointers to front */
  z-index: 1;
}
.btn-arrow-right:before,
.btn-arrow-left:after {
  /* hide arrow tails background */
  background-color: white;
}
.link,
.link a {
  cursor: pointer;
  text-decoration: underline;
  color: rgb(0, 38, 101);
  font-family: 'Montserrat';
  text-align: center;
}
.instruction-link {
  margin: 50px auto 5px auto;
  font-size: 15px;
}
.stuck-link {
  margin: 20px auto 20px auto;
  font-size: 10px;
}
.register-wallet {
  height: calc(100vh - 225px);
}
@media only screen and (max-width: 991px) {
  .user-title {
    position: relative;
    margin: 20px;
  }
  .portfolio-user {
    padding-top: 50px;
  }
}
@media only screen and (max-width: 404px) {
  .portfolio-userwelcome {
    font-size: 30px;
  }
}
</style>
