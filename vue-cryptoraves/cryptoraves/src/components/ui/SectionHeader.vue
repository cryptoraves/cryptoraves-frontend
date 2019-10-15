<template>
  <div class="section-header">
    <img src="../../assets/img/cryptoraves_PNG-01.png" />
    <br />
    <slot></slot>
    <i v-if="portfolio" class="fa fa-list-alt" title="Transaction History" @click="goHistory(user)"></i>
  </div>
</template>

<script>
export default {
  name: "SectionHeader",
  props: {
    portfolio: String,
    user: String
  },
  methods: {
    goHistory(user) {
      this.$root.$emit("changeUser", user);
      // localStorage.setItem("transactionPageNum", 0);
      // localStorage.setItem("transactionFlag", 0);
      this.$router.push({
        name: "HistoryPage",
        query: {
          user: user
        }
      });
    }
  }
};
</script>

<style scoped>
.section-header {
  font-size: 30px;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  text-align: center;
}
.section-header img {
  width: 100px;
  height: 100%;
  margin-top: 50px;
}
.section-header i {
  transition: all 0.5s ease;
}
.section-header i:hover {
  cursor: pointer;
  transition: all 0.5s ease;
  transform: translateY(-0.25em);
}
.section-header i:active {
  transform: translateY(0.25em);
}
@media only screen and (max-width: 500px) {
  .section-header {
    font-size: 20px;
  }
  .section-header img {
    width: 70px;
    margin-top: 25px;
  }
}
</style>