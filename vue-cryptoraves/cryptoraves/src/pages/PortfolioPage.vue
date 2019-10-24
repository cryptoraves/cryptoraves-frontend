<template>
  <div class="portfolio-page">
    <div class="container">
      <div v-if="showLoading" class="portfolio-loading-img">
        <img src="../assets/gif/loading.gif" alt />
      </div>
      <div v-else>
        <div class="portfolio-title">
          <SectionHeader :user="this.user">{{this.user}}'s Portfolio Page</SectionHeader>
          <div class="portfolio-subtitle">
            <div class="portfolio-subtitle-details">
              Token Balance: {{ this.tokenBalance | comma }}
              <br />
              Tokens Distributed: {{ this.totalDistributed | comma }}
              <br />
              Tokens Left to Share: {{ this.tokenBalancePercentage }}%
            </div>
            <div class="portfolio-subtitle-holding">
              <span>
                <b>TOTAL Token Holdings: {{ this.totalHoldings | comma }}</b>
              </span>
            </div>
          </div>
          <div class="portfolio-userimg">
            <img
              :src="this.userImageUrl"
              title="See this user’s Transaction History"
              @click="goHistory(user)"
            />
          </div>
        </div>

        <div class="table-section row">
          <table>
            <thead>
              <tr>
                <th scope="col">Token Brand</th>
                <th scope="col">Token Holdings</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in tableRows" :index="index" :key="item.txnId">
                <td>
                  <img
                    class="table-img"
                    :src="item.tokenBrandImageUrl"
                    :title="item.tokenBrand"
                    @click="goHistory(item.tokenBrand)"
                  />
                </td>
                <td>
                  <div>{{item.balance | comma}}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row">
          <div class="portfolio-pagination">
            <span
              v-on:click="goPrev"
              class="btn btnpagination"
              v-bind:class="[visiblePrev ? '' : 'disabledbtn']"
            >
              <i class="fa fa-angle-left"></i>
            </span>
            Page {{initialPagePtr + 1}}
            <span
              href="#"
              v-on:click="goNext"
              class="btn btnpagination"
              v-bind:class="[visibleNext ? '' : 'disabledbtn']"
            >
              <i class="fa fa-angle-right"></i>
            </span>
          </div>
        </div>
        <div class="row">
          <div
            class="history-link"
            @click="goHistory(user)"
          >Link to {{this.user}}'s Transaction History Page.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";
import SectionHeader from "../components/ui/SectionHeader";

const Record = 20;

export default {
  name: "PortfolioPage",
  components: {
    SectionHeader
  },
  data() {
    return {
      user: "",
      tableRows: [],
      rowCount: 0,
      tokenBalance: "0",
      tokenBalancePercentage: 0,
      totalDistributed: 0,
      totalHoldings: 0,
      earliestDatetime: "",
      latestDatetime: "",
      initialPagePtr: 0,
      visibleNext: true,
      visiblePrev: true,
      showLoading: true,
      userImageUrl: ""
    };
  },
  created() {
    this.user = this.$route.query.user;

    this.earliestDatetime = this.$route.query.earliestDatetime;
    this.latestDatetime = this.$route.query.latestDatetime;
    this.initFlag = 0;

    if (this.earliestDatetime) {
      this.initFlag = 1;
    }
    if (this.latestDatetime) {
      this.initFlag = 2;
    }

    if (this.$route.query.page && this.initFlag) {
      if (this.initFlag == 1) {
        this.initialPagePtr = this.$route.query.page - 2;
      }
      if (this.initFlag == 2) {
        this.initialPagePtr = this.$route.query.page;
      }
    }
    this.$ga.page("/");
    this.getPortfolio(this.user, this.initFlag);
  },
  beforeRouteUpdate(to, from, next) {
    // just use `this`
    this.user = to.query.user;

    console.log(from.query.user + " from.query.user");
    if (from.query.user != this.user) {
      this.getPortfolio(this.user, 0);
    }

    console.log(this.user + " this.user");
    next();
  },
  methods: {
    goNext() {
      if (this.visibleNext) {
        this.showLoading = true;
        this.getPortfolio(this.user, 1);
      }
    },
    goPrev() {
      if (this.visiblePrev) {
        this.showLoading = true;
        this.getPortfolio(this.user, 2);
      }
    },
    getPortfolio(user, initFlag) {
      if (initFlag == 0) {
        axios
          .get(
            "https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=portfolioPage&userName=" +
              user
          )
          .then(response => {
            // JSON responses are automatically parsed.
            let res = response.data;
            this.user = res.platformHandle;
            this.tableRows = _.cloneDeep(res.tableRows);
            this.ravity = res.ravity;
            this.rowCount = res.rowCount;
            this.tokenBalance = res.tokenBalance;
            this.totalDistributed = res.totalDistributed;
            this.tokenBalancePercentage = res.tokenBalancePercentage;
            this.totalHoldings = res.totalHoldings;
            this.latestDatetime = res.latestDatetime;
            this.earliestDatetime = res.earliestDatetime;
            this.initialPagePtr = 0;
            this.visiblePrev = false;
            this.visibleNext = res.next ? true : false;
            this.userImageUrl = res.userImageUrl;
            this.showLoading = false;
          })
          .catch(e => {
            console.log(e);
          });
      } else if (initFlag == 1) {
        axios
          .get(
            "https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=portfolioPage&userName=" +
              user +
              "&earliestDatetime=" +
              this.earliestDatetime
          )
          .then(response => {
            this.initialPagePtr++;
            if (this.initialPagePtr) {
              this.$router.push({
                path: "portfolio",
                query: {
                  user: user,
                  earliestDatetime: this.earliestDatetime,
                  page: this.initialPagePtr + 1
                }
              });
            } else {
              this.$router.push({ path: "portfolio", query: { user: user } });
            }
            // JSON responses are automatically parsed.
            let res = response.data;
            this.user = res.platformHandle;
            this.tableRows = _.cloneDeep(res.tableRows);
            this.ravity = res.ravity;
            this.rowCount = res.rowCount;
            this.tokenBalance = res.tokenBalance;
            this.totalDistributed = res.totalDistributed;
            this.tokenBalancePercentage = res.tokenBalancePercentage;
            this.totalHoldings = res.totalHoldings;
            this.latestDatetime = res.latestDatetime;
            this.earliestDatetime = res.earliestDatetime;

            this.visiblePrev = true;
            this.visibleNext = res.next ? true : false;
            this.userImageUrl = res.userImageUrl;
            this.platformHandle = res.platformHandle;
            this.showLoading = false;
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        axios
          .get(
            "https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=portfolioPage&userName=" +
              user +
              "&latestDatetime=" +
              this.latestDatetime
          )
          .then(response => {
            this.initialPagePtr--;

            if (this.initialPagePtr) {
              this.$router.push({
                path: "portfolio",
                query: {
                  user: user,
                  latestDatetime: this.latestDatetime,
                  page: this.initialPagePtr + 1
                }
              });
            } else {
              this.$router.push({ path: "portfolio", query: { user: user } });
            }
            // JSON responses are automatically parsed.
            let res = response.data;
            this.user = res.platformHandle;
            this.tableRows = _.cloneDeep(res.tableRows);
            this.ravity = res.ravity;
            this.rowCount = res.rowCount;
            this.tokenBalance = res.tokenBalance;
            this.totalDistributed = res.totalDistributed;
            this.tokenBalancePercentage = res.tokenBalancePercentage;
            this.totalHoldings = res.totalHoldings;
            this.latestDatetime = res.latestDatetime;
            this.earliestDatetime = res.earliestDatetime;

            this.visiblePrev =
              res.prev && this.initialPagePtr > 0 ? true : false;
            this.visibleNext = true;
            this.userImageUrl = res.userImageUrl;
            this.platformHandle = res.platformHandle;
            this.showLoading = false;
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    goAnother(user) {
      if (this.user !== user) {
        this.showLoading = true;
        this.$root.$emit("changeUser", user);
        this.$router.push({
          name: "PortfolioPage",
          query: {
            user: user
          }
        });
      }
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
    },

    goTransaction(txnHash) {
      this.$root.$emit("changeUser", user);
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
.portfolio-title {
  position: relative;
}
.portfolio-subtitle {
  color: rgb(0, 38, 101);
  font-family: "Montserrat";
  text-align: center;
  line-height: 2em;
}
.portfolio-subtitle-details {
  margin-top: 20px;
  color: rgb(0, 38, 101);
  font-family: "Montserrat";
  text-align: center;
  line-height: 1.2em;
}
.portfolio-subtitle-holding {
  display: flex;
  margin-top: 100px;
  margin-bottom: -90px;
  color: rgb(0, 38, 101);
  font-family: "Montserrat";
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
.portfolio-userimg {
  position: absolute;
  background: white;
  top: 50%;
  left: 0;
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
  font-family: "Montserrat";
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

.history-link {
  font-size: 1.5em;
  font-family: "Montserrat";
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
  .portfolio-userimg {
    position: relative;
    margin-top: 50px;
    margin-bottom: -110px;
    z-index: 2;
  }
  .portfolio-subtitle-holding {
    margin-top: 30px;
    margin-bottom: 0px;
  }
  .portfolio-subtitle-holding span {
    transform: none;
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
