<template>
  <div class="d-flex">
    <div class="method-button-rectangle d-flex">
      <div class="method-button-circle d-flex">
        <div class="method-button-circle-txt">{{number}}</div>
      </div>
      <div class="method-button-rectangle-txt">METHOD</div>
    </div>
    <div class="method-button-txt">
      <slot></slot>
      <i class="fa fa-arrow-down"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "MethodButton",
  props: {
    number: String
  }
};
</script>

<style scoped>
.method-button-txt {
  font-size: 17px;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  text-align: center;
  margin-left: 20px;
}
.method-button-txt i {
  margin-left: 10px;
}
.method-button-rectangle {
  background-color: rgb(0, 38, 101);
  width: 92px;
  height: 25px;
  margin-left: 20px;
  border-radius: 50px;
}
.method-button-circle {
  position: absolute;
  height: 40px;
  width: 40px;
  margin-left: -20px;
  margin-top: -8px;
  background: white;
  border-radius: 50px;
  box-shadow: 0px 5px 29px 0px rgba(0, 0, 1, 0.11);
  animation: method-pulse 1.5s infinite;
}
@keyframes method-pulse {
  0% {
    box-shadow: 0 0 0 0px rgb(0, 38, 101, 0.5);
  }
  100% {
    box-shadow: 0 0 0 15px rgb(0, 38, 101, 0);
  }
}
.method-button-circle-txt {
  font-size: 20px;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  font-weight: bold;
  text-align: center;
  margin: auto;
}
.method-button-rectangle-txt {
  font-size: 11px;
  font-family: "Montserrat";
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  margin: auto auto auto 30px;
}
</style>