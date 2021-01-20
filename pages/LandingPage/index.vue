<template>
  <div>
    <HeroSection/>
    <GetToken/>
  </div>
</template>
<script>
import HeroSection from './HeroSection'
import GetToken from './GetToken'

export default {
  name: 'LandingPage',
  components: {
    HeroSection,
    GetToken
  }
}
</script>
