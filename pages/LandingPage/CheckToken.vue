<template>
  <div class="container">
    <SectionHeader>Check Your Portfolio</SectionHeader>
    <div class="row checktoken-content">
      <div class="col-lg-6 mt-2 d-flex">
        <img 
          class="checktoken-img" 
          src="../../assets/img/checkimg.png" >
      </div>
      <div class="col-lg-6 mt-2">
        <div class="checktoken-content-1">See how you stack up! Check:</div>
        <div class="checktoken-list">
          <ul>
            <li>
              <div class="d-flex">
                <div>
                  <img src="../../assets/img/checkitemimg.png" >
                </div>
                <div class="text-margin">Tokens you’ve given & received</div>
              </div>
            </li>
            <li>
              <div class="d-flex">
                <div>
                  <img src="../../assets/img/checkitemimg.png" >
                </div>
                <div class="text-margin">Your balance of remaining tokens</div>
              </div>
            </li>
            <li>
              <div class="d-flex">
                <div>
                  <img src="../../assets/img/checkitemimg.png" >
                </div>
                <div class="text-margin">Your standing on the Leaderboard</div>
              </div>
            </li>
            <li>
              <div class="d-flex">
                <div>
                  <img src="../../assets/img/checkitemimg.png" >
                </div>
                <div class="text-margin">Any other user’s portfolio!</div>
              </div>
            </li>
          </ul>
        </div>
        <TokenSearch/>
        <!-- ---------------------------------------------------------------------------- -->
        <!-- need to do in future -->
        <div class="space-40"/>
        <!-- <AppButton name="See who is trending" type4="true"></AppButton> -->
        <a 
          href="/DepositWithdraw"
          target="_blank">
          <TippingButton/>
        </a>

        <!-- ---------------------------------------------------------------------------- -->
        <div class="checktoken-content-2">But what is the meaning (or value) behind these tokens?</div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from '../../components/ui/SectionHeader'
import AppButton from '../../components/ui/AppButton'
import TokenSearch from '../../components/ui/TokenSearch'
import TippingButton from '../../components/ui/TippingButton'
export default {
  name: 'CheckToken',
  components: {
    SectionHeader,
    AppButton,
    TokenSearch,
    TippingButton
  }
}
</script>

<style scoped>
.text-margin {
  margin-left: 10px;
}
.checktoken-list {
  font-size: 17px;
  font-family: 'Montserrat';
  color: rgb(0, 38, 101);
  line-height: 2.059;
  margin-top: 10px;
  margin-bottom: 40px;
  margin-left: 20px;
}
.checktoken-content {
  padding-top: 40px;
  padding-bottom: 40px;
}
img {
  margin: auto;
}
.checktoken-content-1 {
  font-size: 30px;
  font-family: 'Montserrat';
  color: rgb(18, 220, 66);
  font-weight: bold;
  line-height: 1;
  text-align: left;
}

.checktoken-content-2 {
  font-size: 15px;
  font-family: 'Montserrat';
  color: rgba(0, 38, 101, 0.702);
  line-height: 2.333;
  text-align: right;
  margin-top: 40px;
}
@media only screen and (max-width: 500px) {
  .checktoken-img {
    width: 300px;
  }
  .checktoken-content-1 {
    font-size: 20px;
  }
}
</style>
