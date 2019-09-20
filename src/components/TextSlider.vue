<template>
	<section class="slideit full-block" :class="backgroundColor">
		<div class="arrow" @click="incrementSlideIndex(-1)">
			<span class="fas fa-chevron-left"></span>
		</div>
		<transition name="fade-out" mode="out-in">
			<div
				class="number"
				v-bind:key="slideIndex"
				:class="numberColor"
			>{{slideIndex>9? '' : '0'}}{{slideIndex}}</div>
		</transition>
		<div class="slider">
			<h4 :class="titleColor">{{title}}</h4>
			<transition-group name="fade" mode="out-in">
				<div v-for="n in numberOfSlides" :key="n">
					<p	class="inspiration"
						:class="textColor"
						v-show="slideIndex === n">
						<slot :name="'slide'+n"></slot>
					</p>
				</div>
			</transition-group>
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
		numberOfSlides: Number,
		backgroundColor: {
			type: String,
			default: "bg-sec"
		},
		numberColor: {
			type: String,
			default: "white"
		},
		titleColor: {
			type: String,
			default: "text-color"
		},
		textColor: {
			type: String,
			default: "color-primary"
		}
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
	&.bg-sec {
		background-color: $secondary-color;
	}
	&.bg-light {
		background-color: white;
	}
	.number {
		text-align: center;
		width: 240px;
		position: absolute;
		left: calc(50% - 120px);
		opacity: 1;
		font-size: 252px;
		bottom: calc(50% - 153px);
		z-index: 0;
		&.white {
			color: white;
		}
		&.grey {
			color: #cacaca;
		}
	}
	.slider {
		opacity: 1;
		max-width: 70%;
		text-align: center;
		z-index: 20;
		min-height: 180px;
		.inspiration {
			font-size: 24px;
			line-height: 1.5rem;
			&.color-primary {
				color: $primary-bright;
			}
			@media screen and (max-width: 496px) {
				font-size: 1rem;
			}
		}
		h4 {
			margin-bottom: 48px;
			&.text-color {
				color: $text-color;
			}
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
