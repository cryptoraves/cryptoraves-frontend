<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div 
            v-if="stillbusy"           
            class="modal-custom-header">
            Waiting for Mapping Confirmation... Please Allow 1-2 Minutes.
          </div>
          <div 
            v-else
            class="modal-custom-header">Address Confirmed. Welcome!</div>            
          <div class="portfolio-userimg">
            <img
              :src="imageurl"
              :title="username">
          </div>
          <div class="modal-custom-title">{{ username }}</div>                    
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
                @click="$emit('mappingconfirm')">
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
  name: 'WaitMappingConfirm',
  props: {
    imageurl: {
      type: String,
      default: ''
    },
    username: {
      type: String,
      default: ''
    },
    stillbusy: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
@import '../assets/style/modalstyle';
.loading-image {
  margin: auto;
}
.loading-image-container {
  display: flex;
}
</style>
