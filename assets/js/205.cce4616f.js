(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{608:function(t,s,a){"use strict";a.r(s);var e=a(56),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[t._v("#")]),t._v(" log")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("[x] 上线思政")])]),t._v(" "),a("li",[a("p",[t._v("[x] 客户端评论接口")])])]),t._v(" "),a("h3",{attrs:{id:"动态评论相关接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态评论相关接口"}},[t._v("#")]),t._v(" 动态评论相关接口")]),t._v(" "),a("h4",{attrs:{id:"评论列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#评论列表"}},[t._v("#")]),t._v(" 评论列表")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("GET /v6/api/comment/listCommentSimle?bizId=FRESH_bb41b7b5-f347-4bed-af66-a9d947c8c887&limits="),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("&timeValue="),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" HTTP/"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\n")])])]),a("h4",{attrs:{id:"评论文章动态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#评论文章动态"}},[t._v("#")]),t._v(" 评论文章动态")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("POST /v3/fresh/comment HTTP/"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"freshId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FRESH_a8804876-7832-4813-b374-486b9e2ed8f3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"imgUrls"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mediaId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"评论"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 回复评论")]),t._v("\nPOST /v3/comment/reply HTTP/"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"imgUrls"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commentId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20f2186a-4888-42ad-8ac2-2ca4d13b12b8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mediaId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"睡觉睡觉"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除评论")]),t._v("\nPOST /v3/comment/delete HTTP/"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commentId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3a98d2c4-caf3-4ca4-a363-70a97ee0676e"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"新版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新版"}},[t._v("#")]),t._v(" 新版")]),t._v(" "),a("h4",{attrs:{id:"获取文章-动态评论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取文章-动态评论"}},[t._v("#")]),t._v(" 获取文章/动态评论")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取评论 ")]),t._v("\nGET  /v6/api/comment/queryPage-v920?bizId=FRESH_66a1fbb9"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("-8170")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("-4764")]),t._v("-ad82-edcff7e6016e&timeValue="),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("&limits="),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 展开评论 ")]),t._v("\nGET  /v6/api/comment/queryLv2Page?bizId=FRESH_66a1fbb9"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("-8170")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("-4764")]),t._v("-ad82-edcff7e6016e&parentId=0606b17a-9d3c-41a2-9f99-e389653f80a3&timeValue="),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("&limits="),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),a("p",[t._v("删除评论的bug")]),t._v(" "),a("p",[t._v("评论列表数量bug")]),t._v(" "),a("h2",{attrs:{id:"learn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#learn"}},[t._v("#")]),t._v(" learn")]),t._v(" "),a("h3",{attrs:{id:"每日一题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[t._v("#")]),t._v(" 每日一题")])])}),[],!1,null,null,null);s.default=r.exports}}]);