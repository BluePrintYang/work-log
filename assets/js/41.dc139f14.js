(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{403:function(t,a,s){"use strict";s.r(a);var r=s(44),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"undo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#undo"}},[t._v("#")]),t._v(" undo")]),t._v(" "),s("h2",{attrs:{id:"problem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#problem"}},[t._v("#")]),t._v(" problem")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/yonglone/PicHub/raw/master/image-20210819094703584.png",alt:"image-20210819094703584"}})]),t._v(" "),s("h2",{attrs:{id:"log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[t._v("#")]),t._v(" log")]),t._v(" "),s("ol",[s("li",[t._v("上线")])]),t._v(" "),s("p",[t._v("删除中奖信息sql")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("\n  t_act_m_lottery_user_draw_record\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v("\n  id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("\n      a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("\n          id\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("t_act_m_lottery_user_draw_record"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("biz_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yxhd0819'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("goods_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GRAND_PRIZE'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" a\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"learn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#learn"}},[t._v("#")]),t._v(" learn")]),t._v(" "),s("h3",{attrs:{id:"redis批量删除key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis批量删除key"}},[t._v("#")]),t._v(" redis批量删除key")]),t._v(" "),s("p",[t._v("借助Another Redis Desktop")]),t._v(" "),s("p",[t._v("搜索出key删除分组")]),t._v(" "),s("h3",{attrs:{id:"上线流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上线流程"}},[t._v("#")]),t._v(" 上线流程")]),t._v(" "),s("ol",[s("li",[t._v("从release-分支合到master，gitlab打online包 tag")]),t._v(" "),s("li",[t._v("堡垒机线上环境马拉松发布")]),t._v(" "),s("li",[t._v("切换网关")])])])}),[],!1,null,null,null);a.default=e.exports}}]);