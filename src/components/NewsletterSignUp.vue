<template>
       <div class="sign-up">
       <form action="https://claudiaengelsman.us3.list-manage.com/subscribe/post" method="POST">
              <input type="hidden" name="u" value="629c031bdb910f99adde2fc0f">
              <input type="hidden" name="id" value="d3e968d617">
              <!-- people should not fill these in and expect good things -->
              <div class="field-shift" aria-label="Please leave the following three fields empty">
                     <label for="b_name">Name: </label>
                     <input type="text" name="b_name" tabindex="-1" value="" placeholder="Freddie" id="b_name">

                     <label for="b_email">Email: </label>
                     <input type="email" name="b_email" tabindex="-1" value="" placeholder="youremail@gmail.com" id="b_email">

                     <label for="b_comment">Comment: </label>
                     <textarea name="b_comment" tabindex="-1" placeholder="Please comment" id="b_comment"></textarea>
              </div>
              <!-- Back to normal form fields -->
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

              <!-- <label class="checkbox" for="group_1">
                     <input type="checkbox" id="group_1" name="group[28069][1]" value="1" class="av-checkbox">
                     <span></span>
                     Coding
              </label> -->
              <!-- <label class="checkbox" for="group_2">
                     <input type="checkbox" id="group_2" name="group[28069][2]" value="1" class="av-checkbox">
                     <span></span>
                     Moving to New Zealand
              </label> -->
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
       .field-shift {
              left: -9999px;
              position: absolute;
       }
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
              display: flex;
              align-items: center;
              color: white;
              font-family: "Karla", "Average Sans", sans-serif;
              font-size: 14px;
              margin-bottom: 12px;
              span {
                     font-family: inherit;
              }
       }
       input[type=checkbox] {
              visibility: hidden;
              margin-right: 16px;
       }
       .mt-2 {
              margin-top: 12px;
       }
       .checkbox {
              width: 200px;
              margin: 16px 0;
              position: relative;
       }
       .checkbox span {
              cursor: pointer;
              position: absolute;
              width: 20px;
              height: 20px;
              top: 0;
              border-radius: 0;
              background: #fcfff4;
       }

       .checkbox span:after {
              filter: alpha(opacity=0);
              opacity: 0;
              content: '';
              position: absolute;
              width: 9px;
              height: 5px;
              background: transparent;
              top: 4px;
              left: 4px;
              border: 3px solid $primary-bright;
              border-top: none;
              border-right: none;

              -webkit-transform: rotate(-45deg);
              -moz-transform: rotate(-45deg);
              -o-transform: rotate(-45deg);
              -ms-transform: rotate(-45deg);
              transform: rotate(-45deg);
       }

       .checkbox span:hover::after {
              filter: alpha(opacity=30);
              opacity: 0.5;
       }

       .checkbox input[type=checkbox]:checked + span:after {
              filter: alpha(opacity=100);
              opacity: 1;
       }
}

</style>
