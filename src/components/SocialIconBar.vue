<template>
	<div class="icon-bar">
		<a v-if="instagram" href="http://instagram.com/claudia414" target="_blank" rel="noreferrer" class="hex-background">
			<i class="fab fa-instagram">Instagram</i>
		</a>
		<a v-if="pinterest" href="https://pinterest.com/djerra/" target="_blank" rel="noopener" class="hex-background">
			<i class="fab fa-pinterest">Pinterest</i>
		</a>
		<a v-if="linkedIn" href="https://www.linkedin.com/in/claudia-engelsman/" target="_blank" rel="noreferrer" class="hex-background">
			<i class="fab fa-linkedin">LinkedIn</i>
		</a>
        <a v-if="twitter" href="https://twitter.com/claudia_blonde" target="_blank" rel="noreferrer" class="hex-background">
            <i class="fab fa-twitter">Twitter</i>
        </a>
        <a v-if="website" href="https://www.claudiaengelsman.com" target="_blank" rel="noreferrer" class="hex-background">
            <i class="fas fa-globe-europe">Website</i>
        </a>
	</div>
</template>

<script>
export default {
    name: "SocialIconBar",
    props: {
		instagram: {
			type: Boolean,
			default: true
		},
		linkedIn: {
			type: Boolean,
			default: true
		},
		pinterest: {
			type: Boolean,
			default: true
        },
        twitter: {
            type: Boolean,
            default: true
        },
        website: {
            type: Boolean,
            default: false
        }
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/_variables.scss";

.icon-bar {
    display: flex;
    width: 156px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .hex-background {
        height: 48px;
        width: 48px;
        background-image: url("./../assets/hexagonal.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-origin: border-box;
        background-size: contain;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        margin: auto;
        &:hover, &:focus {
            .fab, .fas {
                transition: 0.3s all ease;
                opacity: 1;
            }
        }
    }
    .fab, .fas {
        font-size: 24px;
        width: 23px;
        height: 23px;
        background: -webkit-linear-gradient(left top, #FEDB37, #FDB931, #9f7928, #8A6E2F);
        background: -webkit-linear-gradient(left top, #a66251, #facec8, #a26050, #faf3f3);
        background: -webkit-linear-gradient(left top, #ac6943, #fbd1c1, #ab6943, #faf4ed);
        opacity: 0.9;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: 0.3s all ease;
        &:hover, &focus {
            transition: 0.3s all ease;
            opacity: 1;
            // background: -webkit-linear-gradient(left top, #FFFFAC, #FEDB37, #FDB931, #5d4a1f);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    .fa-instagram {
        margin-left: 2px;
    }
    @media only screen and (max-width: 768px) {
        flex-wrap: wrap-reverse;
    }
}

</style>
