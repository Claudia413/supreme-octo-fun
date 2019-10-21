<template>
	<header>
		<div class="overlay">
			<h2>Almost there!</h2>
			<p>Head over to your email inbox and you'll find an email from me, click the confirmation link in there.</p>
			<p>Then we're all set. You will get an e-mail as soon as the website goes live!</p>
			<p>PS. If the email doesn't show up in a minute, check your spam folder, it may have ended up there. If you want it to show up in your normal inbox you can mark it as not spam, or add my email to your contact list.</p>
		</div>
	</header>
</template>

<script>


export default {
	name: "AlmostThere",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/main.scss";
// This is in unscss style so that I could paste it in notepad and send 1 html file to the interwebs.
header {
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
