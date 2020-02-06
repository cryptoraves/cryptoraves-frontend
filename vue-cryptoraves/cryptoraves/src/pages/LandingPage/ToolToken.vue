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
      <div class="row tooltoken-footer">Want to Tip Your ERC-20 Token on Twitter? The Cryptoraves platform can help grow demand for your token. <span @click="goPartnerships">Learn more.</span></div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../../components/ui/SectionHeader";
export default {
  name: "ToolToken",
  components: {
    SectionHeader
  },
  methods: {
    goPartnerships: function() {
      this.$router.push({
        name: "PartnershipsPage",
        query: {
          target: "partnerships"
        }
      });    
    }
  }
};
</script>

<style scoped>
.tooltoken {
}
img {
  margin: auto;
}
.tooltoken-content {
  padding-top: 40px;
  padding-bottom: 40px;
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
 .tooltoken-footer {
  color: blue;
  font-family: "Montserrat";
  font-style: italic;
  font-weight: bold;
  font-size: 25px;
  width: 70%;
  margin: auto;
  padding-bottom: 40px;    
  text-align: center;
}
.tooltoken-footer span {
  display: contents;
  cursor: pointer;  
}
.tooltoken-footer span:hover {
  text-decoration: underline;
}

@media only screen and (max-width: 991px) {
  .tooltoken-footer {
    width: 100%;
  }
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