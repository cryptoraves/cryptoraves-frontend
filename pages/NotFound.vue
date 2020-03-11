<template>
  <transition
    name="fade" 
    mode="out-in">
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>404</h1>
          
        </div>
        <img src="https://sample-imgs.s3.amazonaws.com/404ravey.jpeg">
        <p>Woops!  Ravey cannot compute. Try in another spacetime continuum.</p>
        <a href="/">
          <AppButton
            name="Go To Homepage"
            type6="true"/>
        </a>
      </div>
    </div>
  </transition>
</template>
<script>
import AppButton from '../components/ui/AppButton'
export default {
  name: 'NotFound',
  components: {
    AppButton
  }
}
</script>
<style scoped>
#notfound {
  position: relative;
  height: calc(100vh - 320px);
}
#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.notfound {
  max-width: 410px;
  width: 100%;
  text-align: center;
}
.notfound .notfound-404 {
  height: 280px;
  position: relative;
}
.notfound .notfound-404 h1 {
  font-family: 'Montserrat';
  font-size: 200px;
  margin: 0px;
  font-weight: 900;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  background: url('../assets/img/notfoundbg.jpg') no-repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: cover;
  background-position: center;
}
.notfound h2 {
  font-family: 'Montserrat';
  color: #000;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
}
.notfound p {
  font-family: 'Montserrat';
  color: #000;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 20px;
  margin-top: 0px;
}

@media only screen and (max-width: 767px) {
  .notfound .notfound-404 {
    height: 142px;
  }
  .notfound .notfound-404 h1 {
    font-size: 112px;
  }
}

@media only screen and (max-width: 410px) {
  .notfound .notfound-404 h1 {
    font-size: 100px;
  }
  .notfound h2 {
    font-size: 20px;
  }
}

@media only screen and (max-width: 374px) {
  .notfound .notfound-404 {
    height: 70px;
  }
  .notfound .notfound-404 h1 {
    font-size: 60px;
  }
  .notfound h2 {
    font-size: 15px;
  }
}
</style>
