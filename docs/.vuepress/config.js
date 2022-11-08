const { resolve } = require('path')

module.exports = {
  title: 'live',
  description: '活法',
  base: '/',
  themeConfig: {
    displayAllHeaders: true,
    sidebarDepth: 2,
    sidebar: [
      {
        title: '《活法》壹',
        path: '/one',
        children: [
          { title: '作者', path: '/one/author' },
          { title: '前面的话',
            path: '/one/preview',
            children: [
              { title: "身居乱世之中，重新审视‘活法’", path: '/one/preview/1' },
              { title: '人生的意义在于修炼灵魂', path: '/one/preview/2' },
              { title: '质朴的原理原则是不可动摇的指针', path: '/one/preview/3' },
              { title: '从努力工作中体味人生的真谛', path: '/one/preview/4' },
              { title: '改变‘思维模式’，人生就会实现180度大转变', path: '/one/preview/5' },
              { title: '实现胸中大志的‘宇宙法则’', path: '/one/preview/6' },
              { title: '‘智慧宝库’释放无限睿智', path: '/one/preview/7' },
              { title: '自律的‘王道’人生观', path: '/one/preview/8' },
            ]
          },
        ]
      },
      // {
      //   title: '下篇 芒格私人书单',
      //   path: '/zh/down',
      //   children: [
      //     { title: '如果', path: '/zh/down/if' },
      //     { title: '第一辑 自然', path: '/zh/down/chapter-1' },
      //     { title: '第二辑 人类', path: '/zh/down/chapter-2' },
      //     { title: '第三辑 经济', path: '/zh/down/chapter-3' },
      //     { title: '第四辑 投资', path: '/zh/down/chapter-4' },
      //     { title: '第五辑 人生', path: '/zh/down/chapter-5' },
      //     { title: '第六辑 处世', path: '/zh/down/chapter-6' },
      //   ]
      // }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@imgs': resolve(__dirname, './assets/imgs')
      }
    }
  }
}