<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div             
            class="modal-custom-header">
            Please Wait a Few Minutes for the Next Metamask Prompt.          
          </div>
          <div class="portfolio-userimg">
            <img
              :src="imageurl"
              :title="imagetitle">
          </div>
          <div class="modal-custom-title">{{ Number(withdrawamount) }} {{ imagetitle }} Tokens</div>                    
          <div 
            class="loading-image-container">
            <img 
              class="loading-image"
              src="../assets/loading.gif">
          </div>                 
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'TransferStatus',
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
