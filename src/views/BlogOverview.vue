<template>
	<div class="overview">
		<HeaderAnimation class="headeranimation">
            <template v-slot:title>
				<h1>Welcome to the blog!</h1>
			</template>
		</HeaderAnimation>
		<MenuSlide/>
        <section class="full-block blog-reel tech">
            <h3>Tech blogs</h3>
            <div class="blogs">
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
                <router-link v-else v-for="(post, index) in blogpreviewstech" :key="'post-' + index" :to="'/blog/' + post.uid" class="blog-post">
                    <prismic-image :field="post.data.blog_image" class="blog-pic"/>
                    <span class="blog-tag-text">{{post.data.title[0].text}}</span>
                </router-link>
            </div>
		</section>
        <!-- <section class="featured-blog">
            <h3>Featured post</h3>
        </section> -->
        <section class="full-block blog-reel nz">
            <h3>Blogs about New Zealand and emigration</h3>
            <div class="blogs">
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
                <router-link v-else v-for="(post, index) in blogpreviewsnz" :key="'post-' + index" :to="'/blog/' + post.uid" class="blog-post">
                    <prismic-image :field="post.data.blog_image" class="blog-pic"/>
                    <span class="blog-tag-text">{{post.data.title[0].text}}</span>
                </router-link>
            </div>
		</section>
	</div>
</template>

<script>
// @ is an alias to /src
import HeaderAnimation from "@/components/HeaderAnimation.vue";
import MenuSlide from "@/components/MenuSlide.vue";

export default {
	name: "blogOverview",
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

.blog-reel {
    background-color: $primary-color;
	height: auto;
    padding: 40px;
    &.nz {
        background-color: $text-darkbg;
        color: $primary-color;
        h3 {
            color: $primary-color;
        }
    }
    h3 {
        color: $text-darkbg;
        padding: 0 24px 24px;
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
}

// .featured-blog {
//     background-color: $body-bg;
// }

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

</style>