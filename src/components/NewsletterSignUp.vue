<template>
	<div class="sign-up">
		<form action="https://claudiaengelsman.us3.list-manage.com/subscribe/post" method="POST">
            <input type="hidden" name="u" value="629c031bdb910f99adde2fc0f">
            <input type="hidden" name="id" value="d3e968d617">

            <input type="text"
                   name="MERGE1"
                   id="MERGE1"
                   size="25"
                   value=""
                   placeholder="Name"
                   class="sign-up">
            <input type="email"
                   autocapitalize="off"
                   autocorrect="off"
                   name="MERGE0"
                   id="MERGE0"
                   size="25"
                   value=""
                   placeholder="E-mail address"
                   class="sign-up">
            <input type="submit" value="Subscribe" class="button mt-2">
		</form>
	</div>
</template>

<script>
export default {
	name: "NewsletterSignUpForm"
};
</script>

<style scoped lang="scss">
@import "../assets/_variables.scss";

form {
    .sign-up {
		display: block;
		border: none;
		height: 24px;
		width: 256px;
		color: $primary-bright;
		margin-bottom: 16px;
		padding: 8px;
	}
}

</style>
