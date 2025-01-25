<script>
import HeaderAnimation from '@/components/HeaderAnimation.vue'

import MenuSlide from '@/components/MenuSlide.vue'
import BlogPreview from '@/components/BlogPreview.vue'
import { usePrismic } from '@prismicio/vue'
import { useHead } from 'unhead'
import { Typed } from '@duskmoon/vue3-typed-js'
import ShinyImage from '@/components/ShinyImage.vue'

export default {
  name: 'home',
  data() {
    return {
      loadingBlogs: true,
      blogpreviews: []
    }
  },
  components: {
    ShinyImage
  },
  methods: {},
  mounted() {
    this.getContent()
    useHead({
      title: 'CE | Geek, developer, trier of things',
      meta: [
        {
          name: 'description',
          content:
            'Claudia is a webdeveloper who writes about (moving to) New Zealand and wants to make the world a more beautiful place through building websites and experiences.'
        },
        { name: 'image', content: '../assets/ClaudiaEngelsman.jpg' },
        { name: 'url', content: 'https://www.claudiaengelsman.com/' }
      ]
    })
  }
}
</script>

<template>
  <div class="home">
    <div class="menubar">
      <router-link to="/home" class="button mt-2">Home</router-link>
      <router-link to="/about" class="button mt-2">About</router-link>
      <router-link to="/blog" class="button mt-2">Archived Blog (old style)</router-link>
    </div>
    <div class="content">
      <section class="intro-block text-block">
        <div class="intro-content">
          <img src="../assets/ClaudiaEngelsman.jpg" alt="Claudia Engelsman" class="intro-image" />
          <div>
            <h3>Hiya!</h3>
            <p class="text">
              I'm Claudia. I'm a webdeveloper in New Zealand. I moved here at the beginning of 2020,
              just before the world got weird. Here I share about projects I'm working on. Since
              this is my own little corner of the internet you might find some experiments and other
              fun stuff here too.
            </p>
          </div>
        </div>
      </section>
    </div>
    <aside>
      <section class="list-block text-block">
        <h2>Q1 2025</h2>
      </section>
    </aside>
    <div class="content">
      <section class="text-block work">
        <h2>Work</h2>
        <p>
          These are the two businesses I founded with my husband and we are actively working on.
        </p>
        <div>
          <ul class="list">
            <li>
              <ShinyImage
                webUrl="https://www.claudiaengelsman.com"
                imageUrl="/src/assets/CalendarPlusScreenshot.png"
              ></ShinyImage
              ><a href="https://www.claudiaengelsman.com"
                >Calendar Plus by<br />
                automagical.work</a
              >
            </li>
            <li>
              <ShinyImage
                webUrl="https://www.claudiaengelsman.com"
                imageUrl="/src/assets/SETBlackBG.jpg"
              ></ShinyImage>
              <a href="https://www.claudiaengelsman.com">Southern Escape Tours</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

.home {
  width: 100%;
  max-width: 100%;

  height: calc(100% - 400px);
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;

  background-color: #edebf7;
  opacity: 1;
  background-image: radial-gradient(#324344 0.5px, #edebf7 0.5px);
  background-size: 18px 18px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  .mt-2 {
    margin-top: 20px;
  }
  h1 {
    opacity: 1;
  }
  h2 {
    color: $text-darkbg;
  }
}
.menubar {
  height: 80px;
  grid-column: 1 / 3;
  @media only screen and (max-width: 768px) {
    grid-column: 1 / 2;
  }
}
.content {
  width: 80%;
  justify-self: center;
}
.intro-block {
  border-radius: 18px;
  background-color: $saffron;
  container-type: inline-size;
  container-name: blockwithimage;
  max-width: 800px;
}

.intro-content {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

.intro-image {
  height: 180px;
  width: 160px;
  object-fit: cover;
  border: white 4px solid;
  margin-left: 40px;
  display: flex;
  align-self: center;
}

@container blockwithimage (max-width: 600px) {
  .intro-image {
    margin-left: 20px;
    width: 120px;
    height: 120px;
  }
}
@container blockwithimage (max-width: 480px) {
  .intro-content {
    display: block;
  }
  .intro-image {
    width: 120px;
    height: 120px;
    float: right;
    shape-outside: margin-box;
  }
}
@container blockwithimage (max-width: 190px) {
  .intro-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .intro-image {
    width: 120px;
    height: 120px;
    margin: 0;
    margin-bottom: 10px;
  }
}

.work {
  background-color: #2b2b2b;
  border-radius: 18px;
  color: $platinum;
  p {
    color: $platinum;
  }
  .list {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin-block-start: 0;
    margin-inline-start: 0;
    padding-inline-start: 0;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}

.list-block {
}
</style>
