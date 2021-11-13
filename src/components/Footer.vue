<template>
  <footer>
    <section class="instafeed">
      <div class="instagram-intro">
        <p>
          Want to get to know me better? Let's hang out on Instagram, it has all the dirt on my dog, amazing pics from
          New Zealand and some silly selfies.
        </p>
      </div>
      <a href="https://www.instagram.com/p/BpMC6uWFZjl/" target="_blank" rel="noreferrer">
        <img
          src="../assets/Insta-ClaudiaOnARock.jpg"
          alt="Instagram photo of Claudia sitting on a rock in a river"
          loading="lazy"
        />
      </a>
      <a href="https://www.instagram.com/p/B8P9ledBA4l/" target="_blank" rel="noreferrer">
        <img
          src="../assets/Insta-ClaudiaInChristchurch.jpg"
          alt="Instagram photo of Claudia on a bench in a field of gold grass looking at the view"
          loading="lazy"
        />
      </a>
      <a href="https://www.instagram.com/p/B3bW_xdBGk9/" target="_blank" rel="noreferrer">
        <img
          src="../assets/Insta-ClaudiaAtLakePukaki.jpg"
          alt="Instagram photo of Claudia looking at Mount Cook on the edge of Lake Pukaki"
          loading="lazy"
        />
      </a>
      <a href="https://www.instagram.com/p/BtWhHvSnMMa/" target="_blank" rel="noreferrer">
        <img
          src="../assets/Insta-GuusGolden.jpg"
          alt="Instagram photo headshot of Guus, Claudia's Golden Retriever"
          loading="lazy"
        />
      </a>
      <a href="https://www.instagram.com/p/CCCezaXhBoW/" target="_blank" rel="noreferrer" class="show-med">
        <img
          src="../assets/Insta-ClaudiaAtPunakaiki.jpg"
          alt="Instagram photo of Claudia at Punakaiki Pancake Rocks at sunset"
          loading="lazy"
        />
      </a>
      <a href="https://www.instagram.com/p/B_Qqrpxpkf2/" target="_blank" rel="noreferrer" class="show-med">
        <img
          src="../assets/Insta-ClaudiaAtKaikouraWithShell.jpg"
          alt="Instagram photo of Claudia with a shell on the rocks at Kaikoura"
          loading="lazy"
        />
      </a>
      <a href="https://www.instagram.com/p/B98PlGuBULZ/" target="_blank" rel="noreferrer" class="show-med show-xxl">
        <img src="../assets/Insta-Waterfall.jpg" alt="Instagram photo of a watterfall" loading="lazy" />
      </a>
    </section>
    <section class="legal">
      <span>@ Claudia Engelsman Copyright {{ currentYear }}</span>
      <span>All rights reserved</span>
      <a href="mailto:claudiaengelsman@gmail.com">Get in touch <i class="far fa-envelope"></i></a>
      <!-- <span>Legal</span> -->
    </section>
  </footer>
</template>

<script>
  export default {
    name: "FooterComponent",
    props: {},
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../assets/_variables.scss";

  footer {
    color: white;
    background-color: #45484a;
    max-width: 100vw;
    max-width: 4000px;
    padding: 0;
    height: auto;
    .instafeed {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: repeat(2, auto);
      grid-template-areas:
        "instagram-intro  instagram-intro instagram-intro instagram-intro instagram-intro instagram-intro instagram-intro"
        "instagram-pic    instagram-pic   instagram-pic   instagram-pic instagram-pic    instagram-pic   instagram-pic";
      padding: 0;
      @media only screen and (max-width: 1200px) {
        grid-template-columns: repeat(6, 1fr);
      }
      @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
      }
      .instagram-intro {
        grid-area: instagram-intro;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0;
        padding: 20px;
        p {
          color: inherit;
          text-align: left;
          margin: 0;
          line-height: 18px;
          @media only screen and (max-width: 1280px) {
            font-size: 14px;
          }
          @media only screen and (max-width: 980px) {
            font-size: 11px;
            line-height: 15px;
          }
          @media only screen and (max-width: 768px) {
            text-align: center;
            font-size: 14px;
            line-height: 22px;
          }
        }
      }
      a {
        position: relative;
        margin: 0;
        height: 15vw;
        overflow: hidden;
        @media only screen and (max-width: 1200px) {
          &.show-xxl {
            display: none;
          }
        }
        @media only screen and (max-width: 768px) {
          height: 20vw;
          &.show-med {
            display: none;
          }
        }
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        &:hover {
          transform: scale(1.03);
          transition: all 0.4s ease;
        }
        @media only screen and (max-width: 768px) {
          width: 100%;
          height: auto;
        }
      }
    }
    .legal {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      span,
      a {
        border-right: 1px solid white;
        padding: 8px 16px;
        font-size: inherit;
        margin: 0;
      }
      a {
        border: none;
        .fa-envelope {
          font-size: 10px;
          margin: 0 4px;
        }
      }
      @media only screen and (max-width: 768px) {
        font-size: 10px;
        span,
        a {
          border-right: 1px solid white;
          padding: 2px 8px;
          font-size: inherit;
          margin: 0;
        }
        a {
          border: none;
          .fa-envelope {
            font-size: 8px;
          }
        }
      }
    }
  }
</style>
