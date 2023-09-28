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
      <div class="gallery-content">
        <h2>Title</h2>
        <p>Context</p>
        <div class="more">
          <div class="col">
            <img class="image" src="../assets/Westport21Yurt2.jpg" />

            <div class="img-title">Title</div>
          </div>
          <div class="col">
            <img class="image" src="../assets/Westport21Yurt2.jpg" />

            <div class="img-title">Title</div>
          </div>
          <div class="col">
            <img class="image" src="../assets/Westport21Yurt2.jpg" />

            <div class="img-title">Title</div>
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
  object-fit: cover;
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
