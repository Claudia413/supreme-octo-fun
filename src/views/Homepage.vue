<script>
import BlogPreview from '@/components/BlogPreview.vue'
import { usePrismic } from '@prismicio/vue'
import { useHead } from 'unhead'

export default {
  name: 'home',
  data() {
    return {
      loadingBlogs: true,
      blogpreviews: []
    }
  },
  components: {
    BlogPreview
  },
  methods: {
    async getContent() {
      const prismic = usePrismic()
      try {
        const response = await this.$prismic.client.getByType('blogpost', {
          orderings: { field: 'document.first_publication_date', direction: 'desc' },
          pageSize: 4,
          fetch: ['blogpost.title', 'blogpost.blog_image'],
          filters: [prismic.filter.not('document.tags', ['TEST'])]
        })

        this.blogpreviews = response.results
        this.loadingBlogs = false
      } catch (error) {
        console.error(error)
      }
    }
  },
  mounted() {
    this.getContent()
    useHead({
      title: 'CE | Developer, adventurer',
      meta: [
        {
          name: 'description',
          content:
            'Claudia is a webdeveloper who writes about (moving to) New Zealand and wants to make the world a more beautiful place through building websites and art.'
        },
        { name: 'image', content: '../assets/ClaudiaByLaurenMcCormick2.jpg' },
        { name: 'url', content: 'https://www.claudiaengelsman.com/' }
      ]
    })
  }
}
</script>

<template>
  <div class="home">
    <h1>big things are going to happen here!</h1>
    <div class="content">
      <div class="placeholder section">
        <p>first one</p>
      </div>
      <div class="placeholder section">
        <p>second one</p>
      </div>
      <div class="placeholder section">
        <p>third one</p>
      </div>
      <div class="placeholder section">
        <p>fourth one</p>
      </div>
    </div>
    <!-- <section class="full-block-row blog-highlight">
      <div v-if="loadingBlogs" class="blog-post">
        <div class="blog-pic placeholder"></div>
        <div class="blog-tag-text placeholder"></div>
      </div>
      <div v-if="loadingBlogs" class="blog-post">
        <div class="blog-pic placeholder"></div>
        <div class="blog-tag-text placeholder"></div>
      </div>
      <div v-if="loadingBlogs" class="blog-post">
        <div class="blog-pic placeholder"></div>
        <div class="blog-tag-text placeholder"></div>
      </div>
      <div v-if="loadingBlogs" class="blog-post">
        <div class="blog-pic placeholder"></div>
        <div class="blog-tag-text placeholder"></div>
      </div>
      <BlogPreview
        v-else
        v-for="(post, index) in blogpreviews"
        :key="'post-' + index"
        :blogId="post.uid"
        class="blog-post"
        :image="post.data.blog_image"
        :title="post.data.title[0].text"
      />
    </section> -->
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

.home {
  height: 100vh;
  max-height: 100%;
  width: auto;
  min-width: fit-content;
  display: flex;
  flex-direction: column;
  background-image: url('../assets/WalnutDeskBG.jpg');
  background-repeat: repeat;
}

.content {
  display: flex;
}

.placeholder {
  min-width: 500px;
  min-height: 500px;
  box-sizing: border-box;
  margin-right: 500px;
  p {
    color: white;
  }
}

.blog-post {
  display: flex;
  align-content: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  &:hover {
    .blog-tag-text {
      opacity: 0.95;
      transition: opacity 0.3s ease;
    }
  }
  .blog-tag-text {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-family: 'Abel';
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    max-width: 100%;
    margin: 24px;
    text-align: center;
    background-color: #fdfdfd;
    padding: 32px;
    opacity: 0.85;
    transition: opacity 0.3s ease;
  }
  .blog-pic {
    height: 240px;
    width: 220px;
    object-fit: cover;
  }
  @media only screen and (max-width: 1112px) {
    .blog-pic {
      height: 200px;
      width: 200px;
    }
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 32px;
    .blog-tag-text {
      margin: 32px;
    }
    .blog-pic {
      height: 320px;
      width: 340px;
    }
  }
}
</style>
