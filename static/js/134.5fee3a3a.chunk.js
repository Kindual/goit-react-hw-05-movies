"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[134],{377:function(e,t,n){n.d(t,{HI:function(){return d},Hg:function(){return o},XT:function(){return f},jP:function(){return m},zv:function(){return h}});var r=n(861),a=n(757),u=n.n(a),c=n(243),s="60b5bf446116d1216ef8df748d38dc14",i=c.Z.create({baseURL:"https://api.themoviedb.org/3/"});function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/all/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(u().mark((function e(t){var n,r,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,i.get("search/movie?api_key=".concat(s,"&language=en-US&page=").concat(n,"&query=").concat(t,"&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return x=(0,r.Z)(u().mark((function e(t){var n,r,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,i.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=").concat(n));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}},134:function(e,t,n){n.r(t),n.d(t,{Movies:function(){return l}});var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(377),i=n(791),o=n(689),p=n(87),f=n(184);function l(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],l=(0,i.useRef)(),d=(0,o.TH)(),v=(0,p.lr)(),h=(0,a.Z)(v,2),g=h[0],m=h[1],x=g.get("query")||"";(0,i.useEffect)((function(){x&&(l.current.value=x,(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.XT)(l.current.value);case 2:t=e.sent,u(t.results);case 4:case"end":return e.stop()}}),e)})))())}),[x]);var y=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,(0,s.XT)(l.current.value);case 3:n=e.sent,m({query:l.current.value}),u(n.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,f.jsxs)("div",{children:[(0,f.jsxs)("form",{onSubmit:y,children:[(0,f.jsx)("input",{name:"name",type:"text",ref:l}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),n.length>0?(0,f.jsx)("ul",{children:n.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(i.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(p.rU,{to:"/movies/".concat(e.id),state:{from:d},children:e.title||e.original_title||e.name||"name is out"})})},e.id)}))}):""]})}t.default=l}}]);
//# sourceMappingURL=134.5fee3a3a.chunk.js.map