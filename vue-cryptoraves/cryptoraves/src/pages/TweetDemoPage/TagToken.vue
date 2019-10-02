<template>
  <div id="tagtoken">
    <div class="container">
      <SectionHeader>Tag & Tweet</SectionHeader>
      <div class="tagtoken-content">
        <DemoPlayer
          :image="require('../../assets/gif/tagtoken.gif')"
          demotitle="Tag & Tweet"
          demotext="Explain about DROP Tag & Tweet Tag TWEET Tag Tweet"
        ></DemoPlayer>
      </div>
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
#tagtoken {
  background-color: rgb(246, 250, 251);
}
.tagtoken-content {
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>