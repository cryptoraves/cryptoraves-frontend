<template>
  <div class="tweetbutton">
    <div class="tweetbutton-shape">
      <i class="fa fa-twitter"/>
    </div>
    <div :class="{'tweetbutton-text1':type1, 'tweetbutton-text2':type2}">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TweetButton',
  props: {
    type1: {
      type: String,
      default: ''
    },
    type2: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.tweetbutton {
  width: 100%;
  border: none;
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
  content: '';
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
  font-size: 22px;
  font-family: 'Montserrat';
  color: rgb(42, 192, 236);
  font-weight: bold;
  text-align: left;
  margin: auto auto auto 8%;
}

.tweetbutton-text2 {
  font-size: 20px;
  font-family: 'Montserrat';
  color: rgb(42, 192, 236);
  font-weight: bold;
  text-align: left;
  margin: auto auto auto 5%;
}
@media only screen and (max-width: 410px) {
  .tweetbutton-text2 {
    margin: auto auto auto 6%;
  }
}
@media only screen and (max-width: 375px) {
  .tweetbutton-shape {
    width: 66px;
    height: 66px;
  }
  .tweetbutton-shape:before {
    border-bottom: 66px solid transparent;
    border-left: 21px solid rgb(106, 219, 252);
  }
  .tweetbutton-shape i {
    margin: auto auto auto 20px;
    font-size: 40px;
  }
  .tweetbutton-text1 {
    font-size: 15px;
  }
  .tweetbutton-text2 {
    font-size: 15px;
  }
  .gettoken-content-3 {
    line-height: 2.583;
  }
  .gettoken-content-4 {
    margin-top: 15px;
  }
  .gettoken-content-5 {
    line-height: 2;
  }
}
</style>
