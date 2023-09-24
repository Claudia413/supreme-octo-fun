<script>
import Backdrop from './Backdrop.vue'

export default {
  name: 'PhotoGallery',
  data() {
    return {}
  },
  components: {
    Backdrop
  },
  methods: {}
}
</script>

<template>
  <Backdrop>
    <div class="gallery">
      <div class="spotlight">
        <img class="image" src="../assets/Westport21Yurt2.jpg" />
      </div>
    </div>
  </Backdrop>
</template>

<style scoped lang="scss">
@import '../assets/_variables.scss';

.gallery {
  background-color: rgb(37, 43, 41);
  height: 95%;
  width: 80%;
  margin: auto;
  overflow: hidden;
  display: flex;
}

.spotlight {
}
.image {
  border: white 3px solid;
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
