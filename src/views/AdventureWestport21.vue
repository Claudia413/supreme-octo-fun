<template>
  <div class="blog">
    <vue-headful
      title="Westport July 2021"
      description="A 4 day adventure to the westcoast of the South Island of New Zealand"
      image="../assets/GoldHeader.jpg"
      :url="'/adventure/westport21'"
    />
    <MenuSlide />
    <header>
      <!-- <video width="1200px" height="500px" loop autoplay>
          <source src="../assets/WestportCharmingCreekFoliageTunnel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> -->
      <img src="../assets/WestCoastCover4.jpg" class="cover" />
      <h1 class="header-title animate">
        Punakaiki<span class="header-subtitle animate">Our first stop on our way to Westport</span>
      </h1>
    </header>
    <div class="content">
      <!-- <h2 class="title">Welcome to the adventure</h2>
      <img src="../assets/Dashdecoright.png" alt="decoration scribbly" class="deco" />
      <p class="author">by Claudia Engelsman</p>
      <img src="../assets/Dashdecoright.png" alt="decoration scribbly" class="deco" /> -->
      <section class="overlap-grid">
        <div class="card-text animate">
          <div class="text-container">
            <h2>Old Ghost Road</h2>
            <p>
              On our first hike we did the first part of the Old Ghost Road trail. We hiked along the Mokihinui River
              for a few hours, starting from the easier end of the route in Seddonville.
            </p>
            <p>
              On our first hike we did the first part of the Old Ghost Road trail. We hiked along the Mokihinui River
              for a few hours, starting from the easier end of the route in Seddonville.
            </p>
            <p>
              On our first hike we did the first part of the Old Ghost Road trail. We hiked along the Mokihinui River
              for a few hours, starting from the easier end of the route in Seddonville.
            </p>
            <p>
              On our first hike we did the first part of the Old Ghost Road trail. We hiked along the Mokihinui River
              for a few hours, starting from the easier end of the route in Seddonville.
            </p>
          </div>
        </div>
        <div class="photo horizontal animate"><img src="../assets/WestCoastCover4.jpg" /></div>
      </section>
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
  header {
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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
    .header-title {
      z-index: 50;
      font-size: 120px;
      font-family: "Playfair Display", sans-serif;
      margin-left: 8vw;
      align-self: flex-start;
      opacity: 0.1;
      transform: translateY(50px);
      display: flex;
      flex-direction: column;
      &.animate {
        animation: show 0.9s ease-out;
        animation-delay: 0.4s;
        animation-fill-mode: forwards;
      }
      .header-subtitle {
        z-index: 50;
        font-size: 20px;
        font-family: "Raleway", sans-serif;
        color: white;
        margin-top: 4px;
        align-self: flex-start;
        margin-bottom: calc(8rem - 4px);
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
      }
    }
  }
  @keyframes show {
    from {
      opacity: 0.1;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes slideLeft {
    from {
      opacity: 0.1;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes slideRight {
    from {
      opacity: 0.1;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  h1 {
    font-family: "Karla", sans-serif;
    display: inline-block;
    text-align: center;
  }
  h2 {
    font-family: "Playfair Display", sans-serif;
    font-size: 37px;
    line-height: 64px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
  }
  .overlap-grid {
    position: relative;
    top: -40px;
    max-width: 1400px;
    display: grid;
    grid-template-columns: 4fr 2fr 4fr;
    grid-template-rows: 20% 70% 10%;
  }
  .card-text {
    grid-column: 2/4;
    grid-row: 1/3;
    background-color: snow;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    color: #03312e;
    display: flex;
    justify-content: flex-end;
    .text-container {
      max-width: 60%;
      padding: 48px;
      box-sizing: border-box;
    }
    &.animate {
      animation: slideLeft 0.9s ease-out;
      animation-delay: 0.4s;
      animation-fill-mode: forwards;
    }
  }
  .photo {
    grid-column: 1/3;
    grid-row: 2/4;
    overflow: hidden;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.animate {
      animation: slideRight 0.9s ease-out;
      animation-delay: 0.4s;
      animation-fill-mode: forwards;
    }
  }
</style>
