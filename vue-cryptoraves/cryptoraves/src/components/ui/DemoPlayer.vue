<template>
  <div class="demoplayer">
    <img v-bind:src="image" />
    <div class="demoplayer-content">
      <div class="demoplayer-title">{{demotitle}}</div>
      <div class="demoplayer-text">{{demotext}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DemoPlayer",
  props: {
    image: String,
    demotitle: String,
    demotext: String
  }
};
</script>
<style scoped>
.demoplayer {
  /* padding: 20px;
  border: 1px solid lightgrey;
  -webkit-box-shadow: 0px 0px 20px -1px rgba(106, 219, 252, 1);
  -moz-box-shadow: 0px 0px 20px -1px rgba(106, 219, 252, 1);
  box-shadow: 0px 0px 20px -1px rgba(106, 219, 252, 1); */
  background-color: white;
  box-shadow: 0 0 1em 1px rgba(0, 0, 0, 0.25);
  padding: 2em;
}
.demoplayer img {
  border: 1px solid grey;
  width: 100%;
}
.demoplayer .demoplayer-content {
  padding: 20px 15px;
}
.demoplayer-content .demoplayer-title {
  font-size: 30px;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  font-weight: bold;
  line-height: 3;
  text-align: left;
}
.demoplayer-content .demoplayer-text {
  font-size: 20px;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  line-height: 1.4;
  text-align: left;
}
@media only screen and (max-width: 375px) {
  .demoplayer {
    padding: 1em;
  }
  .demoplayer-content .demoplayer-title {
    font-size: 20px;
    line-height: 1.4;
  }
  .demoplayer-content .demoplayer-text {
    font-size: 15px;
    line-height: 1.4;
  }
}
</style>