<template>
	<div class="about">
		<img
			alt="Claudia Engelsman, developer who will teach you how to code a website"
			src="../assets/ClaudiaBWKaikoura.jpg"
			class="intro-pic img-block"
		>
		<section class="intro-text text-block">
			<h3>About</h3>
			<p>Hello text here etc</p>
		</section>
    <Footer class="footer"/>
	</div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  components: {
		Footer
	},
}
</script>


<style lang="scss" scoped>
@import "../assets/_variables.scss";

.about {
	max-width: 100%;
	display: grid;
	grid-gap: 0;
	grid-template-columns: repeat(2, 50%);
	grid-template-rows: 600px auto;
	grid-template-areas:
		"intro-pic intro-text"
		"slider slider"
		"try-it-text try-it-pic"
		"blog-highlight blog-highlight"
		"freebie-text bio-link-text"
		"footer footer";
	@media only screen and (max-width: 768px) {
		grid-template-columns: repeat(2, 50%);
		grid-template-rows: auto;
		grid-template-areas:
			"intro-pic intro-pic"
			"intro-text intro-text"
			"slider slider"
			"try-it-pic try-it-pic"
			"try-it-text try-it-text"
			"blog-highlight blog-highlight"
			"bio-link-text bio-link-text"
			"freebie-text freebie-text"
			"footer footer";
	}
	.mt-2 {
		margin-top: 20px;
	}
}
.intro-pic {
	grid-area: intro-pic;
	object-position: center;
}
.intro-text {
	grid-area: intro-text;
}
.img-block {
	width: 100%;
	height: 100%;
	object-fit: cover;
	@media only screen and (max-width: 768px) {
		height: 400px;
		max-width: 100vw;
	}
}
.text-block {
	text-align: justify;
	padding: 40px;
	p {
		max-width: 600px;
	}
}
.footer {
	grid-area: footer;
	max-width: 100vw;
}
</style>

