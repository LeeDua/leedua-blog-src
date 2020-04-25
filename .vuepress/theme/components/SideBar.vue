<template>
    <div class="sidebar-container">
        <div class="title-block">
            <div class="blog-title">梨肚阿</div>
            <div class="sentence">憨憨快乐每一天</div>
            <div class="author"> LeeDua </div>
        </div>
        <div class="bottom-block">
            <div class="side-navs"  v-if="$themeConfig.nav">
                <div
                v-for="item in $themeConfig.nav"
                :key="item.text"
                class="nav-item"
                >
                <NavLink :link="item.link">{{ item.text }}</NavLink>
                </div>
            </div>
            <MyFooter />
        </div>
    </div>
</template>

<script>

</script>

<style lang="stylus">
@import '~@app/style/config'

.sidebar-container
    padding-left 10px
    
    .bottom-block
        position absolute
        bottom 150px

.title-block
    writing-mode vertical-lr
    width 100px
    height 260px
    border-left solid $textColor 2px
    padding 0 0 50px 0
    color $textColor
    transition padding .8s ease 0s,background .8s ease 0s
    font-family 'Noto Serif SC', serif
    position relative
    font-weight bolder


    &:hover
        background-color $textColor
        padding 15px 0 35px 0
        color #fafafa
    
    .blog-title
        font-size 32px
        padding-left 8px
    
    .sentence
        font-size 20px
        padding-left 8px

    .author
        writing-mode horizontal-tb
        font-family "Josefin Sans",sans-serif
        font-size 16px
        position absolute
        bottom 10px
        right 5px
        width 65px
        height 20px
        color $bgColor

.side-navs
    font-size 15px
    line-height 1.3
    margin-bottom 20px

    .nav-item
        margin-bottom 5px


    


        

</style>
