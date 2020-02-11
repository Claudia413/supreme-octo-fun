<template>
  <div id="app">
    <router-view/>
    <Footer v-if="showFooter" class="footer"/>
  </div>
</template>

<style lang="scss">

</style>

<script>
import './assets/main.scss'
import Footer from "@/components/Footer.vue";

export default {
    data() {
      return {
        showFooter: true
      }
    },
    components: {
      Footer
    },
    created() {
      if (this.$route.path === '/comingsoon' || this.$route.path === '/almost-there' || this.$route.path === '/thank-you') {
        this.showFooter = false
      }
    },
    updated() {
      if (this.$route.path === '/comingsoon' || this.$route.path === '/almost-there' || this.$route.path === '/thank-you') {
        this.showFooter = false
      } else {
        this.showFooter = true
      }
    }
}
</script>
