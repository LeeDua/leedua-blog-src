<template>
  <div id="vuepress-theme-blog__global-layout">
    <!-- <Header />
    <MobileHeader
      :is-open="isMobileHeaderOpen"
      @toggle-sidebar="isMobileHeaderOpen = !isMobileHeaderOpen"
    /> -->
    <div class="mobile-header" v-if="isMobileHeaderOpen">
        <MyMobileHeader />
    </div>
    <div class="content-wrapper">
      
      <div class="col pagelist-col" ref="pagelist">
        <DefaultGlobalLayout />
      </div>
      <div class="col sidebar-col" v-bind:style="{ width: sidebarWidth + 'px' }"
        v-if="!isMobileHeaderOpen">
        <SideBar />
      </div>
    </div>
    <div class="mobile-footer" v-if="isMobileHeaderOpen">
        <MyFooter/>
    </div>
    <div class="live2d-wrapper">
      <!-- <l2d /> -->
    </div>
  </div>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'
import Header from '@theme/components/Header.vue'
import MobileHeader from '@theme/components/MobileHeader.vue'
import Footer from '@theme/components/Footer.vue'
import SideBar from '@theme/components/SideBar.vue'
import MyMobileHeader from '@theme/components/MyMobileHeader.vue'

export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Header,
    MobileHeader,
    Footer,
    SideBar,
    MyMobileHeader
  },

  data() {
    return {
      isMobileHeaderOpen: false,
      sidebarWidth: 0,      
    }
  },
  
  methods: {
      onResize(event) {
        if(this.$refs["pagelist"]==undefined)return;
        let rect = this.$refs["pagelist"].getBoundingClientRect();
        let window_width = window.innerWidth || document.documentElement.clientWidth || 
            document.body.clientWidth;
        let sw = window_width - rect.right - 30;
        this.sidebarWidth = sw;
        if(window_width < 840 && this.isMobileHeaderOpen == false){
          this.isMobileHeaderOpen = true;
        }
        else if(this.isMobileHeaderOpen && window_width > 840){
          this.isMobileHeaderOpen = false;
        }
        
      }
  },  

  mounted() {
    window.addEventListener('resize', this.onResize)
    this.onResize();
    this.$router.afterEach(() => {
      this.isMobileHeaderOpen = false
    })
  },

  updated(){
    this.onResize();
  }
}
</script>

<style lang="stylus">
$thres_min = 840px
$thres_mid1 = 1000px
$thres_mid2 = 1100px
$thres_max = 1250px
#vuepress-theme-blog__global-layout
  word-wrap break-word

.content-wrapper
  display flex
  padding 40px 0 0 0
  min-height 100vh
  max-width 75%
  margin 0 auto 0 10%
  box-sizing border-box


  @media (max-width: $MQMobile)
    &
      padding 100px 15px 20px 15px
      min-height calc(100vh - 20px - 60px - 100px)

  .col
    float left 

  .pagelist-col
    padding 0 40px 0 40px

    width 580px
    // border 4px solid red
    
    @media (max-width: $thres_mid1)
      ^[0]
        margin 0 40px 0 40px
    
    @media (max-width: $thres_min)
      width 90%
      ^[0]
        max-width 90%
        margin 0 auto
        padding-top 0
    
    @media (min-width: $thres_mid1)
      width 630px
      // border 4px solid black

    @media (min-width: $thres_mid2)
      width 700px
      // border 4px solid blue

    @media (min-width: $thres_max)
      width 800px
      // border 4px solid green
  
  .sidebar-col
    height 100vh
    padding 0 20px 0 20px
    position fixed
    right 0
    
    
  
  &:after
    content ""
    display table
    clear both

.mobile-header, .mobile-footer
  display flex
  justify-content center

.mobile-footer
  margin-bottom 10px
  
.live2d-wrapper
    position fixed 
    bottom 0
    right 0
    @media (max-width: $thres_min)
      display none

</style>
