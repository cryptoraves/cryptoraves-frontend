<template>
  <div id="app">
    <AppHeader/>
    <nuxt />
    <AppFooter/>  
  </div>
</template>
<script>
import AppHeader from '../components/layout/AppHeader'
import AppFooter from '../components/layout/AppFooter'
import Vue from 'vue'

import { ethers } from 'ethers'
import Web3 from 'web3'
import axios from 'axios'

Vue.filter('truncate', function(value) {
  if (!value) return ''
  value = value.substring(0, 6)
  return value
})
Vue.filter('comma', function(value) {
  if (!value) return ''
  //value = value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  //value = value.toLocaleString();
  //return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  return parseFloat(value).toLocaleString(undefined, {
    maximumFractionDigits: 10
  })
})
export default {
  components: {
    AppHeader,
    AppFooter
  },
  props: {
    source: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    drawer: null,
    currentScroll: 0,
    web3Login: false,
    ethereumProvider: null,
    web3js: null,
    ethereumAddress: null,
    userName: null,
    referrer: null
  }),
  async mounted() {
    //this.web3Login=this.$store.state.web3Login
    if (!this.web3Login) {
      //this.web3Login = await this.initWeb3()
    }
    
    if (this.ethereumAddress) {
      //check for user
      this.userName = await this.loadUserFromAddress()

      //check if referrer is outside cryptoraves
      if (document.referrer.indexOf(
        window.location.hostname
      ) >= 0) {
        return 0
      }

      //if yes go to user's portfolio page
      /*if (this.userName) {
        this.$router.push({
          name: 'PortfolioPage',
          query: {
            user: this.userName
          }
        })
      }*/
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    async loadUserFromAddress() {
      var response = null
      try {
        var webDataUrl =
          this.$store.state.WebsiteInterfaceUrl +
          '?pageType=getweb3PortalData&ethAddress=' +
          this.ethereumAddress
        response = await axios.get(webDataUrl)
      } catch(e) {
        throw new Error(e)
      }

      try {
        return response.data.user['platformHandle']
      } catch(e) {
        //console.log('No record for wallet address '+this.ethereumAddress)
        return null
      }
    },
    async initWeb3() {
        let web3js
        if (window.ethereum) {
          window.web3 = new Web3(ethereum)
          web3js = new Web3(ethereum)
          await ethereum.enable()
        } else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider)
          web3js = new Web3(window.web3.currentProvider)
        }
        if (web3js) {
          this.web3js = web3js
          this.ethereumProvider = new ethers.providers.Web3Provider(
            web3js.currentProvider
          )
          this.ethereumAddress = (await this.ethereumProvider.listAccounts())[0]

          window.ethereum.on('accountsChanged', function() {
            const sleep = milliseconds => {
              return new Promise(resolve => setTimeout(resolve, milliseconds))
            }
            sleep(1000)
            location.reload()
          })

          return true
        } else {
          return false
        }
      },
    handleScroll(e) {
      // Any code to be executed when the window is scrolled
      if (this.currentScroll > e.srcElement.scrollingElement.scrollTop) {
        //scroll up
        if (e.srcElement.scrollingElement.scrollTop <= 100) {
          this.showHeader = false
        }
      } else {
        //scroll down
        if (e.srcElement.scrollingElement.scrollTop > 100) {
          this.showHeader = true
        }
      }
      this.currentScroll = e.srcElement.scrollingElement.scrollTop
    }
  }
}
</script>
<style lang='scss'>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:Bold');
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url('https://fonts.googleapis.com/css?family=Montserrat:Bold');
@import url('../assets/css/font-awesome.min.css');
@import url('../assets/css/style.css');
@import url('../assets/css/responsive.css');
</style>
