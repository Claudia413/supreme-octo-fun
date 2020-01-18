<template>
  <div>
    <prismic-rich-text :field="fields.title"/>
    <prismic-image :field="fields.header" class="blog header"/>
    <prismic-rich-text :field="fields.subtitle"/>
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
export default {
  data () {
    return {
      fields: {
        title: [],
        header: {},
        subtitle: []
      },
      slices: []
    };
  },
  methods: {
    getContent () {
      this.$prismic.client.query(
          this.$prismic.Predicates.at('document.type', 'blogpost')
      )
        .then((document) => {
          this.fields.title = document.results[0].data.title;
          this.fields.header = document.results[0].data.blog_image;
          this.fields.subtitle = document.results[0].data.subtitle;
          this.slices = document.results[0].data.body;
          console.log('slices', this.slices)
        })
    }
  },
  created () {
    this.getContent();
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";

.blog {
  .header {
    max-width: 100%;
  }
}

</style>