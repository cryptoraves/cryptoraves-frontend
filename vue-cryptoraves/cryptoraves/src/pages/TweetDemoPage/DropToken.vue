<template>
  <div class="container">
    <SectionHeader>#DROP My Crypto</SectionHeader>
    <div class="droptoken-content">
      <DemoPlayer
        :image="require('../../assets/gif/droptoken.gif')"
        demotitle="#DROP My Crypto"
        demotext="Would you like 1 Billion Personalized ERC-20 Tokens for Twitter? Sweet! All you have to do is Tweet!"
      ></DemoPlayer>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../../components/ui/SectionHeader";
import DemoPlayer from "../../components/ui/DemoPlayer";
export default {
  name: "GetToken",
  components: {
    SectionHeader,
    DemoPlayer
  }
};
</script>

<style scoped>
.droptoken-content {
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>