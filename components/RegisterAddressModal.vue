<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-custom-header">
            Your address is not registered yet. To register you must Tweet the following:
            <a
				href="https://ctt.ac/5RpCE"
				title="Click here for working example"
				target="_blank"
            >@cryptoraves #HeresMyAddress {{ethereumAddress}}<br>(click for example)<br></a>
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
  data() {
    return {
      ethereumAddress: null
    }
  },
  name: 'ConfirmModal',
  created() {
    try{
      this.ethereumAddress = JSON.parse(
        localStorage.getItem('web3Data')
      )['ethereumAddress']
    }catch(e){
      console.log(e)
    }
  }
}
</script>

<style scoped>
@import '../assets/style/modalstyle';
</style>
