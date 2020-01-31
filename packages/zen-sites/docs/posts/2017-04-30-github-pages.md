---
tags:  
    - git
--- 


# github pages

**详解 github 的使用**

---

## 概述

[github pages](https://pages.github.com/)  是基于 github 的静态仓库.
可以利用 github pages 建立属于你的静态博客.此外 github 还提供了基于 [jekyll](http://jekyllrb.com/)
的静态网站编译服务,参照 jekyll 的文档规则将文件上传到 github,它会将内容自动编译成静态网站.通过 `<username>.github.io` 可以直接访问网站内容.

## 快速入门
1. 在 github 创建 `<username>.github.io` 的仓库.
例如我的 github 账户名为 `zenHeart` 仓库名为 `zenHeart.githu.io`.

2. 本地安装 jekyll 的环境.

    先保证安装了 ruby 环境.
    
    1. 安装 jekyll
        
        ```bash
        gem install jekyll
        ```
    2. 安装 bundle 包管理工具
    
        ```bash
        gem install bundle 
        ```

3. 初始化 jekyll blog.

```bash
# 选择路径,初始化 jekyll 的 blog 目录
jekyll new github_blog 

# 切换到该目录
cd github_blog

# 安装依赖
bundle install

# 查看测试网页
jekyll serve

# 访问 localhost:4000 即可看到 jekyll 
```

4. 配置本地仓库

```bash
# 在 gitpage_blog 文件下初始化  
git init
```

编辑 `.gitignore` 文件
添加如下内容

```text
# 忽略项目文件
.idea

# 忽略本地编译后站点
_site
```
    
添加 github pages 仓库地址

```git
git remote add <url> 
```



    

~~~javascript
var a = 1;

function add(a,b) {
    return a + b;
  
}

JSON.stringify('hello');
console.log('demo');
~~~

