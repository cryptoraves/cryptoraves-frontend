<template>
  <div class="history-page">
    <div class="container">
      <SectionHeader></SectionHeader>
      <div class="row">
        <div class="history-userimg">
          <img :src="this.userImageUrl" />
        </div>
        <div class="history-title">{{this.platformHandle}}'s Transaction History</div>
      </div>
      <div class="row">
        <table>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">From</th>
              <th scope="col">Sent/Received</th>
              <th scope="col">Link to Tweet</th>
              <th scope="col">Token Brand</th>
              <th scope="col">Token Amount</th>
              <th scope="col">To</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in tableRows" :index="index" :key="item.txnId">
              <th scope="row">
                <b
                  class="link"
                  @click="goBlock(blockexplorerUrl + item.txnHash)"
                >{{item.txnHash | truncate}}</b>
              </th>
              <td>
                <img
                  class="table-img"
                  :src="item.userFromImageUrl"
                  :title="item.userFrom"
                  @click="goPortfolio(item.userFrom)"
                />
              </td>
              <td>
                <b v-if="platformHandle === item.userFrom">Sent</b>
                <b v-else>Receive</b>
              </td>
              <td>
                <img
                  class="link"
                  src="../assets/img/twittersmall.png"
                  @click="goTweet(item.linkToContent)"
                />
              </td>
              <td>
                <img
                  class="table-img"
                  :src="item.tokenBrandImageUrl"
                  :title="item.tokenBrand"
                  @click="goPortfolio(item.tokenBrand)"
                />
              </td>
              <td>
                <b>{{item.amount | comma}}</b>
              </td>
              <td>
                <img
                  class="table-img"
                  :src="item.userToImageUrl"
                  :title="item.userTo"
                  @click="goPortfolio(item.uesrTo)"
                />
              </td>
              <td>
                <b class="link" @click="goTransaction(item.txnHash)">{{item.date}}</b>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <td colspan="15">
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
            </td>
          </tfoot>
        </table>
      </div>
      <div class="row">
        <div class="portfolio-link">Link to {{this.platformHandle}}'s Portfolio Page.</div>
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
  name: "HistoryPage",
  components: {
    SectionHeader
  },
  data() {
    return {
      user: "",
      tableRows: [],
      rowCount: 0,
      tokenBalance: "0",
      earliestDatetime: "",
      latestDatetime: "",
      initialPagePtr: 0,
      visibleNext: true,
      visiblePrev: true,
      platformHandle: "",
      userImageUrl: "",
      blockexplorerUrl: "",
      testtxnHash:
        "0xec242cb3ac20f8db1ffa4ff6b84902cba5cec3c532212db6b0332cdbf67ec419"
    };
  },
  created() {
    this.user = "@cypher";
    this.$ga.page("/");

    this.getHistory(this.user, 0);
  },
  beforeRouteUpdate(to, from, next) {
    // just use `this`
    this.user = to.query.user;
    this.getHistory(this.user, 0);
    next();
  },
  methods: {
    goNext() {
      if (this.visibleNext) {
        this.getHistory(this.user, 1);
      }
    },
    goPrev() {
      if (this.visiblePrev) {
        this.getHistory(this.user, 2);
      }
    },
    getHistory(user, initFlag) {
      if (initFlag == 0) {
        axios
          .get(
            "https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=transactionHistory&userName=" +
              user
          )
          .then(response => {
            // JSON responses are automatically parsed.
            this.user = user;
            let res = response.data;
            this.tableRows = _.cloneDeep(res.tableRows);
            this.rowCount = res.rowCount;
            this.tokenBalance = res.tokenBalance;
            this.earliestDatetime = res.earliestDatetime;
            this.latestDatetime = res.latestDatetime;
            this.initialPagePtr = 0;
            this.visiblePrev = false;
            this.visibleNext = res.next ? true : false;
            this.platformHandle = res.platformHandle;
            this.userImageUrl = res.userImageUrl;
            this.blockexplorerUrl = res.blockexplorerUrl;
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
            // JSON responses are automatically parsed.
            this.user = user;
            let res = response.data;
            this.tableRows = _.cloneDeep(res.tableRows);
            this.rowCount = res.rowCount;
            this.tokenBalance = res.tokenBalance;
            this.latestDatetime = res.latestDatetime;
            this.earliestDatetime = res.earliestDatetime;
            this.initialPagePtr++;
            this.visiblePrev = true;
            this.visibleNext = res.next ? true : false;
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        axios
          .get(
            "https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=transactionHistory&userName=" +
              user +
              "&latestDatetime=" +
              this.latestDatetime
          )
          .then(response => {
            // JSON responses are automatically parsed.
            this.user = user;
            let res = response.data;
            this.tableRows = _.cloneDeep(res.tableRows);
            this.rowCount = res.rowCount;
            this.tokenBalance = res.tokenBalance;
            this.latestDatetime = res.latestDatetime;
            this.earliestDatetime = res.earliestDatetime;
            this.initialPagePtr--;
            this.visiblePrev =
              res.prev && this.initialPagePtr > 0 ? true : false;
            this.visibleNext = true;
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    goAnother(user) {
      this.$parent.$emit("changeUser", user);
      this.$router.push({
        name: "History",
        query: {
          user: user
        }
      });
    },
    goPortfolio(user) {
      this.$parent.$emit("changeUser", user);
      this.$router.push({ name: "Portfolio", query: { user: user } });
    },
    goBlock(link) {
      window.open(link);
    },
    goTweet(link) {
      window.open(link);
    },
    goTransaction(txnHash) {
      this.$parent.$emit("changeUser", txnHash);
      this.$router.push({
        name: "ConfirmationPage",
        query: { txnId: txnHash }
      });
    }
  }
};
</script>
<style scoped>
.history-page {
  margin-bottom: 50px;
}

.history-title {
  font-size: 3.5em;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  font-weight: bold;
  text-align: center;
  margin: auto;
}

.history-userimg {
  display: flex;
  margin: auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid lightgrey;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 1, 0.3);
  -moz-box-shadow: 0px 0px 15px 5px rgba(0, 0, 1, 0.3);
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 1, 0.3);
  animation: avatar-from-effect 2s infinite;
}
@keyframes avatar-from-effect {
  0% {
    box-shadow: 0 0 0 0px rgb(0, 38, 101, 0.5);
  }
  100% {
    box-shadow: 0 0 0 15px rgb(0, 38, 101, 0);
  }
}
.history-userimg img {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: auto;
}
.history-userimg img:hover {
  opacity: 0.7;
  cursor: pointer;
}

table {
  font-family: "Montserrat";
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  margin: 100px auto 50px auto;
  position: relative;
  box-shadow: 0 0 1em 1px rgba(0, 0, 0, 0.25);
}

table td,
table th {
  padding-left: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
}
table thead tr {
  height: 80px;
  color: rgb(0, 38, 101);
  background: #ffed86;
  font-weight: bold;
  font-size: 20px;
}
table tfoot td {
  font-weight: bold;
  font-size: 20px;
}
table tbody tr {
  height: 80px;
  border-bottom: 1px solid lightgrey;
  color: black;
  font-size: 18px;
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
  background-color: #dddddd;
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
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  text-align: center;
  margin: auto;
}
</style>