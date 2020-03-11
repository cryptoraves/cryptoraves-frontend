<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-custom-header">
            The blockchain says hold up.  Please sign the next transaction to unclog it and wait 30 minutes before the next withdraw attempt.
          </div>
          <div class="portfolio-userimg">
            <img
              :src="imageurl"
              :title="imagetitle">
          </div>
          <div class="modal-custom-title">{{ withdrawamount }} {{ imagetitle }} Tokens</div>                    
          <div class="modal-footer">
            <slot name="footer">
              <button 
                class="modal-custom-button" 
                @click="$emit('stuck')">
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
  name: 'StuckModal',
  props: {
    imageurl: {
      type: String,
      default: ''
    },
    imagetitle: {
      type: String,
      default: ''
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
