(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{457:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",[s._v("中间件简介")]),s._v(" "),n("p",[s._v("中间件（Middleware）是提供系统软件和应用软件之间连接的软件，以便于软件各部件之间的沟通。中间件处在操作系统和更高一级应用程序之间。他充当的功能是：将应用程序运行环境与操作系统隔离，从而实现应用程序开发者不必为更多系统问题忧虑，而直接关注该应用程序在解决问题上的能力 。容器就是中间件的一种。")]),s._v(" "),n("p",[s._v("中间件这个概念比较大，在 web 中，我们经常管 web 中间件叫做 web 服务...")])]),s._v(" "),n("h2",{attrs:{id:"中间件简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#中间件简介"}},[s._v("#")]),s._v(" 中间件简介")]),s._v(" "),n("blockquote",[n("p",[s._v("中间件（Middleware）是提供系统软件和应用软件之间连接的软件，以便于软件各部件之间的沟通。中间件处在操作系统和更高一级应用程序之间。他充当的功能是：将应用程序运行环境与操作系统隔离，从而实现应用程序开发者不必为更多系统问题忧虑，而直接关注该应用程序在解决问题上的能力 。容器就是中间件的一种。")])]),s._v(" "),n("p",[s._v("中间件这个概念比较大，在 web 中，我们经常管 web 中间件叫做 web 服务器或者 web 容器，比如 Tomcat、WebLogic、Jetty等等，这是从软件层面来说的。从代码层面来说的话大概是这样的：\n"),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190924110155762.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk3MjQzNw==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),s._v("\n上图是一个自来水厂的工作流程，通过对水源的一系列操作最后分配给用户干净的水。在 express 中，我们接收到客户端传来的数据（水源），然后经过一系列的加工（中间件），最后返回给客户端数据。")]),s._v(" "),n("h2",{attrs:{id:"具体的中间件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#具体的中间件"}},[s._v("#")]),s._v(" 具体的中间件")]),s._v(" "),n("p",[s._v("比如我们的 express 官网就介绍了很多常用的中间件，"),n("a",{attrs:{href:"http://www.expressjs.com.cn/resources/middleware.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://www.expressjs.com.cn/resources/middleware.html"),n("OutboundLink")],1),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190924114518878.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk3MjQzNw==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),s._v(" "),n("h2",{attrs:{id:"使用app-use"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用app-use"}},[s._v("#")]),s._v(" 使用app.use()")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" express "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'express'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" app "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("express")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 中间件：处理请求的，本质就是个函数")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在 Express 中，对中间件有几种分类")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当请求进来，会从第一个中间件开始进行匹配")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//    如果匹配，则进来")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//       如果请求进入中间件之后，没有调用 next 则代码会停在当前中间件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//       如果调用了 next 则继续向后找到第一个匹配的中间件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//    如果不匹配，则继续判断匹配下一个中间件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//    ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不关心请求路径和请求方法的中间件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 也就是说任何请求都会进入这个中间件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 中间件本身是一个方法，该方法接收三个参数：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//    Request 请求对象")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//    Response 响应对象")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//    next     下一个中间件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当一个请求进入一个中间件之后，如果不调用 next 则会停留在当前中间件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 所以 next 是一个方法，用来调用下一个中间件的")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 调用 next 方法也是要匹配的（不是调用紧挨着的那个）")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 任何都能进来")]),s._v("\napp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 以 /xxx 开头的路径中间件")]),s._v("\napp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);