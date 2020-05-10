---
tags:
  - 工具
  - 虚拟机
---

# virtualbox

**记录 virtualbox 的基本使用**

因为需要 elctron windows 端的效果,所以安装虚拟机来测试应用。

## 基本安装
mac 环境直接使用 `brew cask install virtualbox` 安装即可。
**注意安装过程中,确保`安全性与隐私->通用`中允许 virtualbox 相关权限**。
也可以去 [virtualbox download](https://www.virtualbox.org/wiki/Downloads) 下载对应版本

## windows 镜像安装
1. 去 [microsoft](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/) 下载 `VirtualBox` 虚拟机对应的镜像
2. 在本地安装的 `VirtualBox` 中导入镜像即可
3. 注意用登陆密码在上面下载地址中有写为 **Passw0rd!**

### 共享文件
为了实现应用安装,可以将本地电脑上目录共享到虚拟机。步骤如下
1. 在对应虚拟机下点击右键选择设置进入设置面板
2. 选择共享文件,点击加号添加对应文件夹即可
  > 为了确保每次都加在,可勾选自动挂载选项

动图如下

![](https://wx2.sinaimg.cn/large/965bbb87gy1genotwdwjag20k20cr7wh.gif)

