<template>
  <div id="app">
    <AppHeader 
      v-on:userLogin="handleUserLogin()"
      :goPortfolio="this.goPortfolio"
      :webData="webData"
      :userName="userName"
    />
    <RegisterAddressModal
      v-if="showRegisterAddressModal"
      @confirm="onConfirm"
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

import RegisterAddressModal from '../components/RegisterAddressModal'

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
    RegisterAddressModal
  },
  props: {
    source: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    showRegisterAddressModal: false,
    currentScroll: 0,
    web3js: null,
    ethereumAddress: null,
    webData: null,
    userName: ''
  }),
  async mounted() {
    
   
    
    this.web3Data = JSON.parse(localStorage.getItem('web3Data'))
    this.webData = JSON.parse(localStorage.getItem('webData'))

    if(this.webData){
      this.userName = this.webData.platformHandle
    }
    
    
  },
  created() {

    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    
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
    handleUserLogin(){
      this.webData = JSON.parse(localStorage.getItem('webData'))
      if(!this.userName){
        try {
          this.userName = this.webData.user.platformHandle
        }catch(e){}
      } 
      if(this.userName) {
        
        this.goPortfolio()
      } else {
        this.showRegisterAddressModal = true
      }
    },
    goPortfolio() {
      this.$router.push({ name: 'PortfolioPage', query: { user: this.userName } })
    },
    onConfirm() {
      this.showRegisterAddressModal = false
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
