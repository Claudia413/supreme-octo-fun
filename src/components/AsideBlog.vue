<template>
	<aside>
		<section class="short-bio">
            <img src="../assets/ClaudiaWithMacbookSmall.jpg" class="headshot"/>
            <p>Hiya, I'm Claudia and here to help with coding websites and tips on moving to New Zealand.</p>
		</section>
        <section class="featured-blog">
            <p>Latest post in the {{labels[0]}} category</p>
            <router-link :to="'/blog/' + blogpreview.uid" class="blog-post">
                    <prismic-image :field="blogpreview.data.blog_image" class="blog-pic"/>
                    <span class="blog-tag-text">{{blogpreview.data.title[0].text}}</span>
            </router-link>
		</section>
        <section class="cta newsletter">
            <p>Do you want a bi-weekly update on what's new? Sign up here</p>
            <NewsletterSignUp/>
		</section>
	</aside>
</template>

<script>
import NewsletterSignUp from '@/components/NewsletterSignUp.vue'

export default {
	name: "AsideBlog",
    props: {
        labels: Array,
        blogID: String,
        },
    components: {
        NewsletterSignUp
    },
    data() {
        return {
            blogpreview: {
                data: {
                    blog_image: {},
                    title: [
                        {text: ""}
                    ]
                }
            },
            currentCategory: "",
        }
    },
    methods: {
        getBlogFromThisCategory(categoryLabel) {
			this.$prismic.client.query([
            this.$prismic.Predicates.at('document.type', 'blogpost'),
            this.$prismic.Predicates.at('document.tags', [ categoryLabel ]),
            ],
            {
			orderings : '[document.first_publication_date desc]',
			pageSize : 2,
			fetch : ['blogpost.title', 'blogpost.blog_image'] }).then((response) => {
                if(this.blogID === response.results[0].id) {
                    this.blogpreview = response.results[1]
                } else {
                    this.blogpreview = response.results[0]
                }
            // response is the response object, response.results holds the documents
			});
        },
    },
    mounted() {
        this.getBlogFromThisCategory(this.labels[0]);
    },
    watch: {
    // whenever blogID changes, this function will run
    blogID: function (newBlogID, oldBlogID) {
      this.getBlogFromThisCategory(this.labels[0]);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/_variables.scss";

aside {
	color: white;
	width: auto;
	padding: 48px 56px 0 0;
	height: auto;
}

.short-bio {
    .headshot {
        width: 100%;
        height: auto;
        max-height: 300px;
        object-fit: cover;
        object-position: top center;
        margin-top: 36px;
    }
}

.featured-blog {
    .blog-pic {
        width: 100%;
    }
}
</style>
