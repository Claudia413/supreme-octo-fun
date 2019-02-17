<template>
	<div class="home">
		<HeaderAnimation class="headeranimation"/>
		<img
			alt="Claudia Engelsman, developer who will teach you how to code a website"
			src="../assets/Claudia.jpg"
			class="intro-pic"
		>
		<section class="intro-text">
			<h3>About</h3>
			<p>A business graduate turned developer. That is me, Claudia Engelsman. Switching from a job in purchasing to a developer job didn’t happen overnight, but I was earning a salary as a developer within a month of quitting and without any experience. I will help you to do the same by sharing everything I’ve learned, for free, and help you find inspiration and stay motivated to start creating your own websites.</p>
			<button class="mt-2">More about me</button>
		</section>
		<section class="slideit">
			<div class="arrow back" @click="incrementSlideIndex(-1)"><</div>
			<transition name="fade" mode="out-in">
      	<p class="inspiration" v-if="slideIndex === 1" key="one">Hello test</p>
      	<p class="inspiration" v-if="slideIndex === 2" key="two">I should be visible</p>
				<p class="inspiration" v-if="slideIndex === 3" key="three">Me too!</p>
			</transition>
			<div class="arrow forward" @click="incrementSlideIndex(1)">></div>
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
  data () {
    return {
			slideIndex: 1,
			numberOfSlides: 3
    }
  },
	components: {
		Footer,
		HeaderAnimation
	},
	methods: {
		incrementSlideIndex(number) {
			if(this.slideIndex + number > this.numberOfSlides) {
				this.slideIndex = 1;
			}else if(this.slideIndex + number > -1){
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
	grid-template-rows: auto 400px auto;
	grid-template-areas:
		"header header"
    "intro-pic intro-text"
    "slider slider"
		"footer footer";
	@media only screen and (max-width: 768px) {
		grid-template-columns: repeat(2, 50%);
		grid-template-rows: auto;
		grid-template-areas:
			"header header"
			"intro-pic intro-pic"
      "intro-text intro-text"
      "slider slider"
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
	width: 100%;
	height: 100%;
	object-fit: cover;
	@media only screen and (max-width: 768px) {
		height: 400px;
		max-width: 100vw;
	}
}
.intro-text {
	grid-area: intro-text;
	text-align: justify;
	padding: 40px;
}
.slideit {
  grid-area: slider;
  background-color: $secondary-color;
	height: 250px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	opacity: 1;
	.arrow {
		font-size: 24px;
		margin: 20px;
		cursor: pointer;
	}
	.fade-enter-active {
  	animation: fade-in 1s;
	}
	.fade-leave-active {
  	animation: fade-in .5s reverse;
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
.footer {
	grid-area: footer;
	max-width: 100vw;
}
</style>

