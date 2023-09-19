<script>
import StackMenuItem from '../components/StackMenuItem.vue'
export default {
  name: 'stackMenu',
  data() {
    return {
      leftMenu: [],
      menu: ['Photos', 'Blog', 'Vlog', 'About'],
      rightMenu: [],
      menuItemPhotos: '',
      menuItemBlog: '',
      menuItemVlog: '',
      menuItemAbout: '',
      thresholdList: []
    }
  },
  components: { StackMenuItem },
  methods: {
    buildThresholdList() {
      let thresholds = []
      let numSteps = 5

      for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps
        thresholds.push(ratio)
      }

      thresholds.push(0)
      this.thresholdList = thresholds
      return thresholds
    },
    createObserver() {
      let observer

      let options = {
        root: null,
        rootMargin: '0px -100px 0px -100px',
        threshold: this.buildThresholdList()
      }

      observer = new IntersectionObserver(this.handleIntersect, options)
      observer.observe(this.menuItemPhotos)
      observer.observe(this.menuItemBlog)
      observer.observe(this.menuItemVlog)
      observer.observe(this.menuItemAbout)
    },
    handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        // when item goes almost off screen on left side move it to leftMenu
        if (entry.intersectionRatio === 0 && entry.boundingClientRect.x < 100) {
          if (!this.leftMenu.includes(entry.target.id)) {
            this.leftMenu.push(entry.target.id)
          }
          // when item goes almost off screen on right side move it to rightMenu
        } else if (entry.intersectionRatio === 0 && entry.boundingClientRect.x > 800) {
          if (!this.rightMenu.includes(entry.target.id)) {
            this.rightMenu.push(entry.target.id)
          }
        } else {
          //remove from left or right list and leave in center list
          this.leftMenu = this.leftMenu.filter((i) => i !== entry.target.id)
          this.rightMenu = this.rightMenu.filter((i) => i !== entry.target.id)
        }
      })
    },
    isInVerticalList(itemID) {
      return this.leftMenu.includes(itemID) || this.rightMenu.includes(itemID)
    }
  },
  mounted() {
    window.addEventListener(
      'load',
      (event) => {
        this.menuItemPhotos = document.querySelector('#Photos')
        this.menuItemBlog = document.querySelector('#Blog')
        this.menuItemVlog = document.querySelector('#Vlog')
        this.menuItemAbout = document.querySelector('#About')

        this.createObserver()
      },
      false
    )
  },

  beforeUnmount() {}
}
</script>

<template>
  <header id="stack-menu">
    <nav class="left-menu">
      <TransitionGroup name="list">
        <li v-for="item in leftMenu" :key="item" :id="item">
          <StackMenuItem :href="'#' + item + 'content'" :itemText="item" />
        </li>
      </TransitionGroup>
    </nav>
    <nav class="menu">
      <TransitionGroup name="list">
        <li
          v-for="item in menu"
          :key="item"
          :id="item"
          :class="isInVerticalList(item) ? 'hidden' : ''"
        >
          <StackMenuItem
            :href="'#' + item + 'content'"
            :itemText="item"
            :thresholdList="this.thresholdList"
            :id="item + 'text'"
          />
        </li>
      </TransitionGroup>
    </nav>
    <nav class="right-menu">
      <TransitionGroup name="list">
        <li v-for="item in rightMenu" :key="item" :id="item">
          <StackMenuItem :href="'#' + item + 'content'" :itemText="item" />
        </li>
      </TransitionGroup>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

header {
  display: flex;
  position: relative;
  font-size: 3rem;
  font-family: 'Cormorant', serif;
}

li {
  list-style: none;
  margin-right: 900px;
  a {
    font-size: inherit;
  }
}
.menu {
  padding: 3rem 0;
  color: white;
  text-align: center;
  opacity: 0.8;
  display: flex;
  li:first-of-type {
    margin-left: calc(25vw + 450px);
  }
  .hidden {
    opacity: 0;
  }
}

.left-menu {
  position: fixed;
  bottom: 88vh;
  left: 10px;
  text-align: left;
  color: white;
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  //raise z above following center menu
  z-index: 50;
  li {
    margin-right: 0;
  }
}

.right-menu {
  position: fixed;
  bottom: 88vh;
  right: 10px;
  text-align: right;
  color: white;
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  li {
    margin-right: 0;
  }
}
</style>
