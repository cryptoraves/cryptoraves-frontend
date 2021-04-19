<template>
  <div class="history-page">
    <div class="container">
      <div
        v-if="showLoading"
        class="history-loading-img">
        <img
          src="../assets/gif/loading.gif"
          alt
        >
      </div>
      <div v-else>
        <div class="history-title">
          <SectionHeader
            v-if="platformHandle.toUpperCase()=='EXPORT' || platformHandle.toUpperCase()=='IMPORT' || platformHandle.toUpperCase()=='LAUNCH'"
          >{{ platformHandle.toLowerCase() }}s</SectionHeader>
          <SectionHeader
            v-else
          >{{ platformHandle }}'s Transaction History</SectionHeader>
          <div class="history-user">
            
            <div class="history-userimg">
              <img
                :src="userImageUrl"
                onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                title="Click to See Portfolio"
                @click="goPortfolio(user)"
              >
            </div>
          </div>
          <br><br>
          <div class="elastic-arrow">
            <img 
              src="../assets/gif/elasticrightarrow.gif"
              alt >
          </div>
        </div>
        <div class="table-section row">
          <table>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">From</th>
                <th scope="col">Sent/Received</th>
                <th scope="col">Tweet</th>
                <th scope="col">Token</th>
                <th scope="col">Amount</th>
                <th scope="col">Value $</th>
                <th scope="col">To</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item,index) in tableRows"
                :index="index"
                :key="item.id"
                :class="[platformHandle === item.from.userName? 'tr-orange-color' : 'tr-green-color']"
              >
                <td>
                  <div 
                    v-if="item.id=='Error'"
                    title="Pending">Pend...
                  </div>
                  <div
                    v-else
                    title="Link to Confirmation"
                    class="link"
                    @click="goTransaction(item.id)"
                  >{{ item.id.substring(0,3)+"..." }}</div>
                </td>
                <td>
                  <img
                    v-if="!item.from.userName.includes('Official Launch')"
                    :title="item.from.userName"
                    :src="item.from.imageUrl"
                    class="table-img"
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                    @click="getHistory(item.from.userName)"
                  >
                  <img 
                    v-else
                    :src="item.from.imageUrl"
                    title="LAUNCH"
                    class="launch-img" 
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                  >
                </td>
                <td>
                  <div v-if="platformHandle === item.from.userName">Sent</div>
                  <div v-else>Received</div>
                </td>
                <td>
                  <img
                    v-if="getShowTweet(item.from.userName, item.to.userName)"
                    title="Link to Tweet"
                    src="../assets/img/twittersmall.png"
                    class="link"
                    @click="goTweet(item.tweetId)"
                  >
                </td>
                <td>
                  <img
                    v-if="item.token.symbol"
                    :title="item.token.symbol"
                    :src="item.tokenBrandImageUrl"
                    class="table-img"
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                    @click="getHistory(item.token.name)"
                  >
                  <img
                    v-else
                    :title="item.token.name"
                    :src="item.token.name"
                    class="table-img"
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                    @click="getHistory(item.token.name)"
                  >
                </td>
                <td>
                  <div>{{ item.amount | comma }}</div>
                </td>
                <td>
                  <div>${{ Math.round(item.amount * .1 * Math.random()) | comma }}</div>
                </td>
                <td>
                  <img
                    v-if="!item.to.userName.includes('Export To Mainnet')"
                    :title="item.to.userName"
                    :src="item.to.imageUrl"
                    class="table-img"
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                    @click="getHistory(item.to.userName, 0)"
                  >
                  <img 
                    v-else
                    :title="item.to.userName"
                    :src="item.to.imageUrl" 
                    class="launch-img" 
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                  >
                </td>
                <td>
                  <div
                    v-if="item.txnHash=='Error'"
                    title="Pending"
                  ><!-- {{ item.date.substring(0,item.date.length-3) }} --> </div>
                  <div
                    v-else
                    title="Link to Confirmation"
                    class="link"
                    @click="goTransaction(item.txnHash)"
                  ><!-- {{ item.date.substring(0,item.date.length-3) }} --></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row">
          <div class="history-pagination">
            <span
              class="btn btnpagination [visiblePrev ? '' : 'disabledbtn']"
              @click="goPrev"
            >
              <i class="fa fa-angle-left"/>
            </span>
            Page {{ currentPage }}
            <span
              href="#"
              class="btn btnpagination [visibleNext ? '' : 'disabledbtn']"
              @click="goNext"
            >
              <i class="fa fa-angle-right"/>
            </span>
          </div>
        </div>
        <div class="row">
          <div
            class="portfolio-link"
            @click="goPortfolio(user)"
          >Click to see {{ platformHandle }}'s Portfolio Page.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
//import _ from 'lodash'
import SectionHeader from '../components/ui/SectionHeader'
import AnimatedArrow from '../components/ui/AnimatedArrow'

export default {
  name: 'HistoryPage',
  components: {
    SectionHeader,
    AnimatedArrow
  },
  data() {
    return {
      showTweet: true,
      user: '',
      currentPage: 1,
      tableRows: [],
      rowCount: 0,
      rowsPerPage: 20,
      tokenBalance: '0',
      earliestDatetime: '',
      latestDatetime: '',
      visibleNext: true,
      visiblePrev: true,
      platformHandle: '',
      platformId: '',
      cryptoravesAddress: '',
      userImageUrl: '',
      blockexplorerUrl: '',
      showLoading: true
    }
  },
  created() {
    this.user = this.$route.query.user
    if (this.$route.query.page){
      this.currentPage = this.$route.query.page
    }
    this.getHistory(this.user)
  },
  beforeRouteUpdate(to, from, next) {
    // just use `this`
    this.user = to.query.user
    next()
  },
  methods: {
    goNext() {
      if (this.visibleNext) {
        this.currentPage++
        this.getHistory(this.user)
      }
    },
    goPrev() {
      if (this.visiblePrev) {
        this.currentPage--
        this.getHistory(this.user)
      }
    },
    async getHistory(user) {
      
      this.$router.push({
        path: 'HistoryPage',
        query: {
          user: user,
          page: this.currentPage
        }
      })
      console.log(user)
      this.user = user
      if (this.user.toLowerCase().startsWith('import')) {
        this.user = 'IMPORT'
      }
      if (this.user.toLowerCase().startsWith('export')) {
        this.user = 'EXPORT'
      }
      this.showLoading = true

      if(this.currentPage > 1){
        this.visiblePrev = true
      } else {
        this.visiblePrev = false
      }
      
      //1. Get end user data
      await axios.post(
        'http://127.0.0.1:8000/subgraphs/name/cryptoraves/cryptoraves-subgraph', {
          query: '{ userDatas(first: 1, where: {userName: "'+this.user+'"}){ id twitterUserId userName cryptoravesAddress imageUrl } }'
        }
      ).then(response => {
        this.cryptoravesAddress = response.data.data.userDatas[0].cryptoravesAddress
        this.userImageUrl = response.data.data.userDatas[0].imageUrl
        this.platformId = response.data.data.userDatas[0].twitterUserId
        this.platformHandle = response.data.data.userDatas[0].userName


      }).catch(e => {
        console.log(e)
      }) 

      let paginationQueryStringSegment = 'first: '+(this.rowsPerPage+1)+', skip: '+((this.currentPage - 1) * this.rowsPerPage)
      

      await axios.post(
        'http://127.0.0.1:8000/subgraphs/name/cryptoraves/cryptoraves-subgraph', {
          query: '{ transfers('+paginationQueryStringSegment+', where: {fromTo_contains: "'+this.cryptoravesAddress+'"}){ id from { id twitterUserId userName cryptoravesAddress imageUrl isManaged isUser dropped tokenId layer1Address } to { id twitterUserId userName cryptoravesAddress imageUrl isManaged isUser dropped tokenId layer1Address } amount token {id cryptoravesTokenId isManagedToken ercType totalSupply name symbol decimals emoji } tweetId fromTo} }'
        }
      ).then(response => {
        
        this.rowCount = response.data.data.transfers.length
        this.tableRows = response.data.data.transfers  //match graph schema to fit as best as possible the original format below?

        if(this.rowCount > this.rowsPerPage){
          this.visibleNext = true
        } else {
          this.visibleNext = false
        }
        console.log(this.tableRows)
        console.log(this.tableRows[0].token.ercType)

        this.showLoading = false


                        /*amount: "18000"
                        date: (...)
                        inOut: (...)
                        linkToContent: (...)
                        ticker: (...)
                        tokenBrand: (...)
                        tokenBrandImageUrl: (...)
                        txnHash: (...)
                        txnId: (...)
                        userFrom: "@steveharrington"
                        userFromImageUrl: "https://sample-imgs.s3.amazonaws.com/steveHarrington.png"
                        userTo: "@spock"
                        userToImageUrl: "https://sample-imgs.s3.amazonaws.com/spock.png"*/
      }).catch(e => {
        console.log(e)
      }) 

      /*
        await axios
          .get(
            this.$store.state.WebsiteInterfaceUrl + '?pageType=transactionHistory&userName=' +
              user
          )
          .then(response => {
            // JSON responses are automatically parsed.
            let res = response.data
            this.tableRows = _.cloneDeep(res.tableRows)
            this.rowCount = res.rowCount
            this.tokenBalance = res.tokenBalance
            this.earliestDatetime = res.earliestDatetime
            this.latestDatetime = res.latestDatetime
            this.currentPage = 0
            this.visiblePrev = false
            this.visibleNext = res.next ? true : false
            this.blockexplorerUrl = res.blockexplorerUrl
            this.showLoading = false
            // localStorage.setItem("earlistData", this.earliestDatetime);
            // localStorage.setItem("latestDatetime", this.latestDatetime);
            // localStorage.setItem("transactionFlag", initFlag);
            // localStorage.setItem("transactionPageNum", this.currentPage);
          })
          .catch(e => {
            console.log(e)
          })
      } else if (initFlag == 1) {
        await axios
          .get(
            this.$store.state.WebsiteInterfaceUrl + '?pageType=transactionHistory&userName=' +
              user +
              '&earliestDatetime=' +
              this.earliestDatetime
          )
          .then(response => {
            this.currentPage++

            if (this.currentPage) {
              this.$router.push({
                path: 'history',
                query: {
                  user: user,
                  earliestDatetime: this.earliestDatetime,
                  page: this.currentPage + 1
                }
              })
            } else {
              this.$router.push({ path: 'history', query: { user: user } })
            }
            // JSON responses are automatically parsed.
            this.user = user
            let res = response.data
            this.tableRows = _.cloneDeep(res.tableRows)
            this.rowCount = res.rowCount
            this.tokenBalance = res.tokenBalance
            this.latestDatetime = res.latestDatetime
            this.earliestDatetime = res.earliestDatetime

            this.visiblePrev = true
            this.visibleNext = res.next ? true : false
            this.platformHandle = res.platformHandle
            this.userImageUrl = res.userImageUrl
            this.blockexplorerUrl = res.blockexplorerUrl
            this.showLoading = false
            // localStorage.setItem("latestDatetime", this.latestDatetime);
            // localStorage.setItem("transactionFlag", initFlag);

          })
          .catch(e => {
            console.log(e)
          })
      } else {
        // localStorage.setItem("latestDatetime", this.latestDatetime);
        // localStorage.setItem("transactionPageNum", this.currentPage);
        await axios
          .get(
            this.$store.state.WebsiteInterfaceUrl + '?pageType=transactionHistory&userName=' +
              user +
              '&latestDatetime=' +
              this.latestDatetime
          )
          .then(response => {
            this.currentPage--

            if (this.currentPage) {
              this.$router.push({
                path: 'history',
                query: {
                  user: user,
                  latestDatetime: this.latestDatetime,
                  page: this.currentPage + 1
                }
              })
            } else {
              this.$router.push({ path: 'history', query: { user: user } })
            }
            // JSON responses are automatically parsed.
            this.user = user
            let res = response.data
            this.tableRows = _.cloneDeep(res.tableRows)
            this.rowCount = res.rowCount
            this.tokenBalance = res.tokenBalance
            this.latestDatetime = res.latestDatetime
            this.earliestDatetime = res.earliestDatetime

            this.visiblePrev =
              res.prev && this.currentPage > 0 ? true : false
            this.visibleNext = true
            this.platformHandle = res.platformHandle
            this.userImageUrl = res.userImageUrl
            this.blockexplorerUrl = res.blockexplorerUrl
            this.showLoading = false
          })
          .catch(e => {
            console.log(e)
          })
      }*/
    },
    getShowTweet(userFrom, userTo) {
      if (
        userFrom == 'Import to Cryptoraves' ||
        userFrom == 'Export To Mainnet' ||
        userTo == 'Import to Cryptoraves' ||
        userTo == 'Export To Mainnet'
      ) {
        return false
      } else {
        return true
      }
    },
    goAnother(user) {
      this.$root.$emit('changeUser', user)
      this.$router.push({
        name: 'History',
        query: {
          user: user
        }
      })
    },
    goPortfolio(user) {
      this.$root.$emit('changeUser', user)
      this.$router.push({ name: 'PortfolioPage', query: { user: user } })
    },
    goBlock(link) {
      window.open(link)
    },
    goTweet(link) {
      window.open(link)
    },
    goTransaction(txnHash) {
      if (txnHash !== 'Error') {
        this.$root.$emit('changeUser', txnHash)
        this.$router.push({
          name: 'ConfirmationPage',
          query: { txnId: txnHash }
        })
      }
    }
  }
}
</script>
<style scoped>
.history-page {
  margin-bottom: 50px;
}
.history-loading-img {
  display: flex;
  height: calc(100vh - 370px);
}
.history-loading-img img {
  margin: auto;
}
.history-title {
  position: relative;
}
.history-user {
  position: absolute;
  top: 70px;
  left: 0;
  text-align: center;
}
.history-userlink {
  margin: 10px auto 10px auto;
  font-family: 'Montserrat';
  font-size: 15px;
  color: royalblue;
  text-decoration: underline;
}
.history-userlink:hover {
  cursor: pointer;
  text-decoration: underline;
}

.history-userimg {
  background: white;
  display: flex;
  margin: auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid lightgrey;
  animation: avatar-from-effect 2s infinite;
  transition: all 0.5s ease-out;
  cursor: pointer;
}

@keyframes avatar-from-effect {
  0% {
    box-shadow: 0 0 0 0px rgba(205, 136, 57, 0.8);
  }
  100% {
    box-shadow: 0 0 0 15px rgba(205, 136, 57, 0);
  }
}


.history-userimg:active {
  transform: translateY(0.5em);
}

.history-userimg img {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: auto;
}


.history-pagination {
  margin: 10px auto 50px auto;
  font-weight: bold;
  font-size: 20px;
  color: rgb(0, 38, 101);
}
.table-section {
  margin: 100px auto 0px auto;
  box-shadow: 0 0 1em 1px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  overflow: auto;
}
table {
  font-family: 'Montserrat';
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  width: 100%;
  position: relative;
}

table td,
table th {
  padding-left: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
}
table thead tr {
  height: 60px;
  color: rgb(0, 38, 101);
  background: lightgrey;
  font-weight: bold;
  font-size: 20px;
}

table tbody tr {
  height: 80px;
  font-size: 15px;
}
table td,
table th {
  text-align: center;
}
table td.l,
table th.l {
  text-align: right;
}
table td.c,
table th.c {
  text-align: center;
}
table td.r,
table th.r {
  text-align: center;
}
tr:nth-child(even) {
  background-color: rgb(246, 250, 251);
}
.launch-img {
  border: 2px solid white;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(8, 169, 255, 0.3);
  -moz-box-shadow: 0px 0px 15px 5px rgba(8, 169, 255, 0.3);
  box-shadow: 0px 0px 15px 5px rgba(8, 169, 255, 0.3);
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

.portfolio-link {
  font-size: 1.5em;
  font-family: 'Montserrat';
  color: rgb(0, 38, 101);
  text-align: center;
  margin: auto;
  cursor: pointer;
}
.tr-green-color {
  color: royalblue;
}
.tr-orange-color {
  color: peru;
}
.elastic-arrow {
  display: none;
  position: absolute;
  bottom: -70px;
  right: 0;
  z-index: 2;
}
.elastic-arrow img {
  width: 40px;
  height: 20px;
}
@media only screen and (max-width: 767px) {
  table {
    min-width: 1000px;
  }
  .history-user {
    position: relative;
    margin-bottom: -40px;
    z-index: 2;
  }
  .elastic-arrow {
    display: block;
  }
}
@media only screen and (max-width: 410px) {
  .history-userimg {
    width: 80px;
    height: 80px;
  }
  .history-userimg img {
    width: 70px;
    height: 70px;
  }
  table thead tr {
    height: 40px;
    font-size: 15px;
  }
  table tbody tr {
    height: 55px;
    font-size: 12px;
  }
  .history-pagination {
    font-size: 15px;
  }
  .table-img {
    height: 50px;
    width: 50px;
  }
  .launch-img {
    height: 50px;
    width: 50px;
  }
  .portfolio-link {
    font-size: 1em;
  }
}
</style>
