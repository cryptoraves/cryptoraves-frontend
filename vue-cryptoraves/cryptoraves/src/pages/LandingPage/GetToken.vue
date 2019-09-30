<template>
  <div class="container">
    <SectionHeader>Get Your Tokens</SectionHeader>
    <div class="row gettoken-content">
      <div class="col-lg-6 mt-2 d-flex">
        <img src="../../assets/img/twitter.png" />
      </div>
      <div class="col-lg-6 mt-2">
        <div class="gettoken-content-1">I'M READY! HOW DO I DO THIS?</div>
        <div class="gettoken-content-under"></div>
        <div class="gettoken-content-2">No account. No fees. Just Tweet this now:</div>
        <TweetButton>@cryptoraves #DropMyCrypto</TweetButton>
        <div
          class="gettoken-content-3"
        >By Tweeting @cryptoraves, you agree to our Privacy Policy & Terms of Service</div>
        <AppButton name="Show me a tweet demo" type4="true"></AppButton>
        <div class="gettoken-content-4">
          That's it! You did it. You have your own,
          <br />personalized crypto!!!
        </div>
        <div class="gettoken-content-5">Please allow 4-5 minutes for the transaction to finalize.</div>
        <div class="gettoken-content-6">Cool! But now what..?</div>
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
  }
};
</script>

<style scoped>
.gettoken-content {
  padding-top: 40px;
  padding-bottom: 40px;
}
img {
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
}
.gettoken-content-2 {
  font-size: 25px;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  font-weight: bold;
  line-height: 2.75;
  text-align: left;
}
.gettoken-content-3 {
  font-size: 12px;
  font-family: "Montserrat";
  color: rgba(0, 0, 0, 0.502);
  line-height: 4.583;
  text-align: center;
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
  font-size: 17px;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  line-height: 3;
}
.gettoken-content-6 {
  font-size: 15px;
  font-family: "Montserrat";
  color: rgba(0, 37, 102, 0.702);
  line-height: 2.333;
  text-align: right;
}

@media only screen and (max-width: 375px) {
  img {
    width: 300px;
  }
}
</style>