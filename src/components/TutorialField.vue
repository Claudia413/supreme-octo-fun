<template>
<div>
	<section class="tutorial-field" v-for="n in numberOfSteps" :key="n">
        <div class="text-block">
            <slot :name="'step'+n"></slot>
        </div>
        <div class="imagery">
            <slot :name="'preview'+n"></slot>
            <slot :name="'code'+n" class="code"></slot>
        </div>
    </section>
</div>
</template>

<script>
export default {
	name: "Footer",
	props: {
        numberOfSteps: Number
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/_variables.scss";

.tutorial-field {
    display: grid;
	grid-gap: 0;
	grid-template-columns: repeat(2, 50%);
    grid-template-rows: 700px;
	@media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
    .text-block {
        background-color: $primary-color;
        color: $text-darkbg;
    }
    p {
        color: $text-darkbg;
    }
}

.imagery {
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 768px) {
        flex-direction: row-reverse;
    }
    .split-block {
        height: 50%;
        overflow-y: auto;
        @media only screen and (max-width: 768px) {
            width: 50%;
            height: auto;
        }
    }
    .preview {
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .code {
        background-color: $background-color-grey;
        padding: 8px;
        p {
            margin: 0;
            color: $text-darkbg;
        }
        p ~ p {
            margin-left: 16px;
        }
        p:last-child {
            margin-left: unset;
        }
        p.start {
            margin-left: unset;
        }
        .extra {
            margin-left: 32px;
        }
    }
}

</style>
