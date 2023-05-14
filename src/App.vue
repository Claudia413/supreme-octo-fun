<script>
import './assets/main.scss'
import Footer from '@/components/Footer.vue'
import { createHead } from 'unhead'

export default {
  data() {
    return {
      showFooter: true
    }
  },
  components: {
    Footer
  },
  mounted() {
    if (
      this.$route.path === '/comingsoon' ||
      this.$route.path === '/almost-there' ||
      this.$route.path === '/thank-you' ||
      this.$route.path === '/links' ||
      this.$route.path === '/home2' ||
      this.$route.path === '/adventures'
    ) {
      this.showFooter = false
    }
    createHead()
  },
  updated() {
    if (
      this.$route.path === '/comingsoon' ||
      this.$route.path === '/almost-there' ||
      this.$route.path === '/thank-you' ||
      this.$route.path === '/links' ||
      this.$route.path === '/home2' ||
      this.$route.path === '/adventures'
    ) {
      this.showFooter = false
    } else {
      this.showFooter = true
    }
  }
}
</script>

<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-if="showFooter" class="footer"></Footer>
  </div>
</template>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 4000px;
  margin: auto;
}
</style>
