<template>
  <div class="container">
    <SectionHeader>Get Your Tokens</SectionHeader>
    <div class="row">
      <div class="col-lg-6 mt-2">
        <img src="../../assets/img/twitter.png" />
      </div>
      <div class="col-lg-6 mt-2">
        <div class="gettoken-content-1">I'M READY! HOW DO I DO THIS?</div>
        <div class="gettoken-content-under"></div>
        <div class="gettoken-content-2">No account. No fees. Just Tweet this now:</div>
        <TweetButton></TweetButton>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../../components/ui/SectionHeader";
import TweetButton from "../../components/ui/TweetButton";
export default {
  name: "GetToken",
  components: {
    SectionHeader,
    TweetButton
  }
};
</script>

<style scoped>
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
}
.gettoken-content-2 {
  font-size: 25px;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  font-weight: bold;
  line-height: 2.75;
  text-align: left;
}
</style>