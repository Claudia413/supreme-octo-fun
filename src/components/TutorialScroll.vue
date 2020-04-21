<template>
	<aside>
		<section class="tutorial">
            <div v-if="loading"><h6>LOADING</h6></div>
            <h2>{{tutorial.title.text}}</h2>
            <prismic-rich-text :field="tutorial.introduction" class=""/>
            <section v-for="(slice, index) in slices" :key="'slice-' + index" class="">
            <template v-if="slice.slice_type === 'step'">
						<h2 class="heading" >{{slice.primary.step_name[0].text}}</h2>
						<prismic-rich-text :field="slice.primary.step_text" class="text"/>
                        <prismic-image :field="slice.primary.image" class="tutorial-image" />
					</template>
            </section>
		</section>
	</aside>
</template>

<script>

export default {
	name: "TutorialScroll",
    props: {
        tutorialuid: String
        },
    components: {

    },
    data() {
        return {
            tutorial: {
                title: [
                    { text: ""}
                ],
                introduction: []
            },
            slices: [],
            loading: true
        }
    },
    methods: {
        getTutorial(tutorialuid) {

            this.$prismic.client.getByUID('step-by-step-tutorial', tutorialuid).then((document) => {
                this.tutorial.title.text = document.data.title[0].text
                this.tutorial.introduction = document.data.introduction
                this.slices = document.data.body;
                console.log('document returned', document);
                this.loading=false;
            });

        },
    },
    mounted() {
        this.getTutorial(this.tutorialuid);
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/_variables.scss";

aside {
    height: auto;
    text-align: left;
    padding: 48px;
    box-shadow: 2px 0 3px #80808047;
    width: 600px;
    img {
        max-width: 100%;
    }

    .heading {
        color: $primary-bright;
        line-height: 36px;
        font-size: 18px;
    }
}
</style>
