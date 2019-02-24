<template>
	<div class="icon-bar">
		<a href="#" class="hex-background">
			<i class="fab fa-instagram"></i>
		</a>
		<a href="#" class="hex-background">
			<i class="fab fa-pinterest"></i>
		</a>
		<a href="#" class="hex-background">
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
    width: 180px;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

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
        opacity: 1;
        transition: 0.3s opacity ease;
        &:hover, &:focus {
            opacity: 0.6;
            transition: 0.3s opacity ease;
            color: $text-color;
            font-weight: 500;
        }
    }

    .fab {
        font-size: 24px;
        width: 23px;
        height: 23px;
    }

    .fa-instagram {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

</style>
