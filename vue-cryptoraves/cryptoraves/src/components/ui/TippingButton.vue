<template>
  <button class="tipping-button">
    <span class="tipping-button-1">NEW!</span>
    TIPPING
  </button>
</template>

<script>
export default {
  name: "TippingButton"
};
</script>
<style scoped>
.tipping-button {
  letter-spacing: 3px;
  background-color: rgb(17, 99, 206);
  width: 250px;
  height: 65px;
  font-size: 20px;
  font-family: "Roboto Condensed";
  color: #fff;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 50px;
  text-align: center;
  cursor: pointer;
  border: none;
  outline: none;
  margin: 10px;
  transition: all 200ms ease-out;
}
.tipping-button:hover {
  box-shadow: 0 0.5em 0.5em -0.4em #19bc8b;
  transform: translateY(-0.25em);
  transition: all 200ms ease-out;
}
.tipping-button:active {
  box-shadow: none;
  transform: none;
  transition: all 200ms ease-out;
}
.tipping-button-1 {
  font-size: 18px;
  font-weight: bold;
  margin-right: 20px;
}
</style>