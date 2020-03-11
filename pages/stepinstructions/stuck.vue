<template>
  <transition 
    name="fade" 
    mode="out-in">
    <div class="container"> 
      <div class="instruction-page">
        <InstructionSection>        
          <template v-slot:title2>
            Is Your Withdrawal Stuck?
          </template>
          <template v-slot:step1>
            <span>Don't worry! Your tokens are safe. Either:</span>
          </template>
          <template v-slot:step2>
            <div>1) You need to add ETH to your Metamask account to cover gas.</div>
          </template>
          <template v-slot:step3>
            <div>2) Ethereum network congestion can slow transactions.  Use Metamask's "Speed up" button to make it go faster.</div>
          </template>
          <template v-slot:step4>
            <div>3) Not 1 or 2 above?  Go to 
              <a
                name="stuck" 
                href="/depositWithdraw/?resumeWithdrawalNeeded=1" 
                target="_blank">this link
              </a> 
              and click the purple Retry button.</div>
          </template>
        </InstructionSection>
      </div>
    </div>
  </transition>
</template>

<script>
import VideoSection from '../../components/VideoSection'
import InstructionSection from '../../components/InstructionSection'

export default {
  name: 'StepInstructions',
  components: {
    VideoSection,
    InstructionSection
  }
}
</script>

<style scoped>
.instruction-page {
  max-width: 1140px;
  background-color: white;
  box-shadow: 0 0 1em 1px rgba(0, 0, 0, 0.25);
  width: 100%;
  margin: 2em auto 2em auto;
}
</style>
