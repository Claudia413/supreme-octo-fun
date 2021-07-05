<template>
  <div class="overview">
    <vue-headful
      title="CE | Adventurer, Developer, Dreamer"
      description="Blog library with posts about Coding, Tech, New Zealand and emigration"
      image="../assets/ClaudiaByLaurenMcCormick2.jpg"
      url="https://www.claudiaengelsman.com/blog"
    />
    <MenuSlide />
    <section class="category carroussel">
      <div class="arrow" @click="incrementSlideIndex(-1)">
        <span class="fas fa-chevron-left"></span>
      </div>
      <div class="slider">
        <transition-group name="move" mode="out-in">
          <div key="hi">
            <img class="category-image" src="../assets/pic1.jpg" />
            <img class="category-image" src="../assets/pic2.jpg" />
            <img class="category-image" src="../assets/pic3.jpg" />
          </div>
        </transition-group>
      </div>
      <div class="arrow" @click="incrementSlideIndex(1)">
        <span class="fas fa-chevron-right"></span>
      </div>
    </section>
  </div>
</template>

<script>
import MenuSlide from "@/components/MenuSlide.vue";

export default {
  name: "adventure-overview",
  data() {
    return {};
  },
  components: {
    MenuSlide,
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
</style>
