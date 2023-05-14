<template>
  <div class="home">
    <!-- <vue-headful
      title="CE | Adventurer, Developer, Dreamer"
      description="Claudia is a webdeveloper who writes about (moving to) New Zealand and wants to make the world a more beautiful place through building websites and art."
      image="../assets/ClaudiaByLaurenMcCormick2.jpg"
      url="https://www.claudiaengelsman.com/"
    /> -->
    <MenuSlide />
    <div class="welcome">
      <router-link :to="'/adventures'" class="choice">
        <span>⛰️</span>
        <h2>Adventures</h2>
      </router-link>
      <router-link :to="'/blog'" class="choice">
        <span>📖</span>
        <h2>Stories</h2>
        <span class="subtitle">(the old blog for now, new part coming soon)</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  import MenuSlide from "@/components/MenuSlide.vue";

  export default {
    name: "HomePage2",
    data() {
      return {};
    },
    components: {
      MenuSlide,
    },
    methods: {},
    created() {},
  };
</script>

<style lang="scss" scoped>
  @import "../assets/_variables.scss";

  .home {
    z-index: 100;
    width: 100%;
    max-width: 100%;
    height: 100vh;
    display: flex;
    background-color: $forestblack;
    @media only screen and (max-width: 768px) {
    }
    h1 {
      opacity: 1;
    }
    h2 {
      color: $text-darkbg;
    }
  }
  .welcome {
    display: flex;
    margin: auto;
  }
  .choice {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    .subtitle {
      color: $text-darkbg;
      font-size: 12px;
    }
  }
  .footer {
    grid-area: footer;
    max-width: 100vw;
  }
</style>
