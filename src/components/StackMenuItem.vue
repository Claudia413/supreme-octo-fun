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
  methods: {
    handleWheel(event) {
      let start, previousTimeStamp
      let done = false

      const animate = (timeStamp) => {
        // Use an arrow function to prevent stack issues with 'this'
        //Using timer to prevent animation from going constantly
        if (start === undefined) {
          start = timeStamp
        }
        const elapsed = timeStamp - start
        const elementRect = this.$refs.menuItem.getBoundingClientRect()
        const percentage = (elementRect.x + elementRect.width / 2) / window.innerWidth
        const opacity = Math.max(0.4 + 0.6 * (1 - Math.abs(2 * percentage - 1)), 0.4)
        const fontSize = Math.max(
          Math.min(1.25 + 1.75 * (1 - Math.abs(2 * percentage - 1)), 3),
          1.25
        )
        const top = 22 * Math.abs(1 - 2 * percentage)
        this.$refs.menuItem.style.opacity = `${opacity}`
        this.$refs.menuItem.style.fontSize = `${fontSize}rem`
        this.$refs.menuItem.style.transform = `translateY(${top}px)`

        if (elapsed < 200) {
          // Stop the animation after 200 miliseconds
          previousTimeStamp = timeStamp
          if (!done) {
            requestAnimationFrame(animate)
          }
        }
      }

      requestAnimationFrame(animate)
    }
  },
  mounted() {
    document.addEventListener('wheel', this.handleWheel, { passive: false })
    window.addEventListener(
      'load',
      (event) => {
        this.menuItem = this.menuItem = document.querySelector('#' + this.id)
      },
      false
    )
    // kick off 1 animation cycle for when page gets refreshed in different position
    this.handleWheel(event)
  },
  beforeDestroy() {
    // Clean up event listener before component is destroyed
    document.removeEventListener('wheel', this.handleWheel)
  }
}
</script>

<template>
  <a :href="href" ref="menuItem" :id="id">{{ itemText }}</a>
</template>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

a {
  font-size: inherit;
  transition: color 0.2s;
  color: white;
  transform: translateY(0px);
  display: inline-block;
}
</style>
