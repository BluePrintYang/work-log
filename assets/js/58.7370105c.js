(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{459:function(s,t,a){"use strict";a.r(t);var n=a(56),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[s._v("#")]),s._v(" log")]),s._v(" "),a("ol",[a("li",[s._v("线上排行榜问题处理")]),s._v(" "),a("li",[s._v("oss开发")])]),s._v(" "),a("h3",{attrs:{id:"排行榜问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排行榜问题"}},[s._v("#")]),s._v(" 排行榜问题")]),s._v(" "),a("blockquote",[a("p",[s._v("用户排行榜积分不再增长，实际积分在增长")])]),s._v(" "),a("h4",{attrs:{id:"原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[s._v("#")]),s._v(" 原因")]),s._v(" "),a("blockquote",[a("p",[s._v("task项目活动开始时间没改，导致实际添加积分时，积分添加到了第二周")])]),s._v(" "),a("h4",{attrs:{id:"需要解决的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需要解决的问题"}},[s._v("#")]),s._v(" 需要解决的问题")]),s._v(" "),a("blockquote",[a("p",[s._v("更新缓存数据，数据库刷数据")])]),s._v(" "),a("h4",{attrs:{id:"解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[s._v("#")]),s._v(" 解决方法")]),s._v(" "),a("blockquote",[a("p",[s._v("MySQL数据将第二周分数加到第一周，redis删除之后根据数据库重新刷一遍")])]),s._v(" "),a("blockquote",[a("p",[s._v("写个接口，使用curl 发起请求刷数据")])]),s._v(" "),a("h3",{attrs:{id:"租户申请"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#租户申请"}},[s._v("#")]),s._v(" 租户申请")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/BluePrintYang/PicHub/master/work-log/image-20210907164650454.png",alt:"image-20210907164650454"}})]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("https://admin.campushoy.com/wec-cpdaily-portal/apply/confirmCode?phone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18115178805")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("code")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("85327")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("applyValidate\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"code"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"datas"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rows"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"短信校验成功"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"message"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nhttps://admin.campushoy.com/admin/config/oss/guest/policy/pc/no-orgin\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"data"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"accessid"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"LTAIOLGrlPNymuwG"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dir"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"web/1631004400763"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"expire"')]),s._v(":1631005600,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://cpdaily-resource.oss-cn-hangzhou.aliyuncs.com"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"policy"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eyJleHBpcmF0aW9uIjoiMjAyMS0wOS0wN1QwOTowNjo0MC43NjVaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTYxMDYxMjczNl0sWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJ3ZWIvMTYzMTAwNDQwMDc2MyJdXX0="')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"signature"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ss4mcMxOtrIe/00PJsW9EccoRb0="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"errCode"')]),s._v(":0,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"errMsg"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nhttps://cpdaily-resource.oss-cn-hangzhou.aliyuncs.com/\n\nhttps://admin.campushoy.com/wec-cpdaily-portal/apply/insertSchoolPO\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"code"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"datas"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rows"')]),s._v(":882"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"message"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nhttps://admin.campushoy.com/wec-cpdaily-portal/apply/selectSchoolPOById?id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("882")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"code"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"datas"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rows"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mail"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"llyang@wisedu.com"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"city"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"060020"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"documents"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://res.campushoy.com/web/1631004400763/ApplyEnter/ApplyMaterial/2021/BP4AhndXKk_x96_x96_x3440_x.png"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"proposer"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yll"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"remark"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"updateTime"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-09-07 08:46:41"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"operatorName"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yll"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"people"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cityName"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"南京"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"isDeleted"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"province"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"060"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"createTime"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-09-07 08:46:41"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"phone"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"18115178805"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),s._v(":882,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"position"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"校长"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"provinceName"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"江苏省"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"schoolName"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yll测试申请"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"operatorId"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"18115178805"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"notice"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"schoolCode"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"01991"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"status"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"message"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"oss逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oss逻辑"}},[s._v("#")]),s._v(" oss逻辑")]),s._v(" "),a("ol",[a("li",[s._v("申请时发送验证码，获取token")]),s._v(" "),a("li",[s._v("提交时根据token获取policy，上传文件")]),s._v(" "),a("li",[s._v("查询的时候校验塞一个cookie")])]),s._v(" "),a("h2",{attrs:{id:"undo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#undo"}},[s._v("#")]),s._v(" undo")]),s._v(" "),a("ul",[a("li",[s._v("[ ] bug CAM-610")]),s._v(" "),a("li",[s._v("[ ] bug CAM-577")]),s._v(" "),a("li",[s._v("[ ] oss开发")])]),s._v(" "),a("h2",{attrs:{id:"problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem"}},[s._v("#")]),s._v(" problem")]),s._v(" "),a("h2",{attrs:{id:"learn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#learn"}},[s._v("#")]),s._v(" learn")]),s._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/theUncle/article/details/100156976",target:"_blank",rel:"noopener noreferrer"}},[s._v("加密"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);