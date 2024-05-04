<script>
import BlogPreview from '../components/BlogPreview.vue'
import Photogrid from '../components/Photogrid.vue'
import MapNZ from '../components/MapNZ.vue'
import StackMenu from '../components/StackMenu.vue'
import PhotoGallery from '../components/PhotoGallery.vue'
import BlogView from '../components/BlogView.vue'
import { usePrismic } from '@prismicio/vue'
import { useHead } from 'unhead'
import DustSpecks from '../components/DustSpecks.vue'

export default {
  name: 'home',
  data() {
    return {
      loadingBlogs: true,
      blogpreviews: [],
      leftMenu: [''],
      menu: ['Photos', 'Blog'],
      rightMenu: ['Vlog', 'Projects'],
      photoGalleryOpen: false,
      photoGalleryCategoryOpened: null,
      blogOpen: false,
      blogCategory: '',
      blogUID: null
    }
  },
  components: {
    BlogPreview,
    Photogrid,
    MapNZ,
    StackMenu,
    PhotoGallery,
    BlogView,
    DustSpecks
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
      if (this.photoGalleryOpen || this.blogOpen) {
        //do not scroll horizontally on blog or gallery view so do nothing
      } else if ('deltaY' in event && event.view.innerWidth >= 768) {
        event.preventDefault()

        window.scrollBy({
          left: event.deltaY
        })
      }
    },
    openGallery(category) {
      this.photoGalleryOpen = true
      this.photoGalleryCategoryOpened = category
    },
    closeGallery() {
      this.photoGalleryOpen = false
      this.photoGalleryCategoryOpened = null
    },
    closeBlogView() {
      this.blogOpen = false
      this.blogUID = null
      this.$router.push('/')
    },
    openBlogView(uid) {
      this.blogOpen = true
      this.blogUID = uid
    },
    openNZBlogView() {
      this.blogOpen = true
      this.blogCategory = 'NZ'
    },
    openTechBlogView() {
      this.blogOpen = true
      this.blogCategory = 'Tech'
    }
  },
  mounted() {
    if (this.$route.params.uid) {
      this.openBlogView(this.$route.params.uid)
    }
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
  <div class="home" :class="photoGalleryOpen ? 'no-scroll' : ''">
    <StackMenu :dark="this.blogOpen" />
    <div class="content">
      <section class="content-block" id="Photoscontent">
        <img class="camera" src="../assets/Canon77D.gif" />
        <img class="candle" src="../assets/DeskCandle1.png" />
        <img class="candle extra" src="../assets/DeskCandle2.png" />
        <!-- <img class="flower" src="../assets/DeskFlower1.png" />
        <img class="flower extra" src="../assets/DeskFlower2.png" /> -->
        <Photogrid @openGallery="openGallery" />
        <PhotoGallery
          v-if="photoGalleryOpen"
          :spotlight="photoGalleryCategoryOpened"
          @closeGallery="closeGallery"
        />
      </section>

      <section class="content-block" id="Blogcontent">
        <MapNZ @clickOpenBlog="openNZBlogView" />
        <img class="laptop" @click="openTechBlogView" src="../assets/laptop.png" />
        <BlogView
          v-if="blogOpen"
          :category="blogCategory"
          :uid="blogUID"
          @closeBlogView="closeBlogView"
        />
        <img class="platypus" src="../assets/PlatypusNifflerOnCoinStackNoBG.png" />
      </section>
      <section class="content-block" id="Vlogcontent">
        <p>third one</p>
      </section>
      <section class="content-block" id="Projectscontent">
        <p>fourth one</p>
      </section>
    </div>
  </div>
  <DustSpecks />
  <DustSpecks :horizontal="true" />
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
  overflow-y: hidden;
  @media only screen and (max-width: 768px) {
    overflow-y: auto;
  }
  &.no-scroll {
    overflow: hidden;
    overflow-x: hidden;
    header,
    .content {
      width: 100vw;
      overflow: hidden;
    }
  }
}

#Photoscontent,
#Projectscontent,
#Blogcontent,
#Vlogcontent {
  scroll-behavior: smooth;
}

.content {
  display: flex;
  margin-top: 100px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: unset;
  }
  @media only screen and (max-width: 472px) {
    overflow-x: hidden;
  }
}

.content-block:first-child {
  margin-left: 20vw;
  @media only screen and (max-width: 768px) {
    margin: 0 1rem 0 1rem;
  }
}

.content-block {
  box-sizing: border-box;
  height: 80vh;
  max-height: 1000px;
  margin-right: 20vw;
  @media only screen and (min-width: 1200px) {
    margin-right: min(20vw, 300px);
    min-height: 80%;
  }
  @media only screen and (max-width: 768px) {
    min-height: 80vh;
    height: auto;
    max-height: unset;
    margin: 5vh 1rem 0 1rem;
  }
  p {
    color: white;
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
  z-index: 5;
  @media only screen and (max-width: 768px) {
    width: 25%;
    position: static;
  }
}

.candle {
  width: 90px;
  height: auto;
  object-fit: contain;
  filter: brightness(95%) drop-shadow(8px 16px 15px);
  position: absolute;
  top: 40%;
  left: 10vw;
  z-index: 5;
  @media only screen and (max-width: 768px) {
    width: 10%;
    position: relative;
  }
  &.extra {
    top: 49%;
    left: 13vw;
    rotate: 210deg;
    filter: drop-shadow(-19px -18px 15px);
  }
}

.flower {
  width: 150px;
  height: auto;
  object-fit: contain;
  filter: brightness(90%) drop-shadow(8px 16px 15px);
  position: absolute;
  top: 80%;
  right: 30vw;
  rotate: 30deg;
  z-index: 5;
  @media only screen and (max-width: 768px) {
    width: 18%;
    position: relative;
  }
  &.extra {
    width: 200px;
    top: 69%;
    left: 13vw;
    rotate: 25deg;
    filter: brightness(90%) drop-shadow(-6px 15px 8px);
  }
}

.platypus {
  position: relative;
  top: -900px;
  height: 300px;
  filter: brightness(80%) drop-shadow(-2px 4px 2px);
  pointer-events: none;
  scale: 1;
  display: block;
  @media only screen and (max-width: 768px) {
    top: -100%;
    left: 50%;
    transform: scaleX(-1);
    scale: 0.9;
    z-index: 0;
    max-height: 300px;
    height: 25%;
  }
  @media only screen and (max-width: 472px) {
    top: -750px;
  }
}

.laptop {
  translate: 0px -180px;
  rotate: 40deg;
  scale: 1;
  filter: drop-shadow(-1px 2px 4px);
  position: relative;
  z-index: 80;
  display: block;
  @media only screen and (max-width: 768px) {
    max-width: 50%;
    top: 80px;
    left: -90px;
  }
}
</style>
