<script>
export default {
  name: 'PhotogridPhoto',
  props: { img: String },
  data() {
    return {
      randomRotation: Math.floor(Math.random() * 41) - 20, // Generate a random rotation value (-20 to +20 degrees)
      randomNudge: Math.floor(Math.random() * 61) - 20, // Random nudge value between -20 and +40 pixels
      randomNudgeRight: Math.floor(Math.random() * 61) - 20 // Random nudge value between -20 and +40 pixels
    }
  },
  components: {},
  methods: {}
}
</script>

<template>
  <img
    class="photo"
    :src="img"
    :style="{
      '--rotation': randomRotation + 'deg',
      '--nudge': randomNudge + 'px',
      '--nudgeright': randomNudgeRight + 'px'
    }"
  />
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/_variables.scss';

.photo {
  height: auto;
  width: 100%;
  background: white;
  border: 3px white solid;
  object-fit: cover;
  transform: rotate(var(--rotation, 0deg));
  object-position: center;
  margin-top: var(--nudge, 0px);
  margin-left: var(--nudgeright, 0px);
}
</style>
