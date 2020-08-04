<template>
	<div class="hireme">
		<vue-headful
			title="CE | Developer, educator, adventurer"
			description="Claudia writes about coding websites and moving to New Zealand. She also helps small businesses with setting up their website as a freelancer."
			image="../assets/ClaudiaBWKaikoura.jpg"
			url="https://www.claudiaengelsman.com/workwithme"
		/>
		<MenuSlide/>
		<img
			alt="Claudia Engelsman, creating a place online for your business"
			src="../assets/ClaudiaPunakaikiSunset.jpg"
			class="intro-pic img-block"
		>
		<section class="intro-text text-block">
			<h3>Hi there!</h3>
			<p>Good to e-meet you. </p>
		</section>
		<section class="full-block long-bio">
			<h3>How can I help you?</h3>
			<p>List services</p>
		</section>


	</div>
</template>

<script>
import MenuSlide from "@/components/MenuSlide.vue";


export default {
	components: {
		MenuSlide
	}
};
</script>


<style lang="scss" scoped>
@import "../assets/_variables.scss";

.hireme {
	width: 100%;
	display: grid;
	grid-gap: 0;
	grid-template-columns: repeat(2, 50%);
	grid-template-rows: 500px auto;
	grid-template-areas:
		"intro-pic intro-text"
		"long-bio long-bio";
	@media only screen and (max-width: 768px) {
		grid-template-columns: repeat(2, 50%);
		grid-template-rows: auto;
		grid-template-areas:
			"intro-pic intro-pic"
			"intro-text intro-text"
			"long-bio long-bio"
			"did-you-know did-you-know";
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
.long-bio {
	grid-area: long-bio;
	display: flex;
	flex-direction: column;
	padding: 80px;
	background-color: $dark-blue;
	text-align: center;
	h3 {
		color: $light-blue;
	}
	p {
		color: $text-darkbg;
		width: 80%;
		max-width: 1400px;
		&.highlight {
			font-size: 18px;
			font-style: italic;
			color: $light-blue;
			padding: 12px 0;
			font-weight: 500;
		}
	}
	@media only screen and (max-width: 768px) {
		padding: 80px 40px;
	}
}
.did-you-know {
	grid-area: did-you-know;
}
</style>

