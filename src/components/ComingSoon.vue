<template>
	<header>
		<div class="overlay">
			<h2>Coming soon</h2>
			<p>A website to help you learn how to build a website from scratch.</p>
			<p>No previous skills required</p>
			<p>Sign up for the newsletter to be informed when the site launches. This will be March 18th 2020. I can't wait until then and I can share it with you!</p>
			<NewsletterSignUp/>
		</div>
	</header>
</template>

<script>
import NewsletterSignUp from "@/components/NewsletterSignUp.vue"

export default {
	name: "ComingSoon",
	components: {
			NewsletterSignUp
		}
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
	}
	.overlay {
		height: 100%;
		width: 100%;
		background-color: RGBA(0,0,0,0.5);
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
