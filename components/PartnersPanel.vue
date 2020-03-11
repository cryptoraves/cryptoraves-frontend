<template>
  <div class="balancepanel">
    <div 
      v-if="eth"
      class="balancepanel-title">
      Ethereum Contract Address
    </div>
    <div 
      v-else
      class="balancepanel-title">
      Loom Contract Address
    </div>
    <img 
      v-if="eth"
      class="balancepanel-image"
      src="../assets/metamask.png">
    <img 
      v-else
      class="balancepanel-image"
      src="../assets/cryptoraves_PNG-01.png">
    <div 
      v-if="eth"
      title="Link to Etherscan.io"
      class="address-link"
      @click="goBlockExplorer(url)">
      {{ address }}
    </div>
    <div
      v-else
      title="Link to Loomnetwork's Block Explorer"
      class="address-link"
      @click="goBlockExplorer(url)">
      {{ address }}
    </div>
  </div>  
</template>

<script>
export default {
  name: 'PartnersPanel',
  props: {
    address: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    eth: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    async goBlockExplorer(link) {
      window.open(link)
    }
  }
}
</script>

<style scoped>
.balancepanel {
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 10px;
  padding: 20px;
  font-family: 'Montserrat';
  color: rgb(0, 38, 101);
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 1em 1px rgba(0, 133, 169, 0.25);
  background-color: rgb(246, 250, 251);
}

.balancepanel-title {
  margin-top: 30px;
  font-size: 25px;
}
.balancepanel-image {
  margin: 10px auto 10px auto;
  width: 100px;
  border-radius: 50px;
}
.address-link {
  overflow-wrap: break-word;
  text-decoration: underline;
  color: #2196f3;
  cursor: pointer;
}
.balancepanel-balance {
  overflow-wrap: break-word;
  width: 100%;
  line-height: 1;
  font-size: 35px;
  margin: 30px auto 30px auto;
}
</style>
