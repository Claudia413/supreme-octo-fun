<script>
import PhotogridPhoto from '@/components/PhotogridPhoto.vue'
import Photos from '@/assets/PhotoGallery.json'

export default {
  name: 'Photogrid',
  data() {
    return {
      Photos
    }
  },
  components: {
    PhotogridPhoto
  },
  methods: {},
  mounted() {}
}
</script>

<template>
  <div class="grid">
    <PhotogridPhoto
      v-for="(photo, category) in Photos"
      :key="category"
      :img="photo[0].url"
      @click="$emit('openGallery', category)"
    ></PhotogridPhoto>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/_variables.scss';

.grid {
  width: 900px;
  margin-top: 10vh;
  height: 75%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  @media only screen and (max-width: 768px) {
    width: 90vw;
    height: 90%;
  }
}
</style>
