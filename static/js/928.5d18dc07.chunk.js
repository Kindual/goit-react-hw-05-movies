"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[928],{377:function(e,t,r){r.d(t,{HI:function(){return d},Hg:function(){return u},XT:function(){return l},jP:function(){return j},zv:function(){return v}});var n=r(861),c=r(757),a=r.n(c),i=r(243),s="60b5bf446116d1216ef8df748d38dc14",o=i.Z.create({baseURL:"https://api.themoviedb.org/3/"});function u(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/trending/all/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return f=(0,n.Z)(a().mark((function e(t){var r,n,c=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:1,e.next=3,o.get("search/movie?api_key=".concat(s,"&language=en-US&page=").concat(r,"&query=").concat(t,"&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return x.apply(this,arguments)}function x(){return x=(0,n.Z)(a().mark((function e(t){var r,n,c=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:1,e.next=3,o.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=").concat(r));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}},928:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t),r.d(t,{MovieDetails:function(){return v},default:function(){return g}});var i=r(861),s=r(439),o=r(757),u=r.n(o),p=r(791),l=r(377),f=r(87),d=r(689),h=r(184);function v(){var e,t=(0,p.useState)({}),r=(0,s.Z)(t,2),n=r[0],c=r[1],o=(0,d.UO)().movieId,v=(0,d.TH)();return(0,p.useEffect)((function(){var e=function(){var e=(0,i.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.HI)(o);case 2:t=e.sent,c(a({},t.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch(console.error)}),[c,o]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(f.rU,{to:null!==(e=v.state)&&void 0!==e&&e.from?v.state.from:"/",children:" Go back"}),(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),alt:"poster",height:"250px"}),(0,h.jsx)("h2",{children:"".concat(n.original_title)}),(0,h.jsxs)("p",{children:["User score: ","".concat(n.vote_average?n.vote_average.toFixed(1):"No votes")]}),(0,h.jsxs)("ul",{children:[(0,h.jsxs)("li",{children:[(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:"".concat(n.overview||"No overviews")})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("p",{children:n.genres>0?n.genres.map((function(e){return"".concat(e.name)})).join(", "):"---"})]})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{children:"Addictional info"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(f.rU,{to:"cast",children:" Cast "})}),(0,h.jsx)("li",{children:(0,h.jsx)(f.rU,{to:"reviews",children:" Revievs "})})]}),(0,h.jsx)(p.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading..."}),children:(0,h.jsx)(d.j3,{})})]})]})}var g=v}}]);
//# sourceMappingURL=928.5d18dc07.chunk.js.map