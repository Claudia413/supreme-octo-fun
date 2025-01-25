<template>
  <section class="tutorial-field" v-on:scroll.native="handleScroll()">
    <div class="text-block">
      <slot :name="'step' + card"></slot>
    </div>
    <div class="imagery">
      <slot :name="'preview' + card"></slot>
      <slot :name="'code' + card" class="code"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TutorialField',
  props: {
    card: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/_variables.scss';

.tutorial-field {
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 700px;
  position: sticky;
  top: 0;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .text-block {
    background-color: $primary-color;
    color: $text-darkbg;
    p {
      max-width: 600px;
    }
  }
  p {
    color: $text-darkbg;
  }
}

.imagery {
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    flex-direction: row-reverse;
  }
  .split-block {
    height: 50%;
    overflow-y: auto;
    @media only screen and (max-width: 768px) {
      width: 50%;
      height: auto;
    }
  }
  .preview {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .code {
    background-color: $background-color-grey;
    padding: 8px;
    p {
      margin: 0;
      color: $text-darkbg;
    }
    p ~ p {
      margin-left: 16px;
    }
    p:last-child {
      margin-left: unset;
    }
    p.start {
      margin-left: unset;
    }
    .extra {
      margin-left: 32px;
    }
  }
}
</style>
