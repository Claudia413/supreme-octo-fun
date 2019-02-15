<template>
  <div class="home">
    <HeaderAnimation/>
    <img alt="Vue logo" src="../assets/logo.png">
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import HeaderAnimation from '@/components/HeaderAnimation.vue'

export default {
  name: 'home',
  components: {
    Footer,
    HeaderAnimation
  }
}
</script>
