<template>
  <div class="tooltoken">
    <div class="container">
      <SectionHeader>YOUR Token = YOUR Tool</SectionHeader>
      <div class="row tooltoken-content">
        <div class="col-lg-6 mt-2 d-flex">
          <img src="../../assets/img/toolimg.png" />
        </div>
        <div class="col-lg-6 mt-2">
          <div class="tooltoken-content-1">
            Your Personalized Tokens have
            <a
              href="https://medium.com/@cryptoraves/how-do-i-use-these-things-inspiration-for-creating-your-own-cryptoraves-token-use-case-adbf47f7f786"
              target="_blank"
            >proven, established, & actual</a> uses in the real world!
          </div>
          <div class="space-20"></div>
          <div>Use your token any way you want, it's your own customized tool.</div>
          <div class="space-20"></div>
          <div>Run your own personal token giveaway! The sky's the limit.</div>
          <div class="space-20"></div>
          <div>
            Dream up your own case. Get ideas
            <a
              href="https://medium.com/@cryptoraves/how-do-i-use-these-things-inspiration-for-creating-your-own-cryptoraves-token-use-case-adbf47f7f786"
              target="_blank"
            >here.</a>
          </div>
          <div class="space-30"></div>
          <div class="tooltoken-content-2">
            <i>How will you use YOUR token?</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../../components/ui/SectionHeader";
export default {
  name: "ToolToken",
  components: {
    SectionHeader
  }
};
</script>

<style scoped>
.tooltoken {
  background-color: rgb(246, 250, 251);
}
img {
  margin: auto;
}
.tooltoken-content {
  padding-top: 40px;
  padding-bottom: 150px;
  font-family: "Montserrat";
  font-size: 20px;
  color: rgb(0, 38, 101);
}
.tooltoken-content-1 {
  color: rgb(18, 220, 66);
  font-weight: bold;
  text-align: left;
}
.tooltoken-content-1 a {
  color: rgb(18, 220, 66);
  text-decoration: underline;
}
.tooltoken-content-1 a:hover {
  color: rgb(15, 189, 56);
}

.tooltoken-content-2 {
  font-size: 25px;
  font-family: "Montserrat";
  color: rgb(18, 220, 66);
  font-weight: bold;
  line-height: 1.333;
  text-align: left;
}
@media only screen and (max-width: 500px) {
  img {
    width: 300px;
  }
  .tooltoken-content-1 {
    font-size: 20px;
  }
  .space-30 {
    height: 10px;
  }
  .tooltoken-content-3 {
    font-size: 20px;
  }
  .tooltoken-content {
    padding-bottom: 50px;
  }
}
</style>