<script>
import BlogPreview from '@/components/BlogPreview.vue'
import Photogrid from '@/components/Photogrid.vue'
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
    BlogPreview,
    Photogrid
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
    },
    handleWheel(event) {
      if ('deltaX' in event) {
        event.preventDefault()

        window.scrollBy({
          left: event.deltaY
        })
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
            'Claudia is a creative who writes about (moving to) New Zealand and wants to make the world a more beautiful place through building websites and art/photography.'
        },
        { name: 'image', content: '../assets/ClaudiaByLaurenMcCormick2.jpg' },
        { name: 'url', content: 'https://www.claudiaengelsman.com/' }
      ]
    })

    document.addEventListener('wheel', this.handleWheel, { passive: false })
  },

  beforeUnmount() {
    document.removeEventListener('wheel', this.handleWheel)
  }
}
</script>

<template>
  <div class="home">
    <header>
      <nav class="menu">
        <li class="first">Photos</li>
        <li class="second">Blog</li>
        <li class="third">Vlog</li>
        <li class="fourth">About</li>
      </nav>
    </header>
    <div class="content">
      <section class="content-block">
        <Photogrid />
      </section>
      <img class="camera" src="../assets/Canon77D.gif" />
      <div class="content-block">
        <p>second one</p>
      </div>
      <div class="content-block">
        <p>third one</p>
      </div>
      <div class="content-block">
        <p>fourth one</p>
      </div>
    </div>
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

.content-block:first-child {
  margin-left: 25vw;
  @media only screen and (max-width: 768px) {
    margin-top: 25%;
    margin: 25vh 1rem 0;
  }
}

.content-block {
  box-sizing: border-box;
  margin-right: 500px;
  @media only screen and (min-width: 1200px) {
    min-width: 500px;
    min-height: 500px;
  }
  p {
    color: white;
  }
}

.menu {
  padding: 2rem 0;
  color: white;
  display: flex;
  li {
    list-style: none;
    margin-right: 900px;
  }
  .first {
    margin-left: 33vw;
    position: sticky;
    left: 0px;
  }
  .second {
    position: sticky;
    left: 0px;
  }
}

.camera {
  width: 280px;
  height: auto;
  object-fit: contain;
  filter: brightness(70%) drop-shadow(15px 10px 15px);
  position: absolute;
  transform: rotate(-25deg);
  top: 10%;
  left: 4vw;
  @media only screen and (max-width: 768px) {
    width: 25%;
  }
}
</style>
