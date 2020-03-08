<template>
	<div class="links">
		<div class="hex photo"></div>
		<SocialIconBar :instagram="false" :website="true"/>
		<img src="../assets/Dashdecoright.png" alt="decoration scribbly" class="deco" />
		<h3>Latest post on Coding & Tech:</h3>
		<div class="blogs">
			<div v-if="loadingBlogsTech" class="blog-post">
				<div class="blog-pic placeholder"></div>
				<div class="blog-tag-text placeholder"></div>
			</div>
			<router-link v-else v-for="(post, index) in blogpreviewstech" :key="'post-' + index" :to="'/blog/' + post.uid" class="blog-post">
				<prismic-image :field="post.data.blog_image" class="blog-pic"/>
				<span class="blog-tag-text">{{post.data.title[0].text}}</span>
			</router-link>
		</div>
		<h3>Latest post on New Zealand & Emigration:</h3>
		<div class="blogs">
			<div v-if="loadingBlogsNZ" class="blog-post">
				<div class="blog-pic placeholder"></div>
				<div class="blog-tag-text placeholder"></div>
			</div>
			<router-link v-else v-for="(post, index) in blogpreviewsnz" :key="'post-' + index" :to="'/blog/' + post.uid" class="blog-post">
				<prismic-image :field="post.data.blog_image" class="blog-pic"/>
				<span class="blog-tag-text">{{post.data.title[0].text}}</span>
			</router-link>
		</div>
		<router-link to="/about" class="button mt-2">About me</router-link>
		<a href="mailto:claudiaengelsman@gmail.com" class="button mt-2">E-mail me</a>
	</div>
</template>

<script>
// @ is an alias to /src
import SocialIconBar from '@/components/SocialIconBar.vue'

export default {
	name: "links",
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
		SocialIconBar
	},
	methods: {
		getContentTech() {
			this.$prismic.client.query([
            this.$prismic.Predicates.at('document.type', 'blogpost'),
            this.$prismic.Predicates.at('document.tags', ['Tech']),
            ],
            {
			orderings : '[document.first_publication_date desc]',
			pageSize : 1,
			fetch : ['blogpost.title', 'blogpost.blog_image'] }).then((response) => {
                this.loadingBlogsTech = false
				this.blogpreviewstech = response.results
            // response is the response object, response.results holds the documents
			});
        },
        getContentNZ() {
			this.$prismic.client.query([
            this.$prismic.Predicates.at('document.type', 'blogpost'),
            this.$prismic.Predicates.at('document.tags', ['NZ'])],
			{
			orderings : '[document.first_publication_date desc]',
			pageSize : 1,
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
	},
	beforeRouteUpdate (to, from, next) {
		this.getContent(to.params.uid);
		next();
	}
};
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";


.links {
	background-color: $grey-light;
	position: relative;
	align-items: center;
	display: flex;
	flex-direction: column;
	h3 {
		font-family: 'Karla', sans-serif;
		font-size: 18px;
		line-height: 36px;
		text-align: center;
		max-width: 280px;
	}
	.hex {
		width: 150px;
		height: 150px;
		-webkit-clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
		clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
		background-image: url("../assets/ClaudiaByLaurenMcCormick.jpg");
		background-size: cover;
		background-repeat: no-repeat;
	}
	.deco {
		width: 48px;
		margin: 24px auto;
	}
	@media only screen and (max-width: 768px) {
		font-size: 14px;
	}
}

.blogs {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	@media only screen and (max-width: 768px) {
            width: auto;
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
		height: 220px;
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
			height: 280px;
			width: 280px;
		}
    }
}

</style>