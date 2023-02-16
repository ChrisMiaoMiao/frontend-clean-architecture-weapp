# 前端整洁架构

这个仓库主要是用来实践前端整洁架构模式，将逻辑层完全和视图层隔离，很方便的能将你的应用迁移到不同的端。



## 项目截图

![CleanShot 2023-02-16 at 17.23.02](http://wiz-note-bucket.oss-cn-hangzhou.aliyuncs.com/2023/02/16/cleanshot-20230216-at-172302.png)


## 整洁架构

这个应用使用整洁架构构建

![16765394767724](http://wiz-note-bucket.oss-cn-hangzhou.aliyuncs.com/2023/02/16/16765394767724.jpg)




## 如何开始

在项目根目录可以做如下操作

### Development

安装包
```
$ yarn
```
编译核心包
```
$ yarn core
```

启动 vue 服务
```
$ yarn vue-app
```
启动小程序，然后将 packages/core/we-app 导入到开发者工具查看效果
```
$ yarn mp-app
```


## License

MIT License

Copyright (c) 2022 xiongzx

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

