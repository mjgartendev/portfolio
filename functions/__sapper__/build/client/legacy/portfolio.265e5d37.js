import{_ as t,a as e,b as n,c as o,i as r,d as a,s as i,S as s,e as c,t as l,f,g as p,h,j as d,k as u,l as m,m as g,n as v,D as y}from"./chunk.dd08f473.js";function E(t,e,n){var o=Object.create(t);return o.project=e[n],o}function b(t){var e,n,o,r,a,i,s,y=t.project.name,E=t.project.description;return{c:function(){e=c("li"),n=c("a"),o=l(y),r=f(),a=c("p"),i=l(E),s=f(),this.h()},l:function(t){e=p(t,"LI",{},!1);var c=h(e);n=p(c,"A",{href:!0,target:!0},!1);var l=h(n);o=d(l,y),l.forEach(u),r=d(c,"\n\t\t"),a=p(c,"P",{},!1);var f=h(a);i=d(f,E),f.forEach(u),s=d(c,"\n\t"),c.forEach(u),this.h()},h:function(){n.href=t.project.href,n.target="_blank"},m:function(t,c){m(t,e,c),g(e,n),g(n,o),g(e,r),g(e,a),g(a,i),g(e,s)},p:v,d:function(t){t&&u(e)}}}function j(t){for(var e,n,o,r,a,i,s,j,L=t.projects,k=[],S=0;S<L.length;S+=1)k[S]=b(E(t,L,S));return{c:function(){e=f(),n=c("h1"),o=l("Portfolio"),r=f(),a=c("h2"),i=l("Links to some of my better examples"),s=f(),j=c("ul");for(var t=0;t<k.length;t+=1)k[t].c();this.h()},l:function(t){e=d(t,"\n\n"),n=p(t,"H1",{},!1);var c=h(n);o=d(c,"Portfolio"),c.forEach(u),r=d(t,"\n\n"),a=p(t,"H2",{},!1);var l=h(a);i=d(l,"Links to some of my better examples"),l.forEach(u),s=d(t,"\n"),j=p(t,"UL",{},!1);for(var f=h(j),m=0;m<k.length;m+=1)k[m].l(f);f.forEach(u),this.h()},h:function(){document.title="Michael Garten | Portfolio"},m:function(t,c){m(t,e,c),m(t,n,c),g(n,o),m(t,r,c),m(t,a,c),g(a,i),m(t,s,c),m(t,j,c);for(var l=0;l<k.length;l+=1)k[l].m(j,null)},p:function(t,e){if(t.projects){L=e.projects;for(var n=0;n<L.length;n+=1){var o=E(e,L,n);k[n]?k[n].p(t,o):(k[n]=b(o),k[n].c(),k[n].m(j,null))}for(;n<k.length;n+=1)k[n].d(1);k.length=L.length}},i:v,o:v,d:function(t){t&&(u(e),u(n),u(r),u(a),u(s),u(j)),y(k,t)}}}function L(t){return{projects:[{name:"Monaco Editor Playground",description:"Component IDE using Monaco Editor wrapped with Svelte 3, backed by Firestore realtime data",href:"https://fullstackvoyage.com"},{name:"Lit-Element Kanban-ish Board",description:"Some different list components and things using typescript and Lit-Element",href:"https://stackblitz.com/edit/lit-el-playground"},{name:"Lit-Element App Layout Components",description:"Example using a few components to create a very dynamic, configurable app layout",href:"https://codepen.io/mjgartendev/pen/eoqWwV"},{name:"Browser based IDE for bundling ES Modules (UI only)",description:"Layout only of my dream project. A reimagined, simplified, browser only development environment",href:"https://codepen.io/mjgartendev/full/zQOLqW"},{name:"Svelte CSS Grid Editor",description:"A super simple CSS Grid App Layout designer",href:"https://stackblitz.com/edit/svelte-dynagrid-rk12va"}]}}export default(function(c){function l(t){var s;return e(this,l),s=n(this,o(l).call(this)),r(a(s),t,L,j,i,[]),s}return t(l,s),l}());
//# sourceMappingURL=portfolio.265e5d37.js.map
