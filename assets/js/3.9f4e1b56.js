(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{387:function(s,a,t){s.exports=t.p+"assets/img/mono-version.977e3564.jpg"},388:function(s,a,t){s.exports=t.p+"assets/img/fiddler-set-1.39494c3c.jpg"},389:function(s,a,t){s.exports=t.p+"assets/img/fiddler-set-2.02e4614a.jpg"},390:function(s,a,t){s.exports=t.p+"assets/img/zhengshu.9fca2f3e.png"},413:function(s,a,t){"use strict";t.r(a);var r=t(54),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h2",{attrs:{id:"fiddler配置及使用教程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fiddler配置及使用教程"}},[s._v("#")]),s._v(" Fiddler配置及使用教程")]),s._v(" "),r("h3",{attrs:{id:"mac-os环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mac-os环境"}},[s._v("#")]),s._v(" Mac OS环境")]),s._v(" "),r("ul",[r("li",[s._v("Fiddler是使用C#写的http的抓包工具，Mac OS下需要使用.net编译后的程序，当MasOS需要使用Fiddler时，实际上是跨平台了，所以得先安装跨平台方案Mono")])]),s._v(" "),r("h4",{attrs:{id:"安装mono"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装mono"}},[s._v("#")]),s._v(" 安装Mono")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("Mono下载地址："),r("a",{attrs:{href:"https://www.mono-project.com/download/stable/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mono"),r("OutboundLink")],1)])]),s._v(" "),r("li",[r("p",[s._v("下载并安装完成Mono后，使用下方命令进入安装目录并查看Mono版本")])])]),s._v(" "),r("div",{staticClass:"language-javascript line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[s._v("cd "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Library"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Frameworks"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Mono"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("framework"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Versions\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("p",[r("img",{attrs:{src:t(387),alt:"查看版本"}})]),s._v(" "),r("ul",[r("li",[r("p",[r("em",[s._v("（Mono框架有自己的可信根证书存储。目前（在单声道版本4.2.4），在OS X上安装Mono之后，该存储仍然为空。Fiddler使用该存储中的证书来验证所访问网站的证书。因此，您需要使用一组通常受信任的根权限来填充此存储，以避免从Fiddler获得持续的证书警告。mozroots工具从Mozilla LXR导入受信任的权威机构。")])])]),s._v(" "),r("li",[r("p",[s._v("从Mozilla LXR上下载所有受信任的root证书，存于Mono的证书库里。root证书能用于请求https地址")])])]),s._v(" "),r("div",{staticClass:"language-javascript line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Library"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Frameworks"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Mono"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("framework"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Versions"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.12")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mozroots "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" —sync\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("ul",[r("li",[s._v("上面会出现问题，提示mozroots is deprecated ...，所以正确的从Mozilla LXR上下载所有受信任的root证书，存于Mono的证书库里的方法为：")])]),s._v(" "),r("div",{staticClass:"language-javascript line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Library"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Frameworks"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Mono"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("framework"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Versions"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.12")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cert"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("sync "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("sync\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("h4",{attrs:{id:"把mono加入环境变量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#把mono加入环境变量"}},[s._v("#")]),s._v(" 把Mono加入环境变量")]),s._v(" "),r("ul",[r("li",[s._v("编辑.bash_profile文件：")])]),s._v(" "),r("div",{staticClass:"language-javascript line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[s._v("sudo vi "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bash_profile\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("ul",[r("li",[s._v("在.base_profile文件末尾追加以下配置：")])]),s._v(" "),r("div",{staticClass:"language-javascript line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MONO_HOME")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Library"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Frameworks"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Mono"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("framework"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Versions"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.12")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PATH")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),r("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PATH")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("$"),r("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MONO_HOME")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br")])]),r("h4",{attrs:{id:"附-vim的基本操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#附-vim的基本操作"}},[s._v("#")]),s._v(" 附：vim的基本操作")]),s._v(" "),r("ul",[r("li",[s._v("进入编辑：输入 i")]),s._v(" "),r("li",[s._v("保存并退出编辑：按[ESC]，后输入 :wq")])]),s._v(" "),r("h4",{attrs:{id:"fiddler配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fiddler配置"}},[s._v("#")]),s._v(" Fiddler配置")]),s._v(" "),r("p",[r("img",{attrs:{src:t(388),alt:"配置第一步"}})]),s._v(" "),r("p",[r("img",{attrs:{src:t(389),alt:"配置第二步"}})]),s._v(" "),r("p",[r("em",[s._v("其他手机代理fiddler与windows下的场景相同，先安装证书...")])]),s._v(" "),r("p",[r("a",{attrs:{href:"https://blog.csdn.net/zhangvalue/article/details/84980232",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文章1"),r("OutboundLink")],1)]),s._v(" "),r("p",[r("a",{attrs:{href:"https://blog.csdn.net/whowhowhoisimportant/article/details/107501149",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文章2"),r("OutboundLink")],1)]),s._v(" "),r("h3",{attrs:{id:"windows环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows环境"}},[s._v("#")]),s._v(" Windows环境")]),s._v(" "),r("h4",{attrs:{id:"很赞的教程-看完小学生都能学会了"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#很赞的教程-看完小学生都能学会了"}},[s._v("#")]),s._v(" "),r("a",{attrs:{href:"https://www.cnblogs.com/woaixuexi9999/p/9247705.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("很赞的教程，看完小学生都能学会了"),r("OutboundLink")],1)]),s._v(" "),r("p",[r("em",[r("strong",[s._v("注意：在安装完证书之后，需要开启信任证书，才能代理手机抓包")])])]),s._v(" "),r("p",[r("img",{attrs:{src:t(390),alt:"证书信任"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);