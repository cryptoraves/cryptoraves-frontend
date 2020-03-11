<template>
  <transition name="modal">
    <div class="modal-mask1">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-custom-header">
            Amount Entered Must Be Greater Than Zero and Less than or Equal To Available Balance.
          </div>        
          <div class="modal-footer">
            <slot name="footer">
              <button 
                class="modal-custom-button" 
                @click="$emit('validate')">
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
  name: 'ValidateModal'
}
</script>

<style scoped>
@import '../assets/style/validatestyle';
</style>
