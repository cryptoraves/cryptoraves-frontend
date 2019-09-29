<template>
  <div class="app-header">
    <div class="app-header-container container">
      <div class="row">
        <div class="d-flex col-sm-12 col-lg-2">
          <div class="app-header-logoarea">
            <router-link to="/">
              <img src="../../assets/img/cryptoraves_Horozontal Alignment_Full Color_JPG.png" alt />
            </router-link>
          </div>
        </div>

        <div class="col-sm-12 col-lg-10 text-right">
          <div class="d-flex d-flex-right form-group mt-3">
            <div class="d-flex app-header-searchbar">
              <!-- <input type="text" v-model="user" @change="goPortfolio" list="mylist" id="autoSelect" class="form-control c-search-input" placeholder="Search for Twitter handle." /> -->
              <input type="text" class="app-header-input" placeholder="Lookup Twitter @username." />

              <a href="#" class="app-header-icon">
                <i class="fa fa-search"></i>
              </a>
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
              <AppButton>GET YOUR TOKENS</AppButton>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "../ui/AppButton";

export default {
  name: "AppHeader",
  components: {
    AppButton
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
.app-header-searchbar {
  border: 1px solid #d7d7d7;
  border-radius: 50px;
  padding: 5px 15px;
}
.app-header-input {
  min-width: 230px !important;
  height: 38px;
  border: none;
  font-size: 14px;
  line-height: 3.929;
  color: rgba(40, 40, 40, 0.702);
  font-family: "Montserrat";
  font-weight: 300;
}
.app-header-icon {
  color: black;
  font-size: 20px;
  margin: auto;
}

@media only screen and (min-width: 0px) and (max-width: 767px) {
  .app-header-logoarea {
    text-align: center;
  }
}

@media only screen and (max-width: 991px) {
  .app-header-logoarea {
    text-align: center;
  }
  .app-header {
    height: 200px;
  }
}
</style>
