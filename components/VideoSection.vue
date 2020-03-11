<template>
  <div class="video-section">
    <div class="container">
      <SectionHeader>Requirements for Deposit & Withdraw</SectionHeader>   
      <div class="video-title">Preequisite Checklist:</div>
      <div class="video-content">
        ➯Do you have Metamask installed?
        <br>➯Do you have ETH in your account to cover gas?
        <br>➯Are you trying to transfer $VYA or $CRYPTORAVES tokens?
        <br><div class="checklist-des">Please note that Withdrawal of Personalized Cryptoraves tokens is not yet available.</div>
        <div class="checklist-answer">Must answer Yes to all the above to proceed.</div>
      </div>
      <div class="video-title">Tips & Best Practices</div>
      <div class="video-content">
        ✩Make sure you have the appropriate balances to support your transaction.
        <br><div class="tips-des">To check your Cryptoraves balances, visit our website and type in your Twitter @username in the search bar to view your portfolio page.</div>
        ✩If you are trying to use a Trust wallet, you can export your private key to Metamask or vice versa.  Our Web 3 Portal only supports Metamask.
        <br>✩Make sure you do not have a Metamask pop up open in another window.      
      </div>      
    </div>
  </div>
</template>

<script>
import SectionHeader from '../components/SectionHeader'
export default {
  name: 'VieoSection',
  components: {
    SectionHeader
  }
}
</script>

<style scoped>
.video-section {
  font-size: 30px;
  font-family: 'Montserrat';
  color: rgb(0, 38, 101);
}
.video-title {
  margin-top: 50px;
  text-decoration: underline;
}
.video-content {
  font-size: 20px;
}
.checklist-des {
  font-size: 15px;
  font-style: italic;
  margin: 10px;
}
.checklist-answer {
  font-size: 20px;
  font-weight: bold;
}
.tips-des {
  font-size: 15px;
  margin: 10px;
}
.video-player {
  font-size: 30px;
  margin: 40px auto 40px auto;
  width: 100%;
  height: 50vh;
  background-color: grey;
  border-radius: 10px;
}
@media only screen and (max-width: 500px) {
  .video-title {
    font-size: 20px;
  }
}
</style>
