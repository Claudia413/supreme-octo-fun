<template>
  <div class="links">
    <div class="hex photo"></div>
    <SocialIconBar :instagram="false" :website="true" />
    <img src="../assets/Dashdecoright.png" alt="decoration scribbly" class="deco" />
    <!-- <a href="https://www.youtube.com/@claudiaengelsman/videos" class="button mt-2"
      >New Zealand vlogs on Youtube</a
    > -->
    <h3>Latest post on Coding & Tech:</h3>
    <div class="blogs">
      <div v-if="loadingBlogsTech" class="blog-post placeholder">
        <div class="blog-pic"></div>
        <div class="blog-tag-text"></div>
      </div>
      <BlogPreview
        v-else
        v-for="(post, index) in blogpreviewstech"
        :key="'post-' + index"
        :blogId="post.uid"
        class="blog-post"
        :image="post.data.blog_image"
        :title="post.data.title[0].text"
      />
    </div>
    <h3>Latest post on New Zealand & Emigration:</h3>
    <div class="blogs">
      <div v-if="loadingBlogsNZ" class="blog-post placeholder">
        <div class="blog-pic"></div>
        <div class="blog-tag-text"></div>
      </div>
      <BlogPreview
        v-else
        v-for="(post, index) in blogpreviewsnz"
        :key="'post-' + index"
        :blogId="post.uid"
        class="blog-post"
        :image="post.data.blog_image"
        :title="post.data.title[0].text"
      />
    </div>
    <router-link to="/about" class="button mt-2">About me</router-link>
    <a href="mailto:claudiaengelsman@gmail.com" class="button mt-2">E-mail me</a>
  </div>
</template>

<script>
// @ is an alias to /src
import SocialIconBar from '@/components/SocialIconBar.vue'
import BlogPreview from '@/components/BlogPreview.vue'
import { usePrismic } from '@prismicio/vue'

export default {
  name: 'links',
  data() {
    return {
      blogpreviewsnz: [],
      blogpreviewstech: [],
      loadingBlogsTech: true,
      loadingBlogsNZ: true
    }
  },
  components: {
    SocialIconBar,
    BlogPreview
  },
  methods: {
    async getContentTech() {
      const prismic = usePrismic()
      try {
        const response = await this.$prismic.client.getByTag('Tech', {
          orderings: { field: 'document.first_publication_date', direction: 'desc' },
          pageSize: 1,
          fetch: ['blogpost.title', 'blogpost.blog_image']
        })
        this.loadingBlogsTech = false
        this.blogpreviewstech = response.results
      } catch (error) {
        console.log(error)
      }
    },
    async getContentNZ() {
      const prismic = usePrismic()
      try {
        const response = await this.$prismic.client.getByTag('NZ', {
          orderings: { field: 'document.first_publication_date', direction: 'desc' },
          pageSize: 1,
          fetch: ['blogpost.title', 'blogpost.blog_image']
        })
        this.loadingBlogsNZ = false
        this.blogpreviewsnz = response.results
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.getContentNZ()
    this.getContentTech()
  },
  beforeRouteUpdate(to, from, next) {
    this.getContent(to.params.uid)
    next()
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

.links {
  background-color: $grey-light;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  h3 {
    font-family: 'Karla', 'Average Sans', sans-serif;
    font-size: 18px;
    line-height: 36px;
    text-align: center;
    max-width: 280px;
  }
  .photo {
    margin: 12px 0;
  }
  .hex {
    width: 150px;
    height: 150px;
    -webkit-clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
    clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
    background-image: url('../assets/ClaudiaEngelsman.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .deco {
    width: 48px;
    margin: 24px auto;
  }
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
}

.button {
  text-align: center;
  max-width: 50%;
}

.blogs {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 768px) {
    width: auto;
    flex-direction: column;
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
