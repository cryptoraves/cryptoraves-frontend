<template>
  <div class="tokensearch">
    <div class="tokensearch-shape">
      <img src="../../assets/img/searchicon.png" />
    </div>
    <div class="tokensearch-input">
      <input type="text" placeholder="Type in your @username here" />
    </div>
    <i class="fa fa-search"></i>
  </div>
</template>

<script>
export default {
  name: "TokenSearch"
};
</script>

<style scoped>
.tokensearch {
  width: 100%;
  border-width: 1px;
  border-color: rgb(235, 235, 235);
  border-style: solid;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 5px 29px 0px rgba(0, 0, 1, 0.11);
  display: flex;
  transition: all 200ms ease-in;
}

.tokensearch:hover,
.tokensearch:focus {
  -webkit-box-shadow: 0px 5px 29px 0px rgba(106, 219, 252, 1);
  -moz-box-shadow: 0px 5px 29px 0px rgba(106, 219, 252, 1);
  box-shadow: 0px 5px 29px 0px rgba(106, 219, 252, 1);
  transition: all 200ms ease-in;
}
.tokensearch-shape {
  border-radius: 5px 0px 0px 5px;
  width: 110px;
  height: 92px;
  position: relative;
  background-color: rgb(2, 49, 124);
  display: flex;
}

.tokensearch-shape:before {
  content: "";
  position: absolute;
  right: -20px;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 20px solid rgb(2, 49, 124);

  border-bottom: 92px solid transparent;
}

.tokensearch-shape img {
  width: 70px;
  height: 70px;
  margin: auto auto auto 25px;
}
.tokensearch-input {
  width: 60%;
  margin-left: 20px;
}
.tokensearch-input input {
  width: 100%;
  height: 100%;
  font-size: 20px;
  font-family: "Montserrat";
  color: rgba(40, 40, 40, 0.502);
  text-align: center;
  border: none;
}
i {
  font-size: 20px;
  color: rgb(0, 38, 101);
  margin: auto;
}
</style>