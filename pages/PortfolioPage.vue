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
          <SectionHeader>{{ user }}'s Portfolio Page</SectionHeader>
          <div class="portfolio-subtitle">
            <div class="portfolio-subtitle-details">
              <div
                title="The sum of jointly-held tokens between this user and others."
              >Total Reciprocated: {{ totalReciprocated | comma }}</div>
            </div>
            <div
              class="portfolio-subtitle-holding"
              title="Total tokens from others held in this portfolio."
            >
              <span>
                <b>TOTAL Token Holdings: {{ totalHoldings | comma }}</b>
              </span>
            </div>
          </div>
          <div class="portfolio-user">
            <div
              class="portfolio-userlink"
              title="Click to See Hodler's Page"
              @click="goHodler(user)"
            >Click for Hodler's Page</div>
            <div class="portfolio-userimg">
              <img
                :src="userImageUrl"
                onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                title="Click to See Hodler's Page"
                @click="goHodler(user)"
              >
            </div>
          </div>
        </div>

        <div class="table-section row">
          <table>
            <thead>
              <tr>
                <th scope="col">Token Brand</th>
                <th scope="col">Token Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item,index) in tableRows"
                :index="index"
                :key="item.txnId"
                :class="[user === item.tokenBrand? 'tr-lightblue-color':'']"
              >
                <td width="50%">
                  <img
                    v-if="item.ticker"
                    :src="item.tokenBrandImageUrl"
                    :title="item.ticker"
                    class="table-img"
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                    @click="goAnother(item.tokenBrand)"
                  >
                  <img
                    v-else
                    :src="item.tokenBrandImageUrl"
                    :title="item.tokenBrand"          
                    class="table-img"
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                    @click="goAnother(item.tokenBrand)"
                  >
                </td>
                <td
                  :class="[user === item.tokenBrand? 'td-position-relative':'']"
                  width="50%"
                >
                  <div>{{ item.balance | comma }}</div>
                  <div
                    v-if="user === item.tokenBrand"
                    :title="getTitle()"
                    class="td-position-absolute"
                  >{{ tokenBalancePercentage }}%</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row">
          <div class="portfolio-pagination">
            <span
              class="btn btnpagination [visiblePrev ? '' : 'disabledbtn']"
              @click="goPrev"
            >
              <i class="fa fa-angle-left"/>
            </span>
            Page {{ initialPagePtr }}
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
            class="history-link"
            @click="goHodler(user)"
          >Link to {{ user }}'s Hodler's Page.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import SectionHeader from '../components/ui/SectionHeader'

export default {
  name: 'PortfolioPage',
  components: {
    SectionHeader
  },
  data() {
    return {
      user: '',
      tableRows: [],
      rowCount: 0,
      tokenBalance: '0',
      totalReciprocated: 0,
      tokenBalancePercentage: 0,
      totalDistributed: 0,
      totalHoldings: 0,
      initialPagePtr: 1,
      visibleNext: true,
      visiblePrev: true,
      showLoading: true,
      userImageUrl: ''
    }
  },
  created() {
    this.user = this.$route.query.user
    if (this.$route.query.page) {
      this.initialPagePtr = this.$route.query.page
    } else {
      this.initialPagePtr = 1
    }

    this.getPortfolio(this.user, this.initialPagePtr)
  },
  methods: {
    getTitle() {
      return this.tokenBalancePercentage + '% left to share'
    },
    goNext() {
      if (this.visibleNext) {
        this.showLoading = true
        this.getPortfolio(this.user, parseInt(this.initialPagePtr) + 1)
      }
    },
    goPrev() {
      if (this.visiblePrev) {
        this.showLoading = true
        this.getPortfolio(this.user, parseInt(this.initialPagePtr) - 1)
      }
    },
    getPortfolio(user, page) {
      this.$router.push({
        path: 'portfolioPage?user='+user+'&page='+page 
      })
      if (user.toLowerCase().startsWith('import')) {
        user = 'IMPORT'
      }
      if (user.toLowerCase().startsWith('export')) {
        user = 'EXPORT'
      }
      axios
        .get(
          this.$store.state.WebsiteInterfaceUrl + '?pageType=portfolioPage&userName=' +
            user +
            '&page=' +
            page
        )
        .then(response => {
          // JSON responses are automatically parsed.
          let res = response.data
          this.user = res.platformHandle
          this.tableRows = _.cloneDeep(res.tableRows)
          this.ravity = res.ravity
          this.rowCount = res.rowCount
          this.tokenBalance = res.tokenBalance
          this.totalDistributed = res.totalDistributed
          this.totalReciprocated = res.totalReciprocated
          this.tokenBalancePercentage = res.tokenBalancePercentage
          this.totalHoldings = res.totalHoldings
          this.initialPagePtr = page
          this.visiblePrev = res.prev ? true : false
          this.visibleNext = res.next ? true : false
          this.userImageUrl = res.userImageUrl
          this.showLoading = false
        })
        .catch(e => {
          console.log(e)
        })
    },
    goHodler(user) {
      this.$root.$emit('changeUser', user)
      // this.$root.$emit("sendReciprocated", this.totalReciprocated);
      this.$router.push({ name: 'HodlerPage', query: { user: user } })
    },
    goAnother(user) {
      if (this.user !== user) {
        this.showLoading = true
        this.$root.$emit('changeUser', user)
        this.$router.push({
          name: 'PortfolioPage',
          query: {
            user: user
          }
        })
      }
    },
    goHistory(user) {
      this.$root.$emit('changeUser', user)
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
}
@keyframes avatar-from-effect {
  0% {
    box-shadow: 0 0 0 0px rgb(43, 96, 222, 0.8);
  }
  100% {
    box-shadow: 0 0 0 15px rgb(43, 96, 222, 0);
  }
}

.portfolio-userimg:hover {
  cursor: pointer;
  transition: all 0.5s ease-out;
  transform: translateY(-0.5em);
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
.portfolio-userimg img:hover {
  opacity: 0.7;
  cursor: pointer;
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
