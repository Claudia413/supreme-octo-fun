<template>
	<div class="home">
		<HeaderAnimation class="headeranimation"/>
		<img
			alt="Claudia Engelsman, developer who will teach you how to code a website"
			src="../assets/Claudia.jpg"
			class="intro-pic img-block"
		>
		<section class="intro-text text-block">
			<h3>About</h3>
			<p>A business graduate turned developer. That is me, Claudia Engelsman. Switching from a job in purchasing to a developer job didn’t happen overnight, but I was earning a salary as a developer within a month of quitting and without any experience. I will help you to do the same by sharing everything I’ve learned, for free, and help you find inspiration and stay motivated to start creating your own websites.</p>
			<button class="mt-2">More about me</button>
		</section>
		<section class="slideit full-block">
			<div class="arrow" @click="incrementSlideIndex(-1)">
				<span class="fas fa-chevron-left"></span>
			</div>
			<div class="slider">
				<h4>Now is the perfect time to start because:</h4>
				<transition name="fade" mode="out-in">
					<p
						class="inspiration"
						v-if="slideIndex === 1"
						key="one"
					>It has never been easier to build websites. I am not making this up, technology is quickly improving the ease and fun of building websites, making this an excellent time to try it (again).</p>
					<p
						class="inspiration"
						v-if="slideIndex === 2"
						key="two"
					>There is a huge shortage of developers and this amount is only growing. More jobs than developers means developers have the upperhand in job negotiations. Sounds good huh!</p>
					<p
						class="inspiration"
						v-if="slideIndex === 3"
						key="three"
					>Is your current office space a bit gloom? Building websites can be done from any computer with a solid internet connection. Working from home, working remotely from a hammock, anything is possible.</p>
				</transition>
			</div>
			<div class="arrow" @click="incrementSlideIndex(1)">
				<span class="fas fa-chevron-right"></span>
			</div>
		</section>
		<img
			alt="Claudia Engelsman, developer who will teach you how to code a website"
			src="../assets/Claudia.jpg"
			class="try-it-pic img-block"
		>
		<section class="try-it-text text-block">
			<h3>Try it</h3>
			<p>Curious about building websites but don't know where to start? Have you already started but felt overwhelmed by all the information out there? Try out my guide with step by step articles, and practise, and I'll help you land a job as a webdeveloper in no time!</p>
			<button class="mt-2">To the guide!</button>
		</section>
		<section class="blog-highlight full-block">
			<div class="blog-post">
				<img src="../assets/Claudia.jpg" class="blog-pic">
				<span class="blog-tag">Long Blog Title about Something!</span>
			</div>
			<div class="blog-post">
				<img src="../assets/Claudia.jpg" class="blog-pic">
				<span class="blog-tag">Long Blog Title about Something else!</span>
			</div>
			<div class="blog-post">
				<img src="../assets/Claudia.jpg" class="blog-pic">
				<span class="blog-tag">Long Blog Title about other things!</span>
			</div>
		</section>
		<Footer class="footer"/>
	</div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import HeaderAnimation from "@/components/HeaderAnimation.vue";

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
		HeaderAnimation
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
	grid-template-rows: auto 400px auto 400px auto;
	grid-template-areas:
		"header header"
		"intro-pic intro-text"
		"slider slider"
		"try-it-text try-it-pic"
		"blog-highlight blog-highlight"
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
}
.intro-text {
	grid-area: intro-text;
}
.slideit {
	height: 250px;
	grid-area: slider;
	justify-content: space-between;
	background-color: $secondary-color;
	font-family: "Abel", sans-serif;
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
	.slider {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		opacity: 1;
		max-width: 70%;
		text-align: center;
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
	}
}
.try-it-pic {
	grid-area: try-it-pic;
}
.try-it-text {
	grid-area: try-it-text;
}
.text-block {
	text-align: justify;
	padding: 40px;
}
.blog-highlight {
	grid-area: blog-highlight;
	background-color: $primary-color;
	height: auto;
	padding: 40px;
	justify-content: space-evenly;
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
.full-block {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.blog-post {
	display: flex;
	align-content: center;
	flex-direction: column;
	position: relative;
	.blog-tag {
		background-color: $secondary-color;
		padding: 12px 20px;
		position: absolute;
		bottom: 0px;
		left: -20px;
		font-family: "Abel";
		text-transform: uppercase;
		font-size: 16px;
		display: flex;
		align-items: center;
		height: 120px;
		width: 100px;
	}
	.blog-pic {
		height: 240px;
		width: 240px;
		object-fit: cover;
		margin-bottom: 20px;
	}
}
.footer {
	grid-area: footer;
	max-width: 100vw;
}
</style>

