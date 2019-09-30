<template>
  <div class="container">
    <SectionHeader>Get Reciprocated!</SectionHeader>
    <div class="row reciprotoken-content">
      <div class="col-lg-6 mt-2 d-flex">
        <img src="../../assets/img/reciproimg.png" />
      </div>
      <div class="col-lg-6 mt-2">
        <div class="reciprotoken-content-1">
          Reciprocating will increase your
          <br />token's value. A lot.
        </div>
        <div class="space-40"></div>
        <div class="reciprotoken-content-2">
          And we want to help. In fact, we'll match you! Up to 1
          <br />Million tokens right now.
          <div class="space-40"></div>You give, we give back.
          <div class="space-40"></div>Like So :
        </div>
        <div class="space-10"></div>
        <TweetButton>@cryptoraves 1,000 @cryptoraves</TweetButton>
        <div class="space-20"></div>
        <AppButton name="Show me a tweet demo" type4="true"></AppButton>
        <div class="reciprotoken-content-3">So what else can I do with this token?</div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../../components/ui/SectionHeader";
import TweetButton from "../../components/ui/TweetButton";
import AppButton from "../../components/ui/AppButton";
export default {
  name: "ReciproToken",
  components: {
    SectionHeader,
    TweetButton,
    AppButton
  }
};
</script>
<style scoped>
.reciprotoken-content {
  padding-top: 40px;
  padding-bottom: 40px;
}
img {
  margin: auto;
}
.reciprotoken-content-1 {
  font-size: 30px;
  font-family: "Montserrat";
  color: rgb(18, 220, 66);
  font-weight: bold;
  line-height: 1.333;
  text-align: left;
}
.reciprotoken-content-2 {
  font-size: 20px;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  line-height: 1.5;
}

.reciprotoken-content-3 {
  font-size: 15px;
  font-family: "Montserrat";
  color: rgba(0, 38, 101, 0.702);
  line-height: 2.333;
  text-align: right;
  margin-top: 40px;
}
@media only screen and (max-width: 375px) {
  img {
    width: 300px;
  }
}
</style>