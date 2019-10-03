<template>
  <div class="faq-section">
    <div class="faq-section-rectangle d-flex">
      <div class="faq-section-circle d-flex">
        <div class="faq-section-circle-txt">
          <slot name="number"></slot>
        </div>
      </div>
      <div class="faq-section-rectangle-txt">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="faq-section-content">
      <slot name="answer"></slot>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "FaqSection"
};
</script>
<style scoped>
.faq-section {
  margin: 2em 0 2em 0;
}
.faq-section-content {
  margin: 10px 50px 10px 50px;
  font-size: 25px;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  line-height: 1.4;
  text-align: justify;
}
.faq-section-content i {
  text-decoration: underline;
}

.faq-section-rectangle {
  background-color: rgb(0, 38, 101);
  margin-left: 20px;
  border-radius: 30px;
  position: relative;
}
.faq-section-rectangle::before {
  content: "";
  position: absolute;
  right: 0px;
  bottom: 0;
  width: 0;
  height: 0;
  border-right: 30px solid #ffe;
  border-top: 30px solid transparent;
}
.faq-section-circle {
  position: absolute;
  height: 40px;
  width: 40px;
  margin-left: -20px;
  margin-top: -8px;
  background: white;
  border-radius: 50px;
  box-shadow: 0px 5px 29px 0px rgba(0, 0, 1, 0.11);
}

.faq-section-circle-txt {
  font-size: 30px;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  font-weight: bold;
  text-align: center;
  margin: auto;
}
.faq-section-rectangle-txt {
  font-size: 25px;
  font-family: "Montserrat";
  color: white;
  font-weight: bold;
  text-align: left;
  margin: auto auto auto 30px;
}

@media only screen and (max-width: 375px) {
  .faq-section-rectangle-txt {
    font-size: 15px;
  }
  .faq-section-content {
    font-size: 15px;
  }
}
</style>
