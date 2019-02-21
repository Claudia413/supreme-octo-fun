<template>
	<transition name="slide-in">
		<div class="menu-to-slide" :class="menuOpen? 'active' : ''">
			<div class="menu-button" @click="menuOpen=!menuOpen">
				<div class="triangle-top"></div>
				<img src="../assets/Menu-compass.svg" class="menu-icon">
				<div class="bar"></div>
				<div class="triangle-bottom"></div>
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
	}
	.menu-button {
		grid-area: menu-button;
		display: flex;
		flex-direction: column;
		position: relative;
		.triangle-top {
			width: 0;
			height: 0;
			border-bottom: 47.5px solid white;
			border-left: 48px solid transparent;
		}
		.triangle-bottom {
			width: 0;
			height: 0;
			border-top: 47.5px solid white;
			border-left: 48px solid transparent;
		}
		.bar {
			width: 48px;
			height: 1px;
			background-color: white;
		}
		.menu-icon {
			position: absolute;
			right: 2px;
			left: 12px;
			top: 0;
			bottom: 0;
			height: 32px;
			margin: auto;
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
	a {
		text-decoration: none;
		color: inherit;
		margin-bottom: 16px;
	}
}
</style>
