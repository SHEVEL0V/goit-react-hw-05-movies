"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[529],{529:function(t,n,e){e.r(n),e.d(n,{default:function(){return a}});var r=e(885),c=e(66),i=e(791),o=e(501),u=e(184);function a(){var t=(0,i.useState)([]),n=(0,r.Z)(t,2),e=n[0],a=n[1];return(0,i.useEffect)((function(){(0,c.Z)("/trending/movie/week").then((function(t){var n=t.results;a(n)}))}),[]),(0,u.jsx)("ul",{children:e.map((function(t){return(0,u.jsx)("li",{children:(0,u.jsx)(o.rU,{to:"movies/".concat(t.id),children:t.title})},t.id)}))})}},66:function(t,n,e){e.d(n,{Z:function(){return a}});var r=e(861),c=e(757),i=e.n(c),o="https://api.themoviedb.org/3",u="4fc86b17259ac63837b074fbab2b63b2";function a(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(i().mark((function t(){var n,e,r,c,a=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"",e=a.length>1&&void 0!==a[1]?a[1]:"",r="".concat(o).concat(n,"?api_key=").concat(u).concat(e),t.next=5,fetch(r);case 5:return c=t.sent,t.abrupt("return",c.ok?c.json():Promise.reject(new Error("Not found")));case 7:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}}}]);
//# sourceMappingURL=529.94423fa8.chunk.js.map