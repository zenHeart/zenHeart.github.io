---
title: source_map    
tags: chrome tool      
birth: 2017-11-08      
modified: 2017-11-08      
---

源代码面板
===
**讲解源代码面板的功能**

---

## source map
在基于编译模式的前端项目中.
为了方便对代码的调试和定位.
浏览器提供了 `source map` 机制.
来定位文件的原始位置.下面以 chrome 讲解 `source map` 的原理

> 使用之前确保 `source map` 一打开.
在开发者面板中的 `source` 目录选择使能 `js,css` 的 source map

### 解析过程
导入文件中会包含注释指向 map 文件.
一般格式如下

```js
//# sourceMappingURL=/path/to/script.js.map 
```

sourcemap 文件内容为

```js
{
    version: 3,
    file: "script.js.map",
    sources: [
        "restify.js",
        "content.js",
        "widget.js"
    ],
    sourceRoot: "/",
    names: ["slideUp", "slideDown", "save"],
    mappings: "AAA0B,kBAAhBA,QAAOC,SACjBD,OAAOC,OAAO..."
} 
```

## 参考资料
[source map](http://blog.teamtreehouse.com/introduction-source-maps)


