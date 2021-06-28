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

          >{{ token }}
            <div class="history-token">
            <br/>
              <div class="history-tokenimg">
                <img
                  :src="tokenBrandImageUrl"
                  onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                  :title="this.ercType == 20 ? this.token : 'NFT: '+this.token"
                >
              </div>
            </div>
            <br/>
            <div class="" >
              {{ tokenName }} (ticker {{ token }}):  {{ tokenDescription }}
            </div>
          </SectionHeader>
          <div class="elastic-arrow">
            <img
              src="../assets/gif/elasticrightarrow.gif"
              alt >
          </div>
        </div>
        <br /><br /><br />
        <div class="table-heading">Recent Transactions:</div>
        <div class="table-section row">
          <table>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">From</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th
                  v-if="ercType == 721"
                  scope="col"
                >ID</th>
                <th
                  v-else
                  scope="col"
                >Amount</th>
                <th scope="col"></th>
                <th scope="col">To</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item,index) in tableRows"
                :index="index"
                :key="item.id"
                :class="[tokenName === item.from.userName? 'tr-orange-color' : 'tr-green-color']"
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
                    :title="item.from.userName == '0x0' ? 'Import into Cryptoraves' : item.from.userName"
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
                  <img
                    v-if="getShowTweet(item.from.userName, item.to.userName)"
                    title="Link to Tweet"
                    src="../assets/img/twittersmall.png"
                    class="link"
                    @click="goTweet(item.from.userName, item.tweetId)"
                  >
                </td>
                <td>
                  <img
                    v-if="item.token.symbol"
                    :title="item.token.ercType == 20 ? item.token.symbol : 'NFT: '+item.token.symbol"
                    :src="item.token.tokenBrandImageUrl"
                    class="table-img-deactive"
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"

                  >
                  <img
                    v-else
                    :title="item.token.name"
                    :src="item.token.name"
                    class="table-img-deactive"
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"

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
                    :title="item.to.userName == '0x0' ? 'Export To Mainnet' : item.to.userName"
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
          this.getToken(this.$route.query.user,this.currentPage)
      }
  },
  data() {
    return {
      showTweet: true,
      token: '',
      currentPage: 1,
      tableRows: [],
      rowCount: 0,
      rowsPerPage: 20,
      visibleNext: false,
      visiblePrev: false,
      tokenName: '',
      cryptoravesTokenId: '',
      cryptoravesAddress: '',
      tokenBrandImageUrl: '',
      tokenDescription:'',
      blockexplorerUrl: '',
      showLoading: true
    }
  },
  created() {
    if (this.$route.query.page){
      this.currentPage = this.$route.query.page
    }
    this.getToken(this.$route.query.token, this.currentPage)
  },
  methods: {
    goNext() {
      if (this.visibleNext) {
        this.showLoading = true
        this.currentPage++
        this.$router.push({
          name: 'HistoryPage',
          query: {
            token: this.token,
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
            token: this.token,
            page: this.currentPage
          }
        })
      }
    },
    async getToken(token, page) {

      if(page){
        this.currentPage = page
      }
      this.token = token
      this.showLoading = true

      if(this.currentPage > 1){
        this.visiblePrev = true
      } else {
        this.visiblePrev = false
      }

      let queryString = ''
      if(this.$route.query.id){
        queryString =  '{ tokens(first: 1, where: {id: "'+this.$route.query.id+'"}){ id cryptoravesTokenId isManagedToken ercType totalSupply name symbol decimals emoji tokenBrandImageUrl tokenDescription } }'
      } else {
        queryString = '{ tokens(first: 1, where: {symbol: "'+this.token+'"}){ id cryptoravesTokenId isManagedToken ercType totalSupply name symbol decimals emoji tokenBrandImageUrl tokenDescription } }'
      }

      await axios.post(
         this.$store.state.subgraphUrl, {
          query: queryString
        }
      ).then(response => {
        //console.log('TokenID: ',response.data.data.tokens[0].id)
        this.ercType = response.data.data.tokens[0].ercType
        this.tokenBrandImageUrl = response.data.data.tokens[0].tokenBrandImageUrl
        this.tokenDescription = response.data.data.tokens[0].tokenDescription
        this.cryptoravesTokenId = response.data.data.tokens[0].id
        this.tokenName = response.data.data.tokens[0].name

      }).catch(e => {
        console.log(e)
      })

      let paginationQueryStringSegment = 'first: '+(this.rowsPerPage+1)+', skip: '+((this.currentPage - 1) * this.rowsPerPage)

      await axios.post(
        this.$store.state.subgraphUrl, {
          query: '{ transfers('+paginationQueryStringSegment+', where: {token: "'+this.cryptoravesTokenId+'"}, orderBy: modified, orderDirection: desc){ id from { id twitterUserId userName cryptoravesAddress imageUrl isManaged isUser dropped tokenId layer1Address } to { id twitterUserId userName cryptoravesAddress imageUrl isManaged isUser dropped tokenId layer1Address } amount token {id cryptoravesTokenId isManagedToken ercType totalSupply name symbol decimals emoji tokenBrandImageUrl tokenDescription } tweetId fromTo modified} }'
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
  text-align: center;
}
.table-heading {
  margin: 10px auto 10px auto;
  font-weight: bold;
  font-size: 20px;
  color: rgb(0, 38, 101);
  text-align: center;
}
.history-tokenlink {
  margin: 10px auto 10px auto;
  font-family: 'Montserrat';
  font-size: 15px;
  color: royalblue;
  text-decoration: underline;
}
.history-tokenlink:hover {
  cursor: pointer;
  text-decoration: underline;
}

.history-tokenimg {
  background: white;
  display: flex;
  margin: auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid lightgrey;
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


.history-tokenimg:active {
  transform: translateY(0.0em);
}

.history-tokenimg img {
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
  margin: 20px auto 0px auto;
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

.table-img-deactive {
  border: 2px solid white;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(8, 169, 255, 0.3);
  -moz-box-shadow: 0px 0px 15px 5px rgba(8, 169, 255, 0.3);
  box-shadow: 0px 0px 15px 5px rgba(8, 169, 255, 0.3);
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
  .history-token {
    position: relative;
    margin-bottom: -40px;
    z-index: 2;
  }
  .elastic-arrow {
    display: block;
  }
}
@media only screen and (max-width: 410px) {
  .history-tokenimg {
    width: 80px;
    height: 80px;
  }
  .history-tokenimg img {
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
