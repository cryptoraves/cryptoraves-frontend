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

            <div v-if="userName">
              <img
                
                class="table-img"
                :src="user.imgUrl"
                :title="'Welcome '+userName+' -- Click To See Your Portfolio'"
                @click="goPortfolio(userName)"

              >
              {{ userName }}
            </div>
            <div v-else>
              <div>
                <img
                  class="table-img"
                  src="../../assets/metamask.png"
                  title="Connect Your Wallet To Login"
                  @click="connectWallet()"
                >
                Connect Your Wallet
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  components: {},
  //props: ['user']
  props: {
    userName: {type: String},
    user: {type: Object},
    goPortfolio: {type: Function},
    initWeb3: {type: Function},
    ethereumAddress: {type: String},
    loadUserFromAddress: {type: Function}
  }, 
  methods: {

    goHome(){
      this.$router.push('/')
    },
    async connectWallet(){
      await this.initWeb3()
      this.userName = await this.loadUserFromAddress()

      this.$emit('userLogin', this.user)
      
      
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
