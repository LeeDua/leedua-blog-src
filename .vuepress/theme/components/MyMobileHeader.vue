<template>
    <div class="header-block">
        <div class="blog-title">梨 肚 阿&nbsp</div>
        <div class="side-navs"  v-if="$themeConfig.nav">
            <div
            v-for="item in $themeConfig.nav"
            :key="item.text"
            class="nav-item"
            >
            <NavLink :link="item.link">{{ item.text }}</NavLink>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="stylus">
@import '~@app/style/config'

.header-block
    color $textColor
    margin-top 20px
    padding-bottom 0
    display block
    justify-content center

    .blog-title
        display block
        font-weight bold
        font-size 26px
        text-align center
    
    .side-navs
        display block
        margin-top 4px

        .nav-item
            display inline-block
            margin-right 10px


</style>
