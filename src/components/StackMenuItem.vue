<script>
export default {
  name: 'stackMenuItem',
  props: { href: String, itemText: String, id: String },
  data() {
    return {
      menuItem: ''
    }
  },
  components: {},
  methods: {},
  mounted() {
    window.addEventListener(
      'load',
      (event) => {
        const menuItem = (this.menuItem = document.querySelector('#' + this.id))

        requestAnimationFrame(animate)
        function animate() {
          const elementRect = menuItem.getBoundingClientRect()
          const percentage = (elementRect.x + elementRect.width / 2) / window.innerWidth

          const opacity = Math.max(0.4 + 0.6 * (1 - Math.abs(2 * percentage - 1)), 0.4)
          const fontSize = Math.max(
            Math.min(1.25 + 1.75 * (1 - Math.abs(2 * percentage - 1)), 3),
            1.25
          )

          menuItem.style.opacity = `${opacity}`
          menuItem.style.fontSize = `${fontSize}rem`
          requestAnimationFrame(animate)
        }
      },
      false
    )
  }
}
</script>

<template>
  <a :href="href" :id="id">{{ itemText }}</a>
</template>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

a {
  font-size: inherit;
  transition: color 0.2s;
  color: white;
}
</style>
