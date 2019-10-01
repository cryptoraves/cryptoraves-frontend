<template>
  <div style="height:1200px">
    <h1>Faq Page</h1>
    <div class="space-100"></div>
    <div class="space-100"></div>
    <div class="space-100"></div>
    <div class="space-100"></div>
    <div class="space-100"></div>
    <div class="space-100"></div>
    <div class="space-100"></div>
    <div class="space-100"></div>
    <div class="space-100"></div>
    <div class="space-100"></div>
    <h2 id="faq">Pricy and Term</h2>
  </div>
</template>

<script>
export default {
  name: "Faq",
  mounted: function() {
    this.$nextTick(function() {
      if (!this.$route.query.top)
        window.scrollTo(
          0,
          this.getOffsetLeft(document.getElementById("faq")) - 150
        );
      else window.scrollTo(0, 0);
    });
  },
  created() {
    this.$ga.page("/");
  },
  methods: {
    goHome() {
      window.open("https://cryptoraves.space");
    },
    getOffsetLeft(elem) {
      var offsetLeft = 0;
      do {
        if (!isNaN(elem.offsetTop)) {
          offsetLeft += elem.offsetTop;
        }
      } while ((elem = elem.offsetParent));
      return offsetLeft;
    }
  }
};
</script>