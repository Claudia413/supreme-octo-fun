<template>
	<div class="about">
		<MenuSlide/>
		<img
			alt="Claudia Engelsman, developer who will teach you how to code a website"
			src="../assets/ClaudiaBWKaikoura.jpg"
			class="intro-pic img-block"
		>
		<section class="intro-text text-block">
			<h3>Hello there!</h3>
			<p>This is the story of a business graduate who became a paid developer in just weeks. This is also the story of a girl who believes life is about helping each other and passing it on. I received a lot of help during my journey to become a developer, and now that I am one, I want to pay it forward and help others to get there as well. Read on to find out how I plan to do that.</p>
		</section>
		<section class="full-block long-bio">
			<h3>My story</h3>
			<p>A few years ago I turned my life around and started over at age 26. I had just moved back in with my parents after a break-up when I realized how unfulfilling my current career path was. I wanted to become a developer and I quit my job without a new job or even a solid plan to get there. Uh-oh...</p>
			<p>I started reading about and trying out HTML and CSS online, going from one free resource to the next. There is so much information available, but not all is correct, up to date or complete, I was lost and just went with everything I found. Fast forward a few weeks, a dash of luck and I got an interview with my current employer. They took a huge chance on this honest and unexperienced girl and decided to hire me and teach me coding on the job. I felt like the stars aligned just for me and I was so excited to start.</p>
			<p>Since then I’ve never been more frustrated with work problems and errors and such, but I also have never been happier when I do figure it out and a new feature is build for one of our websites. It is such a thrill to create something out of thin air and help so many people with it.</p>
			<p>Now that I’m here, I remember I had such a hard and confusing time in the beginning of this journey, and I feel like I should improve this for others who want to learn how to code. This is where and when I decided to create a space with all the information to get started, with support and inspiration to keep going when it gets hard, or when you are frustrated. A place I wish I had back then, starting with all of this. My goal is to be the ‘aha-moment’ for someone struggling with learning all this on their own. To be the support for someone thinking of giving up while they are so close. And to be the inspiration for someone who wants to learn coding but is afraid to get started. If there is one person today I am helping with this website, it is a good day.</p>
			<p>When I’m not working as a developer or creating guides and providing help, you can find me on the couch in yoga pants with my pupper and some B&J ice cream, dreaming of New Zealand or simply (binge)watching Netflix. I also enjoy watercolor painting, and I don’t make enough time for this. Hopefully one day I will master time-management and have enough time for all my (creative) interests and endeavours.</p>
		</section>
		<section class="video-block full-block">
			<!-- insert video piece here -->
		</section>
		<TextSlider class="did-you-know" title="10 Things you didn't know about me" :numberOfSlides="10" background-color="bg-light"
		number-color="grey">
			<template v-slot:slide1>If you ask me to choose between my favorite icecream(Chunky monkey or Coockie dough) and homemade pumpkin soup by my boyfriend, I will have a huge dillema even with the apetite of a large dinosaur.</template>
			<template v-slot:slide2>I am a geek and I love videogames, I can literally forget time when I am playing Dragon Age Inquisition, Diablo or Pokemon.</template>
			<template v-slot:slide3>Horses have a special place in my heart, the best part of them is their soft velvet nose.</template>
			<template v-slot:slide4>I love surprising my friends with elaborate set up gifts that cost me way, way too much time and way more money than expected, but when it all works out, it's totally worth it to me.</template>
			<template v-slot:slide5>During my trip to New Zealand I fell head over heels for this beautiful country and have been trying to find a way back ever since.</template>
			<template v-slot:slide6>My favorite geometric shape is a hexagon, can’t get enough of it, even while it is hard to use in webdevelopment.</template>
			<template v-slot:slide7>Nailbiting has been a problem since I got my first teeth. I’m working on it. For about 26 years in a row now.</template>
			<template v-slot:slide8>Also, not a pro in cleaning my house, I just don’t get the point of dusting when new dust is arriving as soon as I dust it off.</template>
			<template v-slot:slide9>I am a huge Harry Potter fan, books, movies, art, merch. I might have seen the first movie over 50 times, ssshhh.</template>
			<template v-slot:slide10>I graduated high school twice, once in the Netherlands and once in California during my exchange year.</template>
		</TextSlider>
		<section class="video-block full-block"></section>
		<Footer class="footer"/>
	</div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import MenuSlide from "@/components/MenuSlide.vue";
import TextSlider from "@/components/TextSlider.vue";

export default {
	components: {
		Footer,
		MenuSlide,
		TextSlider
	}
};
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
		"long-bio long-bio"
		"video-first video-first"
		"did-you-know did-you-know"
		"video-second video-second"
		"footer footer";
	@media only screen and (max-width: 768px) {
		grid-template-columns: repeat(2, 50%);
		grid-template-rows: auto;
		grid-template-areas:
			"intro-pic intro-pic"
			"intro-text intro-text"
			"long-bio long-bio"
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
.long-bio {
	grid-area: long-bio;
	display: flex;
	flex-direction: column;
	padding: 40px;
	background-color: $secondary-color;
	text-align: center;
	p {
		width: 80%;
		max-width: 1400px;
	}
}
.did-you-know {
	grid-area: did-you-know;
}
.did-you-know-pic {
	grid-area: did-you-know-pic;
}
.footer {
	grid-area: footer;
	max-width: 100vw;
}
</style>

