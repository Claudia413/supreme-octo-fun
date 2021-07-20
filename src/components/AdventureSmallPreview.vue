<template>
    <article :id="id" @mouseover="hover=true" @mouseenter="hover=true" @mouseleave="hover=false">
        <div class="adv-text">
            <slot name="text-content"></slot>
        </div>
            <div class="icon-group">
                <slot name="icons"></slot>
            </div>
        <div class="adv-promo">
            <slot name="visual"><img src="../assets/Insta-Waterfall.jpg"/></slot>
        </div>
    </article>
</template>

<script>

export default {
  name: "adventure-small-preview",
  data() {
    return {
        hover: false
    };
  },
  props: {
      id: {
        type: String,
        required: false,
        },
  },
  components: {
  },
  methods: {},
  computed: {},
  created() {},
};
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";

article{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 120px 120px 1fr 2fr;
    grid-template-areas: "picture"
    "picture"
    "text"
    "text";
    border: 1px solid $snowwhite;
    max-height: 600px;
    margin: 40px 0;
    max-width: 30%;
    .adv-promo {
        grid-area: picture;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .adv-text {
        grid-area: text;
        padding: 40px;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .icon-group {
        grid-area: picture;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        margin-top: auto;
        padding: 20px;
        z-index: 10;
        background-color: rgba(37, 37, 37, 0.75);
        height: 100%;
        width: 80px;
        box-sizing: border-box;
        svg {
            width: 32px;
            height: 32px;
        }
    }
    // .mapcontainer {
    //     height: 140px;
    //     width: 120px;
    //     overflow: hidden;
    //     position: absolute;
    //     top: 20px;
    //     right: 20px;
    // }
    // &:hover {
        // .fa-map-pin {
        //     display: block;
        //     font-size: 12px;
        //     color: $saffron;
        //     opacity: 1;
        //     transition: all 0.75s ease-in-out;
        //     &#cape-foul-wind-pin{
        //         top: 48px;
        //         right: 69px;
        //     }
        //     &#kaikoura-pin{
        //         top: 48px;
        //         right: 25px;
        //     }
        // }
    // }
}
// .fa-map-pin {
//     opacity: 0;
//     position: absolute;
//     top: -100px;
//     right: 50%;
//     transition: all 0.2s ease-in-out;
// }
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
        transform: translateX(0px)
    }
    to {
        transform: translateX(20px)
    }
}

</style>
