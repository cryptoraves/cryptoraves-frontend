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
                  >{{ item.id.substring(0,6)+"..." }}</div>
                </td>
                <td>
                  <img
                    v-if="!item.from.userName.includes('Official Launch')"
                    :title="item.from.userName == '0x0' ? 'Deposit into Cryptoraves' : item.from.userName"
                    :src="item.from.userName == '0x0' ? 'https://sample-imgs.s3.amazonaws.com/import.png' : item.from.imageUrl"
                    class="table-img"
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                    @click="item.from.userName != user ? $router.push({name: 'HistoryPage',query: {user: item.from.userName}}) : ''"
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
                    @click="goTweet(item.from.userName, item.tweetId)"
                  >
                  <div
                    v-else
                    title="No Tweet associated with this transaction"
                  >N/A</div>
                </td>
                <td>
                  <img
                    v-if="item.token.symbol"
                    :title="item.token.ercType == 20 ? item.token.symbol : 'NFT: '+item.token.symbol"
                    :src="item.token.tokenBrandImageUrl"
                    class="table-img"
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                    @click="$router.push({name: 'TokenPage',query: {token: item.token.symbol}})"
                  >
                  <img
                    v-else
                    :title="item.token.name"
                    :src="item.token.name"
                    class="table-img"
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                    @click="$router.push({name: 'TokenPage',query: {token: item.token.symbol}})"
                  >
                </td>
                <td>
                  <div>{{ item.token.ercType == 721 ? 1 : Math.round(item.amount / Math.pow(10, item.token.decimals)) | comma }}</div>
                </td>
                <td>
                  <div>${{ Math.round(item.amount / Math.pow(10, item.token.decimals) * .1 * Math.random()) | comma }}</div>
                </td>
                <td>
                  <img
                    v-if="!item.to.userName == '0x0'"
                    :title="item.to.userName == '0x0' ? 'Withdraw To Mainnet' : item.to.userName"
                    :src="item.to.userName == '0x0' ? 'https://sample-imgs.s3.amazonaws.com/export.png' : item.to.imageUrl"
                    class="table-img"
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                    @click="item.to.userName != user ? $router.push({path: 'HistoryPage',query: {user: item.to.userName}}) : ''"
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
                    @click="goTransaction(item.id)"
                  >{{ item.modified | date}}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row">
          <div class="history-pagination">
            <span
              :class="[visiblePrev ? 'btn btnpagination' : 'btn disabledbtn']"
              @click="goPrev"
            >
              <i
                v-if="visiblePrev"
                class="fa fa-angle-left"/>
            </span>
            Page {{ currentPage }}
            <span
              href="#"
              :class="[visibleNext ? 'btn btnpagination' : 'btn disabledbtn']"
              @click="goNext"
            >
              <i
                v-if="visibleNext"
                class="fa fa-angle-right"/>
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
import SectionHeader from '../components/ui/SectionHeader'

export default {
  name: 'HistoryPage',
  components: {
    SectionHeader
  },
  filters: {
    date: function(str) {
      if (!str) { return '(n/a)' }
      str = new Date(parseInt(str) * 1000)
      return str.getFullYear() + '-' + ((str.getMonth() < 9) ? '0' : '') + (str.getMonth() + 1) + '-' +
        ((str.getDate() < 10) ? '0' : '') + str.getDate() + ' ' + str.toLocaleTimeString()
    }
  },
  watch:{
      $route (){
          if (this.$route.query.page){
            this.currentPage = this.$route.query.page
          } else {
            this.currentPage = 1
          }
          this.getHistory(this.$route.query.user,this.currentPage)
      }
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
      visibleNext: false,
      visiblePrev: false,
      platformHandle: '',
      platformId: '',
      cryptoravesAddress: '',
      userImageUrl: '',
      blockexplorerUrl: '',
      showLoading: true
    }
  },
  created() {
    if (this.$route.query.page){
      this.currentPage = this.$route.query.page
    }
    this.getHistory(this.$route.query.user, this.currentPage)
  },
  methods: {
    goNext() {
      if (this.visibleNext) {
        this.showLoading = true
        this.currentPage++
        this.$router.push({
          name: 'HistoryPage',
          query: {
            user: this.user,
            page: this.currentPage
          }
        })
      }
    },
    goPrev() {
      if (this.visiblePrev) {
        this.showLoading = true
        this.currentPage--
        this.$router.push({
          name: 'HistoryPage',
          query: {
            user: this.user,
            page: this.currentPage
          }
        })
      }
    },
    async getHistory(user, page) {

      if(page){
        this.currentPage = page
      }
      this.user = user

      if (this.user == '0x0') {
        this.user = 'Deposits & Withdrawals'
        this.cryptoravesAddress = '0x0000000000000000000000000000000000000000'
        this.userImageUrl = 'https://sample-imgs.s3.amazonaws.com/import.png'
        this.platformId = 0
        this.platformHandle = 'Imports & Exports'
      }

      this.showLoading = true

      if(this.currentPage > 1){
        this.visiblePrev = true
      } else {
        this.visiblePrev = false
      }
      //1. Get end user data
      await axios.post(
         this.$store.state.subgraphUrl, {
          query: '{ users(first: 1, where: {userName: "'+this.user+'"}){ id twitterUserId userName cryptoravesAddress imageUrl } }'
        }
      ).then(response => {
        this.cryptoravesAddress = response.data.data.users[0].cryptoravesAddress
        this.userImageUrl = response.data.data.users[0].imageUrl
        this.platformId = response.data.data.users[0].twitterUserId
        this.platformHandle = response.data.data.users[0].userName

      }).catch(e => {
        console.log(e)
      })

      let paginationQueryStringSegment = 'first: '+(this.rowsPerPage+1)+', skip: '+((this.currentPage - 1) * this.rowsPerPage)

      await axios.post(
        this.$store.state.subgraphUrl, {
          query: '{ transfers('+paginationQueryStringSegment+', where: {fromTo_contains: "'+this.cryptoravesAddress+'"}, orderBy: modified, orderDirection: desc){ id from { id twitterUserId userName cryptoravesAddress imageUrl isManaged isUser dropped tokenId layer1Address } to { id twitterUserId userName cryptoravesAddress imageUrl isManaged isUser dropped tokenId layer1Address } amount token {id cryptoravesTokenId isManagedToken ercType totalSupply name symbol decimals emoji tokenBrandImageUrl } tweetId fromTo modified} }'
        }
      ).then(response => {
        this.rowCount = response.data.data.transfers.length
        this.tableRows = response.data.data.transfers  //match graph schema to fit as best as possible the original format below?

        if(this.rowCount > this.rowsPerPage){
          this.visibleNext = true
          this.tableRows.pop()
        } else {
          this.visibleNext = false
        }

        this.showLoading = false
      }).catch(e => {
        console.log(e)
      })
    },
    getShowTweet(userFrom, userTo) {
      if (
        userFrom == '0x0' ||
        userTo == '0x0'
      ) {
        return false
      } else {
        return true
      }
    },
    goPortfolio(user) {
      this.$router.push({ name: 'PortfolioPage', query: { user: user } })
    },
    goTweet(username, tweetId) {
      let link = 'https://twitter.com/'+username+'/status/'+tweetId
      window.open(link)
    },
    goTransaction(txnHash) {
      if (txnHash !== 'Error') {
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
