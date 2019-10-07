<template>
	<div class="home">
		<HeaderAnimation class="headeranimation"/>
		<MenuSlide/>
		<img
			alt="Claudia Engelsman, developer who will teach you how to code a website"
			src="../assets/ClaudiaBWKaikoura.jpg"
			class="intro-pic img-block">
		<section class="intro-text text-block menu-padding">
			<h3>About</h3>
			<p>Hi, I'm Claudia and I want to help you learn how to build websites. I didn't know how to write code 2 years ago, I switched from a job in purchasing to a developer position and while that didn’t happen overnight, I was earning a salary as a developer within a month of quitting.</p>
			<!-- Without any prior experience. I will help you to do the same by sharing everything I’ve learned, and help you find inspiration and stay motivated to start creating your own websites from scratch. -->
			<!-- <p>P.S. If you get lost anywhere, just use the compass on the right!</p> -->
			<button class="mt-2">More about me</button>
		</section>
		<TextSlider title="Now is the perfect time to start because:" :numberOfSlides="3">
			<template v-slot:slide1>
				<span class="bold">It has never been easier to build websites.</span> I am not making this up, technology is quickly improving the ease and fun of building websites, making this an excellent time to try it (again).
			</template>
			<template v-slot:slide2>There is a huge shortage of developers and there is a big gap in male/female ratio in development. More job openings than developers means developers have the <span class="bold">advantage in job negotiations.</span> Sounds good huh?
			</template>
			<template v-slot:slide3>
				Is your current office space a bit gloomy? Building websites can be done from any computer with a solid internet connection.
				<span class="bold">Working from home or working remotely from a hammock, it is your choice.</span>
			</template>
		</TextSlider>
		<img
			alt="Claudia Engelsman, developer who will help you how to code a website"
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
			<div class="blog-post">
				<img src="../assets/ClaudiaBWKaikoura.jpg" class="blog-pic">
				<span class="blog-tag-text">Long Blog Title about other things!</span>
			</div>
		</section>
		<section class="freebie-text text-block">
			<h3>Stuff here</h3>
			<p class="text-darkbg">CTA for download here, text, lorem ipsum</p>
			<input type="text" title="name" placeholder="Name" class="sign-up">
			<input type="email" title="email address" placeholder="Email address" class="sign-up">
			<button class="mt-2">Yes, let's do this!</button>
		</section>
		<section class="bio-link-text text-block menu-padding">
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
	line-height: 1.4rem;
	// @media only screen and (max-width: 1148px) {
	// 	line-height: 1.3rem;
	// }

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
	background-color: $background-color-grey;
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
	cursor: pointer;
	&:hover {
		.blog-tag-text {
			opacity: 0.95;
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
		margin: 24px;
		text-align: center;
		background-color: #fdfdfd;
		padding: 32px;
		opacity: 0.85;
		transition: opacity 0.3s ease;
	}
	.blog-pic {
		height: 240px;
		width: 220px;
		object-fit: cover;
	}
	@media only screen and (max-width: 1112px) {
		.blog-pic {
			height: 200px;
			width: 200px;
		}
	}
	@media only screen and (max-width: 768px) {
		margin-bottom: 32px;
		.blog-tag-text {
			margin: 32px;
		// 	top: 0;
		// 	left: 176px;
		// 	right: -64px;
		// 	left: 64%;
		// 	bottom: 0;
		// 	padding: 40px;
		// 	text-align: left;
		}
		.blog-pic {
			// margin-right: 40px;
			height: 320px;
			width: 340px;
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

