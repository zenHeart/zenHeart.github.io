import mathjax3 from 'markdown-it-mathjax3'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { RssPlugin } from 'vitepress-plugin-rss'

const mathjaxCustomElements = [
  'mjx-container', 'mjx-assistive-mml', 'math', 'maction', 'maligngroup', 'malignmark',
  'menclose', 'merror', 'mfenced', 'mfrac', 'mi', 'mlongdiv', 'mmultiscripts', 'mn',
  'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mscarries', 'mscarry',
  'mscarries', 'msgroup', 'mstack', 'mlongdiv', 'msline', 'mstack', 'mspace', 'msqrt',
  'msrow', 'mstack', 'mstack', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd',
  'mtext', 'mtr', 'munder', 'munderover', 'semantics', 'math', 'mi', 'mn', 'mo', 'ms',
  'mspace', 'mtext', 'menclose', 'merror', 'mfenced', 'mfrac', 'mpadded', 'mphantom',
  'mroot', 'mrow', 'msqrt', 'mstyle', 'mmultiscripts', 'mover', 'mprescripts', 'msub',
  'msubsup', 'msup', 'munder', 'munderover', 'none', 'maligngroup', 'malignmark',
  'mtable', 'mtd', 'mtr', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'msline',
  'msrow', 'mstack', 'maction', 'semantics', 'annotation', 'annotation-xml'
]

export default withMermaid({
  title: '编码即是修行',
  description: 'Coding · Cultination · Contemplation',

  ignoreDeadLinks: true,

  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#e8d5b7' }],
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: '编码即是修行 · RSS', href: 'https://blog.zenheart.site/feed.xml' }]
  ],

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => mathjaxCustomElements.includes(tag)
      }
    }
  },

  markdown: {
    lineNumbers: true,
    theme: 'github-dark',
    image: {
      lazyLoading: true
    },
    config: (md) => {
      md.use(mathjax3)
    }
  },

  themeConfig: {
    siteTitle: '编码即是修行',

    hero: {
      title: '编码即是修行',
      tagline: 'Coding as Spiritual Practice',
      intro: '热爱编程，热爱生活，热爱一切「美」的事物。代码不仅仅是工具，更是一种表达思想、锻炼思维的方式。每一次调试都是一次冥想，每一个算法都是一次禅修。'
    },

    nav: [
      { text: '主页', link: '/', en: 'home' },
      { text: '笔记', path: '/posts', en: 'notes' },
      { text: '标签', path: '/tags', en: 'topics' },
      { text: '项目', path: '/projects', en: 'projects' },
      { text: '关于', path: '/about', en: 'about' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zenHeart' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: '编码即是修行',
      copyright: 'Powered by VitePress'
    },

    projects: [
      { title: "web-interview", desc: "汇总 web 工程师常见面试问题及答案", url: "https://blog.zenheart.site/web-interview/", status: "进行中", category: "指南" },
      { title: "read-list", desc: "汇总读过的有价值的资料", url: "https://blog.zenheart.site/readlist/", status: "待完善", category: "指南" },
      { title: "npm 包开发实践", desc: "从零发布一个 npm 包 — 工程化、测试、CI 全流程", url: "https://blog.zenheart.site/make-npm/", status: "已完成", category: "指南" },
      { title: "frontend-test", desc: "前端自动化测试实践 — 单元、集成、E2E", url: "https://blog.zenheart.site/frontend-test/", status: "已完成", category: "指南" },
      { title: "zen-mock", desc: "API mock 及测试工具", url: "https://github.com/zenheart/zen-mock", status: "已完成", category: "工具" },
      { title: "sockets-server", desc: "基于 express 中间件思想的 sockets server", url: "https://github.com/zenheart/sockets-server", status: "已完成", category: "工具" }
    ],

    experience: [
      { period: "2021—now", title: "Senior Frontend Engineer", note: "工具与工程化方向" },
      { period: "2018—2021", title: "Frontend Engineer", note: "业务中台" },
      { period: "2016—2018", title: "Junior Web Developer" }
    ],

    about: [
      {
        title: "写作观",
        titleEn: "On Writing",
        type: "prose",
        content: "通过 Blog，把脑中混乱的信号，沉淀成语言可以承载的形状。"
      }
    ],

    profile: {
      name: "zenheart",
      role: "Frontend Engineer · Writer · Lifelong Learner",
      bio: "写代码、写博客、也写给未来的自己。关注前端工程、开发者工具、计算机基础，以及如何在信息过载的时代保持安静与专注。自 2016 年开始在此写作。",
      avatar: "禅",
      since: 2016,
      location: "中国 · 武汉",
      focus: "Web · Tooling · DX · Technical Writing",
      stack: "TypeScript · Vue · React · Node · Build tooling"
    },

    contact: {
      github: "https://github.com/zenHeart",
      rss: "/feed.xml",
      email: "hi [at] zenheart_register@163.com"
    }
  },

  mermaid: {
    securityLevel: 'loose',
    fontFamily: 'inherit'
  },

  mermaidPlugin: {
    class: 'mermaid zen-mermaid'
  },

  vite: {
    optimizeDeps: {
      include: ['dayjs', '@braintree/sanitize-url', 'debug', 'cytoscape', 'cytoscape-cose-bilkent', 'langium']
    },
    plugins: [
      RssPlugin({
        baseUrl: 'https://blog.zenheart.site',
        filename: 'feed.xml',
        title: '编码即是修行',
        description: 'Coding · Cultination · Contemplation',
        language: 'zh-CN',
        copyright: 'Copyright (c) 2016-present, zenheart',
        author: {
          name: 'zenheart',
          email: 'zenheart1991@gmail.com',
          link: 'https://blog.zenheart.site'
        },
        filter: (post) => {
          // 只保留 posts 目录下的文章，排除首页/about/projects/tags/posts 索引/RESUME
          const fp = (post.filepath || '').replace(/\\/g, '/')
          return /\/docs\/posts\/[^/]+\.md$/.test(fp)
        },
        // 剥离 XML 1.0 禁止的控制字符（0x00-0x1F 除 \t \n \r），
        // 这些字符若出现在 CDATA 内部仍会让 XML/RSS 解析器报错。
        transform: (content) => content.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '')
      })
    ]
  }
})