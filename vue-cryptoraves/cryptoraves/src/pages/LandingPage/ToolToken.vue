<template>
  <div class="tooltoken">
    <div class="container">
      <SectionHeader>YOUR Token = YOUR Tool</SectionHeader>
      <div class="row tooltoken-content">
        <div class="col-lg-6 mt-2 d-flex">
          <img src="../../assets/img/toolimg.png" />
        </div>
        <div class="col-lg-6 mt-2">
          <div class="tooltoken-content-1">You can actually USE your token for THINGS.</div>
          <div class="space-30"></div>
          <div class="tooltoken-content-2">
            Your token is your own Customized & self-designed TOOL
            <br />Create unique value for yourself.
            <br />Dream up your own case. Get ideas
            <a
              href="https://medium.com/p/adbf47f7f786/edit"
              target="_blank"
            >here</a>
          </div>
          <div class="space-30"></div>
          <div class="tooltoken-content-3">How will you use YOUR token?</div>
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
}
.tooltoken-content-1 {
  font-size: 30px;
  font-family: "Montserrat";
  color: rgb(18, 220, 66);
  font-weight: bold;
  line-height: 1.333;
  text-align: left;
}
.tooltoken-content-2 {
  font-size: 20px;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  line-height: 2;
}
.tooltoken-content-3 {
  font-size: 30px;
  font-family: "Montserrat";
  color: rgb(18, 220, 66);
  font-weight: bold;
  line-height: 1.333;
  text-align: left;
}
</style>