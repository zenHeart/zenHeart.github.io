(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{349:function(t,e,a){"use strict";a.r(e);var r=a(4),n=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jekyll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jekyll","aria-hidden":"true"}},[t._v("#")]),t._v(" jekyll")]),t._v(" "),a("p",[a("strong",[t._v("jekyll 的使用笔记")])]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("jekyll 是基于 ruby 的静态博客生成器.\n结合 "),a("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("github pages"),a("OutboundLink")],1),t._v("\n可以实现快速部署个人静态博客.")]),t._v(" "),a("h2",{attrs:{id:"快速入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速入门","aria-hidden":"true"}},[t._v("#")]),t._v(" 快速入门")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("环境安装")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("brew install ruby")]),t._v(" 安装 ruby,mac 默认安装了 "),a("a",{attrs:{href:"http://www.ruby-lang.org/en/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ruby"),a("OutboundLink")],1),t._v(" 环境.")]),t._v(" "),a("li",[a("code",[t._v("curl -L get.rvm.io | bash -s stable")]),t._v(" 安装 ruby 版本管理工具 "),a("a",{attrs:{href:"http://www.rvm.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("rvm"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("code",[t._v("gem install jekyll bundler")]),t._v(" 安装 "),a("a",{attrs:{href:"http://jekyllrb.com/docs/quickstart/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jekyll"),a("OutboundLink")],1),t._v(","),a("a",{attrs:{href:"http://bundler.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("bundler"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[t._v("新建 jekyll 博客.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在家目录创建 blog 文件夹")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ~/blog\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 blog 目录下初始化 jekyll_demo")]),t._v("\njekyll new ~/blog/jekyll_demo\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 jekyll_demo 目录下安装依赖包")]),t._v("\nbundle "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编译本地 jekyll 博客")]),t._v("\njekyll serve\n")])])]),a("p",[t._v("访问 "),a("a",{attrs:{href:"http://localhost:4000",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:4000"),a("OutboundLink")],1),t._v("即可查看到 jekyll 默认主题 "),a("a",{attrs:{href:"https://github.com/jekyll/minima",target:"_blank",rel:"noopener noreferrer"}},[t._v("minima"),a("OutboundLink")],1),t._v("\n生成的静态页面.")])])]),t._v(" "),a("p",[t._v("jekyll serve 编译后的目录结构如下.")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("|-- Gemfile\n|-- Gemfile.lock\n|-- _config.yml\n|-- _posts\n|-- _site\n|-- about.md\n`-- index.md\n")])])]),a("p",[t._v("各文件含义")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("文件")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://ruby-china.org/topics/26655",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Gemfile")]),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("ruby 安装包配置文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Gemfile.lock")])]),t._v(" "),a("td",[a("a",{attrs:{href:"http://bundler.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("bundler"),a("OutboundLink")],1),t._v(" 记录已安装包的文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("_config.yml")])]),t._v(" "),a("td",[a("a",{attrs:{href:"http://jekyllrb.com/docs/quickstart/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jekyll"),a("OutboundLink")],1),t._v(" 编译器配置文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("_posts")])]),t._v(" "),a("td",[t._v("放置文章的目录")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("_site")])]),t._v(" "),a("td",[t._v("编译器生成的静态网站")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("about.md")])]),t._v(" "),a("td",[t._v("介绍信息,默认编译成 "),a("code",[t._v("_site/about.html")]),t._v(" 文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("index.md")])]),t._v(" "),a("td",[t._v("主站索引,默认编译成 "),a("code",[t._v("_site/index.html")]),t._v(" 文件")])])])]),t._v(" "),a("p",[t._v("详见 "),a("a",{attrs:{href:"http://jekyllrb.com/docs/structure/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jekyll 目录结构"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"创建新文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建新文章","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建新文章")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("_posts")]),t._v(" 目录下新建名为 "),a("code",[t._v("<site.time | date: '%Y-%m-%d' >-jkeyll.md")]),t._v("的文件.\n添加如下内容.")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n---\ntitle: jekyll\ntags: jekyll ruby\n---\n\njekyll demo\n===\n\n**前言: 讲解 jeyll 的使用**\n---\n\ntoday is <site.time | date: '%Y-%m-%d' >\n")])])]),a("p",[t._v("重新编译"),a("code",[t._v("jekyll serve")]),t._v("访问 "),a("a",{attrs:{href:"http://localhost:4000",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:4000"),a("OutboundLink")],1),t._v(" 即可看到\n如下内容")]),t._v(" "),a("p",[t._v("创建文件需要符合三点.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("文件名符合 "),a("code",[t._v("<YYYY-MM-DD>-<filename>")]),t._v(" 的格式.\n文件后缀取决于你用的文本类型例如 "),a("code",[t._v(".md")]),t._v(" 表 markdown 类型.")])]),t._v(" "),a("li",[a("p",[t._v("文件开头为")]),t._v(" "),a("div",{staticClass:"language-txt extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n---\ntitle: jekyll\ntags: jekyll ruby\n---\n")])])]),a("p",[t._v("符合 "),a("a",{attrs:{href:"http://jekyllrb.com/docs/frontmatter/",target:"_blank",rel:"noopener noreferrer"}},[t._v("front matter"),a("OutboundLink")],1),t._v(" 格式. 该格式基于 "),a("a",{attrs:{href:"https://www.wikiwand.com/zh-cn/YAML",target:"_blank",rel:"noopener noreferrer"}},[t._v("YAML"),a("OutboundLink")],1),t._v("\n语法.用来定义文章中的变量,给 jekyll 解析.例如 title 变量值会被编译为对应 html 的 title 标签中.")])]),t._v(" "),a("li",[a("p",[t._v("文章的内容")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token title important"}},[t._v("jekyll demo\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("===")])]),t._v("\n\n**前言: 讲解 "),a("span",{pre:!0,attrs:{class:"token title important"}},[t._v("jeyll 的使用**\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n\ntoday is {{site.time | date: '%Y-%m-%d' }}\n")])])]),a("p",[t._v("符合对应的语法格式, jekyll 通过文件名后缀选择对应的转义引擎,\n例如 "),a("code",[t._v(".md")]),t._v(" 文件,默认使用 "),a("a",{attrs:{href:"https://kramdown.gettalong.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("kramdown"),a("OutboundLink")],1),t._v(" 转义为 html.\n可以看到文件内容除了支持标准的 markdown 文法,还支持模板,\n"),a("a",{attrs:{href:"http://jekyllrb.com/docs/quickstart/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jekyll"),a("OutboundLink")],1),t._v(" 使用 "),a("a",{attrs:{href:"https://shopify.github.io/liquid/",target:"_blank",rel:"noopener noreferrer"}},[t._v("liquid"),a("OutboundLink")],1),t._v("\n来转义模板语法.")])])]),t._v(" "),a("h2",{attrs:{id:"概念建立"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念建立","aria-hidden":"true"}},[t._v("#")]),t._v(" 概念建立")]),t._v(" "),a("p",[t._v("通过以上实例我们可以直接在 "),a("code",[t._v("_post")]),t._v(" 文件夹下\n建立符合格式的文章,重新编译即可创建博客.\n但是这只是最基础的内容,对于常见的博客我们可能有如下需求.")]),t._v(" "),a("ul",[a("li",[t._v("更换博客主题(默认主题太简陋)")]),t._v(" "),a("li",[t._v("实现索引文件(用来分类显示所有博文)")]),t._v(" "),a("li",[t._v("添加评论系统")]),t._v(" "),a("li",[t._v("添加博文统计系统")]),t._v(" "),a("li",[t._v("个性化配置")])]),t._v(" "),a("p",[t._v("以上的需求我们会逐一讲解.")]),t._v(" "),a("h2",{attrs:{id:"更换主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更换主题","aria-hidden":"true"}},[t._v("#")]),t._v(" 更换主题")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("jekyll new <path>")]),t._v(" 命令默认使用的是 minima 主题.\n更换主题的步骤如下.")]),t._v(" "),a("ol",[a("li",[t._v("去 "),a("a",{attrs:{href:"http://jekyllthemes.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jekyll-theme"),a("OutboundLink")],1),t._v(" 选择一个你喜欢的主题\n也可参看知乎 "),a("a",{attrs:{href:"https://www.zhihu.com/question/20223939",target:"_blank",rel:"noopener noreferrer"}},[t._v("简洁明快的 jekyll 模板"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("进入主题的 github 页面,按照官方说明进行配置即可")])]),t._v(" "),a("p",[t._v("简要概述就是把 _post 中的内容拷贝到主题对应文件中.\n同时按照主题要求配置好自己个人信息即可.")]),t._v(" "),a("h2",{attrs:{id:"静态服务器的工作流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态服务器的工作流","aria-hidden":"true"}},[t._v("#")]),t._v(" 静态服务器的工作流")]),t._v(" "),a("p",[t._v("jekyll 整个处理流程,步骤如下.")]),t._v(" "),a("ol",[a("li",[t._v("读取"),a("code",[t._v("_config.yml")]),t._v(" 配置项,确定 jekyll 引擎的工作,\n空文件会利用默认配置进行处理.")]),t._v(" "),a("li",[t._v("在工作目录全局递归查找文件头符合 "),a("code",[t._v("front matter tags")]),t._v(" 格式的内容.")]),t._v(" "),a("li",[t._v("模板处理\n"),a("ol",[a("li",[a("p",[t._v("jekylll 处理模板变量")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("site")]),t._v(" 包含整个静态网站信息,所有页面均可引用")]),t._v(" "),a("li",[a("code",[t._v("page")]),t._v(" 包含该静态页面信息,可在页面中备引用")]),t._v(" "),a("li",[a("code",[t._v("post")]),t._v(" 提交集合的变量")])])]),t._v(" "),a("li",[a("p",[t._v("liqiud 利用该模板将变量替换为对应内容.除了简单的变量替换模板还提供如下功能.")]),t._v(" "),a("ul",[a("li",[t._v("liqiud tags")]),t._v(" "),a("li",[t._v("liqiud variable")]),t._v(" "),a("li",[t._v("liqiud filter 实现内容过滤,")])])]),t._v(" "),a("li",[a("p",[t._v("内容格式转换\n使用 "),a("a",{attrs:{href:"https://kramdown.gettalong.org/converter/html.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("kramdown"),a("OutboundLink")],1),t._v(" 将 markdown 等文本内容转换为 html 标签.")])]),t._v(" "),a("li",[a("p",[t._v("布局排版\n将文章写入设定的 "),a("code",[t._v("layout")]),t._v(" 模板,或默认模板的 "),a("code",[t._v("<content>")]),t._v(" 中,\n递归 layout 流程 "),a("a",{attrs:{href:"http://jekyllrb.com/tutorials/convert-site-to-jekyll/#how-layouts-work",target:"_blank",rel:"noopener noreferrer"}},[t._v("递归 layout"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("文件写入\n将排版后的文档按照文件路径或 "),a("code",[t._v("permalink")]),t._v(" 配置项写入 "),a("code",[t._v("_site")]),t._v(" 目录下")])])])])]),t._v(" "),a("h2",{attrs:{id:"常见错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见错误","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见错误")]),t._v(" "),a("p",[a("strong",[t._v("误解布局先后顺序")])]),t._v(" "),a("ol",[a("li",[t._v("liquid 解析变量在 jekyll 模板转化之前.\n可以需要解析的模板变量放入 "),a("code",[t._v("front formatter")]),t._v(" 之中")])]),t._v(" "),a("p",[a("strong",[t._v("忽略文件类型影响")])]),t._v(" "),a("p",[t._v("内容的编译是基于文件类型完成的.\n若在 html 文件中包含 "),a("code",[t._v("markdowm")]),t._v(" 类型文件.\n解析器不会渲染.可以直接使用 html 替换对应文本内容即可")]),t._v(" "),a("p",[a("strong",[t._v("复合使用")])]),t._v(" "),a("p",[t._v("例如模板的颜色高亮.使用如下结构")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("{% highlight javascript %}\nconsole.log('alert');\n{% endhighlight %}\n")])])]),a("p",[t._v("无需在高亮内容中再使用 markdown 语法.\n直接编写需要高亮的内容即可.\n牢记静态网站的编译顺序.")]),t._v(" "),a("p",[t._v("liqiud 变量 ->  内容解析器 -> front formatter")]),t._v(" "),a("h2",{attrs:{id:"学习内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#学习内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 学习内容")]),t._v(" "),a("ol",[a("li",[t._v("全局配置文件")]),t._v(" "),a("li",[t._v("liquid 模板语法")]),t._v(" "),a("li",[t._v("页面配置 "),a("code",[t._v("front formatter")])]),t._v(" "),a("li",[t._v("jekyll 常用特性\n"),a("ul",[a("li",[t._v("layout")]),t._v(" "),a("li",[t._v("premalink")]),t._v(" "),a("li",[t._v("...")])])])]),t._v(" "),a("h2",{attrs:{id:"常用设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用设置","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用设置")]),t._v(" "),a("h3",{attrs:{id:"配置-404-页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-404-页面","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置 404 页面")]),t._v(" "),a("p",[t._v("只需在工作目录的根目录添加 "),a("code",[t._v("404.md")]),t._v(" 或 "),a("code",[t._v("404.html")]),t._v(" 即可.\n或者直接将想作为 404 返回界面的文件的 "),a("code",[t._v("pernalink")]),t._v(" 设置为 "),a("code",[t._v("/404.html")]),t._v(" 即可.\n若将今天页面布置到 apache 或 ngnix 服务器上,直接参看官方配置即可.")]),t._v(" "),a("h3",{attrs:{id:"自定义渲染模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义渲染模板","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义渲染模板")]),t._v(" "),a("ol",[a("li",[t._v("创建自定义模板")])]),t._v(" "),a("p",[t._v("在工作目录的的 "),a("code",[t._v("_layouts")]),t._v(" 目录中,新建 default.html.\n可以利用模板变量定义引用.核心配置\n* 主内容去使用 "),a("code",[t._v("<content>")]),t._v("进行替换\n* title 利用 "),a("code",[t._v("<page.title>")]),t._v(" 替换")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("模板引用")])]),t._v(" "),a("p",[t._v("在需要使用该模板的页面 "),a("code",[t._v("fornt formatter")]),t._v(" 中配置 "),a("code",[t._v("layout")]),t._v(" 为 "),a("code",[t._v("_layouts")]),t._v(" 下的文件名.")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("重新编译内容即可")])]),t._v(" "),a("p",[a("strong",[t._v("其他")])]),t._v(" "),a("p",[t._v("参见 "),a("a",{attrs:{href:"http://jekyllrb.com/tutorials/convert-site-to-jekyll/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jekyll tutorials"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"快速入门-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速入门-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 快速入门")]),t._v(" "),a("p",[t._v("前提保证安装了 ruby 和 rubyGems 的保管理工具.")]),t._v(" "),a("ol",[a("li",[t._v("环境安装")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" gem isntall jekyll\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建新 blog")]),t._v("\njekyll new blog\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到主目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" myblog\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编译和创建服务")]),t._v("\nbundle "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),t._v(" jekyll serve\n")])])]),a("h2",{attrs:{id:"jekyll-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jekyll-原理","aria-hidden":"true"}},[t._v("#")]),t._v(" jekyll 原理")]),t._v(" "),a("p",[t._v("项目文件 -> 渲染模板 -> 格式转换 -> 静态网站(html,css,js)")]),t._v(" "),a("p",[t._v("详细步骤:")]),t._v(" "),a("ol",[a("li",[t._v("site 变量,收集所有静态页面定义的变量.")]),t._v(" "),a("li",[t._v("liquid 利用该模板解释文档中的内容\n"),a("ul",[a("li",[t._v("liquid")])])])]),t._v(" "),a("h2",{attrs:{id:"渲染模板支持的功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染模板支持的功能","aria-hidden":"true"}},[t._v("#")]),t._v(" 渲染模板支持的功能")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://jekyllrb.com/docs/templates/#link",target:"_blank",rel:"noopener noreferrer"}},[t._v("templates 模板"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://jekyllrb.com/docs/variables/",target:"_blank",rel:"noopener noreferrer"}},[t._v("variable"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("页面收集功能.当内容非提交或主页面时.\n利用 "),a("a",{attrs:{href:"http://jekyllrb.com/docs/collections/",target:"_blank",rel:"noopener noreferrer"}},[t._v("collections"),a("OutboundLink")],1),t._v(" 归纳页面.\n例如按照标签,时间线等.")]),t._v(" "),a("h2",{attrs:{id:"collections-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collections-使用","aria-hidden":"true"}},[t._v("#")]),t._v(" collections 使用")]),t._v(" "),a("p",[t._v("利用 collection 来对文章进行分类")]),t._v(" "),a("ol",[a("li",[t._v("去 "),a("code",[t._v("_config.yml")]),t._v(" 文件添加配置,注意文件名称前加 "),a("code",[t._v("_")]),t._v(" 才可引用.")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("collections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("my_collection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("output")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("permalink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("collection/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("name\n\n")])])]),a("p",[t._v("也可选择其他的映射方式 "),a("a",{attrs:{href:"http://jekyllrb.com/docs/collections/",target:"_blank",rel:"noopener noreferrer"}},[t._v("collections 映射"),a("OutboundLink")],1)]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在更目录创建对应的 "),a("code",[t._v("_my_collection")]),t._v(" 的文件夹")])]),t._v(" "),a("p",[t._v("实际上 "),a("code",[t._v("_posts")]),t._v(" 就是 jekyll 内部默认的 "),a("code",[t._v("collections")]),t._v(" .")]),t._v(" "),a("p",[t._v("自定义变量放在 "),a("code",[t._v("_data")]),t._v(" 利用 "),a("code",[t._v("site.data.<file_name>")]),t._v(" 进行引用\n支持  "),a("code",[t._v("json,yaml,csv")]),t._v(" 三种文件类型.")]),t._v(" "),a("h2",{attrs:{id:"本地文件和-url-映射原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地文件和-url-映射原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 本地文件和 url 映射原理")]),t._v(" "),a("p",[t._v("默认映射方式 "),a("code",[t._v("/:categories/:year/:month/:day/:title.html")]),t._v("\n配置路径映射的方式有两种.")]),t._v(" "),a("ul",[a("li",[t._v("在每个文件中的 "),a("code",[t._v("fromt matter")]),t._v(" 中设置 "),a("code",[t._v("permalink")]),t._v(" 属性")]),t._v(" "),a("li",[t._v("在 _config.yml 中进行配置,参见 "),a("a",{attrs:{href:"http://jekyllrb.com/docs/configuration/",target:"_blank",rel:"noopener noreferrer"}},[t._v("config"),a("OutboundLink")],1),t._v("\n和 "),a("a",{attrs:{href:"http://jekyllrb.com/docs/collections/",target:"_blank",rel:"noopener noreferrer"}},[t._v("collections"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("前者的设置会覆盖全局设置.常用技巧")]),t._v(" "),a("ul",[a("li",[t._v("忽略文件后缀,会将文件作为 index.html 放入目录")])]),t._v(" "),a("p",[t._v("本地的文件类型分为三种.")]),t._v(" "),a("ul",[a("li",[t._v("pages 直接加载的静态页面或内容")]),t._v(" "),a("li",[t._v("定义在 collections 模块中的内容")]),t._v(" "),a("li",[t._v("属于 post 目录下的内容")])]),t._v(" "),a("p",[t._v("应为对于 post 文件下的内容命名有强约定,而对于其他两种类型没有此约定.\n所以在全局设置 "),a("code",[t._v("permalink")]),t._v(" 时对不同文件类型的表示有区别.")]),t._v(" "),a("p",[t._v("例如在全局环境下配置 "),a("code",[t._v("permalink: data")])]),t._v(" "),a("ul",[a("li",[t._v("_posts 下的文件 url 为 "),a("code",[t._v("/:categories/:year/:month/:day/:title.html")])]),t._v(" "),a("li",[t._v("collection 和 page 为 "),a("code",[t._v("/:title.html")])])]),t._v(" "),a("h2",{attrs:{id:"待度清单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#待度清单","aria-hidden":"true"}},[t._v("#")]),t._v(" 待度清单")]),t._v(" "),a("ul",[a("li",[t._v("[ ] "),a("a",{attrs:{href:"http://jmcglone.com/guides/github-pages/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jekyll 基本入门"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("[ ] 博客迁移 "),a("a",{attrs:{href:"http://jekyllrb.com/docs/migrations/",target:"_blank",rel:"noopener noreferrer"}},[t._v("blog migrations"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("[ ] 可以包含自定义 sass 文件  "),a("a",{attrs:{href:"http://jekyllrb.com/docs/assets/",target:"_blank",rel:"noopener noreferrer"}},[t._v("asset"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("语言使用 ruby.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".\n├── _config.yml\n├── _data\n|   └── members.yml\n├── _drafts\n|   ├── begin-with-the-crazy-ideas.md\n|   └── on-simplicity-in-technology.md\n├── _includes\n|   ├── footer.html\n|   └── header.html\n├── _layouts\n|   ├── default.html\n|   └── post.html\n├── _posts\n|   ├── 2007-10-29-why-every-programmer-should-play-nethack.md\n|   └── 2009-04-26-barcamp-boston-4-roundup.md\n├── _sass\n|   ├── _base.scss\n|   └── _layout.scss\n├── _site\n├── .jekyll-metadata\n└── index.html # can also be an 'index.md' with valid YAML Frontmatter\n")])])]),a("p",[t._v("文件作用.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("文件或路径")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("_config.yml")]),t._v(" "),a("td",[t._v("保存文本编译的配置信息 "),a("a",{attrs:{href:"http://jekyllrb.com/docs/configuration/",target:"_blank",rel:"noopener noreferrer"}},[t._v("config"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("_drafts")]),t._v(" "),a("td",[t._v("草稿为发布的提交,"),a("a",{attrs:{href:"http://jekyllrb.com/docs/drafts/",target:"_blank",rel:"noopener noreferrer"}},[t._v("草稿工作流"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("_includes")]),t._v(" "),a("td",[t._v("自定义重用模板")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("_layouts")]),t._v(" "),a("td",[t._v("包装提交文件的模板")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("_posts")]),t._v(" "),a("td",[t._v("编辑完成的动态文件内容")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("_data")]),t._v(" "),a("td",[t._v("格式化后的网页内容")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("_sass")]),t._v(" "),a("td",[t._v("sass 文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("_site")]),t._v(" "),a("td",[t._v("默认编译形成的示例目录")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v(".jekyll-metadata")]),t._v(" "),a("td",[t._v("追踪未修改文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("index.html,index.md")]),t._v(" "),a("td",[t._v("主页")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("other files")]),t._v(" "),a("td",[t._v("所有其他文件目录,例如图片,css 等")])])])]),t._v(" "),a("p",[t._v("核心配置文件 "),a("code",[t._v("_config.yml")]),t._v(" 决定 jekyll 的编译逻辑.\n常用配置如下. "),a("a",{attrs:{href:"http://jekyllrb.com/docs/configuration/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://jekyllrb.com/docs/configuration/"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("配置")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("site source")]),t._v(" "),a("td",[t._v("设置 jekyll 读取文件的路径")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("site destination")]),t._v(" "),a("td",[t._v("设置 jekyll 写入文件路径")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("exclude")]),t._v(" "),a("td",[t._v("排出的路径或文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("include")]),t._v(" "),a("td",[t._v("包含的路径和文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("keep files")]),t._v(" "),a("td",[t._v("组织 jekyll 重新生成的文件或路径")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("time zone")]),t._v(" "),a("td",[t._v("设置主站的时区")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("encoding")]),t._v(" "),a("td",[t._v("设置文件编码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("safe")]),t._v(" "),a("td",[t._v("不懂")])])])]),t._v(" "),a("h2",{attrs:{id:"编辑方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 编辑方法")]),t._v(" "),a("ol",[a("li",[t._v("_posts 存放已编写好的内容")]),t._v(" "),a("li",[t._v("_drafts 存放草稿")])]),t._v(" "),a("h3",{attrs:{id:"post-文件规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post-文件规则","aria-hidden":"true"}},[t._v("#")]),t._v(" post 文件规则")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("文件名 "),a("code",[t._v("year-month-day-title.markup")])]),t._v(" "),a("ul",[a("li",[t._v("year 四位格式")]),t._v(" "),a("li",[t._v("month,day 2 位格式")]),t._v(" "),a("li",[t._v("markup 问文件格式")])])]),t._v(" "),a("li",[a("p",[t._v("文件开头符合 "),a("a",{attrs:{href:"http://jekyllrb.com/docs/posts/",target:"_blank",rel:"noopener noreferrer"}},[t._v("yaml front matter"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("利用 "),a("code",[t._v("---")]),t._v(" 划分题头和正文")]),t._v(" "),a("li",[t._v("题头用来定义模板需要的默认变量,例如 title 等")]),t._v(" "),a("li",[t._v("文件头定义字段可利用 liquid 模板语法引用.")]),t._v(" "),a("li",[t._v("文件头也可为空,但必须保留 "),a("code",[t._v("---")]),t._v(" 的结构,给 skeyll 解析")]),t._v(" "),a("li",[a("strong",[t._v("注意文本格式不要是 bom 的 utf-8,特别是在 windows 下")])])])]),t._v(" "),a("li",[a("p",[t._v("文件内容,支持如下格式")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://daringfireball.net/projects/markdown/",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.promptworks.com/textile",target:"_blank",rel:"noopener noreferrer"}},[t._v("textile"),a("OutboundLink")],1)])])])]),t._v(" "),a("p",[t._v("文件开头提供如下的全局变量给 jekyll 去使用.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("变量名")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("layout")]),t._v(" "),a("td",[t._v("定义布局文件,文件必须存在于 "),a("code",[t._v("_layouts")]),t._v(" 目录下")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("date")]),t._v(" "),a("td",[t._v("YYYY-MM-DD HH:MM:SS +/-TTTT 用来确保文件分类正确")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("category,categories")]),t._v(" "),a("td",[t._v("配合 yaml list 实现路由的多种映射类型")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("tags")]),t._v(" "),a("td",[t._v("文章的标签")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("permalink")]),t._v(" "),a("td",[t._v("设置文件和 url 之间的映射关系")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("published")]),t._v(" "),a("td",[t._v("是否编译显示该页面,布尔值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("page")]),t._v(" "),a("td",[t._v("每个页面包含的变量")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("sites")]),t._v(" "),a("td",[t._v("网站变量")])])])]),t._v(" "),a("p",[t._v("利用 "),a("code",[t._v("jekyll serve --unpublished 或 --drafts 来编译草稿或私有文件")])]),t._v(" "),a("p",[t._v("文件引用路径可以包含变量")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("site.url 在编译时会变为项目根路径\n\n![]({{site.url}}/path/file)\n")])])]),a("p",[t._v("标注 post 文件格式如下")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\n    ---  ---\x3e YAML 格式的题头\n    layout: post  --\x3e 布局模式为 post\n    title:  "test skeyll" --\x3e 文章主题\n    date:   2015-11-17 16:16:01 -0600 --\x3e 文章创建时间\n    categories: jekyll update --\x3e文章分类\n    ---\n\n    ---\x3e 文章正文\n\n    You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `bundle exec jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.\n\n    To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.\n\n')])])]),a("p",[t._v("文件内容的引用使用"),a("code",[t._v("assets")]),t._v(" 或 "),a("code",[t._v("downloads")]),t._v(" 文件夹.\n为了防止应用路径丢失可以在引用前加入"),a("code",[t._v("<site.url>")]),t._v(" 变量.\n若加载资源一直属于根目录下则直接使用"),a("code",[t._v("/path/source")]),t._v(" 即可.")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token url"}},[t._v("![test]({{site.url}}/assets/test.jpg)")]),t._v("\n")])])]),a("p",[t._v("可以直接在内容区域使用模板,例如想在文章结尾列出所有文章.")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  {% for post in site.posts %}\n"),a("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("    <li>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v('      <a href="{{ post.url }}">{{ post.title }}</a>')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("    </li>")]),t._v("\n  {% endfor %}\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("内部模板引擎会将所有文章逐一列出.")]),t._v(" "),a("h2",{attrs:{id:"插件体系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件体系","aria-hidden":"true"}},[t._v("#")]),t._v(" 插件体系")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://jekyllrb.com/docs/plugins/#converters-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("plugins"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("注意由于 github pages 中使用的是安全模式进行的编译,意味着你不能使用自定义插件进行编译.\n基于此建议本地编译,在 githubpage 上传编译后的内容.")]),t._v(" "),a("p",[t._v("插件安装的三种方式")]),t._v(" "),a("ul",[a("li",[t._v("在 "),a("code",[t._v("_plugins")]),t._v(" 目录下放置插件")]),t._v(" "),a("li",[t._v("在 "),a("code",[t._v("_config.yml")]),t._v(" 文件中添加插件")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("plugins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("jekyll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("coffeescript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" jekyll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("watch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" jekyll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("assets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("利用 "),a("code",[t._v("gem istall jekyll-coffeescript jekyll-watch jekyll-assets")]),t._v(" 安装插件")]),t._v(" "),a("ul",[a("li",[t._v("在 "),a("code",[t._v("Gemfile")]),t._v(" 中添加相关插件")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("group "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v('jekyll_plugins do\n   gem "my'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("jekyll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v('plugin"\n   gem "another'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("jekyll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v('plugin"\n end\n\n')])])]),a("p",[t._v("使用  "),a("code",[t._v("bundle install")]),t._v(" 进行安装.")]),t._v(" "),a("p",[t._v("这三种方式可以被同时使用.插件一般分为五大类.")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"http://jekyllrb.com/docs/plugins/#generators",target:"_blank",rel:"noopener noreferrer"}},[t._v("generators"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("定义一个符合自己规则的编译规则.\n利用 generators 可以在每个文件中添加自定义内容.")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("a",{attrs:{href:"http://jekyllrb.com/docs/plugins/#converters",target:"_blank",rel:"noopener noreferrer"}},[t._v("Converters"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("选择新的转换器来转换文档内容")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("a",{attrs:{href:"http://jekyllrb.com/docs/plugins/#commands",target:"_blank",rel:"noopener noreferrer"}},[t._v("Commands"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("定义命令在文章中引用.")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("a",{attrs:{href:"http://jekyllrb.com/docs/plugins/#tags",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tags"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("自定义标签在模板中使用")]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[a("a",{attrs:{href:"http://jekyllrb.com/docs/plugins/#hooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hooks"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("利用钩子在引擎执行的各个阶段实现自动化控制.")]),t._v(" "),a("p",[a("strong",[t._v("导航")])]),t._v(" "),a("ul",[a("li",[t._v("提取数据放入 _data 目录")]),t._v(" "),a("li",[t._v("在题头循环导出数据")])]),t._v(" "),a("ol",[a("li",[t._v("利用 data 定义分类用模板进行显示.")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("docs_list_title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Docs\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("docs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Introduction\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" introduction.html\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Configuration\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" configuration.html\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" deployment.html\n")])])]),a("p",[t._v("若要产生排序的列表使用过滤器.")]),t._v(" "),a("p",[t._v("使用模板语言进行过滤.")]),t._v(" "),a("h2",{attrs:{id:"模板原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 模板原理")]),t._v(" "),a("p",[t._v("利用 "),a("a",{attrs:{href:"https://shopify.github.io/liquid/",target:"_blank",rel:"noopener noreferrer"}},[t._v("liqiud"),a("OutboundLink")],1),t._v(" 进行模板解析.\n利用题头进行变量定义.\n模板应用方法.")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("变量")])])]),t._v(" "),a("pre",[a("code",[t._v("--- --\x3e 利用 yaml 题头进行变量定义\ntest:hello\n---\n\n**<page.test>** --\x3e 此处解析变量,注意变量属于 page 的属性\n")])]),t._v(" "),a("p",[t._v("若想添加原始页面,直接在编译生成的静态网站中建立文档即可.\n或者直接在在资源的根目录或子目录,创建 html 文件.\n或题头符合 YAML 规范的 mark 文档,都会直接被编译到静态文件根目录\n下的相应位置. jekyll 编译器会遍历根目录下内容进行处理.\n若存在非 jekyll 直接规定的文件夹则直接编译到静态网站的相应位置.\n同时会根据文件的类型进行默认的编译.利用 "),a("code",[t._v("permalink")]),t._v(" 属性控制\nmarkdown 等文档类型的编译位置.")]),t._v(" "),a("h2",{attrs:{id:"坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#坑","aria-hidden":"true"}},[t._v("#")]),t._v(" 坑")]),t._v(" "),a("p",[a("strong",[t._v("ruby 版本不够")])]),t._v(" "),a("ol",[a("li",[t._v("使用 brew 安装 rvm ,ruby 版本管理工具")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L get.rvm.io "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -s stable\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("source")]),t._v(" ~/.rvm/scripts/rvm\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("使用 rvm 管理 ruby 安装包")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证 rvm 安装成功")]),t._v("\nrvm -v\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有 ruby 安装版本")]),t._v("\nrvm list known\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 ruby,")]),t._v("\nrvm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" 2.1.4\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用某版本 ruby 并设为默认")]),t._v("\nrvm use 2.1.4 --default\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看已安装版本")]),t._v("\nrvm list\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 卸载已安装版本")]),t._v("\nrvm remove 2.1.4\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看安装镜像")]),t._v("\ngem "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("source")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 跟换镜像")]),t._v("\ngem update --system\ngem uninstall rubygems-updates\ngem sources -r http://rubygems.org/\ngem sources -a http://rubyg.taobao.org\n")])])]),a("p",[a("strong",[t._v("不理解 ruby 生态")])]),t._v(" "),a("ul",[a("li",[t._v("gem 是 ruby 环境的包管理工具")]),t._v(" "),a("li",[t._v("gemfile 是 ruby 安装配置文件")]),t._v(" "),a("li",[t._v("bundle 也是包管理工具,但是比 gem 高级,支持批量安装")]),t._v(" "),a("li",[t._v("使用 rvm 管理 ruby 版本")]),t._v(" "),a("li",[t._v("jekyll 是基于 ruby 的静态生成器")]),t._v(" "),a("li",[t._v("jekyll 插件可以利用 bundle 来安装依赖")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/jekyll/jekyll-compose",target:"_blank",rel:"noopener noreferrer"}},[t._v("jekyll-compose"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"颜色高亮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#颜色高亮","aria-hidden":"true"}},[t._v("#")]),t._v(" 颜色高亮")]),t._v(" "),a("ol",[a("li")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("gem "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" rouge\n")])])]),a("ol",{attrs:{start:"2"}},[a("li")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("highlighter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rouge\n \n")])])]),a("h2",{attrs:{id:"资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 资料")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://swaac.tamouse.org/jekyll/workflow/2016/01/13/jekyll-guard-livereload/",target:"_blank",rel:"noopener noreferrer"}},[t._v("自动加载"),a("OutboundLink")],1)])])},[],!1,null,null,null);e.default=n.exports}}]);