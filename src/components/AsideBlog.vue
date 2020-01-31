<template>
	<aside>
		<section class="short-bio">
            <img src="../assets/ClaudiaWithMacbookSmall.jpg" class="headshot"/>
            <p>Hiya, I'm Claudia and here to help with coding websites and tips on moving to New Zealand</p>
		</section>
        <section class="featured-blog">
            <p>featured blog post here</p>
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
    props: {},
    components: {
        NewsletterSignUp
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/_variables.scss";

aside {
	color: white;
	width: auto;
	padding: 0 56px 0 0;
	height: auto;
}

.short-bio {
    .headshot {
        width: 100%;
        height: auto;
    }
}
</style>
