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
		<section class="full-block long-bio">
      <h3>About</h3>
			<p>A few years ago I turned my life around and started over at age 26. I had just moved back in with my parents after a break-up when I realized how unfulfilling my current career path was. I wanted to become a developer and I quit my job without a new job or even a solid plan to get there. Uh-oh...</p>
			<p>I started reading about and trying out HTML and CSS online, going from one free resource to the next. There is so much information available, but not all is correct, up to date or complete, I was lost and just went with everything I found.</p>
			<p>Fast forward a few weeks, a dash of luck and I got an interview with my current employer. They took a huge chance on this honest and unexperienced girl and decided to hire me and teach me coding on the job. I felt like the stars aligned just for me and I was so excited to start.</p>
			<p>Since then I’ve never been more frustrated with work problems and errors and such, but I also have never been happier when I do figure it out and a new feature is build for one of our websites. It is such a thrill to create something out of thin air and help so many people with it.</p>
			<p>Now that I’m here, I remember I had such a hard and confusing time in the beginning of this journey, and I feel like I should improve this for others who want to learn how to code. This is where and when I decided to create a space with all the information to get started, with support and inspiration to keep going when it gets hard, or when you are frustrated. A place I wish I had back then, starting with all of this.</p>
			<p>My goal is to be the ‘aha-moment’ for someone struggling with learning all this on their own. To be the support for someone thinking of giving up while they are so close. And to be the inspiration for someone who wants to learn coding but is afraid to get started. If there is one person today I am helping with this website, it is a good day.</p>
			<p>When I’m not working as a developer or creating guides and providing help, you can find me on the couch in yoga pants with my pupper and some B&J ice cream, dreaming of New Zealand or simply (binge)watching Netflix. I also enjoy watercolor painting, and I don’t make enough time for this. Hopefully one day I will master time-management and have enough time for all my (creative) interests and endeavours.</p>
		</section>

		<Footer class="footer"/>
	</div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
	components: {
		Footer
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
  p {
    width: 80%;
    max-width: 1400px;
  }
}
.footer {
	grid-area: footer;
	max-width: 100vw;
}
</style>

