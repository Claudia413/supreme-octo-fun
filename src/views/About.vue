<template>
	<div class="about">
		<vue-headful
			title="CE | Developer, educator, adventurer"
			description="Claudia writes about coding websites for beginners and migrating to New Zealand. She wants to help more women into webdevelopment"
			image="../assets/ClaudiaBWKaikoura.jpg"
			url="https://www.claudiaengelsman.com/about"
		/>
		<MenuSlide/>
		<img
			alt="Claudia Engelsman, developer who will teach you how to code a website"
			src="../assets/ClaudiaBWKaikoura.jpg"
			class="intro-pic img-block"
		>
		<section class="intro-text text-block">
			<h3>Hello there!</h3>
			<p>This is the story of a business graduate who became a paid developer in just weeks. This is also the story of a girl who believes life is about helping each other and passing it on. I received a lot of help during my journey to become a developer, and now that I am one, I want to pay it forward and help you to get there as well! If you are curious about how I reinvented myself to become a developer, this is the place to be.</p>
		</section>
		<section class="full-block long-bio">
			<h3>My story</h3>
			<p>A few years ago I turned my life around and started over at age 26. I had just moved back in with my parents after a break-up when I realized how unfulfilling my current career path was. I wanted to become a developer and I quit my job without a new job or even a solid plan to get there. Uh-oh...</p>
			<p>I started reading about and trying out HTML and CSS online, going from one free resource to the next. There is so much information available, but not all is correct, up to date or even complete, I was lost and just went with everything I found. Fast forward a few weeks, a dash of luck and I got an interview with my first tech company. They took a huge chance on this honest and unexperienced girl and decided to hire me and teach me coding on the job. I felt like the stars aligned just for me and I was so excited to start.</p>
			<p class="highlight">Since then I’ve never been more frustrated with work problems and errors and such, but I also have never been happier when I do figure it out and a new feature is build for a website. It is such a thrill to create something out of thin air and help so many people with it.</p>
			<p>Since that start I've completed a coding bootcamp, learned a few more coding languages on the job, worked on different sized projects in different teams and switched jobs. We then moved to New Zealand in pursuit of more adventure and I am currently looking for a new job in a country with a whole new working culture and environment.</p>
			<p>Now that I’m here, with all this experience I still remember I had such a hard and confusing time in the beginning of this journey. I believe I should improve this for others who want to learn how to code. This is why I decided to create a space with all the information to get started, with support and inspiration to keep going when it gets hard, or when you are frustrated. A place I wish I had when I started with all of this. My goal is to be the ‘aha-moment’ for you if you are struggling with learning all this on your own. To be your support if you are thinking of giving up while you might be so close. And to be the inspiration for those who want to learn coding but are afraid to get started. If there is one person I am helping today with this website, it is a good day.</p>
			<p>When I’m not working as a developer or creating resources to help others, you can find me on the couch in yoga pants with my pupper and some B&J ice cream, dreaming of adventures New Zealand or simply (binge)watching Netflix. I also enjoy watercolor painting and creating art from time to time and I don’t make enough time for this. Hopefully one day I will master time-management and have enough time for all my (creative) interests and endeavours.</p>
		</section>
		<!-- <section class="video-block full-block"> -->
			<!-- insert video piece here -->
		<!-- </section> -->
		<TextSlider class="did-you-know" title="10 Things you didn't know about me" :numberOfSlides="10" background-color="bg-light"
		title-color="secondary-color"
		textColor="primary-color"
		number-color="grey">
			<template v-slot:slide1>If you ask me to choose between my favorite icecream(B&J Cookie dough) and homemade pumpkin soup made by my boyfriend, I will have a huge dillema. Even with the apetite of a large dinosaur.</template>
			<template v-slot:slide2>During my trip to New Zealand a few years back I fell head over heels for this beautiful country and have been trying to find a way back ever since. We got a 2,5 year visa, so this dreams has come true!</template>
			<template v-slot:slide3>Horses have a special place in my heart, and I hope I can keep riding until I'm old and wrinkly!</template>
			<template v-slot:slide4>I love surprising my friends with elaborate set up gifts that cost me way, way too much time and often way more money than expected, but when it all works out it's totally worth it.</template>
			<template v-slot:slide5>I am a geek and I love videogames, I can literally forget time when I am playing Dragon Age Inquisition, Diablo or Pokemon.</template>
			<template v-slot:slide6>My favorite geometric shape is a hexagon, can’t get enough of it, even while it is hard to use in webdevelopment.</template>
			<template v-slot:slide7>Nailbiting has been a problem since I got my first teeth. I’m working on it. For about 26 years in a row now.</template>
			<template v-slot:slide8>Also, not a pro in cleaning my house, I just don’t get the point of dusting when new dust is arriving as soon as I dust it off. Can't wait until tech is available to automatically clean my house!</template>
			<template v-slot:slide9>I am a huge Harry Potter fan, books, movies, art, merch. Sorry, not sorry for my references on the blog.</template>
			<template v-slot:slide10>Coding is the closest I can get to magic, with coding I can create things from thin air, and give people a wonderfull experience. I'd do good magic, no dark arts and making people feel horrible using it.</template>
		</TextSlider>
		<!-- <section class="video-block full-block">
			video block
		</section> -->
	</div>
</template>

<script>
import MenuSlide from "@/components/MenuSlide.vue";
import TextSlider from "@/components/TextSlider.vue";

export default {
	components: {
		MenuSlide,
		TextSlider
	}
};
</script>


<style lang="scss" scoped>
@import "../assets/_variables.scss";

.about {
	width: 100%;
	display: grid;
	grid-gap: 0;
	grid-template-columns: repeat(2, 50%);
	grid-template-rows: 500px auto;
	grid-template-areas:
		"intro-pic intro-text"
		"long-bio long-bio"
		"video-first video-first"
		"did-you-know did-you-know"
		"video-second video-second";
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

