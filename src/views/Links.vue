<template>
  <div class="links">
    <div class="hex photo"></div>
    <SocialIconBar :instagram="false" :website="true" />
    <img src="../assets/Dashdecoright.png" alt="decoration scribbly" class="deco" />
    <a href="https://www.youtube.com/watch?v=w_lgHMAMLyg" class="button mt-2"
      >New Zealand Road Trip part 2 on Youtube</a
    >
    <a href="https://feminine-project-name-generator.netlify.com/" class="button mt-2"
      >Try the Feminine project name generator</a
    >
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
    getContentTech() {
      this.$prismic.client
        .get(
          [
            this.$prismic.Predicates.at('document.type', 'blogpost'),
            this.$prismic.Predicates.at('document.tags', ['Tech'])
          ],
          {
            orderings: '[document.first_publication_date desc]',
            pageSize: 1,
            fetch: ['blogpost.title', 'blogpost.blog_image']
          }
        )
        .then((response) => {
          this.loadingBlogsTech = false
          this.blogpreviewstech = response.results
          // response is the response object, response.results holds the documents
        })
    },
    getContentNZ() {
      this.$prismic.client
        .get(
          [
            this.$prismic.Predicates.at('document.type', 'blogpost'),
            this.$prismic.Predicates.at('document.tags', ['NZ'])
          ],
          {
            orderings: '[document.first_publication_date desc]',
            pageSize: 1,
            fetch: ['blogpost.title', 'blogpost.blog_image']
          }
        )
        .then((response) => {
          this.loadingBlogsNZ = false
          this.blogpreviewsnz = response.results
          // response is the response object, response.results holds the documents
        })
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
    font-family: 'Karla', sans-serif;
    font-size: 18px;
    line-height: 36px;
    text-align: center;
    max-width: 280px;
  }
  .hex {
    width: 150px;
    height: 150px;
    -webkit-clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
    clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
    background-image: url('../assets/ClaudiaByLaurenMcCormick.jpg');
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
