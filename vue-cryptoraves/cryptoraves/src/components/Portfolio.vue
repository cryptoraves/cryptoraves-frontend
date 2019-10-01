<template>
  <div style="height:600px">
    <h1>Portfolio Page</h1>
  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";

const Record = 20;

export default {
  name: "Portfolio",
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
      visiblePrev: true
    };
  },
  created() {
    this.user = this.$route.query.user;

    this.$ga.page("/");

    this.getPortfolio(this.user, 0);
  },
  beforeRouteUpdate(to, from, next) {
    // just use `this`
    this.user = to.query.user;
    this.getPortfolio(this.user, 0);
    next();
  },
  methods: {
    goNext() {
      if (this.visibleNext) {
        this.getPortfolio(this.user, 1);
      }
    },
    goPrev() {
      if (this.visiblePrev) {
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
            "https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=portfolioPage&userName=" +
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
        name: "Portfolio",
        query: {
          user: user
        }
      });
    },
    goTweet(link) {
      window.open(link);
    },
    goTransaction(txnHash) {
      this.$parent.$emit("changeUser", txnHash);
      this.$router.push({ name: "Confirmation", query: { txnId: txnHash } });
    }
  }
};
</script>

