"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{377:function(n,t,e){e.d(t,{HI:function(){return d},Hg:function(){return o},XT:function(){return f},jP:function(){return m},zv:function(){return v}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="60b5bf446116d1216ef8df748d38dc14",s=u.Z.create({baseURL:"https://api.themoviedb.org/3/"});function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/trending/all/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,s.get("search/movie?api_key=".concat(i,"&language=en-US&page=").concat(e,"&query=").concat(t,"&include_adult=false"));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)}))),l.apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return y.apply(this,arguments)}function y(){return y=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,s.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)}))),y.apply(this,arguments)}},415:function(n,t,e){e.r(t),e.d(t,{Home:function(){return f}});var r=e(861),a=e(439),c=e(757),u=e.n(c),i=e(377),s=e(791),o=e(87),p=e(184);function f(){var n=(0,s.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Hg)();case 2:t=n.sent,c(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n().catch(console.error)}),[]),(0,p.jsx)("ul",{children:e.map((function(n){return(0,p.jsx)("li",{children:(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading..."}),children:(0,p.jsx)(o.rU,{to:"/movies/".concat(n.id),children:n.title||n.original_title||n.name||"name is out"})})},n.id)}))})}t.default=f}}]);
//# sourceMappingURL=415.7102a4bc.chunk.js.map