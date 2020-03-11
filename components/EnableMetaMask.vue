<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-custom-header">
            Metamask Not Enabled. What is this?<br>
            Please follow the 
            <a href="http://web3.cryptoraves.space/stepinstructions">Step-by-Step Instructions</a> to link your wallet and enable Deposit & Withdrawal.            
          </div>                    
          <div class="modal-footer">
            <slot name="footer">
              <button 
                class="modal-custom-button" 
                @click="$emit('metamask')">
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
  name: 'EnableMetaMask'
}
</script>

<style scoped>
@import '../assets/style/modalstyle';
</style>
