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
                   class="sign-up"
                   aria-label="Name">
              <input type="email"
                   autocapitalize="off"
                   autocorrect="off"
                   name="MERGE0"
                   id="MERGE0"
                   size="25"
                   value=""
                   placeholder="E-mail address"
                   class="sign-up"
                   aria-label="E-mail address">

              <label class="checkbox" for="group_1">
                     <input type="checkbox" id="group_1" name="group[28069][1]" value="1" class="av-checkbox">
                     <span>Coding</span>
              </label>
              <label class="checkbox" for="group_2">
                     <input type="checkbox" id="group_2" name="group[28069][2]" value="1" class="av-checkbox">
                     <span>Moving to New Zealand</span>
              </label>
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
       label {
              color: white;
              display: block;
              font-family: 'Karla', sans-serif;
              font-size: 14px;
              margin-bottom: 12px;
              span {
                     font-family: inherit;
              }
       }
       .av-checkbox {
              cursor: pointer;
              margin-left: 0;
       }
       .mt-2 {
              margin-top: 12px;
       }
}

</style>
