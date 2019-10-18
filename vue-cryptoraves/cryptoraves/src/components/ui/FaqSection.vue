<template>
  <div class="faq-section">
    <div class="faq-section-title">
      <div class="faq-section-img">
        <img src="../../assets/img/checkitemimg.png" />
      </div>

      <div class="faq-section-text">
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
.faq-section-title {
  display: flex;
}

.faq-section-img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.faq-section-img img {
  width: 30px;
  height: 30px;
}
.faq-section-text {
  font-size: 1.5em;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  font-weight: bold;
  text-align: left;
}

.faq-section-content {
  margin: 10px 0px 10px 5em;
  font-size: 1.25em;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  line-height: 1.4;
  text-align: justify;
  word-break: break-word;
}
.faq-section-content i {
  text-decoration: underline;
}

@media only screen and (max-width: 500px) {
  .faq-section-img img {
    width: 15px;
    height: 15px;
  }
  .faq-section-text {
    font-size: 1em;
  }
  .faq-section-content {
    font-size: 0.8em;
    margin-left: 3.5em;
  }
  .faq-section-text {
    text-align: justify;
  }
}
</style>
