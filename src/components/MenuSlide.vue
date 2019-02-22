<template>
	<transition name="slide-in">
		<div class="menu-to-slide" :class="menuOpen? 'active' : ''">
			<div class="menu-button" @click="menuOpen=!menuOpen">
				<img
					src="./../assets/hexagonal.svg"
					alt="background hexagon for sliding out the menu"
					class="hex"
				>
				<i class="far fa-compass menu-icon"></i>
			</div>
			<div class="menu-list">
				<a href="#">Home</a>
				<a href="#">About</a>
				<a href="#">Guide</a>
				<a href="#">Blog</a>
				<a href="#">Contact</a>
				<!-- Icons here -->
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: "MenuSlide",
	data() {
		return {
			menuOpen: false
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/_variables.scss";

.menu-to-slide {
	display: grid;
	grid-template-columns: 48px 200px;
	grid-template-rows: 1fr 96px 1fr;
	grid-template-areas:
		". menu"
		"menu-button menu"
		". menu";
	z-index: 9999;
	position: fixed;
	top: 0;
	bottom: 0;
	right: -190px;
	transition: right 0.5s ease;
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
		grid-area: menu-button;
		display: flex;
		flex-direction: column;
		position: relative;
		.hex {
			height: 96px;
			position: absolute;
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
	grid-area: menu;
	display: flex;
	flex-direction: column;
	background-color: white;
	align-items: center;
	padding: 20px;
	// box-shadow: -2px 0 5px rgba(128, 128, 128, 0.35);
	a {
		text-decoration: none;
		color: inherit;
		margin-bottom: 16px;
	}
}
</style>
