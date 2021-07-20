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
        <img class="category-image" src="../assets/GoldHeader.jpg" key="1" />
    </header>
    <section class="content">
        <h1>Adventures overview</h1>
        <AdventureLargePreview id="cape-foul-wind" class="article">
                <template v-slot:map="mapProps">
                    <SouthIsland state="westcoast" right="0px" top="0px" scale="3" transform-origin="75% 5%" transition="transform 0.5s ease-in-out" :hover="mapProps.previewHover" />
                    <i class="fas fa-map-pin" id="cape-foul-wind-pin"></i>
                </template>
                <template v-slot:text-content>
                    <h2>Cape Foul Wind</h2>
                    <span class="tagline">West Coast</span>
                    <p>4-Day adventure to the West Coast.</p>
                    <p class="link">Staying in a yurt with views over the ocean, hiking the Old Ghost Road and the Charming Creek Walkway near Seddonville, visiting Punakaiki Pancake Rocks, spotting local wildlife such as Kea's and Seals. Cold rainforest, a sulfur spring, old mining towns, Westport and rummaging around on the beach.<Arrow class="arrow-animation"/></p>
                </template>
                <template v-slot:icons>
                    <Car />
                    <Footsteps />
                    <Binoculars />
                </template>

            <template v-slot:visual>
                <img src="../assets/Insta-Waterfall.jpg"/>
            </template>
        </AdventureLargePreview>
        <AdventureLargePreview id="kaikoura-june21" class="article">
            <template v-slot:map="mapProps">
                    <SouthIsland state="canterbury" right="0px" top="0px" scale="3" transform-origin="95% 18%" transition="transform 0.5s ease-in-out" :hover="mapProps.previewHover" />
                <i class="fas fa-map-pin" id="kaikoura-pin"></i>
            </template>
            <template v-slot:text-content>
                <h2>Kaikoura</h2>
                <span class="tagline">East Coast</span>
                <p>3-Day adventure to where the mountains meet the sea.</p>
                <p class="link">Hiking up Mt Fyff, our Whale Watching tour, hiking the Kaikoura Peninsula, scouting for Dolphins, staying in an AirBnb, and many birds and Seals to see.<Arrow class="arrow-animation"/></p>
            </template>
               <template v-slot:icons>
                    <Car />
                    <Footsteps />
                    <Leaf />
                </template>
            <template v-slot:visual>
                <img src="../assets/ClaudiaDunedinDuneHappy.jpg"/>
            </template>
        </AdventureLargePreview>
        <div class="small-row">
        <AdventureSmallPreview>
            <template v-slot:text-content>
                <h2>Kaikoura</h2>
                <span class="tagline">East Coast</span>
                <p class="link">Hiking up Mt Fyff, our Whale Watching tour, hiking the Kaikoura Peninsula, scouting for Dolphins, staying in an AirBnb, and many birds and Seals to see.<Arrow class="arrow-animation"/></p>
            </template>
               <template v-slot:icons>
                    <Car />
                    <Footsteps />
                    <Leaf />
                </template>
            <template v-slot:visual>
                <img src="../assets/ClaudiaDunedinDuneHappy.jpg"/>
            </template>
        </AdventureSmallPreview>
        <AdventureSmallPreview>
            <template v-slot:text-content>
                <h2>Kaikoura</h2>
                <span class="tagline">East Coast</span>
                <p class="link">Hiking up Mt Fyff, our Whale Watching tour, hiking the Kaikoura Peninsula, scouting for Dolphins, staying in an AirBnb, and many birds and Seals to see.<Arrow class="arrow-animation"/></p>
            </template>
               <template v-slot:icons>
                    <Car />
                    <Footsteps />
                    <Leaf />
                </template>
            <template v-slot:visual>
                <img src="../assets/ClaudiaDunedinDuneHappy.jpg"/>
            </template>
        </AdventureSmallPreview>
        <AdventureSmallPreview>
            <template v-slot:text-content>
                <h2>Kaikoura</h2>
                <span class="tagline">East Coast</span>
                <p class="link">Hiking up Mt Fyff, our Whale Watching tour, hiking the Kaikoura Peninsula, scouting for Dolphins, staying in an AirBnb, and many birds and Seals to see.<Arrow class="arrow-animation"/></p>
            </template>
               <template v-slot:icons>
                    <Car />
                    <Footsteps />
                    <Leaf />
                </template>
            <template v-slot:visual>
                <img src="../assets/ClaudiaDunedinDuneHappy.jpg"/>
            </template>
        </AdventureSmallPreview>
        </div>
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
import AdventureLargePreview from '../components/AdventureLargePreview.vue';
import AdventureSmallPreview from '../components/AdventureSmallPreview.vue';

export default {
  name: "adventure-overview",
  data() {
    return {
    };
  },
  components: {
    MenuSlide,
    Footsteps,
    Car,
    Leaf,
    Binoculars,
    Arrow,
    SouthIsland,
    AdventureLargePreview,
    AdventureSmallPreview
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
  .category-image {
    height: 400px;
    width: 100%;
    object-fit: cover;
    object-position: bottom;
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
.article{
    &:nth-child(odd) {
        flex-direction: row;
    }
}
.small-row {
    display: flex;
    justify-content: space-between;
}
</style>
