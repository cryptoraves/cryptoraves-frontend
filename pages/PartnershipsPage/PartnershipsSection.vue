<template>
  <div class="partnerships-section">
    <div class="container">
      <SectionHeader>Partnerships</SectionHeader>
      <div class="row partnerships-section-content">
        <div class="col-lg-6 m-auto d-flex">
          <img src="../../assets/img/partnerships-1.png" >
        </div>
        <div class="col-lg-6 m-auto">
          <div class="space-30"/>
          <div
            class="partnerships-section-content-1"
          >Dapps can now import any ERC-20 token to the Cryptoraves platform to promote, tip & onboard new interested users to their project! Interested in partnering with us? We're all ears!</div>
          <div class="space-20"/>
          <div
            class="partnerships-section-content-2"
          >ALL Cryptoraves transactions are settled on the blockchain. We are a more decentralized option for tipping on Twitter.</div>
          <div class="space-20"/>
          <div class="partnerships-section-content-3">Coming soon: NFTs!</div>
          <div class="space-20"/>
          <div class="partnerships-section-content-4">
            <a
              href="https://medium.com/@cryptoraves/a-tale-of-two-startups-token-swaps-as-a-new-model-for-dapp-co-investing-collaboration-2b5b0ffe140c"
              target="_blank"
            >Read more</a> about innovative ways crypto projects can partner with Cryptoraves. We want to usher in a new era of crypto collaboration!
          </div>
          <div class="space-20"/>
          <div
            class="partnerships-section-content-5"
          >DM us on Twitter, or email shannon@cryptoraves.space.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from '../../components/ui/SectionHeader'
export default {
  name: 'PartnershipsSection',
  components: {
    SectionHeader
  }
}
</script>

<style scoped>
.partnerships-section {
  background-color: #f6fafb;
}
.partnerships-section-content {
  padding-top: 50px;
  padding-bottom: 50px;
  font-family: Montserrat;
  color: #002665;
  font-size: 18px;
  line-height: 1.5;
  text-align: left;
}
img {
  margin: auto;
  width: 500px;
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
