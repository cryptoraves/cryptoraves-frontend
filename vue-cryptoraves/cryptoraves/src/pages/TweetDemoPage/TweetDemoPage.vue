<template>
  <div>
    <DropToken id="drop"></DropToken>
    <TagToken id="tag"></TagToken>
    <ReplyToken id="reply"></ReplyToken>
    <ReciprocationToken id="recipro"></ReciprocationToken>
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
        window.scrollTo(0, this.getOffsetLeft(document.getElementById("drop")));
      } else if (this.$route.query.target == "tag") {
        window.scrollTo(0, this.getOffsetLeft(document.getElementById("tag")));
      } else if (this.$route.query.target == "reply") {
        window.scrollTo(
          0,
          this.getOffsetLeft(document.getElementById("reply"))
        );
      } else if (this.$route.query.target == "recipro") {
        window.scrollTo(
          0,
          this.getOffsetLeft(document.getElementById("recipro"))
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