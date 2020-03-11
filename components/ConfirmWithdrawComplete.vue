<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div 
            v-if="stillbusy"           
            class="modal-custom-header">
            Token withdraw request processed. Please allow up to 30 min for tokens to arrive in your account.
          </div>
          <div 
            v-else
            class="modal-custom-header">{{ imagetitle }} Withdraw Complete! Please Allow A Few Moments for the Blockchain to Confirm.</div>            
          <div class="portfolio-userimg">
            <img
              :src="imageurl"
              :title="imagetitle">
          </div>
          <div class="modal-custom-title">{{ Number(withdrawamount) }} {{ imagetitle }} Tokens</div>                    
          <div 
            v-if="stillbusy"
            class="loading-image-container">
            <img 
              class="loading-image"
              src="../assets/loading.gif">            
          </div>          
          <div 
            v-else
            class="modal-footer">
            <slot name="footer">
              <button 
                class="modal-custom-button" 
                @click="$emit('withdrawcomplete')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ConfirmWithdrawComplete',
  props: {
    imageurl: {
      type: String,
      default: ''
    },
    imagetitle: {
      type: String,
      default: ''
    },
    stillbusy: {
      type: Boolean,
      default: false
    },
    withdrawamount: {
      type: String,
      default: '0'
    }
  }
}
</script>

<style scoped>
@import '../assets/style/withdrawstyle';
</style>
