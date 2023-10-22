<script>
export default {
  name: 'Backdrop',
  data() {
    return {}
  },
  components: {},
  methods: {
    backdropClick(e) {
      if (e.target !== this.$refs.backdrop) {
        // do nothing if clicking in a child element
      } else {
        this.$emit('backdropClick')
      }
    }
  }
}
</script>

<template>
  <Transition appear name="fade">
    <div class="backdrop" @click="backdropClick" ref="backdrop">
      <slot></slot>
    </div>
  </Transition>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/_variables.scss';

.backdrop {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba($color: #252525, $alpha: 0.8);
  z-index: 100;
  display: flex;
}

//fade animation below
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
  transition: opacity 0.3s ease;
}
</style>
