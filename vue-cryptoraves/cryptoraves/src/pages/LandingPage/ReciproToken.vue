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
          And we want to help. In fact,
          <a
            href="https://medium.com/p/2bd4715d9af6/edit"
            target="_blank"
          >we'll match you!</a>
          Up to
          <br />
          <b>1 Million tokens</b> right now.
          <div class="space-40"></div>You give, we give back.
          <div class="space-40"></div>Like So :
        </div>
        <TweetButton type2="true">@cryptoraves 1,000 @cryptoraves</TweetButton>
        <AppButton name="Show me a tweet demo" type4="true" target="recipro"></AppButton>
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

.reciprotoken-content-2 b {
  color: rgb(18, 220, 66);
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
    width: 200px;
  }
  .reciprotoken-content-1 {
    font-size: 20px;
  }
  .space-40 {
    height: 10px;
  }
  br {
    display: none;
  }
  .reciprotoken-content-3 {
    margin-top: 20px;
  }
}
</style>