<template>
	<div class="blog">
		<MenuSlide/>
        <header>
            <prismic-image :field="blog.header" class="cover"/>
            <prismic-rich-text :field="blog.title" class="title"/>
        </header>
        <prismic-rich-text :field="blog.subtitle"/>
        <section v-for="(slice, index) in slices" :key="'slice-' + index" class="content">
        <template v-if="slice.slice_type === 'blog_text_block'">
            <prismic-rich-text :field="slice.primary.section_title"/>
            <prismic-rich-text :field="slice.primary.section_text"/>

        </template>
        <template v-else-if="slice.slice_type === 'image_with_caption'">
            <prismic-rich-text :field="slice.primary.image_description"/>
            <prismic-image :field="slice.primary.image" />
        </template>
        </section>
	</div>
</template>

<script>
// @ is an alias to /src
import HeaderAnimation from "@/components/HeaderAnimation.vue";
import MenuSlide from "@/components/MenuSlide.vue";

export default {
	name: "blogPost",
	data() {
		return {
            blog: {
                title: [],
                subtitle: [],
                header: {}
            },
            slices: []
		};
	},
	components: {
		MenuSlide,
	},
	methods: {

		getContent(uid) {
            this.$prismic.client.getByUID('blogpost', uid).then((document) => {
                // Can't simply put the result in an empty blog object without console erros about undefined before its done loading. So we set them individually with starting empty objects and arrays
                this.blog.title = document.data.title
                this.blog.subtitle = document.data.subtitle
                this.blog.header = document.data.blog_image
                this.slices = document.data.body
            });
        },
	},
	created () {
    this.getContent(this.$route.params.uid);
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";

.blog {
    background-color: $body-bg;
    .content {
        width: 100%;
        max-width: 1400px;
        h2 {
            color: $primary-bright;
            font-family: 'Spectral', sans-serif;
            line-height:39px;
            font-size: 23px;
            }
        p {
            line-height: 26px;
        }
    }
}

header {
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
    .title {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
}

</style>