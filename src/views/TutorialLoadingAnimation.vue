<template>
	<div class="tutorial">
        <header><h3>How to create a simple loading animation with CSS</h3></header>
		<MenuSlide/>
		<section class="intro-text text-block">
			<h3>How to create a simple loading animation with CSS</h3>
			<p>The other day at Tellow I needed to create a loading animation to show our users while they waited for the app to load. I could have got one from the internet but instead decided to try and create one from scratch. It was supposed to have blinking dots that in increased in size one by one. The result you can find below and we will go through the 5 steps to recreate this yourself.</p>
		</section>
        <TutorialField :numberOfSteps="5">
            <!-- Step 1 -->
            <template v-slot:step1>
                <p>Let's get started with the html structure for the dots. For this one we just need a box to hold the 3 dots and the dots. I went with a div and spans because spans will appear next to each other by default.</p>
            </template>
            <template v-slot:preview1 class="preview">
                <div class="preview split-block">
                </div>
            </template>
            <template v-slot:code1>
                <div class="code split-block code-font">
                <p>&lt;div class="loader"&gt;</p>
                    <p>&lt;span class="dot first">&lt;/span&gt;</p>
                    <p>&lt;span class="dot middle">&lt;/span&gt;</p>
                    <p>&lt;span class="dot last">&lt;/span&gt;</p>
                <p>&lt;/div&gt;</p>
                </div>
            </template>
            <!-- Step 2 -->
            <template v-slot:step2>
                <p>With just the HTML but no styling, we're not yet able to see anything yet.</p>
                <p>We'll give the parent div a nice width, height and flexbox display.</p>
                <p>Let's make the spans look like dots with a bit of color and a border-radius for the corners. We'll give them a square size to make sure they seem round when we round of the corners.</p>
                <p>Also let's give them some space to breath by adding a little bit of margin so they don't touch eachother.</p>
                <p>(For viewing how the dots appear inside their parent div, there is an outline around them which is not set in our example code)</p>
            </template>
            <template v-slot:preview2 class="preview">
                <div class="preview split-block">
                    <div class="loader">
                        <span class="dot first"></span>
                        <span class="dot middle"></span>
                        <span class="dot last"></span>
                    </div>
                </div>
            </template>
            <template v-slot:code2>
                <div class="code split-block code-font">
                    <p>.loader {</p>
                    <p>width: 250px;</p>
                    <p>height: 80px;</p>
                    <p>display: flex;</p>
                    <p class="start">}</p>
                    <p class="start">.dot {</p>
                    <p>height: 50px;</p>
                    <p>width: 50px;</p>
                    <p>margin: 10px;</p>
                    <p>background-color: #284B63;</p>
                    <p>border-radius: 50%;</p>
                    <p>}</p>
                </div>
            </template>
            <!-- Step 3 -->
            <template v-slot:step3>
                <p>Now that we have these 3 dots, it is time to get this animation party started!</p>
                <p>Let's first set up the animation with keyframes. We want the dots to grow in size and then shrink back down. So we will start at the 'from' with a smaller size and then for the final state the 'to'', we will give them a bigger size. Keep in mind to keep the width and height equal to keep them circular.</p>
                <p>We will add the animation keyframes with the property 'animation-name' and if we later want to reuse these keyframes, we can by adding them to another class with that same property.</p>
                <p>Then our animation needs a duration and it needs to know how many times it needs to play. We can set this to infinite as we want our animation to keep going as long as the app is loading. For duration we will start with 1second, just to see how that goes.</p>
                <p>The final thing we will do here is make the dots appear in the center of its parent, just a bit of a tweak.</p>
            </template>
            <template v-slot:preview3 class="preview">
                <div class="preview split-block">
                    <div class="loader step3">
                        <span class="dot first step3"></span>
                        <span class="dot middle step3"></span>
                        <span class="dot last step3"></span>
                    </div>
                </div>
            </template>
            <template v-slot:code3>
                <div class="code split-block code-font">
                    <p>.loader {</p>
                    <p>width: 250px;</p>
                    <p>height: 80px;</p>
                    <p>display: flex;</p>
                    <p>justify-content: center;</p>
                    <p>align-items: center;</p>
                    <p class="start">}</p>
                    <p class="start">.dot {</p>
                    <p>height: 50px;</p>
                    <p>width: 50px;</p>
                    <p>margin: 10px;</p>
                    <p>background-color: #284B63;</p>
                    <p>border-radius: 50%;</p>
                    <p>animation-iteration-count: infinite;
                    <p>animation-name: grow;</p>
                    <p>animation-duration: 1s;</p>
                    <p>}</p>
                    <p class="start">@keyframes grow {</p>
                    <p>from {</p>
                        <p class="extra">height: 2rem;<p>
                        <p class="extra">width: 2rem;</p>
                    <p>}</p>
                    <p>to {</p>
                        <p class="extra">height: 3rem;</p>
                        <p class="extra">width: 3rem;</p>
                    <p>}</p>
                <p>}</p>
                </div>
            </template>
            <!-- Step 4 -->
            <template v-slot:step4>
                <p>Hmm this wasn't really the plan, it would be nicer if they wouldn't all start at the same time. Let's add a delay for the second and third dot so it seems they are taking turns. To get the right timing, the first one needs to start with the same delay after the last one. To get the correct timing we can divide the time by 3. 1second divided by 3 doesn't really go well with rounding so we'll change our timing to 0.6sec for the whole animation. Then we will give the second dot a 0.2sec delay and the last one 0.4sec.</p>
            </template>
            <template v-slot:preview4 class="preview">
                <div class="preview split-block">
                    <div class="loader step3">
                        <span class="dot first step3 step4"></span>
                        <span class="dot middle step3 step4"></span>
                        <span class="dot last step3 step4"></span>
                    </div>
                </div>
            </template>
            <template v-slot:code4>
                <div class="code split-block code-font">
                    <p>.loader {</p>
                    <p>width: 250px;</p>
                    <p>height: 80px;</p>
                    <p>display: flex;</p>
                    <p>justify-content: center;</p>
                    <p>align-items: center;</p>
                    <p class="start">}</p>
                    <p class="start">.dot {</p>
                    <p>height: 50px;</p>
                    <p>width: 50px;</p>
                    <p>margin: 10px;</p>
                    <p>background-color: #284B63;</p>
                    <p>border-radius: 50%;</p>
                    <p>animation-iteration-count: infinite;
                    <p>animation-name: grow;</p>
                    <p>animation-duration: 0.6s;</p>
                    <p>}</p>
                    <p>.middle {</p>
                    <p>animation-delay: 0.2s;</p>
                    <p>}</p>
                    <p>.last {</p>
                    <p>animation-delay: 0.4s;</p>
                    <p>}</p>
                    <p class="start">@keyframes grow {</p>
                    <p>from {</p>
                        <p class="extra">height: 2rem;<p>
                        <p class="extra">width: 2rem;</p>
                    <p>}</p>
                    <p>to {</p>
                        <p class="extra">height: 3rem;</p>
                        <p class="extra">width: 3rem;</p>
                    <p>}</p>
                <p>}</p>
                </div>
            </template>
            <!-- Step 5 -->
            <template v-slot:step5>
                <p>Oops that was unexpected, by delaying them they are being pushed to the side by the growing dot. This has an easy fix though, the 'animation-direction' property determines if our animation moves forward, or backwards or goes forward first and then in reverse with alternate. Adding alternate has fixed our problem of the flickering dots.</p>
                <p>They still push eachother a bit to the side, but now it looks smooth and personally I quite like that they move around a bit instead of being in the same place the whole time.</p>
            </template>
            <template v-slot:preview5 class="preview">
                <div class="preview split-block">
                    <div class="loader step3">
                        <span class="dot first step3 step4 step5"></span>
                        <span class="dot middle step3 step4 step5"></span>
                        <span class="dot last step3 step4 step5"></span>
                    </div>
                </div>
            </template>
            <template v-slot:code5>
                <div class="code split-block code-font">
                    <p>.loader {</p>
                    <p>width: 250px;</p>
                    <p>height: 80px;</p>
                    <p>display: flex;</p>
                    <p>justify-content: center;</p>
                    <p>align-items: center;</p>
                    <p class="start">}</p>
                    <p class="start">.dot {</p>
                    <p>height: 50px;</p>
                    <p>width: 50px;</p>
                    <p>margin: 10px;</p>
                    <p>background-color: #284B63;</p>
                    <p>border-radius: 50%;</p>
                    <p>animation-iteration-count: infinite;
                    <p>animation-name: grow;</p>
                    <p>animation-duration: 0.6s;</p>
                    <p>animation-direction: alternate;</p>
                    <p>}</p>
                    <p>.middle {</p>
                    <p>animation-delay: 0.2s;</p>
                    <p>}</p>
                    <p>.last {</p>
                    <p>animation-delay: 0.4s;</p>
                    <p>}</p>
                    <p class="start">@keyframes grow {</p>
                    <p>from {</p>
                        <p class="extra">height: 2rem;<p>
                        <p class="extra">width: 2rem;</p>
                    <p>}</p>
                    <p>to {</p>
                        <p class="extra">height: 3rem;</p>
                        <p class="extra">width: 3rem;</p>
                    <p>}</p>
                <p>}</p>
                </div>
            </template>
        </TutorialField>
        <section class="text-block">
            <h3>Want to play around with it some more?</h3>
            <p>Check out the code on Codepen here: </p>
        </section>
        <section class="footer-space"></section>
	</div>
</template>

<script>
import MenuSlide from "@/components/MenuSlide.vue";
import TutorialField from "@/components/TutorialField";

export default {
	components: {
        MenuSlide,
        TutorialField
	}
};
</script>


<style lang="scss" scoped>
@import "../assets/_variables.scss";

.tutorial {
    max-width: 100%;
	.mt-2 {
		margin-top: 20px;
    }
    .code-font p {
        font-family: inherit;
        line-height: 20px;
    }
}

header {
	max-width: 100%;
	min-height: 240px;
	background-image: url('../assets/TutorialHeader.jpg');
	background-repeat: none;
	background-size: cover;
	background-color: $background-color-grey;
    overflow: hidden;
    padding: 40px;
}

.loader {
  display: flex;
  height: 80px;
  width: 250px;
  border: 2px dashed blue;
  border-radius: 3px;
  &.step3 {
    justify-content: center;
    align-items: center;
  }
  .dot {
    background-color: $primary-bright;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    margin: 10px;
    &.step3 {
        animation-iteration-count: infinite;
        animation-name: grow;
        animation-duration: 1s;
    }
    &.step4 {
        animation-duration: 0.6s;
        &.middle {
            animation-delay: 0.2s;
        }
        &.last {
            animation-delay: 0.4s;
        }
    }
    &.step5{
        animation-direction: alternate;
    }
  }
}

@keyframes grow {
    from {
        height: 2rem;
        width: 2rem;
    }

    to {
        height: 3rem;
        width: 3rem;
    }
}

.footer-space {
    height: 260px;
}
</style>