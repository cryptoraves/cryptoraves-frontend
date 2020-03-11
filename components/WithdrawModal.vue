<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-custom-header">
            Enter Amount of            
          </div>
          <div class="portfolio-userimg">
            <img
              :src="imageurl"
              :title="imagetitle">
          </div>
          <div class="modal-custom-title">{{ imagetitle }} Tokens</div>          
          <div class="modal-custom-description">That You Would Like to Withdraw from <br> Cryptoraves Into Your Wallet:</div>
          <div class="modal-custom-input">
            <div 
              class="modal-custom-input-button"
              @click="setMaxAmount(maxamount)">MAX</div> 
            <input 
              v-model="amount"              
              type="number"
              class="modal-custom-input-input"
              placeholder="0">       
          </div>
          <div class="modal-custom-alert">Then Sign the Next TWO Metamask Prompts.</div>
         
          <div class="modal-footer">
            <slot name="footer">
              <button 
                class="modal-custom-button" 
                @click="$emit('closeWithdraw')">
                Cancel
              </button>
              <button 
                class="modal-custom-button" 
                @click="checkValidate">
                Withdraw
              </button>
            </slot>
          </div>
        </div>
        <ValidateModal
          v-if="showValidate"        
          @validate="resetValidate"/>
      </div>
    </div>
  </transition>
</template>

<script>
import ValidateModal from './ValidateModal'
export default {
  name: 'WithdrawModal',
  components: {
    ValidateModal
  },
  props: {
    imageurl: {
      type: String,
      default: ''
    },
    imagetitle: {
      type: String,
      default: ''
    },
    maxamount: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      amount: null,
      showValidate: false
    }
  },
  methods: {
    setMaxAmount(amount) {
      this.amount = amount
    },
    checkValidate() {
      if (
        parseFloat(this.amount) <= 0 ||
        parseFloat(this.amount) > parseFloat(this.maxamount)
      ) {
        this.showValidate = true
      } else {
        this.$emit('withdraw', parseFloat(this.amount))
      }
    },
    resetValidate() {
      this.showValidate = false
      this.amount = null
    }
  }
}
</script>

<style scoped>
@import '../assets/style/withdrawstyle';
</style>
