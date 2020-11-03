<template>
	<aside>
        <div class="close clickable"  @click="returnToArticle()">X</div>
		<section class="tutorial">
            <div v-if="loading" class="loader"><i class="far fa-hourglass"></i></div>
            <div class="intro">
                <h2>{{tutorial.title.text}}</h2>
                <prismic-rich-text :field="tutorial.introduction" class=""/>
            </div>
            <section v-for="(slice, index) in slices" :key="'slice-' + index" class="step">
            <template v-if="slice.slice_type === 'step'">
                        <h2 class="heading" >{{slice.primary.step_name[0].text}}</h2>
                        <prismic-rich-text :field="slice.primary.step_text" class="text"/>
                        <prismic-image :field="slice.primary.image" class="step-img" />
                    </template>
            </section>
            <div v-if="!loading" class="clickable align-right" @click="returnToArticle()"><p>Return to where I was in the article {{' >>'}}</p></div>
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
            this.$emit('hide-tutorial');
        }
    },
    mounted() {
        this.getTutorial(this.tutorialuid);
    },
};
</script>

<style  lang="scss">
@import "../assets/_variables.scss";

aside {
    height: auto;
    text-align: justify;
    padding: 12px 16px 48px 48px;
    box-shadow: 2px 0 3px #80808047;
    width: 90%;
    max-width: 640px;
    position: relative;
    @media only screen and (max-width: 768px) {
        padding: 12px 16px 24px 24px;
    }
    p {
        a {
            font-size: inherit;
        }
    }
    .intro, .step {
        padding-right: 36px;
    }
    .intro {
        h2 {
            color: $primary-bright;
        }
    }
    .loader {
        text-align: center;
        height: 100%;
        margin: auto;
        margin-top: 48px;
        .fa-hourglass {
            font-size: 40px;
            color: $yellow;
            transform: rotate(0deg);
            animation-name: rotate;
            animation-duration: 1.5s;
            animation-delay: 0.1s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            animation-direction: alternate-reverse;
        }
    }
    .close {
        display: flex;
        justify-content: flex-end;
        color: $primary-bright;
        opacity: 1;
        font-size: 26px;
        font-weight: bold;
        margin-left: auto;
        position: sticky;
        top: 8px;
    }
    .heading {
        color: $primary-bright;
        line-height: 36px;
        font-size: 18px;
    }
    .step-img {
        max-width: 100%;
        margin-bottom: 24px;
    }
    .clickable {
        cursor: pointer;
        &:hover {
            font-weight: bolder;
        }
    }
    .align-right {
        padding-right: 36px;
        text-align: right;
    }
    @keyframes rotate {
        from {transform: rotate(-5deg);}
        to {transform: rotate(185deg);}
    }
}
</style>
