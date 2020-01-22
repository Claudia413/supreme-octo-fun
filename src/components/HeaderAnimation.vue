<template>
	<header>
		<div class="title">
			<slot :name="'title'"></slot>
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
	height: 50vh;
	background-image: url('../assets/Darkheader.jpg');
	background-repeat: none;
	background-size: cover;
	background-color: $background-color-grey;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	.title {
		// background-color: $background-color-grey;
		padding: 32px;
		max-width: 40%;
	}
	h1 {
		opacity: 1;
	}
	h2 {
		color: $text-darkbg;
	}
}
</style>
