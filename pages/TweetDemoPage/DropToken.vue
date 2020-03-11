<template>
  <div 
    class="container">
    <SectionHeader>@cryptoraves #DropMyCrypto</SectionHeader>
    <div class="droptoken-content">
      <DemoPlayer
        :image="require('../../assets/gif/droptoken.gif')"
        droptoken="true"
        demotitle="@cryptoraves #DropMyCrypto"
        demotext="Would you like 1 Billion Personalized ERC-20 Tokens for Twitter? Sweet! All you have to do is Tweet!"
      />
    </div>
  </div>
</template>

<script>
import SectionHeader from '../../components/ui/SectionHeader'
import DemoPlayer from '../../components/ui/DemoPlayer'
import AppButton from '../../components/ui/AppButton'
export default {
  name: 'GetToken',
  components: {
    SectionHeader,
    DemoPlayer,
    AppButton
  }
}
</script>

<style scoped>
.droptoken-content {
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
