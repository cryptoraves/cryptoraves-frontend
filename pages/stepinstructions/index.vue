<template>
  <transition 
    name="fade" 
    mode="out-in">
    <div class="container"> 
      <div class="instruction-page">
        <VideoSection/>
        <!-- Instruction Section 1 -->
        <InstructionSection>
          <template v-slot:title1>
            Initial Set Up (Part 1a):
          </template>
          <template v-slot:title2>
            Hey Cryptoraves, Here's my Address
          </template>
          <template v-slot:header>
            <i>Only required once during initial set up!  Complete this step first!</i>
          </template>
          <template v-slot:step1>
            <div><span>Step 1:</span> Send this Tweet from the Twitter account you want to link to the Cryptoraves platform.  Please paste your entire wallet address in the Tweet below:<br><br>@cryptoraves #HeresMyAddress 0x……….
            <br><br></div>          
          </template>
          <template v-slot:step2>
            <div><span>Step 2:</span> Wait 3-4 minutes to receive a reply from Cryptoraves.<br><br></div>
          </template>
          <template v-slot:step3>
            <div><span>Step 3:</span> Once Reply received, you have successfully initiated the process for Deposit & Withdrawal from the Cryptoraves platform.  Please proceed to the Cryptoraves Web 3 Portal using the link sent in the Tweet reply to complete the Initial Set Up (Part 1b).  Or you can go directly to the 
              <a 
                href="/DepositWithdraw" 
                target="_blank">Cryptoraves Web 3 Portal</a>.</div>
          </template>          
        </InstructionSection>
        <!-- Instruction Section 2 -->
        <InstructionSection>
          <template v-slot:title1>
            Initial Set Up (Part 1b):
          </template>
          <template v-slot:title2>
            Link my Address to  Cryptoraves
          </template>
          <template v-slot:header>
            <i>Only required once during initial set up!  Please only complete this step after Initial Set Up (Part 1a) has been completed!</i>
          </template>
          <template v-slot:step1>
            <div><span>Step 1:</span> Follow the link from the Cryptoraves Twitter Reply received above, or go directly to the 
              <a 
                href="/DepositWithdraw" 
                target="_blank">Cryptoraves Web 3 Portal</a>.<br><br></div>          
          </template>
          <template v-slot:step2>
            <div><span>Step 2:</span> A Metamask pop-up window will appear.  Please sign into Metamask & follow the prompts. They will ask you to link your address with Cryptoraves. Click “Sign.”<br><br></div>
          </template>
          <template v-slot:step3>
            <div><span>Step 3:</span> You will see a pop-up confirmation stating: Your address is now linked to Cryptoraves.<br><br></div>
          </template>
          <template v-slot:step4>
            <div><span>Step 4:</span> You have completed the Initial Set Up.  You are now ready to Deposit & Withdraw.  <b>You do not need to complete these steps again.</b></div>
          </template>
        </InstructionSection>
        <!-- Instruction Section 3 -->
        <InstructionSection>        
          <template v-slot:title2>
            Deposit Tokens Into Cryptoraves for Tweeting
          </template>
          <template v-slot:header>
            <i>Must complete BOTH Initial Set Up steps first!  See above.</i>
          </template>
          <template v-slot:step1>
            <div><span>Step 1:</span> Go to the Cryptoraves Web 3 Portal. Select the token you want to Deposit. You should see balances from Cryptoraves and your Metamask wallet populate correctly.<br><br></div>          
          </template>
          <template v-slot:step2>
            <div><span>Step 2:</span> Click the green Deposit button. A Cryptoraves pop up window will appear prompting you to enter the token amount you want to deposit, and to Confirm the Metamask prompt.<br><br></div>
          </template>
          <template v-slot:step3>
            <div><span>Step 3:</span> Click “Deposit” and Confirm the Metamask prompt.<br><br></div>
          </template>
          <template v-slot:step4>
            <div><span>Step 4:</span> A Cryptoraves pop up window will appear, requesting you to Confirm the deposit with Metamask.<br><br></div>
          </template>
          <template v-slot:step5>
            <div><span>Step 5:</span> Confirm the Deposit on Metamask.<br><br></div>
          </template>
          <template v-slot:step6>
            <div><span>Step 6:</span> A pop up window with a spinning circle will appear, indicating the deposit is in process.  <b>It can take up to 30 minutes to complete the Deposit</b>.<br><br></div>
          </template>
          <template v-slot:step7>            
            <div><span>Step 7:</span> The pop up window will disappear once the Deposit has completed.  Please wait until the updated balances appear on the Cryptoraves Web 3 Portal.  These balances will also be reflected in your Cryptoraves Portfolio Page.</div>
          </template> 
        </InstructionSection>
        <!-- Instruction Section 4 -->
        <InstructionSection>        
          <template v-slot:title2>
            Withdraw Tokens from Cryptoraves to Your Wallet
          </template>
          <template v-slot:header>
            <i>Must complete BOTH Initial Set Up steps first!  See above.</i>
          </template>
          <template v-slot:step1>
            <div><span>Step 1:</span> Go to the Cryptoraves Web 3 Portal. Select the token you want to Withdraw. You should see balances from Cryptoraves and your Metamask wallet populate correctly.<br><br></div>          
          </template>
          <template v-slot:step2>
            <div><span>Step 2:</span> Click the purple Withdraw button. A pop up window will appear prompting you to enter the token amount you want to withdraw, and to sign the next 2 Metamask prompts. Click “Withdraw”.<br><br></div>
          </template>
          <template v-slot:step3>
            <div><span>Step 3:</span> Hit “Sign” on the next Metamask prompt.<br><br></div>
          </template>
          <template v-slot:step4>
            <div><span>Step 4:</span> Hit “Sign” on the 2nd Metamask prompt.<br><br></div>
          </template>
          <template v-slot:step5>
            <div><span>Step 5:</span> A Cryptoraves prompt asks you to confirm the next Metamask transaction. Hit “Ok”.<br><br></div>
          </template>
          <template v-slot:step6>
            <div><span>Step 6:</span> Hit “Confirm” on the next Metamask prompt.<br><br></div>
          </template>
          <template v-slot:step7>
            <div><span>Step 7:</span> A Cryptoraves prompt tells you to wait a few moments.  Hit “Ok.”<br><br></div>
          </template>
          <template v-slot:step8>
            <div><span>Step 8:</span> It will take approximately 5 minutes to complete the transaction.  Please wait until the updated balances appear in the Cryptoraves Web 3 Portal.  These balances will also be reflected in your Cryptoraves Portfolio Page.</div>
          </template>
        </InstructionSection>
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
              and click the purple Retry button located below the Withdraw button.</div>
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
