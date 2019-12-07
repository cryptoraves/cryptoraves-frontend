<template>
  <div class="confirmation-page">
    <div class="container">
      <div v-if="showLoading" class="confirmation-loading-img">
        <img src="../assets/gif/loading.gif" alt />
      </div>
      <div v-else>
        <SectionHeader>Transaction Confirmed!</SectionHeader>
        <div class="d-flex">
          <div class="res-confirmation-amount">{{this.item.amount | comma}}</div>
        </div>
        <div class="row">
          <div
            v-if="!item.userFrom.includes('Token Launch')"
            class="confirmation-fromsection col-lg-4 col-md-4 col-sm-4"
          >
            <div class="confirmation-userfromimage">
              <img
                :src="this.item.userFromImageUrl"
                :title="item.userFrom"
                @click="goHistory(item.userFrom)"
              />
            </div>
            <div
              class="confirmation-userFromTo"
              @click="goHistory(item.userFrom)"
              :title="item.userFrom"
            >{{this.item.userFrom}}</div>
          </div>
          <div v-else class="confirmation-fromsection col-lg-4 col-md-4 col-sm-4">
            <div class="launch-userfromimage">
              <img :src="this.item.userFromImageUrl" :title="item.userFrom" />
            </div>
            <div class="launch-userFromTo" :title="item.userFrom">Token Launch!</div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <div class="d-flex">
              <div class="confirmation-amount">{{this.item.amount | comma}}</div>
            </div>

            <div class="d-flex">
              <AnimatedArrow></AnimatedArrow>
            </div>
            <div>
              <div class="confirmation-tokenbrandimage">
                <img
                  :src="this.item.tokenBrandImageUrl"
                  @click="goHistory(item.tokenBrand)"
                  :title="item.tokenBrand"
                />
              </div>
            </div>
          </div>
          <div class="confirmation-tosection col-lg-4 col-md-4 col-sm-4">
            <div v-if="!item.userTo.includes('Export To Mainnet')" class="confirmation-tosection-show1">
              <div
                class="confirmation-userFromTo"
                :src="this.item.userToImageUrl"
                @click="goHistory(item.userTo)"
                :title="item.userTo"
              >{{this.item.userTo}}</div>
              <div class="confirmation-usertoimage">
                <img
                  :src="this.item.userToImageUrl"
                  @click="goHistory(item.userTo)"
                  :title="item.userTo"
                />
              </div>
            </div>
            <div v-else class="confirmation-tosection-show1">
              <div
                class="confirmation-export"
                :title="item.userTo"
              >{{this.item.userTo}}</div>
              <div class="confirmation-export">
                <img
                  :src="this.item.userToImageUrl"
                  :title="item.userTo"
                />
              </div>
            </div>
            
          </div>
        </div>
        <div class="row">
          <div class="confirmation-tokenbrand">
            <div
              class="confirmation-tokenbrand-header"
              @click="goHistory(item.tokenBrand)"
              :title="item.tokenBrand"
            >{{this.item.tokenBrand}}</div>
            <div class="confirmation-tokenbrand-text">Tokens</div>
          </div>
        </div>
        <div class="row">
          <div class="confirmation-link col-lg-12 col-md-12 col-sm-12">
            <div
              class="confirmation-blockurl"
              v-on:click="goBlock(item.blockexplorerUrl + item.txnHash)"
              title="Link to Loom's Block Explorer"
            >{{this.item.txnHash}}</div>
            <div class="d-flex">
              <img
                src="../assets/img/twitter.png"
                v-on:click="goTweet(item.linkToContent) "
                title="Link to Tweet"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="confirmation-bottom">
            You + (Being Awesome) = (Token Value)
            <sup>2</sup>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import SectionHeader from "../components/ui/SectionHeader";
import AnimatedArrow from "../components/ui/AnimatedArrow";

export default {
  name: "ComfirmationPage",
  components: {
    SectionHeader,
    AnimatedArrow
  },
  data() {
    return {
      txnId: "",
      txnID: "",
      tableRows: [],
      item: Object,
      upHere: false,
      showLoading: true
    };
  },
  created() {
    this.txnId = this.$route.query.txnId;
    if(window.location.host.split(':')[0] == 'cryptoraves.space'){
      this.$ga.page("/");
    }
    this.getTransaction(this.txnId);
  },
  methods: {
    getTransaction(txnId) {
      axios
        .get(
          "https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=confirmationPage&txnHash=" +
            txnId
        )
        .then(response => {
          // JSON responses are automatically parsed.
          let res = response.data;
          this.tableRows = res.tableRows;
          this.txnID = this.tableRows[0].txnHash;
          this.item = this.tableRows[0];
          this.showLoading = false;
        })
        .catch(e => {
          console.log(e);
        });
    },
    goAnother(user) {
      this.$root.$emit("changeUser", user);
      this.$router.push({ name: "PortfolioPage", query: { user: user } });
    },
    goBlock(link) {
      window.open(link);
    },
    goTweet(link) {
      window.open(link);
    },
    goHistory(user) {
      this.$root.$emit("changeUser", user);
      // localStorage.setItem("transactionPageNum", 0);
      // localStorage.setItem("transactionFlag", 0);
      this.$router.push({
        name: "HistoryPage",
        query: {
          user: user
        }
      });
    }
  }
};
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
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  text-align: center;
}
.res-confirmation-amount {
  margin: 50px auto 50px auto;
  font-size: 2em;
  font-family: "Montserrat";
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
  font-family: "Montserrat";
  text-align: center;
  color: #06a8ff;
  font-weight: 520;
}
.confirmation-userFromTo {
  margin: auto 0.5em auto 0.5em;
  font-size: 2em;
  font-family: "Montserrat";
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
  font-family: "Montserrat";
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
  font-family: "Montserrat";
  text-align: center;
  color: rgb(0, 38, 101);
}
.confirmation-tokenbrand-header:hover {
  cursor: pointer;
  text-decoration: underline;
}
.confirmation-tokenbrand-text {
  font-size: 1.5em;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  text-align: center;
}
.confirmation-link {
  font-size: 1.5em;
  font-family: "Roboto Condensed";
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
  font-family: "Roboto Condensed";
  color: rgb(0, 38, 101);
  font-weight: bold;
  text-align: center;
  margin: auto;
}
.confirmation-fromsection,
.confirmation-tosection {
  display: flex;
}
.confirmation-tosection-show1 {
  display: flex;
}
.confirmation-tosection-show2 {
  display: none;
}
@media only screen and (max-width: 991px) {
  .confirmation-fromsection,
  .confirmation-tosection {
    display: block;
    margin: auto;
  }
  .confirmation-tosection-show1 {
    display: none;
  }
  .confirmation-tosection-show2 {
    display: block;
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