import Web3 from 'web3'
import { ethers } from 'ethers'

export default {
  components: {},
  data() {
    return {
      web3Data: {},
      ethereumProvider: null
    }
  },
  methods: {
    async getEthers(){
      return ethers
    },
    async getProvider(){
      let web3js
      if (window.ethereum) {
        ethereum.autoRefreshOnNetworkChange = false
        window.web3 = new Web3(ethereum)
        web3js = new Web3(ethereum)
        await ethereum.enable()
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
        web3js = new Web3(window.web3.currentProvider)
      }

      if (web3js) {
        return new ethers.providers.Web3Provider(
          web3js.currentProvider
        )
      }

    },
    async initWeb3() {
      let web3js
      if (window.ethereum) {
        ethereum.autoRefreshOnNetworkChange = false
        window.web3 = new Web3(ethereum)
        web3js = new Web3(ethereum)
        await ethereum.enable()
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
        web3js = new Web3(window.web3.currentProvider)
      } else {
        // throw new Error('Please enable Metamask and refresh.')
        this.showEnableMetaMask = true
        return false
      }

      if (web3js) {
        this.web3js = web3js
        this.ethers = ethers

        this.ethereumProvider = new this.ethers.providers.Web3Provider(
          web3js.currentProvider
        )
        this.web3Data['ethereumAddress'] = (await this.ethereumProvider.listAccounts())[0]

        
        window.ethereum.on('accountsChanged', function() {
          const sleep = milliseconds => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
          }
          sleep(1000)
          location.reload()
        })
        window.ethereum.on('chainChanged', chainId => {
          chainId
          location.reload()
        })
      }

      let networkId
      try {
        networkId = await web3js.eth.net.getId()
      } catch(e) {
        console.log(e)
      }
      this.web3Data['l1NetworkType'] = await web3.eth.net.getNetworkType()

      if (networkId==344435){

        this.web3Data['l2NetworkType'] = 'SKALE Bob Testnet' //https://dev-testnet-v1-1.skalelabs.com 
        this.web3Data['l2BlockExplorerUrl'] = 'https://explorer.skale.network/'
        this.web3Data['l1BlockExplorerUrl'] = 'https://rinkeby.etherscan.io/'
        this.web3Data['l1NetworkType'] = 'rinkeby'
        this.web3Data['l2Provider'] = this.ethereumProvider
      } else if (networkId==54173){
        this.web3Data['l2NetworkType'] = 'SKALE Testnet' //https://dev-testnet-v1-0.skalelabs.com 
        this.web3Data['l2BlockExplorerUrl ']= 'https://explorer.skale.network/'
        this.web3Data['l1BlockExplorerUrl'] = 'https://rinkeby.etherscan.io/'
        this.web3Data['l2Provider'] = this.web3Data['ethereumProvider']
      } else if (networkId==80001){
        this.web3Data['l2NetworkType'] = 'Matic Testnet'
        this.web3Data['l2BlockExplorerUrl']= 'https://explorer-mumbai.maticvigil.com//'
        this.web3Data['l1BlockExplorerUrl'] = 'https://goerli.etherscan.io/'
        this.web3Data['l1NetworkType'] = 'goerli'
        this.web3Data['l2Provider'] = this.ethereumProvider
      } else {
        
        if(this.web3Data['l1NetworkType'] == 'main'){
          this.web3Data['l1BlockExplorerUrl'] = 'https://etherscan.io/'
          this.web3Data['l1Provider'] = this.ethereumProvider
        }
        //tie georli to Matic testnet
        if(this.web3Data['l1NetworkType'] == 'goerli'){

          
          this.web3Data['l1BlockExplorerUrl'] = 'https://goerli.etherscan.io/'
          this.web3Data['l2NetworkType'] = 'Matic Testnet'
          this.web3Data['l2BlockExplorerUrl'] = 'https://explorer.testnet2.matic.network/'
          this.web3Data['l1BlockExplorerUrl'] = 'https://goerli.etherscan.io/'
          this.web3Data['l1NetworkType'] = 'goerli'
          this.web3Data['l2Provider'] = new Web3.providers.HttpProvider("https://rpc-mumbai.maticvigil.com/")
          this.web3Data['l1Provider'] = this.ethereumProvider
        }
        if(this.l1NetworkType == 'rinkeby'){
          this.web3Data['l1BlockExplorerUrl'] = 'https://rinkeby.etherscan.io/'
          this.web3Data['l1Provider'] = this.ethereumProvider
        }
      }
      return this.web3Data 
    }
  }
}