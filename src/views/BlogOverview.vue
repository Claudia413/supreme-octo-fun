<template>
	<div class="overview">
        <vue-headful
			title="CE | Developer, educator, adventurer"
			description="Blog library with posts about Coding, Tech, New Zealand and emigration"
			image="../assets/ClaudiaByLaurenMcCormick2.jpg"
			url="https://www.claudiaengelsman.com/blog"
		/>
		<HeaderAnimation class="headeranimation">
            <template v-slot:title>
				<h1>Welcome to the blog!</h1>
			</template>
		</HeaderAnimation>
		<MenuSlide/>
        <section class="full-block blog-reel tech">
            <h3>Tech & Coding</h3>
            <div class="blogs">
                <div v-if="loadingBlogsTech" class="blog-post placeholder">
                    <div class="blog-pic"></div>
                    <div class="blog-tag-text"></div>
                </div>
                <div v-if="loadingBlogsTech" class="blog-post placeholder">
                    <div class="blog-pic"></div>
                    <div class="blog-tag-text"></div>
                </div>
                <div v-if="loadingBlogsTech" class="blog-post placeholder">
                    <div class="blog-pic"></div>
                    <div class="blog-tag-text"></div>
                </div>
                <div v-if="loadingBlogsTech" class="blog-post placeholder">
                    <div class="blog-pic"></div>
                    <div class="blog-tag-text"></div>
                </div>
                <BlogPreview v-else v-for="(post, index) in blogpreviewstech" :key="'post-' + index" :blogId="post.uid" class="blog-post" :image="post.data.blog_image" :title="post.data.title[0].text" />
            </div>
		</section>
        <!-- <section class="featured-blog">
            <h3>Featured post</h3>
        </section> -->
        <section class="full-block blog-reel nz">
            <h3>New Zealand & Emigration</h3>
            <div class="blogs">
                <div v-if="loadingBlogsNZ" class="blog-post placeholder">
                    <div class="blog-pic "></div>
                    <div class="blog-tag-text"></div>
                </div>
                <div v-if="loadingBlogsNZ" class="blog-post placeholder">
                    <div class="blog-pic"></div>
                    <div class="blog-tag-text"></div>
                </div>
                <div v-if="loadingBlogsNZ" class="blog-post placeholder">
                    <div class="blog-pic"></div>
                    <div class="blog-tag-text"></div>
                </div>
                <div v-if="loadingBlogsNZ" class="blog-post placeholder">
                    <div class="blog-pic"></div>
                    <div class="blog-tag-text"></div>
                </div>
                <BlogPreview v-else v-for="(post, index) in blogpreviewsnz" :key="'post-' + index" :blogId="post.uid" class="blog-post" :image="post.data.blog_image" :title="post.data.title[0].text" />
            </div>
		</section>
	</div>
</template>

<script>
// @ is an alias to /src
import HeaderAnimation from "@/components/HeaderAnimation.vue";
import MenuSlide from "@/components/MenuSlide.vue";
import BlogPreview from "@/components/BlogPreview.vue";

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
        BlogPreview
	},
	methods: {
		getContentTech() {
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
        getContentNZ() {
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

.overview {
    width: 100%;
}

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
.placeholder{
    .blog-pic {
		height: 240px;
        width: 240px;
        background-color: $grey;
	}
	@media only screen and (max-width: 1112px) {
		.blog-pic {
			height: 220px;
			width: 220px;
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