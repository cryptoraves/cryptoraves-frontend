<template>
  <div id="app">
    <AppHeader 
      v-on:userLogin="handleUserLogin(user)"
      :user="user"
      :userName="userName"
      :goPortfolio="this.goPortfolio"
      :initWeb3="this.initWeb3"
      :loadUserFromAddress="this.loadUserFromAddress"
      :ethereumAddress="ethereumAddress"
    />
    <nuxt />
    <AppFooter/>  
  </div>
</template>
<app-header  />
<script>
import AppHeader from '../components/layout/AppHeader'
import AppFooter from '../components/layout/AppFooter'
import Vue from 'vue'

import axios from 'axios'

import MetamaskHandler from "../assets/js/metamaskHandler"

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
    AppFooter,
    MetamaskHandler
  },
  props: {
    source: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    userName: null,
    drawer: null,
    currentScroll: 0,
    web3Login: false,
    ethereumProvider: null,
    web3js: null,
    ethereumAddress: null,
    user: null,
    referrer: null
  }),
  mixins: [MetamaskHandler],
  async mounted() {
    //alert(this.$store.state.ethereumAddress)
    
    
    this.ethereumAddress = localStorage.getItem('ethereumAddress')
    //await this.initWeb3()
    
    
    this.user = JSON.parse(localStorage.getItem('user'))
    if(this.user){
      this.userName = this.user.platformHandle
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
        this.user = response.data.user
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
    },
    handleUserLogin(user){
      if(user){
        this.user=user
        //this.$store.commit('setUserData',this.user)
        localStorage.setItem(
          'user',
          JSON.stringify(user)
        )
        localStorage.setItem('ethereumAddress',this.ethereumAddress)
        this.userName = user.platformHandle
        this.goPortfolio(this.userName)
      } else {
        alert('user not registered. Show modal for registration instructions')
      }
    },
    goPortfolio(user) {
      this.$router.push({ name: 'PortfolioPage', query: { user: user } })
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
