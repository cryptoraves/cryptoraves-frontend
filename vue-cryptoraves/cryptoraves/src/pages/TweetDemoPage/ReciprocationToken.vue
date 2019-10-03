<template>
  <div id="reciprocation">
    <div class="container">
      <SectionHeader>Reciprocation Token</SectionHeader>
      <div class="reciprocationtoken-content">
        <DemoPlayer
          :image="require('../../assets/gif/matchtoken.gif')"
          demotitle="Reciprocation Tweet Demo"
          demotext="Explain about Reciprocation Tweet Demo Reciprocation Tweet Demo Reciprocation Tweet Demo"
        ></DemoPlayer>
      </div>
      <div class="medium-demo-link">
        More "How To"
        <a href="https://medium.com/p/2710f70e8d38/edit" target="_blank">here</a>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../../components/ui/SectionHeader";
import DemoPlayer from "../../components/ui/DemoPlayer";
export default {
  name: "ReciprocationToken",
  components: {
    SectionHeader,
    DemoPlayer
  }
};
</script>

<style scoped>
#reciprocation {
  background-color: rgb(246, 250, 251);
}
.reciprocationtoken-content {
  padding-top: 40px;
  padding-bottom: 40px;
}
.medium-demo-link {
  font-size: 20px;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  line-height: 1.4;
  text-align: left;
}
</style>