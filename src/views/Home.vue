<template>
	<div class="home">
		<HeaderAnimation class="headeranimation"/>
		<MenuSlide/>
		<img
			alt="Claudia Engelsman, developer who will teach you how to code a website"
			src="../assets/ClaudiaBWKaikoura.jpg"
			class="intro-pic img-block"
		>
		<section class="intro-text text-block">
			<h3>About</h3>
			<p>Hi, I'm Claudia and I will teach you how to build websites. I didn't know how to write code 2 years ago, I had a job in a purchasing department. Switching from that job to a developer position didn’t happen overnight, but I was earning a salary as a developer within a month of quitting and without any experience. I will help you to do the same by sharing everything I’ve learned, for free, and help you find inspiration and stay motivated to start creating your own websites.</p>
			<button class="mt-2">More about me</button>
		</section>
		<section class="slideit full-block">
			<div class="arrow" @click="incrementSlideIndex(-1)">
				<span class="fas fa-chevron-left"></span>
			</div>
			<transition name="fade-out" mode="out-in">
				<div class="number" v-bind:key="slideIndex">0{{slideIndex}}</div>
			</transition>
			<div class="slider">
				<h4>Now is the perfect time to start because:</h4>
				<transition name="fade" mode="out-in">
					<p class="inspiration" v-if="slideIndex === 1" key="one">
						<span class="bold">It has never been easier to build websites.</span> I am not making this up, technology is quickly improving the ease and fun of building websites, making this an excellent time to try it (again).
					</p>
					<p class="inspiration" v-if="slideIndex === 2" key="two">
						There is a huge shortage of developers and this amount is only growing. More jobs than developers means developers have the
						<span
							class="bold"
						>advantage in job negotiations.</span> Sounds good huh?
					</p>
					<p class="inspiration" v-if="slideIndex === 3" key="three">
						Is your current office space a bit gloomy? Building websites can be done from any computer with a solid internet connection.
						<span
							class="bold"
						>Working from home, working remotely from a hammock, anything is possible.</span>
					</p>
				</transition>
			</div>
			<div class="arrow" @click="incrementSlideIndex(1)">
				<span class="fas fa-chevron-right"></span>
			</div>
		</section>
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
			<p>I’m Claudia Engelsman, an IT geek with a passion for creating, a love for New Zealand and a black hole instead of a stomach.
			My mission is to help women learn to build websites with HTML, CSS and Javascript by providing tutorials, guides and templates. I started to learn coding 2 years ago and it was so overwhelming to started in a structured way, so I am creating the place I would have loved to have found back then.
			</p>
			<SocialIconBar></SocialIconBar>
		</section>
		<Footer class="footer"/>
	</div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import HeaderAnimation from "@/components/HeaderAnimation.vue";
import MenuSlide from "@/components/MenuSlide.vue";
import SocialIconBar from "@/components/SocialIconBar.vue";

export default {
	name: "home",
	data() {
		return {
			slideIndex: 1,
			numberOfSlides: 3
		};
	},
	components: {
		Footer,
		HeaderAnimation,
		MenuSlide,
		SocialIconBar
	},
	methods: {
		incrementSlideIndex(number) {
			if (this.slideIndex + number > this.numberOfSlides) {
				this.slideIndex = 1;
			} else if (this.slideIndex + number > 0) {
				this.slideIndex = this.slideIndex + number;
			} else {
				this.slideIndex = this.numberOfSlides;
			}
		}
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
.slideit {
	height: 400px;
	grid-area: slider;
	justify-content: space-between;
	background-color: $secondary-color;
	font-family: "Abel", sans-serif;
	padding: 0 40px;
	position: relative;
	.arrow {
		font-size: 24px;
		cursor: pointer;
		height: 100%;
		width: 40px;
		display: flex;
		.fas {
			color: #808080;
			margin: auto;
		}
	}
	.number {
		text-align: center;
		width: 240px;
		position: absolute;
		left: calc(50% - 120px);
		color: white;
		opacity: 1;
		font-size: 240px;
		bottom: calc(50% - 153px);
		z-index: 0;
	}
	.slider {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		opacity: 1;
		max-width: 70%;
		text-align: center;
		z-index: 20;
		.inspiration {
			font-size: 24px;
			color: $primary-bright;
		}
		.bold {
			font-weight: 600;
		}
	}
	.fade-enter-active {
		animation: fade-in 0.3s;
	}
	.fade-leave-active {
		animation: fade-in 0.3s reverse;
	}
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	.fade-out-enter-active {
		animation: fade-out 0.3s reverse;
	}
	.fade-out-leave-active {
		animation: fade-out 0.3s;
	}
	@keyframes fade-out {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
}

.try-it-pic {
	grid-area: try-it-pic;
}
.try-it-text {
	grid-area: try-it-text;
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

