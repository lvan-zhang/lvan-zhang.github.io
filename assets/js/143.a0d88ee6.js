(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{375:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[t._v("简介\nXSS又叫 CSS (Cross-Site Script) ,跨站脚本攻击。恶意攻击者往Web页面里插入恶意html代码，当用户浏览该页之时，嵌入其中Web里面的html代码会被执行，从而达到恶意用户的特殊目的。\n原理\nHTML是一种超文本标记语言，通过将一些字符特殊地对待来区别文本和标记，例如，小于符号（<）被看作是HTML标签的开始，<title>与</title...")])]),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("XSS又叫 CSS (Cross-Site Script) ,跨站脚本攻击。恶意攻击者往Web页面里插入恶意html代码，当用户浏览该页之时，嵌入其中Web里面的html代码会被执行，从而达到恶意用户的特殊目的。")]),t._v(" "),a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),a("p",[t._v("HTML是一种超文本标记语言，通过将一些字符特殊地对待来区别文本和标记，例如，小于符号（<）被看作是HTML标签的开始，"),a("code",[t._v("<title>")]),t._v("与"),a("code",[t._v("</title>")]),t._v("之间的字符是页面的标题等等。当动态页面中插入的内容含有这些特殊字符（如<）时，用户浏览器会将其误认为是插入了HTML标签，当这些HTML标签引入了一段JavaScript脚本时，这些脚本程序就将会在用户浏览器中执行。所以，当这些特殊字符不能被动态页面检查或检查出现失误时，就将会产生XSS漏洞。")]),t._v(" "),a("h2",{attrs:{id:"攻击类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#攻击类型"}},[t._v("#")]),t._v(" 攻击类型")]),t._v(" "),a("p",[t._v("第一、XSS反射型攻击，恶意代码并没有保存在目标网站，通过引诱用户点击一个链接到目标网站的恶意链接来实施攻击的。")]),t._v(" "),a("p",[t._v("第二、XSS存储型攻击，恶意代码被保存到目标网站的服务器中")]),t._v(" "),a("h2",{attrs:{id:"攻击方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#攻击方式"}},[t._v("#")]),t._v(" 攻击方式")]),t._v(" "),a("p",[t._v("常用的XSS攻击手段和目的有：\n1、盗用cookie，获取敏感信息。\n2、利用植入Flash，通过crossdomain权限设置进一步获取更高权限；或者利用Java等得到类似的操作。\n3、利用iframe、frame、XMLHttpRequest或上述Flash等方式，以（被攻击）用户的身份执行一些管理动作，或执行一些一般的如发微博、加好友、发私信等操作。\n4、利用可被攻击的域受到其他域信任的特点，以受信任来源的身份请求一些平时不允许的操作，如进行不当的投票活动。\n5、在访问量极大的一些页面上的XSS可以攻击一些小型网站，实现DDoS攻击的效果。")]),t._v(" "),a("h2",{attrs:{id:"解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),a("p",[t._v("过滤用户输入的 检查用户输入的内容中是否有非法内容。如<>（尖括号）、”（引号）、 ‘（单引号）、%（百分比符号）、;（分号）、()（括号）、&（& 符号）、+（加号）等。、严格控制输出")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('可以利用下面这些函数对出现xss漏洞的参数进行过滤\n1、htmlspecialchars() 函数,用于转义处理在页面上显示的文本。\n2、htmlentities() 函数,用于转义处理在页面上显示的文本。\n3、strip_tags() 函数,过滤掉输入、输出里面的恶意标签。\n4、header() 函数,使用header("Content-type:application/json"); 用于控制 json 数据的头部，不用于浏览。\n5、urlencode() 函数,用于输出处理字符型参数带入页面链接中。\n6、intval() 函数用于处理数值型参数输出页面中。\n7、自定义函数,在大多情况下，要使用一些常用的 html 标签，以美化页面显示，如留言、小纸条。那么在这样的情况下，要采用白名单的方法使用合法的标签显示，过滤掉非法的字符。\n\n各语言示例：\n  PHP的htmlentities()或是htmlspecialchars()。\n  Python的cgi.escape()。\n  ASP的Server.HTMLEncode()。\n  ASP.NET的Server.HtmlEncode()或功能更强的Microsoft Anti-Cross Site Scripting Library\n  Java的xssprotect(Open Source Library)。\n  Node.js的node-validator。\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("h2",{attrs:{id:"多个例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多个例子"}},[t._v("#")]),t._v(" 多个例子")]),t._v(" "),a("p",[t._v("谢公子大佬总结的太好了，转一下"),a("a",{attrs:{href:"https://blog.csdn.net/qq_36119192/article/details/82469035",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/qq_36119192/article/details/82469035"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);