(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{303:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"github-pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-pages","aria-hidden":"true"}},[t._v("#")]),t._v(" github pages")]),t._v(" "),s("p",[s("strong",[t._v("github pages 的使用详解")])]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("github pages"),s("OutboundLink")],1),t._v("  是基于 github 的静态仓库.\n可以利用 github pages 建立属于你的静态博客.此外 github 还提供了基于 "),s("a",{attrs:{href:"http://jekyllrb.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jekyll"),s("OutboundLink")],1),t._v("\n的静态网站编译服务,参照 jekyll 的文档规则将文件上传到 github,它会将内容自动编译成静态网站.通过 "),s("code",[t._v("<username>.github.io")]),t._v(" 可以直接访问网站内容.")]),t._v(" "),s("h2",{attrs:{id:"快速入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速入门","aria-hidden":"true"}},[t._v("#")]),t._v(" 快速入门")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("在 github 创建 "),s("code",[t._v("<username>.github.io")]),t._v(" 的仓库.\n例如我的 github 账户名为 "),s("code",[t._v("zenHeart")]),t._v(" 仓库名为 "),s("code",[t._v("zenHeart.githu.io")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("本地安装 jekyll 的环境.")]),t._v(" "),s("p",[t._v("先保证安装了 ruby 环境.")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("安装 jekyll")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("gem "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" jekyll\n")])])])]),t._v(" "),s("li",[s("p",[t._v("安装 bundle 包管理工具")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("gem "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" bundle \n")])])])])])]),t._v(" "),s("li",[s("p",[t._v("初始化 jekyll blog.")])])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择路径,初始化 jekyll 的 blog 目录")]),t._v("\njekyll new github_blog \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到该目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" github_blog\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\nbundle "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看测试网页")]),t._v("\njekyll serve\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 访问 localhost:4000 即可看到 jekyll ")]),t._v("\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("配置本地仓库")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 gitpage_blog 文件下初始化  ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n")])])]),s("p",[t._v("编辑 "),s("code",[t._v(".gitignore")]),t._v(" 文件\n添加如下内容")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# 忽略项目文件\n.idea\n\n# 忽略本地编译后站点\n_site\n")])])]),s("p",[t._v("添加 github pages 仓库地址")]),t._v(" "),s("div",{staticClass:"language-git extra-class"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[t._v("git remote add <url> \n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);