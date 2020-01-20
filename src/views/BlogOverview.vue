<template>
	<div class="overview">
		<HeaderAnimation class="headeranimation">
            <template v-slot:title>
				<h1>Welcome to the blog!</h1>
			</template>
		</HeaderAnimation>
		<MenuSlide/>
        <section class="full-block blog-highlight tech">
			<div v-if="loadingBlogsTech" class="blog-post">
				<div class="blog-pic placeholder"></div>
				<div class="blog-tag-text placeholder"></div>
			</div>
			<div v-if="loadingBlogsTech" class="blog-post">
				<div class="blog-pic placeholder"></div>
				<div class="blog-tag-text placeholder"></div>
			</div>
			<div v-if="loadingBlogsTech" class="blog-post">
				<div class="blog-pic placeholder"></div>
				<div class="blog-tag-text placeholder"></div>
			</div>
			<div v-if="loadingBlogsTech" class="blog-post">
				<div class="blog-pic placeholder"></div>
				<div class="blog-tag-text placeholder"></div>
			</div>
			<div v-else v-for="(post, index) in blogpreviewstech" :key="'post-' + index" class="blog-post">
				<prismic-image :field="post.data.blog_image" class="blog-pic"/>
				<span class="blog-tag-text">{{post.data.title[0].text}}</span>
			</div>
		</section>
        <section class="full-block blog-highlight tech">
			<div v-if="loadingBlogsNZ" class="blog-post">
				<div class="blog-pic placeholder"></div>
				<div class="blog-tag-text placeholder"></div>
			</div>
			<div v-if="loadingBlogsNZ" class="blog-post">
				<div class="blog-pic placeholder"></div>
				<div class="blog-tag-text placeholder"></div>
			</div>
			<div v-if="loadingBlogsNZ" class="blog-post">
				<div class="blog-pic placeholder"></div>
				<div class="blog-tag-text placeholder"></div>
			</div>
			<div v-if="loadingBlogsNZ" class="blog-post">
				<div class="blog-pic placeholder"></div>
				<div class="blog-tag-text placeholder"></div>
			</div>
			<div v-else v-for="(post, index) in blogpreviewsnz" :key="'post-' + index" class="blog-post">
				<prismic-image :field="post.data.blog_image" class="blog-pic"/>
				<span class="blog-tag-text">{{post.data.title[0].text}}</span>
			</div>
		</section>
	</div>
</template>

<script>
// @ is an alias to /src
import HeaderAnimation from "@/components/HeaderAnimation.vue";
import MenuSlide from "@/components/MenuSlide.vue";

export default {
	name: "home",
	data() {
		return {
			blogpreviewsnz: [
            ],
            blogpreviewstech: [
            ],
            loadingBlogsTech: true,
            loadingBlogsNZ: true
		};
	},
	components: {
		HeaderAnimation,
		MenuSlide,
	},
	methods: {
		getContentNZ() {
			this.$prismic.client.query([
            this.$prismic.Predicates.at('document.type', 'blogpost'),
            this.$prismic.Predicates.at('document.tags', ['Tech']),
            ],
            {
			orderings : '[document.first_publication_date desc]',
			pageSize : 4,
			fetch : ['blogpost.title', 'blogpost.blog_image'] }).then((response) => {
                this.loadingBlogsTech = false
				this.blogpreviewstech = response.results
			// response is the response object, response.results holds the documents
			});
        },
        getContentTech() {
			this.$prismic.client.query([
            this.$prismic.Predicates.at('document.type', 'blogpost'),
            this.$prismic.Predicates.at('document.tags', ['NZ'])],
			{
			orderings : '[document.first_publication_date desc]',
			pageSize : 4,
			fetch : ['blogpost.title', 'blogpost.blog_image'] }
            ).then((response) => {
                this.loadingBlogsNZ = false
				this.blogpreviewsnz = response.results
			// response is the response object, response.results holds the documents
			});
        }
	},
	created () {
    this.getContentNZ();
    this.getContentTech();
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";

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

</style>