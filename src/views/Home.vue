<template>
  <div class="home">
    <vue-headful
      title="CE | Developer, educator, adventurer"
      description="Claudia is a webdeveloper who writes about (moving to) New Zealand and wants to make the world a more beautiful place through building websites and art."
      image="../assets/ClaudiaByLaurenMcCormick2.jpg"
      url="https://www.claudiaengelsman.com/"
    />
    <HeaderAnimation class="headeranimation">
      <template v-slot:title>
        <h1>Claudia Engelsman</h1>
        <vue-typed-js
          :strings="['Developer', 'Mentor', 'Adventurer', 'Geek', 'Artist', 'Mermaid', 'Here to help you']"
          :loop="false"
          :typeSpeed="75"
          :backDelay="250"
          :backSpeed="35"
          :smartBackspace="true"
        >
          <h2><span class="typing"></span></h2>
        </vue-typed-js>
      </template>
    </HeaderAnimation>
    <MenuSlide />
    <img
      alt="Claudia Engelsman, developer who will help you build a website yourself"
      src="../assets/ClaudiaEngelsmanHike.jpg"
      class="try-it-pic img-block"
    />
    <section class="try-it-text text-block">
      <h3>The blog</h3>
      <!-- <p>Curious about building websites but don't know where to start? Have you already started but felt overwhelmed by all the information out there? Here is my guide with articles, explanations, and handy tips to get you further ahead.</p> -->
      <p>Read about New Zealand, the move there, emigrating, and a lot more.</p>
      <router-link to="/blog" class="button mt-2">To the blog</router-link>
    </section>
    <img
      alt="Claudia Engelsman, developer who will teach you how to code a website"
      src="../assets/ClaudiaByLaurenMcCormick2.jpg"
      class="intro-pic img-block"
    />
    <section class="intro-text text-block menu-padding">
      <h3>About</h3>
      <p>
        Hi, hi, I'm Claudia. I'm a webdeveloper in New Zealand. My boyfriend and I moved here at the beginning of 2020,
        just before the world got weird. Here I share about our move and projects I'm working on. For cool websites and
        moving to NZ, you're in the right place!
      </p>
      <router-link to="/about" class="button mt-2">More about me</router-link>
    </section>
    <!-- <TextSlider title="Now is the perfect time to get a website for your business:" :numberOfSlides="3">
			<template v-slot:slide1>
				<span class="bold">The whole world is online.</span> Since lockdown, everyone, everywhere is going online to find everything they need.
			</template>
			<template v-slot:slide2>With a website, your business is working while you're asleep or away.<span class="bold">Your website is always available</span> to answer the most basic questions your customers have.
			</template>
			<template v-slot:slide3>A website is an important extension of your brand. <span class="bold">a solid website will improve your credibility.</span>
			</template>
		</TextSlider> -->
    <!-- Blog previews from Prismic and empty squares while loading from Prismic -->
    <section class="full-block-row blog-highlight">
      <div v-if="loadingBlogs" class="blog-post">
        <div class="blog-pic placeholder"></div>
        <div class="blog-tag-text placeholder"></div>
      </div>
      <div v-if="loadingBlogs" class="blog-post">
        <div class="blog-pic placeholder"></div>
        <div class="blog-tag-text placeholder"></div>
      </div>
      <div v-if="loadingBlogs" class="blog-post">
        <div class="blog-pic placeholder"></div>
        <div class="blog-tag-text placeholder"></div>
      </div>
      <div v-if="loadingBlogs" class="blog-post">
        <div class="blog-pic placeholder"></div>
        <div class="blog-tag-text placeholder"></div>
      </div>
      <BlogPreview
        v-else
        v-for="(post, index) in blogpreviews"
        :key="'post-' + index"
        :blogId="post.uid"
        class="blog-post"
        :image="post.data.blog_image"
        :title="post.data.title[0].text"
      />
    </section>
    <!-- <section class="freebie-text text-block">
      <h3>Let's stay in touch</h3>
      <p class="text-darkbg">
        Sign up to receive the latest blog updates in your inbox. And don't worry, I hate spam just as much as you do. I
        promise you will only get email once in a while and it will only have the really cool stuff!
      </p>
      <NewsletterSignUp />
    </section>
    <section class="bio-link-text text-block menu-padding">
      <h3>Hiya!</h3>
      <p>
        I’m Claudia Engelsman, an IT geek with a passion for creating, a love for New Zealand and a black hole instead
        of a stomach. My mission is to make the internet a more beautiful and user-friendly place. With a dash of magic.
      </p>
      <!-- <SocialIconBar></SocialIconBar> -->
    <!-- </section> -->
  </div>
</template>

<script>
  // @ is an alias to /src
  import HeaderAnimation from "@/components/HeaderAnimation.vue";
  import MenuSlide from "@/components/MenuSlide.vue";
  // import TextSlider from "@/components/TextSlider.vue";
  // import NewsletterSignUp from "@/components/NewsletterSignUp.vue";
  import BlogPreview from "@/components/BlogPreview.vue";

  export default {
    name: "home",
    data() {
      return {
        loadingBlogs: true,
        blogpreviews: [],
      };
    },
    components: {
      HeaderAnimation,
      MenuSlide,
      // TextSlider,
      // NewsletterSignUp,
      BlogPreview,
    },
    methods: {
      getContent() {
        this.$prismic.client
          .query(
            [
              this.$prismic.Predicates.at("document.type", "blogpost"),
              this.$prismic.Predicates.not("document.tags", ["TEST"]),
            ],
            {
              orderings: "[document.first_publication_date desc]",
              pageSize: 4,
              fetch: ["blogpost.title", "blogpost.blog_image"],
            }
          )
          .then((response) => {
            this.blogpreviews = response.results;
            this.loadingBlogs = false;
            // response is the response object, response.results holds the documents
          });
      },
    },
    created() {
      this.getContent();
    },
  };
</script>

<style lang="scss" scoped>
  @import "../assets/_variables.scss";

  .home {
    z-index: 100;
    width: 100%;
    max-width: 100%;
    height: calc(100% - 400px);
    display: grid;
    grid-gap: 0;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: auto 440px auto 400px auto auto;
    grid-template-areas:
      "header header"
      "try-it-text try-it-pic"
      "slider slider"
      "intro-pic intro-text"
      "blog-highlight blog-highlight"
      "freebie-text bio-link-text"
      "footer footer";
    @media only screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 50%);
      grid-template-rows: auto;
      grid-template-areas:
        "header header"
        "slider slider"
        "try-it-pic try-it-pic"
        "try-it-text try-it-text"
        "intro-pic intro-pic"
        "intro-text intro-text"
        "blog-highlight blog-highlight"
        "bio-link-text bio-link-text"
        "freebie-text freebie-text"
        "footer footer";
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
  .headeranimation {
    grid-area: header;
  }
  .intro-pic {
    grid-area: intro-pic;
    object-position: center;
  }
  .intro-text {
    grid-area: intro-text;
    line-height: 1.4rem;
    // @media only screen and (max-width: 1148px) {
    // 	line-height: 1.3rem;
    // }
  }
  .try-it-pic {
    grid-area: try-it-pic;
  }
  .try-it-text {
    grid-area: try-it-text;
  }
  .bold {
    font-weight: 600;
  }
  .home .blog-highlight {
    grid-area: blog-highlight;
    background-color: $background-color-grey;
    height: auto;
    padding: 40px;
    justify-content: space-evenly;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  .blog-post {
    display: flex;
    align-content: center;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    &:hover {
      .blog-tag-text {
        opacity: 0.95;
        transition: opacity 0.3s ease;
      }
    }
    .blog-tag-text {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      font-family: "Abel";
      text-transform: uppercase;
      font-weight: 600;
      font-size: 16px;
      max-width: 100%;
      margin: 24px;
      text-align: center;
      background-color: #fdfdfd;
      padding: 32px;
      opacity: 0.85;
      transition: opacity 0.3s ease;
    }
    .blog-pic {
      height: 240px;
      width: 220px;
      object-fit: cover;
    }
    @media only screen and (max-width: 1112px) {
      .blog-pic {
        height: 200px;
        width: 200px;
      }
    }
    @media only screen and (max-width: 768px) {
      margin-bottom: 32px;
      .blog-tag-text {
        margin: 32px;
      }
      .blog-pic {
        height: 320px;
        width: 340px;
      }
    }
  }
  .freebie-text {
    grid-area: freebie-text;
    background-color: $secondary-color;
    h3 {
      color: $light-blue;
    }
    @media only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .bio-link-text {
    grid-area: bio-link-text;
  }
  .footer {
    grid-area: footer;
    max-width: 100vw;
  }
</style>
