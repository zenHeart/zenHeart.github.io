日常使用
===

**覆盖基本的 chrome 日常操作**

----

## 原生快捷键
* `⌘ + L` 定位到地址栏

## 翻墙
采用 [google 访问助手](http://www.ggfwzs.com/)

## 书签管理
1. 点击书签管理器，利用整理导出 chrome 书签
2. 将书签导入需要同步的电脑
3. 保存即可

建议所有书签均保存在同一个文件夹。
利用 tags 来进行分类。

## 使用 vimium 控制浏览器
该工具实现纯键盘控制浏览器.
当利用 `⌘ + L` 定位到地址栏时,
为了回到页面实现利用 chrome 操作,
需采用如下方式.

* > windows 
   按 F6
* > chrome
[快捷退出地址栏](http://xavierchow.github.io/2016/03/07/vimium-leave-address-bar/)


## 消失的书签栏如何恢复
执行如下命令

```shell
# 切换到 chrome 标签目录
cd ~/Library/Application\ Support/Google/Chrome/Default/
# 备份标签到桌面
cp Bookmarks.bak  Bookmarks ~/Desktop/
# 用 bak 覆盖 Bookmarks
mv Bookmarks.bak Bookmarks
# 重启流浪器
```
