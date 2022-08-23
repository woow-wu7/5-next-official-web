# Nextjs

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
- 优点: 减轻服务器压力，可以把生成的静态资源（html）放到CDN上，合理利用缓存; SEO
- 缺点: 静态化，即静态资源，所有人访问的都是同一个页面，不能针对不同权限返回不同的动态页面
```

```
2
getServerSideProps
- 这几个方法都只能在 pages 中使用，不能在 components 中使用
---

getServerSideProps
- 1. 服务端运行: getServerSideProps 这个函数只会在 ( 服务器端运行，不会在浏览器端运行 )
- 2. 运行次数: 每请求一次，就回在服务器上运行一次 getServerSideProps
- 3. 当通过 ( next/link 和 next/router ) 获取页面时，getServerSideProps会在后端去请求服务器，然后向前端返回json数据
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
```

## 资料

- 官网
  - https://atroposjs.com/
  - https://www.chukonggame.com/
- 动画
  - 3D 卡片
    - https://atroposjs.com/docs/react
    - https://juejin.cn/post/7126369893930237989
- nextjs
  - 渲染方案对比 https://juejin.cn/post/7093181697054736392
