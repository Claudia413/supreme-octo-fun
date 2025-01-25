<script>
import { useHead } from 'unhead'
import ShinyImage from '@/components/ShinyImage.vue'
import SouthIsland from '../assets/icons/South-Island.vue'
import SET from '../assets/SETBlackBG.jpg'
import CalPlus from '../assets/CalendarPlusScreenShot.png'

export default {
  name: 'home',
  data() {
    return {
      loadingBlogs: true,
      blogpreviews: [],
      hover: false,
      SET,
      CalPlus
    }
  },
  components: {
    ShinyImage,
    SouthIsland
  },
  methods: {},
  mounted() {
    useHead({
      title: 'CE | Geek, developer, trier of things',
      meta: [
        {
          name: 'description',
          content:
            'Claudia is a webdeveloper who writes about (moving to) New Zealand and wants to make the world a more beautiful place through building websites and experiences.'
        },
        { name: 'image', content: '../assets/ClaudiaEngelsman.jpg' },
        { name: 'url', content: 'https://www.claudiaengelsman.com/' }
      ]
    })
  }
}
</script>

<template>
  <div class="home">
    <div class="menubar">
      <router-link to="/" class="button mt-2">Home</router-link>
      <!-- <router-link to="/about" class="button mt-2">About</router-link> -->
      <router-link to="/blog" class="button mt-2">Archived Blog (old style)</router-link>
    </div>
    <div class="content intro">
      <section class="intro-block text-block">
        <div class="intro-content">
          <img src="../assets/ClaudiaEngelsman.jpg" alt="Claudia Engelsman" class="intro-image" />
          <div>
            <h3>Hiya!</h3>
            <p class="text">
              I'm Claudia. I'm a webdeveloper in New Zealand. I moved here at the beginning of 2020,
              just before the world got weird. Here I share about projects I'm working on. Since
              this is my own little corner of the internet you might find some experiments and other
              fun stuff here too.
            </p>
            <p>Ps. This website design is still a work in progress as of January 2025</p>
          </div>
        </div>
      </section>
    </div>
    <aside class="aside-list-block">
      <section class="list-block text-block">
        <h2>Q1 2025</h2>
        <p>A brief overview of what I am up to</p>
        <div class="list-split">
          <h4>Professionally</h4>
          <ul>
            <li><span class="first">Learning: </span><span>Marketing</span></li>
            <li>
              <span class="first">Playing with: </span><span>CSS Grid and Container Queries</span>
            </li>
            <li><span class="first">Fav YT: </span><span>Kevin Powell</span></li>
            <li><span class="first">Wanting to try: </span><span>SendGrid API for texts</span></li>
          </ul>
          <h4>Personally</h4>
          <ul>
            <li>
              <span class="first">Dreaming of visiting: </span><span>Japan, Australia, Azores</span>
            </li>
            <li><span class="first">Playing: </span><span>Dragon Age: Veilguard</span></li>
            <li><span class="first">Trying: </span><span>Growing Dahlia's</span></li>
            <li><span class="first">Craving: </span><span>Nibbit Crisps</span></li>
            <li><span class="first">Rewatching: </span><span>Ally McBeal</span></li>
          </ul>
        </div>
        <!-- <div>
          <p>Things that are good right now:</p>
          <ul class="list">
            <li><p>Big fluffy Dahlia's in the garden</p></li>
            <li>
              <p>Long days and sunshine</p>
            </li>
            <li>
              <p>Waterfalls</p>
            </li>
          </ul>
        </div> -->
      </section>
    </aside>
    <div class="content work">
      <section class="text-block work">
        <h2>Work</h2>
        <p>
          These are the two businesses I founded with my husband and we are actively working on.
        </p>
        <div>
          <ul class="list">
            <li>
              <ShinyImage webUrl="https://www.automagical.work" :imageUrl="CalPlus"></ShinyImage
              ><a href="https://www.automagical.work"
                >Calendar Plus by<br />
                automagical.work</a
              >
            </li>
            <li>
              <ShinyImage
                webUrl="https://www.southernescapetours.co.nz"
                :imageUrl="SET"
              ></ShinyImage>
              <a href="https://www.southernescapetours.co.nz">Southern Escape Tours</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <aside class="aside-where">
      <section
        class="list-block text-block where"
        @mouseover="hover = true"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
      >
        <div>
          <h2>Where?</h2>
          <p>Christchurch, New Zealand</p>
        </div>
        <div class="stamp-border">
          <div class="mapcontainer">
            <SouthIsland
              state="canterbury"
              right="0px"
              top="0px"
              scale="3.5"
              transform-origin="88% 39%"
              transition="transform 0.8s ease-in-out"
              :hover="hover"
            />
            <i class="fas fa-map-pin" id="christchurch-pin"></i>
          </div>
        </div>
      </section>
    </aside>
    <div class="content projects">
      <section class="text-block projects">
        <h2>Projects</h2>
        <p>A few projects I have done over the years.</p>
        <div>
          <ul class="list">
            <li>
              <a href="https://www.towerjunctionphysio.co.nz/"
                >Physio website for company in Christchurch</a
              >
            </li>
            <li>
              <a href="https://thinkfirst.netlify.app/"
                >Weekdend project: Charles Bukowski inspired writing webapp</a
              >
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

.home {
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 100px auto;

  background-color: #edebf7;
  opacity: 1;
  background-image: radial-gradient(#324344 0.5px, #edebf7 0.5px);
  background-size: 18px 18px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  .mt-2 {
    margin-top: 20px;
  }
  h1 {
    opacity: 1;
  }
  h2 {
    color: $text-darkbg;
  }
}
.menubar {
  height: 80px;
  grid-column: 1 / 3;
  @media only screen and (max-width: 768px) {
    display: flex;
    grid-column: 1 / 2;
    .button {
      padding: 16px 0;
      display: flex;
      flex-grow: 1;
      text-align: center;
      justify-content: center;
      background-color: #2b2b2b;
    }
  }
}
.content {
  width: 80%;
  justify-self: center;
  &.intro {
    grid-row: auto / span 2;
  }
  &.work {
    grid-row: auto / span 3;
    height: fit-content;
    align-self: end;
  }
  &.projects {
    grid-row: auto / span 2;
    grid-column: 1 / 2;
  }
  @media only screen and (max-width: 768px) {
    &.intro {
      grid-row: auto;
      grid-column: 1 / 2;
    }
    &.work {
      grid-row: auto;
      grid-column: 1 / 2;
    }
    &.projects {
      grid-row: auto;
      grid-column: 1 / 2;
    }
  }
}
.intro-block {
  border-radius: 18px;
  background-color: $saffron;
  container-type: inline-size;
  container-name: blockwithimage;
  max-width: 800px;
}

.intro-content {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

.intro-image {
  height: 180px;
  width: 160px;
  object-fit: cover;
  border: white 4px solid;
  margin-left: 40px;
  display: flex;
  align-self: center;
}

@container blockwithimage (max-width: 600px) {
  .intro-image {
    margin-left: 20px;
    width: 120px;
    height: 120px;
  }
}
@container blockwithimage (max-width: 480px) {
  .intro-content {
    display: block;
  }
  .intro-image {
    width: 120px;
    height: 120px;
    float: right;
    shape-outside: margin-box;
  }
}
@container blockwithimage (max-width: 190px) {
  .intro-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .intro-image {
    width: 120px;
    height: 120px;
    margin: 0;
    margin-bottom: 10px;
  }
}

.work {
  background-color: #595959;
  border-radius: 18px;
  color: $platinum;
  p {
    color: $platinum;
  }
  .list {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin-block-start: 0;
    margin-inline-start: 0;
    padding-inline-start: 0;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
.aside-list-block {
  grid-row: auto / span 3;
  justify-self: center;
  @media only screen and (max-width: 1155px) {
    grid-row: 2 / span 4;
    grid-column: 2 / 3;
  }
  @media only screen and (max-width: 768px) {
    grid-column: 1 / 2;
    grid-row: auto;
  }
}
.list-block {
  border-radius: 18px;
  background-color: #e5bbfe;
  max-width: 460px;
  h2 {
    color: $forestblack;
  }
  .list-split {
    ul {
      list-style: none;
      margin-inline-start: 0;
      padding-inline-start: 0;
      width: 100%;
      li {
        margin-bottom: 4px;
        display: flex;
        width: 100%;
        .first {
          font-weight: 600;
          width: 40%;
          text-align: right;
          margin-right: 1ch;
          flex-shrink: 0;
        }
        span {
          flex-shrink: 20;
        }
      }
    }
    h4 {
      text-align: center;
    }
  }
  .list {
    list-style: none;
    margin-inline-start: 0;
    padding-inline-start: 1rem;
    li {
      font-weight: 600;
      p {
        margin: 0;
      }
    }
  }
}
.aside-where {
  display: flex;
  height: fit-content;
  justify-content: center;
  grid-row: 5 / span 1;
  grid-column: 2 / 3;
  container-type: inline-size;
  container-name: asidewhere;
  .text-block {
    text-align: left;
  }
  @media only screen and (max-width: 1155px) {
    grid-column: 2 / 3;
    grid-row: 6;
  }
  @media only screen and (max-width: 768px) {
    grid-column: 1 / 2;
    grid-row: auto;
  }
  @container asidewhere (max-width: 300px) {
    .where {
      display: flex;
      flex-direction: column;
    }
    .stamp-border {
      max-width: 144px;
    }
  }
}
.where {
  display: flex;
  justify-content: space-between;
  background-color: #d4edbf;
  width: 80%;
  &:hover {
    .fa-map-pin {
      display: block;
      font-size: 12px;
      color: $coral;
      opacity: 1;
      transition: all 0.75s ease-in-out;
      &#christchurch-pin {
        top: 65px;
        right: 54px;
      }
    }
  }
}
.fa-map-pin {
  opacity: 0;
  position: absolute;
  top: -100px;
  right: 50%;
  transition: all 0.2s ease-in-out;
}

.mapcontainer {
  height: 140px;
  width: 120px;
  overflow: hidden;
  position: relative;
}

.stamp-border {
  /* Change this value to adjust the stamp perforation size: */
  --radius: 3px;

  background-image: radial-gradient(var(--radius), transparent 98%, white),
    linear-gradient(white 0 0);
  background-repeat: round, no-repeat;
  background-position:
    calc(var(--radius) * -1.5) calc(var(--radius) * -1.5),
    50%;
  background-size:
    calc(var(--radius) * 3) calc(var(--radius) * 3),
    calc(100% - var(--radius) * 3) calc(100% - var(--radius) * 3);
  padding: 12px;
}
</style>
