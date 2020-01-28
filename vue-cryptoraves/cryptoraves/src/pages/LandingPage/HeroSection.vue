<template>
  <div class="land-hero">
    <div class="land-hero-cover container">
      <div class="row">
        <div class="land-hero-cover">
          <div class="land-hero-cover-title">
            You + (Being Awesome) = (Token Value)
            <sup>2</sup>
          </div>
          <div class="land-hero-cover-content">
            They’re Personalized Tokens You Can Tweet, For FUN!
            <br />Test Drive Your Own Token Economy. Right On Twitter.
          </div>
        </div>
      </div>
      <div class="row">
        <div class="land-hero-cover">
          <router-link
            to="/"
            v-scroll-to="{
                            el: '#getToken',
                            duration: 500,
                            easing: 'linear',
                            offset: -250,
                            force: true,
                            cancelable: true,
                        }"
          >
            <AppButton name="Launch Your token" type2="true"></AppButton>
          </router-link>
          <span v-on:click="goFaqTop">
            <AppButton name="Learn More" type3="true"></AppButton>
          </span>
          <br />
          <a href="http://web3.cryptoraves.space/" target="_blank">
            <TippingButton></TippingButton>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "../../components/ui/AppButton";
import TippingButton from "../../components/ui/TippingButton";

export default {
  name: "HeroSection",
  components: {
    AppButton,
    TippingButton
  },
  methods: {
    goFaqTop: function(event) {
      this.$router.push({
        name: "Faq",
        query: {
          target: "top"
        }
      });
    },
    goForTest: function(event) {
      this.$parent.$emit("changeUser", "@cypher");
      this.$router.push({
        name: "HistoryPage",
        query: {
          user: "@cypher"
        }
      });
    }
  }
};
</script>

<style scoped>
.land-hero {
  width: 100%;
  height: 750px;
  background-image: url("../../assets/img/herosectionimg.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  display: flex;
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s; /* Firefox < 16 */
  -ms-animation: fadein 2s; /* Internet Explorer */
  -o-animation: fadein 2s; /* Opera < 12.1 */
  animation: fadein 2s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Internet Explorer */
@-ms-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.land-hero-cover {
  margin: auto;
  text-align: center;
}
.land-hero-cover-title {
  font-size: 3.5rem;
  font-family: "Roboto Condensed";
  color: rgb(255, 255, 255);
  font-weight: bold;
  line-height: 1.6;
}
.land-hero-cover-content {
  font-size: 2rem;
  font-family: "Montserrat";
  color: rgb(255, 255, 255);
  line-height: 1.6;
  padding-bottom: 30px;
}
@media only screen and (max-width: 991px) {
  .land-hero-cover-title {
    font-size: 2.7rem;
  }
  .land-hero-cover-content {
    font-size: 1.5rem;
  }
}

@media only screen and (max-width: 770px) {
  .land-hero-cover-title {
    font-size: 2rem;
  }
  .land-hero-cover-content {
    font-size: 1rem;
  }
}
@media only screen and (max-width: 545px) {
  .land-hero-cover-title {
    font-size: 1.8rem;
  }
  .land-hero-cover-content {
    font-size: 1rem;
  }
}
@media only screen and (max-width: 430px) {
  .land-hero-cover-title {
    font-size: 1.5rem;
  }
  .land-hero-cover-content {
    font-size: 0.8rem;
  }
}
</style>