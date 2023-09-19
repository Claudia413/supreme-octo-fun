<script>
export default {
  name: 'stackMenuItem',
  props: { href: String, itemText: String, thresholdList: Array, id: String },
  data() {
    return {
      menuItem: '',
      prevRatio: 0.0,
      increasingColor: 'rgba(255, 255, 255, ratio)',
      decreasingColor: 'rgba(255, 255, 255, ratio)'
    }
  },
  components: {},
  methods: {
    createObserver() {
      let observer

      let options = {
        root: null,
        rootMargin: '0px 20% 0px 20%',
        threshold: this.thresholdList
      }

      observer = new IntersectionObserver(this.handleIntersect, options)
      observer.observe(this.menuItem)
    },
    handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > this.prevRatio) {
          entry.target.style.color = this.increasingColor.replace('ratio', entry.intersectionRatio)
        } else {
          entry.target.style.color = this.decreasingColor.replace('ratio', entry.intersectionRatio)
        }

        this.prevRatio = entry.intersectionRatio
      })
    }
  },
  mounted() {
    window.addEventListener(
      'load',
      (event) => {
        this.menuItem = document.querySelector('#' + this.id)

        this.createObserver()
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
}
</style>
