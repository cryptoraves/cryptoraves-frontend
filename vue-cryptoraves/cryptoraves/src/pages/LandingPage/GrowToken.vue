<template>
  <div class="growtoken">
    <div class="container">
      <SectionHeader>Grow Your Value</SectionHeader>
      <div class="row growtoken-content">
        <div class="col-lg-6 mt-2 d-flex">
          <img src="../../assets/img/growimg.png" />
        </div>
        <div class="col-lg-6 mt-2">
          <div class="growtoken-content-1">
            <a href="https://medium.com/p/84bc6b18554f/edit" target="_blank">You have control</a> over your token's
            value
          </div>

          <div class="space-10"></div>
          <div class="growtoken-content-2">
            You get points just for giving! Share more often, & more
            generously
            <div class="space-30"></div>AND, if you GET tokens, give some right back! Reciprocate
            -it's the most powerful way to increase your token's value
          </div>
          <div class="space-90"></div>
          <div class="growtoken-content-3">Reciprocation raises your value? Tell me more</div>
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
.growtoken-content-1 {
  font-size: 29px;
  font-family: "Montserrat";
  color: rgb(18, 220, 66);
  font-weight: bold;
  line-height: 1.333;
  text-align: left;
}
a {
  color: rgb(18, 220, 66);
  text-decoration-color: rgb(18, 220, 66);
}
.growtoken-content-2 {
  font-size: 18px;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  line-height: 1.5;
}
.growtoken-content-3 {
  font-size: 15px;
  font-family: "Montserrat";
  color: rgba(0, 38, 101, 0.702);
  line-height: 2.333;
  text-align: right;
}
</style>