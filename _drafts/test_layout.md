---
title: 测试自定义模板
tag: test_layout      
date: 2017-05-07    
layout: blog
---

{{page.title}}
===
**前言:自定义模板使用**

---

# GFM 语法示例

* [标题](#ts-title)
* [段落](#ts-markdown)
* [表格](#ts-table)
* [文本修饰](#ts-font)
* [引用](#ts-ref)
* [块结构](#ts-block)
* [序列](#ts-list)
* [补充](#ts-suppl)

标题  {#ts-title}
---

```markdown
# 一级标题 
## 二级标题 
### 三级标题 
#### 四级标题 
##### 五级标题 
###### 六级标题 

一级标题
===

二级标题
---
```

# 一级标题 
## 二级标题 
### 三级标题 
#### 四级标题 
##### 五级标题 
###### 六级标题 

一级标题
===

二级标题
---
****

文本 {#ts-markdown}
---

```markdown
第一段 

间隔一行为第二段

第一行,行末接两个或以上的空格自动换行   
第二行
```

第一段 

间隔一行为第二段

第一行,行末接两个或以上的空格自动换行   
第二行

表格 {#ts-table}
===

```markdown
左对齐|居中对齐|右对齐
:---|:---:|---:|
`:---`效果相同|`:---:`居中,`---` 也为居中对齐|`---:`右对齐|
```

左对齐|居中对齐|右对齐
:---|:---:|---:|
`:---`效果相同|`:---:`居中,`---` 也为居中对齐|`---:`右对齐|

   
文本修饰 {#ts-font}
===

```markdown
*斜体*    
**粗体**    
~~删除~~   
水平线   

---
```

*斜体*    
**粗体**   
~~删除~~   
水平线   

---




引用 {#ts-ref}
---

```markdown
> 一级
>> 二级   
二级

> 一级
```


> 一级
>> 二级   
二级

> 一级

链接 {#ts-link}
====

```markdown
[显示链接](#ts-link) 

直接引用: <http://www.baidu.com>

隐式链接: [百度][#bd] 

[#bd]: http://www.baidu.com

图片显示引用:![](https://www.baidu.com/img/bd_logo1.png)

图片隐式引用:![][#bdlogo]

[#bdlogo]: https://www.baidu.com/img/bd_logo1.png
```

[显示链接](#ts-link) 

直接引用: <http://www.baidu.com>


隐式链接: [百度][#bd] 

[#bd]: http://www.baidu.com

图片显示引用:![](https://www.baidu.com/img/bd_logo1.png)

图片隐式引用:![][#bdlogo]

[#bdlogo]: https://www.baidu.com/img/bd_logo1.png

块区域 {#ts-block}
---

    `行内块`
     
     代码块: 
     
     ```js
     console.log('其中 js 说明代码类型,不加则为文本块');   
     ```   
     
     ~~~js
     console.log('也可使用波浪号,只要结尾数量多余开头表示结束');
     ~~~~
     
     tab 缩进块
     
        这是一个文本块
        


`行内块`
 
 代码块: 
 
```js
console.log('hello world!');
```   

~~~js
console.log('也可使用波浪号,只要结尾数量多余开头表示结束');
~~~~
  
tab 缩进块
 
    这是一个文本块
    
  

序列 {#ts-list}
---

```markdown
* 无序列表1 
* 无序列表2
    * 无序列表2.1 
    
1. 有序列表1    
2. 有序列表2
    1. 有序列表2.1
```

* 无序列表1 
* 无序列表2
    * 无序列表2.1 
    
1. 有序列表1    
2. 有序列表2
    1. 有序列表2.1
 
补充内容 {#ts-suppl}
---

**利用 tab 缩进表现层次**

```markdown

1. 第一步

    ```js
    console.log('利用 tab 实现块结构的层次对齐!'); 
    ```
    
2. 第一步

    第二步第一小步
    
    1. 第一小步代码块
    
        ```js
        console.log('利用 tab 实现块结构的层次对齐!'); 
        ```
```


1. 第一步

    ```js
    console.log('利用 tab 实现块结构的层次对齐!'); 
    ```
    
2. 第一步

    第二步第一小步
    
    1. 第一小步代码块
    
        ```js
        console.log('利用 tab 实现块结构的层次对齐!'); 
        ```


**语义组合**

```markdown
> **利用引用和加粗实现提示项** 
```

> **利用引用和加粗实现提示项** 


**原生html**

```html
<span style="color:red">警示信息</span>
```

<span style="color:red">提示文本</span>


**todo**

```markdown
* [ ] 代办事项未完成 
* [X] 代办事项已完成 
```

* [ ] 代办事项未完成 
* [X] 代办事项已完成 











