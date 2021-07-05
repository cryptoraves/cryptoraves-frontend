<template>
  <transition
    name="fade"
    mode="out-in">
    <div class="container temp">
      <div class="faq-page-template">
        <SectionHeader>FAQ</SectionHeader>
        <FaqSection
        v-for="(answer,question) in faqs"
        :key="answer">
            <div
              :id="question.replaceAll(' ','_')"
              slot="title">{{question}}?</div>
            <div
              v-html="answer"
              slot="answer">
            </div>
        </FaqSection>
      </div>
    </div>
  </transition>
</template>

<script>
import SectionHeader from '../components/ui/SectionHeader'
import FaqSection from '../components/ui/FaqSection'
import FaqsData from '../components/ui/faq.json'
export default {

  name: 'Faq',
  components: {
    SectionHeader,
    FaqSection
  },
  data() {
    return {
      faqs: ''
    }
  },
  mounted() {
    this.$nextTick(function() {
      if (this.$route.query.target == 'top') window.scrollTo(0, 0)
    })
  },
  created() {
    // this.$ga.page('/')
    this.faqs = FaqsData
  },
  methods: {
    getOffsetLeft(elem) {
      var offsetLeft = 0
      do {
        if (!isNaN(elem.offsetTop)) {
          offsetLeft += elem.offsetTop
        }
      } while ((elem = elem.offsetParent))
      return offsetLeft
    }
  }
}
</script>
<style scoped>
.faq-page-template {
  background-color: white;
  box-shadow: 0 0 1em 1px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 0 2em 2em 2em;
  margin-top: 2em;
  margin-bottom: 2em;
}
@media only screen and (max-width: 375px) {
  .faq-page-template {
    padding: 0 1em 1em 1em;
  }
}
</style>
