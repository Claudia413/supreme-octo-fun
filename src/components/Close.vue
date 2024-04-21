<script>
export default {
  name: 'Close',
  props: {
    dark: false
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<template>
  <div :class="this.dark ? 'close-icon dark' : 'close-icon'" @click="close">
    <v-icon name="md-close" scale="1"></v-icon>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/_variables.scss';

.close-icon {
  height: 1rem;
  width: 1rem;
  cursor: pointer;
  color: rgb(214, 214, 214);
  margin: 0.25rem;
  &.dark {
    color: #5a675d;
  }
}
</style>
