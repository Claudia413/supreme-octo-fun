<template>
	<div class="overview">
		<HeaderAnimation class="headeranimation">
            <template v-slot:title>
				<h1>Welcome to the blog you selected!</h1>
			</template>
		</HeaderAnimation>
		<MenuSlide/>
        <prismic-rich-text :field="blog.title"/>
        <prismic-image :field="blog.header" class="blog header"/>
        <prismic-rich-text :field="blog.subtitle"/>
    <section v-for="(slice, index) in slices" :key="'slice-' + index">
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
		HeaderAnimation,
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
            console.log('this.blog', this.blog );
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
  .header {
    max-width: 100%;
  }
}

</style>