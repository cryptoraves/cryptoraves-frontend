<template>
  <div class id="replytoken">
    <div class="container">
      <SectionHeader>Reply with Tokens</SectionHeader>
      <div class="replytoken-content">
        <DemoPlayer
          :image="require('../../assets/gif/replytoken.gif')"
          demotitle="Reply with Tokens"
          demotext="Explain about Reply with Tokens"
        ></DemoPlayer>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../../components/ui/SectionHeader";
import DemoPlayer from "../../components/ui/DemoPlayer";
export default {
  name: "ReplyToken",
  components: {
    SectionHeader,
    DemoPlayer
  }
};
</script>

<style scoped>
.replytoken-content {
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>