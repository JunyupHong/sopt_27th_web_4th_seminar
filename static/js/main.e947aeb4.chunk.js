(this.webpackJsonpsopt_27th_web_4th=this.webpackJsonpsopt_27th_web_4th||[]).push([[0],{105:function(e,t,c){},106:function(e,t,c){},108:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){},145:function(e,t,c){},166:function(e,t,c){},167:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),r=c.n(a),s=c(34),i=c.n(s),o=(c(105),c(106),c(48)),j=c(6);var l=function(){return Object(n.jsxs)("h1",{children:[" ON SOPT 27th ",Object(n.jsx)("br",{})," Web Part 4th seminar"]})},m=c(23),b=c.n(m),d=c(35),u=c(45);c(108),c(109);var x=function(e){var t=e.text,c=e.textColor,a=void 0===c?"#444":c,r=e.onClickFunc;return Object(n.jsx)("span",{className:"button",style:{color:a},onClick:r,children:t})},h=(c(110),c(171)),O=c(172);var p=Object(j.f)((function(e){var t=e.history,c=e.match,a=e.memberData,r=e.onRemoveCard;return Object(n.jsxs)("div",{className:"card",onClick:function(){return t.push("".concat(c.path,"/").concat(a.id))},draggable:!0,children:[Object(n.jsx)("div",{className:"remove-button",onClick:r,children:Object(n.jsx)(h.a,{style:{fontSize:"16px"}})}),Object(n.jsx)("div",{className:"image-area",children:""!==a.profileUrl?Object(n.jsx)("img",{src:a.profileUrl,alt:"profile"}):Object(n.jsx)(O.a,{style:{fontSize:"40px"}})}),Object(n.jsx)("div",{className:"card__content card__text name",children:a.name}),Object(n.jsx)("div",{className:"card__content card__text instagram",children:a.instagram}),Object(n.jsx)("div",{className:"card__content card__text introduction",children:a.introduction}),Object(n.jsx)("div",{className:"card__content card__text mbti",children:a.mbti})]})})),v=c(169),f=c(173),_=Object(n.jsx)(f.a,{style:{fontSize:40},spin:!0});var N=function(){return Object(n.jsx)(v.a,{indicator:_,style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"300px"}})},g=c(61),C=c.n(g),S="http://ec2-13-124-127-8.ap-northeast-2.compute.amazonaws.com:3000/api/members",E=function(){var e=Object(d.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(S));case 3:return t=e.sent,c=t.data,console.log("[SUCCESS] GET MEMBERS",c),e.abrupt("return",c.data);case 9:return e.prev=9,e.t0=e.catch(0),console.error("[FAIL] GET MEMBERS",e.t0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(b.a.mark((function e(t){var c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(S,"/").concat(t));case 3:return c=e.sent,n=c.data,console.log("[SUCCESS] GET MEMBER",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),console.error("[FAIL] GET MEMBER",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();var y=function(e){e.history,e.match;var t=Object(a.useState)([]),c=Object(u.a)(t,2),r=c[0],s=c[1],i=Object(a.useState)(!0),o=Object(u.a)(i,2),j=o[0],l=o[1];Object(a.useEffect)((function(){Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,s(t),setTimeout((function(){return l(!1)}),800);case 5:case"end":return e.stop()}}),e)})))()}),[]);var m=function(e){e.stopPropagation(),console.log("REMOVE CARD!!")};switch(j){case!0:return Object(n.jsx)(N,{});default:return Object(n.jsxs)("div",{className:"member-list",children:[Object(n.jsx)("div",{className:"member-list__title",children:"\ud30c\ud2b8\uc6d0 \uc18c\uac1c"}),Object(n.jsxs)("div",{className:"member-list__header member-list-header",children:[Object(n.jsx)("div",{className:"member-list-header__nav",children:"Gallery View"}),Object(n.jsx)("div",{className:"member-list-header__empty"}),Object(n.jsx)(x,{text:"Properties",textColor:"#777"}),Object(n.jsx)(x,{text:"Filter",textColor:"#777"}),Object(n.jsx)(x,{text:"Sort",textColor:"#777"}),Object(n.jsx)(x,{text:"Search",textColor:"#777",icon:"search"}),Object(n.jsx)(x,{text:"...",textColor:"#777"})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{className:"member-list-content-wrapper",children:r.map((function(e,t){return Object(n.jsx)(p,{memberData:e,onRemoveCard:m},"card-"+t)}))})]})}},k=c(50),F=c(62),T=(c(145),c(170)),M=c(174),P=c(175),R=c(176);var B=function(e){var t=e.match,c=Object(a.useState)({status:"idle",member:null}),r=Object(u.a)(c,2),s=r[0],i=r[1];Object(a.useEffect)((function(){Object(d.a)(b.a.mark((function e(){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i({status:"pending",member:null}),e.next=4,w(t.params.id);case 4:c=e.sent,console.log(c),setTimeout((function(){return i({status:"resolved",member:c})}),600),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),i({status:"rejected",member:null});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]);var o=function(e){var t=e.target,c=t.name,n=t.value;i({status:"resolved",member:Object(F.a)(Object(F.a)({},s.member),{},Object(k.a)({},c,n))})};switch(s.status){case"pending":return Object(n.jsx)(N,{});case"resolved":return Object(n.jsxs)("div",{className:"member-detail",children:[Object(n.jsxs)("div",{className:"member-detail__button-area",children:[Object(n.jsx)(x,{text:"Add icon"}),Object(n.jsx)(x,{text:"Add cover"})]}),Object(n.jsxs)("div",{className:"member-detail__content name",children:[" ",s.member.name," "]}),Object(n.jsx)("hr",{style:{borderTop:"solid 1px #eee",marginBottom:"24px"}}),Object(n.jsxs)("div",{className:"member-detail__content",children:[Object(n.jsxs)("div",{className:"content-title",children:[Object(n.jsx)(M.a,{}),"\xa0 \uc778\uc2a4\ud0c0 \uc544\uc774\ub514"]}),Object(n.jsx)(T.a,{className:"content-input",bordered:!1,name:"instagram",value:s.member.instagram,onChange:o})]}),Object(n.jsxs)("div",{className:"member-detail__content",children:[Object(n.jsxs)("div",{className:"content-title",children:[Object(n.jsx)(P.a,{}),"\xa0 \ud55c \uc904 \uc18c\uac1c"]}),Object(n.jsx)(T.a,{className:"content-input",bordered:!1,name:"introduction",value:s.member.introduction,onChange:o})]}),Object(n.jsxs)("div",{className:"member-detail__content",children:[Object(n.jsxs)("div",{className:"content-title",children:[Object(n.jsx)(R.a,{}),"\xa0 mbti"]}),Object(n.jsx)(T.a,{className:"content-input",bordered:!1,name:"mbti",value:s.member.mbti,onChange:o})]})]});case"rejected":return Object(n.jsx)("h1",{children:"\ud574\ub2f9 \uba64\ubc84\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"});case"idle":default:return Object(n.jsx)("div",{})}};var A=function(e){var t=e.match;return Object(n.jsx)("section",{style:{margin:"0 90px"},children:Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{exact:!0,path:t.path,component:y}),Object(n.jsx)(j.a,{path:"".concat(t.path,"/:id"),component:B})]})})},U=(c(166),c.p+"static/media/mdi_dehaze.c4ccb44f.svg");var z=function(e){var t=e.history;return Object(n.jsxs)("header",{className:"main-header",children:[Object(n.jsx)("img",{className:"main-header-icon",src:U,alt:"menu icon"}),Object(n.jsxs)("nav",{className:"main-header__nav",children:[Object(n.jsx)(x,{text:"[ON SOPT] Web Part",onClickFunc:function(){return t.push("/")}}),Object(n.jsx)("span",{children:" / "}),Object(n.jsx)(x,{text:"\ud30c\ud2b8\uc6d0 \uc18c\uac1c",onClickFunc:function(){return t.push("/members")}})]}),Object(n.jsx)("div",{className:"empty"}),Object(n.jsxs)("div",{className:"main-header__nav",children:[Object(n.jsx)(x,{text:"Share"}),Object(n.jsx)(x,{text:"Updates"}),Object(n.jsx)(x,{text:"Favorites"}),Object(n.jsx)(x,{text:"\u2026"})]})]})};var D=function(){return Object(n.jsx)(o.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(j.a,{component:z}),Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",component:l}),Object(n.jsx)(j.a,{path:"/members",component:A}),Object(n.jsx)(j.a,{path:"*",children:Object(n.jsx)("h1",{children:" 404 NOT FOUND "})})]})]})})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,177)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root")),G()}},[[167,1,2]]]);
//# sourceMappingURL=main.e947aeb4.chunk.js.map