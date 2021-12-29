<template>
  <svg viewBox="0 0 24 24" :width="width" :height="width">
    <path
      d="M23,12L19,16V13H6.83C6.42,14.17 5.31,15 4,15A3,3 0 0,1 1,12A3,3 0 0,1 4,9C5.31,9 6.42,9.83 6.83,11H19V8L23,12Z"
    />
  </svg>
</template>

<script>
  export default {
    name: "ArrowIcon",
    props: {
      color: {
        type: String,
        default: "snowwhite",
        required: false,
      },
      width: {
        type: String,
        default: "18px",
        required: false,
      },
    },
  };
</script>

<style scoped lang="scss">
  @import "../_variables.scss";

  .snowwhite {
    fill: $snowwhite;
  }
  .saffron {
    fill: $saffron;
  }
  .iceblue {
    fill: $iceblue;
  }
</style>
