---
tags:
    - 测试
    - markdown
---

# VitePress Markdown 测试

> 这是用于测试 VitePress Markdown 渲染的完整测试文章

## 标题测试 H2

### 标题测试 H3

#### 标题测试 H4

这是普通段落文本，用于测试基础渲染。

## 文本格式

**粗体文本** 和 *斜体文本* 和 ***粗斜体***

~~删除线文本~~

`行内代码文本`

==高亮文本==

## 链接

[链接到首页](/)

## 列表

### 无序列表

- 列表项 1
- 列表项 2
  - 嵌套列表项 2.1
  - 嵌套列表项 2.2
- 列表项 3

### 有序列表

1. 第一项
2. 第二项
3. 第三项
   1. 嵌套有序列表
   2. 嵌套有序列表

## 任务列表

- [x] 已完成任务
- [ ] 未完成任务
- [ ] 另一个任务

## 引用块

> 这是引用块的第一行
> 这是引用块的第二行
>
> 可以有空行分隔
> 引用块支持多行

## 代码块

### 无语言标识

```
这是一个没有语言标识的代码块
用于测试基础代码块渲染
```

### JSON

```json
{
  "name": "test",
  "version": "1.0.0",
  "dependencies": {
    "vue": "^3.0.0"
  }
}
```

### JavaScript

```javascript
const greeting = 'Hello, World!';

function add(a, b) {
  return a + b;
}

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a) {
    this.result += a;
    return this;
  }
}

export { greeting, add, Calculator };
```

### TypeScript

```typescript
interface User {
  name: string;
  age: number;
}

type Status = 'pending' | 'active' | 'closed';

function processUser(user: User): Status {
  if (user.age < 18) {
    return 'pending';
  }
  return 'active';
}
```

### Python

```python
def fibonacci(n):
    """计算斐波那契数列"""
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

class DataProcessor:
    def __init__(self, data):
        self.data = data

    def process(self):
        return [x * 2 for x in self.data]
```

### Go

```go
package main

import "fmt"

func main() {
    message := "Hello, Go!"
    fmt.Println(message)
}

type Config struct {
    Name string
    Port int
}
```

### 带有标题的代码块

```typescript [config.ts]
export default {
  title: 'My Site',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ]
  }
}
```

### 带有行号和语言的代码块

```javascript {3-5}
function calculate(items) {
  const result = items.reduce((sum, item) => {
    return sum + item.value;
  }, 0);
  return result;
}
```

## 表格

| 表头1 | 表头2 | 表头3 |
|-------|-------|-------|
| 单元格1 | 单元格2 | 单元格3 |
| 单元格4 | 单元格5 | 单元格6 |
| 单元格7 | 单元格8 | 单元格9 |

## 自定义容器

::: info
这是一个信息容器
:::

::: tip
这是一个提示容器
:::

::: warning
这是一个警告容器
:::

::: danger
这是一个危险容器
:::

::: details
这是一个可展开的详情容器
:::

## 数学公式

行内公式: $E = mc^2$

块级公式:

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

## 图表 / Mermaid

### 基础流程图 Basic flowchart

```mermaid
graph LR
    A[Square Rect] -- Link text --> B((Circle))
    A --> C(Round Rect)
    B --> D{Rhombus}
    C --> D
```

### 中文流程图

```mermaid
graph TD
    A[开始] --> B{判断}
    B -->|条件1| C[处理1]
    B -->|条件2| D[处理2]
    C --> E[结束]
    D --> E
```

### 带样式的大型流程图 Styled flowchart

```mermaid
graph TB
    sq[Square shape] --> ci((Circle shape))

    subgraph A
        od>Odd shape]-- Two line<br/>edge comment --> ro
        di{Diamond with <br/> line break} -.-> ro(Rounded<br>square<br>shape)
        di==>ro2(Rounded square shape)
    end

    e --> od3>Really long text with linebreak<br>in an Odd shape]

    e((Inner / circle<br>and some odd <br>special characters)) --> f(,.?!+-*ز)

    cyr[Cyrillic]-->cyr2((Circle shape Начало));

     classDef green fill:#9f6,stroke:#333,stroke-width:2px;
     classDef orange fill:#f96,stroke:#333,stroke-width:4px;
     class sq,e green
     class di orange
```

### 基础饼图 Basic pie chart

```mermaid
pie title NETFLIX
         "Time spent looking for movie" : 90
         "Time spent watching it" : 10
```

### 基础时序图 Basic sequence diagram

```mermaid
sequenceDiagram
    Alice ->> Bob: Hello Bob, how are you?
    Bob-->>John: How about you John?
    Bob--x Alice: I am good thanks!
    Bob-x John: I am good thanks!
    Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

    Bob-->Alice: Checking with John...
    Alice->John: Yes... John, how are you?
```

### 时序图：循环、条件分支 Loops, alt and opt

```mermaid
sequenceDiagram
    loop Daily query
        Alice->>Bob: Hello Bob, how are you?
        alt is sick
            Bob->>Alice: Not so good :(
        else is well
            Bob->>Alice: Feeling fresh like a daisy
        end

        opt Extra response
            Bob->>Alice: Thanks for asking
        end
    end
```

### 时序图：自身消息 Message to self in loop

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop HealthCheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts<br/>prevail...
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```

### 时序图：博客服务通信 Blogging service communication

```mermaid
sequenceDiagram
    participant web as Web Browser
    participant blog as Blog Service
    participant account as Account Service
    participant mail as Mail Service
    participant db as Storage

    Note over web,db: The user must be logged in to submit blog posts
    web->>+account: Logs in using credentials
    account->>db: Query stored accounts
    db->>account: Respond with query result

    alt Credentials not found
        account->>web: Invalid credentials
    else Credentials found
        account->>-web: Successfully logged in

        Note over web,db: When the user is authenticated, they can now submit new posts
        web->>+blog: Submit new post
        blog->>db: Store post data

        par Notifications
            blog--)mail: Send mail to blog subscribers
            blog--)db: Store in-site notifications
        and Response
            blog-->>-web: Successfully posted
        end
    end
```

### Git 提交流程图 A commit flow diagram

```mermaid
gitGraph
    commit id: "Ashish"
    branch newbranch
    checkout newbranch
    commit id: "1111"
    commit tag: "test"
    checkout main
    commit type: HIGHLIGHT
    commit
    merge newbranch
    commit
    branch b2
    commit
```


## 图片

![占位图片](https://dummyimage.com/600x400/000/fff)

## 水平分隔线

---

## 脚注

这是一个带脚注的句子[^1]。

[^1]: 这是脚注内容

## 上标和下标

H~2~O 是水

E = mc^2^ 是质能方程
