---
layout: post
title:  "React Native IDE之VSCode"
date:   2016-03-10 15:59:06 +0800
categories: React-Native
---
接触React Native有一段时间了，但是一直都在寻找优秀的好用的IDE，直到发现VSCode
在这之前使用了Atom，Sublime，WebStorm，还有一款比较期待的IDE： DECO看官网还是比较激动的，现在貌似还没有出来，要邀请别人注册好像才能下载。

![DECO]({{ site.image }}/20160310/1.gif)

接下来开始介绍并安装VSCode

为什么要推荐VSCode，针对React Native原因有以下几点

1. 不要需要开启xcode直接打开并运行iOS模拟器
2. 启动app时IDE会自己打开nam服务，不用额外打开终端
3. React Native代码自动补全
4. 可以断点调试，简直炸

### VSCode的安装与使用

官网地址：<https://code.visualstudio.com/>

#### step1：下载并安装VSCode

解压后直接可以打开使用，无需安装，摒弃了微软一向安装麻烦的特点，这一点的进步值得表扬。

界面很简洁，暗黑系列的风格

软件有最近工作区，人性化设计，不用每次都点开目录去寻找文件

![主界面]({{ site.image }}/20160310/2.png)

#### step2：安装React Native 插件
打开VSCode 按F1键，输入install选择Install Extension

![安装插件]({{ site.image }}/20160310/3.png)

稍等片刻，不要切换软件，不然会消失。

出现如图界面找到react native tools安装，或者直接在后面输入react搜索点击![download]({{ site.image }}/20160310/download.png)安装

![安装插件]({{ site.image }}/20160310/4.png)

安装成功后手动重启软件，打开ios.index.js文件看右下角选择JavaScript，看看是否如图

![salsa]({{ site.image }}/20160310/5.png)出现salsa标志，ok安装完成。

#### step3：调试环境配置

点击左侧![debug]({{ site.image }}/20160310/6.png)按钮，点击左上角![setting]({{ site.image }}/20160310/7.png)选择React Native

![reactantive]({{ site.image }}/20160310/8.png)

如果不幸选错，不要紧张，打开工程目录，删除.vscode/launch.json 即可重新选择

![launch]({{ site.image }}/20160310/9.png)

![debugiOS]({{ site.image }}/20160310/10.png)选择Debug的手机系统，到此环境的配置已经全部结束。

#### step4：运行工程

按F1键 输入iOS选择Run iOS

IDE会自己开启npm服务并打开iOS模拟器
接下来就可以愉快地的coding啦

`注意：编译后会在iOS工程目录下会生产build目录，有100+M`

#### step5：Debug

点击![Debug]({{ site.image }}/20160310/6.png)进入Debug模式，点击![run]({{ site.image }}/20160310/12.png)开始调试

直接打断点，鼠标悬停，数据直接显示

`注意：目前发现有时候无法进入Debug模式，不行就重新Debug`

![BreakPoint]({{ site.image }}/20160310/13.png)

小编还会坚定不移的寻找优秀的IDE。。。




文笔不好，给您带来不便，尽请谅解，欢迎交流。邮箱在下面哦。

--newfun.上海.2016年3月10日



[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
