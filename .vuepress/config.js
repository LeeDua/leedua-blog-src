module.exports = {
    title: '梨肚啊',
    
    themeConfig: {
      /**
       * Ref: https://vuepress-theme-blog.ulivz.com/config/#dateformat
       */
  
      // dateFormat: 'YYYY-MM-DD',
  
      /**
       * Ref: https://vuepress-theme-blog.ulivz.com/config/#nav
       */
  
      nav: [
        {
          text: '首页',
          link: '/',
        },
        {
          text: '分类',
          link: '/category/',
        },
        {
          text: '标签',
          link: '/tag/',
        },
        {
          text: '关于',
          link: '/about/',
        },
      ],
    
      frontmatters: [
        {
          id: "tag",
          keys: ['tag', 'tags'],
          path: '/tag/',
        },
        {
          id: "category",
          keys: ['cat', 'category'],
          path: '/category/',
        },
      ],
  
      // sitemap: {
      //   hostname: 'https://example.vuepress-theme-blog.ulivz.com/'
      // },
      /**
       * Ref: https://vuepress-theme-blog.ulivz.com/config/#comment
       */
      // comment: {
      //   service: 'disqus',
      //   shortname: 'vuepress-plugin-blog',
      // },
      /**
       * Ref: https://vuepress-theme-blog.ulivz.com/config/#newsletter
       */
      // newsletter: {
      //   endpoint: 'https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;id=bd18d40138'
      // },
      /**
       * Ref: https://vuepress-theme-blog.ulivz.com/config/#feed
       */
      // feed: {
      //   canonical_base: 'https://example.vuepress-theme-blog.ulivz.com/',
      // },
  
      /**
       * Ref: https://vuepress-theme-blog.ulivz.com/config/#summary
       */
  
      // summary:false,
  
      /**
       * Ref: https://vuepress-theme-blog.ulivz.com/config/#summarylength
       */
  
      // summaryLength:100,
  
      /**
       * Ref: https://vuepress-theme-blog.ulivz.com/config/#pwa
       */
  
      pwa:true,
  
      /**
       * Ref: https://vuepress-theme-blog.ulivz.com/config/#paginationcomponent
       */
  
      // paginationComponent: 'SimplePagination'
  
      /**
       * Ref: https://vuepress-theme-blog.ulivz.com/config/#smoothscroll
       */
      smoothScroll: true,
      head: [
        ['link', { rel: 'icon', href: '/1.jpg' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }]
      ],
    },
  }