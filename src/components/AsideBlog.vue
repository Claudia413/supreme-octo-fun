<template>
	<aside>
		<section class="short-bio">
            <img src="../assets/ClaudiaWithMacbookSmall.jpg" class="headshot"/>
            <p>Hiya, I'm Claudia and and here to help you with upping your website skills and I write about moving to New Zealand.<span class="extended-bio"> My dream is for more women succeed in developer and tech roles and I personally want to help you get there and cheer you on along the way.</span></p>
		</section>
        <img src="../assets/Dashdecoleft.png" alt="decoration scribbly" class="deco" />
        <section class="featured-blog">
            <p>The latest from the {{labels[0]}} category:</p>
            <router-link :to="'/blog/' + blogpreview.uid" class="blog-post">
                    <prismic-image :field="blogpreview.data.blog_image" class="blog-pic"/>
                    <span class="blog-title">{{blogpreview.data.title[0].text}}</span>
            </router-link>
		</section>
        <img src="../assets/Dashdecoleft.png" alt="decoration scribbly" class="deco" />
        <section class="cta newsletter">
            <p>Do you want a bi-weekly update on what's new? You can sign up here</p>
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
    blogID: function () {
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
    text-align: center;
    .deco {
        width: 48px;
        margin: 36px auto;
        display: block;
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
        p {
            span {
                    display: none;
                }
        }
    }
    .newsletter {
        margin-bottom: 36px;
    }
    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        align-items: center;
        padding: 48px 0 0 0;
        .short-bio {
            display: flex;
            flex-direction: row-reverse;
            width: 100%;
            background-color: white;
            .headshot {
                max-height: 240px;
                object-fit: cover;
                object-position: top center;
                margin-top: 0;
            }
            p {
                margin: 24px;
                font-size: 14px;
                text-align: right;
                span {
                    display: inline;
                }
            }
        }
        .featured-blog {
            width: 75%;
            .blog-post {
                display: flex;
                flex-direction: column-reverse;
                margin-bottom: 0;
                &:hover {
                    font-weight: normal;
                }
                .blog-pic {
                    height: auto;
                    max-height: 280px;
                    object-fit: cover;
                }
            }
        }
        .newsletter {
            display: none;
        }
    }

}



.featured-blog {
    display: block;
    height: auto;
    .blog-pic {
        width: 100%;
    }
    .blog-post {
        height: auto;
        display: grid;
        &:hover {
            font-weight: normal;
        }
    }
    .blog-title {
        display: block;
        background-color: #242331;
        padding: 12px;
        color: white;
        &:hover {
            font-weight: normal;
        }
    }
}
</style>
