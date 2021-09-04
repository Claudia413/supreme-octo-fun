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
              This track can be a multi-day hike if you want to follow it further and along the way sleep in huts. The
              full trail is 85km long and can be hiked or ridden with a mountainbike. The highest point is 1280m high.
            </p>
            <p>
              Along the way, about 2hrs into the hike, we spotted a Kea, which was later identified as a young male.
              Reinier took a few pictures of him with his camera and sent these with a date/time stamp and our location
              to the Kea database. This turned out to be quite a nice sighting for them as they had not had any
              sightings of the endangered bird in this area before.
            </p>
          </div>
        </div>
        <div class="photo horizontal animate"><img src="../assets/WestCoastCover4.jpg" /></div>
      </section>
      <section class="story">
        <img class="initial" src="../assets/PInitial.png" alt="Capital Letter P for Pounamu" />
        <div class="discover-heading">
          <h2>Pounamu</h2>
          <span class="subtitle">The Legend of green stone</span>
        </div>
        <p>
          Poutini, the guardian of Pounamu and a taniwha (a giant water being), snatched a beautiful Māori woman,
          Waitaiki, from the North Island. He brought her south eventually to the Arahura River but her husband
          Tamaahua, who had knowledge about the spirit realm, gave chase. Close to catch up he readied himself for the
          encounter.
        </p>
        <p>
          Fearing Tamaahua's strength and determination, Poutini decided that if he could not have Waitaiki, no-one
          would. He transformed her into his likeness, Pounamu, and laid her in the cold waters of the river. The jade
          fragments that break off and roll down the river to the sea are known as Waitaiki’s children.
        </p>
      </section>
      <section class="animal-stats">
        <div class="illustration">
          <img src="../assets/Weka.png" alt="Weka bird" />
        </div>
        <div class="stats">
          <div class="numbers">
            <h2>5</h2>
            <h3>Bird species spotted</h3>
          </div>
          <div class="numbers">
            <h2>1</h2>
            <h3>Mammal encountered</h3>
          </div>
          <div class="numbers">
            <h2>6</h2>
            <h3>Mushrooms admired</h3>
          </div>
        </div>
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
      transform: translateX(100px);
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
    color: $forestblack;
  }
  section {
    margin: 80px 0;
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
    grid-template-rows: 2fr 7fr 1fr;
    margin-top: unset;
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
      animation: slideLeft 1.2s ease-out;
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
  .story {
    max-width: 1400px;
    display: grid;
    grid-template-columns: 1fr 33% 33%;
    grid-template-rows: 100px 250px;
    grid-column-gap: 80px;
    text-align: left;
    .initial {
      grid-column: 1/2;
      grid-row: 1/3;
      width: 250px;
      height: 100%;
    }
    .discover-heading {
      grid-column: 2/4;
      grid-row: 1/2;
    }
    h3 {
      margin-top: 0;
    }
    .subtitle {
      color: $seagreen;
      letter-spacing: 0.25em;
      font-weight: bold;
    }
    p {
      grid-row: 2/3;
      grid-column: 2/3;
    }
    p + p {
      grid-column: 3/4;
    }
  }
  .animal-stats {
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    .illustration {
      height: 100%;
      width: 240px;
      margin-bottom: 80px;
      img {
        height: 100%;
        width: 100%;
        margin-left: -40px;
      }
    }
    .stats {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .numbers {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
