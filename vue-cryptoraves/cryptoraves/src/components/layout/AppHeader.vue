<template>
  <div class="app-header">
    <div class="app-header-container container">
      <div class="row">
        <div class="d-flex col-sm-12 col-lg-2">
          <div class="app-header-logoarea">
            <a href="/">
              <img
                src="../../assets/img/cryptoraves_Horozontal Alignment_Full Color_JPG.png"
                alt
              />
            </a>
          </div>
        </div>
        <div class="d-flex d-flex-right col-lg-4 col-sm-12">
          <!-- ---------------------------------------------------------------------------------------- -->
          <!-- LeaderBoard after Date Ready -->
          <div class="app-header-leaderboard" @click="goLeaderboard">
            LEADERBOARD
          </div>
          <!-- ---------------------------------------------------------------------------------------- -->
        </div>
        <div class="col-lg-6 col-sm-12 text-right">
          <div class="d-flex d-flex-right form-group mt-3">
            <div class="app-header-searchbar-container">
              <div class="d-flex app-header-searchbar">
                <input
                  id="autoTokenSelect"
                  type="text"
                  v-model="user"
                  @input="debounceSearch"
                  @keyup.enter="onEnter"
                  @keyup.down="onArrowDown"
                  @keyup.up="onArrowUp"
                  @focus="inputFocused"
                  class="app-header-input"
                  placeholder="Lookup Twitter @username"
                />
                <div class="app-header-icon" @click="goHistory(user)">
                  <i class="fa fa-search"></i>
                </div>
              </div>
              <div
                id="searchResult"
                v-show="openSearch"
                class="app-header-search-result"
              >
                <div
                  v-for="(filteredUser, index) in result"
                  :key="index"
                  class="app-header-search-result-item"
                  @click="setResult(filteredUser)"
                  :class="{ 'is-active': index === arrowCounter }"
                >
                  {{ filteredUser }}
                </div>
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
                cancelable: true
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
      openSearch: false,
      user: "",
      userList: [],
      result: [],
      arrowCounter: 0,
      debounce: null
    };
  },
  created() {
    this.getUserList();
    this.$root.$on("changeUser", user => {
      this.user = "";
    });
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
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
          this.update = true;
          if (localStorage.userListLastUpdated) {
            if (localStorage.lastUpdated == localStorage.userListLastUpdated) {
              this.update = false;
            }
          }
          if (this.update) {
            localStorage.setItem(
              "userListLastUpdated",
              localStorage.lastUpdated
            );
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
                this.userList = Object.freeze(
                  JSON.parse(localStorage.getItem("userList"))
                );
              })
              .catch(e => {
                this.errors.push(e);
              });
          } else
            this.userList = Object.freeze(
              JSON.parse(localStorage.getItem("userList"))
            );
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    goLeaderboard: function(event) {
      this.$router.push({
        name: "LeaderboardPage",
        query: {
          page: 1
        }
      });
    },
    filteredList() {
      this.result = this.userList.filter(user => {
        return user.toLowerCase().indexOf(this.user.toLowerCase()) > -1;
      });
      if (this.result.length == 0) {
        this.result[0] = "No Result!!!";
      }
    },
    debounceSearch(event) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.user = event.target.value;
        if (this.user.length > 1) {
          this.openSearch = true;
          this.filteredList();
          this.arrowCounter = 0;
        } else {
          this.openSearch = false;
        }
      }, 600);
    },
    inputFocused(event) {
      if (this.user.length > 1) {
        this.openSearch = true;
        this.filteredList();
        this.arrowCounter = 0;
      }
    },
    setResult(result) {
      this.user = result;
      this.arrowCounter = -1;
      this.openSearch = false;
    },
    onArrowDown(event) {
      if (this.arrowCounter < this.result.length - 1) {
        this.arrowCounter = this.arrowCounter + 1;
        this.user = this.result[this.arrowCounter];
        document.getElementById("searchResult").scrollTop += 44;
      }
    },
    onArrowUp(event) {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
        this.user = this.result[this.arrowCounter];
        document.getElementById("searchResult").scrollTop -= 44;
      }
    },
    onEnter(event) {
      this.openSearch = false;
      this.arrowCounter = 0;
    },
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.openSearch = false;
        this.arrowCounter = -1;
      }
    },
    goHistory: function(user) {
      // `this` inside methods points to the Vue instance
      if (this.userList.includes(this.user)) {
        document.getElementById("autoTokenSelect").blur();
        this.$router.push({
          name: "HistoryPage",
          query: {
            user: this.user
          }
        });
        this.user = "";
      } else {
        if (this.user) {
          this.user = "";
        }
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

.app-header-searchbar-container {
  position: relative;
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
.app-header-search-result {
  position: absolute;
  border: 1px solid #d7d7d7;
  border-radius: 10px;
  background: white;
  width: 90%;
  max-height: 300px;
  overflow: auto;
  top: 105%;
  left: 5%;
  text-align: left !important;
  -webkit-box-shadow: 0px 1px 8px -1px rgba(17, 71, 235, 1);
  -moz-box-shadow: 0px 1px 8px -1px rgba(17, 71, 235, 1);
  box-shadow: 0px 1px 8px -1px rgba(17, 71, 235, 1);
  transition: all 200ms ease-out;
}
.app-header-search-result-item {
  cursor: pointer;
  padding: 10px;
}
.app-header-search-result-item:hover,
.is-active {
  background: lightblue;
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
