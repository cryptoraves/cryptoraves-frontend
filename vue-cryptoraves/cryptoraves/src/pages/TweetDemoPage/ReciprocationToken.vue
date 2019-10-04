<template>
  <div class="container">
    <SectionHeader>Token Match</SectionHeader>
    <div class="reciprocationtoken-content">
      <DemoPlayer
        :image="require('../../assets/gif/matchtoken.gif')"
        demotitle="Token Match"
        demotext="Want to boost your score, & get some official Cryptoraves tokens? Participate in our token match program!"
      ></DemoPlayer>
    </div>
    <div class="medium-demo-link">
      More "How To"
      <a href="https://medium.com/p/2710f70e8d38/edit" target="_blank">here</a>
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
.reciprocationtoken-content {
  padding-top: 40px;
  padding-bottom: 40px;
}
.medium-demo-link {
  font-size: 15px;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  line-height: 1.4;
  text-align: left;
  padding-bottom: 20px;
}
@media only screen and (max-width: 375px) {
  .medium-demo-link {
    font-size: 10px;
    padding-bottom: 10px;
  }
}
</style>