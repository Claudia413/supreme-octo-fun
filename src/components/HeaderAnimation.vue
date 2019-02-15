<template>
  <header>
    <h2 class="developer">Developer</h2>
    <h2 class="artist">artist</h2>
    <h2 class="dreamer">dreamer</h2>
  </header>
</template>

<script>
export default {
  name: 'HeaderAnimation',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/_variables.scss';

header {
    background-color: $primary-color;
    height: 40vh;
    h2 {
      display: inline-block;
      background: linear-gradient(to right, #FFDDAA 0%, #FCECC4 35%, #FCDA7F 70%, #FDE799 95%);
	-webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 10%;
  &.dreamer {
    font-size: 40px;
    font-family: 'Sacramento', sans-serif;
  }
    }
}
</style>
