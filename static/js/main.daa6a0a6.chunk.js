(this["webpackJsonpcountries-data-app"]=this["webpackJsonpcountries-data-app"]||[]).push([[0],{19:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(21),n=s.n(a),r=(s(28),s(8)),l=(s(29),s(10)),o=s(11),i=(s(19),s(0));var d=function(e){var t=e.toggleMode,s=e.newStyles;return Object(i.jsxs)("div",{className:"switch",children:[Object(i.jsx)(l.a,{icon:o.b,className:"moon-icon",onClick:t}),Object(i.jsx)("h4",{style:s.h2,children:"Dark Mode"})]})};s(36);var j=function(e){var t=e.newStyles,s=e.toggleMode,c=e.good;return Object(i.jsx)("div",{className:"nav",style:t.countriesContainerColor,children:Object(i.jsxs)("div",{className:"nav-items",children:[Object(i.jsx)("h1",{style:t.h2,children:"Where in the world?"}),Object(i.jsx)(d,{newStyles:t,toggleMode:s,good:c})]})})},u=s(12),h=(s(37),s(23));s(38);var b=function(e){var t=e.displaySearchedItem,s=e.newStyles,c=e.toggleSearchIconDisplay;return Object(i.jsxs)("div",{className:"search-container",children:[Object(i.jsx)(l.a,{icon:o.c,className:"search",style:s.searchIconStyle}),Object(i.jsx)("input",{type:"text",name:"searchBar",className:"searchInput",onClick:c,onChange:t,placeholder:"Search for a country",style:Object(h.a)({},s.searchColor)})]})};var m=function(e){var t=e.data,s=e.newStyles,a=e.toggleMode,n=e.good,l=e.toggleSearchIconDisplay,o=Object(c.useState)(""),d=Object(r.a)(o,2),h=d[0],m=d[1],p=Object(c.useState)([]),O=Object(r.a)(p,2),x=O[0],y=O[1];return Object(i.jsxs)("div",{className:"components",style:s.body,children:[Object(i.jsx)(j,{newStyles:s,toggleMode:a,good:n}),Object(i.jsx)(b,{displaySearchedItem:function(e){m(e.target.value);var s=t.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())}));y(s)},newStyles:s,toggleSearchIconDisplay:l}),Object(i.jsx)("div",{className:"countries",children:""===h?t.map((function(e){var t=e.name,c=e.population,a=e.region,n=e.capital,r=e.flag,l=e.numericCode;return Object(i.jsx)("div",{className:"countries-container",children:Object(i.jsx)("div",{className:"countries-container-individual",style:s.countriesContainerColor,children:Object(i.jsxs)(u.b,{to:"/countries/".concat(t),className:"countries-link",children:[Object(i.jsx)("img",{src:r,alt:"",className:"flag"}),Object(i.jsxs)("div",{className:"countries-data",children:[Object(i.jsxs)("h2",{style:s.h2,children:[" ",t," "]}),Object(i.jsxs)("p",{style:s.p,children:[Object(i.jsx)("span",{className:"countries-data-items",children:" Population: "})," ",Object(i.jsx)("span",{className:"countries-data-result",style:s.p,children:(new Intl.NumberFormat).format(c)})]}),Object(i.jsxs)("p",{style:s.p,children:[" ",Object(i.jsx)("span",{className:"countries-data-items",children:" Region: "})," ",Object(i.jsx)("span",{className:"countries-data-result",style:s.p,children:a})]}),Object(i.jsxs)("p",{style:s.p,children:[Object(i.jsx)("span",{className:"countries-data-items",children:" Capital: "})," ",Object(i.jsx)("span",{className:"countries-data-result",style:s.p,children:n})]})]})]})})},l)})):x.map((function(e){var t=e.name,c=e.population,a=e.region,n=e.capital,r=e.flag,l=e.numericCode;return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"countries-container",children:Object(i.jsx)("div",{className:"countries-container-individual",style:s.countriesContainerColor,children:Object(i.jsxs)(u.b,{to:"/countries/".concat(t),className:"countries-link",children:[Object(i.jsx)("img",{src:r,alt:"",className:"flag"}),Object(i.jsxs)("div",{className:"countries-data",children:[Object(i.jsxs)("h2",{style:s.h2,children:[" ",t," "]}),Object(i.jsxs)("p",{style:s.p,children:[Object(i.jsx)("span",{className:"countries-data-items",children:" Population: "})," ",Object(i.jsx)("span",{className:"countries-data-result",style:s.p,children:(new Intl.NumberFormat).format(c)})]}),Object(i.jsxs)("p",{style:s.p,children:[" ",Object(i.jsx)("span",{className:"countries-data-items",children:" Region: "})," ",Object(i.jsx)("span",{className:"countries-data-result",style:s.p,children:a})]}),Object(i.jsxs)("p",{style:s.p,children:[Object(i.jsx)("span",{className:"countries-data-items",children:" Capital: "})," ",Object(i.jsx)("span",{className:"countries-data-result",style:s.p,children:n})]})]})]})})},l)})}))})]})},p=s(3);s(41);var O=function(e){var t=Object(c.useState)([]),s=Object(r.a)(t,2),a=s[0],n=s[1],d=Object(p.f)().name,u=e.newStyles,h=e.toggleMode,b=e.good;return Object(c.useEffect)((function(){var e="https://restcountries.com/v2/name/".concat(d);fetch(e).then((function(e){return e.json()})).then((function(e){return n(e)}))}),[d]),Object(i.jsxs)("div",{className:"country-info-main-container",style:u.body,children:[Object(i.jsx)(j,{newStyles:u,toggleMode:h,good:b}),Object(i.jsx)("a",{href:"#",children:Object(i.jsxs)("button",{className:"button-back",style:u.backArrowStyle,children:[Object(i.jsx)(l.a,{icon:o.a,className:"arrow-left"}),"Back"]})}),a.map((function(e){var t=e||{},s=t.flag,c=t.name,a=t.nativeName,n=t.population,r=t.region,l=t.subregion,o=t.capital,d=t.topLevelDomain,j=t.currencies,h=t.languages,b=t.borders,m=t.numericCode;return Object(i.jsxs)("div",{className:"country-info-container",children:[Object(i.jsx)("img",{src:s,alt:"",className:"country-info-flag"}),Object(i.jsxs)("div",{className:"country-info-container-details",children:[Object(i.jsxs)("div",{className:"country-info-details",children:[Object(i.jsxs)("div",{className:"country-info-text",children:[Object(i.jsxs)("h2",{style:u.h2,children:[" ",c," "]}),Object(i.jsxs)("p",{style:u.h2,children:[Object(i.jsx)("span",{className:"countries-data-items",children:"Native Name: "})," ",Object(i.jsx)("span",{className:"countries-data-result",style:u.p,children:a})]}),Object(i.jsxs)("p",{style:u.h2,children:[Object(i.jsx)("span",{className:"countries-data-items",children:"Population: "})," ",Object(i.jsx)("span",{className:"countries-data-result",style:u.p,children:(new Intl.NumberFormat).format(n)})]}),Object(i.jsxs)("p",{style:u.h2,children:[Object(i.jsx)("span",{className:"countries-data-items",children:"Region: "})," ",Object(i.jsx)("span",{className:"countries-data-result",style:u.p,children:r})]}),Object(i.jsxs)("p",{style:u.h2,children:[Object(i.jsx)("span",{className:"countries-data-items",children:"Sub Region: "})," ",Object(i.jsx)("span",{className:"countries-data-result",style:u.p,children:l})]}),Object(i.jsxs)("p",{style:u.h2,children:[Object(i.jsx)("span",{className:"countries-data-items",children:"Capital: "})," ",Object(i.jsx)("span",{className:"countries-data-result",style:u.p,children:o})]})]}),Object(i.jsxs)("div",{className:"country-info-text-2",children:[Object(i.jsxs)("p",{style:u.h2,children:[Object(i.jsx)("span",{className:"countries-data-items",children:"Top Level Domain: "})," ",Object(i.jsx)("span",{className:"countries-data-result",style:u.p,children:d})]}),Object(i.jsxs)("p",{style:u.h2,children:[Object(i.jsx)("span",{className:"countries-data-items",children:"Currencies: "})," ",Object(i.jsx)("span",{className:"countries-data-result",style:u.p,children:j[0].name})]}),Object(i.jsxs)("div",{style:u.h2,children:[Object(i.jsx)("span",{className:"countries-data-items",children:"Languages: "})," ",Object(i.jsx)("span",{className:"countries-data-result",children:h.map((function(e){var t=e.name,s=e.iso639_2;return Object(i.jsxs)("span",{style:u.p,children:[t," \xa0"]},s)}))})]})]})]}),Object(i.jsxs)("div",{className:"country-info-borders",children:[Object(i.jsx)("h3",{style:u.h2,children:"Border Countries :"}),Object(i.jsx)("div",{className:"country-info-borders-details",children:"undefined"!==typeof b?b.map((function(e){return Object(i.jsx)("div",{className:"border-countries",children:Object(i.jsx)("p",{className:"border-countries-text",style:u.p,children:e})},e)})):Object(i.jsx)("div",{style:{width:"15rem"},children:"".concat(c," does not have border countries")})})]})]})]},m)}))]})};var x=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)({}),l=Object(r.a)(n,2),o=l[0],d=l[1],j=Object(c.useState)("false"),h=Object(r.a)(j,2),b=h[0],x=h[1],y=Object(c.useState)("visible"),g=Object(r.a)(y,2),f=g[0],N=g[1];function v(){x("true"),"true"===b?(d({darkModeBackground:"hsl(207, 26%, 17%)",headerColor:"hsl(0, 0%, 100%)",darkPadding:"10rem",darkOverflow:"hidden",countriesContainerColor:" hsl(209, 23%, 22%)",countriesContainerP:"hsl(0, 0%, 100%)",searchColor:"hsl(209, 23%, 22%)",navBackground:"-1px 4px 4px 0px hsl(207, 26%, 17%)",backArrowBorder:"1px solid hsl(209, 23%, 22%)",backArrowColor:"hsl(209, 23%, 22%)"}),x("false")):"false"===b&&d({})}Object(c.useEffect)((function(){fetch("https://restcountries.com/v2/all").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]);var C={body:{backgroundColor:o.darkModeBackground},h2:{color:o.headerColor},p:{color:o.countriesContainerP},countriesContainerColor:{backgroundColor:o.countriesContainerColor,boxShadow:o.navBackground},searchColor:{backgroundColor:o.searchColor,color:o.headerColor},searchIconStyle:{color:o.headerColor,visibility:f},backArrowStyle:{backgroundColor:o.backArrowColor,border:o.backArrowBorder,color:o.headerColor}};return Object(i.jsx)(u.a,{children:Object(i.jsxs)(p.c,{children:[Object(i.jsx)(p.a,{path:"/",exact:!0,children:Object(i.jsx)(m,{data:s,newStyles:C,toggleMode:v,toggleSearchIconDisplay:function(e){e.target===document.activeElement?N("hidden"):N("visible")}})}),Object(i.jsx)(p.a,{path:"/countries/:name",children:Object(i.jsx)(O,{data:s,newStyles:C,toggleMode:v})})]})})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,43)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),c(e),a(e),n(e),r(e)}))};n.a.render(Object(i.jsx)("div",{children:Object(i.jsx)(x,{})}),document.getElementById("root")),y()}},[[42,1,2]]]);
//# sourceMappingURL=main.daa6a0a6.chunk.js.map