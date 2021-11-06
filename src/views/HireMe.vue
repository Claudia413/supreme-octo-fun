<template>
  <div class="hireme">
    <vue-headful
      title="CE | Developer, educator, adventurer"
      description="Claudia writes about coding websites and moving to New Zealand. She also helps small businesses with setting up their website as a freelancer."
      image="../assets/ClaudiaBWKaikoura.jpg"
      url="https://www.claudiaengelsman.com/workwithme"
    />
    <MenuSlide />
    <img
      alt="Claudia Engelsman, creating a place online for your business"
      src="../assets/ClaudiaPunakaikiSunset.jpg"
      class="intro-pic img-block"
    />
    <section class="intro-text text-block">
      <h3>Hi there!</h3>
      <p>
        Curious to find out what we can build together? As a developer and adventurer I can always create custom work,
        but just to give you an idea of what I can do I've listed some of my favorite ways to help you below.
      </p>
      <p>Warning: working with me may result in cool websites, laughter and sparkles</p>
    </section>
    <img
      alt="Close up of Claudia Engelsman"
      src="../assets/ClaudiaDunedinBeach.jpg"
      class="business-pic img-block narrow"
    />
    <section class="services text-block">
      <!-- <h3>How can I help you?</h3> -->
      <h4>Small businesses</h4>
      <p>Create a website for your business that:</p>
      <ul>
        <li>is responsive and looks good on mobile phones, tablets and desktops</li>
        <li>is optimized for search engines so your new website can be found and read by search engines</li>
        <li>
          you can maintain yourself if you like (I can also help with this if you don't want to maintain it yourself)
        </li>
        <li>
          is optimized for accessibility to ensure all your customers, even those with a disability can access the
          information they need
        </li>
        <li>links to your social media accounts</li>
        <li>is safe and technically sound and does not require much maintenance</li>
      </ul>
    </section>
    <img
      alt="Claudia Engelsman, creating a place online for your business"
      src="../assets/ClaudiaCastleHill.jpg"
      class="cause-pic img-block"
    />
    <section class="cause text-block">
      <h4>Code for a Cause</h4>
      <p>
        I believe in helping others and for that reason I have set up Code for a Cause. I will help non-profit
        organizations with their website for half a day per week for free. I will dedicate my skill and knowledge to
        build a new or rebuild an existing website in a new design for an organization fighting for a worthy cause. It
        may take a little longer than regular webdevelopment as it is just part-time, but it is for free, no strings
        attached.
      </p>
      <p>Currently I have only one opening for a non-profit left in my schedule so get in touch as soon as possible!</p>
    </section>
    <img
      alt="Claudia Engelsman, creating a place online for your business"
      src="../assets/ClaudiaDunedinDune.jpg"
      class="hire-pic img-block"
    />
    <section class="hire text-block">
      <h4>Hire me</h4>
      <p>
        For the right company I can be more than a project based freelancer, with the right company I'd love to commit
        and be an employee working with your team. Get in touch and let's grab a coffee/tea together!
      </p>
      <p>
        Some of my favorite skills are VueJs, Javascript, HTML5, CSS3. I also have experience with Prismic.io (API CMS),
        React, Gatsby, PHP (Laravel), Scrum and Holocracy, and a lot more abbreviations ;-)
      </p>
    </section>
    <img
      alt="Claudia Engelsman on a sand dune arms outstretched"
      src="../assets/ClaudiaDunedinDuneHappy.jpg"
      class="other-pic img-block"
    />
    <section class="other text-block">
      <h4>Other enquiries</h4>
      <p>
        Want to work together on something else? Just reach out, I love getting mail that's not a newsletter or spam so
        I'll be excited to hear from you!
      </p>
    </section>
  </div>
</template>

<script>
  import MenuSlide from "@/components/MenuSlide.vue";

  export default {
    components: {
      MenuSlide,
    },
  };
</script>

<style lang="scss" scoped>
  @import "../assets/_variables.scss";

  .hireme {
    width: 100%;
    display: grid;
    grid-gap: 0;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(5, 500px);
    grid-template-areas:
      "intro-pic intro-pic intro-text intro-text"
      "small-business small-business small-business business-pic"
      "cause-pic cause-pic cause cause"
      "hire hire hire-pic hire-pic"
      "other-pic other-pic other-pic other";
    @media only screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 50%);
      grid-template-rows: auto;
      grid-template-areas:
        "intro-pic intro-pic"
        "intro-text intro-text"
        "business-pic business-pic"
        "small-business small-business"
        "cause-pic cause-pic"
        "cause cause"
        "hire-pic hire-pic"
        "hire hire"
        "other-pic other-pic"
        "other other";
      img {
        max-height: 300px;
      }
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
  .business-pic {
    grid-area: business-pic;
  }
  .services {
    grid-area: small-business;
  }
  .cause-pic {
    grid-area: cause-pic;
    object-position: center 35%;
  }
  .cause {
    grid-area: cause;
  }
  .hire-pic {
    grid-area: hire-pic;
    object-position: center 35%;
  }
  .hire {
    grid-area: hire;
    background-color: $dark-blue;
  }
  .other-pic {
    grid-area: other-pic;
    object-position: center 65%;
  }
  .other {
    grid-area: other;
  }
  .services,
  .hire {
    display: flex;
    flex-direction: column;
    background-color: $dark-blue;
    text-align: justify;
    h3 {
      color: $text-darkbg;
      margin-bottom: 20px;
    }
    h4 {
      color: $light-blue;
      font-family: "Karla", sans-serif;
      text-transform: none;
      font-weight: 500;
      margin-bottom: 0;
    }
    p {
      color: $text-darkbg;
      max-width: 1400px;
    }
    ul {
      font-size: 14px;
      margin: 0;
      text-align: justify;
      @media only screen and (max-width: 768px) {
        padding-inline-start: 20px;
      }
    }
    li {
      color: $text-darkbg;
      list-style-type: circle;
      padding-block-start: 4px;
      padding-block-end: 4px;
      list-style-position: outside;
      @media only screen and (max-width: 768px) {
        font-size: 13px;
      }
    }
  }
</style>
