<template>
	<div class="home">
		<HeaderAnimation class="headeranimation"/>
		<MenuSlide/>
		<img
			alt="Claudia Engelsman, developer who will teach you how to code a website"
			src="../assets/ClaudiaBWKaikoura.jpg"
			class="intro-pic img-block">
		<section class="intro-text text-block">
			<h3>About</h3>
			<p>Hi, I'm Claudia and I will teach you how to build websites. I didn't know how to write code 2 years ago, I had a job in a purchasing department. Switching from that job to a developer position didn’t happen overnight, but I was earning a salary as a developer within a month of quitting and without any experience. I will help you to do the same by sharing everything I’ve learned, for free, and help you find inspiration and stay motivated to start creating your own websites.</p>
			<button class="mt-2">More about me</button>
		</section>
		<TextSlider title="Now is the perfect time to start because:" :numberOfSlides="3">
			<template v-slot:slide1>
				<span class="bold">It has never been easier to build websites.</span> I am not making this up, technology is quickly improving the ease and fun of building websites, making this an excellent time to try it (again).
			</template>
			<template v-slot:slide2>There is a huge shortage of developers and this amount is only growing. More jobs than developers means developers have the <span class="bold">advantage in job negotiations.</span> Sounds good huh?
			</template>
			<template v-slot:slide3>
				Is your current office space a bit gloomy? Building websites can be done from any computer with a solid internet connection.
				<span class="bold">Working from home, working remotely from a hammock, anything is possible.</span>
			</template>
		</TextSlider>
		<img
			alt="Claudia Engelsman, developer who will teach you how to code a website"
			src="../assets/ClaudiaBWKaikoura.jpg"
			class="try-it-pic img-block"
		>
		<section class="try-it-text text-block">
			<h3>Try it</h3>
			<p>Curious about building websites but don't know where to start? Have you already started but felt overwhelmed by all the information out there? Try out my guide with step by step articles, practise exercises, and I'll help you land a job as a webdeveloper in no time!</p>
			<button class="mt-2">To the guide!</button>
		</section>
		<section class="full-block blog-highlight">
			<div class="blog-post">
				<img src="../assets/ClaudiaBWKaikoura.jpg" class="blog-pic">
				<span class="blog-tag-text">Long Blog Title about Something!</span>
			</div>
			<div class="blog-post">
				<img src="../assets/ClaudiaBWKaikoura.jpg" class="blog-pic">
				<span class="blog-tag-text">Long Blog Title about Something else!</span>
			</div>
			<div class="blog-post">
				<img src="../assets/ClaudiaBWKaikoura.jpg" class="blog-pic">
				<span class="blog-tag-text">Long Blog Title about other things!</span>
			</div>
		</section>
		<section class="freebie-text text-block">
			<h3>Got errors?</h3>
			<p>Fix those errors with my free 3 step guide</p>
			<input type="text" title="name" placeholder="Name" class="sign-up">
			<input type="email" title="email address" placeholder="Email address" class="sign-up">
			<button class="mt-2">Yes, let's do this!</button>
		</section>
		<section class="bio-link-text text-block">
			<h3>Try it</h3>
			<p>
				I’m Claudia Engelsman, an IT geek with a passion for creating, a love for New Zealand and a black hole instead of a stomach.
				My mission is to help women learn to build websites with HTML, CSS and Javascript by providing tutorials, guides and templates. I started to learn coding 2 years ago and it was so overwhelming to started in a structured way, so I am creating the place I would have loved to have found back then.
			</p>
			<SocialIconBar></SocialIconBar>
		</section>
	</div>
</template>

<script>
// @ is an alias to /src
import HeaderAnimation from "@/components/HeaderAnimation.vue";
import MenuSlide from "@/components/MenuSlide.vue";
import SocialIconBar from "@/components/SocialIconBar.vue";
import TextSlider from "@/components/TextSlider.vue";

export default {
	name: "home",
	data() {
		return {

		};
	},
	components: {
		HeaderAnimation,
		MenuSlide,
		SocialIconBar,
		TextSlider
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";

.home {
	max-width: 100%;
	display: grid;
	grid-gap: 0;
	grid-template-columns: repeat(2, 50%);
	grid-template-rows: auto 400px auto 400px auto 400px;
	grid-template-areas:
		"header header"
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
			"header header"
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
.headeranimation {
	grid-area: header;
	max-width: 100vw;
}
.intro-pic {
	grid-area: intro-pic;
	object-position: center;
}
.intro-text {
	grid-area: intro-text;
}
.try-it-pic {
	grid-area: try-it-pic;
}
.try-it-text {
	grid-area: try-it-text;
}
.bold {
	font-weight: 600;
}
.home .blog-highlight {
	grid-area: blog-highlight;
	background-color: $primary-color;
	height: auto;
	padding: 40px;
	justify-content: space-evenly;
	@media only screen and (max-width: 768px) {
		flex-direction: column;
	}
}
.blog-post {
	display: flex;
	align-content: center;
	flex-direction: column;
	position: relative;
	&:hover {
		.blog-tag-text {
			opacity: 0;
			transition: opacity 0.3s ease;
		}
	}
	.blog-tag-text {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		font-family: "Abel";
		text-transform: uppercase;
		font-weight: 600;
		font-size: 16px;
		max-width: 100%;
		margin: 16px;
		text-align: center;
		background-color: #fdfdfd73;
		padding: 40px;
		opacity: 1;
		transition: opacity 0.3s ease;
	}
	.blog-pic {
		height: 240px;
		width: 220px;
		object-fit: cover;
		// -webkit-clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
		// clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
	}
	@media only screen and (max-width: 1112px) {
		.blog-pic {
			height: 200px;
			width: 200px;
		}
	}
	@media only screen and (max-width: 768px) {
		margin-bottom: 20px;
		.blog-tag-text {
			top: 0;
			left: -64px;
			right: 176px;
			right: 64%;
			bottom: 0;
			padding: 40px;
			text-align: left;
		}
		.blog-pic {
			margin-left: 40px;
			height: 280px;
			width: 300px;
		}
	}
}
.freebie-text {
	grid-area: freebie-text;
	background-color: $secondary-color;
	.sign-up {
		display: block;
		border: none;
		height: 24px;
		width: 256px;
		color: $primary-bright;
		margin-bottom: 16px;
		padding: 8px;
	}
	@media only screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
}
.bio-link-text {
	grid-area: bio-link-text;
}
.footer {
	grid-area: footer;
	max-width: 100vw;
}
</style>

