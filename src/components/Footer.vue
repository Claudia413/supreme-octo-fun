<template>
	<footer>
		<section class="instafeed">
			<span class="instagram-icon fab fa-instagram"></span>
			<div class="instagram-intro">
				<p>Want to get to know me better? Let's hang out on Instagram, it has all the dirt on my dog, amazing pics from New Zealand and some silly selfies.</p>
				<a href="http://instagram.com/claudia414" target="_blank" rel="noreferrer" class="cta-link">@Claudia414</a>
			</div>
			<a href="https://www.instagram.com/p/BpMC6uWFZjl/" target="_blank" rel="noreferrer">
				<img src="../assets/Insta-ClaudiaOnARock.jpg" alt="Instagram photo of Claudia sitting on a rock in a river" loading="lazy"/>
			</a>
			<a href="https://www.instagram.com/p/B8P9ledBA4l/" target="_blank" rel="noreferrer">
				<img src="../assets/Insta-ClaudiaInChristchurch.jpg" alt="Instagram photo of Claudia on a bench in a field of gold grass looking at the view" loading="lazy"/>
			</a>
			<a href="https://www.instagram.com/p/B3bW_xdBGk9/" target="_blank" rel="noreferrer">
				<img src="../assets/Insta-ClaudiaAtLakePukaki.jpg" alt="Instagram photo of Claudia looking at Mount Cook on the edge of Lake Pukaki" loading="lazy"/>
			</a>
			<a href="https://www.instagram.com/p/BtWhHvSnMMa/" target="_blank" rel="noreferrer">
				<img src="../assets/Insta-GuusGolden.jpg" alt="Instagram photo headshot of Guus, Claudia's Golden Retriever" loading="lazy"/>
			</a>
		</section>
		<section class="legal">
			<span>@ Claudia Engelsman Copyright {{currentYear}}</span>
			<span>All rights reserved</span>
			<a href="mailto:claudiaengelsman@gmail.com">Get in touch <i class="far fa-envelope"></i></a>
			<!-- <span>Legal</span> -->
		</section>
	</footer>
</template>

<script>
export default {
	name: "Footer",
	props: {},
	data() {
		return {
			currentYear: new Date().getFullYear(),
		}
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/_variables.scss";

footer {
	color: white;
	background-color: #45484a;
	max-width: 100vw;
	max-width: 4000px;
	padding: 0;
	height: auto;
	.instafeed {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: 100%;
		grid-template-areas: "instagram-intro ....";
		padding: 0;
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
				background-color: $gold2;
				display: flex;
				justify-content: center;
				font-size: 32px;
				color: $text-color;
				align-items: center;
				min-height: 140px;
			}
		}
		.instagram-intro {
			grid-area: instagram-intro;
			display: flex;
			justify-content: center;
			align-items: flex-start;
			flex-direction: column;
			margin: 0;
			padding: 20px;
			.cta-link {
				font-family: "Karla", sans-serif;
				color: $gold;
				text-transform: uppercase;
				text-decoration: none;
				font-size: 16px;
			}
			p {
				color: inherit;
				text-align: left;
				margin: 0;
				line-height: 20px;
				@media only screen and (max-width: 1028px) {
					font-size: 11px;
				}
				@media only screen and (max-width: 850px) {
					font-size: 11px;
					line-height: 15px;
				}
				@media only screen and (max-width: 768px) {
					font-size: 14px;
					line-height: 22px;
				}
			}
		}
		a {
			margin: 0;
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
		font-size: 12px;
		span, a {
			border-right: 1px solid white;
			padding: 8px 16px;
			font-size: inherit;
			margin: 0;
		}
		a {
			border: none;
			.fa-envelope {
				font-size: 10px;
				margin: 0 4px;
			}
		}
		@media only screen and (max-width: 768px) {
			font-size: 10px;
			span, a {
				border-right: 1px solid white;
				padding: 2px 8px;
				font-size: inherit;
				margin: 0;
			}
			a {
				border: none;
				.fa-envelope {
					font-size: 8px;
				}
			}
		}
	}
}
</style>
