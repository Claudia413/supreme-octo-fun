<script>
export default {
  name: 'PhotogridPhoto',
  props: { img: String },
  data() {
    return {
      randomRotation: Math.floor(Math.random() * 41) - 20, // Generate a random rotation value (-20 to +20 degrees)
      randomNudgeDown: Math.floor(Math.random() * 61) - 20, // Random nudge from top value between -20 and +40 pixels
      randomNudgeRight: Math.floor(Math.random() * 121) - 40 // Random nudge value between -40 and +80 pixels
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
      '--nudge': randomNudgeDown + 'px',
      '--nudgeright': randomNudgeRight + 'px'
    }"
  />
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/_variables.scss';

.photo {
  border: 4px white solid;
  max-width: 100%;
  max-height: 300px;
  cursor: pointer;
  transform: rotate(var(--rotation));
  margin-top: var(--nudge, 0px);
  margin-left: var(--nudgeright, 0px);
  @media only screen and (max-width: 768px) {
    max-height: 250px;
    transform: rotate(calc(var(--rotation) / 2));
    margin-top: calc(var(--nudge, 0px) / 2);
    margin-left: calc(var(--nudgeright, 0px) / 2);
  }
  @media only screen and (max-width: 490px) {
    max-height: 150px;
  }
}
</style>
