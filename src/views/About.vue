<template>
  <div class="about">
    <MenuSlide />
    <img
      alt="Claudia Engelsman, developer who will teach you how to code a website"
      src="../assets/ClaudiaBWKaikoura.jpg"
      class="intro-pic img-block"
    />
    <section class="intro-text text-block">
      <h3>Hello there!</h3>
      <p>
        This is the story of a business graduate who became a paid developer in just weeks. If you
        are curious about how I reinvented myself to become a developer, this is the place to be.
      </p>
    </section>
    <section class="full-block long-bio">
      <h3>My story</h3>
      <p>
        A few years ago I turned my life around and started over at age 26. I had just moved back in
        with my parents after a break-up when I realized how unfulfilling my current career path
        was. I wanted to become a developer and I quit my job without a new job or even a solid plan
        to get there. Uh-oh...
      </p>
      <p>
        I started reading about and trying out HTML and CSS online, going from one free resource to
        the next. There is so much information available, but not all is correct, up to date or even
        complete, I was lost and just went with everything I found. Fast forward a few weeks, a dash
        of luck and I got an interview with my first tech company. They took a huge chance on this
        honest and unexperienced girl and decided to hire me and teach me coding on the job. I felt
        like the stars aligned just for me and I was so excited to start.
      </p>
      <p class="highlight">
        Since then I’ve never been more frustrated with work problems and errors and such, but I
        also have never been happier when I do figure it out and a new feature is build for a
        website. It is such a thrill to create something out of thin air and help so many people
        with it.
      </p>
      <p>
        Since that start I've completed a coding bootcamp, learned a few more coding languages on
        the job, worked on different sized projects in different teams and switched jobs. We then
        moved to New Zealand in pursuit of more adventure and I've worked for a few companies here
        with a whole new work and life culture than I was used to.
      </p>
      <p>
        Now that I’m here, with all this experience I still remember I had such a hard and confusing
        time in the beginning of this journey. I didn't know anyone who emigrated, I didn't know
        anyone in New Zealand. So I decided to become that person. Write about our experience, to
        help someone in the same situation we were in. If there is one person I am helping today
        with this website, it is a good day.
      </p>
      <p>
        When I’m not creating or experimenting as a developer, you can find me outside on hikes or
        on the couch with some B&J ice cream with a good movie or book or dreaming up adventures in
        New Zealand. I also enjoy watercolor painting and creating art from time to time and I don’t
        make enough time for this. Hopefully one day I will master time-management and have enough
        time for all my (creative) interests and endeavours.
      </p>
    </section>
    <!-- <section class="video-block full-block"> -->
    <!-- insert video piece here -->
    <!-- </section> -->
    <TextSlider
      class="did-you-know"
      title="8 Things you didn't know about me"
      :numberOfSlides="8"
      background-color="bg-light"
      title-color="secondary-color"
      textColor="primary-color"
      number-color="grey"
    >
      <template v-slot:slide1
        >If you ask me to choose between my favorite icecream(B&J Cookie dough) and homemade pumpkin
        soup made by my boyfriend, I will have a huge dillema. Even with the apetite of a large
        dinosaur.</template
      >
      <template v-slot:slide2
        >During my trip to New Zealand a few years back I fell head over heels for this beautiful
        country and have been trying to find a way back ever since. We got our residency visa now,
        so this dream has come true!</template
      >
      <template v-slot:slide3
        >Horses have a special place in my heart, and I hope I can keep riding until I'm old and
        wrinkly!</template
      >
      <template v-slot:slide4
        >I am a geek and I love videogames, I can literally forget time when I am playing Dragon
        Age, Diablo or Pokemon.</template
      >
      <template v-slot:slide5
        >My favorite geometric shape is a hexagon, can’t get enough of it, even while it is hard to
        use in webdevelopment.</template
      >
      <template v-slot:slide6
        >I love our robot vacuum cleaner (appropiately named Dustin) and can't wait for more tech to
        automatically clean my house.</template
      >
      <template v-slot:slide7
        >I am a huge Harry Potter fan, books, movies, art, merch. Sorry, not sorry for my references
        on the blog.</template
      >
      <template v-slot:slide8
        >Coding is the closest I can get to magic, with coding I can create things from thin air,
        and give people a wonderfull experience.</template
      >
    </TextSlider>
  </div>
</template>

<script>
import MenuSlide from '@/components/MenuSlide.vue'
import TextSlider from '@/components/TextSlider.vue'
import { useHead } from 'unhead'

export default {
  components: {
    MenuSlide,
    TextSlider
  },
  mounted() {
    useHead({
      title: 'CE | Developer, adventurer',
      meta: [
        {
          name: 'description',
          content:
            'Claudia writes about coding websites for beginners and migrating to New Zealand. She wants to help more women into webdevelopment'
        },
        { name: 'image', content: '../assets/ClaudiaBWKaikoura.jpg' },
        { name: 'url', content: 'https://www.claudiaengelsman.com/about' }
      ]
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

.about {
  width: 100%;
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 500px auto;
  grid-template-areas:
    'intro-pic intro-text'
    'long-bio long-bio'
    'video-first video-first'
    'did-you-know did-you-know'
    'video-second video-second';
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: auto;
    grid-template-areas:
      'intro-pic intro-pic'
      'intro-text intro-text'
      'long-bio long-bio'
      'did-you-know did-you-know';
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
.long-bio {
  grid-area: long-bio;
  display: flex;
  flex-direction: column;
  padding: 80px;
  background-color: $dark-blue;
  text-align: center;
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
.did-you-know {
  grid-area: did-you-know;
}
</style>
