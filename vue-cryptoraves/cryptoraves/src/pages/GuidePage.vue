<template>
  <transition name="fade" mode="out-in">
    <div class="container">
      <div class="guide-page-template">
        <SectionHeader>Token Sharing Guide</SectionHeader>
        <img src="../assets/img/guide-1.png" />
        <img src="../assets/img/guide-2.png" />
        <img src="../assets/img/guide-3.png" />
        <img src="../assets/img/guide-4.png" />
      </div>
    </div>
  </transition>
</template>

<script>
import SectionHeader from "../components/ui/SectionHeader";
export default {
  name: "GuidePage",
  components: {
    SectionHeader
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
.guide-page-template {
  background-color: white;
  box-shadow: 0 0 1em 1px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 0 2em 2em 2em;
  margin-top: 2em;
  margin-bottom: 2em;
}
@media only screen and (max-width: 375px) {
  .guide-page-template {
    padding: 0 1em 1em 1em;
  }
}
</style>