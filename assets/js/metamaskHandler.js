import Web3 from 'web3'
import { ethers } from 'ethers'

export default {
  components: {},
  data() {
    return {
      ethereumAddress: null,
      l1NetworkType: null,
      l1BlockExplorerUrl: null,
      l1Provider:null,
      l2NetworkType: null,
      l2BlockExplorerUrl: null,
      l2Provider:null,
      signer: null
    }
  },
  methods: {
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
        this.ethereumProvider = new ethers.providers.Web3Provider(
          web3js.currentProvider
        )
        this.signer = this.ethereumProvider.getSigner(0)
        this.ethereumAddress = (await this.ethereumProvider.listAccounts())[0]
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
      this.l1NetworkType = await web3.eth.net.getNetworkType()
      if (networkId==291){
        this.l2NetworkType = 'SKALE Bob Testnet' //https://dev-testnet-v1-1.skalelabs.com 
        this.l2BlockExplorerUrl = 'https://explorer.skale.network/'
        this.l1BlockExplorerUrl = 'https://rinkeby.etherscan.io/'
        this.l2Provider = this.ethereumProvider
      } else if (networkId==54173){
        this.l2NetworkType = 'SKALE Testnet' //https://dev-testnet-v1-0.skalelabs.com 
        this.l2BlockExplorerUrl = 'https://explorer.skale.network/'
        this.l1BlockExplorerUrl = 'https://rinkeby.etherscan.io/'
        this.l2Provider = this.ethereumProvider
      } else if (networkId==80001){
        this.l2NetworkType = 'Matic Testnet'
        this.l2BlockExplorerUrl = 'https://explorer-mumbai.maticvigil.com//'
        this.l1BlockExplorerUrl = 'https://goerli.etherscan.io/'
        this.l1NetworkType = 'goerli'
        this.l2Provider = this.ethereumProvider
      } else {
        
        if(this.l1NetworkType == 'main'){
          this.l1BlockExplorerUrl = 'https://etherscan.io/'
          this.l1Provider = this.ethereumProvider
        }
        //tie georli to Matic testnet
        if(this.l1NetworkType == 'goerli'){

          
          this.l1BlockExplorerUrl = 'https://goerli.etherscan.io/'
          this.l2NetworkType = 'Matic Testnet'
          this.l2BlockExplorerUrl = 'https://explorer.testnet2.matic.network/'
          this.l1BlockExplorerUrl = 'https://goerli.etherscan.io/'
          this.l1NetworkType = 'goerli'
          this.l2Provider = new Web3.providers.HttpProvider("https://rpc-mumbai.maticvigil.com/")
          this.l1Provider = this.ethereumProvider
        }
        if(this.l1NetworkType == 'rinkeby'){
          this.l1BlockExplorerUrl = 'https://rinkeby.etherscan.io/'
          this.l1Provider = this.ethereumProvider
        }
      } 

      
    }
  }
}