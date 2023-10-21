<script>
import BlogPreview from '../components/BlogPreview.vue'
import Photogrid from '../components/Photogrid.vue'
import MapNZ from '../components/MapNZ.vue'
import StackMenu from '../components/StackMenu.vue'
import PhotoGallery from '../components/PhotoGallery.vue'
import BlogView from '../components/BlogView.vue'
import { usePrismic } from '@prismicio/vue'
import { useHead } from 'unhead'

export default {
  name: 'home',
  data() {
    return {
      loadingBlogs: true,
      blogpreviews: [],
      leftMenu: [''],
      menu: ['Photos', 'Blog'],
      rightMenu: ['Vlog', 'About'],
      photoGalleryOpen: false,
      photoGalleryCategoryOpened: null,
      newZealandBlogOpen: false,
      newZealandBlogId: null
    }
  },
  components: {
    BlogPreview,
    Photogrid,
    MapNZ,
    StackMenu,
    PhotoGallery,
    BlogView
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
      if (this.photoGalleryOpen || this.newZealandBlogOpen) {
        //do not scroll horizontally so do nothing
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
      this.newZealandBlogOpen = false
      this.newZealandBlogId = null
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
  <div class="home" :class="photoGalleryOpen ? 'no-scroll' : ''">
    <StackMenu />
    <div class="content">
      <section class="content-block" id="Photoscontent">
        <img class="camera" src="../assets/Canon77D.gif" />
        <Photogrid @openGallery="openGallery" />
        <PhotoGallery
          v-if="photoGalleryOpen"
          :spotlight="photoGalleryCategoryOpened"
          @closeGallery="closeGallery"
        />
      </section>

      <section class="content-block" id="Blogcontent">
        <MapNZ
          @click="
            () => {
              this.newZealandBlogOpen = true
            }
          "
        />
        <BlogView v-if="newZealandBlogOpen" @closeBlogView="closeBlogView" />
      </section>
      <section class="content-block" id="Vlogcontent">
        <p>third one</p>
      </section>
      <section class="content-block" id="Aboutcontent">
        <p>fourth one</p>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
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
#Aboutcontent,
#Blogcontent,
#Vlogcontent {
  scroll-behavior: smooth;
}

.content {
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
}

.content-block:first-child {
  margin-left: 25vw;
  @media only screen and (max-width: 768px) {
    margin: 0 1rem 0 1rem;
  }
}

.content-block {
  box-sizing: border-box;
  height: 80vh;
  max-height: 1000px;
  @media only screen and (min-width: 1200px) {
    margin-right: 500px;
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
  @media only screen and (max-width: 768px) {
    width: 25%;
    position: static;
  }
}
</style>
