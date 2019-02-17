<template>
	<header>
		<h2 class="developer">Developer</h2>
		<h2 class="artist">artist</h2>
		<h2 class="dreamer">dreamer</h2>
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
	background-color: $primary-color;
	height: 40vh;
	display: flex;
	align-items: center;
	justify-content: center;
	h2 {
		display: inline-block;
		background: linear-gradient(
			to top right,
			#ffddaa 0%,
			#fcecc4 10%,
			#fcda7f 20%,
			#fde799 33% #ffddaa 43%,
			#fcecc4 53%,
			#fcda7f 60%,
			#fde799 66% #ffddaa 76%,
			#fcecc4 86%,
			#fcda7f 96%,
			#fde799 100%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin: 6%;
		background-size: 800% 800%;

		-webkit-animation: MetallicBackground 10s ease infinite;
		-moz-animation: MetallicBackground 10s ease infinite;
		animation: MetallicBackground 10s ease infinite;

		@-webkit-keyframes MetallicBackground {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}
		@-moz-keyframes MetallicBackground {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}
		@keyframes MetallicBackground {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}
		&.developer {
			font-size: 48px;
			font-family: "Raleway", sans-serif;
			animation-delay: 1.5s;
		}
		&.artist {
			font-size: 48px;
			font-family: "Radley", serif;
			position: relative;
			bottom: 48px;
		}
		&.dreamer {
			font-size: 64px;
			font-family: "Sacramento", sans-serif;
			animation-delay: 2.5s;
		}
	}
	@media only screen and (max-width: 768px) {
		height: 30vh;
		min-height: unset;
		h2 {
			&.developer {
				font-size: 28px;
			}
			&.artist {
				font-size: 28px;
				bottom: 28px;
			}
			&.dreamer {
				font-size: 36px;
			}
		}
	}
}
</style>
