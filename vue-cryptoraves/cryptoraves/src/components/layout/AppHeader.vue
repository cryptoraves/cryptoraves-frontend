<template>
  <div class="app-header">
    <div class="app-header-container container">
      <div class="row">
        <div class="d-flex col-sm-12 col-lg-2">
          <div class="app-header-logoarea">
            <a href="/">
              <img src="../../assets/img/cryptoraves_Horozontal Alignment_Full Color_JPG.png" alt />
            </a>
          </div>
        </div>
        <div class="d-flex d-flex-right col-lg-4 col-sm-12">
          <!-- ---------------------------------------------------------------------------------------- -->
          <!-- LeaderBoard after Date Ready -->
          <!-- <div class="app-header-leaderboard">LEADERBOARD</div> -->
          <!-- ---------------------------------------------------------------------------------------- -->
        </div>
        <div class="col-lg-6 col-sm-12 text-right">
          <div class="d-flex d-flex-right form-group mt-3">
            <div class="d-flex app-header-searchbar">
              <input
                id="autoTokenSelect"
                type="text"
                v-model="user"
                @change="goPortfolio"
                class="app-header-input"
                placeholder="Lookup Twitter @username."
                list="mylist"
              />
              <datalist id="mylist" v-if="user.length>1">
                <option v-bind:key="item" v-for="item in userList" :value="item">{{item}}</option>
              </datalist>
              <div class="app-header-icon" @click="goPortfolio">
                <i class="fa fa-search"></i>
              </div>
            </div>

            <router-link
              to="/"
              v-scroll-to="{
                            el: '#getToken',
                            duration: 500,
                            easing: 'linear',
                            offset: -250,
                            force: true,
                            cancelable: true,
                        }"
            >
              <AppButton name="GET YOUR TOKENS" type1="true"></AppButton>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AppButton from "../ui/AppButton";

export default {
  name: "AppHeader",
  components: {
    AppButton
  },
  data() {
    return {
      user: "",
      userList: []
    };
  },
  created() {
    this.getUserList();
    this.$root.$on("changeUser", user => {
      this.user = "";
    });
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
    goPortfolio: function(event) {
      // `this` inside methods points to the Vue instance
      if (this.userList.includes(this.user)) {
        document.getElementById("autoTokenSelect").blur();
        this.$router.push({
          name: "PortfolioPage",
          query: {
            user: this.user
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.app-header {
  background-color: white;
  width: 100%;
  height: 100px;
  display: flex;
  box-shadow: 2.5px 4.33px 24px rgba(0, 0, 1, 0.11);
}
.app-header-container {
  margin: auto;
}

.app-header-logoarea,
img {
  width: 270px;
  height: 70px;
  margin: auto;
}
.app-header-leaderboard {
  font-size: 14px;
  font-family: "Montserrat";
  font-weight: bold;
  color: rgba(40, 40, 40, 0.8);
  text-align: center;
  margin-left: auto;
  cursor: pointer;
}
.app-header-leaderboard:hover {
  color: blue;
}
.app-header-searchbar {
  border: 1px solid #d7d7d7;
  border-radius: 50px;
  padding: 0px 15px;
  transition: all 200ms ease-out;
}
.app-header-searchbar:hover {
  -webkit-box-shadow: 0px 1px 8px -1px rgba(17, 71, 235, 1);
  -moz-box-shadow: 0px 1px 8px -1px rgba(17, 71, 235, 1);
  box-shadow: 0px 1px 8px -1px rgba(17, 71, 235, 1);
  transition: all 200ms ease-out;
}
.app-header-input {
  min-width: 230px !important;
  height: 50px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  line-height: 1.929;
  color: black;
  font-family: "Montserrat";
}
.app-header-searchbar:focus-within {
  box-shadow: 0px 1px 8px -1px rgba(17, 71, 235, 1);
}
.app-header-icon {
  color: rgb(0, 123, 255);
  font-size: 20px;
  margin: auto;
}
.app-header-icon:hover {
  cursor: pointer;
  color: rgb(0, 38, 101);
}
@media only screen and (max-width: 1200px) {
  .app-header-leaderboard {
    margin-right: 50px;
  }
}
@media only screen and (max-width: 991px) {
  .app-header-logoarea {
    text-align: center;
  }
  .app-header {
    height: 200px;
  }
  .app-header-leaderboard {
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
}
@media only screen and (min-width: 0px) and (max-width: 767px) {
  .app-header-logoarea {
    text-align: center;
  }
}
</style>
