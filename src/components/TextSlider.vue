<template>
	<section class="slideit full-block">
		<div class="arrow" @click="incrementSlideIndex(-1)">
			<span class="fas fa-chevron-left"></span>
		</div>
		<transition name="fade-out" mode="out-in">
			<div class="number" v-bind:key="slideIndex">0{{slideIndex}}</div>
		</transition>
		<div class="slider">
			<h4>{{title}}</h4>
			<transition name="fade" mode="out-in">
				<p v-for="n in numberOfSlides" class="inspiration" v-if="slideIndex === n" :key="n">
					<slot :name="'slide'+n"></slot>
				</p>
			</transition>
		</div>
		<div class="arrow" @click="incrementSlideIndex(1)">
			<span class="fas fa-chevron-right"></span>
		</div>
	</section>
</template>

<script>
export default {
	name: "TextSlider",
	data() {
		return {
			slideIndex: 1
		};
	},
	props: {
		title: String,
		numberOfSlides: Number
	},
	methods: {
		incrementSlideIndex(number) {
			if (this.slideIndex + number > this.numberOfSlides) {
				this.slideIndex = 1;
			} else if (this.slideIndex + number > 0) {
				this.slideIndex = this.slideIndex + number;
			} else {
				this.slideIndex = this.numberOfSlides;
			}
		}
	}
};
</script>

<style scoped lang="scss">
@import "../assets/_variables.scss";

.slideit {
	height: 400px;
	grid-area: slider;
	justify-content: space-between;
	background-color: $secondary-color;
	font-family: "Abel", sans-serif;
	padding: 0 40px;
	position: relative;
	.arrow {
		font-size: 24px;
		cursor: pointer;
		height: 100%;
		width: 40px;
		display: flex;
		.fas {
			color: #808080;
			margin: auto;
		}
	}
	.number {
		text-align: center;
		width: 240px;
		position: absolute;
		left: calc(50% - 120px);
		color: white;
		opacity: 1;
		font-size: 240px;
		bottom: calc(50% - 153px);
		z-index: 0;
	}
	.slider {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		opacity: 1;
		max-width: 70%;
		text-align: center;
		z-index: 20;
		.inspiration {
			font-size: 24px;
			color: $primary-bright;
		}
	}
	.fade-enter-active {
		animation: fade-in 0.3s;
	}
	.fade-leave-active {
		animation: fade-in 0.3s reverse;
	}
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	.fade-out-enter-active {
		animation: fade-out 0.3s reverse;
	}
	.fade-out-leave-active {
		animation: fade-out 0.3s;
	}
	@keyframes fade-out {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
}
</style>
