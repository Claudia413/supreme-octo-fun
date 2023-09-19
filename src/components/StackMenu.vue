<script>
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
      menuItemAbout: ''
    }
  },
  components: {},
  methods: {
    createObserver() {
      let observer

      let options = {
        root: null,
        rootMargin: '0px -100px'
      }

      observer = new IntersectionObserver(this.handleIntersect, options)
      observer.observe(this.menuItemPhotos)
      observer.observe(this.menuItemBlog)
      observer.observe(this.menuItemVlog)
      observer.observe(this.menuItemAbout)
    },
    handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        console.log('entry', entry)
        // when item goes almost off screen on left side move it to leftMenu
        if (entry.intersectionRatio === 0 && entry.boundingClientRect.x < 100) {
          if (!this.leftMenu.includes(entry.target.id)) {
            this.leftMenu.push(entry.target.id)
          }

          console.log('left menu array', this.leftMenu)
          console.log('center menu array', this.menu)
          // when item goes almost off screen on right side move it to rightMenu
        } else if (entry.intersectionRatio === 0 && entry.boundingClientRect.x > 100) {
          console.log('going up right!')
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
          {{ item }}
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
          {{ item }}
        </li>
      </TransitionGroup>
    </nav>
    <nav class="right-menu">
      <TransitionGroup name="list">
        <li v-for="item in rightMenu" :key="item" :id="item">
          {{ item }}
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
  font-size: 16px;
}

li {
  list-style: none;
  margin-right: 900px;
}
.menu {
  padding: 2rem 0;
  color: white;
  display: flex;
  li:first-of-type {
    margin-left: 30vw;
  }
  .hidden {
    opacity: 0;
  }
}

.left-menu {
  position: fixed;
  top: 32px;
  left: 10px;
  color: pink;
  display: flex;
  flex-direction: column;
}

.right-menu {
  position: fixed;
  top: 32px;
  right: 10px;
  color: pink;
  display: flex;
  flex-direction: column;
  li {
    margin-right: 0;
  }
}
</style>
