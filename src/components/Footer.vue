<template>
	<footer class>
		<section class="instafeed">
      <span class="instagram-icon">ICON</span>
			<p class="instagram-intro">Want to get to know me better? Instagram has all the dirt on my dog, some amazing pics from New Zealand and some silly selfies.</p>
			<img src="../assets/Claudia.jpg">
			<img src="../assets/Claudia.jpg">
			<img src="../assets/Claudia.jpg">
			<img src="../assets/Claudia.jpg">
		</section>
		<section class="legal">
			<span>@ Claudia Engelsman Copyright 2019</span>
			<span>All rights reserved</span>
			<span>Get in touch</span>
			<span>Legal</span>
		</section>
	</footer>
</template>

<script>
export default {
	name: "Footer",
	props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
	color: white;
	background-color: #45484a;
	position: relative;
	max-width: 100vw;
	.instafeed {
		display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 100%;
		grid-template-areas: "instagram-intro ....";
		padding: 20px 40px;
		padding-right: 0;
		@media only screen and (max-width: 768px) {
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: repeat(2, auto);
			grid-template-areas:
				"instagram-icon  instagram-intro instagram-intro instagram-intro"
				"instagram-pic    instagram-pic   instagram-pic   instagram-pic";
			padding-left: 0;
		}
		.instagram-icon {
      display: none;
      @media only screen and (max-width: 768px) {
      display: inline-block;
      grid-area: instagram-icon;
      }
		}
		.instagram-intro {
			grid-area: instagram-intro;
		}
		p {
			color: inherit;
			text-align: justify;
		}
		img {
      width: 100%;
      height: auto;
      object-fit: cover;
      @media only screen and (max-width: 768px) {
        width: 100%;
        height: auto;
      }
		}
	}
	.legal {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 11px;
		span {
			border-right: 1px solid white;
			padding: 4px 16px;
		}
		span:last-of-type {
			border: none;
		}
		@media only screen and (max-width: 768px) {
			font-size: 10px;
			span {
				border-right: 1px solid white;
				padding: 2px 8px;
			}
		}
	}
}
</style>
