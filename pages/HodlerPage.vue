<template>
  <div class="hodler-page">
    <div class="container">
      <div
        v-if="showLoading"
        class="hodler-loading-img">
        <img
          src="../assets/gif/loading.gif"
          alt >
      </div>
      <div v-else>
        <div class="hodler-title">
          <SectionHeader :user="user">Hodler's of {{ user }}'s Tokens</SectionHeader>
          <div class="hodler-subtitle">
            <div class="hodler-subtitle-details">
              <div
                class="hodler-subtitle-details-link"
                @click="goHodlerFaq"
              >What the heck is a hodler, anyway?</div>
              <!-- <div
                title="The sum of jointly-held tokens between this user and others."
              >
                Total Reciprocated: {{ totalReciprocated | comma }}
              </div>-->
            </div>
            <div
              class="hodler-subtitle-holding"
              title="Total tokens from others held in this portfolio."
            >
              <span>
                <b>
                  TOTAL {{ user }}’s Tokens Distributed:
                  {{ totalDistributed | comma }}
                </b>
              </span>
            </div>
          </div>
          <div class="hodler-user">
            <div
              class="hodler-userlink"
              title="Click to See Transaction History"
              @click="goHistory(user)"
            >Click for Transactions</div>
            <div class="hodler-userimg">
              <img
                :src="userImageUrl"
                onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                title="Click to See Transaction History"
                @click="goHistory(user)"
              >
            </div>
          </div>
        </div>

        <div class="table-section row">
          <table>
            <thead>
              <tr>
                <th scope="col">Hodler</th>
                <th scope="col">Token Amount Held</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in tableRows"
                :index="index"
                :key="item.txnId"
                :class="[user === item.hodler ? 'tr-purple-color' : '']"
              >
                <td width="50%">
                  <img
                    v-if="item.ticker"
                    :title="item.ticker"
                    :src="item.tokenBrandImageUrl"
                    class="table-img"
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                    @click="goAnother(item.hodler)"
                  >
                  <img
                    v-else
                    :src="item.tokenBrandImageUrl"
                    :title="item.hodler"
                    class="table-img"
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                    @click="goAnother(item.hodler)"
                  >
                </td>
                <td width="50%">
                  <div>{{ item.tokensDistributed | comma }}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row">
          <div class="hodler-pagination">
            <span
              class="btn btnpagination [visiblePrev ? '' : 'disabledbtn']"
              @click="goPrev">
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
            @click="goHistory(user)"
          >Link to {{ user }}'s Transaction History Page.</div>
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
  name: 'HodlerPage',
  components: {
    SectionHeader
  },
  data() {
    return {
      user: '',
      tableRows: [],
      rowCount: 0,
      totalReciprocated: 0,
      totalDistributed: 0,
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

    this.getHodler(this.user, this.initialPagePtr)
  },
  beforeRouteUpdate(to, from, next) {
    // just use `this`
    this.user = to.query.user

    if (from.query.user != this.user) {
      this.getHodler(this.user, 0)
    }

    next()
  },
  methods: {
    goHodlerFaq: function() {
      this.$router.push({
        name: 'Faq',
        query: {
          target: 'hodler'
        }
      })
    },
    goNext() {
      if (this.visibleNext) {
        this.showLoading = true
        this.getHodler(this.user, parseInt(this.initialPagePtr) + 1)
      }
    },
    goPrev() {
      if (this.visiblePrev) {
        this.showLoading = true
        this.getHodler(this.user, parseInt(this.initialPagePtr) - 1)
      }
    },
    getHodler(user, page) {
      this.$router.push({
        path: 'hodlerPage?user='+user+'&page='+page 
      })
      if (user.toLowerCase().startsWith('import')) {
        user = 'IMPORT'
      }
      if (user.toLowerCase().startsWith('export')) {
        user = 'EXPORT'
      }
      axios
        .get(
          this.$store.state.WebsiteInterfaceUrl + '?pageType=hodlersPage&userName=' +
            user +
            '&page=' +
            page
        )
        .then(response => {
          // JSON responses are automatically parsed.
          let res = response.data
          this.user = res.platformHandle
          this.tableRows = _.cloneDeep(res.tableRows)
          this.rowCount = res.rowCount
          this.totalDistributed = res.totalDistributed
          // this.totalReciprocated = res.totalReciprocated;
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
      // localStorage.setItem("transactionPageNum", 0);
      // localStorage.setItem("transactionFlag", 0);
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
.hodler-title {
  position: relative;
}
.hodler-subtitle {
  color: rgb(0, 38, 101);
  font-family: 'Montserrat';
  text-align: center;
  line-height: 2em;
}
.hodler-subtitle-details {
  margin-top: 20px;
  color: rgb(0, 38, 101);
  font-family: 'Montserrat';
  text-align: center;
  line-height: 1.2em;
}
.hodler-subtitle-details-link {
  text-decoration: underline;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 15px;
}
.hodler-subtitle-holding {
  display: flex;
  margin-top: 100px;
  margin-bottom: -90px;
  color: rgb(0, 38, 101);
  font-family: 'Montserrat';
  text-align: center;
  line-height: 1.2em;
  justify-content: center;
}
.hodler-subtitle-holding span {
  transform: translate(70%, 0);
}
.hodler-page {
  margin-bottom: 50px;
}
.hodler-loading-img {
  display: flex;
  height: calc(100vh - 370px);
}
.hodler-loading-img img {
  margin: auto;
}
.hodler-user {
  position: absolute;
  top: 70px;
  left: 0;
  text-align: center;
}
.hodler-userlink {
  margin: 10px auto 10px auto;
  font-family: 'Montserrat';
  font-size: 15px;
  color: royalblue;
  text-decoration: underline;
}
.hodler-userlink:hover {
  cursor: pointer;
}
.hodler-userimg {
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

.hodler-userimg:hover {
  cursor: pointer;
  transition: all 0.5s ease-out;
  transform: translateY(-0.5em);
}

.hodler-userimg:active {
  transform: translateY(0.5em);
}

.hodler-userimg img {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: auto;
}
.hodler-userimg img:hover {
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
  height: 60px;
  color: rgb(0, 38, 101);
  background: lightgrey;
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
tr:nth-child(even) {
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
.tr-purple-color {
  background-color: rgba(206, 12, 206, 0.644);
}
.history-link {
  font-size: 1.5em;
  font-family: 'Montserrat';
  color: rgb(0, 38, 101);
  text-align: center;
  margin: auto;
  cursor: pointer;
}
.hodler-pagination {
  margin: 10px auto 50px auto;
  font-weight: bold;
  font-size: 20px;
  color: rgb(0, 38, 101);
}
@media only screen and (max-width: 991px) {
  .hodler-subtitle-holding {
    margin-top: 30px;
    margin-bottom: 0px;
  }
  .hodler-subtitle-holding span {
    transform: none;
  }
}
@media only screen and (max-width: 767px) {
  .hodler-user {
    position: relative;
    margin-bottom: -40px;
    z-index: 2;
  }
}
@media only screen and (max-width: 410px) {
  .history-link {
    font-size: 1em;
  }
  .hodler-userimg {
    width: 80px;
    height: 80px;
  }
  .hodler-userimg img {
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
  .hodler-pagination {
    font-size: 15px;
  }
  .table-img {
    height: 50px;
    width: 50px;
  }
}
</style>
