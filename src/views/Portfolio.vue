<template>
  <div class="portfolio">
    <vue-headful
      title="CE | Developer, adventurer, artist"
      description="Showcase of favorite projects"
      image="../assets/ClaudiaBWKaikoura.jpg"
      url="https://www.claudiaengelsman.com/about"
    />
    <MenuSlide />
    <header>
      <img
        src="../assets/BlogHeaderNZ.png"
        alt="close-up of a fern plant in the shade"
        class="cover"
      />
      <div class="intro">
        <p>Welcome to my portfolio</p>
        <Typed :options="typeOptions">
          <h1>Projects I <span class="typing"></span></h1>
        </Typed>
      </div>
    </header>
    <img
      alt="Claudia Engelsman, developer who moved to New Zealand"
      src="../assets/ClaudiaBWKaikoura.jpg"
      class="intro-pic img-block"
    />
    <section class="intro-text text-block">
      <h3>Cool stuff I've build</h3>
      <p>
        Here you will find my favorite projects. Projects that are wonderful, interesting to built
        or for really cool people and companies.
      </p>
    </section>
    <img
      alt="Screenshot of the Tower Junction Physio website"
      src="../assets/TJPScreenshot.jpg"
      class="project-image project1 img-block"
    />
    <section class="project-text project1 text-block">
      <h3>Tower Junction Physio (Christchurch)</h3>
      <p>
        A specially designed website built with Vuejs to fit all their website needs. Content
        managed through Prismic.io and hosted on Netlify. Tower Junction Physio were such lovely
        people to work with and were really happy with the new website that is now mobile friendly
        to view and they can easily update it themselves.
      </p>
      <a
        class="portfolio-link"
        href="https://www.towerjunctionphysio.co.nz/"
        target="_blank"
        rel="noreferrer"
        >Visit Tower Junction Physio website</a
      >
    </section>
    <img
      alt="Screenshot of the Bikes and I website"
      src="../assets/TheBikesAndIScreenshot.jpg"
      class="project-image project2 img-block"
    />
    <section class="project-text project2 text-block">
      <h3>The Bikes and I</h3>
      <p>
        A blog built for a dear friend who is crazy about bikes and loves to share about all things
        bikes. The website was built with Vuejs and the content is managed through Prismic.io and
        hosted on Netlify. I did not design this website.
      </p>
      <a
        class="portfolio-link"
        href="https://www.thebikesandi.com/"
        target="_blank"
        rel="noreferrer"
        >Visit the Bikes and I website</a
      >
    </section>
  </div>
</template>

<script>
import MenuSlide from '@/components/MenuSlide.vue'
import { Typed } from '@duskmoon/vue3-typed-js'

export default {
  name: 'PortfolioPage',
  data() {
    return {
      typeOptions: {
        strings: ['am proud of', 'am excited to share', 'have learned a lot from'],
        backDelay: 250,
        backSpeed: 35,
        smartBackspace: true,
        loop: true,
        loopCount: 2,
        typeSpeed: 75
      }
    }
  },
  components: {
    MenuSlide,
    Typed
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

.portfolio {
  width: 100%;
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 300px repeat(2, 500px);
  grid-template-areas:
    'header header'
    'intro-pic intro-text'
    'project1text project1image'
    'project2image project2text'
    'outro outro';
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 300px auto;
    grid-template-areas:
      'header header'
      'intro-text intro-text'
      'project1image project1image'
      'project1text project1text'
      'project2image project2image'
      'project2text project2text';
  }
  .mt-2 {
    margin-top: 20px;
  }
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
    height: 300px;
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
      font-family: 'Karla', sans-serif;
      display: inline-block;
      text-align: center;
    }
    h2 {
      font-family: 'Spectral', sans-serif;
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

.intro-pic {
  grid-area: intro-pic;
  object-position: center;
  @media only screen and (max-width: 768px) {
    display: none;
  }
}
.intro-text {
  grid-area: intro-text;
}
.project-text {
  &.project1 {
    grid-area: project1text;
  }
  &.project2 {
    grid-area: project2text;
  }
}
.project-image {
  object-position: top left;
  &.project1 {
    grid-area: project1image;
  }
  &.project2 {
    grid-area: project2image;
  }
}
.portfolio-link {
  font-size: 14px;
  color: $light-blue;
}
</style>
