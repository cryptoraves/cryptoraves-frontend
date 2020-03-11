<template>
  <button
    :class="{ 'app-button-gettoken':type1, 'app-button-gettoken1':type2, 'app-button-learnmore':type3, 'app-button-demo':type4, 'app-button-tweet':type5, 'app-button-return':type6, 'app-button-guide':type7,'app-button-guide-tweet':type8 }"
    class="app-button"
    @click="buttonclick"
  >{{ name }}</button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    name: {
      type: String,
      default: null
    },
    type1: {
      type: String,
      default: null
    },
    type2: {
      type: String,
      default: null
    },
    type3: {
      type: String,
      default: null
    },
    type4: {
      type: String,
      default: null
    },
    type5: {
      type: String,
      default: null
    },
    type6: {
      type: String,
      default: null
    },
    type7: {
      type: String,
      default: null
    },
    type8: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: null
    }
  },
  methods: {
    buttonclick: function() {
      if (this.type4 === 'true' && this.name !== 'See who is trending') {
        this.$router.push({
          name: 'TweetDemoPage',
          query: {
            target: this.target
          }
        })
      }
      if (this.type4 === 'true' && this.name == 'See who is trending') {
        this.$router.push({
          name: 'LeaderboardPage',
          query: {
            page: 1
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.app-button {
  outline: none;
  margin: 10px;
  transition: all 200ms ease-out;
}
.app-button:hover {
  box-shadow: 0 0.5em 0.5em -0.4em #19bc8b;
  transform: translateY(-0.25em);
  transition: all 200ms ease-out;
}
.app-button:active {
  box-shadow: none;
  transform: none;
  transition: all 200ms ease-out;
}

.app-button-guide-tweet {
  background-color: rgb(17, 99, 206);
  width: 250px;
  height: 65px;
  font-size: 20px;
  font-family: 'Roboto Condensed';
  color: #fff;
  font-weight: bold;
  margin: 30px auto 30px auto;
  padding: 10px 20px;
  border-radius: 50px;
  text-align: center;
  cursor: pointer;
  border: none;
}

.app-button-gettoken {
  background-color: rgb(17, 206, 69);
  width: 210px;
  height: 50px;
  font-size: 16px;
  font-family: 'Roboto Condensed';
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 50px;
  text-align: center;
  cursor: pointer;
  border: none;
}

.app-button-gettoken1 {
  background-color: rgb(17, 206, 69);
  width: 250px;
  height: 65px;
  font-size: 20px;
  font-family: 'Roboto Condensed';
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 50px;
  text-align: center;
  cursor: pointer;
  border: none;
}

.app-button-learnmore {
  border-width: 3px;
  border-color: rgb(17, 206, 69);
  border-style: solid;
  background: none;
  width: 250px;
  height: 65px;
  font-size: 20px;
  font-family: 'Roboto Condensed';
  color: rgb(17, 206, 69);
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 50px;
  text-align: center;
  cursor: pointer;
}
.app-button-demo {
  background-color: rgb(2, 49, 124);
  width: 250px;
  height: 35px;
  font-size: 15px;
  font-family: 'Roboto Condensed';
  color: rgb(255, 255, 255);
  font-weight: bold;
  text-transform: uppercase;
  padding: 8px 20px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
}
.app-button-tweet {
  background-color: #00a2ed;
  width: 10rem;
  height: 2.5rem;
  font-size: 1.2rem;
  line-height: 1.5;
  font-family: 'Montserrat';
  color: rgb(255, 255, 255);
  font-weight: bold;
  padding: 8px 20px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
}
.app-button-return {
  background-color: rgb(17, 206, 69);
  width: 210px;
  height: 50px;
  font-size: 16px;
  font-family: 'Roboto Condensed';
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 50px;
  text-align: center;
  cursor: pointer;
  border: none;
}

.app-button-guide {
  background-color: rgb(218, 14, 236);
  width: 250px;
  height: 35px;
  font-size: 15px;
  font-family: 'Roboto Condensed';
  color: rgb(255, 255, 255);
  font-weight: bold;
  text-transform: uppercase;
  padding: 8px 20px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
}

@media only screen and (max-width: 991px) {
  .app-button-gettoken {
    display: none;
  }
}
@media only screen and (max-width: 550px) {
  .app-button-tweet {
    width: 10rem;
    height: 2.5rem;
    font-size: 1rem;
  }

  .app-button-guide-tweet {
    width: 200px;
    height: 50px;
    margin: 10px auto 10px auto;
  }
}
</style>
