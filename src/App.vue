<script>
import './assets/main.scss'
import { createHead } from 'unhead'

export default {
  mounted() {
    createHead()
  }
}
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  margin: 0;
}
</style>
