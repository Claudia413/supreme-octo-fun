<template>
<transition name="slide-in">
	<div>
		<!-- left part with icon and triangles?  -->
	</div>
	<div class="menu-list">
		<span>Home</span>
		<span>About</span>
		<span>Guide</span>
		<span>Blog</span>
		<span>Contact</span>
		<!-- Icons here -->
	</div>
</transition>
</template>

<script>
export default {
	name: "MenuSlide"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/_variables.scss";

</style>
