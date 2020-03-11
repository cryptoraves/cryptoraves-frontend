<template>
  <div class="growtoken">
    <div class="container">
      <SectionHeader>Grow Your Token's Value</SectionHeader>
      <div class="row growtoken-content">
        <div class="col-lg-6 mt-2 d-flex">
          <img src="../../assets/img/growimg.png" >
        </div>
        <div class="col-lg-6 mt-2">
          <div>Your online presence & the social network you’ve built has value. Tokenize it!</div>
          <div class="space-20"/>
          <div>Your tokens represent (awesome) you! They’re a piece of your online reputation.</div>
          <div class="space-20"/>
          <div>
            Grow your Token Score by sharing generously, & giving back! More
            <a
              href="https://medium.com/@cryptoraves/how-to-grow-your-cryptoraves-token-score-84bc6b18554f
"
              target="_blank"
            >here.</a>
          </div>
          <div class="space-20"/>
          <div>
            Reimagine your social media value in token form,
            <a
              href="https://medium.com/@cryptoraves/your-social-network-is-an-asset-that-can-be-tokenized-meaningfully-c4709b20c3e7"
              target="_blank"
            >& see where it leads you.</a>
          </div>
          <div class="space-20"/>
          <div>
            And maybe, when you're ready,
            <a
              href="https://medium.com/@plaster1/my-native-layer-2-token-is-all-growd-up-and-listed-on-a-mainnet-exchange-e0ac2d1e64ad"
              target="_blank"
            >list your own token on exchange...</a>
          </div>
          <div class="space-90"/>
          <div class="growtoken-content-1">So… what next?</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from '../../components/ui/SectionHeader'
export default {
  name: 'GrowToken',
  components: {
    SectionHeader
  }
}
</script>

<style scoped>
.growtoken {
  background-color: rgb(246, 250, 251);
}
img {
  margin: auto;
}
.growtoken-content {
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: 18px;
  font-family: 'Montserrat';
  color: rgb(0, 38, 101);
  line-height: 1.5;
  text-align: left;
}

.growtoken-content-1 {
  font-size: 15px;
  font-family: 'Montserrat';
  color: rgba(0, 38, 101, 0.702);
  line-height: 2.333;
  text-align: right;
}
@media only screen and (max-width: 500px) {
  img {
    width: 300px;
  }
}
</style>
