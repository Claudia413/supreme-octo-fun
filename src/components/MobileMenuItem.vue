<script>
export default {
  name: 'MobileMenuItem',
  props: { href: String, itemText: String, id: String },
  data() {
    return {
      menuItem: ''
    }
  },
  components: {},
  methods: {}
}
</script>

<template>
  <a :href="href" ref="menuItem" :id="id">{{ itemText }}</a>
</template>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

a {
  font-size: 1rem;
  color: white;
  display: inline-block;
  transition: 0.15s;
}
</style>
