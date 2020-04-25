<template>
  <div class="post-meta">
    <div v-if="date" class="post-meta-date">
      <ClockIcon />
      <div class="clock-pad">
        <time pubdate itemprop="datePublished" :datetime="date">
        {{ resolvedDate }}
      </time>
      </div>
    </div>
    <ul v-if="tags" class="post-meta-tags" itemprop="keywords">
      <PostTag v-for="tag in resolvedTags" :key="tag" :tag="tag" />
    </ul>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { NavigationIcon, ClockIcon } from 'vue-feather-icons'
import PostTag from './PostTag.vue'

export default {
  name: 'PostMeta',
  components: { NavigationIcon, ClockIcon, PostTag },
  props: {
    tags: {
      type: [Array, String],
    },
    date: {
      type: String,
    }
  },
  computed: {
    resolvedDate() {
      return dayjs(this.date).format(
        this.$themeConfig.dateFormat || 'ddd MMM DD YYYY'
      )
    },
    resolvedTags() {
      if (!this.tags || Array.isArray(this.tags)) return this.tags
      return [this.tags]
    },
  },
}
</script>

<style lang="stylus">
.post-meta
  padding-left 20px
  &-tags
    display flex
    flex-wrap wrap
    list-style none
    overflow hidden
    padding 0
    margin 8px 0 5px 0

    > li
      margin-bottom 10px

  > div
    display inline-flex
    line-height 8px
    font-size 12px
    margin-right 20px

  svg
    margin-right 5px
    width 14px
    height 14px
  
  &-date 
    font-size 16px !important

.clock-pad
  margin-top 5px
</style>
