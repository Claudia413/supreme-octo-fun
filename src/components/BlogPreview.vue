<template>
  <router-link :to="'/blog/' + blogId" class="blog-post">
    <picture class="blog-pic" loading="lazy">
      <source :srcset="image.mobileoverview.url" media="(max-width: 768px)" />
      <source :srcset="image.tablet.url" media="(max-width: 1112px)" />
      <source :srcset="image.large.url" media="(min-width: 1113px)" />
      <img :src="image.url" :alt="image.alt" />
    </picture>
    <div class="img-line"></div>
    <div class="blog-tag-text">
      <p>{{ title }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'BlogPreview',
  props: {
    title: String,
    image: Object,
    blogId: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/_variables.scss';

.blog-post {
  display: flex;
  align-content: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  margin: 24px;
  &:hover {
    .blog-tag-text {
      opacity: 0.95;
      transition: opacity 0.4s ease;
    }
    .img-line {
      opacity: 1;
      transition: opacity 0.4s ease;
    }
    .blog-pic {
      transform: scale(1.05);
      transition: all 0.4s ease;
    }
  }
  .img-line {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.4;
    border: 1px white solid;
    margin: 20px;
    transition: opacity 0.4s ease;
  }
  .blog-info {
    background-color: white;
  }
  .blog-tag-text {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-family: 'Karla', 'Average Sans', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    max-width: 100%;
    margin: 34px;
    text-align: center;
    background-color: #fdfdfd;
    padding: 20px 20px;
    display: flex;
    align-items: center;
    opacity: 0.75;
    transition: opacity 0.4s ease;
  }
  .blog-pic {
    height: 240px;
    width: 240px;
    object-fit: cover;
    transition: all 0.4s ease;
  }
  @media only screen and (max-width: 1112px) {
    .blog-post,
    .blog-pic {
      height: 220px;
      width: 220px;
    }
    .blog-tag-text {
      line-height: 22px;
    }
  }
  @media only screen and (max-width: 768px) {
    margin: 0;
    margin-bottom: 32px;
    .blog-tag-text {
      margin: 32px;
      p {
        line-height: 32px;
        font-size: 18px;
      }
    }
    .blog-post,
    .blog-pic {
      height: 280px;
      width: 280px;
    }
  }
}
</style>
