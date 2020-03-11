<template>
  <Landing />
</template>

<script>
import Landing from './LandingPage/'

export default {
  name: 'App',
  components: { Landing },
  data() {
    return {
      currentScroll: 0
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(e) {
      // Any code to be executed when the window is scrolled
      if (this.currentScroll > e.srcElement.scrollingElement.scrollTop) {
        //scroll up
        if (e.srcElement.scrollingElement.scrollTop <= 100) {
          this.showHeader = false
        }
      } else {
        //scroll down
        if (e.srcElement.scrollingElement.scrollTop > 100) {
          this.showHeader = true
        }
      }
      this.currentScroll = e.srcElement.scrollingElement.scrollTop
    }
  }
}
</script>
