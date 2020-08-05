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
			<p>Curious to find out what we can build together? As a developer and adventurer I can always create custom work, but just to give you an idea of what I can do I've listed some of my favorite ways to help you below.</p>
		</section>
		<section class="full-block services">
			<h3>How can I help you?</h3>
			<h4>Small businesses</h4>
			<p>Create a website for you business:</p>
			<ul>
				<li>A website that is responsive and looks good on mobile phones, tablets and desktops</li>
				<li>Optimize for search engines so your new website can be found and read by search engines</li>
				<li>A website for your business that you can maintain yourself if you like</li>
				<li>Optimize for accessibility to ensure all your customers, even those with a disability can access the information they need</li>
				<li>A website that links to your social media accounts</li>
				<li>A safe and technically sound website that does not require much maintenance</li>
			</ul>
			<h4>Code for a Cause</h4>
			<p>I believe in helping others and for that reason I have set up this Code for a Cause project. I will help non-profit organizations with their website for half a day per week for free. Currently I have only one opening for a non-profit left in my schedule so get in touch as soon as possible!</p>
			<h4>Hire me</h4>
			<p>For the right company I can be more than a project based freelancer, with the right company I'd love to commit and be an employee working with your team. Get in touch and let's grab a coffee/tea together!</p>
			<p>Some of my favorite skills are VueJs, Javascript, HTML5, CSS3. I also have experience with Prismic.io (API CMS), React, Gatsby, PHP (Laravel), Scrum and Holocracy, and a lot more abbreviations ;-)</p>
			<h4>Other enquiries</h4>
			<p>Want to work together on something else? Just reach out, I love getting mail that's not a newsletter or spam so I'll be excited to hear from you!</p>
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
.services {
	grid-area: long-bio;
	display: flex;
	flex-direction: column;
	padding: 80px;
	background-color: $dark-blue;
	text-align: center;
	h3 {
		color: $text-darkbg;
		margin-bottom: 20px;;
	}
	h4 {
		color: white;
		color: $light-blue;
		font-family: 'Karla', sans-serif;
		text-transform: none;
		font-weight: 500;
		margin-bottom: 0;
		margin-top: 20px;
	}
	p {
		color: $text-darkbg;
		width: 80%;
		max-width: 1400px;
	}
	ul {
		font-size: 14px;
		margin: 0;
		text-align: left;
		max-width: 75%;
	}
	li {
		color: $text-darkbg;
		list-style-type: circle;
		padding-block-start: 4px;
		padding-block-end: 4px;
		list-style-position: inside;
	}
	@media only screen and (max-width: 768px) {
		padding: 80px 40px;
	}
}

</style>

