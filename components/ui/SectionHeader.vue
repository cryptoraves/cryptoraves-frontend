<template>
  <div class="section-header">
    <!--img 
      v-if="vya" 
      src="../../assets/img/vya-icon.png" >
    <img
      v-else
      src="../../assets/img/cryptoraves_PNG-01.png"-->
    <br>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    vya: {
      type: Boolean,
      default: false
    }
  }
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
