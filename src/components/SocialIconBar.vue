<template>
	<div class="icon-bar">
		<a href="http://instagram.com/claudia414" target="_blank" class="hex-background">
			<i class="fab fa-instagram"></i>
		</a>
		<a href="https://pinterest.com/djerra/" target="_blank" class="hex-background">
			<i class="fab fa-pinterest"></i>
		</a>
		<a href="https://www.linkedin.com/in/claudia-engelsman/" target="_blank" class="hex-background">
			<i class="fab fa-linkedin"></i>
		</a>
	</div>
</template>

<script>
export default {
	name: "SocialIconBar"
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
        &:hover, &:focus {
            .fab {
                transition: 0.3s all ease;
                opacity: 1;
            }
        }
    }

    .fab {
        font-size: 24px;
        width: 23px;
        height: 23px;
        background: -webkit-linear-gradient(left top, #FEDB37, #FDB931, #9f7928, #8A6E2F);
        opacity: 0.8;
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
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

</style>
