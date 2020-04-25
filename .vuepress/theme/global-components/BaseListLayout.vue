<template>
  <div id="base-list-layout">
    <div class="ui-posts" itemscope itemtype="http://schema.org/Blog">
      <article
        v-for="page in pages"
        :key="page.key"
        class="ui-post"
        itemprop="blogPost"
        itemscope
        itemtype="https://schema.org/BlogPosting"
      >
        <meta itemprop="mainEntityOfPage" :content="page.path" />

        <header class="ui-post-title" itemprop="name headline">
          <NavLink :link="page.path">{{ page.title }}</NavLink>
        </header>

        <div class="post-pad">
          <p class="ui-post-summary" itemprop="description">
          {{ page.frontmatter.summary || page.summary }}
          <!-- <Content :page-key="page.key" slot-key="intro"/>-->
        </p>

        <footer>
          <div v-if="page.frontmatter.date" class="ui-post-meta ui-post-date">
            <div class="icon-pad-clock"><ClockIcon /></div>
            <time
              pubdate
              itemprop="datePublished"
              :datetime="page.frontmatter.date"
            >
              {{ resolvePostDate(page.frontmatter.date) }}
            </time>
          </div>

          <div
            v-if="page.frontmatter.tags"
            class="ui-post-meta ui-post-tag"
            itemprop="keywords"
          >
            <div class="icon-pad-tag"><TagIcon /></div>
            <router-link
              v-for="tag in resolvePostTags(page.frontmatter.tags)"
              :key="tag"
              :to="'/tag/' + tag"
            >
              {{ tag }}
            </router-link>
          </div>
        </footer>
        </div>

        
      </article>
    </div>

    <div class="pagi-align">
      <component
        :is="paginationComponent"
        v-if="$pagination.length > 1 && paginationComponent"
      ></component>
    </div>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from 'vue'
import dayjs from 'dayjs'
import { NavigationIcon, ClockIcon, TagIcon } from 'vue-feather-icons'
import {
  Pagination,
  SimplePagination,
} from '@vuepress/plugin-blog/lib/client/components'

export default {
  components: { NavigationIcon, ClockIcon, TagIcon },

  data() {
    return {
      paginationComponent: null,
    }
  },

  computed: {
    pages() {
      return this.$pagination.pages
    },
  },

  created() {
    this.paginationComponent = this.getPaginationComponent()
  },

  methods: {
    getPaginationComponent() {
      const n = THEME_BLOG_PAGINATION_COMPONENT
      if (n === 'Pagination') {
        return Pagination
      }

      if (n === 'SimplePagination') {
        return SimplePagination
      }

      return Vue.component(n) || Pagination
    },

    resolvePostDate(date) {
      return dayjs(date).format(
        this.$themeConfig.dateFormat || 'ddd MMM DD YYYY'
      )
    },

    resolvePostTags(tags) {
      if (!tags || Array.isArray(tags)) return tags
      return [tags]
    },
  },
}
</script>

<style lang="stylus">
.common-layout
  .content-wrapper
    padding-bottom 80px

.ui-post
  padding-bottom 10px
  margin-bottom 25px
  border-bottom 1px solid $borderColor
  font-size 16px
  color $textColor
  font-weight bold

  &:last-child
    border-bottom 0px
    margin-bottom 0px

.ui-post-title
  font-size 24px
  border-bottom 0

  a
    cursor pointer
    transition all 0.2s
    text-decoration none
    padding 8px 4px 0px 4px
    border-bottom solid $textColor 1.5px
    transition background .4s ease 0s,padding .4s ease 0s

    &:hover
      background-color $textColor
      color $bgColor
      padding 8px 8px 0px 8px


.ui-post-meta
  display inline-flex
  align-items center
  line-height 12px
  font-weight normal

  &:not(:last-child)
    margin-bottom 3px
    margin-right 20px

  svg
    margin-right 5px
    width 14px
    height 14px

  @media (max-width: $MQMobile)
    display flex

    &:not(:last-child)
      margin-bottom 10px

.ui-post-tag
  a
    margin-right 3px
    padding 4px 2px 4px 2px

    transition background .6s ease 0s
    &:hover
      background-color $textColor
      color $bgColor

.pagi-align
  text-align center

.post-pad
  margin-left 15px

.icon-pad-clock
  margin-bottom 1px

.icon-pad-tag
  margin-top 2px

</style>
