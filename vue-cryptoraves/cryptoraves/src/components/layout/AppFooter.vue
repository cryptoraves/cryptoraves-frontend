<template>
  <div class="app-footer">
    <div class="container">
      <div class="row app-footer-content">
        <div class="d-flex col-lg-2 col-sm-12">
          <img src="../../assets/img/ethereum1.png" />
        </div>
        <div class="col-lg-8 d-flex">
          <div class="d-flex social-group">
            <div class="d-flex tweet-gradient">
              <i class="fa fa-twitter"></i>
            </div>
            <div class="d-flex reddit-gradient">
              <i class="fa fa-reddit-alien"></i>
            </div>
            <div class="d-flex facebook-gradient">
              <i class="fa fa-facebook"></i>
            </div>
            <div class="d-flex medium-gradient">
              <i class="fa fa-medium"></i>
            </div>
            <div class="d-flex linkedin-gradient">
              <i class="fa fa-linkedin"></i>
            </div>
            <div class="d-flex telegram-gradient">
              <i class="fa fa-telegram"></i>
            </div>
            <div class="d-flex slideshare-gradient">
              <i class="fa fa-slideshare"></i>
            </div>
          </div>
        </div>
        <div class="d-flex col-lg-2 col-sm-12">
          <img src="../../assets/img/whitelogo.png" />
        </div>
      </div>
      <div class="app-footer-email">Email us at info@Cryptoraves.space | FAQs</div>
    </div>
  </div>
</template>

<script>
import AppButton from "../ui/AppButton";

export default {
  name: "AppFooter",
  components: {
    AppButton
  }
};
</script>

<style scoped>
.app-footer {
  background-color: rgb(7, 55, 99);
  width: 100%;
  height: 220px;
}
.app-footer-content {
  padding-top: 50px;
}
.social-group {
  margin: auto;
}
img {
  margin: auto;
  width: 150px;
}
.app-footer-email {
  margin-top: 20px;
  font-size: 14px;
  font-family: "Montserrat";
  color: rgb(255, 255, 255);
  line-height: 2.857;
  text-align: center;
}
.tweet-gradient {
  width: 50px;
  height: 50px;
  border: 3px solid transparent;
  border-radius: 50px;
  background-image: linear-gradient(rgb(7, 55, 99), rgb(7, 55, 99)),
    linear-gradient(to right, #47d71b, #33c343);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
.tweet-gradient i {
  font-size: 25px;
  color: #9c47fc;
  display: block;
  background: -webkit-linear-gradient(#47d71b, #33c343);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: auto;
}
.reddit-gradient {
  margin-left: 10px;
  width: 50px;
  height: 50px;
  border: 3px solid transparent;
  border-radius: 50px;
  background-image: linear-gradient(rgb(7, 55, 99), rgb(7, 55, 99)),
    linear-gradient(to right, #31c749, #1bb57a);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
.reddit-gradient i {
  font-size: 25px;
  color: #9c47fc;
  display: block;
  background: -webkit-linear-gradient(#31c749, #1bb57a);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: auto;
}

.facebook-gradient {
  margin-left: 10px;
  width: 50px;
  height: 50px;
  border: 3px solid transparent;
  border-radius: 50px;
  background-image: linear-gradient(rgb(7, 55, 99), rgb(7, 55, 99)),
    linear-gradient(to right, #17b184, #059db0);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
.facebook-gradient i {
  font-size: 25px;
  color: #9c47fc;
  display: block;
  background: -webkit-linear-gradient(#17b184, #059db0);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: auto;
}
.medium-gradient {
  margin-left: 10px;
  width: 50px;
  height: 50px;
  border: 3px solid transparent;
  border-radius: 50px;
  background-image: linear-gradient(rgb(7, 55, 99), rgb(7, 55, 99)),
    linear-gradient(to right, #0399b8, #0284cb);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
.medium-gradient i {
  font-size: 25px;
  color: #9c47fc;
  display: block;
  background: -webkit-linear-gradient(#0399b8, #0284cb);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: auto;
}
.linkedin-gradient {
  margin-left: 10px;
  width: 50px;
  height: 50px;
  border: 3px solid transparent;
  border-radius: 50px;
  background-image: linear-gradient(rgb(7, 55, 99), rgb(7, 55, 99)),
    linear-gradient(to right, #047fcb, #1c62cb);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
.linkedin-gradient i {
  font-size: 25px;
  color: #9c47fc;
  display: block;
  background: -webkit-linear-gradient(#047fcb, #1c62cb);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: auto;
}
.telegram-gradient {
  margin-left: 10px;
  width: 50px;
  height: 50px;
  border: 3px solid transparent;
  border-radius: 50px;
  background-image: linear-gradient(rgb(7, 55, 99), rgb(7, 55, 99)),
    linear-gradient(to right, #225dc9, #4b3ab4);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
.telegram-gradient i {
  font-size: 25px;
  color: #9c47fc;
  display: block;
  background: -webkit-linear-gradient(#225dc9, #4b3ab4);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: auto;
}
.slideshare-gradient {
  margin-left: 10px;
  width: 50px;
  height: 50px;
  border: 3px solid transparent;
  border-radius: 50px;
  background-image: linear-gradient(rgb(7, 55, 99), rgb(7, 55, 99)),
    linear-gradient(to right, #4b3ab4, #6126a1);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
.slideshare-gradient i {
  font-size: 25px;
  color: #9c47fc;
  display: block;
  background: -webkit-linear-gradient(#4b3ab4, #6126a1);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: auto;
}
/* @media only screen and (min-width: 0px) and (max-width: 767px) {
  .app-header-logoarea {
    text-align: center;
  }
} */

@media only screen and (max-width: 991px) {
  .app-footer {
    height: 450px;
  }
  img {
    margin-bottom: 30px;
    margin-top: 30px;
  }
  .app-footer-email {
    margin-top: 10px;
  }
}
@media only screen and (max-width: 375px) {
  .social-group {
    width: 256px;
    margin: auto;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  }
}

.icon {
  background: none;
  width: 76px;
  height: 76px;
  top: -200px;
  margin: 0 auto;
  position: relative;
}
.icon:hover {
  animation: rotatecircle 4s infinite linear;
  -moz-animation: rotatecircle 4s infinite linear;
  -webkit-animation: rotatecircle 4s linear;
}
.outerCircle {
  background-color: transparent;
  border: 8px solid rgba(97, 82, 72, 0.9);
  opacity: 0.9;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  border-radius: 100px;
  width: 103px;
  height: 103px;
  margin: 0 auto;
  animation: spinPulse 3s infinite ease-in-out;
  -moz-animation: spinPulse 3s infinite ease-in-out;
  -webkit-animation: spinPulse 3s infinite ease-in-out;
}
.innerCircle {
  background-color: transparent;
  border: 5px solid rgba(189, 215, 60, 0.6);
  opacity: 0.9;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-radius: 100px;
  top: -110px;
  width: 92px;
  height: 92px;
  margin: 0 auto;
  position: relative;
  animation: spinoffPulse 1s infinite linear;
  -moz-animation: spinoffPulse 1s infinite linear;
  -webkit-animation: spinoffPulse 1s infinite linear;
}

@keyframes spinPulse {
  0% {
    -moz-transform: rotate(160deg);
    opacity: 0;
    box-shadow: 0 0 1px #bdd73c;
  }
  50% {
    -moz-transform: rotate(145deg);
    opacity: 1;
  }
  100% {
    -moz-transform: rotate(-320deg);
    opacity: 0;
  }
}
@-moz-keyframes spinPulse {
  0% {
    -moz-transform: rotate(160deg);
    opacity: 0;
    box-shadow: 0 0 1px #bdd73c;
  }
  50% {
    -moz-transform: rotate(145deg);
    opacity: 1;
  }
  100% {
    -moz-transform: rotate(-320deg);
    opacity: 0;
  }
}
@keyframes spinoffPulse {
  0% {
    -moz-transform: rotate(0deg);
  }
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-moz-keyframes spinoffPulse {
  0% {
    -moz-transform: rotate(0deg);
  }
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spinPulse {
  0% {
    -webkit-transform: rotate(160deg);
    opacity: 0;
    box-shadow: 0 0 1px #bdd73c;
  }
  50% {
    -webkit-transform: rotate(145deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-320deg);
    opacity: 0;
  }
}
@-webkit-keyframes spinoffPulse {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes rotatecircle {
}
@-moz-keyframes rotatecircle {
  0% {
    -moz-transform: rotate(0deg);
  }
  100% {
    -moz-transform: rotate(-360deg);
  }
}

@-webkit-keyframes rotatecircle {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
  }
}
</style>
