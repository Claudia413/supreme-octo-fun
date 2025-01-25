<template>
  <a :href="webUrl" class="stamp-border">
    <img :src="imageUrl" alt="Shiny Image" />
  </a>
</template>

<script setup>
const props = defineProps(['imageUrl', 'webUrl'])
</script>

<style scoped>
a {
  text-decoration: none;
  display: block;
  padding: 0;
}

img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 2px white solid;
}

.stamp-border {
  /* Change this value to adjust the stamp perforation size: */
  --radius: 3px;

  background-image: radial-gradient(var(--radius), transparent 98%, white),
    linear-gradient(white 0 0);
  background-repeat: round, no-repeat;
  background-position:
    calc(var(--radius) * -1.5) calc(var(--radius) * -1.5),
    50%;
  background-size:
    calc(var(--radius) * 3) calc(var(--radius) * 3),
    calc(100% - var(--radius) * 3) calc(100% - var(--radius) * 3);
  padding: 12px;
}
</style>
