<template>
  <div class="app-footer">
    <div class="app-footer-title">
      Cryptoraves &#9400; 2020
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.app-footer {
  background-color: rgb(0, 41, 102);
  width: 100%;
  height: 100px;
  display: flex;
  box-shadow: 2.5px 4.33px 24px rgba(0, 0, 1, 0.11);
}
.app-footer-title {
  color: white;
  font-size: 2rem;
  font-family: 'Montserrat';
  font-weight: bold;
  line-height: 1.6;
  margin: auto auto auto 20px;
}
@media only screen and (max-width: 499px) {
  .app-footer-title {
    margin: auto;
  }
}
</style>
