<template>
  <div class="container">
    <SectionHeader>Deposit & Withdrawal</SectionHeader>
    <div class="row withdrawing-section">
      <div class="col-lg-6 m-auto d-flex">
        <img src="../../assets/img/partnerships-2.png" >
      </div>
      <div class="col-lg-6 m-auto">
        <div class="space-30"/>
        <div
          class="withdrawing-content-1"
        >Now available! Deposit & Withdrawal of $VYA and $CRYPTORAVES Tokens!</div>
        <div class="space-50"/>
        <div
          class="withdrawing-content-1"
        >Visit our <a 
          href="http://web3.cryptoraves.space/stepinstructions" 
          target="_blank">Step-by-Step Instructions page here</a>, & our <a 
            href="http://web3.cryptoraves.space/" 
            target="_blank">Web 3 Portal</a> here to guide you through the process.</div>
        <div class="space-50"/>
        <div
          class="withdrawing-content-1"
        >Deposit & Withdrawal of personalized Cryptoraves tokens coming soon.
        </div>
        <div class="space-30"/>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from '../../components/ui/SectionHeader'
export default {
  name: 'WithdrawingToken',
  components: {
    SectionHeader
  }
}
</script>

<style scoped>
.withdrawing-section {
  padding-top: 50px;
  padding-bottom: 90px;
  font-family: Montserrat;
  color: #002665;
}
img {
  margin: auto;
  width: 500px;
}
.withdrawing-content-1 {
  font-size: 18px;
  line-height: 1.5;
  text-align: left;
}
@media only screen and (max-width: 1199px) {
  img {
    width: 450px;
  }
}
@media only screen and (max-width: 580px) {
  img {
    width: 300px;
  }
}
</style>
