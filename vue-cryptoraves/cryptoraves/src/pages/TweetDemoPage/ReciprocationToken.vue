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
</style>