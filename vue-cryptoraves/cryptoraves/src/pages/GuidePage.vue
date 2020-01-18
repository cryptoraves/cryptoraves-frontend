<template>
  <transition name="fade" mode="out-in">
    <div class="container">
      <div class="guide-page-template">
        <SectionHeader>
          Tweet Your Tokens(with a
          <i>brand new Tweet</i>
          ):
        </SectionHeader>
        <AppButton type8="true" name="Tweet"></AppButton>
        <img src="../assets/img/guide-1.png" />

        <SectionHeader>
          Reply & Send Your Tokens (with a
          <i>Tweet Reply</i>
          ):
        </SectionHeader>
        <div class="reply-icon"></div>
        <img src="../assets/img/guide-2.png" />

        <SectionHeader>
          Tweet Different Tokens Brands You Hold (with a
          <i>brand new Tweet</i>):
        </SectionHeader>
        <AppButton type8="true" name="Tweet"></AppButton>
        <img src="../assets/img/guide-3.png" />

        <SectionHeader>
          Reply & Send Different Token Brands You Hold (with a
          <i>Tweet Reply</i>):
        </SectionHeader>
        <div class="reply-icon"></div>
        <img src="../assets/img/guide-4.png" />
      </div>
    </div>
  </transition>
</template>

<script>
import SectionHeader from "../components/ui/SectionHeader";
import AppButton from "../components/ui/AppButton";
export default {
  name: "GuidePage",
  components: {
    SectionHeader,
    AppButton
  }
};
</script>

<style scoped>
img {
  width: 90%;
}
.guide-page-template {
  text-align: center;
  background-color: white;
  box-shadow: 0 0 1em 1px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 0 2em 2em 2em;
  margin-top: 2em;
  margin-bottom: 2em;
}

.reply-icon {
  margin: 30px auto 30px auto;
  width: 40px;
  height: 28px;
  background-color: rgb(218, 14, 236);
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  transition: all 200ms ease-out;
}
.reply-icon:after {
  content: "";
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  right: 10px;
  bottom: -10px;
  border-left: 10px solid transparent;
  border-right: 2px solid transparent;
  border-top: 10px solid rgb(218, 14, 236);
}

.reply-icon:hover {
  box-shadow: 0 0.5em 0.5em -0.4em #19bc8b;
  transform: translateY(-0.25em);
  transition: all 200ms ease-out;
}
.reply-icon:active {
  box-shadow: none;
  transform: none;
  transition: all 200ms ease-out;
}

@media only screen and (max-width: 550px) {
  .reply-icon {
    margin: 10px auto 10px auto;
  }
}

@media only screen and (max-width: 375px) {
  .guide-page-template {
    padding: 0 1em 1em 1em;
  }
}
</style>