# 控制台

**讲解控制台面板的详细使用**



## 快捷键
* `ctrl + l` 控制台清屏,也可调用 `clear()` api


## 杂项

### 消息显示模式
重复消息会只显示一次，但是会利用序号标识出现次数
如果觉得不好可以按 F1 将控制台显示变为时间戳模式
**提示：**利用该模式可以测算程序执行时间差，最小精度到 ms

### 控制台显示过滤功能
再额外的设置中可能有用的功能
1. 打印 xmlhttp 请求
2. 保留日志在控制台属性后
3.定制化的控制日志输出
[用户格式的控制台输出](https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview#heading=h.xuvxhsd2bp05)

## API
chrome 在控制台环境包含了大量 API 方便调试。

::: warning
不要再脚本中使用非 console 对象的调试 API，由于调试API 只存在控制台环境，可能在脚本中报错。
:::

### DOM 访问

1. **$0 - $4**
    DOM 对象的快捷引用， `$0` 表示最近的 DOM 对象，`$1` 表示之前引用的对象。后续值依次类推。注意这个值是在使用 inspect 观察对象时自动记录的。
2. **$(selector, startNode)**

    该方法是 `document.querySelector` 的缩写, `startNode` 申明搜索的初始节点，默认为 `document`

3. **$$(selector,startNode)**

   该方法是 `document.querySelectorAll` 的缩写
   `startNode` 申明搜索的初始节点，默认为 `document`

4. **$x(path, [startNode])**
    支持采用 `xpath` 语法搜索节点

5. **inspect(fucntion/object)**
   传入函数会跳转到 source 面板，dom 对象会跳转到 element 面板实现快速定位

6. **getEventListeners(object)** 
   快速返回 dom 元素上的监听事件，多个会返回数组
7. **monitorEvents(object[, events])，unmonitorEvents(object[, events])**
   监控，取消对象事件变化监听，events 支持数组，例如  `monitorEvents(window, ["resize", "scroll"])` 监控窗口尺寸变化和滚动事件，会在事件触发时打印事件结果，事件列表详见 [devtool](https://developers.google.com/web/tools/chrome-devtools/console/utilities)


### 控制台控制
1. **clear()**
   清空控制台，MaC 快捷键为 `ctrl+l`
2. **copy(object)** 
   复制内容
3. **debug(function)，undebug(function)**
   给函数设置，取消断点
4. **dir**
   按照对象风格显示结果，适用于 dom 等复杂对象的输出
5. **monitor(function)，unmonitor(function)**
   设置，取消函数执行监控，当函数被调用时自动打印输入，注意对象输入无法正确打印
6. **queryObjects(Constructor)**
   返回某个构造函数创建的对象，例如 queryObjects(Promise) 返回所有 promise 实例

### console
console 用于打印信息

1. console.log() 输出日志信息

用法举例：
```
    // 1. 使用逗号输入多个变量，输出空格分隔各变量
   console.log('hello','world');
   //  2.
```
2. console.group() console.groupEnd() 用来将输出分组
方便在调试时观察信息，使用步骤是
    1. 先创建一个组并传入组名 console.group(‘group_name')
    2. 在创建的组中输入你的调试信息例如 console.log 等
    3. 调用 console.gruopEnd() 结束该输出组，其中支持嵌套操作。

用法举例：
```
    //1.单层结构
    console.group('group1');
    console.log('hello');
    console.groupEnd();

    //2.嵌套结构
    console.group('group1');
    console.log('hello');
        console.group('group2');
        console.log('world');
        console.groupEnd();
    console.groupEnd();
```
3. console.groupCollapsed()
该函数用来折叠组或输出使用方法有两种
    1. 一般配合 console.group() 来折叠组
    2. 直接使用它来生成组，此时多次调用会使输出形成嵌套，利用
    console.groupEnd() 结束嵌套。

用法举例：
```
    //1.配合组使用
    console.groupCollapsed('group1');
    console.group('group1');
    console.log('hello');
    console.groupEnd();
    //2.单独使用
    console.groupCollapsed('group1')
    console.log('hello');
            console.groupCollapsed('group2');
            console.log('world');
            console.groupEnd();
    console.groupEnd();
```
总结 console.group() 和 console.Collapsed() 其实都是用来
标记输出的，使用区别在于前者展开显示后者折叠显示，多次调用会形成
嵌套所以需要 console.groupEnd() 来结束嵌套。

4. console.error() 显示错误

用法举例：
```
    // 1. 支持输入格式
   console.error("Error: %s (%i)", "Server is  not responding",500);
   //  2.
```

4. console.warn() 显示警告

用法举例：
```
    // 1. 支持输入格式
   console.warn('Warning! Too few nodes (%d)', 2);
   //  2.
```
5. console.assert() 显示断言
用法举例：
```
    // 1. 支持输入格式
    var a= [1,2,3,4]
    console.assert(a.length < 3, "Node count is > 3");
```
6. console.dir() 显示 JS

举例如下：
```
console.dir(document);
```
7. 格式化输出
在前面所讲的以字符串作为输入的输出指令中，chrome 支持如下的输出模式
* _%s:_ 格式化字符串
* _%i or %I:_ 格式化变量为整形
* _%f:_ 格式化变量为浮点
* _%o:_ 格式化变量为DOM 结构
* _%O:_ 格式化变量为js 对象
* _%c:_ 运用 CSS 规则格式化输出

举例如下：
```
    //1.输出字符串和数字
    console.log("%s has %d points", "Sam", 100);
    //2. CSS 格式化输出
    console.group("%cThis will be formatted with large, blue text", "color: blue; font-size: x-large;border:1px red solid;background:black;border-radius:100px");
    //3. 输出 DOM 结构
    body_ele= document.getElementsByTagName('body');
    console.log('%o',a);
    //4. 输出 JS 对象
    console.log('%O',document);
```
总结：使用 %o 和 %O 的意义在于可以随时监控你所需要的 DOM 对象，在变化后自动在
控制台打出

8. console.table() 输出数组
举例如下：
```
    //1.直接输出数组
    var matrix = [{col1:12,col2:23}];
    console.table(matrix);

    //2.选择需要输出内容
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    var family = {};
    family.mother = new Person("Susan", "Doyle", 32);
    family.father = new Person("John", "Doyle", 33);
    family.daughter = new Person("Lily", "Doyle", 5);
    family.son = new Person("Mike", "Doyle", 8);

    console.table(family, ["firstName", "lastName"]);
```

9. console.time(),console.timeEnd()
用来测试函数时间结果，举例如下：
```
    //1.必须加标注来指示执行结果。
    console.time("Array initialize");
    var array= new Array(1000000);
    for (var i = array.length - 1; i >= 0; i--) {
       array[i] = new Object();
    };
    console.timeEnd("Array initialize");
```






### 杂项
1. **keys(object),values(object)**
   返回键和值，效果类似 `Object.keys，Object.values`
2. **table(data,[columns])**
   按照表格显示数据，方便查看返回结果，`columns` 显示特定列
## 参考资料
* [console API 详解](https://developers.google.com/web/tools/chrome-devtools/debug/console/console-reference#consoletraceobject)
* [控制台 API](https://developers.google.com/web/tools/chrome-devtools/debug/command-line/command-line-reference?hl=en)
