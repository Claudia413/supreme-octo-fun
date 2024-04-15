<script>
import Backdrop from './Backdrop.vue'
import BlogPreview from './BlogPreview.vue'
import { usePrismic } from '@prismicio/vue'
import { useHead } from 'unhead'

export default {
  name: 'BlogView',
  data() {
    return {
      currentBlog: '',
      bigBlogPreview: null,
      moreBigBlogPreview: [],
      loadingBlogs: true,
      blogs: null,
      contentLoading: false,
      // if we open a blog post directly from url we do not get category prop and need to store it internally
      currentCategory: [],
      blog: {
        title: [{ text: '' }],
        subtitle: [],
        header: {},
        prismicID: '',
        seo_title: '',
        seo_description: '',
        seo_image: ''
      },
      slices: []
    }
  },
  props: {
    uid: '',
    category: ''
  },
  components: {
    Backdrop,
    BlogPreview
  },
  watch: {
    $route(to, from) {
      this.getContent(to.params.uid)
    }
  },
  methods: {
    async getContentByCategory(category) {
      const prismic = usePrismic()
      // Get first blog post title and image to show on top of bookmark
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
    },
    async getAllNZBlogTitles() {
      const prismic = usePrismic()
      // Get all other blogs titles to show on bookmark
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
    async getMoreContentByCategory(category) {
      const prismic = this.$prismic;
      // Get first three blog post title and image to show after article
      try {
        const response = await this.$prismic.client.getByTag(category, {
          orderings: { field: 'document.first_publication_date', direction: 'desc' },
          pageSize: 3,
          fetch: ['blogpost.title', 'blogpost.blog_image'],
          filters: [prismic.filter.not('document.tags', ['TEST'])]
        })

        this.moreBigBlogPreview = response.results
      } catch (error) {
        console.error(error)
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
    showEmptyState() {
      return !this.contentLoading && this.currentBlog.length === 0
    }
  },
  mounted() {
    this.$refs.blogview.focus()
    if (this.uid) {
      this.getContent(this.uid)
      this.getAllNZBlogTitles();
      // Wait for 1 second to get the category back from prismic
      setTimeout(() => {
        // Call the method with the first element of currentCategory
        this.getMoreContentByCategory(this.currentCategory[0]);
      }, 1000);
    } else {
      this.getContentByCategory(this.category)
      this.getMoreContentByCategory(this.category);
      this.getAllNZBlogTitles()
    }
  }
}
</script>

<template>
  <Backdrop @backdropClick="closeBlogView">
    <Transition appear name="grow">
      <div class="blog-container" tabindex="-1" ref="blogview" @keyup.esc="closeBlogView">
        <article class="blog-content" :class="showBookmark ? 'bookmark-on' : ''">
          <h3 v-if="showEmptyState" class="placeholder">Choose an article to read on the right</h3>
          <h3 v-show="contentLoading">Loading, hold on 1 sec</h3>
          <h1 class="title">{{ blog.title[0].text }}</h1>
          <!-- <img src="../assets/Dashdecoright.png" alt="decoration scribbly" class="deco" /> -->
          <p v-show="!contentLoading && !showEmptyState" class="author">by Claudia Engelsman</p>
          <prismic-rich-text :field="blog.subtitle" class="subtitle blog-body" />
          <section v-for="(slice, index) in slices" :key="'slice-' + index" class="blog-body">
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
          </section>
          <p class="recents" v-if="!showEmptyState">More recent posts in this category</p>
          <div v-if="!showEmptyState" class="row">
            <BlogPreview
              v-for="(blog) in moreBigBlogPreview"
              :key="'post-' + blog.uid"
              :blogId="blog.uid"
              class="blog-post-preview"
              :image="blog.data.blog_image"
              :title="blog.data.title[0].text"
            />
          </div>
          <div class="more-blogs" v-if="!showEmptyState">
            <p class="recents">All the blog posts available</p>
            <ul class="blog-list">
              <li class="blog-title" v-for="post in blogs" :key="post.uid" tabindex="0">
                <router-link :to="'/blog/' + post.uid">{{ post.data.title[0].text }}</router-link>
              </li>
            </ul>
          </div>
          </article>
        </div>
    </Transition>
    <Transition name="slide-left" appear>
      <div class="bookmark-blog-index" v-show="showBookmark" @keyup.esc="closeBlogView">
        <div class="inner">
          <h3>Most Recent</h3>
          <BlogPreview
            v-if="!loadingBlogs"
            :key="'post-' + this.bigBlogPreview[0].uid"
            :blogId="this.bigBlogPreview[0].uid"
            class="blog-post-preview"
            :image="this.bigBlogPreview[0].data.blog_image"
            :title="this.bigBlogPreview[0].data.title[0].text"
          />
          <h3>Articles</h3>
          <ul class="bookmark-blog-list">
            <li class="bookmark-blog-title" v-for="post in blogs" :key="post.uid" tabindex="0">
              <router-link :to="'/blog/' + post.uid">{{ post.data.title[0].text }}</router-link>
            </li>
          </ul>
        </div>
        <div class="fade-bottom"></div>
      </div>
    </Transition>
  </Backdrop>
</template>

<style lang="scss">
@import '../assets/_variables.scss';

.blog-container {
  background-color: rgb(248, 245, 237);
  background: radial-gradient(
    circle,
    rgb(255, 254, 249) 0%,
    rgb(247, 244, 237) 81%,
    rgb(235, 240, 237) 100%
  );
  height: 90%;
  width: 90%;
  margin: auto auto 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 0;
  overflow-y: auto;
  @media only screen and (max-width: 768px) {
    width: 95%;
    height: 98%;
    margin-bottom: 0%;
  }
}

.blog-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(46, 46, 46);
  padding: 2rem;
  &.bookmark-on {
    height: 100%;
    display: flex;
    justify-content: center;
    opacity: 0.5;
    font-weight: bold;
    padding-right: 18rem;
    h3 {
      font-size: 1.3rem;
    }
  }
  @media only screen and (max-width: 1000px) {
    &.bookmark-on {
      padding-right: 18rem;
    }
  }
}

.row {
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
   @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
}

.recents {
  font-size: 1rem;
  font-weight: bold;
  margin: 3rem 0 1.2rem 0;
}

.more-blogs{
  max-width: 100%;
}
.blog-list {
  list-style: none;
  width: 800px;
  max-width: 800px;
  padding-inline-start: 0;
  line-height: 1.8;
  a {
    font-size: 14px;
  }
  @media only screen and (max-width: 768px) {
   width: unset;
  }
}

h1 {
  text-transform: capitalize;
}

h1,
h2,
h3 {
  color: #5a675d;
}

.blog-body {
  max-width: 800px;
  .text {
    font-size: 1rem;
    a {
      font-size: 14px;
    }
  }
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
  color: #5a675d;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    width: 90%;
    height: 92%;
    rotate: 0deg;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}

.inner {
  position: relative;
  padding: 0.75rem;
  overflow-y: auto;
  height: 100%;
}

.blog-post-preview {
  max-height: 280px;
  max-width: 280px;
}

.bookmark-blog-list {
  padding-inline-start: 0;
  margin-bottom: 4rem;
}

a {
  font-size: 1rem;
}
.bookmark-blog-title {
  list-style: none;
  margin-bottom: 1.5rem;
  cursor: pointer;
}

.fade-bottom {
  height: 64px;
  width: calc(100% - 9px);
  position: absolute;
  bottom: 0;
  background: linear-gradient(0deg, rgb(244, 244, 244) 0, rgba(244, 244, 244, 0) 100%);
  pointer-events: none;
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
  transform: translateX(350px);
  transition: transform 0.3s ease;
}
</style>
