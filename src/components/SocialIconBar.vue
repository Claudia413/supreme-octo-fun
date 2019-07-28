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
        color: $text-color;
        transition: 0.3s color ease;
        &:hover, &:focus {
            transition: 0.3s color ease;
            color: #2e3031;
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
