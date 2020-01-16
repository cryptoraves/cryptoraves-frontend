<template>
  <div class="container">
    <SectionHeader>New! Tipping with VAYLA Tokens!</SectionHeader>
    <div class="row vaylatoken-section">
      <div class="col-lg-6 mt-2 d-flex">
        <img src="../../assets/img/part-vayla.png" />
      </div>
      <div class="col-lg-6 mt-2">
        <div class="space-50"></div>
        <div
          class="vaylatoken-content-1"
        >You can now tip VAYLA tokens using the Cryptoraves platform!</div>
        <div class="space-50"></div>
        <div class="vaylatoken-content-2">Learn how to tip here.</div>
        <div class="space-50"></div>
        <div class="vaylatoken-content-3">
          Read more about how the VAYLA-Cryptoraves partnership is pioneering a
          new, breakthrough way for crypto projects to collaborate!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../../components/ui/SectionHeader";
export default {
  name: "VaylaToken",
  components: {
    SectionHeader
  }
};
</script>

<style scoped>
.vaylatoken-section {
  padding-top: 40px;
  padding-bottom: 40px;
  font-family: Montserrat;
  color: #002665;
}
img {
  margin: auto;
  width: 500px;
}
.vaylatoken-content-1 {
  font-size: 18px;
  line-height: 1.5;
  text-align: left;
}
.vaylatoken-content-2 {
  font-size: 18px;
  line-height: 1.5;
  text-align: left;
}
.vaylatoken-content-3 {
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

