<template>
	<header>
		<div class="title">
			<h1>Claudia Engelsman</h1>
			<h2> Developer, dreamer, dog-lover</h2>
		</div>
	</header>
</template>

<script>
export default {
	name: "HeaderAnimation"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/_variables.scss";

header {
	max-width: 100%;
	min-height: 240px;
	background-image: url('../assets/HeaderHome.jpg');
	background-repeat: none;
	background-size: cover;
	background-color: $primary-color;
	height: 40vh;
	display: flex;
	align-items: center;
	justify-content: center;
	.title {
		background-color: $background-color-grey;
		padding: 32px;
		max-width: 40%;
	}
	h1 {
		// text-transform: uppercase;
		opacity: 1;
		font-size: 32px;
	}
	h2 {
		color: $text-color;
	}
}
</style>
