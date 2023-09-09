(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{36:function(e,t,c){},38:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(24),a=(c(34),c(35),c(7)),s=c(3),r=(c(36),c(9)),j=c.n(r),i=c(2),l=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(i.jsx)(a.c,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})})},o=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(l,{}),Object(i.jsx)(s.b,{})]})},d=function(){return Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("h1",{className:"title",children:"Home Page"})})})},b=function(){return Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("h1",{className:"title",children:"Page not found"})})})},h=c(4),O=c(0),x=(c(38),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function u(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var m=c(22),p=c(25),f=Object(p.create)((function(e){return{people:[],setPeople:function(t){return e((function(e){return Object(m.a)(Object(m.a)({},e),{},{people:t})}))}}})),v=function(){var e=Object(O.useState)(!1),t=Object(h.a)(e,2),c=t[0],n=t[1],r=Object(O.useState)(!1),l=Object(h.a)(r,2),o=l[0],d=l[1],b=Object(s.r)().human,m=f(),p=m.people,v=m.setPeople;Object(O.useEffect)((function(){n(!0),u().then((function(e){return v(e)})).catch((function(e){d(!0),Error(e.message)})).finally((function(){return n(!1)}))}),[]);var g=function(e){if(!e)return"-";var t=p.filter((function(t){return t.name===e}));return t.length?Object(i.jsx)(a.b,{className:j()({"has-text-danger":"f"===t[0].sex}),to:"../".concat(t[0].slug),children:t[0].name}):e};return Object(i.jsxs)("main",{className:"section",children:[Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("h1",{className:"title",children:"People Page"})}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[o&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),0===p.length&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),c?Object(i.jsx)(x,{}):Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsxs)("tbody",{children:[p.map((function(e){var t=e.name,c=e.slug,n=e.sex,s=e.born,r=e.died,l=e.fatherName,o=e.motherName;return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":c===b}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(a.b,{className:j()({"has-text-danger":"f"===n}),to:"../".concat(c),children:t})}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:g(o)}),Object(i.jsx)("td",{children:g(l)})]},c)})),Object(i.jsxs)("tr",{"data-cy":"person",children:[Object(i.jsx)("td",{children:Object(i.jsx)("a",{href:"#/people/jan-van-brussel-1714",children:"Jan van Brussel"})}),Object(i.jsx)("td",{children:"m"}),Object(i.jsx)("td",{children:"1714"}),Object(i.jsx)("td",{children:"1748"}),Object(i.jsx)("td",{children:"Joanna van Rooten"}),Object(i.jsx)("td",{children:"Jacobus van Brussel"})]})]})]})]})})]})},g=function(){return Object(i.jsx)(a.a,{children:Object(i.jsxs)(s.e,{children:[Object(i.jsx)(s.c,{path:"*",element:Object(i.jsx)(b,{})}),Object(i.jsxs)(s.c,{path:"/",element:Object(i.jsx)(o,{}),children:[Object(i.jsx)(s.c,{index:!0,element:Object(i.jsx)(d,{})}),Object(i.jsx)(s.c,{path:"home",element:Object(i.jsx)(s.a,{to:"/"})}),Object(i.jsx)(s.c,{path:"people",children:Object(i.jsx)(s.c,{path:":human?",element:Object(i.jsx)(v,{})})})]})]})})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(g,{}))}},[[44,1,2]]]);
//# sourceMappingURL=main.1cbec8f7.chunk.js.map