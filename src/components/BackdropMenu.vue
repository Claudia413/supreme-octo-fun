<script>
export default {
  name: 'BackdropMenu',
  data() {
    return {}
  },
  components: {},
  methods: {
    backdropClick(e) {
      if (e.target !== this.$refs.backdrop) {
        // do nothing if clicking in a child element
      } else {
        this.$emit('backdropMenuClick')
      }
    }
  }
}
</script>

<template>
  <div class="backdrop" @click="backdropClick" ref="backdrop">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/_variables.scss';

.backdrop {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba($color: #252525, $alpha: 0.2);
  z-index: 100;
}
</style>
