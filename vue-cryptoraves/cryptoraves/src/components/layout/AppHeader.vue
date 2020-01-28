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
          <div class="app-header-leaderboard" @click="goLeaderboard">LEADERBOARD</div>
          <!-- ---------------------------------------------------------------------------------------- -->
        </div>
        <div class="col-lg-6 col-sm-12 text-right">
          <div class="d-flex d-flex-right form-group mt-3">
            <SearchBar :tokensearch="false"></SearchBar>

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
              <AppButton name="LAUNCH YOUR TOKEN" type1="true"></AppButton>
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
import SearchBar from "../ui/SearchBar";

export default {
  name: "AppHeader",
  components: {
    AppButton,
    SearchBar
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
