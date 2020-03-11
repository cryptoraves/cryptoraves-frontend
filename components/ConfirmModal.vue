<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-custom-header">
            Please Confirm the Deposit into your Cryptoraves account With the Next Metamask Popup.
          </div>
          <div class="portfolio-userimg">
            <img
              :src="imageurl"
              :title="imagetitle">
          </div>
          <div class="modal-custom-title">{{ depositamount }} {{ imagetitle }} Tokens</div>                    
          <div class="modal-footer">
            <slot name="footer">
              <button 
                class="modal-custom-button" 
                @click="$emit('confirm')">
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
  name: 'ConfirmModal',
  props: {
    imageurl: {
      type: String,
      default: ''
    },
    imagetitle: {
      type: String,
      default: ''
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
