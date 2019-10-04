<template>
  <div>
    <div id="drop">
      <DropToken></DropToken>
    </div>
    <div id="tag">
      <TagToken></TagToken>
    </div>
    <div id="reply">
      <ReplyToken></ReplyToken>
    </div>
    <div id="recipro">
      <ReciprocationToken></ReciprocationToken>
    </div>
  </div>
</template>

<script>
import DropToken from "../TweetDemoPage/DropToken";
import TagToken from "../TweetDemoPage/TagToken";
import ReplyToken from "../TweetDemoPage/ReplyToken";
import ReciprocationToken from "../TweetDemoPage/ReciprocationToken";

export default {
  name: "TweetDemoPage",
  components: {
    DropToken,
    TagToken,
    ReplyToken,
    ReciprocationToken
  },
  mounted: function() {
    this.$nextTick(function() {
      if (this.$route.query.target == "drop") {
        window.scrollTo(
          0,
          this.getOffsetLeft(document.getElementById("drop")) + 200
        );
      } else if (this.$route.query.target == "tag") {
        window.scrollTo(
          0,
          this.getOffsetLeft(document.getElementById("tag")) + 200
        );
      } else if (this.$route.query.target == "reply") {
        window.scrollTo(
          0,
          this.getOffsetLeft(document.getElementById("reply")) + 200
        );
      } else if (this.$route.query.target == "recipro") {
        window.scrollTo(
          0,
          this.getOffsetLeft(document.getElementById("recipro")) + 200
        );
      } else window.scrollTo(0, 0);
    });
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
<style scoped>
#tag {
  background-color: rgb(246, 250, 251);
}
#recipro {
  background-color: rgb(246, 250, 251);
}
</style>
