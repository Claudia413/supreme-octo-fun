<template>
  <div id="app">
    <router-view/>
    <Footer class="footer"/>
  </div>
</template>

<style lang="scss">

</style>

<script>
import './assets/main.scss'
import Footer from "@/components/Footer.vue";

export default {
    components: {
      Footer
    }
}
</script>
