<template>
  <div class="tweetbutton">
    <div class="tweetbutton-shape">
      <i class="fa fa-twitter"></i>
    </div>
    <div class="tweetbutton-text">@cryptoraves #DropMyCrypto</div>
  </div>
</template>

<script>
export default {
  name: "TweetButton"
};
</script>

<style scoped>
.tweetbutton {
  width: 100%;
  border-width: 1px;
  border-color: rgb(235, 235, 235);
  border-style: solid;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 5px 29px 0px rgba(0, 0, 1, 0.11);
  display: flex;
}
.tweetbutton-shape {
  border-radius: 5px 0px 0px 5px;
  width: 110px;
  height: 92px;
  position: relative;
  background-color: rgb(106, 219, 252);
  display: flex;
}

.tweetbutton-shape:before {
  content: "";
  position: absolute;
  right: -20px;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 20px solid rgb(106, 219, 252);
  border-bottom: 92px solid transparent;
}

.tweetbutton-shape i {
  color: white;
  font-size: 70px;
  margin: auto auto auto 30px;
}

.tweetbutton-text {
  font-size: 25px;
  font-family: "Montserrat";
  color: rgb(42, 192, 236);
  font-weight: bold;
  text-align: center;
  margin: auto;
}
</style>