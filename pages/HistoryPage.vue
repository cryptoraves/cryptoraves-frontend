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
                title="Click to See Portfolio & Token Balance"
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
                :key="item.txnId"
                :class="[platformHandle === item.userFrom? 'tr-orange-color' : 'tr-green-color']"
              >
                <td>
                  <div 
                    v-if="item.txnHash=='Error'"
                    title="Pending">Pend...
                  </div>
                  <div
                    v-else
                    title="Link to Confirmation"
                    class="link"
                    @click="goTransaction(item.txnHash)"
                  >{{ item.txnHash.substring(0,3)+"..." }}</div>
                </td>
                <td>
                  <img
                    v-if="!item.userFrom.includes('Official Launch')"
                    :title="item.userFrom"
                    :src="item.userFromImageUrl"
                    class="table-img"
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                    @click="getHistory(item.userFrom, 0)"
                  >
                  <img 
                    v-else
                    :src="item.userFromImageUrl"
                    title="LAUNCH"
                    class="launch-img" 
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                  >
                </td>
                <td>
                  <div v-if="platformHandle === item.userFrom">Sent</div>
                  <div v-else>Received</div>
                </td>
                <td>
                  <img
                    v-if="getShowTweet(item.userFrom, item.userTo)"
                    title="Link to Tweet"
                    src="../assets/img/twittersmall.png"
                    class="link"
                    @click="goTweet(item.linkToContent)"
                  >
                </td>
                <td>
                  <img
                    v-if="item.ticker"
                    :title="item.ticker"
                    :src="item.tokenBrandImageUrl"
                    class="table-img"
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                    @click="getHistory(item.tokenBrand, 0)"
                  >
                  <img
                    v-else
                    :title="item.tokenBrand"
                    :src="item.tokenBrandImageUrl"
                    class="table-img"
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                    @click="getHistory(item.tokenBrand, 0)"
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
                    v-if="!item.userTo.includes('Export To Mainnet')"
                    :title="item.userTo"
                    :src="item.userToImageUrl"
                    class="table-img"
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                    @click="getHistory(item.userTo, 0)"
                  >
                  <img 
                    v-else
                    :title="item.userTo"
                    :src="item.userToImageUrl" 
                    class="launch-img" 
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                  >
                </td>
                <td>
                  <div
                    v-if="item.txnHash=='Error'"
                    title="Pending"
                  >{{ item.date.substring(0,item.date.length-3) }}</div>
                  <div
                    v-else
                    title="Link to Confirmation"
                    class="link"
                    @click="goTransaction(item.txnHash)"
                  >{{ item.date.substring(0,item.date.length-3) }}</div>
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
            Page {{ initialPagePtr + 1 }}
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
import _ from 'lodash'
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
      tableRows: [],
      rowCount: 0,
      tokenBalance: '0',
      earliestDatetime: '',
      latestDatetime: '',
      initialPagePtr: 0,
      visibleNext: true,
      visiblePrev: true,
      platformHandle: '',
      userImageUrl: '',
      blockexplorerUrl: '',
      showLoading: true
    }
  },
  created() {
    this.user = this.$route.query.user

    this.earliestDatetime = this.$route.query.earliestDatetime
    this.latestDatetime = this.$route.query.latestDatetime
    this.initFlag = 0

    if (this.earliestDatetime) {
      this.initFlag = 1
    }

    if (this.latestDatetime) {
      this.initFlag = 2
    }

    if (this.$route.query.page && this.initFlag) {
      if (this.initFlag == 1) {
        this.initialPagePtr = this.$route.query.page - 2
      }
      if (this.initFlag == 2) {
        this.initialPagePtr = this.$route.query.page
      }
    }

    // this.initialPagePtr = localStorage.getItem("transactionPageNum") || 0;
    // this.initFlag = localStorage.getItem("transactionFlag") || 0;
    // this.earliestDatetime = localStorage.getItem("earliestDatetime");
    // this.latestDatetime = localStorage.getItem("latestDatetime");
    this.getHistory(this.user, this.initFlag)
  },
  beforeRouteUpdate(to, from, next) {
    // just use `this`
    this.user = to.query.user
    if (from.query.user != this.user) {
      this.getHistory(this.user, 0)
    }
    next()
  },
  methods: {
    goNext() {
      if (this.visibleNext) {
        this.getHistory(this.user, 1)
      }
    },
    goPrev() {
      if (this.visiblePrev) {
        this.getHistory(this.user, 2)
      }
    },
    getHistory(user, initFlag) {
      if (user.toLowerCase().startsWith('import')) {
        user = 'IMPORT'
      }
      if (user.toLowerCase().startsWith('export')) {
        user = 'EXPORT'
      }
      this.showLoading = true
      if (initFlag == 0) {
        axios
          .get(
            this.$store.state.WebsiteInterfaceUrl + '?pageType=transactionHistory&userName=' +
              user
          )
          .then(response => {
            // JSON responses are automatically parsed.
            let res = response.data
            this.user = user
            this.tableRows = _.cloneDeep(res.tableRows)
            this.rowCount = res.rowCount
            this.tokenBalance = res.tokenBalance
            this.earliestDatetime = res.earliestDatetime
            this.latestDatetime = res.latestDatetime
            this.initialPagePtr = 0
            this.visiblePrev = false
            this.visibleNext = res.next ? true : false
            this.platformHandle = res.platformHandle
            this.userImageUrl = res.userImageUrl
            this.blockexplorerUrl = res.blockexplorerUrl
            this.showLoading = false
            // localStorage.setItem("earlistData", this.earliestDatetime);
            // localStorage.setItem("latestDatetime", this.latestDatetime);
            // localStorage.setItem("transactionFlag", initFlag);
            // localStorage.setItem("transactionPageNum", this.initialPagePtr);
          })
          .catch(e => {
            console.log(e)
          })
      } else if (initFlag == 1) {
        axios
          .get(
            this.$store.state.WebsiteInterfaceUrl + '?pageType=transactionHistory&userName=' +
              user +
              '&earliestDatetime=' +
              this.earliestDatetime
          )
          .then(response => {
            this.initialPagePtr++

            if (this.initialPagePtr) {
              this.$router.push({
                path: 'history',
                query: {
                  user: user,
                  earliestDatetime: this.earliestDatetime,
                  page: this.initialPagePtr + 1
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
        // localStorage.setItem("transactionPageNum", this.initialPagePtr);
        axios
          .get(
            this.$store.state.WebsiteInterfaceUrl + '?pageType=transactionHistory&userName=' +
              user +
              '&latestDatetime=' +
              this.latestDatetime
          )
          .then(response => {
            this.initialPagePtr--

            if (this.initialPagePtr) {
              this.$router.push({
                path: 'history',
                query: {
                  user: user,
                  latestDatetime: this.latestDatetime,
                  page: this.initialPagePtr + 1
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
              res.prev && this.initialPagePtr > 0 ? true : false
            this.visibleNext = true
            this.platformHandle = res.platformHandle
            this.userImageUrl = res.userImageUrl
            this.blockexplorerUrl = res.blockexplorerUrl
            this.showLoading = false
          })
          .catch(e => {
            console.log(e)
          })
      }
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
