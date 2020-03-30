<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div             
            class="modal-custom-header">
            This feature is temportarily disabled. Please follow @cryptoraves on Twitter for updates.   
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button 
                class="modal-custom-button" 
                @click="goHome()">
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
  name: 'TransferStatus',
  methods: {
    goHome() {
      window.open('/')
    }
  }
}
</script>

<style scoped>
@import '../assets/style/withdrawstyle';
</style>
