<template>
  <div class="roadtrip">
    <!-- <vue-headful
      :title="blog.seo_title"
      :description="blog.seo_description"
      :image="blog.seo_image"
      :url="'/blog' + blog.uid"
    /> -->
    <MenuSlide />
    <template v-for="(slice, index) in slices">
      <header v-if="slice.slice_type === 'full_photo_header'" :key="'slice-' + index">
        <prismic-image :field="slice.primary.header_image" class="cover" />
        <h1 class="header-title animate">
          {{ slice.primary.title[0].text
          }}<span class="header-subtitle animate">{{ slice.primary.subtitle[0].text }}</span>
        </h1>
      </header>
    </template>

    <div class="content">
      <template v-for="(slice, index) in slices">
        <section v-if="slice.slice_type === 'text_and_image'" class="overlap-grid top" :key="'slice-' + index">
          <div class="card-text animate">
            <div class="text-container">
              <h2>{{ slice.primary.title[0].text }}</h2>
              <prismic-rich-text :field="slice.primary.text_content" />
            </div>
          </div>
          <div class="photo horizontal animate">
            <prismic-image :field="slice.primary.image" />
          </div>
        </section>
      </template>

      <section class="story">
        <img class="initial" src="../assets/PInitial.png" alt="Capital Letter P for Pounamu" />
        <div class="discover-heading">
          <h2>Pounamu</h2>
          <span class="subtitle">The Legend of green stone</span>
        </div>
        <p>
          Poutini, the guardian of Pounamu and a taniwha (a giant water being), snatched a beautiful Māori woman,
          Waitaiki, from the North Island. He brought her south but her husband Tamaahua, was a powerful chief and
          skilled in the rituals of the spirit world. When he realised that his wife had been taken he threw a magical
          dart in the air. The dart pointed in the direction of his wife. He followed in pursuit. The chase continued
          across Aotearoa (New Zealand). On the South Island close to the Arahura River he caught up with them and he
          readied himself for the encounter the next morning.
        </p>
        <p>
          Fearing Tamaahua's strength and determination, Poutini decided that if he could not have Waitaiki, no-one
          would. He transformed her into his likeness, Pounamu, and laid her in the cold waters of the river. Then he
          slipped downstream past the sleeping warrior. In the morning Tamaahua set out to battle but instead found his
          wife lifeless in the river. Realising what had happened he went back home, grieving. It's said his tangi (song
          of grief) still sounds throughout the mountains. The jade fragments that break off and roll down the river to
          the sea are known as Waitaiki’s children.
        </p>
      </section>
      <section class="animal-stats">
        <div class="illustration">
          <img src="../assets/Weka.png" alt="Weka bird" />
          <h2 class="large">Encounters</h2>
        </div>
        <div class="stats">
          <div class="numbers">
            <h2 class="digit">05</h2>
            <span class="subtitle">Bird species</span>
            <hr />
            <span>Piwakawaka, Kea, and many more heard but not seen</span>
          </div>
          <div class="numbers">
            <h2 class="digit">01</h2>
            <span class="subtitle">Mammal</span>
            <hr />
            <span>Accidentally woke up this sleepy seal</span>
          </div>
          <div class="numbers">
            <h2 class="digit">06</h2>
            <span class="subtitle">Mushrooms</span>
            <hr />
            <span>So many different colors and species</span>
          </div>
        </div>
      </section>
      <section class="overlap-grid">
        <div class="card-text animate">
          <div class="text-container">
            <h2>Staying in a Yurt!</h2>
            <p>
              For our whole stay we slept in a yurt, a big round permanent tent. It had plastic windows with an amazing
              view and our kitchen and bathroom were in a different building close by.
            </p>
            <p>
              The yurt was made of black fabric on the outside which made it heat up by the sun in winter. Without the
              sun there was a spaceheater which struggled to heat up the whole yurt if it was cold.
            </p>
            <p>
              The yurt was very spacious and comfortable, but the best part of it was definitely the view! Right outside
              was a grass field and then cliffside and the ocean. Every morning waking up to the sound of waves crashing
              into the West Coast.
            </p>
            <p>
              A small drive away from the yurt was a lighthouse where we started a hike on our last day here. The
              lighthouse was inaccessible but close by was an unmaintained track. Sounding like adventure, we of course
              took that route down to the sea level.
            </p>
          </div>
        </div>
        <div class="photo horizontal animate">
          <VueSlickCarousel :dots="true" :autoplay="false">
            <div class="carrousel-img"><img src="../assets/Westport21Yurt2.jpg" /></div>
            <div class="carrousel-img"><img src="../assets/Westport21Yurt3.jpg" /></div>
            <div class="video-container">
              <video controls>
                <source src="../assets/Westport21Yurt.mp4" type="video/mp4" />
                Sorry your browser doesn't support embedded videos.
              </video>
            </div>
            <div class="carrousel-img"><img src="../assets/Westport21Yurt4.jpg" /></div>
            <div class="carrousel-img"><img src="../assets/Westport21Yurt5.jpg" /></div>
            <div class="carrousel-img"><img src="../assets/Westport21Yurt6.jpg" /></div>
            <template v-slot:prevArrow>
              <button class="custom-button"><i class="fas fa-chevron-left"></i></button>
            </template>
            <template v-slot:nextArrow>
              <button class="custom-button"><i class="fas fa-chevron-right"></i></button>
            </template>
          </VueSlickCarousel>
        </div>
      </section>
    </div>

    <!-- <div class="content" :class="showTutorial ? 'blur' : ''">
        <h1 class="title">{{ blog.title[0].text }}</h1>
        <img src="../assets/Dashdecoright.png" alt="decoration scribbly" class="deco" />
        <p class="author">by Claudia Engelsman</p>
        <prismic-rich-text :field="blog.subtitle" class="subtitle dent-right" />
        <section v-for="(slice, index) in slices" :key="'slice-' + index" class="dent-right">
          <template v-if="slice.slice_type === 'blog_text_block'">
            <h2 class="heading">{{ slice.primary.section_title[0].text }}</h2>
            <prismic-rich-text :field="slice.primary.section_text" class="text" />
          </template>
          <template v-else-if="slice.slice_type === 'blog_text_block_continued'">
            <prismic-rich-text :field="slice.primary.section_text" class="text" />
          </template>
          <template v-else-if="slice.slice_type === 'image_with_caption'">
            <prismic-image :field="slice.primary.image" class="blog-image" />
            <prismic-rich-text :field="slice.primary.image_description" class="caption" />
          </template>
          <template v-else-if="slice.slice_type === 'text_with_custom_link'">
            <p>
              {{ slice.primary.text[0].text }}
              <span @click="openTutorial(slice.primary.tutorial_uid[0].text)" class="tutorial-link">
                {{ slice.primary.link[0].text }}
              </span>
              {{ slice.primary.text_continued[0].text }}
            </p>
          </template>
        </section>
        <section class="cta">
          <router-link to="/blog"> {{ "<<" }} Back to blog overview</router-link>
          <router-link :to="'/blog/' + relatedPostId"> {{ relatedPostTitle }} {{ ">>" }} </router-link>
        </section>
      </div> -->
    <!-- <AsideBlog v-if="!contentLoading" :labels="blog.labels" :blogID="blog.prismicID" class="blog-bar" /> -->
  </div>
</template>

<script>
  // @ is an alias to /src
  import MenuSlide from "@/components/MenuSlide.vue";
  import VueSlickCarousel from "vue-slick-carousel";
  import "vue-slick-carousel/dist/vue-slick-carousel.css";
  import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

  export default {
    name: "Roadtrip",
    data() {
      return {
        roadtrip: {
          labels: [],
          prismicID: "",
          uid: "",
          seo_title: "",
          seo_description: "",
          seo_image: "",
        },
        slices: [],
        contentLoading: true,
        // relatedPostTitle: "",
        // relatedPostId: "",
        currentUrl: window.location.href,
      };
    },
    components: {
      MenuSlide,
      VueSlickCarousel,
    },
    computed: {
      notAlreadyInUrl: function() {
        return !this.currentUrl.includes(this.$route.params.tutid);
      },
    },
    methods: {
      getContent(uid) {
        this.$prismic.client.getByUID("roadtrip", uid).then((document) => {
          console.log("roadtrip document.data", document.data.body);
          // this.roadtrip.labels = document.tags;
          // this.roadtrip.seo_title = document.data.seo_title[0].text;
          // this.roadtrip.seo_description = document.data.seo_description[0].text;
          // this.roadtrip.seo_image = document.data.seo_image.url;
          this.slices = document.data.body;
          this.roadtrip.prismicID = document.id;
          this.contentLoading = false;
          // this.getRelatedContent(document.id);
        });
      },
      // getRelatedContent(prismicId) {
      //   this.$prismic.client
      //     .query(this.$prismic.Predicates.similar(prismicId, 10), { orderings: "[my.blog_post.date desc]" })
      //     .then((response) => {
      //       this.relatedPostTitle = response.results[0].data.title[0].text;
      //       this.relatedPostId = response.results[0].uid;
      //     });
      // },
    },
    created() {
      this.getContent(this.$route.params.uid);
      this.roadtrip.uid = this.$route.params.uid;
    },
    beforeRouteUpdate(to, from, next) {
      this.getContent(to.params.uid);
      next();
    },
  };
</script>
<style lang="scss" scoped>
  @import "../assets/_variables.scss";

  .roadtrip {
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
    &.large {
      font-size: 80px;
      z-index: 10;
      line-height: 120px;
    }
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
    &.top {
      margin-top: unset;
    }
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
  .subtitle {
    color: $seagreen;
    letter-spacing: 0.15em;
    font-weight: bold;
    text-transform: uppercase;
  }
  .story {
    max-width: 1400px;
    display: grid;
    grid-template-columns: 1fr 33% 33%;
    grid-template-rows: 100px 270px;
    grid-column-gap: 80px;
    text-align: left;
    .initial {
      grid-column: 1/2;
      grid-row: 1/3;
      width: auto;
      height: 100%;
    }
    .discover-heading {
      grid-column: 2/4;
      grid-row: 1/2;
    }
    h3 {
      margin-top: 0;
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
      height: 360px;
      width: 100%;
      margin-bottom: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      img {
        height: 240px;
        width: 240px;
        margin-left: -30px;
        opacity: 0.5;
        position: absolute;
        top: 160px;
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
      max-width: 180px;
      .digit {
        font-size: 80px;
        line-height: 80px;
        margin-bottom: 20px;
      }
      .subtitle {
        font-size: 14px;
      }
      hr {
        width: 40px;
        margin: 12px 0;
      }
      span {
        text-align: center;
        font-size: 14px;
        line-height: 21px;
      }
    }
  }
  .custom-button {
    font-size: 20px;
    line-height: 20px;
    position: absolute;
    top: 50%;
    display: block;
    width: 40px;
    height: 40%;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    cursor: pointer;
    color: $snowwhite;
    border: none;
    outline: none;
    background: transparent;
    transition: 0.3s;
    &::before {
      content: "";
    }
    &:hover {
      background: $forestblack;
    }
  }
  .carrousel-img {
    height: 630px;
    width: 100%;
    object-fit: cover;
  }
  .video-container {
    height: 630px;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      margin: auto;
    }
  }
</style>
