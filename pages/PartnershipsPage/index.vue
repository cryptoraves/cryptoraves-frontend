<template>
  <div>
    <div id="vaylatoken">
      <VaylaToken/>
    </div>
    <div id="partnerships">
      <PartnershipsSection/>
    </div>
    <div id="withdraw">
      <WithdrawingToken/>
    </div>
  </div>
</template>

<script>
import VaylaToken from './VaylaToken'
import PartnershipsSection from './PartnershipsSection'
import WithdrawingToken from './WithdrawingToken'
export default {
  name: 'PartnershipsPage',
  components: {
    VaylaToken,
    PartnershipsSection,
    WithdrawingToken
  },
  mounted: function() {
    this.$nextTick(function() {
      if (this.$route.query.target == 'vaylatoken') {
        window.scrollTo(
          0,
          this.getOffsetLeft(document.getElementById('vaylatoken'))
        )
      } else if (this.$route.query.target == 'partnerships') {
        window.scrollTo(
          0,
          this.getOffsetLeft(document.getElementById('partnerships'))
        )
      } else if (this.$route.query.target == 'withdraw') {
        window.scrollTo(
          0,
          this.getOffsetLeft(document.getElementById('withdraw'))
        )
      } else window.scrollTo(0, 0)
    })
  },
  methods: {
    goHome() {
      window.open('https://cryptoraves.space')
    },
    getOffsetLeft(elem) {
      var offsetLeft = 0
      do {
        if (!isNaN(elem.offsetTop)) {
          offsetLeft += elem.offsetTop
        }
      } while ((elem = elem.offsetParent))
      return offsetLeft
    }
  }
}
</script>
