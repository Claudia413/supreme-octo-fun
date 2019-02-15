<template>
  <footer class="">
    <section class="instafeed">
      <p>Want to get to know me better? Instagram has all the dirt on my dog, some amazing pics from New Zealand and some silly selfies.</p>
      <img src="#"/>
      <img src="#"/>
      <img src="#"/>
    </section>
    <section class="legal">
      <span>@ Claudia Engelsman Copyright 2019</span>
      <span>All rights reserved</span>
      <span>Get in touch </span>
      <span>Legal</span>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
  color: white;
  background-color: #45484A;
  .instafeed {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-gap: 16px;
  }
  .legal {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      border-right: 1px solid white;
      padding: 4px 16px;
    }
    span:last-of-type {
      border: none;
    }
  }
}
</style>
