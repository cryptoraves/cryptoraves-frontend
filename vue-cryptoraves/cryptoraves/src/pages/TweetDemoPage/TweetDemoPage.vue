<template>
  <div>
    <DropToken></DropToken>
    <TagToken></TagToken>
    <ReplyToken></ReplyToken>
    <ReciprocationToken></ReciprocationToken>
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
      if (!this.$route.query.top) window.scrollTo(0, 0);
    });
  }
};
</script>