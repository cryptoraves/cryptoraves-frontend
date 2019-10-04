<template>
  <div class="container">
    <SectionHeader>Tag & Tweet</SectionHeader>
    <div class="tagtoken-content">
      <DemoPlayer
        :image="require('../../assets/gif/tagtoken.gif')"
        demotitle="Tag & Tweet"
        demotext="Ready to share tokens with amazing people in the Twittersphere?"
      ></DemoPlayer>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../../components/ui/SectionHeader";
import DemoPlayer from "../../components/ui/DemoPlayer";
export default {
  name: "TagToken",
  components: {
    SectionHeader,
    DemoPlayer
  }
};
</script>

<style scoped>
.tagtoken-content {
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>