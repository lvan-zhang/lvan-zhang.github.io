(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{470:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[s._v("tp5 之前的我就不管了，从 tp5 开始学习记录\n安装\ncomposer create-project topthink/think tp")]),s._v(" "),a("p",[s._v("开启调试模式\n应用默认是部署模式，在开发阶段，可以修改环境变量APP_DEBUG开启调试模式，上线部署后切换到部署模式。\n本地开发的时候可以在应用根目录下面定义.env文件。\n运行\nphp think run\n或\nphp think run -p 8080...")])]),s._v(" "),a("p",[s._v("tp5 之前的我就不管了，从 tp5 开始学习记录")]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("composer create"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("project topthink"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("think tp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"开启调试模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启调试模式"}},[s._v("#")]),s._v(" 开启调试模式")]),s._v(" "),a("p",[s._v("应用默认是部署模式，在开发阶段，可以修改环境变量APP_DEBUG开启调试模式，上线部署后切换到部署模式。")]),s._v(" "),a("p",[s._v("本地开发的时候可以在应用根目录下面定义.env文件。")]),s._v(" "),a("h2",{attrs:{id:"运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("php think run\n或\nphp think run -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("默认开启 8000 端口：\n然后访问 "),a("code",[s._v("http://localhost:8000/")])]),s._v(" "),a("blockquote",[a("p",[s._v("实际部署中，应该是绑定域名访问到public目录，确保其它目录不在WEB目录下面。")])]),s._v(" "),a("h2",{attrs:{id:"tp6和tp5的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tp6和tp5的区别"}},[s._v("#")]),s._v(" tp6和tp5的区别")]),s._v(" "),a("p",[s._v("相对于5.1来说，6.0版本目录结构的主要变化是核心框架纳入vendor目录，然后原来的application目录变成app目录。")]),s._v(" "),a("h2",{attrs:{id:"获取环境变量（-env文件）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取环境变量（-env文件）"}},[s._v("#")]),s._v(" 获取环境变量（.env文件）")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .env文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("APP_DEBUG")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[s._v("true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("APP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DEFAULT_TIMEZONE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Asia"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Shanghai\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DATABASE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TYPE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mysql\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HOSTNAME")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DATABASE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" test\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("USERNAME")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" username\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PASSWORD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" password\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HOSTPORT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CHARSET")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DEBUG")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[s._v("true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("获取环境变量")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("Env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'database.username'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取环境变量 如果不存在则使用默认值root")]),s._v("\nEnv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'database.username'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("要使用Env类，必须先引入think\\facade\\Env。")]),s._v(" "),a("h2",{attrs:{id:"获取配置文件（config文件夹）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取配置文件（config文件夹）"}},[s._v("#")]),s._v(" 获取配置文件（config文件夹）")]),s._v(" "),a("p",[s._v("要使用Config类，首先需要在你的类文件中引入\n"),a("code",[s._v("use think\\facade\\Config;")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 读取单个配置参数")]),s._v("\nConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'app.app_name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'route.url_domain_root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 判断是否存在某个设置参数")]),s._v("\nConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("has")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'template'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("has")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'route.route_rule_merge'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);