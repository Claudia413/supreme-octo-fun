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
      menuItemAbout: ''
    }
  },
  components: { StackMenuItem },
  methods: {
    createObserver() {
      let observer

      let options = {
        root: null,
        rootMargin: '0px -100px 0px -100px'
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
      <TransitionGroup name="list-left">
        <li v-for="item in leftMenu" :key="item" :id="item">
          <a :href="'#' + item + 'content'" :id="item + 'text0'">{{ item }}</a>
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
          <StackMenuItem :href="'#' + item + 'content'" :itemText="item" :id="item + 'text'" />
        </li>
      </TransitionGroup>
    </nav>
    <nav class="right-menu">
      <TransitionGroup name="list-right">
        <li v-for="item in rightMenu" :key="item" :id="item">
          <a :href="'#' + item + 'content'" :id="item + 'text2'"> {{ item }} </a>
        </li>
      </TransitionGroup>
    </nav>
  </header>
  <header id="stack-menu">
    <h2>testing</h2>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

header {
  display: flex;
  position: relative;
  font-size: 3rem;
  font-family: 'Cormorant', serif;
  &#stack-menu {
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
  &#mobile-menu {
    display: none;
    @media only screen and (max-width: 768px) {
      display: block;
    }
  }
}

li {
  list-style: none;
  margin-right: 900px;
}
.menu {
  padding: 3rem 0;
  color: white;
  text-align: center;
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

//Left list animation below
.list-left-move, /* apply transition to moving elements */
.list-left-enter-active,
.list-left-leave-active {
  transition: all 0.3s ease;
}

.list-left-enter-from {
  opacity: 0.4;
  transform: translateX(25px);
}
.list-left-leave-to {
  opacity: 0;
  transform: translate(25px, 1px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-left-leave-active {
  position: absolute;
  transition: transform 0.3s ease;
}

//Right list animation below

.list-right-move, /* apply transition to moving elements */
.list-right-enter-active,
.list-right-leave-active {
  transition: all 0.3s ease;
}

.list-right-enter-from {
  opacity: 0.4;
  transform: translateX(-25px);
}
.list-right-leave-to {
  opacity: 0;
  transform: translateX(-25px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-right-leave-active {
  position: absolute;
  transition: transform 0.3s ease;
}
</style>
