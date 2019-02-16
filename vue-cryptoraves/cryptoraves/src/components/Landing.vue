<template>
  <div class="hello">
    <h1>{{ title }}</h1>
 
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {
      title: 'It\'s Crypto You Can Tweet!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './../node_modules/foo/bar.css';
</style>
