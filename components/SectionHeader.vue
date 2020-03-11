<template>
  <div class="section-header">
    <img src="../assets/cryptoraves_PNG-01.png" >
    <br >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'SectionHeader'
}
</script>

<style scoped>
.section-header {
  font-size: 30px;
  font-family: 'Montserrat';
  color: rgb(0, 38, 101);
  text-align: center;
}
.section-header img {
  width: 100px;
  height: 100%;
  margin-top: 50px;
}

@media only screen and (max-width: 500px) {
  .section-header {
    font-size: 20px;
  }
  .section-header img {
    width: 70px;
    margin-top: 25px;
  }
}
</style>
