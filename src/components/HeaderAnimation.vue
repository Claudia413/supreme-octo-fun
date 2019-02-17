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
      #fde799 33%
      #ffddaa 43%,
			#fcecc4 53%,
			#fcda7f 60%,
      #fde799 66%
      #ffddaa 76%,
			#fcecc4 86%,
			#fcda7f 96%,
			#fde799 100%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin: 10%;
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
			font-size: 32px;
      font-family: "Raleway", sans-serif;
      animation-delay: 1.5s;
		}
		&.artist {
			font-size: 32px;
			font-family: "Radley", serif;
		}
		&.dreamer {
			font-size: 40px;
      font-family: "Sacramento", sans-serif;
      animation-delay: 2.5s;
		}
	}
}
</style>
