<template>
  <button class="app-button-gettoken">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    type: String
  }
};
</script>

<style scoped>
.app-button-gettoken {
  background-color: rgb(17, 206, 69);
  width: 210px;
  height: 50px;
  font-size: 16px;
  font-family: "Roboto Condensed";
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 50px;
  text-align: center;
  cursor: pointer;
  margin-left: 10px;
  border: none;
}

@media only screen and (max-width: 991px) {
  .app-button-gettoken {
    display: none;
  }
}
</style>