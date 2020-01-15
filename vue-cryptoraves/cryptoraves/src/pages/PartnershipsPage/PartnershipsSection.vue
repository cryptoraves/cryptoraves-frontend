<template>
  <div class="partnerships-section">
    <div class="container">
      <SectionHeader>Partnerships</SectionHeader>
      <div class="row partnerships-section-content">
        <div class="col-lg-6 mt-2 d-flex">
          <img src="../../assets/img/part-ships.png" />
        </div>
        <div class="col-lg-6 mt-2">
          <div
            class="partnerships-section-content-1"
          >Interested in partnering with us? We're all ears!</div>
          <div class="space-20"></div>
          <div
            class="partnerships-section-content-2"
          >We can import your ERC-20 tokens to the Cryptoraves platform so you can tip/promote your project by Tweeting.</div>
          <div class="space-20"></div>
          <div class="partnerships-section-content-3">Coming soon: NFTs!</div>
          <div
            class="partnerships-section-content-4"
          >Read more about partnering via token swaps & other mutually vesting opportunities for crypto projects. A rising tide raises all ships!</div>
          <div class="space-20"></div>
          <div class="partnerships-section-content-5">
            DM us on Twitter, or email
            <span
              class="partnerships-section-content-5-email"
            >shannon@cryptoraves.space.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../../components/ui/SectionHeader";
export default {
  name: "PartnershipsSection",
  components: {
    SectionHeader
  }
};
</script>

<style scoped>
.partnerships-section {
  background-color: #f6fafb;
}
.partnerships-section-content {
  padding-top: 40px;
  padding-bottom: 40px;
  font-family: Montserrat;
  color: #002665;
}
img {
  margin: auto;
  width: 450px;
}
.partnerships-section-content-1 {
  font-size: 30px;
  color: #12dc42;
  font-weight: 700;
  line-height: 1.2;
  text-align: left;
}
.partnerships-section-content-2 {
  font-size: 23px;
  line-height: 1.4;
}
.partnerships-section-content-3 {
  font-size: 17px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 3.235;
  text-align: left;
}
.partnerships-section-content-4 {
  font-size: 17px;
  line-height: 1.588;
}
.partnerships-section-content-5 {
  margin-bottom: 30px;
  font-style: italic;
  font-size: 25px;
  color: #12dc42;
  font-weight: 700;
  line-height: 1.333;
  text-align: left;
}
.partnerships-section-content-5-email {
  cursor: pointer;
  color: #002665;
}
</style>
