<template>
  <section :id="id">
    <div class="art-text">
      <slot name="text-content"></slot>
      <div class="icon-group">
        <slot name="icons"></slot>
      </div>
    </div>
    <div class="art-visual">
      <slot name="visual"><img src="../assets/Insta-Waterfall.jpg"/></slot>
    </div>
  </section>
</template>

<script>
  export default {
    name: "story-with-graphs",
    data() {
      return {
        hover: false,
      };
    },
    props: {
      id: {
        type: String,
        required: false,
      },
    },
    components: {},
    methods: {},
    computed: {},
    created() {},
  };
</script>

<style lang="scss" scoped>
  @import "../assets/_variables.scss";

  article {
    display: flex;
    flex-direction: row-reverse;
    border: 1px solid $snowwhite;
    max-height: 500px;
    margin: 40px 0;
    .art-visual {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .art-text {
      padding: 40px;
      max-width: 40%;
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .icon-group {
      display: flex;
      justify-content: space-evenly;
      margin-top: auto;
      padding: 20px;
    }
    .mapcontainer {
      height: 140px;
      width: 120px;
      overflow: hidden;
      position: absolute;
      top: 20px;
      right: 20px;
    }
    &:hover {
      .fa-map-pin {
        display: block;
        font-size: 12px;
        color: $saffron;
        opacity: 1;
        transition: all 0.75s ease-in-out;
        &#cape-foul-wind-pin {
          top: 48px;
          right: 69px;
        }
        &#kaikoura-pin {
          top: 48px;
          right: 25px;
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
  .link {
    cursor: pointer;
    .arrow-animation {
      padding-left: 10px;
      position: relative;
      top: 3px;
      fill: $snowwhite;
      transition: fill 0.3s;
    }
    &:hover {
      .arrow-animation {
        fill: $saffron;
        transition: fill 0.3s;
        animation: point-right 0.4s alternate infinite ease-in;
      }
    }
  }
  .tagline {
    color: $saffron;
    margin-top: -4px;
    text-transform: uppercase;
    font-size: 12px;
  }
  @keyframes point-right {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(20px);
    }
  }
</style>
