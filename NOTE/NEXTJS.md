# Nextjs

## 一些单词

```
in advance 事先 提前
refer to 涉及 参考 提到
relate to 关于
discussion 讨论
populate 填充 迁移
interactive 交互 // The interactive course 交互式课程
conversation 对话 // have conversation 进行对话
hydration 水化作用 // 注水 和 脱水

imperative 命令式的 // imperatively 命令式地
```

## (一) 基础知识

```
1
CSR SSR SSG
- CSR: 客户端渲染 client side Render -------- spa
- SSR: 服务端渲染 server side Render -------- nextjs nuxtjs
- SSG: 静态生成   static side generation ---- 所有用户访问到的内容都是一样的
---

CSR
- 缺点
  - SEO: 不利于SEO，因为搜索引擎不执行JS相关的操作，无法获取最终渲染后的HTML，获取的只是一个空的HTML
  - 白屏: 当浏览器输入网址，获取到前端项目服务器上的空HTMl后，会请求后端服务器加载并执行JS，这段时间页面没有任何内容即白屏

SSR
- 原理: 整个渲染过程在服务端完成，可以根据不同用户的不同请求，在服务端渲染好html后，返回给浏览器
- 优点: 有利于SEO和解决白屏，因为返回的是渲染好的首页HTML，有完整的DOM结构，同时也不需要请求JS

SSG
- 优点:
  - 减轻服务器压力，可以把生成的静态资源（ html ）放到 ( CDN ) 上，合理利用缓存; SEO
  - 有数据模式SSG: 可以利用 ( getStaticPath ) 给 ( 动态路由 ) 获取参数，然后传递给 ( getStaticProps )，然后请求数据给 ( page )，比如 ( 从列表进入详情 )
- 缺点: 静态化，即静态资源，所有人访问的都是同一个页面，不能针对不同权限返回不同的动态页面
- 分类
  - 无数据模式SSG，即不需要请求数据
  - 有数据模式SSG，即在 ( build ) 时发送api请求，获取数据，然后将数据组装成 ( HTML )，完成打包
```

```
2
预渲染
- 概念:
  - 1. ( 预渲染 ) 指 ( 预先生成 ) 包含页面结构的 ( html ) 文件，这样在下载到 html 文件后，用户即可快速查看页面（ 此时也可执行如点击 <a> 标签之类的纯 html 操作 )
  - 2. ( Hydration ) 指 ( 在 1 基础上随后 js 的下载完成并执行，则让页面有了更多交互 )
- 包含:
  - SSG
  - SSR
- 总结
  - 也就是在js执行前，就能看到具体有内容的页面，之后执行js进行交互操作即可
```

```
3
getServerSideProps getStaticPaths getStaticProps
- 这几个方法都只能在 pages 中使用，不能在 components 中使用
---


getServerSideProps --------------- SSR
- 1. 服务端运行: getServerSideProps 这个函数只会在 ( 服务器端运行，不会在浏览器端运行 )
- 2. 运行次数: 每请求一次，就回在服务器上运行一次 getServerSideProps
- 3. 当通过 ( next/link 和 next/router ) 获取页面时，getServerSideProps 会在服务端去请求api服务器数据，然后向前端返回json数据


getStaticPaths getStaticProps ---- SSG
- getStaticPaths: 枚举动态路由对应的所有页面
- getStaticProps: 包含 ( 无数据模式 ) 和 ( 有数据模式 - 在build时进行api请求，然后在组装数据生成html )
```

## (二) 目录结构

```
.
├── README.md
├── next.config.js
├── package.json
├── pages
│   ├── _app.js
│   ├── api
│   └── index.js
├── public // 静态资源，可以直接通过 '/资源名' 访问到
│   ├── favicon.ico
│   └── vercel.svg
├── styles
│   ├── Home.module.css
│   └── globals.css
└── yarn.lock
```

## (三) 构建过程

```
1
添加对sass支持
npm install --save-dev sass

2
动画
npm i atropos -S

3
配置别名
- 1. next.config.js 中自定义 webpack 配置
- 2. jsconfig.json 中配置 compilerOptions/ baseUrl 和 paths
```

## (四) 部署

```
1
pm2
- 作用: 是一个带有负载均衡功能的应用进程管理器，可以使 ( node ) 服务在 ( 后台运行, 即持久化部署 )
- 命令:
  - npm run build
  - pm2 start npm --watch --name "next-web" -- run start
```

## 资料

- nextjs
  - 官网
    - https://atroposjs.com/
    - https://www.chukonggame.com/
  - 重学 nextjs
    - https://juejin.cn/post/7000351648459522078
  - 预渲染
    - https://juejin.cn/post/7062555709853925389
- 动画
  - 3D 卡片
    - https://atroposjs.com/docs/react
    - https://juejin.cn/post/7126369893930237989
- nextjs
  - 渲染方案对比 https://juejin.cn/post/7093181697054736392
- pm2
  - https://juejin.cn/post/6933479486616797191
  - https://string.quest/read/13106542
