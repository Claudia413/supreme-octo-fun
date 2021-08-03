<template>
  <div class="blog">
    <vue-headful
      title="Westport July 2021"
      description="A 4 day adventure to the westcoast of the South Island of New Zealand"
      image="../assets/GoldHeader.jpg"
      :url="'/adventure/westport21'"
    />
    <MenuSlide />
    <div class="blog-grid">
      <header>
        <!-- <video width="1200px" height="500px" loop autoplay>
          <source src="../assets/WestportCharmingCreekFoliageTunnel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> -->
        <img src="../assets/WestCoastCover2.jpg" class="cover" />
      </header>
      <div class="content">
        <h1 class="title">Welcome to the adventure</h1>
        <img src="../assets/Dashdecoright.png" alt="decoration scribbly" class="deco" />
        <p class="author">by Claudia Engelsman</p>
        <img src="../assets/Dashdecoright.png" alt="decoration scribbly" class="deco" />
      </div>
    </div>
  </div>
</template>

<script>
  import MenuSlide from "@/components/MenuSlide.vue";

  export default {
    name: "Westport21",
    data() {
      return {};
    },
    components: {
      MenuSlide,
    },
    computed: {},
    methods: {},
    created() {},
    beforeRouteUpdate(to, from, next) {
      this.getContent(to.params.uid);
      next();
    },
  };
</script>

<style lang="scss" scoped>
  @import "../assets/_variables.scss";

  .blog {
    background-color: #f5f5f5;
    width: 100%;
  }
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(8, 250px);
    grid-template-areas:
      "header header header header"
      "header header header header"
      "content content content content";
  }
  header {
    grid-area: header;
    position: relative;
    display: flex;
    justify-content: center;
    .cover {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      object-fit: cover;
      width: 100%;
      max-width: 4000px;
      object-position: center;
      margin-left: auto;
      margin-right: auto;
      display: block;
      z-index: 0;
    }
    .intro {
      z-index: 100;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        font-family: "Karla", sans-serif;
        display: inline-block;
        text-align: center;
      }
      h2 {
        font-family: "Spectral", sans-serif;
        font-size: 37px;
        line-height: 64px;
        color: white;
      }
      p {
        color: white;
        border-bottom: white 2px solid;
      }
    }
  }
</style>
