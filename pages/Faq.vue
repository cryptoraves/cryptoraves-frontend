<template>
  <transition
    name="fade"
    mode="out-in">
    <div class="container temp">
      <div class="faq-page-template">
        <SectionHeader>FAQ</SectionHeader>

        <FaqSection
        v-for="(answer,question) in faqs"
        :index="question"
        :key="answer">
            <div
              :id="question.replaceAll(' ','_')"
              slot="title">{{question}}?</div>
            <div slot="answer">
              {{answer.toString()}}
            </div>
        </FaqSection>
        <FaqSection>
          <div slot="title">How do I create an account?</div>
          <div slot="answer">
            You don’t need to create an account. You heard that right!!! We’re
            trying to make our platform as easy to use as possible. Just search
            for your Twitter @username in the header search bar. You’ll see all
            your tokens and transactions listed there. And since we have a
            public database, you’ll be able to see other users’ transactions,
            too.
          </div>
        </FaqSection>

      </div>
    </div>
  </transition>
</template>

<script>
import SectionHeader from '../components/ui/SectionHeader'
import FaqSection from '../components/ui/FaqSection'
import faqsData from '../components/ui/faq.json'
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
      else if (this.$route.query.target == 'privacy')
        window.scrollTo(
          0,
          this.getOffsetLeft(document.getElementById('privacy')) - 150
        )
      else if (this.$route.query.target == 'hodler')
        window.scrollTo(
          0,
          this.getOffsetLeft(document.getElementById('hodler')) - 100
        )
    })
  },
  created() {
    // this.$ga.page('/')

    this.faqs = faqsData
    console.log(this.faqs)
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
