<template>
  <button
    class="app-button"
    :class="{'app-button-gettoken':type1, 'app-button-gettoken1':type2, 'app-button-learnmore':type3, 'app-button-demo':type4, 'app-button-tweet':type5, 'app-button-return':type6}"
    @click="buttonclick"
  >{{name}}</button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    name: String,
    type1: String,
    type2: String,
    type3: String,
    type4: String,
    type5: String,
    type6: String,
    target: String
  },
  methods: {
    buttonclick: function(event) {
      if (this.type4 === "true" && this.name !== "See who is trending") {
        this.$router.push({
          name: "TweetDemo",
          query: {
            target: this.target
          }
        });
      }
    }
  }
};
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
.app-button-gettoken {
  background-color: rgb(17, 206, 69);
  width: 210px;
  height: 50px;
  font-size: 16px;
  font-family: "Roboto Condensed";
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
  font-family: "Roboto Condensed";
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
  font-family: "Roboto Condensed";
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
  font-family: "Roboto Condensed";
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
  font-family: "Montserrat";
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
  font-family: "Roboto Condensed";
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 50px;
  text-align: center;
  cursor: pointer;
  border: none;
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
}
</style>