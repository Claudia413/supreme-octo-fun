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
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
			<!-- <router-link to="/guide">Guide</router-link> -->
			<router-link to="/blog">Blog</router-link>
			<!-- <router-link to="/contact">Contact</router-link> -->
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
		cursor: pointer;
		.hex {
			height: 96px;
			width: 97px;
			position: absolute;
			filter: drop-shadow(-2px 0 2px #29292947);
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
			background: -webkit-linear-gradient(left top, #FEDB37, #FDB931, #9f7928, #8A6E2F);
			background: -webkit-linear-gradient(left top, #ac6943, #fbd1c1, #ab6943, #faf4ed);
			-webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
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
	@media only screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
}
</style>
