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
      @keyup.enter="$emit('openGallery', category)"
      tabindex="0"
    ></PhotogridPhoto>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/_variables.scss';

.grid {
  width: 900px;
  height: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 30%);
  @media only screen and (max-width: 768px) {
    width: 90vw;
    height: 90%;
    grid-template-columns: repeat(2, 250px);
    grid-template-rows: repeat(5, 250px);
    align-items: center;
    justify-content: center;
  }
}
</style>
