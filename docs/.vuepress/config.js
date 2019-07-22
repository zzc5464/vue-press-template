const path = require('path');
module.exports = {
  title: '前端笔记',
  // description: '前端开发笔记,vue,react,TypeScript',
  head: [
    ['link', { rel: 'icon', href: '/c.ico' }]
  ],
  serviceWorker: true,
  markdown: {
    // lineNumbers: true, // 每块代码都带行号
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname,'../../src'),
      }
    }
  },
  themeConfig: {
    lastUpdated: '最后更新于', // 给每篇加上最后更新时间，基于 git
    repo: 'https://github.com/zzc5464/myvuepress',
    repoLabel: 'Github',
    // editLinks: true,
    //  editLinkText: '帮助我们改善此页面！',
    nav: [ // 导航栏
      {
        text: '笔记',
        // 这里是下拉列表展现形式。
        items: [
          { text: 'H5', link: '/tools/chrome' },
        ]
      },
      {
        text: '国际化',
        // 这里是下拉列表展现形式。
        items: [
          // { text: '骗你的', link: '/review/base' },
          { text: '哪来的国际化', link: '/vue/' },
        ]
      },
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/tools/': [
        'gitCompletion',
        'chrome',
      ],
    }, // 侧边栏
  }
}