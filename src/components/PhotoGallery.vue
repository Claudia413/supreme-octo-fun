<script>
import Backdrop from './Backdrop.vue'
import Photos from '../assets/PhotoGallery.json'

export default {
  name: 'PhotoGallery',
  data() {
    return {
      Photos,
      currentSpotlight: ''
    }
  },
  props: {
    spotlight: {}
  },
  components: {
    Backdrop
  },
  methods: {
    closeGallery() {
      this.$emit('closeGallery')
    }
  },
  mounted() {}
}
</script>

<template>
  <Backdrop @backdropClick="closeGallery">
    <div class="gallery">
      <div class="spotlight">
        <img class="image" :src="currentSpotlight || Photos[spotlight][0].url" />
      </div>
      <div class="gallery-content">
        <h2>Title</h2>
        <p>Context</p>
        <div class="more">
          <div
            v-for="(photo, index) in Photos[spotlight]"
            :key="index"
            class="col"
            @click="currentSpotlight = photo.url"
          >
            <img class="image small" :src="photo.url" />
            <div class="img-title">
              {{ photo.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Backdrop>
</template>

<style scoped lang="scss">
@import '../assets/_variables.scss';

.gallery {
  background-color: rgb(36, 41, 40);
  height: 95%;
  width: 80%;
  margin: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  overflow-y: auto;
}

.spotlight {
  height: 50%;
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
.image {
  width: 100%;
  height: auto;
  object-fit: contain;
  &.small {
    cursor: pointer;
  }
}

.gallery-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(214, 214, 214);
}

.more {
  display: flex;
}

.col {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(214, 214, 214);
  padding: 2.5rem;
  margin-right: 1rem;
  @media only screen and (max-width: 1200px) {
    padding: 0.5rem;
    margin-right: 0.5rem;
  }
}

.col:last-child {
  margin-right: 0;
}

.img-title {
  border-top: 1px solid rgb(214, 214, 214);
  border-bottom: 1px solid rgb(214, 214, 214);
  width: 100%;
  margin-top: 2.5rem;
  padding: 1rem 0;
}
</style>
