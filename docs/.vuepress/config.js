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
          { title: '第一章 让梦想成真',
            path: '/one/chapter1',
            children: [
              { title: "实现追求的人生法则", path: '/one/chapter1/1' },
              { title: '思考至关重要', path: '/one/chapter1/2' },
              { title: '你具有超越现实的想象力和创造力吗？', path: '/one/chapter1/3' },
              { title: '考虑周全的话，就一定能实现', path: '/one/chapter1/4' },
              { title: '大病初愈后体悟到的人生真谛', path: '/one/chapter1/5' },
              { title: '心态决定命运', path: '/one/chapter1/6' },
              { title: '锲而不舍必定成功', path: '/one/chapter1/7' },
              { title: '‘人类的力量真是无穷大啊！’', path: '/one/chapter1/8' },
              { title: '努力是从平凡升华为非凡的必要阶梯', path: '/one/chapter1/9' },
              { title: '‘人类的力量真是无穷大啊！’', path: '/one/chapter1/10' },
              { title: '听见工作现场的‘神灵之声’了吗？', path: '/one/chapter1/11' },
              { title: '牢记‘有意注意’的人生', path: '/one/chapter1/12' },
              { title: '激情与梦想，实现精彩人生', path: '/one/chapter1/13' },
            ]
          },
          { title: '第二章 依原理原则思考',
            path: '/one/chapter2',
            children: [
              { title: "简单就是做人和做事的最佳原则", path: '/one/chapter2/1' },
              { title: '处事哲学拨开人生迷雾', path: '/one/chapter2/2' },
              { title: '面对诱惑，不为所动，坚持自己的哲学', path: '/one/chapter2/3' },
              { title: '贯彻落实才有意义', path: '/one/chapter2/4' },
              { title: '思维决定人生的发展方向', path: '/one/chapter2/5' },
              { title: '如何导演人生这台戏', path: '/one/chapter2/6' },
              { title: '身体力行是最好的学习方法', path: '/one/chapter2/7' },
              { title: '努力过好今天', path: '/one/chapter2/8' },
              { title: '“热爱”是点燃“激情”的火把', path: '/one/chapter2/9' },
              { title: '超越自我改变人生', path: '/one/chapter2/10' },
              { title: '将复杂问题简单化', path: '/one/chapter2/11' },
              { title: '国际问题、国家间摩擦单纯化', path: '/one/chapter2/12' },
            ]
          },
          { title: '第三章 磨砺并提高心智',
            path: '/one/chapter3',
            children: [
              { title: "日本人为什么丢失了“美丽的心灵”", path: '/one/chapter3/1' },
              { title: '领导的“德”要高才“才”', path: '/one/chapter3/2' },
              { title: '自省与人格磨砺', path: '/one/chapter3/3' },
              { title: '磨砺心智所需要的“六个精进”', path: '/one/chapter3/4' },
              { title: '将感恩之心铭刻于童心当中', path: '/one/chapter3/5' },
              { title: '时刻准备好说“谢谢”', path: '/one/chapter3/6' },
              { title: '当喜则喜，保持率真的心态', path: '/one/chapter3/7' },
              { title: '如何清除魅惑人心的“三毒”', path: '/one/chapter3/8' },
              { title: '劳动的喜悦是世上最大的喜悦', path: '/one/chapter3/9' },
              { title: '把释迦牟尼的“六波罗蜜”铭记在心', path: '/one/chapter3/10' },
              { title: '劳动的意义和勤勉的自豪感', path: '/one/chapter3/11' },
            ]
          },
          { title: '第四章 以利他之心生活',
            path: '/one/chapter4',
            children: [
              { title: "日本托钵化缘遇温暖", path: '/one/chapter4/1' },
              { title: '天堂和地狱的区别在于“善心”', path: '/one/chapter4/2' },
              { title: '贯彻利他思想，视野也将开阔', path: '/one/chapter4/3' },
              { title: '入睡前扪心自问参与新事业的动机', path: '/one/chapter4/4' },
              { title: '为社会和他人不妨牺牲一点个人利益', path: '/one/chapter4/5' },
              { title: '经营利润取之社会，用于社会', path: '/one/chapter4/6' },
              { title: '日本啊，把“富国有德”定为国策吧', path: '/one/chapter4/7' },
              { title: '这样的“美德”是否被遗忘', path: '/one/chapter4/8' },
              { title: '以道德为基础的人格教育刻不容缓', path: '/one/chapter4/9' },
              { title: '构筑新日本，勿让历史重演', path: '/one/chapter4/10' },
              { title: '共存生物链中，人类应学会知足', path: '/one/chapter4/11' },
            ]
          },
        ]
      },
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