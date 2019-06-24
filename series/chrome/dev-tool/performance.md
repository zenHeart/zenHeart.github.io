web-performance
===
**前言:记录 web 性能评估的基本参数**

---

## 概览
* 精简压缩内容
* 关键渲染路径
* 渲染性能
* 低带宽,高延迟的解决

[性能概览](https://developers.google.com/web/fundamentals/performance/)

## [RAIl](https://developers.google.com/web/fundamentals/performance/rail)
基于用户的性能评价指标
* response 用户操作相应时间小于 100ms,打开按钮,组件操作等
* animation 小于 16ms,动画拖动等
* idle 50ms 的间隔时间响应用户操作
* load 1000ms 以内加载核心内容
 
时间的意义

* `0-16ms` 60 frame/s 一位这动画的渲染时间需低于 16.66 ms
    > 扣除浏览器的渲染时间,实际只有 10ms 来执行代码
* `100ms` 用户操作的相应时间
* `100-300ms` 会稍微感觉延迟
* `300-1000ms` 加载页面,或切换页面可容忍的时间
* `1000+s` 用户关注点降低
* `10s+` 用户产生反感

> 对于超过 500 ms 的任务请提供提示

## 内容优化策略
* 文本资源 html,js,css 预编译进行压缩
* 图片资源 选择正确的格式,进行压缩
* 字体,优化字体进行压缩
* 服务端采用缓存策略,压缩算法
 
* [ ] ###  [优化内容](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/)
* 评估内容大小
    * 压缩请求
    * 压缩资源
* 评估第三方资源的加载和价值是否相等
    * 利用率,用户使用该地方资源的次数
    * 安全性,是否处于核心地位,造成整个应用的故障
 
> 必须保证加载的资源利大于弊

###  [文本优化](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer)
* 内容优化
    * 删除注释,空格
    * 利用 `uglify` 等工具替换变量等
* 传送优化
    * 使用 gzip 对内容优化后的内容进行压缩传送

> 浏览器会首先利用 gzip 进行请求,服务器需要配置才可响应正确的内容
配置参见 [h5pb 服务端配置](https://github.com/h5bp/server-configs)
   
   
查看网站是否压缩
* 利用 chrome  debug,查看 `content-encoding` 和 size
> 没有显示类似文章中传输尺寸和实际尺寸

* 利用 [检测压缩](http://www.whatsmyip.org/http-compression-test/?url=aHR0cDovLzExMi43NC4xNzAuMTk3OjMzMzMyL3NlcnZlci5odG1s) 输入域名查看网站是否压缩

* [ ] ### [图像优化](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization) 
优化步骤
* 选择正确的格式
    * 字体优于图片,[字体优化](https://www.igvita.com/2014/01/31/optimizing-web-font-rendering-performance/)
    * 图片格式选择
        * [矢量图](https://www.wikiwand.com/en/Vector_graphics),简单的线性图片
        * [像素图](https://www.wikiwand.com/en/Raster_graphics),照片等
        * [根据情况选择不同格式](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization#_7)
* 图像压缩
    * svg 利用  [svgo](https://github.com/svg/svgo)
    * 像素图
        * 根据屏幕选择尺寸
        * 位深的降低
        * 选择新的 [webp](https://developers.google.com/speed/webp/docs/compression)
        * 结合格式采用图像压缩算法

### [字体优化](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization)
* 减少外部字体加载
* 采用自己内嵌技术,选择字体的子集,参考 [css3 字体模块](https://www.w3.org/TR/css-fonts-3/#descdef-unicode-range)
* 优化和压缩字体

### [http 缓存](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching)
* Etag 标签实现缓存的验证,参看服务端是否由此配置
   [h5bp html config](https://github.com/h5bp/server-configs)
* 缓存控制策略 [cache-control](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9)
  用来控制浏览器和代理如何处理缓存

使用 [google  缓存策略](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#max-age)

##  [渲染优化](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model)
* dom 树
    * 获取字节流
    * 解析编码为文本流
    * 进行语义解析
    * 生成 DOM 树
* cssom
    * 步骤同上
    * 区别在于基于 css 层叠属性会存在覆盖
    * 未定义 css 会根据用户代理设定为默认值
> 上述流程,下载是并行,下载完成后是顺序解析
* 组合 dom 和 cssom 构建渲染树
    * 忽略不可见节点
    * 忽略 display 为 none 的节点
    > 注意 opacity 为 0 只是代表透明,但是会被渲染,visibility 同理
* 根据渲染树,计算所有元素的盒模型
    * 基于视图窗口和 dom 属性计算盒尺寸,大小等
    * 计算相对视图窗口的像素位置
* 根据盒模型按照像素点在视图窗口进行绘制

> 若 dom 或 cssom 发生变化,会重复 1-5 的步骤
> 渲染优化就是尽可能简化加快上述流程

### [阻塞渲染](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css)
* 避免 **FOUC** 内容样式短暂失效
* 使用媒体查询,优化 css 加载
* 使用 async 实现脚本的异步加载
    * 异步加载意味着需要模块管理工具,加载依赖

> css 下载阻塞 cssdom, js 阻塞 dom 构建.通过异步媒体查询的方式优化资源的加载

### [评估关键渲染路径](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp)
* 使用 lighthouse
* 优化关键路径的数量,长度和字节数量
    * js 异步加载
    * css 内联,尽量减少加载次数
    
### [渲染流程](https://developers.google.com/web/fundamentals/performance/rendering/) 
* dom 和 cssom 加载完成后
* `layout`计算布局 重点是盒模型等
* `paint` 按照像素绘制
* `composite` 按照层级组合图层

> 重点是理解每个环节应该如何优化对应的资源

## 压力测试
1. 测试连接的并发数量。


## 参考资料
[google performance](https://developers.google.com/web/fundamentals/performance/)
[jMinter](https://www.ibm.com/developerworks/cn/java/l-jmeter/)