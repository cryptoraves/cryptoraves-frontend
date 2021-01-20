<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-custom-header">
            Your address ##ADDRESS## is not registered yet. To register you must Tweet the following: 
            <a 
				href="https://ctt.ac/9FQa1" 
				title="Click here for working example"
				target="_blank"
            >@cryptoraves #HeresMyAddress</a><br>(click for example)<br>
            Once complete, you may return here to log in.
          </div>
             
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
  
}
</script>

<style scoped>
@import '../assets/style/modalstyle';
</style>
