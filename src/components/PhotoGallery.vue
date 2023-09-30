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
  mounted() {
    this.$refs.gallery.focus()
  }
}
</script>

<template>
  <Backdrop @backdropClick="closeGallery">
    <div class="gallery" tabindex="-1" ref="gallery" @keyup.esc="closeGallery">
      <div class="spotlight">
        <img class="image" :src="currentSpotlight || Photos[spotlight][0].url" />
      </div>
      <div class="gallery-content">
        <h2>{{ spotlight }}</h2>
        <p>{{ currentSpotlight.title || Photos[spotlight][0].title }}</p>
        <div class="more">
          <div
            v-for="(photo, index) in Photos[spotlight]"
            :key="index"
            class="col"
            @click="currentSpotlight = photo.url"
            tabindex="0"
            @keyup.enter="currentSpotlight = photo.url"
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
  background: radial-gradient(
    circle,
    rgba(58, 65, 64, 1) 0%,
    rgba(41, 40, 36, 1) 81%,
    rgba(22, 24, 23, 1) 100%
  );
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
    max-height: 24vh;
  }
}

.gallery-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(214, 214, 214);
}

h2 {
  text-transform: capitalize;
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
