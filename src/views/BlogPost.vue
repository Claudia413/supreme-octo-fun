<template>
	<div class="blog">
		<vue-headful
			:title="blog.seo_title"
			:description="blog.seo_description"
			:image="blog.seo_image"
			:url="'/blog' + blog.uid"
		/>
		<MenuSlide />
		<div class="blog-grid">
			<header>
				<div v-if="contentLoading" class="cover"></div>
				<img v-else-if="blog.labels[0] == 'NZ'" src="../assets/BlogHeaderNZ.png" alt="close-up of a fern plant in the shade" class="cover" />
				<img v-else src="../assets/BlogHeaderTech.png" alt="close-up of a alocasia (elephants ear) plant in the shade" class="cover" />
				<div class="intro">
					<p>Welcome to the blog</p>
					<vue-typed-js :strings="['Guide', 'Education', 'Motivation', 'Resources', 'Inspiration']" :loop="true" :loopCount="2" :typeSpeed="75" :backDelay="250" :backSpeed="35" :smartBackspace="true">
						<h1>Your {{blog.labels[0] == 'NZ'? 'New Zealand' : 'Coding'}} <span class="typing"></span></h1>
					</vue-typed-js>
				</div>
			</header>
			<div class="content">
				<h1 class="title">{{blog.title[0].text}}</h1>
				<img src="../assets/Dashdecoright.png" alt="decoration scribbly" class="deco" />
				<p class="author">by Claudia Engelsman</p>
				<prismic-rich-text :field="blog.subtitle" class="subtitle dent-right"/>
				<section v-for="(slice, index) in slices" :key="'slice-' + index" class="dent-right">
					<template v-if="slice.slice_type === 'blog_text_block'">
						<h2 class="heading" >{{slice.primary.section_title[0].text}}</h2>
						<prismic-rich-text :field="slice.primary.section_text" class="text"/>
					</template>
					<template v-else-if="slice.slice_type === 'image_with_caption'">
						<prismic-image :field="slice.primary.image" class="blog-image" />
						<prismic-rich-text :field="slice.primary.image_description" />
					</template>
				</section>
				<section class="cta">
					<router-link to="/blog" > {{'<<'}} Back to blog overview</router-link>
					<router-link :to="'/blog/' + relatedPostId"> {{ relatedPostTitle }} {{'>>'}} </router-link>
				</section>
			</div>
			<AsideBlog v-if="!contentLoading" :labels="blog.labels" :blogID="blog.prismicID" />
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import MenuSlide from "@/components/MenuSlide.vue";
import AsideBlog from "@/components/AsideBlog.vue";

export default {
	name: "blogPost",
	data() {
		return {
			blog: {
				title: [
                    { text: ""}
                ],
				subtitle: [],
				header: {},
				labels: [],
				prismicID: "",
				uid: "",
				seo_title: "",
				seo_description: "",
				seo_image: ""
			},
			slices: [],
			contentLoading: true,
			relatedPostTitle: "",
			relatedPostId: ""
		};
	},
	components: {
        MenuSlide,
		AsideBlog
	},
	methods: {
		getContent(uid) {
			this.$prismic.client.getByUID("blogpost", uid).then(document => {
				// Can't simply put the result in an empty blog object without console erros about undefined before its done loading. So we set them individually with starting empty objects and arrays
				this.blog.title = document.data.title;
				this.blog.subtitle = document.data.subtitle;
				this.blog.header = document.data.blog_image;
				this.blog.labels = document.tags;
				this.blog.seo_title = document.data.seo_title[0].text;
				this.blog.seo_description = document.data.seo_description[0].text;
				this.blog.seo_image = document.data.seo_image.url;
				this.slices = document.data.body;
				this.blog.prismicID = document.id;
				this.contentLoading = false
				this.getRelatedContent(document.id);
			});
		},
		getRelatedContent(prismicId) {
			this.$prismic.client.query(
			this.$prismic.Predicates.similar(prismicId, 10),
			{ orderings : '[my.blog_post.date desc]' }).then(response => {
				this.relatedPostTitle = response.results[0].data.title[0].text;
				this.relatedPostId = response.results[0].uid;
			})
		}
	},
	created() {
		this.getContent(this.$route.params.uid);
		this.blog.uid = this.$route.params.uid;
	},
	beforeRouteUpdate (to, from, next) {
		this.getContent(to.params.uid);
		next();
	}
};
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";

header {
	grid-area: header;
	position: relative;
	display: flex;
	justify-content: center;
	.cover {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 300px;
		object-fit: cover;
		width: 100%;
		max-width: 4000px;
		object-position: center;
		margin-left: auto;
		margin-right: auto;
		display: block;
		z-index: 0
	}
	.intro {
		z-index: 100;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		h1 {
			font-family: 'Karla', sans-serif;
			display: inline-block;
		}
		h2 {
			font-family: 'Spectral', sans-serif;
			font-size: 37px;
			line-height: 64px;
			color: white;
		}
		p {
			color: white;
			border-bottom: white 2px solid;
		}
	}
}

.blog {
	background-color: #f5f5f5;
	width: 100%;
	.blog-grid {
		display: grid;
		grid-gap: 0;
		grid-template-columns: 80fr 20fr;
		grid-template-rows: 300px auto;
		grid-template-areas:
			"header header"
			"content aside";
		@media only screen and (max-width: 768px) {
			grid-template-areas:
				"header header"
				"content content"
				"aside aside";
		}
	}
	.content {
		grid-area: content;
		width: 100%;
		max-width: 900px;
		margin-left: auto;
		margin-right: auto;
		display: flex;
        flex-direction: column;
		padding: 48px 0;
        .title {
            color: $primary-bright;
            text-align: center;
            padding: 24px 12px;
		}
		.deco {
			width: 48px;
			margin: 0 auto;
		}
		.author {
			text-align: center;
			font-size: 12px;
			font-weight: bold;
			margin-top: 24px;
		}
        .subtitle {
            padding: 12px;
        }
		.heading {
			color: $primary-bright;
			line-height: 36px;
			font-size: 18px;
        }
        section {
            padding: 12px;
        }
		.dent-right {
			@media only screen and (max-width: 768px) {
                padding: 12px 60px 12px 20px;
            }
		}
		p {
			line-height: 26px;
		}
		.blog-image {
			max-width: 100%;
        }
        .text {
            text-align: justify;
        }
		.cta {
			display: flex;
			justify-content: space-between;
			a {
				font-size: 14px;
			}
		}
	}
	aside {
		grid-area: aside;
		width: auto;
		max-width: 400px;
		@media only screen and (max-width: 768px) {
			width: 100%;
			max-width: unset;
		}
	}
}

</style>