<script>
import PhotogridPhoto from '@/components/PhotogridPhoto.vue'
export default {
  name: 'Photogrid',
  data() {
    return {}
  },
  components: {
    PhotogridPhoto
  },
  methods: {}
}
</script>

<template>
  <div class="grid">
    <PhotogridPhoto img="../src/assets/WestCoastCover2.jpg" />
    <PhotogridPhoto img="../src/assets/WestCoastCover4.jpg" />
    <PhotogridPhoto img="../src/assets/Westport21Yurt5.jpg" />
    <PhotogridPhoto img="../src/assets/Westport21Yurt4.jpg" />
    <PhotogridPhoto img="../src/assets/ClaudiaDunedinDuneHappy.jpg" />
    <PhotogridPhoto img="../src/assets/DunedinHeader.jpg" />
    <PhotogridPhoto img="../src/assets/KaikouraRainbowSky.jpg" />
    <PhotogridPhoto img="../src/assets/Westport21Yurt2.jpg" />
    <PhotogridPhoto img="../src/assets/Westport21Yurt6.jpg" />
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
