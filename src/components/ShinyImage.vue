<template>
  <a :href="webUrl">
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

a {
  width: 150px;
  height: 150px;
  font-size: 30px;
  color: #fff;
  background: none;
  border: none;
  border-radius: 50%;
  position: relative;
  z-index: 0;
  transition: 0.3s;
  cursor: pointer;
  margin-bottom: 24px;
}
a:before {
  content: '';
  position: absolute;
  inset: -8px;
  padding: 5px;
  border-radius: 50%;
  background: conic-gradient(
    #f5c646,
    #0000 30deg 120deg,
    #00f8d3 150deg 180deg,
    #0000 210deg 300deg,
    #f5c646 330deg
  );
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: intersect;
}
a:after {
  content: '';
  position: absolute;
  inset: -50px;
  background: radial-gradient(80px at left 80px top 50px, #f5c646 100%, #0000),
    radial-gradient(80px at right 80px bottom 50px, #00f8d3 100%, #0000);
  filter: blur(120px);
  opacity: 0.5;
}

a:before,
a:after {
  transition:
    0.5s,
    99999s 99999s transform;
}
a:hover {
  box-shadow: 0 0 0 1px #666;
}

a:hover:before,
a:hover:after {
  transform: rotate(36000deg);
  transition:
    0.5s,
    600s linear transform;
}
a:before {
  background-color: #222;
  border: 2px solid #333;
}

img {
  border-radius: 50%;
  left: -5px;
  position: relative;
  top: -5px;
  width: 160px;
  height: 160px;
  object-fit: cover;
  opacity: 1;
}
</style>
