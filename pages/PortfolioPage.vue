<template>
  <div class="portfolio-page">
    <div class="container">
      <div
        v-if="showLoading"
        class="portfolio-loading-img">
        <img
          src="../assets/gif/loading.gif"
          alt >
      </div>
      <div v-else>
        <div class="portfolio-title">
          <SectionHeader>{{ user == loggedInUser ? "Your" : user+"'s" }} Portfolio Page</SectionHeader>
          <div class="portfolio-subtitle">
            <div class="portfolio-subtitle-details">
              <div
                title="Estimated total value of tokens held."
              >Total Value: ${{ totalHoldings | comma }}</div>
            </div>
            <div
              class="portfolio-subtitle-holding"
              title="Total tokens from others held in this portfolio."
            >{{ platformId }}
              <!--span>
                <b>TOTAL Token Holdings: {{ totalHoldings | comma }}</b>
              </span-->
            </div>
          </div>
          <div class="portfolio-user">

            <div class="portfolio-userimg">
              <img
                :src="userImageUrl"
                onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                title="Click to see transaction history"
                @click="goHistory(user)"
              >
            </div>
          </div>
           <div class="deposit-button">
            <div
                v-if="user == loggedInUser"
                class="deposit-buttonimg">
              <img
                src=https://sample-imgs.s3.amazonaws.com/depositExample.png
                title="Click to deposit crypto from your mainnet wallet"
                @click="goDepositWithdraw('', 'deposit', '')"
              >
            </div>
          </div>
        </div>

        <div class="table-section row">
          <table>
            <thead>
              <tr>
                <th scope="col">Token</th>
                <th scope="col">Balance</th>
                <th scope="col">Value</th>
                <th v-if="user == loggedInUser" scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item,index) in tableRows"
                :index="index"
                :key="item.token.cryptoravesTokenId"

              >
                <td width="50%">
                  <img
                    :src="item.token.tokenBrandImageUrl"
                    :title="item.token.ercType == 20 || item.token.ercType == 1155 ? item.token.symbol : 'NFT: '+item.token.symbol+' #'+item.token.nftIndex"
                    class="table-img"
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                    @click="item.token.ercType == 20 || item.token.ercType == 1155 ? $router.push({name: 'TokenPage',query: {token: item.token.symbol}}) : $router.push({name: 'TokenPage',query: {token: item.token.symbol, id: item.token.id}})"
                  >

                </td>
                <td
                  :class="[user === item.tokenBrand? 'td-position-relative':'']"
                  width="50%"
                >
                  <div>{{ Math.round(item.balance / Math.pow(10, item.token.decimals)) | comma }}</div>

                </td>
                <td>
                  <div>${{ Math.round(item.balance / Math.pow(10, item.token.decimals) * .1 * Math.random()) | comma }}</div>
                </td>
                <td
                  v-if="user == loggedInUser"
                  @click="item.token.ercType == 20 ? goDepositWithdraw(item.token.symbol, 'withdraw', '') : goDepositWithdraw(item.token.symbol, 'withdraw', item.token.id) "
                  class="depositWithdrawLink"
                  title="Withdraw to your mainnet wallet"
                >Withdraw</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row">
          <div class="portfolio-pagination">
            <span
              :class="[visiblePrev ? 'btn btnpagination' : 'btn disabledbtn']"
              @click="goPrev"
            >
              <i class="fa fa-angle-left"/>
            </span>
            Page {{ currentPage }}
            <span
              href="#"
              :class="[visibleNext ? 'btn btnpagination' : 'btn disabledbtn']"
              @click="goNext"
            >
              <i class="fa fa-angle-right"/>
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
  name: 'PortfolioPage',
  components: {
    SectionHeader
  },
  watch:{
      $route (){
          if (this.$route.query.page){
            this.currentPage = this.$route.query.page
          } else {
            this.currentPage = 1
          }
          this.getPortfolio(this.$route.query.user,this.currentPage)
      }
  },
  data() {
    return {
      loggedInUser: 'N / A',
      userData: '',
      user: '',
      tableRows: [],
      rowCount: 0,
      rowsPerPage: 20,
      tokenBalance: '0',
      totalReciprocated: 0,
      tokenBalancePercentage: 0,
      totalDistributed: 0,
      totalHoldings: 0,
      currentPage: 1,
      visibleNext: true,
      visiblePrev: true,
      showLoading: true,
      userImageUrl: ''
    }
  },
  created() {
    this.user = this.$route.query.user
    if (this.$route.query.page){
      this.currentPage = this.$route.query.page
    }

    this.getPortfolio(this.user, this.currentPage)
    try{
      this.userData = JSON.parse(localStorage.getItem('webData'))
    }catch(e){}
    if(this.userData){
      this.loggedInUser = this.userData.userName
    }
  },
  methods: {
    goNext() {
      if (this.visibleNext) {
        this.showLoading = true
        this.currentPage++
        this.$router.push({
          name: 'PortfolioPage',
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
          name: 'PortfolioPage',
          query: {
            user: this.user,
            page: this.currentPage
          }
        })
      }
    },
    async getPortfolio(user, page) {
      if(page){
        this.currentPage = page
      }
      this.user = user

      if (user.toLowerCase().startsWith('import')) {
        user = 'IMPORT'
      }
      if (user.toLowerCase().startsWith('export')) {
        user = 'EXPORT'
      }

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
          query: '{ userBalances('+paginationQueryStringSegment+', where: {user: "'+this.cryptoravesAddress+'"}){ id, user { id twitterUserId userName cryptoravesAddress imageUrl isManaged isUser dropped tokenId layer1Address }, token {id cryptoravesTokenId isManagedToken ercType nftIndex name symbol decimals emoji tokenBrandImageUrl }, balance }}'
        }
      ).then(response => {
        this.rowCount = response.data.data.userBalances.length
        this.tableRows = response.data.data.userBalances  //match graph schema to fit as best as possible the original format below?

        if(this.rowCount > this.rowsPerPage){
          this.visibleNext = true
          this.tableRows.pop()
        } else {
          this.visibleNext = false
        }


      }).catch(e => {
        console.log(e)
      })
      this.showLoading = false
    },

    goAnother(user) {
      if (this.user !== user) {
        this.showLoading = true
        this.$router.push({
          name: 'PortfolioPage',
          query: {
            user: user
          }
        })
      }
    },
    goHistory(user) {
      this.$router.push({
        name: 'HistoryPage',
        query: {
          user: user
        }
      })
    },
    goDepositWithdraw(ticker, depWdr, nftId){
      let q = {
        ticker: ticker,
        txnType: depWdr
      }
      if (nftId){
        q['id']=nftId
      }
      this.$router.push({
        name: 'DepositWithdraw',
        query: q
      })
    }
  }
}
</script>
<style scoped>
.portfolio-title {
  position: relative;
}
.portfolio-subtitle {
  color: rgb(0, 38, 101);
  font-family: 'Montserrat';
  text-align: center;
  line-height: 2em;
}
.portfolio-subtitle-details {
  margin-top: 20px;
  color: rgb(0, 38, 101);
  font-family: 'Montserrat';
  text-align: center;
  line-height: 1.2em;
}
.portfolio-subtitle-holding {
  display: flex;
  margin-top: 100px;
  margin-bottom: -90px;
  color: rgb(0, 38, 101);
  font-family: 'Montserrat';
  text-align: center;
  line-height: 1.2em;
  justify-content: center;
}
.portfolio-subtitle-holding span {
  transform: translate(70%, 0);
}
.portfolio-page {
  margin-bottom: 50px;
}
.portfolio-loading-img {
  display: flex;
  height: calc(100vh - 370px);
}
.portfolio-loading-img img {
  margin: auto;
}
.portfolio-user {
  position: absolute;
  top: 70px;
  left: 0;
  text-align: center;
}
.deposit-button {
  position: absolute;
  top: 70px;
  right: 0;
  text-align: center;
}
.portfolio-userlink {
  margin: 10px auto 10px auto;
  font-family: 'Montserrat';
  font-size: 15px;
  color: royalblue;
  text-decoration: underline;
}
.portfolio-userlink:hover {
  cursor: pointer;
}
.depositWithdrawLink:hover{
  cursor: pointer;
}

.deposit-buttonimg {
  background: white;
  display: flex;
  margin: auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid lightgrey;

  transition: all 0.5s ease-out;
  cursor: pointer;
}
.deposit-buttonimg img {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: auto;
}
@keyframes avatar-from-effect {
  0% {
    box-shadow: 0 0 0 0px rgb(43, 96, 222, 0.8);
  }
  100% {
    box-shadow: 0 0 0 15px rgb(43, 96, 222, 0);
  }
}

.portfolio-userimg {
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
.portfolio-userimg:active {
  transform: translateY(0.5em);
}

.portfolio-userimg img {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: auto;
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
  background: lightgrey;
  height: 60px;
  color: rgb(0, 38, 101);
  font-weight: bold;
  font-size: 20px;
}

table tbody tr {
  height: 80px;
  color: rgb(0, 38, 101);
  font-size: 20px;
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
table tbody tr:nth-child(even) {
  background-color: rgb(246, 250, 251);
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
.tr-orange-color {
  color: peru;
}
.tr-lightblue-color {
  background-color: lightblue;
}
.td-position-relative {
  position: relative;
}
.td-position-absolute {
  font-size: 15px;
  font-style: italic;
  position: absolute;
  top: 35%;
  right: 10px;
}
.td-position-absolute:hover {
  cursor: pointer;
}
.history-link {
  font-size: 1.5em;
  font-family: 'Montserrat';
  color: rgb(0, 38, 101);
  text-align: center;
  margin: auto;
  cursor: pointer;
}
.portfolio-pagination {
  margin: 10px auto 50px auto;
  font-weight: bold;
  font-size: 20px;
  color: rgb(0, 38, 101);
}
@media only screen and (max-width: 767px) {
  .portfolio-user {
    position: relative;
    margin-bottom: -40px;
    z-index: 2;
  }
  .deposit-button {
    position: relative;
    margin-bottom: -40px;
    z-index: 2;

  }
  .portfolio-subtitle-holding {
    margin-top: 30px;
    margin-bottom: 0px;
  }
  .portfolio-subtitle-holding span {
    transform: none;
  }
  .td-position-absolute {
    position: relative;
    top: 0;
    right: 0;
  }
  table thead td div {
    position: relative;
    margin-top: -20px;
  }
}
@media only screen and (max-width: 410px) {
  .history-link {
    font-size: 1em;
  }
  .portfolio-userimg {
    width: 80px;
    height: 80px;
  }
  .portfolio-userimg img {
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
  .portfolio-pagination {
    font-size: 15px;
  }
  .table-img {
    height: 50px;
    width: 50px;
  }
}
</style>
