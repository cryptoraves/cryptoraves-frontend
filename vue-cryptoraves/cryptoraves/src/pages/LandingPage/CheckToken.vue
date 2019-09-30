<template>
  <div class="container">
    <SectionHeader>Check Your Stats</SectionHeader>
    <div class="row checktoken-content">
      <div class="col-lg-6 mt-2 d-flex">
        <img class="checktoken-img" src="../../assets/img/checkimg.png" />
      </div>
      <div class="col-lg-6 mt-2">
        <div class="checktoken-content-1">See how you stack up! Check:</div>
        <div class="checktoken-list">
          <ul>
            <li>
              <img src="../../assets/img/checkitemimg.png" />
              Your token portfolio (tokens others have shared with you
            </li>
            <li>
              <img src="../../assets/img/checkitemimg.png" />
              Your token's ranking
            </li>
            <li>
              <img src="../../assets/img/checkitemimg.png" />
              Your balance of remaining tokens
            </li>
          </ul>
        </div>
        <TokenSearch></TokenSearch>
        <div class="space-40"></div>
        <AppButton name="See who is trending" type4="true"></AppButton>
        <div class="checktoken-content-2">How do I raise my score?</div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../../components/ui/SectionHeader";
import AppButton from "../../components/ui/AppButton";
import TokenSearch from "../../components/ui/TokenSearch";
export default {
  name: "CheckToken",
  components: {
    SectionHeader,
    AppButton,
    TokenSearch
  },
  methods: {
    alert: function() {
      alert("asdfadsf");
    }
  }
};
</script>

<style scoped>
.checktoken-list {
  font-size: 17px;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  line-height: 2.059;
  margin-top: 10px;
  margin-bottom: 40px;
  margin-left: 20px;
}
.checktoken-content {
  padding-top: 40px;
  padding-bottom: 40px;
}
img {
  margin: auto;
}
.checktoken-content-1 {
  font-size: 30px;
  font-family: "Montserrat";
  color: rgb(18, 220, 66);
  font-weight: bold;
  line-height: 1;
  text-align: left;
}

.checktoken-content-2 {
  font-size: 15px;
  font-family: "Montserrat";
  color: rgba(0, 38, 101, 0.702);
  line-height: 2.333;
  text-align: right;
  margin-top: 40px;
}
@media only screen and (max-width: 375px) {
  .checktoken-img {
    width: 300px;
  }
}
</style>