---
tags:
    - 工具
    - vscode
---

# vscode snippets 插件

> 讲解如何创建一个 vscode snippets 插件

## snippet 
日常工作中经常会遇到重复的代码片段，IDE 提供了 snippet 来实现代码片段复用，参考 [vscode snippet 文档](https://code.visualstudio.com/docs/editor/userdefinedsnippets)  创建代码片段。核心结构为

```json
{
  // 片段的名称
  "For Loop": {
    // 触发片段的简写名称  
    "prefix": ["h", "h1"],
    // 片段内容，
    "body": ["hello world"],
    // 片段描述信息，可选
    "description": "test snippets"
  }
}
```

`body` 字段常用语法模式为

1. `$1-n`  tab 占位 ,当输入片段后,利用 `tab` 键会切换光标到对应占位位置
   > 注意占位符变量只支持数字，**$0** 表示光标最终停留位置
2. `${n: default}` 占位默认值, 当对应占位符未输入内容时会被 default 替换
3. `${n:|1,2,3|}` 占位选择，切换到对应占位会弹出选择框
4. `${name:default}` 变量，未定义变量默认为 default
    > 注意由于变量未设置 default 时会默认为空，再使用片段时若想显示 $ 可采用 `$$` 的方式

5. 内置变量，例如期望占位内容的默认值为剪切板内容，可使用
`$CLIPBOARD` ,或者采用 `$TM_FILENAME_BASE` 来将组件名设置为去掉后缀的文件名，常量列表参见 [Variables](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables)
6. 变量转换,例如想提取 `$TM_FILENAME` 的后缀名，可采用 `${TM_FILENAME/\(\\.\\w+)$/$1/}` 提取文件后缀名，

其余更详细语法参见 [grammar](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_grammar)


### 片段快捷键
对于反复使用的片段支持快捷键触发，配置格式为 

```json
{
  // 配置对应快捷键
  "key": "cmd+k 1",
  "command": "editor.action.insertSnippet",
  "when": "editorTextFocus",
  "args": {
     // 快捷键触发的片段 
    "snippet": "console.log($1)$0"
  }
}
```

也可将快捷键绑定到申明的代码片段上，修改 `args` 配置为

```json
{
  // ...
  "args": {
    "langId": "csharp", // 对应的语言
    "name": "myFavSnippet" // 片段的键名
  }
}
```
详细的语言支持参见 [language Identifiers](https://code.visualstudio.com/docs/languages/identifiers)

### 项目共享片段
可在特定项目创建复用的片段

1. 在项目根目录创建 `.vscode` 文件夹
2. 在 `.vscode` 文件夹, 添加后缀为 `.code-snippets` 的文件，例如 `test.code-snippets`
3. 在创建的 `test.code-snippets` 文件中添加片段

    ```json 
    {
    "test": {
       "prefix": ["af", "arrowf"],
       "body": "const ${1:func} = () => { $0 }",
       "description": "arrow function",
       // 此处申明对应作用范围
       "scope": "javascript,typescript"
       }
    }
    ```
4. 项目中即可使用该片段

该功能在版本 1.28 出现，详见 [project snippets](https://code.visualstudio.com/updates/v1_28#_project-level-snippets)


## vscode snippet 插件
除了本地和项目中配置 snippet,可将 snippet 制作为插件进行分享。
参考 [snippet guide](https://code.visualstudio.com/api/language-extensions/snippet-guide)

1. 在 package.json 中申明插件路径
  ```json
  {
     "contributes": {
       "snippets": [
         {
           "language": "javascript",
           // 这里统一放在 snippets 目录方便组织
           "path": "./snippets/a.json"
         }
       ]
     }
  } 
  ```

2. 在 `snippets` 目录创建 `a.json` 的 snippet

然后将整个项目拷贝到 `~/.vscode/extensions` ,重启 vscode 即可触发插件的 snippet

### 本地打包和安装
采用 vsce 将应用打包为 `.vsix` 文件，其他可采用 vscode 提供的 cli `code` 命令进行安装，开启 code 命令详见 [配置 code 命令](http://blog.zenheart.site/posts/2018-08-28-vscode.html#%E9%85%8D%E7%BD%AE-code-%E5%91%BD%E4%BB%A4) 

```bash
# 1. 全局安装 vsce
npm install -g vsce


# 2. 项目更目录打包插件
vsce package

# 3. 使用 code 安装 .vsix 文件
code --install-extension my-extension-0.0.1.vsix
```

### 发布
发布详见 [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) 流程类似 npm 包发布


## snippets 模板扩展
由于 vscode snippets 不支持模板文件，单书写片段过于庞大时，
需要将模板内容转换为 snippet `body` 字段的数组模式。为了简化类似 snippet 的书写流程，可以在 `body` 中配置模板文件路径。然后利用 
js 脚本读取路径中的文件内容转换为数组，重新保存即可简化包含大量内容的片段书写
