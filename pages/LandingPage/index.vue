<template>
  <div>
    <HeroSection/>

  </div>
</template>
<script>
import HeroSection from './HeroSection'
import GetToken from './GetToken'
import ShareToken from './ShareToken'

export default {
  name: 'LandingPage',
  components: {
    HeroSection,
    GetToken,
    ShareToken
  }
}
</script>
