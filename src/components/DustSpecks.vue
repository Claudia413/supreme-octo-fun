<script>
export default {
  name: 'DustSpecks',
  data() {
    return {}
  },
  props: {
    horizontal: Boolean
  }
}
</script>

<template>
  <div class="speck-container">
    <div v-for="index in 5" class="speck" :class="horizontal ? 'horizontal' : ''" :key="index">
      <div class="inner-speck"></div>
    </div>
  </div>
</template>

<style lang="scss">
.speck-container {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
}

.speck {
  --size: min(0.5vw, 5px);
  width: var(--size);
  height: var(--size);
  background: rgb(252, 246, 226);
  border-radius: 50%;
  position: absolute;
  top: -5vh;
  z-index: 100;
  display: flex;
}

.inner-speck {
  --size-inner: 50%;
  width: var(--size-inner);
  height: var(--size-inner);
  border-radius: 50%;
  margin: auto;
}

@keyframes speckle {
  0% {
    transform: translate3d(var(--left-ini), 0, 0);
  }
  100% {
    transform: translate3d(var(--left-end), 110vh, 0);
  }
}

@keyframes speckle-horizontal {
  0% {
    transform: translate3d(110vw, var(--left-ini), 0);
  }
  100% {
    transform: translate3d(0, var(--left-end), 0);
  }
}

@keyframes flicker {
  0% {
    opacity: min(calc(1 - (random(6) / 10)), 0.4);
  }
  100% {
    opacity: 1;
  }
}

@for $i from 1 through 5 {
  .speck:nth-child(#{$i}) {
    --size: #{random(10) * 0.1}vw;
    --left-ini: #{random(20) - 10}vw;
    --left-end: #{random(50) - 10}vw;
    left: #{random(100)}vw;
    animation: speckle #{20 + random(10)}s ease-in infinite;
    animation-delay: -#{random(10)}s;
    opacity: 0.7;
    pointer-events: none;
    filter: blur(1px);
    &.horizontal {
      --left-ini: #{calc(100 - random(30))}vw;
      --left-end: 0;
      animation: speckle-horizontal #{15 + random(10)}s ease-out infinite;
    }
    .inner-speck {
      --size-inner: #{max(random(10) * 10, 50)}%;
      background-color: rgb(243, 199, 117);
      filter: blur(1px);
      animation: flicker 0.8s alternate infinite;
      animation-delay: -#{1 - (calc(random(5) / 10))}s;
    }
  }
}

/* added extra blur every 2 specks*/
.speck:nth-child(2n) {
  filter: blur(2px);
  opacity: 0.4;
}
</style>
