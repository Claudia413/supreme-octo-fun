<template>
  <div class="home">
    <HeaderAnimation class="headeranimation"/>
    <img alt="Claudia Engelsman, developer who will teach you how to code a website" src="../assets/Claudia.jpg" class="intro-pic">
    <section class="intro-text">
      <h3>About</h3>
      <p>A business graduate turned developer. That is me, Claudia Engelsman. Switching from a job in purchasing to a developer job didn’t happen overnight, but I was earning a salary as a developer within a month of quitting and without any experience. I will help you to do the same by sharing everything I’ve learned, for free, and help you  find inspiration and stay motivated to start creating your own websites.</p>
      <button class="mt-2">More about me</button>
    </section>
    <Footer class="footer"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import HeaderAnimation from '@/components/HeaderAnimation.vue'

export default {
  name: 'home',
  components: {
    Footer,
    HeaderAnimation
  }
}
</script>

<style lang="scss" scoped>
.home {
  max-width: 100%;
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: auto 400px auto;
  grid-template-areas: "header header"
  "intro-pic intro-text"
  "footer footer";
  @media only screen and (max-width: 768px) {
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: auto;
  grid-template-areas: "header header"
  "intro-pic intro-pic"
  "intro-text intro-text"
  "footer footer";
  }
}
.headeranimation {
grid-area: header;
max-width: 100vw;
}
.intro-pic {
  grid-area: intro-pic;
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media only screen and (max-width: 768px) {
  height: 400px;
  max-width: 100vw;
  }
}
.intro-text {
  grid-area: intro-text;
  text-align: justify;
  padding: 40px;
}
.footer {
  grid-area: footer;
  max-width: 100vw;
}
.mt-2 {
  margin-top: 20px;
}

</style>

