<template>
  <div class="confirmation-page">
    <div class="container">
      <div
        v-if="showLoading"
        class="confirmation-loading-img">
        <img
          src="../assets/gif/loading.gif"
          alt >
      </div>
      <div v-else>
        <SectionHeader>Transaction Confirmed!</SectionHeader>
        <div class="d-flex">
          <div class="res-confirmation-amount">{{ Math.round(item.amount / Math.pow(10, item.token.decimals)) | comma }}</div>
        </div>
        <div class="row">
          <div
            v-if="!item.from.userName.includes('Token Launch')"
            class="confirmation-fromsection col-lg-4 col-md-4 col-sm-4"
          >
            <div class="confirmation-userfromimage">
              <img
                v-if="!item.from.userName"
                :src="item.from.imageUrl"
                :title="item.from.userName"
                onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                @click="goPortfolio(item.from.userName)"
              >
              <img
                v-else
                :src="item.from.imageUrl"
                :title="item.from.userName"
                onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                @click="goPortfolio(item.from.userName)"
              >
            </div>
            <div
              v-if="!item.from.userName"
              :title="item.from.userName"
              class="confirmation-userFromTo"
              @click="goPortfolio(item.from.userName)"
            >{{ item.from.userName }}</div>
            <div
              v-else
              :title="item.from.userName"
              class="confirmation-userFromTo"
              @click="goPortfolio(item.from.userName)"
            >{{ item.from.userName }}</div>
          </div>
          <div 
            v-else
            class="confirmation-fromsection col-lg-4 col-md-4 col-sm-4">
            <div class="launch-userfromimage">
              <img
                :src="item.from.imageUrl"
                :title="item.from.userName"
                onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
              >
            </div>
            <div
              :title="item.from.userName"
              class="launch-userFromTo"
            >Token Launch!
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <div class="d-flex">
              <div class="confirmation-amount">{{ Math.round(item.amount / Math.pow(10, item.token.decimals)) | comma }}</div>
            </div>

            <div class="d-flex">
              <AnimatedArrow/>
            </div>
            <div>
              <div class="confirmation-tokenbrandimage">
                <img
                  :src="item.token.tokenBrandImageUrl"
                  :title="item.token.name"
                  onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                  @click="goToken(item.token.symbol)"
                >
              </div>
            </div>
          </div>
          <div class="confirmation-tosection col-lg-4 col-md-4 col-sm-4">
            <div
              :title="item.to.userName"
              class="confirmation-userFromTo"
              @click="goPortfolio(item.to.userName)"
            >{{ item.to.userName }}</div>
            <div class="confirmation-usertoimage">
              <img
                :src="item.to.imageUrl"
                :title="item.to.userName"
                onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                @click="goPortfolio(item.userTo)"
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="confirmation-tokenbrand">
            <div
              v-if="item.token.symbol"
              :title="item.token.symbol"
              class="confirmation-tokenbrand-header"
              @click="goPortfolio(item.token.symbol)"
            >{{ item.ticker }}</div>
            <div
              v-else
              :title="item.token.symbol"
              class="confirmation-tokenbrand-header"
              @click="goPortfolio(item.token.symbol)"
            >{{ item.token.symbol }}</div>
            <div class="confirmation-tokenbrand-text">{{ item.token.symbol }}</div>
            <div 
              v-if="item.token.ercType == 721"
              class="confirmation-tokenbrand-text">#{{ orgTokenId }}</div>
          </div>
        </div>
        <div class="row">
          <div class="confirmation-link col-lg-12 col-md-12 col-sm-12">
            <!--div
              title="Link to Block Explorer"
              class="confirmation-blockurl"
              @click="goBlock(item.blockexplorerUrl + item.txnHash)"
            -->
            <div
              title="Transaction Hash - Click to See on Block Explorer" 
              class="confirmation-blockurl"
              @click="goBlock(item.id)"
            >{{ item.id }}</div>
            <div class="d-flex">
              <img
                v-if="showTweet"
                title="Link to Tweet"
                src="../assets/img/twitter.png"
                @click="goTweet(item.from.userName,item.tweetId) "
              >
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SectionHeader from '../components/ui/SectionHeader'
import AnimatedArrow from '../components/ui/AnimatedArrow'

export default {
  name: 'ComfirmationPage',
  components: {
    SectionHeader,
    AnimatedArrow
  },
  watch:{
      $route (){
        this.getTransaction(this.$route.query.txnId)
      }
  },
  data() {
    return {
      showTweet: true,
      txnId: '',
      item: Object,
      showLoading: true,
      orgTokenId: null,
    }
  },
  created() {
    this.txnId = this.$route.query.txnId
    this.getTransaction(this.txnId)
  },
  methods: {
    async getTransaction(txnId) {
      await axios.post(
        this.$store.state.subgraphUrl, {
          query: '{ transfers( where: {id: "'+txnId+'"}){ id from { id twitterUserId userName cryptoravesAddress imageUrl isManaged isUser dropped tokenId layer1Address } to { id twitterUserId userName cryptoravesAddress imageUrl isManaged isUser dropped tokenId layer1Address } amount token {id cryptoravesTokenId isManagedToken ercType totalSupply name symbol decimals emoji tokenBrandImageUrl } tweetId fromTo } }'
        }
        ).then(response => {
          this.item = response.data.data.transfers[0]
         
          //format original token id
          let idArr = this.item.token.id.split(0)
          this.orgTokenId = idArr[idArr.length-1]

          this.showLoading = false
        }).catch(e => {
          console.log(e)
        })
        //handle import / exports
        if (
          this.item.from.userName == 'Import to Cryptoraves' ||
          this.item.to.userName == 'Export To Mainnet'
        ) {
          this.showTweet = false
        }
    },
    goPortfolio(user) {
      this.$root.$emit('changeUser', user)
      this.$router.push({ name: 'PortfolioPage', query: { user: user } })
    },
    goBlock(txnHash) {
      window.open(this.$store.state.blockExplorerUrl + txnHash)
    },
    goTweet(username, tweetId) {
      let link = 'https://twitter.com/'+username+'/status/'+tweetId
      window.open(link)
    },
    goHistory(user) {
      this.$router.push({
        name: 'HistoryPage',
        query: {
          user: user
        }
      })
    }
  }
}
</script>
<style scoped>
.confirmation-loading-img {
  display: flex;
  height: calc(100vh - 370px);
}
.confirmation-loading-img img {
  margin: auto;
}
.confirmation-page {
  margin-bottom: 50px;
}
.confirmation-amount {
  margin: 50px auto 50px auto;
  font-size: 2em;
  font-family: 'Montserrat';
  color: rgb(0, 38, 101);
  text-align: center;
}
.res-confirmation-amount {
  margin: 50px auto 50px auto;
  font-size: 2em;
  font-family: 'Montserrat';
  color: rgb(0, 38, 101);
  text-align: center;
  display: none;
}
.launch-userfromimage {
  display: flex;
  margin: auto;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 1px solid lightgrey;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 1, 0.3);
  -moz-box-shadow: 0px 0px 15px 5px rgba(0, 0, 1, 0.3);
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 1, 0.3);
  animation: avatar-from-effect 2s infinite;
}
.launch-userfromimage img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: auto;
}
.confirmation-userfromimage {
  display: flex;
  margin: auto;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 1px solid lightgrey;
  animation: avatar-from-effect 2s infinite;
}
@keyframes avatar-from-effect {
  0% {
    box-shadow: 0 0 0 0px rgba(205, 136, 57, 0.8);
  }
  100% {
    box-shadow: 0 0 0 15px rgba(205, 136, 57, 0);
  }
}
.confirmation-userfromimage img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: auto;
}
.confirmation-userfromimage img:hover {
  opacity: 0.7;
  cursor: pointer;
}
.launch-userFromTo {
  margin: auto -0.5em auto 0em;
  font-size: 2em;
  font-family: 'Montserrat';
  text-align: center;
  color: #06a8ff;
  font-weight: 520;
}
.confirmation-userFromTo {
  margin: auto 0.5em auto 0.5em;
  font-size: 2em;
  font-family: 'Montserrat';
  text-align: center;
  color: #06a8ff;
  font-weight: 520;
  overflow-wrap: break-word;
}
.confirmation-userFromTo:hover {
  cursor: pointer;
  text-decoration: underline;
}
.confirmation-export {
  margin: auto 0.5em auto 0.5em;
  font-size: 2em;
  font-family: 'Montserrat';
  text-align: center;
  color: #06a8ff;
  font-weight: 520;
  overflow-wrap: break-word;
}

.confirmation-tokenbrandimage {
  display: flex;
  margin: 50px auto 50px auto;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 1px solid lightgrey;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(8, 169, 255, 0.3);
  -moz-box-shadow: 0px 0px 15px 5px rgba(8, 169, 255, 0.3);
  box-shadow: 0px 0px 15px 5px rgba(8, 169, 255, 0.3);
}
.confirmation-tokenbrandimage img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: auto;
}
.confirmation-tokenbrandimage img:hover {
  cursor: pointer;
  opacity: 0.7;
}
.confirmation-usertoimage {
  display: flex;
  margin: auto;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 1px solid lightgrey;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 1, 0.3);
  -moz-box-shadow: 0px 0px 15px 5px rgba(0, 0, 1, 0.3);
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 1, 0.3);
  animation: avatar-to-effect 2s infinite;
}
@keyframes avatar-to-effect {
  0% {
    box-shadow: 0 0 0 15px rgb(43, 96, 222, 0);
  }
  100% {
    box-shadow: 0 0 0 0px rgb(43, 96, 222, 0.8);
  }
}

.confirmation-usertoimage img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: auto;
}
.confirmation-usertoimage img:hover {
  cursor: pointer;
  opacity: 0.7;
}
.confirmation-tokenbrand {
  margin: -40px auto auto auto;
}
.confirmation-tokenbrand-header {
  font-size: 2em;
  font-family: 'Montserrat';
  text-align: center;
  color: rgb(0, 38, 101);
}
.confirmation-tokenbrand-header:hover {
  cursor: pointer;
  text-decoration: underline;
}
.confirmation-tokenbrand-text {
  font-size: 1.5em;
  font-family: 'Montserrat';
  color: rgb(0, 38, 101);
  text-align: center;
}
.confirmation-link {
  font-size: 1.5em;
  font-family: 'Roboto Condensed';
  color: rgb(0, 38, 101);
  font-weight: bold;
  text-align: center;
  margin: 50px auto auto auto;
}
.confirmation-link img {
  width: 40px;
  height: 30px;
  margin: 20px auto 20px auto;
}
.confirmation-link img:hover {
  cursor: pointer;
  opacity: 0.7;
}
.confirmation-blockurl {
  word-break: break-all;
}
.confirmation-blockurl:hover {
  cursor: pointer;
  text-decoration: underline;
}
.confirmation-bottom {
  font-size: 2em;
  font-family: 'Roboto Condensed';
  color: rgb(0, 38, 101);
  font-weight: bold;
  text-align: center;
  margin: auto;
}
.confirmation-fromsection,
.confirmation-tosection {
  display: flex;
}

@media only screen and (max-width: 991px) {
  .confirmation-fromsection {
    margin: auto;
    flex-direction: column;
  }

  .confirmation-tosection {
    margin: auto;
    flex-direction: column-reverse;
  }

  .launch-userFromTo {
    margin: auto 0.5em auto 0.5em;
  }
}
@media only screen and (max-width: 767px) {
  .confirmation-userFromTo,
  .launch-userFromTo {
    font-size: 1.5em;
  }
  .col-sm-4 {
    width: 33.3%;
  }
  .confirmation-amount {
    visibility: hidden;
  }
  .res-confirmation-amount {
    display: block;
    margin-bottom: -100px;
  }
}
@media only screen and (max-width: 530px) {
  .confirmation-userFromTo,
  .launch-userFromTo {
    font-size: 1em;
  }
  .confirmation-link {
    font-size: 1em;
  }
  .confirmation-bottom {
    font-size: 1.5em;
  }
}
@media only screen and (max-width: 410px) {
  .confirmation-userFromTo,
  .launch-userFromTo {
    font-size: 0.9em;
  }
  .confirmation-blockurl {
    font-size: 1em;
  }
  .confirmation-bottom {
    font-size: 1.3em;
  }
  .res-confirmation-amount {
    font-size: 1.5em;
  }
}
</style>
