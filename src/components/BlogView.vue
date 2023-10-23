<script>
import Backdrop from './Backdrop.vue'
import BlogPreview from './BlogPreview.vue'
import TutorialScroll from '@/components/TutorialScroll.vue'
import { usePrismic } from '@prismicio/vue'
import { useHead } from 'unhead'

export default {
  name: 'BlogView',
  data() {
    return {
      currentBlog: '',
      bigBlogPreview: null,
      loadingBlogs: true,
      blogs: null,
      contentLoading: true,
      // if we open a blog post directly from url we do not get category prop and need to store it internally
      currentCategory: [],
      blog: {
        title: [{ text: '' }],
        subtitle: [],
        header: {},
        prismicID: '',
        uid: '',
        seo_title: '',
        seo_description: '',
        seo_image: ''
      },
      slices: [],
      clickedTutorialUid: '',
      savedScrollPosition: Number,
      showTutorial: false,
      currentUrl: window.location.href
    }
  },
  props: {
    uid: '',
    category: ''
  },
  components: {
    Backdrop,
    BlogPreview,
    TutorialScroll
  },
  watch: {
    // whenever uid changes, this function will run
    uid(newUID, oldUID) {
      console.log('old and new', oldUID, newUID)
      if (newUID !== oldUID) {
        this.getContent(newUID)
      }
    }
  },
  methods: {
    async getContentByCategory(category) {
      const prismic = usePrismic()
      try {
        const response = await this.$prismic.client.getByTag(category, {
          orderings: { field: 'document.first_publication_date', direction: 'desc' },
          pageSize: 1,
          fetch: ['blogpost.title', 'blogpost.blog_image'],
          filters: [prismic.filter.not('document.tags', ['TEST'])]
        })

        this.bigBlogPreview = response.results
      } catch (error) {
        console.error(error)
      }
      try {
        const response = await this.$prismic.client.getByTag('NZ', {
          orderings: { field: 'document.first_publication_date', direction: 'desc' },
          fetch: ['blogpost.title'],
          filters: [prismic.filter.not('document.tags', ['TEST'])]
        })

        this.blogs = response.results
      } catch (error) {
        console.error(error)
      } finally {
        this.loadingBlogs = false
      }
    },
    getContent(uid) {
      this.contentLoading = true
      this.$prismic.client.getByUID('blogpost', uid).then((document) => {
        // Can't simply put the result in an empty blog object without console erros about undefined before its done loading. So we set them individually with starting empty objects and arrays
        this.blog.title = document.data.title
        this.blog.subtitle = document.data.subtitle
        this.blog.header = document.data.blog_image
        this.currentCategory = document.tags
        this.blog.seo_title = document.data.seo_title[0].text
        this.blog.seo_description = document.data.seo_description[0].text
        this.blog.seo_image = document.data.seo_image.url
        this.slices = document.data.body
        this.blog.prismicID = document.id
        this.currentBlog = document.uid
        this.contentLoading = false

        // this.getRelatedContent(document.id)
        this.fillHeadElement()
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
    },
    closeBlogView() {
      this.$emit('closeBlogView')
    }
  },
  computed: {
    showBookmark() {
      return this.currentBlog.length === 0
    },
    notAlreadyInUrl: function () {
      return !this.currentUrl.includes(this.$route.params.tutid)
    }
  },
  mounted() {
    this.$refs.blogview.focus()
    if (this.uid) {
      this.getContent(this.uid)
    } else {
      this.getContentByCategory(this.category)
    }
    window.addEventListener('popstate', function () {
      that.returnFromTutorial()
    })
    if (this.$route.params.tutid) {
      this.openTutorial(this.$route.params.tutid)
    }
  }
}
</script>

<template>
  <Backdrop @backdropClick="closeBlogView">
    <Transition appear name="grow">
      <div class="blog-container" tabindex="-1" ref="blogview" @keyup.esc="closeBlogView">
        <div class="blog-content">
          <h2>Testing stuff here wieeeeejj</h2>
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
            <!-- <img src="../assets/Dashdecoright.png" alt="decoration scribbly" class="deco" /> -->
            <p v-show="contentLoading">Loading, hold on 1 sec</p>
            <p v-show="!contentLoading" class="author">by Claudia Engelsman</p>
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
                  <span
                    @click="openTutorial(slice.primary.tutorial_uid[0].text)"
                    class="tutorial-link"
                  >
                    {{ slice.primary.link[0].text }}
                  </span>
                  {{ slice.primary.text_continued[0].text }}
                </p>
              </template>
            </section>
          </div>
        </div>
      </div>
    </Transition>
    <Transition name="slide-left" appear>
      <div class="bookmark-blog-index" v-show="showBookmark">
        <h3>Blogs</h3>
        <BlogPreview
          v-if="!loadingBlogs"
          :key="'post-' + this.bigBlogPreview[0].uid"
          :blogId="this.bigBlogPreview[0].uid"
          class="blog-post"
          :image="this.bigBlogPreview[0].data.blog_image"
          :title="this.bigBlogPreview[0].data.title[0].text"
        />
        <ul class="bookmark-blog-list">
          <li class="bookmark-blog-title" v-for="post in blogs" :key="post.uid" tabindex="0">
            <router-link :to="'/blog/' + post.uid" class="blog-post">{{
              post.data.title[0].text
            }}</router-link>
          </li>
        </ul>
      </div>
    </Transition>
  </Backdrop>
</template>

<style scoped lang="scss">
@import '../assets/_variables.scss';

.blog-container {
  background-color: rgb(248, 245, 237);
  background: radial-gradient(
    circle,
    rgb(255, 254, 249) 0%,
    rgb(247, 244, 237) 81%,
    rgb(235, 240, 237) 100%
  );
  height: 80%;
  width: 85%;
  margin: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 0;
  overflow-y: auto;
  @media only screen and (max-width: 768px) {
    width: 95%;
    height: 100%;
  }
}

.blog-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(46, 46, 46);
}

h2 {
  text-transform: capitalize;
}

.bookmark-blog-index {
  background-color: white;
  height: 80%;
  width: 260px;
  border-radius: 3px;
  rotate: -2deg;
  position: absolute;
  right: 70px;
  top: 77px;
  padding: 0.75rem;
  overflow-y: auto;
}

.bookmark-blog-list {
  padding-inline-start: 0;
}
.bookmark-blog-title {
  list-style: none;
  margin-bottom: 1.5rem;
  cursor: pointer;
}

//Grow animation below
.grow-move,
.grow-enter-active,
.grow-leave-active {
  transition: all 0.3s ease;
}

.grow-enter-from {
  opacity: 0.4;
  transform: scale(10%);
}
.grow-leave-to {
  opacity: 0;
  transform: scale(0%);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.grow-leave-active {
  position: absolute;
  transition: transform 0.3s ease;
}

.slide-left-move,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
}

.slide-left-enter-from {
  transform: translateX(250px);
  opacity: 0.6;
}

.slide-left-leave-to {
  position: absolute;
  transition: transform 0.3s ease;
}
</style>
