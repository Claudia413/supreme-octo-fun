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
        <!-- <section class="featured-blog">
            <h3>Featured post</h3>
        </section> -->
        <section class="full-block blog-reel dark">
            <h3>New Zealand & Emigration</h3>
            <div class="blogs">
                <div v-if="$store.state.loadingBlogsNZ" class="blog-post placeholder">
                    <div class="blog-pic "></div>
                    <div class="blog-tag-text"></div>
                </div>
                <div v-if="$store.state.loadingBlogsNZ" class="blog-post placeholder">
                    <div class="blog-pic"></div>
                    <div class="blog-tag-text"></div>
                </div>
                 <div v-if="$store.state.loadingBlogsNZ" class="blog-post placeholder">
                    <div class="blog-pic"></div>
                    <div class="blog-tag-text"></div>
                </div>
                <div v-if="$store.state.loadingBlogsNZ" class="blog-post placeholder">
                    <div class="blog-pic"></div>
                    <div class="blog-tag-text"></div>
                </div>
                <BlogPreview v-else v-for="(post, index) in blogpreviewsnz" :key="'post-' + index" :blogId="post.uid" class="blog-post" :image="post.data.blog_image" :title="post.data.title[0].text" />
            </div>
            <p :class="maxPageNumberNZ>pageNumberNZ? '':'hidden'" @click="showMoreNZBlogPosts()"> More blogs >> </p>
		</section>
                <section class="full-block blog-reel light">
            <h3>Tech & Coding</h3>
            <div class="blogs">
                <div v-if="$store.state.loadingBlogsTech" class="blog-post placeholder">
                    <div class="blog-pic"></div>
                    <div class="blog-tag-text"></div>
                </div>
                <div v-if="$store.state.loadingBlogsTech" class="blog-post placeholder">
                    <div class="blog-pic"></div>
                    <div class="blog-tag-text"></div>
                </div>
                <div v-if="$store.state.loadingBlogsTech" class="blog-post placeholder">
                    <div class="blog-pic"></div>
                    <div class="blog-tag-text"></div>
                </div>
                <div v-if="$store.state.loadingBlogsTech" class="blog-post placeholder">
                    <div class="blog-pic"></div>
                    <div class="blog-tag-text"></div>
                </div>
                <BlogPreview v-else v-for="(post, index) in blogpreviewstech" :key="'post-' + index" :blogId="post.uid" class="blog-post" :image="post.data.blog_image" :title="post.data.title[0].text" />
            </div>
            <p :class="maxPageNumber>pageNumber? 'light-bg':'hidden'" @click="showMoreTechBlogPosts()"> More blogs >> </p>
		</section>
	</div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';
import HeaderAnimation from "@/components/HeaderAnimation.vue";
import MenuSlide from "@/components/MenuSlide.vue";
import BlogPreview from "@/components/BlogPreview.vue";

export default {
	name: "blogOverview",
	data() {
		return {
            pageNumber: 1,
            maxPageNumber: 2,
            pageNumberNZ: 1,
            maxPageNumberNZ: 2,
		};
	},
	components: {
		HeaderAnimation,
        MenuSlide,
        BlogPreview
	},
	methods: {
		getContentTech(pageNumber) {
			this.$prismic.client.query([
            this.$prismic.Predicates.at('document.type', 'blogpost'),
            this.$prismic.Predicates.at('document.tags', ['Tech']),
            ],
            {
			orderings : '[document.first_publication_date desc]',
            pageSize : 4,
            page: pageNumber,
			fetch : ['blogpost.title', 'blogpost.blog_image'] }).then((response) => {
                this.maxPageNumber = response.total_pages
                this.$store.dispatch('setTechBlogPreviewsFromPrismic', response.results);
            // response is the response object, response.results holds the documents
			});
        },
        getContentNZ(pageNumberNZ) {
			this.$prismic.client.query([
            this.$prismic.Predicates.at('document.type', 'blogpost'),
            this.$prismic.Predicates.at('document.tags', ['NZ'])],
			{
			orderings : '[document.first_publication_date desc]',
            pageSize : 4,
            page: pageNumberNZ,
			fetch : ['blogpost.title', 'blogpost.blog_image'] }).then((response) => {
                this.maxPageNumberNZ = response.total_pages
                this.$store.dispatch('setNZBlogPreviewsFromPrismic', response.results);
			// response is the response object, response.results holds the documents
			});
        },
        showMoreTechBlogPosts() {
            this.pageNumber = this.pageNumber + 1;
            this.getContentTech(this.pageNumber);
        },
        showMoreNZBlogPosts() {
            this.pageNumberNZ = this.pageNumberNZ + 1;
            this.getContentNZ(this.pageNumberNZ);
        }
    },
    computed: mapState([
        'blogpreviewsnz',
        'blogpreviewstech'
        ]),
	created () {
        if (this.$store.state.blogpreviewsnz.length === 0) {
            this.getContentNZ(this.pageNumberNZ);
        }
        if (this.$store.state.blogpreviewstech.length === 0) {
            this.getContentTech(this.pageNumber);
        }
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
    &.light {
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
    p {
        color: white;
        cursor: pointer;
        font-size: 16px;
        transition: opacity 0.4s, visibility 0.4s ease-in-out;
        &.light-bg {
            color: inherit;
        }
        &.hidden {
            opacity: 0;
            visibility: hidden;
        }
        &:hover {
            font-weight: bold;
        }
    }
    .blogs {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
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