<template>
  <div class="growtoken">
    <div class="container">
      <SectionHeader>Tokenize Your Social Value</SectionHeader>
      <div class="row growtoken-content">
        <div class="col-lg-6 mt-2 d-flex">
          <img src="../../assets/img/growimg.png" />
        </div>
        <div class="col-lg-6 mt-2">
          <div
            class="growtoken-content-1"
          >Your online presence & the social network you’ve built has value. Tokenize it!</div>

          <div class="space-10"></div>
          <div class="growtoken-content-2">
            Your tokens represent (awesome) you! They’re a piece of your online reputation.
            <div class="space-30"></div>Reimagine your social media value in token form,
            <a
              href="https://medium.com/@cryptoraves/your-social-network-is-an-asset-that-can-be-tokenized-meaningfully-c4709b20c3e7"
              target="_blank"
            >
              <b>& see where it leads you.</b>
            </a>
            <div class="space-30"></div>
          </div>
          <div class="space-90"></div>
          <div class="growtoken-content-3">So… what next?</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../../components/ui/SectionHeader";
export default {
  name: "GrowToken",
  components: {
    SectionHeader
  }
};
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
}
.growtoken-content-1,
.growtoken-content-2 {
  font-size: 18px;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  line-height: 1.5;
  text-align: left;
}
a {
  color: rgb(18, 220, 66);
  text-decoration-color: rgb(18, 220, 66);
}

.growtoken-content-3 {
  font-size: 15px;
  font-family: "Montserrat";
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