(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(6),i=n.n(r),u=(n(14),n(9)),s=n(2),a=(n(15),n(7)),j=n(8),h=function(){function t(){Object(a.a)(this,t)}return Object(j.a)(t,null,[{key:"getMovies",value:function(){return fetch("https://www.omdbapi.com/?s=man&apikey=4a3b711b").then((function(t){return t.json()})).then((function(t){return t.Search}))}},{key:"search",value:function(t){return fetch("https://www.omdbapi.com/?s=".concat(t,"&apikey=4a3b711b")).then((function(t){return t.json()})).then((function(t){return console.log(t),t.Search}))}},{key:"showAll",value:function(t,e){return fetch("https://www.omdbapi.com/?s=".concat(t,"&apikey=4a3b711b&page=").concat(e)).then((function(t){return t.json()})).then((function(t){return console.log(t),t.Search}))}},{key:"getTotalRes",value:function(t){return fetch("https://www.omdbapi.com/?s=".concat(t,"&apikey=4a3b711b")).then((function(t){return t.json()})).then((function(t){return console.log(t),t.totalResults}))}}]),t}(),l=n(0),b=function(){var t=Object(c.useState)(0),e=Object(s.a)(t,2),n=e[0],o=e[1];return Object(l.jsx)("div",{onClick:function(){o(n+1)},children:n})};var f=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],o=e[1],r=Object(c.useState)("man"),i=Object(s.a)(r,2),a=i[0],j=i[1],f=Object(c.useState)(1),p=Object(s.a)(f,2),d=p[0],O=p[1],v=Object(c.useState)(0),g=Object(s.a)(v,2),m=g[0],x=g[1];Object(c.useEffect)((function(){h.getMovies().then((function(t){return o(t)})),h.getTotalRes(a).then((function(t){return x(t)}))}),[]);for(var w=function(t){!function(t){O(t)}(t),console.log(d),h.showAll(a,t).then((function(t){return o(t)}))},k=[],y=1;y<=m;y++)k.push(y);var S=k.map((function(t){return Object(l.jsx)("span",{className:d===t?"active":"",onClick:function(){return w(t)},children:t+" "})}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(b,{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{value:a,onChange:function(t){j(t.target.value)}}),Object(l.jsx)("button",{onClick:function(){h.search(a).then((function(t){return o(t)})),h.getTotalRes(a).then((function(t){return console.log(t),x(t)})),O(1)},children:"Search"})]}),k.length>20?S=[].concat(Object(u.a)(S.slice(0,20)),["...",S[S.length-1]]):S,Object(l.jsx)("div",{}),n?n.map((function(t){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[t.Poster&&Object(l.jsx)("img",{src:t.Poster}),!t.Poster&&Object(l.jsx)("img",{src:"http://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:t.Title}),Object(l.jsx)("div",{children:t.Type}),Object(l.jsx)("div",{children:t.Year})]})]},t.imdbID)})):""]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),r(t),i(t)}))};i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),p()}},[[17,1,2]]]);
//# sourceMappingURL=main.f1064f4a.chunk.js.map