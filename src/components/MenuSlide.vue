<template>
	<div class="menu-to-slide" :class="menuOpen? 'active' : ''">
		<div class="menu-button" @click="toggleMenu();">
			<img
				src="./../assets/hexagonal.svg"
				alt="background hexagon for sliding out the menu"
				class="hex"
			>
			<i class="far fa-compass menu-icon"></i>
		</div>
		<div class="menu-list">
			<a href="#">Home</a>
			<a href="/about">About</a>
			<a href="#">Guide</a>
			<a href="#">Blog</a>
			<a href="#">Contact</a>
			<SocialIconBar></SocialIconBar>
		</div>
	</div>
</template>

<script>
import SocialIconBar from "@/components/SocialIconBar.vue";

export default {
	name: "MenuSlide",
	data() {
		return {
			menuOpen: false
		};
	},
	components: {
		SocialIconBar
	},
	methods: {
		toggleMenu() {
			this.menuOpen = !this.menuOpen;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/_variables.scss";

.menu-to-slide {
	display: flex;
	flex-direction: row;
	align-items: center;
	z-index: 999;
	position: fixed;
	top: 0;
	bottom: 0;
	right: -223px;
	transition: right 0.5s ease;
	box-shadow: -2px 0 3px #80808047;
	&.active {
		right: 0;
		top: 0;
		bottom: 0;
		transition: right 0.5s ease;
		.menu-button {
			.menu-icon {
				transition: left 0.5s ease, transform 5s;
				left: 32px;
				&:hover {
					transform: rotate(180deg);
					transform-origin: 50% 50%;
					transition: transform 5s, left 0.5s ease;
				}
			}
		}
	}
	.menu-button {
		width: 48px;
		height: 96px;
		display: flex;
		flex-direction: column;
		position: absolute;
		left: -48px;
		.hex {
			height: 96px;
			position: absolute;
			filter: drop-shadow(-2px 0 2px #80808047);
		}
		.menu-icon {
			position: absolute;
			right: 0;
			left: 16px;
			top: 0;
			bottom: 0;
			// it is 33 instead of 32 because transform origin point can be exactly in the middle at 50% 50%
			font-size: 33px;
			height: 33px;
			width: 33px;
			margin: auto;
			color: $text-color;
			transition: left 0.5s ease, transform 5s;
			&:hover {
				transform: rotate(180deg);
				transform-origin: 50% 50%;
				transition: transform 5s, left 0.5s ease;
			}
		}
	}
}
.menu-list {
	width: 230px;
	height: 100%;
	padding: 20px 20px 20px 52px;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	background-color: white;
	align-items: flex-end;
}
</style>
