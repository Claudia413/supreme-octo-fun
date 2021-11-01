<template>
  <article :id="id" @mouseover="hover = true" @mouseenter="hover = true" @mouseleave="hover = false">
    <div class="art-text">
      <div class="mapcontainer">
        <slot name="map" v-bind:previewHover="hover"></slot>
      </div>
      <slot name="text-content"></slot>
      <div class="icon-group">
        <slot name="icons"></slot>
      </div>
    </div>
    <div class="art-visual">
      <slot name="visual"><img src="../../assets/Insta-Waterfall.jpg"/></slot>
    </div>
  </article>
</template>

<script>
  export default {
    name: "adventure-large-preview",
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
  @import "../../assets/_variables.scss";

  article {
    display: flex;
    flex-direction: row-reverse;
    border: 1px solid $platinum;
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
  .tagline {
    color: $saffron;
    margin-top: -4px;
    text-transform: uppercase;
    font-size: 12px;
  }
</style>
