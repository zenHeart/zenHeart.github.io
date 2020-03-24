---
tags: 
    - TypeScript
    - 翻译
---

# 什么是 TypeScript 中的类型,两种观点

> 该译文对应原文 [What is a type in TypeScript? Two perspectives](https://2ality.com/2020/02/understanding-types-typescript.html)


## 1 三个问题针对每种观点
以下三个问题对理解类型系统如何工作至关重要。每个问题都需要采用两种观点来解答。

1. `myVariable` 属于类型  `MyType` 意味着什么
  
    ```ts
    let myVariable: MyType
    ```

2. `SourceType` 赋给了 `TargetType` 么

    ```ts
    let source:SourceType = /*...*/
    let target:TargetType = source/*...*/
    ```

3. TypeUnion 如何从 Type1，Type2和 Type3 中派生的？

    ```ts
    type typeUnion = Type1 | Type2 | Type3;
    ```

## 2 观点一：类型是值的集合
在这种视角下,类型是值的的集合

1. 如果 `myVariable` 属于类型 `MyType`,表示所有可以赋给 `myVariable` 的值都必须是属于 `MyType` 集合的元素
2. `sourceType` 可以赋给 `TargetType` 是 `SourceType` 为 `TargetType` 的子集。
3. 联合类型(TypeUnion) 属于类型 `Type1`,`Type2` 和 `Type3` 是集合理论的并集

## 3 观点 2: 类型兼容关系

在这种视角下: 我们不关心值和在代码运行时如何变化。取而代之，我们更多采用静态视角。

* 源代码都有位置,每个位置都有一个静态类型。在有 TypeScript 识别的编辑器,我们可以看到静态类型的位置如果光标悬停在代码上。
* 源码位置通过赋值，函数调用等关联上目标位置时。源码位置对应的类型必须和目标位置的类型兼容。TypeScript 规范定义类型兼容称之为[类型关联](https://github.com/microsoft/TypeScript/blob/master/doc/spec.md#3.11)
* [类型关联赋值兼容性](https://github.com/microsoft/TypeScript/blob/master/doc/spec.md#3114-assignment-compatibility) 定义了何时源类型 S 可以赋值给目标类型 T
    * S 和 T 是相同的类型
    * S 和 T 是类型 any
    * 等等

让我们思考上述问题:

1. `myVariable` 属于类型 `MyType` 如果属于 `myVariable` 的静态类型可以赋给 `MyType`
2. `SourceType` 是可以赋给 `TargetType` 如果它们赋值兼容
3. 联合类型(type unions) 如何工作参考[类型关系的显示成员](https://github.com/microsoft/TypeScript/blob/master/doc/spec.md#3111-apparent-members)

TypeScript 类型系统一个非常有意思的特性是相同的变量可以在不同位置有不同的静态类型。

```ts
const arr = [];
// 推导类型: any[]
arr;

arr.push(123);
// 推导类型: number[]
arr;

arr.push('abc');
// 推导类型: (string | number)[]
arr;
```

## 4 标明类型系统(Nominal type systems) vs 结构类型系统(structural type systems )

静态类型系统的一个任务是判断两种静态类型是否兼容。
* 静态类型 `U` 是一个实际的参数(例如通过函数调用)
* 静态类型 `T` 是一个相关的格式化参数(指定为函数定义的一部分)

> 笔者注: 这里 `U` 是实参(真实传入的值), `T` 是形参(函数申明传入的变量)

这通常意味着检查 `U` 是否属于 `T` 的子类型。两种方法实现这种检查(粗略来看)
* 在标明类型系统, 两种静态类型是相等的如果他们拥有相同的标识符(名字),一个类型是另一个的子类型如果它们的子类型关系式显示申明的。
  * 表明类型语言例如 C++,Java,C,Swift 和 Rust
* 在结构化类型系统, 两种静态类型是相同的如果他们拥有相同的结构(如果它们的各部分名字和类型均相同)。类型 `U` 是另一种类型 `T` 的子类型如果 `U` 拥有类型 `T` 的所有部分(类型 U 可能还包含其他部分),而且类型 `U` 的每个部分属于类型 T 相关联部分的子类型.
  * 结构化类型语言 OCaml/ReasonML,Haskell 和 TypeScript

以下的代码在标明类型系统中会出错,但在 TypeScript 结构类型系统中是合法的。因为类 A 和 类 B 拥有相同的结构。

```ts
class A {
    name: 'A';
}
class B {
    name = 'B';
}

const somaVariable:A = new B(); 
```

TypeScript 接口同样是结构化的。不必为了匹配而实现该接口。

```js
interface Point {
    x: number;
    y: number;
}
const point: Point = {x:1, y:2};
```

## 进一步阅读
* [TypeScript 手册类型兼容](https://www.typescriptlang.org/docs/handbook/type-compatibility.html)
* [TypeScript 规范类型关系章节](https://github.com/microsoft/TypeScript/blob/master/doc/spec.md#3.11)

-----

## 笔者注
理解 TypeScript 是结构化类型系统。可以帮助你更好的使用 TypeScript。


TypeScript 在设计之初定义了一系列准则，参考[TypeScript 设计目的](https://github.com/microsoft/TypeScript/wiki/TypeScript-Design-Goals) 翻译如下:

**目标:**

1. 静态识别可能出错的结构
2. 提供一个结构机制用于组织大型代码
3. 产出代码不要增加运行时负担
4. 产出干净,惯用的,可识别的 js 代码
5. 产出一种可组合且易于推理的语言
6. 向当前和未来的 ECMAScript 规范靠拢
7. 保留所有 JavaScript 代码运行时特性
8. 避免添加表达式层面的语法
9. 使用一致,完全可擦除的结构化类型系统
10. 成为跨平台的工具
11. 不要和 TypeScript 发生破坏性迭代

**非目标:**

1. 完全模仿现有语言,使用当前 JavaScript 的特性和编程设计者的意图来开发一门更有价值的语言作为替代。
2. 激进的优化程序运行时性能,产出在运行平台性能更良好的 JavaScript 代码
3. 专注于完全或证明正确的类型系统,取代在正确性和高产性上进行平衡。
4. 提供一个端到端的编译管道,取代创建一个可扩展的外部工具用于编译器或其他更复杂的构建流
5. 在编码中添加或依赖与运行时的类型信息,或产出基于类型系统的不同代码。取代鼓励不依赖于运行时元数据的编程模式
6. 提供额外的运行时函数或库。取代使用 TypeScript 描述已经存在的库
7. 引入一些可能使用户惊讶的特性。取代其他语言经过考量而采用的通用模式。

根据该设计主旨可以看到 TypeScript 的如下特性

1. 属于静态类型检查
    > 这意味着不应该在运行时依赖 TypeScript 类型组织代码逻辑
2. 属于结构化类型
    > 不要执着于类型的完全匹配只要结构相似就是相同类型
3. 类型检查为首要准则
    > TypeScript 准确的说并不是一门语言,它只是类型检查的工具,应该把**学习重点放在更好的类型检查上,而非它所提供的语言特性**

