<template>
	<div class="blog">
		<MenuSlide />
		<div class="blog-grid">
			<header>
				<prismic-image :field="blog.header" class="cover" />
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
			</div>
			<AsideBlog v-if="!contentLoading" :labels="blog.labels" :blogID="blog.prismicID" />
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import MenuSlide from "@/components/MenuSlide.vue";
import AsideBlog from "@/components/AsideBlog.vue"

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
				prismicID: ""
			},
			slices: [],
			contentLoading: true
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
				this.slices = document.data.body;
				this.blog.prismicID = document.id;
				this.contentLoading = false
			});
		}
	},
	created() {
		this.getContent(this.$route.params.uid);
	},
	beforeRouteUpdate (to, from, next) {
		this.getContent(to.params.uid);
		next();
	}
};
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";

.blog {
	background-color: #f5f5f5;
	.blog-grid {
		display: grid;
		grid-gap: 0;
		grid-template-columns: 80fr 20fr;
		grid-template-rows: 50vh auto;
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
		padding-top: 48px;
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
			font-family: "Spectral", sans-serif;
			line-height: 39px;
			font-size: 23px;
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

header {
	grid-area: header;
	position: relative;
	.cover {
		grid-area: header;
		height: 50vh;
		object-fit: cover;
		width: 100%;
		max-width: 1400px;
		object-position: center;
		margin-left: auto;
		margin-right: auto;
		display: block;
	}
}

</style>