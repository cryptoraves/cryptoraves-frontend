<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view />
    <AppFooter></AppFooter>
  </div>
</template>

<script>
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
      currentScroll: 0
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
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
