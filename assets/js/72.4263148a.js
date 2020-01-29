(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{460:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",[t._v("node连接mongodb数据库方法\n1、使用官方提供的 mongodb 包来操作\nhttps://github.com/mongodb/node-mongodb-native\n2、使用第三方mongoose包来操作\n英：https://mongoosejs.com/\n中：http://www.mongoosejs.net/\n使用mongoose\nnpm install mongoose --sa...")])]),t._v(" "),n("h2",{attrs:{id:"node连接mongodb数据库方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node连接mongodb数据库方法"}},[t._v("#")]),t._v(" node连接mongodb数据库方法")]),t._v(" "),n("h6",{attrs:{id:"_1、使用官方提供的-mongodb-包来操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、使用官方提供的-mongodb-包来操作"}},[t._v("#")]),t._v(" 1、使用官方提供的 mongodb 包来操作")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/mongodb/node-mongodb-native",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/mongodb/node-mongodb-native"),n("OutboundLink")],1)]),t._v(" "),n("h6",{attrs:{id:"_2、使用第三方mongoose包来操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、使用第三方mongoose包来操作"}},[t._v("#")]),t._v(" 2、使用第三方mongoose包来操作")]),t._v(" "),n("p",[t._v("英："),n("a",{attrs:{href:"https://mongoosejs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mongoosejs.com/"),n("OutboundLink")],1),t._v("\n中："),n("a",{attrs:{href:"http://www.mongoosejs.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.mongoosejs.net/"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"使用mongoose"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用mongoose"}},[t._v("#")]),t._v(" 使用mongoose")]),t._v(" "),n("p",[n("code",[t._v("npm install mongoose --save")])]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mongoose "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mongoose'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmongoose"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mongodb://localhost/test'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个模型")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 就是在设计数据库")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MongoDB 是动态的，非常灵活，只需要在代码中设计你的数据库就可以了")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mongoose 这个包就可以让你的设计编写过程变的非常的简单")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Cat "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mongoose"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("model")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Cat'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" kitty "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Zildjian'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nkitty"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meow'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])])])}),[],!1,null,null,null);s.default=o.exports}}]);