<template>
  <div class="overview">
    <vue-headful
      title="CE | Adventurer, Developer, Dreamer"
      description="Blog library with posts about Coding, Tech, New Zealand and emigration"
      image="../assets/ClaudiaByLaurenMcCormick2.jpg"
      url="https://www.claudiaengelsman.com/adventures"
    />
    <MenuSlide />
    <header class="category">
      <img class="category-image" src="../assets/DunedinHeader.jpg" key="1" />
    </header>
    <div class="full-width-bg forest">
      <div class="border canopy" />
      <section class="content">
        <h1>Adventures overview</h1>
        <AdventureLargePreview id="cape-foul-wind" class="article">
          <template v-slot:map="mapProps">
            <SouthIsland
              state="westcoast"
              right="0px"
              top="0px"
              scale="3"
              transform-origin="75% 5%"
              transition="transform 0.5s ease-in-out"
              :hover="mapProps.previewHover"
            />
            <i class="fas fa-map-pin" id="cape-foul-wind-pin"></i>
          </template>
          <template v-slot:text-content>
            <h2>Cape Foul Wind</h2>
            <span class="tagline">West Coast</span>
            <p>4-Day adventure to the West Coast.</p>
            <router-link :to="'/adventures/westport21'" class="link">
              <p>
                Staying in a yurt with views over the ocean, hiking the Old Ghost Road and the Charming Creek Walkway
                near Seddonville, visiting Punakaiki Pancake Rocks, spotting local wildlife such as Kea's and Seals.
                Cold rainforest, a sulfur spring, old mining towns, Westport and rummaging around on the beach.<Arrow
                  class="arrow-animation"
                />
              </p>
            </router-link>
          </template>
          <template v-slot:icons>
            <Car />
            <Footsteps />
            <Binoculars />
          </template>

          <template v-slot:visual>
            <img src="../assets/WestCoastCover2.jpg" />
          </template>
        </AdventureLargePreview>
        <AdventureLargePreview id="kaikoura-june21" class="article">
          <template v-slot:map="mapProps">
            <SouthIsland
              state="canterbury"
              right="0px"
              top="0px"
              scale="3"
              transform-origin="95% 18%"
              transition="transform 0.5s ease-in-out"
              :hover="mapProps.previewHover"
            />
            <i class="fas fa-map-pin" id="kaikoura-pin"></i>
          </template>
          <template v-slot:text-content>
            <h2>Kaikoura</h2>
            <span class="tagline">East Coast</span>
            <p>3-Day adventure to Kaikoura.</p>
            <router-link :to="'/adventures/westport21'" class="link">
              <p>
                Hiking up Mt Fyffe, our Whale Watching tour, hiking the Kaikoura Peninsula, scouting for Dolphins,
                staying in an AirBnb, and many birds and Seals to see.<Arrow class="arrow-animation" />
              </p>
            </router-link>
          </template>
          <template v-slot:icons>
            <Car />
            <Footsteps />
            <Leaf />
          </template>
          <template v-slot:visual>
            <img src="../assets/KaikouraPeninsulaView.jpg" />
          </template>
        </AdventureLargePreview>
        <div class="small-row">
          <AdventureSmallPreview>
            <template v-slot:text-content>
              <h2>Kaikoura</h2>
              <span class="tagline">East Coast</span>
              <router-link :to="'/adventures/westport21'" class="link">
                <p>
                  Hiking up Mt Fyffe, our Whale Watching tour, hiking the Kaikoura Peninsula, scouting for Dolphins,
                  staying in an AirBnb, and many birds and Seals to see.<Arrow class="arrow-animation" />
                </p>
              </router-link>
            </template>
            <template v-slot:icons>
              <Car />
              <Footsteps />
              <Leaf />
            </template>
            <template v-slot:visual>
              <img src="../assets/ClaudiaDunedinDuneHappy.jpg" />
            </template>
          </AdventureSmallPreview>
          <AdventureSmallPreview>
            <template v-slot:text-content>
              <h2>Kaikoura</h2>
              <span class="tagline">East Coast</span>
              <router-link to="/adventures/westport21" class="link">
                <p>
                  Hiking up Mt Fyffe, our Whale Watching tour, hiking the Kaikoura Peninsula, scouting for Dolphins,
                  staying in an AirBnb, and many birds and Seals to see.<Arrow class="arrow-animation" />
                </p>
              </router-link>
            </template>
            <template v-slot:icons>
              <Car />
              <Footsteps />
              <Leaf />
            </template>
            <template v-slot:visual>
              <img src="../assets/ClaudiaDunedinDuneHappy.jpg" />
            </template>
          </AdventureSmallPreview>
          <AdventureSmallPreview>
            <template v-slot:text-content>
              <h2>Kaikoura</h2>
              <span class="tagline">East Coast</span>
              <router-link :to="'/adventures/westport21'" class="link">
                <p>
                  Hiking up Mt Fyffe, our Whale Watching tour, hiking the Kaikoura Peninsula, scouting for Dolphins,
                  staying in an AirBnb, and many birds and Seals to see.<Arrow class="arrow-animation" />
                </p>
              </router-link>
            </template>
            <template v-slot:icons>
              <Car />
              <Footsteps />
              <Leaf />
            </template>
            <template v-slot:visual>
              <img src="../assets/ClaudiaDunedinDuneHappy.jpg" />
            </template>
          </AdventureSmallPreview>
        </div>
      </section>
    </div>
    <div class="full-width-bg range">
      <div class="border mountains" />
      <footer></footer>
    </div>
  </div>
</template>

<script>
  import MenuSlide from "@/components/MenuSlide.vue";
  import Footsteps from "@/assets/icons/Footsteps.vue";
  import Car from "@/assets/icons/Car.vue";
  import Leaf from "@/assets/icons/Leaf.vue";
  import Binoculars from "@/assets/icons/Binoculars.vue";
  import Arrow from "@/assets/icons/Arrow.vue";
  import SouthIsland from "../assets/icons/South-Island.vue";
  import AdventureLargePreview from "../components/NewDesign/AdventureLargePreview.vue";
  import AdventureSmallPreview from "../components/NewDesign/AdventureSmallPreview.vue";

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
      AdventureLargePreview,
      AdventureSmallPreview,
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
  }
  .full-width-bg {
    &.forest {
      position: relative;
      top: 600px;
      background-color: $forestblack;
    }
    &.range {
      position: relative;
      bottom: -440px; // 600px from forest relative offset - 160 height of mountain border
    }
  }
  .category {
    display: flex;
    max-height: 600px;
    overflow: hidden;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: -2;
    .category-image {
      height: 600px;
      width: 100%;
      object-fit: cover;
      object-position: center 40%;
    }
  }
  .border {
    &.canopy {
      position: absolute;
      top: -260px; // almost same as height to have it line up with top of bg
      height: 270px;
      width: 100%;
      background-image: url("../assets/ForestBlackCanopy.png");
      background-repeat: repeat-x;
    }
    &.mountains {
      position: relative;
      top: 0;
      height: 160px;
      width: 100%;
      background-image: url("../assets/RockGreyMountainRange.png");
      background-repeat: repeat-x;
    }
  }
  .content {
    background-color: $forestblack;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 80px;
    max-width: 1400px;
    margin: auto;
  }
  h2,
  p {
    color: $platinum;
  }
  .article {
    &:nth-child(odd) {
      flex-direction: row;
    }
  }
  .small-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
  }
  a:hover {
    font-weight: normal;
    cursor: unset;
  }
  .link {
    p {
      cursor: pointer;
      &:hover {
        font-weight: normal;
      }
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
  }
  @keyframes point-right {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(20px);
    }
  }
  footer {
    background-color: $rockgrey;
    height: 300px;
    width: 100%;
  }
</style>
