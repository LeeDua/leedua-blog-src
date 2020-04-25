<template>
  <div class="blog-tags">
    <BlogTag v-for="tag in tags" :key="tag.name" :tag="tag" />
  </div>
</template>

<script>
export default {
  props: ['tags'],
}
</script>

<style lang="stylus">
.blog-tags
  width 90%
  margin-top 30%
  display flex
  flex-wrap wrap
  justify-content center    


@media screen and (max-width: 1000px)
  .blog-tags
    width 90%
  
    
</style>
