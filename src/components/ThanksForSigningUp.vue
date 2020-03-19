<template>
	<header>
		<div class="overlay">
			<h2>All set!</h2>
			<p>Thank you for trusting me with your e-mail address. I promise to keep it safe and will only send you stuff I know you'll love.</p>
			<p>If you ever feel that your interests change because you know, life happens, feel free to unsubscribe.</p>
			<p>PS. If you can't wait for the website to launch like me, feel free to get in touch on <span><a href="https://www.instagram.com/claudia414" target="_blank">Instagram</a></span>, <span><a href="https://twitter.com/Claudia_blonde" target="_blank">Twitter</a></span>, or just send me an <span><a href="mailto:claudiaengelsman@gmail.com">email</a></span>. We don't have to wait for this website to launch to get to know each other =)</p>
		</div>
	</header>
</template>

<script>


export default {
	name: "ThanksForSigningUp",
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
	a {
		text-decoration: underline;
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
