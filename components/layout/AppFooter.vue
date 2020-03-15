<template>
  <div class="app-footer">
    <div class="container">
      <div class="row app-footer-content">
        <div class="d-flex col-lg-2 col-sm-12">
          <a
            class="ethereum-link" 
            href="http://ethereum.org/beginners/" 
            target="_blank"
          >
            <img src="../../assets/img/ethereum1.png" >
          </a>
        </div>
        <div class="col-lg-8 d-flex">
          <div class="d-flex social-group">
            <a
              href="https://twitter.com/cryptoraves" 
              target="_blank"
            >
              <div class="d-flex tweet-gradient">
                <i class="fa fa-twitter" />
              </div>
            </a>

            <a
              href="https://www.reddit.com/user/cryptoraves"
              target="_blank"
            >
              <div class="d-flex reddit-gradient">
                <i class="fa fa-reddit-alien"/>
              </div>
            </a>

            <a
              href="https://www.facebook.com/CryptoRaves/?eid=ARDdk7Ij9wXb3-Ja0CYQY0yve9ORWH8zG_c-JmXmnE4gWqzav9h0q2-2DqyOs-pSGoMS7B4GPtfLvlGH"
              target="_blank"
            >
              <div class="d-flex facebook-gradient">
                <i class="fa fa-facebook"/>
              </div>
            </a>

            <a
              href="https://medium.com/@cryptoraves"
              target="_blank"
            >
              <div class="d-flex medium-gradient">
                <i class="fa fa-medium"/>
              </div>
            </a>

            <a
              href="https://github.com/cryptoraves"
              target="_blank"
            >
              <div class="d-flex linkedin-gradient">
                <i class="fa fa-github"/>
              </div>
            </a>
            
            <a
              href="https://t.me/cryptoraves1"
              target="_blank"
            >
              <div class="d-flex telegram-gradient">
                <i class="fa fa-telegram"/>
              </div>
            </a>
         
          </div>
        </div>
        <div class="whitelogo d-flex col-lg-2 col-sm-12">
          <a
            class="d-flex"
            href="/"
          >
            <img src="../../assets/img/whitelogo.png">
          </a>
        </div>
      </div>
      <div class="app-footer-email">
        <a
          href="mailto:info@cryptoraves.space">info@cryptoraves.space
        </a>|
        <span @click="goFaqTop">FAQs</span>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '../ui/AppButton'

export default {
  name: 'AppFooter',
  components: {
    AppButton
  },
  methods: {
    goFaqTop: function() {
      this.$router.push({
        name: 'Faq',
        query: {
          top: true
        }
      })
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  cursor: pointer;
}
.app-footer {
  background-color: rgb(7, 55, 99);
  width: 100%;
  height: 220px;
}
.app-footer-content {
  padding-top: 50px;
}
.ethereum-link {
  margin: auto;
}
.social-group {
  margin: auto;
}
img {
  margin: auto;
  width: 150px;
}
.app-footer-email {
  font-size: 14px;
  font-family: 'Montserrat';
  color: rgb(255, 255, 255);
  line-height: 2.857;
  text-align: center;
}
.app-footer-email a {
  margin-right: 15px;
  color: rgb(255, 255, 255);
}
.app-footer-email span {
  margin-left: 15px;
  color: white;
  cursor: pointer;
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
  transition: all 0.5s ease;
}

.tweet-gradient:hover {
  box-shadow: 0 0 20px #00acee;
  transition: all 0.5s ease;
  transform: translateY(-0.25em);
}
.tweet-gradient:active {
  transform: translateY(0.25em);
}
.tweet-gradient i:hover {
  text-shadow: 0 0 20px #00acee;
  transition: all 0.5s ease;
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
  transition: all 0.5s ease;
}
.reddit-gradient:hover {
  box-shadow: 0 0 20px #c6c6c6;
  transition: all 0.5s ease;
  transform: translateY(-0.25em);
}
.reddit-gradient:active {
  transform: translateY(0.25em);
}
.reddit-gradient i:hover {
  text-shadow: 0 0 20px #c6c6c6;
  transition: all 0.5s ease;
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
  transition: all 0.5s ease;
}
.facebook-gradient:hover {
  box-shadow: 0 0 20px #3b5998;
  transition: all 0.5s ease;
  transform: translateY(-0.25em);
}
.facebook-gradient:active {
  transform: translateY(0.25em);
}
.facebook-gradient i:hover {
  text-shadow: 0 0 20px #3b5998;
  transition: all 0.5s ease;
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
  transition: all 0.5s ease;
}

.medium-gradient:hover {
  box-shadow: 0 0 20px #0000cd;
  transition: all 0.5s ease;
  transform: translateY(-0.25em);
}
.medium-gradient:active {
  transform: translateY(0.25em);
}
.medium-gradient i:hover {
  text-shadow: 0 0 20px #0000cd;
  transition: all 0.5s ease;
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
  transition: all 0.5s ease;
}

.linkedin-gradient:hover {
  box-shadow: 0 0 20px #0e76a8;
  transition: all 0.5s ease;
  transform: translateY(-0.25em);
}
.linkedin-gradient:active {
  transform: translateY(0.25em);
}
.linkedin-gradient i:hover {
  text-shadow: 0 0 20px #0e76a8;
  transition: all 0.5s ease;
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
  transition: all 0.5s ease;
}

.telegram-gradient:hover {
  box-shadow: 0 0 20px #0088cc;
  transition: all 0.5s ease;
  transform: translateY(-0.25em);
}
.telegram-gradient:active {
  transform: translateY(0.25em);
}
.telegram-gradient i:hover {
  text-shadow: 0 0 20px #0088cc;
  transition: all 0.5s ease;
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
  transition: all 0.5s ease;
}

.slideshare-gradient:hover {
  box-shadow: 0 0 20px #0077b5;
  transition: all 0.5s ease;
  transform: translateY(-0.25em);
}
.slideshare-gradient:active {
  transform: translateY(0.25em);
}
.slideshare-gradient i:hover {
  text-shadow: 0 0 20px #0077b5;
  transition: all 0.5s ease;
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
@media only screen and (max-width: 991px) {
  .app-footer {
    height: 500px;
  }
  .whitelogo a {
    margin: auto;
  }
  img {
    margin-bottom: 30px;
    margin-top: 30px;
  }
  .app-footer-email {
    margin-top: 10px;
  }
}
@media only screen and (max-width: 430px) {
  .social-group {
    width: 256px;
    margin: auto;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  }
  .app-footer {
    height: 500px;
  }
  .whitelogo a {
    margin: auto;
  }
  img {
    margin-bottom: 30px;
    margin-top: 30px;
  }
  .app-footer-email {
    margin-top: 10px;
  }
}
</style>
