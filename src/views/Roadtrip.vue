<template>
  <div class="roadtrip">
    <vue-headful
      :title="blog.seo_title"
      :description="blog.seo_description"
      :image="blog.seo_image"
      :url="'/adventures/' + blog.uid"
    />
    <MenuSlide />

    <header v-if="roadtrip.header.primary">
      <prismic-image :field="roadtrip.header.primary.header_image" class="cover" />
      <h1 class="header-title animate">
        {{ roadtrip.header.primary.title[0].text
        }}<span class="header-subtitle animate">{{ roadtrip.header.primary.subtitle[0].text }}</span>
      </h1>
    </header>

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

        <section v-if="slice.slice_type === 'image_and_2col_text'" class="story" :key="'slice-' + index">
          <prismic-image :field="slice.primary.image" class="initial" />
          <div class="discover-heading">
            <h2>{{ slice.primary.title[0].text }}</h2>
            <span class="subtitle">{{ slice.primary.subtitle[0].text }}</span>
          </div>
          <p>{{ slice.primary.text_content[0].text }}</p>
          <p>{{ slice.primary.text_content[1].text }}</p>
        </section>

        <section v-if="slice.slice_type === 'stats'" :key="'slice-' + index" class="animal-stats">
          <div class="illustration">
            <prismic-image :field="slice.primary.image" class="initial" />
            <img src="../assets/Weka.png" alt="Weka bird" />
            <h2 class="large">{{ slice.primary.title[0].text }}</h2>
          </div>
          <div class="stats">
            <div v-for="(item, index) in slice.items" class="numbers" :key="'item-' + index">
              <h2 class="digit">{{ item.number[0].text }}</h2>
              <span class="subtitle">{{ item.subject[0].text }}</span>
              <hr />
              <span>{{ item.description[0].text }}</span>
            </div>
          </div>
        </section>

        <section v-if="slice.slice_type === 'text_and_carrousel'" :key="'slice-' + index" class="overlap-grid">
          <div class="card-text animate">
            <div class="text-container">
              <h2>{{ slice.primary.title[0].text }}</h2>
              <prismic-rich-text :field="slice.primary.text_content" />
            </div>
          </div>
          <div class="photo horizontal animate">
            <VueSlickCarousel :dots="true" :autoplay="false">
              <div v-for="(item, index) in slice.items" class="carrousel-img" :key="'item-' + index">
                <prismic-image v-if="item.image.url" :field="item.image" />
                <div v-if="item.video_url.url" class="video-container">
                  <iframe
                    width="100%"
                    height="100%"
                    :src="item.video_url.url"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <template v-slot:prevArrow>
                <button class="custom-button"><i class="fas fa-chevron-left"></i></button>
              </template>
              <template v-slot:nextArrow>
                <button class="custom-button"><i class="fas fa-chevron-right"></i></button>
              </template>
            </VueSlickCarousel>
          </div>
        </section>
      </template>
    </div>
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
          header: {},
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
          if (document.data.body[0].slice_type === "full_photo_header") {
            this.roadtrip.header = document.data.body[0];
          }

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
    div {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      margin: auto;
      iframe {
        height: 100% !important;
        width: 100% !important;
      }
    }
  }
</style>
