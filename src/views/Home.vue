<template>
	<div class="home">
		<HeaderAnimation class="headeranimation">
			<template v-slot:title>
				<h1>Claudia Engelsman</h1>
				<h2> Developer, educator, adventurer</h2>
			</template>
		</HeaderAnimation>
		<MenuSlide/>
		<img
			alt="Claudia Engelsman, developer who will teach you how to code a website"
			src="../assets/ClaudiaBWKaikoura.jpg"
			class="intro-pic img-block">
		<section class="intro-text text-block menu-padding">
			<h3>About</h3>
			<p>Hi, hi, I'm Claudia. I want to help you build your own websites, from scratch. A mere 3 years ago I became a developer without any prior coding knowledge. It wasn't easy, but it was so worth it. Now I want to help others do the same. Oh, and I recently moved to New Zealand and share about that journey as well. For websites and emigration to NZ, I'm here to help!</p>
			<!-- Without any prior experience. I will help you to do the same by sharing everything I’ve learned, and help you find inspiration and stay motivated to start creating your own websites from scratch. -->
			<!-- <p>P.S. If you get lost anywhere, just use the compass on the right!</p> -->
			<button class="mt-2">More about me</button>
		</section>
		<TextSlider title="Now is the perfect time to start because:" :numberOfSlides="3">
			<template v-slot:slide1>
				<span class="bold">It has never been easier to build websites.</span> Not kidding; technology is quickly improving the ease and fun of building websites, making this an excellent time to try it (again).
			</template>
			<template v-slot:slide2>There is a huge shortage of developers and there is a big gap in male/female ratio in development. More job openings than developers means developers have the <span class="bold">advantage in job negotiations.</span> Sounds good huh?
			</template>
			<template v-slot:slide3>
				Is your current office space a bit gloomy? Building websites can be done from any computer with a solid internet connection.
				<span class="bold">Working from home or working remotely from a hammock, it is your choice.</span>
			</template>
		</TextSlider>
		<img
			alt="Claudia Engelsman, developer who will help you build a website yourself"
			src="../assets/ClaudiaEngelsmanHike.jpg"
			class="try-it-pic img-block"
		>
		<section class="try-it-text text-block">
			<h3>The blog</h3>
			<!-- <p>Curious about building websites but don't know where to start? Have you already started but felt overwhelmed by all the information out there? Here is my guide with articles, explanations, and handy tips to get you further ahead.</p> -->
			<p>These articles will soon become a library of posts for any girl who needs some help or inspiration about webdevelopment or moving to New Zealand.</p>
			<button class="mt-2">To the blog</button>
		</section>
		<!-- Blog previews from Prismic and empty squares while loading from Prismic -->
		<section class="full-block-row blog-highlight">
			<div v-if="loadingBlogs" class="blog-post">
				<div class="blog-pic placeholder"></div>
				<div class="blog-tag-text placeholder"></div>
			</div>
			<div v-if="loadingBlogs" class="blog-post">
				<div class="blog-pic placeholder"></div>
				<div class="blog-tag-text placeholder"></div>
			</div>
			<div v-if="loadingBlogs" class="blog-post">
				<div class="blog-pic placeholder"></div>
				<div class="blog-tag-text placeholder"></div>
			</div>
			<div v-if="loadingBlogs" class="blog-post">
				<div class="blog-pic placeholder"></div>
				<div class="blog-tag-text placeholder"></div>
			</div>
			<div v-else v-for="(post, index) in blogpreviews" :key="'post-' + index" class="blog-post">
				<prismic-image :field="post.data.blog_image" class="blog-pic"/>
				<span class="blog-tag-text">{{post.data.title[0].text}}</span>
			</div>
		</section>
		<section class="freebie-text text-block">
			<h3>Let's stay in touch</h3>
			<p class="text-darkbg">Sign up to get cool resources and the latest blog updates in your inbox. And don't worry, I hate spam just as much as you do and promise I will only send you the really cool stuff!</p>
			<NewsletterSignUp/>
		</section>
		<section class="bio-link-text text-block menu-padding">
			<h3>Hiya!</h3>
			<p>
				I’m Claudia Engelsman, an IT geek with a passion for creating, a love for New Zealand and a black hole instead of a stomach.
				My mission is to help women learn to build websites with HTML, CSS and Javascript by providing tutorials, templates and inspiration. I started coding 3 years ago and it was so overwhelming to get started in a structured way. Now I am creating the place I would have loved to have found back then in the hopes more women join me in this awesome field of work.
			</p>
			<!-- <SocialIconBar></SocialIconBar> -->
		</section>
	</div>
</template>

<script>
// @ is an alias to /src
import HeaderAnimation from "@/components/HeaderAnimation.vue";
import MenuSlide from "@/components/MenuSlide.vue";
import SocialIconBar from "@/components/SocialIconBar.vue";
import TextSlider from "@/components/TextSlider.vue";
import NewsletterSignUp from "@/components/NewsletterSignUp.vue"

export default {
	name: "home",
	data() {
		return {
			loadingBlogs: true,
			blogpreviews: [
			],

		};
	},
	components: {
		HeaderAnimation,
		MenuSlide,
		SocialIconBar,
		TextSlider,
		NewsletterSignUp,
	},
	methods: {
		getContent() {
			this.$prismic.client.query(
			this.$prismic.Predicates.at('document.type', 'blogpost'),
			{
			orderings : '[document.first_publication_date desc]',
			pageSize : 4,
			fetch : ['blogpost.title', 'blogpost.blog_image'] }
			).then((response) => {
				this.blogpreviews = response.results
				this.loadingBlogs = false
			// response is the response object, response.results holds the documents
			});
		}
	},
	created () {
    this.getContent();
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";

.home {
	z-index: 100;
	max-width: 100%;
	height: calc(100% - 400px);
	display: grid;
	grid-gap: 0;
	grid-template-columns: repeat(2, 50%);
	grid-template-rows: auto 440px auto 400px auto auto;
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
	h1 {
		opacity: 1;
	}
	h2 {
		color: $text-darkbg;
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
		}
		.blog-pic {
			height: 320px;
			width: 340px;
		}
	}
}
.freebie-text {
	grid-area: freebie-text;
	background-color: $secondary-color;

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

