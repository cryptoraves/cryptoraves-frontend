<template>
  <div class="tweetbutton">
    <div class="tweetbutton-shape">
      <i class="fa fa-twitter"></i>
    </div>
    <div :class="{'tweetbutton-text1':type1, 'tweetbutton-text2':type2}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TweetButton",
  props: {
    type1: String,
    type2: String
  }
};
</script>

<style scoped>
.tweetbutton {
  width: 100%;
  border-width: 1px;
  border-color: rgb(235, 235, 235);
  border-style: solid;
  border-radius: 5px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 5px 29px 0px rgba(0, 0, 1, 0.11);
  display: flex;
  transition: all 200ms ease-out;
}
.tweetbutton:hover {
  -webkit-box-shadow: 0px 5px 29px 0px rgba(106, 219, 252, 1);
  -moz-box-shadow: 0px 5px 29px 0px rgba(106, 219, 252, 1);
  box-shadow: 0px 5px 29px 0px rgba(106, 219, 252, 1);
  transition: all 200ms ease-in;
  cursor: pointer;
}

.tweetbutton:active {
  transform: translateY(0.25em);
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

.tweetbutton-text1 {
  font-size: 25px;
  font-family: "Montserrat";
  color: rgb(42, 192, 236);
  font-weight: bold;
  text-align: left;
  margin: auto auto auto 3%;
}

.tweetbutton-text2 {
  font-size: 20px;
  font-family: "Montserrat";
  color: rgb(42, 192, 236);
  font-weight: bold;
  text-align: left;
  margin: auto auto auto 3%;
}
</style>


