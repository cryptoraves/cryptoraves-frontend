<template>
  <div class="app-header">
    <div class="app-header-container container">
      <div class="row">
        <div class="d-flex col-sm-12 col-lg-2">
          <div class="app-header-logoarea">

              <img
                src="../../assets/img/cryptoraves_Horozontal Alignment_Full Color_JPG.png"
                style="cursor: pointer"
                alt
                @click="goHome()"
              >

          </div>

        </div>
        <div class="d-flex d-flex-right col-lg-4 col-sm-12">

        </div>
        <div class="col-lg-6 col-sm-12 text-right">
          <div class="d-flex d-flex-right form-group mt-3">

            <div v-if="userName" >
              <img

                class="table-img"
                :src="webData.imageUrl"
                :title="'Welcome '+userName+' -- Click To See Your Portfolio'"
                @click="goPortfolio(userName)"

              >
              <a
                class='avatar-space'
                @click='logOut()'
              >Log Out</a>
            </div>
            <div
              v-else
              @click="connectWallet()"
            >
              <div>
                <img
                  class="table-img"
                  src="../../assets/metamask.png"
                  title="Connect Your Wallet To Login"

                >
                <!--a
                  class='avatar-space'
                >Connect Your Wallet</a-->

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import MetamaskHandler from "../../assets/js/metamaskHandler"
import NetworkData from "../../assets/js/networkData"

export default {
  name: 'AppHeader',
  components: {MetamaskHandler},
  //props: ['user']
  props: {
    userName: {type: String},
    webData: {},
    goPortfolio: {type: Function},
  },
  mixins: [MetamaskHandler, NetworkData],
  methods: {

    goHome(){
      this.$router.push('/')
    },
    async connectWallet(){
      const data = await this.initWeb3()

      let res = await this.loadWebDataFromAddress(data.ethereumAddress)
      localStorage.setItem(
        'webData',
        JSON.stringify(res)
      )

      this.web3Data['ethereumAddress'] = data.ethereumAddress
      this.web3Data['contractAddresses'] = this.contractAddresses
      this.web3Data['cryptoravesTokenABI'] = this.cryptoravesTokenABI
      this.web3Data['tokenManagementABI'] = this.tokenManagementABI

      localStorage.setItem(
        'web3Data',
        JSON.stringify(this.web3Data)
      )
      localStorage.setItem('ethereumAddress',this.web3Data.ethereumAddress)
      this.$emit('userLogin', res)


    },
    logOut(){
      localStorage.removeItem('ethereumAddress')
      localStorage.removeItem('webData')
      localStorage.removeItem('web3Data')
      window.location = '/'
    }
  }
}
</script>

<style scoped>
.app-header {
  background-color: white;
  width: 100%;
  height: 100px;
  display: flex;
  box-shadow: 2.5px 4.33px 24px rgba(0, 0, 1, 0.11);
}
.app-header-container {
  margin: auto;
  /* padding: 0px; */
}

.app-header-logoarea,
img {
  width: 270px;
  height: 70px;
  margin: auto;
}
a.avatar-space {
  color:rgb(0, 38, 101);
  cursor: pointer;
}
.app-header-leaderboard {
  font-size: 14px;
  font-family: 'Montserrat';
  font-weight: bold;
  color: rgba(40, 40, 40, 0.8);
  text-align: center;
  margin-left: auto;
  cursor: pointer;
}
.app-header-leaderboard:hover {
  color: blue;
}
@media only screen and (max-width: 1200px) {
  .app-header-leaderboard {
    margin-right: 50px;
  }
}
@media only screen and (max-width: 991px) {
  .app-header-logoarea {
    text-align: center;
  }
  .app-header {
    height: 200px;
  }
  .app-header-leaderboard {
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
}
@media only screen and (min-width: 0px) and (max-width: 767px) {
  .app-header-logoarea {
    text-align: center;
  }
}
.table-img {
  border: 2px solid white;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(8, 169, 255, 0.3);
  -moz-box-shadow: 0px 0px 15px 5px rgba(8, 169, 255, 0.3);
  box-shadow: 0px 0px 15px 5px rgba(8, 169, 255, 0.3);
}
.table-img:hover {
  cursor: pointer;
  opacity: 0.7;
  animation: avatar-from-effect 1s infinite;
}
@keyframes avatar-from-effect {
  0% {
    box-shadow: 0 0 0 0px rgba(205, 136, 57, 0.8);
  }
  100% {
    box-shadow: 0 0 0 15px rgba(205, 136, 57, 0);
  }
}
</style>
