<template>
	<header>
		<div class="overlay">
			<h2>All set!</h2>
			<p>Thank you for trusting me with your e-mail address. I promise to keep it safe and will only send you stuff I know you'll love.</p>
			<p>If you ever feel that your interests change because you know, life happens, feel free to unsubscribe.</p>
			<p>You will be redirected back to the website in 7 seconds or you can click <span class="clickable" @click="goBack()">here</span> to go back now.</p>
		</div>
	</header>
</template>

<script>

export default {
	name: "ThanksForSigningUp",
	methods: {
		goBack() {
			history.back()
		}
	},
	created() {
		setTimeout(() => this.goBack(), 7000);
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/main.scss";
// This is in unscss style so that I could paste it in notepad and send 1 html file to the interwebs.
header {
	width: 100%;
	max-width: 100%;
	background-image: url(../assets/Darkheader.jpg);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-color: $primary-color;
	height: 100vh;
	color: $text-darkbg;
	p {
		color: $text-darkbg;
		text-align: center;
		font-size: 1.2rem;
		min-width: 400px;
		max-width: 50%;
	}
	p + p{
		font-size: 1rem;
	}
	.clickable {
		text-decoration: underline;
		cursor: pointer;
	}
	.overlay {
		height: 100%;
		width: 100%;
		background-color: RGBA(0,0,0,0.6);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
}
h2 {
	display: inline-block;
	font-size: 64px;
	text-align: center;
}

</style>
