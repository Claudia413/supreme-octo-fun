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
      this.$route.path === '/adventures' ||
      this.$route.path === '/'
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
      this.$route.path === '/adventures' ||
      this.$route.path === '/'
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
  width: 100%;
  max-width: 4000px;
  margin: auto;
  background-color: #edebf7;
  opacity: 1;
  background-image: radial-gradient(#324344 0.5px, #edebf7 0.5px);
  background-size: 18px 18px;
}
</style>
