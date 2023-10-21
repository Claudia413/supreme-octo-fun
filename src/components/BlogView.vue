<script>
import Backdrop from './Backdrop.vue'

export default {
  name: 'BlogView',
  data() {
    return {
      currentBlog: ''
    }
  },
  props: {
    spotlight: {}
  },
  components: {
    Backdrop
  },
  methods: {
    closeBlogView() {
      this.$emit('closeBlogView')
    }
  },
  mounted() {
    this.$refs.blogview.focus()
  }
}
</script>

<template>
  <Backdrop @backdropClick="closeBlogView">
    <Transition appear name="grow">
      <div class="blog-container" tabindex="-1" ref="blogview" @keyup.esc="closeBlogView">
        <div class="blog-content">
          <h2>Testing stuff here wieeeeejj</h2>
        </div>
      </div>
    </Transition>
  </Backdrop>
</template>

<style scoped lang="scss">
@import '../assets/_variables.scss';

.blog-container {
  background-color: rgb(248, 245, 237);
  background: radial-gradient(
    circle,
    rgb(255, 254, 249) 0%,
    rgb(247, 244, 237) 81%,
    rgb(235, 240, 237) 100%
  );
  height: 80%;
  width: 85%;
  margin: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 0;
  overflow-y: auto;
  @media only screen and (max-width: 768px) {
    width: 95%;
    height: 100%;
  }
}

.blog-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(46, 46, 46);
}

h2 {
  text-transform: capitalize;
}

//Grow animation below
.grow-move,
.grow-enter-active,
.grow-leave-active {
  transition: all 0.3s ease;
}

.grow-enter-from {
  opacity: 0.4;
  transform: scale(10%);
}
.grow-leave-to {
  opacity: 0;
  transform: scale(0%);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.grow-leave-active {
  position: absolute;
  transition: transform 0.3s ease;
}
</style>
