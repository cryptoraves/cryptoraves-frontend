<template>
  <div class="container">
    <SectionHeader>Launch Your Token</SectionHeader>
    <div class="row gettoken-content">
      <div id="getToken" class="col-lg-6 mt-2 d-flex">
        <a href="http://twitter.com" target="_blank">
          <img src="../../assets/img/twitter.png" />
        </a>
      </div>
      <div class="col-lg-6 mt-2">
        <div class="gettoken-content-1">I'M READY! HOW DO I DO THIS?</div>
        <div class="gettoken-content-under"></div>
        <div class="gettoken-content-2">No account. No fees. Just Tweet this now:</div>
        <a href="https://ctt.ac/9FQa1" target="_blank">
          <TweetButton type1="true">@cryptoraves #DropMyCrypto</TweetButton>
        </a>
        <div
          class="gettoken-content-3"
          v-on:click="goFaq"
        >By Tweeting @cryptoraves, you agree to our Privacy Policy & Terms of Service</div>
        <AppButton name="Show me a tweet demo" type4="true" target="drop"></AppButton>
        <div
          class="gettoken-content-4"
        >That's it! You did it. You have your own, personalized crypto!!!</div>
        <div class="space-20"></div>
        <div class="gettoken-content-5">Cool! But now what..?</div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../../components/ui/SectionHeader";
import TweetButton from "../../components/ui/TweetButton";
import AppButton from "../../components/ui/AppButton";
export default {
  name: "GetToken",
  components: {
    SectionHeader,
    TweetButton,
    AppButton
  },
  methods: {
    goFaq: function(event) {
      this.$router.push({
        name: "Faq",
        query: {
          target: "privacy"
        }
      });
    }
  }
};
</script>

<style scoped>
.gettoken-content {
  padding-top: 40px;
  padding-bottom: 40px;
}
a {
  text-decoration: none;
  margin: auto;
}
.gettoken-content-1 {
  font-size: 20px;
  font-family: "Montserrat";
  color: rgb(17, 206, 69);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 2.75;
  text-align: left;
}
.gettoken-content-under {
  background-color: rgb(17, 206, 69);
  width: 51px;
  height: 5px;
  margin-bottom: 15px;
}
.gettoken-content-2 {
  font-size: 24px;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  font-weight: bold;
  line-height: 1.2;
  text-align: left;
}
.gettoken-content-3 {
  font-size: 12px;
  font-family: "Montserrat";
  color: rgba(0, 0, 0, 0.502);
  line-height: 4.583;
  text-align: center;
  cursor: pointer;
}
.gettoken-content-3:hover {
  text-decoration: underline;
}
.gettoken-content-4 {
  margin-top: 50px;
  font-size: 25px;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  line-height: 1.4;
  text-align: left;
}
.gettoken-content-5 {
  font-size: 15px;
  font-family: "Montserrat";
  color: rgba(0, 37, 102, 0.702);
  line-height: 2.333;
  text-align: right;
}
@media only screen and (max-width: 580px) {
  img {
    width: 300px;
  }
}

@media only screen and (max-width: 500px) {
  .gettoken-content-3 {
    line-height: 2.583;
  }
  .gettoken-content-4 {
    margin-top: 25px;
  }
}
</style>