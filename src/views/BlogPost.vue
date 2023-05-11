<template>
  <div class="blog">
    <MenuSlide />
    <div class="blog-grid">
      <header>
        <div v-if="$route.query.label === ''" class="cover"></div>
        <img
          v-else
          src="../assets/BlogHeaderNZ.png"
          alt="close-up of a fern plant in the shade"
          class="cover"
        />
        <div class="intro">
          <p>Welcome to the blog</p>
          <!-- <vue-typed-js
            :strings="['Guide', 'Education', 'Motivation', 'Resources', 'Inspiration']"
            :loop="true"
            :loopCount="2"
            :typeSpeed="75"
            :backDelay="250"
            :backSpeed="35"
            :smartBackspace="true"
          > -->
          <h1>
            Your {{ blog.labels[0] == 'NZ' ? 'New Zealand' : 'Coding' }}
            <span class="typing">Inspiration</span>
          </h1>
          <!-- </vue-typed-js> -->
        </div>
      </header>
      <transition name="slide">
        <TutorialScroll
          v-if="showTutorial"
          :tutorialuid="clickedTutorialUid"
          class="overlay-tutorial"
          v-on:hide-tutorial="returnFromTutorial"
        />
      </transition>
      <div class="content" :class="showTutorial ? 'blur' : ''">
        <h1 class="title">{{ blog.title[0].text }}</h1>
        <img src="../assets/Dashdecoright.png" alt="decoration scribbly" class="deco" />
        <p class="author">by Claudia Engelsman</p>
        <prismic-rich-text :field="blog.subtitle" class="subtitle dent-right" />
        <section v-for="(slice, index) in slices" :key="'slice-' + index" class="dent-right">
          <template v-if="slice.slice_type === 'blog_text_block'">
            <h2 class="heading">{{ slice.primary.section_title[0].text }}</h2>
            <prismic-rich-text :field="slice.primary.section_text" class="text" />
          </template>
          <template v-else-if="slice.slice_type === 'blog_text_block_continued'">
            <prismic-rich-text :field="slice.primary.section_text" class="text" />
          </template>
          <template v-else-if="slice.slice_type === 'image_with_caption'">
            <prismic-image :field="slice.primary.image" class="blog-image" />
            <prismic-rich-text :field="slice.primary.image_description" class="caption" />
          </template>
          <template v-else-if="slice.slice_type === 'text_with_custom_link'">
            <p>
              {{ slice.primary.text[0].text }}
              <span @click="openTutorial(slice.primary.tutorial_uid[0].text)" class="tutorial-link">
                {{ slice.primary.link[0].text }}
              </span>
              {{ slice.primary.text_continued[0].text }}
            </p>
          </template>
        </section>
        <section class="cta">
          <router-link to="/blog"> {{ '\<\<' }} Back to blog overview</router-link>
          <router-link :to="'/blog/' + relatedPostId">
            {{ relatedPostTitle }} {{ '>>' }}
          </router-link>
        </section>
      </div>
      <AsideBlog
        v-if="!contentLoading"
        :labels="blog.labels"
        :blogID="blog.prismicID"
        class="blog-bar"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuSlide from '@/components/MenuSlide.vue'
import AsideBlog from '@/components/AsideBlog.vue'
import TutorialScroll from '@/components/TutorialScroll.vue'
import { useHead } from 'unhead'

export default {
  name: 'blogPost',
  data() {
    return {
      blog: {
        title: [{ text: '' }],
        subtitle: [],
        header: {},
        labels: [],
        prismicID: '',
        uid: '',
        seo_title: '',
        seo_description: '',
        seo_image: ''
      },
      slices: [],
      contentLoading: true,
      relatedPostTitle: '',
      relatedPostId: '',
      clickedTutorialUid: '',
      savedScrollPosition: Number,
      showTutorial: false,
      currentUrl: window.location.href
    }
  },
  components: {
    MenuSlide,
    AsideBlog,
    TutorialScroll
  },
  computed: {
    notAlreadyInUrl: function () {
      return !this.currentUrl.includes(this.$route.params.tutid)
    }
  },
  methods: {
    getContent(uid) {
      this.$prismic.client.getByUID('blogpost', uid).then((document) => {
        // Can't simply put the result in an empty blog object without console erros about undefined before its done loading. So we set them individually with starting empty objects and arrays
        this.blog.title = document.data.title
        this.blog.subtitle = document.data.subtitle
        this.blog.header = document.data.blog_image
        this.blog.labels = document.tags
        this.blog.seo_title = document.data.seo_title[0].text
        this.blog.seo_description = document.data.seo_description[0].text
        this.blog.seo_image = document.data.seo_image.url
        this.slices = document.data.body
        this.blog.prismicID = document.id
        this.contentLoading = false
        this.getRelatedContent(document.id)
        this.fillHeadElement()
      })
    },
    getRelatedContent(prismicId) {
      this.$prismic.client
        .get(this.$prismic.predicate.similar(prismicId, 10), {
          orderings: '[my.blog_post.date desc]'
        })
        .then((response) => {
          this.relatedPostTitle = response.results[0].data.title[0].text
          this.relatedPostId = response.results[0].uid
        })
    },
    openTutorial(tutorialUid) {
      this.clickedTutorialUid = tutorialUid
      this.savedScrollPosition = window.scrollY
      if (!this.$route.params.tutid && this.notAlreadyInUrl) {
        history.pushState({}, '', this.currentUrl + '/' + tutorialUid)
      }
      this.showTutorial = true
      window.scrollTo({ top: 300, behavior: 'smooth' })
    },
    returnFromTutorial() {
      this.showTutorial = false
      window.scrollTo({ top: this.savedScrollPosition, behavior: 'smooth' })
    },
    fillHeadElement() {
      useHead({
        title: this.blog.seo_title,
        meta: [
          {
            name: 'description',
            content: this.blog.seo_description
          },
          { name: 'image', content: this.blog.seo_image },
          { name: 'url', content: '/blog' + this.blog.uid }
        ]
      })
    }
  },
  mounted() {
    let that = this
    this.getContent(this.$route.params.uid)
    this.blog.uid = this.$route.params.uid
    window.addEventListener('popstate', function () {
      that.returnFromTutorial()
    })
    if (this.$route.params.tutid) {
      this.openTutorial(this.$route.params.tutid)
    }
    useHead({
      title: this.blog.seo_title,
      meta: [
        {
          name: 'description',
          content: this.blog.seo_description
        },
        { name: 'image', content: this.blog.seo_image },
        { name: 'url', content: '/blog' + this.blog.uid }
      ]
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.getContent(to.params.uid)
    next()
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

header {
  grid-area: header;
  position: relative;
  display: flex;
  justify-content: center;
  .cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
    object-fit: cover;
    width: 100%;
    max-width: 4000px;
    object-position: center;
    margin-left: auto;
    margin-right: auto;
    display: block;
    z-index: 0;
  }
  .intro {
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-family: 'Karla', sans-serif;
      display: inline-block;
      text-align: center;
    }
    h2 {
      font-family: 'Spectral', sans-serif;
      font-size: 37px;
      line-height: 64px;
      color: white;
    }
    p {
      color: white;
      border-bottom: white 2px solid;
    }
  }
}

.blog {
  background-color: #f5f5f5;
  width: 100%;
  .blog-grid {
    display: grid;
    grid-gap: 0;
    grid-template-columns: 80fr 20fr;
    grid-template-rows: 300px auto;
    grid-template-areas:
      'header header'
      'content aside';
    @media only screen and (max-width: 768px) {
      grid-template-areas:
        'header header'
        'content content'
        'aside aside';
    }
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.5s;
  }
  .slide-enter,
  .slide-leave-to {
    transform: translate(-600px, 0px);
  }
  .overlay-tutorial {
    grid-area: content;
    background-color: rgba(230, 230, 230, 100);
    box-sizing: border-box;
    z-index: 800;
    margin: 0;
    height: auto;
  }
  .content {
    grid-area: content;
    width: 100%;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    padding: 48px 0;
    &.blur {
      filter: blur(8px);
    }
    @media only screen and (max-width: 768px) {
      padding: 0;
    }
    .title {
      color: $primary-bright;
      text-align: center;
      padding: 24px 12px;
    }
    .deco {
      width: 48px;
      margin: 0 auto;
    }
    .author {
      text-align: center;
      font-size: 12px;
      font-weight: bold;
      margin-top: 24px;
    }
    .subtitle {
      padding: 12px;
      text-align: justify;
    }
    .heading {
      color: $primary-bright;
      line-height: 36px;
      font-size: 18px;
    }
    section {
      padding: 8px 12px 12px;
    }
    .dent-right {
      @media only screen and (max-width: 768px) {
        padding: 12px 60px 12px 20px;
      }
    }
    p {
      line-height: 26px;
    }
    a {
      font-size: 14px;
    }
    .blog-image {
      max-width: 100%;
    }
    .text {
      text-align: justify;
      ol {
        font-size: 14px;
        line-height: 26px;
        color: #30343f;
      }
    }
    .caption {
      color: $dark-blue;
      p {
        margin-top: 0;
      }
    }
    .cta {
      display: flex;
      justify-content: space-between;
      a {
        font-size: 14px;
      }
    }
    .tutorial-link {
      color: $yellow;
      cursor: pointer;
      &:hover {
        font-weight: bolder;
      }
    }
  }
  .blog-bar {
    grid-area: aside;
    width: auto;
    max-width: 400px;
    @media only screen and (max-width: 768px) {
      width: 100%;
      max-width: unset;
    }
  }
}
</style>
