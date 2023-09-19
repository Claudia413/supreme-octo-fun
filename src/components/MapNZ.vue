<script>
import PhotogridPhoto from '@/components/PhotogridPhoto.vue'
export default {
  name: 'MapNZ',
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
  <div class="map">
    <img class="image" src="../assets/MapNZSouthIsland2.png" />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/_variables.scss';

.map {
  width: 900px;
  margin-top: 15%;
  height: 75%;
  display: flex;
  position: relative;
  @media only screen and (max-width: 768px) {
    width: 90vw;
    height: 90%;
  }
  .image {
    height: 75%;
    width: auto;
    filter: saturate(0.87);
    rotate: -15deg;
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
