<script>
export default {
  name: 'MapNZ',
  data() {
    return {}
  },
  components: {},
  methods: {
    openBlogView() {
      this.$emit('clickOpenBlog')
    }
  }
}
</script>

<template>
  <div class="map">
    <img class="image" src="../assets/MapNZSouthIsland2.png" />
    <div class="stack" @click="openBlogView">
      <img class="book" src="../assets/BookstackBookUp.png" />
      <img class="books" src="../assets/BookstackUp.png" />
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/_variables.scss';

.map {
  width: 900px;
  height: 75%;
  display: flex;
  position: relative;
  @media only screen and (max-width: 768px) {
    width: 90vw;
    height: 90vw;
  }
  .image {
    height: 75%;
    width: auto;
    filter: saturate(0.87) drop-shadow(10px 10px 15px);
    rotate: -15deg;
    position: absolute;
    top: 0;
    right: 104px;
    @media only screen and (max-width: 768px) {
      width: 70vw;
      height: auto;
    }
  }

  .stack {
    width: 200px;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    cursor: pointer;
    &:hover {
      .book {
        transform: translateY(-25px);
        animation: wobble 1.5s alternate;
      }
    }
    @media only screen and (max-width: 768px) {
      align-items: end;
      width: 100%;
    }
  }

  .book {
    height: 7%;
    width: auto;
    filter: saturate(0.87) drop-shadow(-10px 10px 15px);
    position: absolute;
    right: 15px;
    top: 0;
    transition: all 0.5s ease;
    @media only screen and (max-width: 768px) {
      width: 25%;
      height: auto;
      position: relative;
      top: 10px;
      right: 6px;
    }
  }
  .books {
    height: 95%;
    width: auto;
    filter: saturate(0.87) drop-shadow(-10px 10px 15px);
    position: absolute;
    right: 0;
    bottom: 0;
    @media only screen and (max-width: 768px) {
      width: 25%;
      height: auto;
      position: relative;
    }
  }

  // animation keyframes
  @keyframes wobble {
    0% {
      transform: translateX(0%) translateY(-5px) rotate(-1deg);
    }
    15% {
      transform: translateX(-3%) translateY(-10px) rotate(1deg);
    }
    30% {
      transform: translateX(1%) translateY(-15px) rotate(3deg);
    }
    45% {
      transform: translateX(-5%) translateY(-25px) rotate(-3deg);
    }
    60% {
      transform: translateX(2%) translateY(-25px) rotate(2deg);
    }
    75% {
      transform: translateX(-1%) translateY(-25px) rotate(-1deg);
    }
    100% {
      transform: translateX(0%) translateY(-25px);
    }
  }
}
</style>
