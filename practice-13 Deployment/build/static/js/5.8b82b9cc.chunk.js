(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{49:function(e,t,c){e.exports={item:"QuoteItem_item__2dOvb"}},50:function(e,t,c){e.exports={list:"QuoteList_list__3pzcl",sorting:"QuoteList_sorting__rL6H1"}},51:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__3DIYb"}},54:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(35),i=c(2),o=c(9),r=c(49),a=c.n(r),d=c(1),u=function(e){return Object(d.jsxs)("li",{className:a.a.item,children:[Object(d.jsxs)("figure",{children:[Object(d.jsx)("blockquote",{children:Object(d.jsx)("p",{children:e.text})}),Object(d.jsx)("figcaption",{children:e.author})]}),Object(d.jsx)(o.b,{to:"/quotes/".concat(e.id),className:"btn",children:"View Fullscreen"})]})},j=c(50),l=c.n(j),b=function(e){var t,c,n=Object(i.h)(),o=Object(i.i)(),r="asc"===new URLSearchParams(o.search).get("sort"),a=(t=e.quotes,c=r,t.sort((function(e,t){return c?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(d.jsxs)(s.Fragment,{children:[Object(d.jsx)("div",{className:l.a.sorting,children:Object(d.jsxs)("button",{onClick:function(){n.push("".concat(o.pathname,"?sort=").concat(r?"desc":"asc"))},children:["Sort ",r?"Descending":"Ascending"]})}),Object(d.jsx)("ul",{className:l.a.list,children:a.map((function(e){return Object(d.jsx)(u,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},h=c(36),x=c(14),O=c(51),m=c.n(O),f=function(){return Object(d.jsxs)("div",{className:m.a.noquotes,children:[Object(d.jsx)("p",{children:"No quotes found!"}),Object(d.jsx)(o.b,{to:"/add-quotes",className:"btn",children:"Add a Quote"})]})};t.default=function(){var e=Object(n.a)(h.d,!0),t=e.sendRequest,c=e.status,i=e.error,o=e.data;return Object(s.useEffect)((function(){t()}),[t]),"pending"===c?Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(x.a,{})}):i?Object(d.jsx)("div",{className:"centered focused",children:i}):"completed"!==c||o&&0!==o.length?Object(d.jsx)("div",{children:Object(d.jsx)(b,{quotes:o})}):Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(f,{})})}}}]);
//# sourceMappingURL=5.8b82b9cc.chunk.js.map