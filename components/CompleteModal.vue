<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div 
            v-if="stillbusy"           
            class="modal-custom-header">
            Please Wait Up to 30 Minutes for Deposit to Complete and Cryptoraves Balance to Update          
          </div>
          <div 
            v-else
            class="modal-custom-header">{{ imagetitle }} Deposit Awaiting Confirmation</div>            
          <div class="portfolio-userimg">
            <img
              :src="imageurl"
              :title="imagetitle">
          </div>
          <div class="modal-custom-title">{{ depositamount }} {{ imagetitle }} Tokens</div>                    
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
                @click="$emit('complete')">
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
  name: 'CompleteModal',
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
    depositamount: {
      type: String,
      default: '0'
    }
  }
}
</script>

<style scoped>
@import '../assets/style/modalstyle';
</style>
