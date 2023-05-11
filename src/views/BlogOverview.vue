<script setup>
import HeaderAnimation from '@/components/HeaderAnimation.vue'
import MenuSlide from '@/components/MenuSlide.vue'
import BlogPreview from '@/components/BlogPreview.vue'
import { usePrismic } from '@prismicio/vue'
import { ref, onMounted } from 'vue'
import { useBlogStore } from '@/stores/blogStore'
import { storeToRefs } from 'pinia'
import { useHead } from 'unhead'

const pageNumber = ref(1)
const maxPageNumber = ref(2)
const pageNumberNZ = ref(1)
const maxPageNumberNZ = ref(2)
const prismic = usePrismic()
const state = useBlogStore()
const { blogpreviewstech, blogpreviewsnz } = storeToRefs(state)

const getContentTech = async (pageNumber) => {
  try {
    const response = await prismic.client.getByTag('Tech', {
      orderings: { field: 'document.first_publication_date', direction: 'desc' },
      pageSize: 4,
      page: pageNumber,
      fetch: ['blogpost.title', 'blogpost.blog_image']
    })
    maxPageNumber.value = response.total_pages
    state.setTechBlogPreviewsFromPrismic(response.results)
    // response is the response object, response.results holds the documents
  } catch (error) {
    console.log(error)
  }
}

const getContentNZ = async (pageNumberNZ) => {
  try {
    const response = await prismic.client.getByTag('NZ', {
      orderings: { field: 'document.first_publication_date', direction: 'desc' },
      pageSize: 4,
      page: pageNumberNZ,
      fetch: ['blogpost.title', 'blogpost.blog_image']
    })
    maxPageNumberNZ.value = response.total_pages
    state.setNZBlogPreviewsFromPrismic(response.results)
  } catch (error) {
    console.error(error)
  }
}

const showMoreTechBlogPosts = () => {
  pageNumber.value = pageNumber.value + 1
  getContentTech(pageNumber.value)
}

const showMoreNZBlogPosts = () => {
  pageNumberNZ.value = pageNumberNZ.value + 1
  getContentNZ(pageNumberNZ.value)
}

onMounted(() => {
  if (state.blogpreviewsnz.length === 0) {
    getContentNZ(pageNumberNZ.value)
  }
  if (state.blogpreviewstech.length === 0) {
    getContentTech(pageNumber.value)
  }
  useHead({
    title: 'CE | Developer, adventurer',
    meta: [
      {
        name: 'description',
        content: 'Blog library with posts about Coding, women in Tech, New Zealand and emigration'
      },
      { name: 'image', content: '../assets/ClaudiaByLaurenMcCormick2.jpg' },
      { name: 'url', content: 'https://www.claudiaengelsman.com/blog' }
    ]
  })
})
</script>

<template>
  <div class="overview">
    <HeaderAnimation class="headeranimation">
      <template v-slot:title>
        <h1>Welcome to the blog!</h1>
      </template>
    </HeaderAnimation>
    <MenuSlide />
    <!-- <section class="featured-blog">
            <h3>Featured post</h3>
        </section> -->
    <section class="full-block blog-reel dark">
      <h3>New Zealand & Emigration</h3>
      <div class="blogs">
        <div v-if="state.loadingBlogsNZ" class="blog-post placeholder">
          <div class="blog-pic"></div>
          <div class="blog-tag-text"></div>
        </div>
        <div v-if="state.loadingBlogsNZ" class="blog-post placeholder">
          <div class="blog-pic"></div>
          <div class="blog-tag-text"></div>
        </div>
        <div v-if="state.loadingBlogsNZ" class="blog-post placeholder">
          <div class="blog-pic"></div>
          <div class="blog-tag-text"></div>
        </div>
        <div v-if="state.loadingBlogsNZ" class="blog-post placeholder">
          <div class="blog-pic"></div>
          <div class="blog-tag-text"></div>
        </div>
        <BlogPreview
          v-for="(post, index) in blogpreviewsnz"
          :key="'post-' + index"
          :blogId="post.uid"
          class="blog-post"
          :image="post.data.blog_image"
          :title="post.data.title[0].text"
        />
      </div>
      <p :class="maxPageNumberNZ > pageNumberNZ ? '' : 'hidden'" @click="showMoreNZBlogPosts()">
        More blogs >>
      </p>
    </section>
    <section class="full-block blog-reel light">
      <h3>Tech & Coding</h3>
      <div class="blogs">
        <div v-if="state.loadingBlogsTech" class="blog-post placeholder">
          <div class="blog-pic"></div>
          <div class="blog-tag-text"></div>
        </div>
        <div v-if="state.loadingBlogsTech" class="blog-post placeholder">
          <div class="blog-pic"></div>
          <div class="blog-tag-text"></div>
        </div>
        <div v-if="state.loadingBlogsTech" class="blog-post placeholder">
          <div class="blog-pic"></div>
          <div class="blog-tag-text"></div>
        </div>
        <div v-if="state.loadingBlogsTech" class="blog-post placeholder">
          <div class="blog-pic"></div>
          <div class="blog-tag-text"></div>
        </div>
        <BlogPreview
          v-for="(post, index) in blogpreviewstech"
          :key="'post-' + index"
          :blogId="post.uid"
          class="blog-post"
          :image="post.data.blog_image"
          :title="post.data.title[0].text"
        />
      </div>
      <p
        :class="maxPageNumber > pageNumber ? 'light-bg' : 'hidden'"
        @click="showMoreTechBlogPosts()"
      >
        More blogs >>
      </p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

.overview {
  width: 100%;
}

.blog-reel {
  background-color: $primary-color;
  height: auto;
  padding: 40px;
  &.light {
    background-color: $text-darkbg;
    color: $primary-color;
    h3 {
      color: $primary-color;
    }
  }
  h3 {
    color: $text-darkbg;
    padding: 0 24px 24px;
  }
  p {
    color: white;
    cursor: pointer;
    font-size: 16px;
    transition: opacity 0.4s, visibility 0.4s ease-in-out;
    &.light-bg {
      color: inherit;
    }
    &.hidden {
      opacity: 0;
      visibility: hidden;
    }
    &:hover {
      font-weight: bold;
    }
  }
  .blogs {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    @media only screen and (max-width: 768px) {
      width: auto;
      flex-direction: column;
    }
  }
}
.placeholder {
  .blog-pic {
    height: 240px;
    width: 240px;
    background-color: $grey;
  }
  @media only screen and (max-width: 1112px) {
    .blog-pic {
      height: 220px;
      width: 220px;
    }
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 32px;
    .blog-tag-text {
      margin: 32px;
    }
    .blog-pic {
      height: 280px;
      width: 280px;
    }
  }
}
</style>
