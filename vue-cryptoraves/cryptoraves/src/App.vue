<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view />
    <AppFooter></AppFooter>

    <!-- <div class="community-area wow fadeInUp section-padding" id="contact">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <div class="heading">
              <div class="space-10"></div>
              <h1>Our Community</h1>
              <p>Contact: info@cryptoraves.space</p>
            </div>
            <div class="space-60"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 single-footer-area">
            <div class="single-footer">
              <div class="logo-area footer">
                <router-link to="/">
                  <img src="./assets/img/cryptoraves_Horozontal Alignment_Full Color_JPG2.png" alt />
                </router-link>
              </div>
              <p class="ml-2 mt-1">It's Crypto You can Tweet!</p>
            </div>
            <div class="social-area">
              <div class="single-community mid-social">
                <a class="twitter" href="https://twitter.com/cryptoraves">
                  <i class="fa fa-twitter"></i>
                </a>
              </div>
              <div class="single-community mid-social">
                <a class="youtube" href="https://www.reddit.com/user/cryptoraves">
                  <i class="fa fa-reddit"></i>
                </a>
              </div>
              <div class="single-community mid-social">
                <a class="github" href="https://www.facebook.com/CryptoRaves/">
                  <i class="fa fa-facebook"></i>
                </a>
              </div>
              <div class="single-community mid-social">
                <a class="behance" href="https://medium.com/@cryptoraves">
                  <i class="fa fa-medium"></i>
                </a>
              </div>
            </div>
            <div class="ethereum">
              <img src="./assets/img/ethereum1.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
import axios from "axios";
import AppHeader from "./components/layout/AppHeader";
import AppFooter from "./components/layout/AppFooter";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      postBody: "",
      errors: [],
      user: "",
      userList: [],
      currentScroll: 0,
      showHeader: false
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.getUserList();
    this.$on("changeUser", user => {
      this.user = "";
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    getUserList() {
      // cache management
      axios
        .get(
          "https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=userListLastUpdated"
        )
        .then(response => {
          // JSON responses are automatically parsed.
          localStorage.setItem(
            "lastUpdated",
            JSON.stringify(response.data.lastUpdated)
          );
        })
        .catch(e => {
          this.errors.push(e);
        });

      this.update = true;
      if (localStorage.userListLastUpdated) {
        if (localStorage.lastUpdated == localStorage.userListLastUpdated) {
          this.update = false;
        }
      }

      if (this.update) {
        localStorage.setItem("userListLastUpdated", localStorage.lastUpdated);
        axios
          .get(
            "https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=searchBar"
          )
          .then(response => {
            // JSON responses are automatically parsed.
            localStorage.setItem(
              "userList",
              JSON.stringify(response.data.userList)
            );
          })
          .catch(e => {
            this.errors.push(e);
          });
      }

      this.userList = JSON.parse(localStorage.getItem("userList"));
    },
    onDone() {
      document.querySelector("#getToken").style.animation = "shadow-pulse 1s";
      document.querySelector("#getToken").style.animationIterationCount = "3";
    },
    goPortfolio: function(event) {
      // `this` inside methods points to the Vue instance
      if (this.userList.includes(this.user)) {
        document.getElementById("autoSelect").blur();
        this.$router.push({
          name: "Portfolio",
          query: {
            user: this.user
          }
        });
      }
    },
    handleScroll(e) {
      // Any code to be executed when the window is scrolled
      if (this.currentScroll > e.srcElement.scrollingElement.scrollTop) {
        //scroll up
        if (e.srcElement.scrollingElement.scrollTop <= 100) {
          this.showHeader = false;
        }
      } else {
        //scroll down
        if (e.srcElement.scrollingElement.scrollTop > 100) {
          this.showHeader = true;
        }
      }
      this.currentScroll = e.srcElement.scrollingElement.scrollTop;
    },
    goAnother(user) {
      this.user = "";
    },
    goTransaction(txnHash) {
      this.user = "";
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:Bold");
@import url("https://fonts.googleapis.com/css?family=Montserrat");
@import url("https://fonts.googleapis.com/css?family=Montserrat:Bold");
@import url("./assets/css/font-awesome.min.css");
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import url("./assets/css/style.css");
@import url("./assets/css/responsive.css");
</style>
