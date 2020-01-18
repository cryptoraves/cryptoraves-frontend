<template>
  <div class="container">
    <SectionHeader>Withdrawing Tokens</SectionHeader>
    <div class="row withdrawing-section">
      <div class="col-lg-6 m-auto d-flex">
        <img src="../../assets/img/partnerships-2.png" />
      </div>
      <div class="col-lg-6 m-auto">
        <div class="space-30"></div>
        <div
          class="withdrawing-content-1"
        >In order to withdraw tokens from the Cryptoraves platform, users must complete several steps.</div>
        <div class="space-50"></div>
        <div
          class="withdrawing-content-1"
        >This feature is currenly being built, & instructions will be rolled out in Q1 2020. Check back soon!</div>
        <div class="space-30"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../../components/ui/SectionHeader";
export default {
  name: "WithdrawingToken",
  components: {
    SectionHeader
  }
};
</script>

<style scoped>
.withdrawing-section {
  padding-top: 50px;
  padding-bottom: 90px;
  font-family: Montserrat;
  color: #002665;
}
img {
  margin: auto;
  width: 500px;
}
.withdrawing-content-1 {
  font-size: 18px;
  line-height: 1.5;
  text-align: left;
}
@media only screen and (max-width: 1199px) {
  img {
    width: 450px;
  }
}
@media only screen and (max-width: 580px) {
  img {
    width: 300px;
  }
}
</style>
