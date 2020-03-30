<template>
    <router-link :to="'/blog/' + blogId" class="blog-post">
			<picture class="blog-pic" loading="lazy">
				<source :srcset="image.mobileoverview.url" media="(max-width: 768px)">
				<source :srcset="image.tablet.url" media="(max-width: 1112px)">
				<source :srcset="image.large.url" media="(min-width: 1113px)">
				<img :src="image.url" :alt="image.alt" class="blog-pic">
			</picture>
            <span class="blog-tag-text">{{title}}</span>
    </router-link>
</template>

<script>


export default {
	name: "BlogPreview",
    props: {
        title: String,
        image: Object,
        blogId: String
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
		font-family: "Spectral", serif;
		// text-transform: uppercase;
		font-weight: 600;
		font-size: 16px;
		line-height: 32px;
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
		width: 240px;
		object-fit: cover;
	}
	@media only screen and (max-width: 1112px) {
		.blog-pic {
			height: 220px;
			width: 220px;
		}
		.blog-tag-text {
			line-height: 22px;
		}
	}
	@media only screen and (max-width: 768px) {
		margin-bottom: 32px;
		.blog-tag-text {
			margin: 32px;
			line-height: 32px;
		}
		.blog-pic {
			height: 280px;
			width: 280px;
		}
    }
}
</style>
