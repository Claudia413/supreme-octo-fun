<template>
	<footer>
		<section class="instafeed">
			<span class="instagram-icon fab fa-instagram"></span>
			<div class="instagram-intro">
				<p>Want to get to know me better? Instagram has all the dirt on my dog, amazing pics from New Zealand and some silly selfies.</p>
				<a href="http://instagram.com/claudia414" target="_blank" class="cta-link">@Claudia414</a>
			</div>
			<img src="../assets/Claudia.jpg" />
			<img src="../assets/Claudia.jpg" />
			<img src="../assets/Claudia.jpg" />
			<img src="../assets/Claudia.jpg" />
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
@import "../assets/_variables.scss";

footer {
	color: white;
	background-color: #45484a;
	max-width: 100vw;
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
			grid-template-rows: repeat(2, 1fr);
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
				background-color: $highlight-color;
				display: flex;
				justify-content: center;
				font-size: 32px;
				color: $text-color;
				align-items: center;
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
				font-family: "Abel", sans-serif;
				color: $primary-bright;
				text-transform: uppercase;
				text-decoration: none;
			}
			p {
				color: inherit;
				text-align: left;
				margin: 0;
				line-height: 20px;
				@media only screen and (max-width: 1028px) {
					font-size: 11px;
				}
				@media only screen and (max-width: 768px) {
					font-size: 14px;
					line-height: 22px;
				}
			}
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
		span {
			border-right: 1px solid white;
			padding: 8px 16px;
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
