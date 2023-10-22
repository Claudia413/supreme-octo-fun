<script>
import Backdrop from './Backdrop.vue'
import BlogPreview from './BlogPreview.vue'
import { usePrismic } from '@prismicio/vue'

export default {
  name: 'BlogView',
  data() {
    return {
      currentBlog: '',
      bigBlogPreview: null,
      loadingBlogs: true,
      blogs: null
    }
  },
  props: {
    spotlight: {}
  },
  components: {
    Backdrop,
    BlogPreview
  },
  methods: {
    async getContentNZ() {
      const prismic = usePrismic()
      try {
        const response = await this.$prismic.client.getByTag('NZ', {
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
    closeBlogView() {
      this.$emit('closeBlogView')
    }
  },
  computed: {
    showBookmark() {
      return this.currentBlog.length === 0
    }
  },
  mounted() {
    this.$refs.blogview.focus()
    this.getContentNZ()
  }
}
</script>

<template>
  <Backdrop @backdropClick="closeBlogView">
    <Transition appear name="grow">
      <div class="blog-container" tabindex="-1" ref="blogview" @keyup.esc="closeBlogView">
        <div class="blog-content">
          <h2>Testing stuff here wieeeeejj</h2>
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
          <li class="bookmark-blog-title" v-for="post in blogs" :blogId="post.uid" tabindex="0">
            {{ post.data.title[0].text }}
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
