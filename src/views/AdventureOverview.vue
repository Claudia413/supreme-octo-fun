<template>
  <div class="overview">
    <vue-headful
      title="CE | Adventurer, Developer, Dreamer"
      description="Blog library with posts about Coding, Tech, New Zealand and emigration"
      image="../assets/ClaudiaByLaurenMcCormick2.jpg"
      url="https://www.claudiaengelsman.com/blog"
    />
    <MenuSlide />
    <header class="category">
        <img class="category-image" src="../assets/pic1.jpg" key="1" />
    </header>
    <section class="content">
        <h1>Adventures overview</h1>
        <article>
            <div class="adv-text">
                <SouthIsland state="westcoast"/>
                <h2>Cape Foul Wind</h2>
                <span class="tagline">West Coast</span>
                <p>4-Day adventure to the West Coast.</p>
                <p class="link">Staying in a yurt with views over the ocean, hiking the Old Ghost Road and the Charming Creek Walkway near Seddonville, visiting Punakaiki Pancake Rocks, spotting local wildlife such as Kea's and Seals. Cold rainforest, a sulfur spring, old mining towns, Westport and rummaging around on the beach.<Arrow class="arrow-animation"/></p>
                <div class="icon-group">
                    <Car />
                    <Footsteps />
                    <Binoculars />
                </div>
            </div>
            <div class="adv-promo">
                <img src="../assets/Insta-Waterfall.jpg"/>
            </div>
        </article>
        <article>
            <div class="adv-text">
                <h2>Kaikoura</h2>
                <span class="tagline">East Coast</span>
                <p>3-Day adventure to where the mountains meet the sea.</p>
                <p>Hiking up Mt Fyff, our Whale Watching tour, hiking the Kaikoura Peninsula, scouting for Dolphins, staying in an AirBnb, and many birds and Seals to see.</p>
                <div class="icon-group">
                    <Car />
                    <Footsteps />
                    <Leaf />
                </div>
            </div>
            <div class="adv-promo">
                <img src="../assets/Insta-Waterfall.jpg"/>
            </div>
        </article>
    </section>
  </div>
</template>

<script>
import MenuSlide from "@/components/MenuSlide.vue";
import Footsteps from "@/assets/icons/Footsteps.vue";
import Car from "@/assets/icons/Car.vue";
import Leaf from "@/assets/icons/Leaf.vue";
import Binoculars from "@/assets/icons/Binoculars.vue";
import Arrow from "@/assets/icons/Arrow.vue";
import SouthIsland from '../assets/icons/South-Island.vue';

export default {
  name: "adventure-overview",
  data() {
    return {};
  },
  components: {
    MenuSlide,
    Footsteps,
    Car,
    Leaf,
    Binoculars,
    Arrow,
    SouthIsland,
  },
  methods: {},
  computed: {},
  created() {},
};
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";

.overview {
  width: 100%;
  background-color: #03312E;
}
.category {
  display: flex;
  max-height: 400px;
  overflow: hidden;
  width: 100%;
  justify-content: center;
  align-items: center;
  .category-img {
    height: 400px;
    width: 80%;
    object-fit: cover;
    object-position: center;
  }
}
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 80px;
    max-width: 1400px;
    margin: auto;
}
h2, p {
    color: $snowwhite;
}
article{
    display: flex;
    flex-direction: row-reverse;
    border: 1px solid $snowwhite;
    max-height: 500px;
    margin: 40px 0;
    &:nth-child(odd) {
        flex-direction: row;
    }
    .adv-promo {
        img {
            width: 100%;
            max-height: 100%;
            object-fit: cover;
        }
    }
    .adv-text {
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
        transform: translateX(0px)
    }
    to {
        transform: translateX(20px)
    }
}

</style>
