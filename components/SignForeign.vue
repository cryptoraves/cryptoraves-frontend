<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-custom-header">
            Hello {{ username }} 
            <br>This is a One-Time Setup. Please Sign the Next Metamask Prompt to Initialize Your Account.
          </div>          
          <div class="portfolio-userimg">
            <img
              :src="imageurl"
              :title="username">
          </div>
          <div class="modal-custom-title">{{ username }}</div>    
          <div class="modal-footer">
            <slot name="footer">
              <button 
                class="modal-custom-button" 
                @click="$emit('signforeign')">
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
  name: 'SignForeign',
  props: {
    imageurl: {
      type: String,
      default: ''
    },
    username: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
@import '../assets/style/modalstyle';
</style>
