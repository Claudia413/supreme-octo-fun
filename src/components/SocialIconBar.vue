<template>
  <div class="icon-bar">
    <a
      v-if="instagram"
      href="http://instagram.com/claudia414"
      target="_blank"
      rel="noreferrer"
      class="hex-background"
    >
      <i aria-label="Instagram" class="fab fa-instagram"></i>
    </a>
    <a
      v-if="pinterest"
      href="https://pinterest.com/ClaudiaEngelsman/"
      target="_blank"
      rel="noopener"
      class="hex-background"
    >
      <i aria-label="Pinterest" class="fab fa-pinterest"></i>
    </a>
    <a
      v-if="linkedIn"
      href="https://www.linkedin.com/in/claudia-engelsman/"
      target="_blank"
      rel="noreferrer"
      class="hex-background"
    >
      <i aria-label="LinkedIn" class="fab fa-linkedin"></i>
    </a>
    <a
      v-if="twitter"
      href="https://twitter.com/claudia_blonde"
      target="_blank"
      rel="noreferrer"
      class="hex-background"
    >
      <i aria-label="Twitter" class="fab fa-twitter"></i>
    </a>
    <a
      v-if="website"
      href="https://www.claudiaengelsman.com"
      target="_blank"
      rel="noreferrer"
      class="hex-background"
    >
      <i aria-label="Website" class="fas fa-globe-europe"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialIconBar',
  props: {
    instagram: {
      type: Boolean,
      default: true
    },
    linkedIn: {
      type: Boolean,
      default: true
    },
    pinterest: {
      type: Boolean,
      default: true
    },
    twitter: {
      type: Boolean,
      default: true
    },
    website: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/_variables.scss';

.icon-bar {
  display: flex;
  width: 156px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  .hex-background {
    height: 48px;
    width: 48px;
    background-image: url('./../assets/hexagonal.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-origin: border-box;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    margin: auto;
    &:hover,
    &:focus {
      .fab,
      .fas {
        transition: 0.3s all ease;
        opacity: 1;
      }
    }
  }
  .fab,
  .fas {
    background-repeat: no-repeat;
    font-size: 24px;
    width: 23px;
    height: 23px;
    background-color: white;
    // background: -webkit-linear-gradient(left top, #fedb37, #fdb931, #9f7928, #8a6e2f);
    // background: -webkit-linear-gradient(left top, #a66251, #facec8, #a26050, #faf3f3);
    // background: -webkit-linear-gradient(left top, #ac6943, #fbd1c1, #ab6943, #faf4ed);
    opacity: 0.9;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: 0.3s all ease;
    &:hover,
    &focus {
      transition: 0.3s all ease;
      opacity: 1;
      // background: -webkit-linear-gradient(left top, #FFFFAC, #FEDB37, #FDB931, #5d4a1f);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .fa-instagram {
    margin-left: 2px;
  }
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap-reverse;
  }
}
</style>
