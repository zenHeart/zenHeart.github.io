# performance

**详细讲解 chrome tools 性能工具的使用**

----


## 面板概览
1. 打开控制台,点击 `Performance`
2. 访问 <https://googlechrome.github.io/devtools-samples/jank/> 点击 `add 10` 有明显的变慢

整个面板功能分为四块
* 控制面板
  * `Disable javascript samples`
  * `Network` 显示网络速率
  * `Enable advanced paint` 不清楚
  * `Cpu 限速` 原理?
* 概览面板
  * `FPS` 显示帧每秒
  * `CPU` 显示 cpu 运行情况
  * `Net` 显示网络资源加载情况
* 描述面板
  * `Network` 显示详细网络信息
  * `Frames` 显示每帧的绘制信息
  * `Timings` 显示时间线
  * `Main` 显示主线程信息
  * `Raster` 不清楚
  * `GPU` gpu 绘制时间
  * `Chrome_ChildIOThread` IO 子线程
  * `Compositor/43011` 不清楚
  * `ThreadPoolServiceThread` 线程池服务线程
* 详情面板
  * `Summary` 汇总信息
  * `Bottom-up` 不清楚
  * `Call Tree` 调用树
  * `Event Log` 事件日志

每个面板功能如下

## 控制面板

## 概览面板
## FPS
这里需要理解如下基本概念:

* **FPS** 每秒帧数是一个数值,为整数,越高说明绘制越有效

绿线就是在时间轴上每个时刻对应的 fps 数量。理论上该值越高越好.最好超过 60fps.该值的深层次原理来源于视觉暂留现象。




## 范例
1. `⌘⇧n` 打开无痕模式浏览页面(排出插件的干扰),详见 [无痕浏览](https://support.google.com/chrome/answer/95464) 


## 参考资料
* [performance](https://developers.google.cn/web/tools/chrome-devtools/evaluate-performance/)