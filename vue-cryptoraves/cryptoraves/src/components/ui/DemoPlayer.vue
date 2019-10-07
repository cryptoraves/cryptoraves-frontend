<template>
  <div class="demoplayer">
    <img v-bind:src="image" @click="showmodal" />
    <div class="demoplayer-content">
      <div class="demoplayer-title">{{demotitle}}</div>
      <div class="demoplayer-text">{{demotext}}</div>
    </div>
    <div class="demoplayer-modal" :style="{display:showModal}">
      <span class="close" @click="hideModal">&times;</span>
      <img class="modal-content" v-bind:src="image" />
      <div id="caption">{{demotitle}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DemoPlayer",
  data() {
    return {
      showModal: "none"
    };
  },
  props: {
    image: String,
    demotitle: String,
    demotext: String
  },
  methods: {
    showmodal: function(event) {
      this.showModal = "block";
    },
    hideModal: function(event) {
      this.showModal = "none";
    }
  }
};
</script>
<style scoped>
.demoplayer {
  background-color: white;
  box-shadow: 0 0 1em 1px rgba(0, 0, 0, 0.25);
  padding: 2em;
}
.demoplayer img {
  border: 1px solid grey;
  width: 100%;
}
.demoplayer > img:hover {
  opacity: 0.7;
  cursor: pointer;
}
.demoplayer .demoplayer-content {
  padding: 20px 15px;
}
.demoplayer-content .demoplayer-title {
  font-size: 30px;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  font-weight: bold;
  line-height: 3;
  text-align: left;
}
.demoplayer-content .demoplayer-text {
  font-size: 20px;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  line-height: 1.4;
  text-align: left;
}
/* modal */

.demoplayer-modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 100%;
  max-width: 1200px;
}

/* Caption of Modal Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  font-size: 30px;
  font-family: "Montserrat";
  font-weight: bold;
  line-height: 3;
}

/* Add Animation */
.modal-content,
#caption {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

@media only screen and (max-width: 375px) {
  .demoplayer {
    padding: 1em;
  }
  .demoplayer-content .demoplayer-title {
    font-size: 20px;
    line-height: 1.4;
  }
  .demoplayer-content .demoplayer-text {
    font-size: 15px;
    line-height: 1.4;
  }
}
</style>