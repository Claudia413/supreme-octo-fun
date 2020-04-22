<template>
	<aside>
		<section class="tutorial">
            <div v-if="loading" class="loader"><i class="far fa-hourglass"></i></div>
            <h2>{{tutorial.title.text}}</h2>
            <prismic-rich-text :field="tutorial.introduction" class=""/>
            <section v-for="(slice, index) in slices" :key="'slice-' + index" class="">
            <template v-if="slice.slice_type === 'step'">
						<h2 class="heading" >{{slice.primary.step_name[0].text}}</h2>
						<prismic-rich-text :field="slice.primary.step_text" class="text"/>
                        <prismic-image :field="slice.primary.image" class="tutorial-image" />
					</template>
            </section>
            <div v-if="!loading" class="clickable" @click="returnToArticle()"><p>Return to where I was in the article</p></div>
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
                this.loading=false;
            });

        },
        returnToArticle() {
            this.$emit('hideTutorial')
        }
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
    width: 90%;
    max-width: 600px;
    img {
        max-width: 100%;
    }
    .loader {
        text-align: center;
        .fa-hourglass {
            font-size: 48px;
            background: -webkit-linear-gradient(left top, #ac6943, #fbd1c1, #ab6943, #faf4ed);
            opacity: 0.9;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transform: rotate(0deg);
            animation-name: rotate;
            animation-duration: 1.5s;
            animation-delay: 0.1s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            animation-direction: alternate-reverse;
        }
    }
    .heading {
        color: $primary-bright;
        line-height: 36px;
        font-size: 18px;
    }
    .clickable {
        cursor: pointer;
        &:hover {
            font-weight: bolder;
        }
    }

    @keyframes rotate {
        from {transform: rotate(-5deg);}
        to {transform: rotate(185deg);}
    }
}
</style>
