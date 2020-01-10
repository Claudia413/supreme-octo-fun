<template>
  <div>
    <prismic-rich-text :field="fields.title"/>
    <prismic-image :field="fields.header"/>
    <prismic-rich-text :field="fields.subtitle"/>
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
      }
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
        })
    }
  },
  created () {
    this.getContent();
  }
}
</script>