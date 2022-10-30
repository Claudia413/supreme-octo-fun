<template>
  <div class="portfolio">
    <vue-headful
      title="CE | Developer, adventurer, artist"
      description="Showcase of favorite projects"
      image="../assets/ClaudiaBWKaikoura.jpg"
      url="https://www.claudiaengelsman.com/about"
    />
    <MenuSlide />
    <img
      alt="Claudia Engelsman, developer who will teach you how to code a website"
      src="../assets/ClaudiaBWKaikoura.jpg"
      class="intro-pic img-block"
    />
    <section class="intro-text text-block">
      <h3>Cool stuff I've build</h3>
      <p>
        Here you will find my favorite projects. Projects that are wonderful, interesting to built or for really cool
        people and companies.
      </p>
    </section>
    <img
      alt="Claudia Engelsman, developer who will teach you how to code a website"
      src="../assets/ClaudiaBWKaikoura.jpg"
      class="project-image project1 img-block"
    />
    <section class="project-text project1 text-block">
      <h3>Hi there!</h3>
      <p>
        Here you will find my favorite projects. Projects that turned out wonderful, were interesting to built or for
        really cool people and companies.
      </p>
    </section>
  </div>
</template>

<script>
  import MenuSlide from "@/components/MenuSlide.vue";

  export default {
    name: "PortfolioPage",
    components: {
      MenuSlide,
    },
  };
</script>

<style lang="scss" scoped>
  @import "../assets/_variables.scss";

  .portfolio {
    width: 100%;
    display: grid;
    grid-gap: 0;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(3, 500px);
    grid-template-areas:
      "intro-pic intro-text"
      "project1text project1image"
      "outro outro";
    @media only screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 50%);
      grid-template-rows: auto;
      grid-template-areas:
        "intro-pic intro-pic"
        "intro-text intro-text"
        "project1image project1image"
        "project1text project1text"
        "outro outro";
    }
    .mt-2 {
      margin-top: 20px;
    }
  }
  .intro-pic {
    grid-area: intro-pic;
    object-position: center;
  }
  .intro-text {
    grid-area: intro-text;
  }
  .project-text {
    &.project1 {
      grid-area: project1text;
    }
  }
  .project-image {
    object-position: center;
    &.project1 {
      grid-area: project1image;
    }

    // display: flex;
    // flex-direction: column;
    // padding: 80px;
    // background-color: $dark-blue;
    // text-align: center;
    h3 {
      color: $light-blue;
    }
    p {
      color: $text-darkbg;
      width: 80%;
      max-width: 1400px;
      &.highlight {
        font-size: 18px;
        font-style: italic;
        color: $light-blue;
        padding: 12px 0;
        font-weight: 500;
      }
    }
    @media only screen and (max-width: 768px) {
      padding: 80px 40px;
    }
  }
</style>
