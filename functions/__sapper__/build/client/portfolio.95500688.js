import{S as e,i as t,s as r,e as o,t as n,a,c as s,b as i,d as c,f as l,g as p,h,n as m,y as d}from"./chunk.74b5ecd6.js";function f(e,t,r){const o=Object.create(e);return o.project=t[r],o}function u(e){var t,r,d,f,u,g,v,y,E=e.project.name,b=e.project.description;return{c(){t=o("li"),r=o("a"),d=n(E),f=a(),u=o("p"),g=n(b),v=a(),y=o("hr"),this.h()},l(e){t=s(e,"LI",{},!1);var o=i(t);r=s(o,"A",{href:!0,target:!0,class:!0},!1);var n=i(r);d=c(n,E),n.forEach(l),f=c(o,"\n\t\t"),u=s(o,"P",{class:!0},!1);var a=i(u);g=c(a,b),a.forEach(l),o.forEach(l),v=c(e,"\n\t"),y=s(e,"HR",{},!1),i(y).forEach(l),this.h()},h(){r.href=e.project.href,r.target="_blank",r.className="svelte-mxz19y",u.className="svelte-mxz19y"},m(e,o){p(e,t,o),h(t,r),h(r,d),h(t,f),h(t,u),h(u,g),p(e,v,o),p(e,y,o)},p:m,d(e){e&&(l(t),l(v),l(y))}}}function g(e){for(var t,r,g,v,y,E,b,j,L=e.projects,k=[],S=0;S<L.length;S+=1)k[S]=u(f(e,L,S));return{c(){t=a(),r=o("h1"),g=n("Portfolio"),v=a(),y=o("h2"),E=n("Links to some of my better examples"),b=a(),j=o("ul");for(var e=0;e<k.length;e+=1)k[e].c();this.h()},l(e){t=c(e,"\n\n"),r=s(e,"H1",{},!1);var o=i(r);g=c(o,"Portfolio"),o.forEach(l),v=c(e,"\n\n"),y=s(e,"H2",{},!1);var n=i(y);E=c(n,"Links to some of my better examples"),n.forEach(l),b=c(e,"\n"),j=s(e,"UL",{},!1);for(var a=i(j),p=0;p<k.length;p+=1)k[p].l(a);a.forEach(l),this.h()},h(){document.title="Michael Garten | Portfolio"},m(e,o){p(e,t,o),p(e,r,o),h(r,g),p(e,v,o),p(e,y,o),h(y,E),p(e,b,o),p(e,j,o);for(var n=0;n<k.length;n+=1)k[n].m(j,null)},p(e,t){if(e.projects){L=t.projects;for(var r=0;r<L.length;r+=1){const o=f(t,L,r);k[r]?k[r].p(e,o):(k[r]=u(o),k[r].c(),k[r].m(j,null))}for(;r<k.length;r+=1)k[r].d(1);k.length=L.length}},i:m,o:m,d(e){e&&(l(t),l(r),l(v),l(y),l(b),l(j)),d(k,e)}}}function v(e){return{projects:[{name:"Monaco Editor Playground",description:"Component IDE using Monaco Editor wrapped with Svelte 3, backed by Firestore realtime data",href:"https://fullstackvoyage.com"},{name:"Lit-Element Kanban-ish Board",description:"Some different list components and things using typescript and Lit-Element",href:"https://stackblitz.com/edit/lit-el-playground"},{name:"Lit-Element App Layout Components",description:"Example using a few components to create a very dynamic, configurable app layout",href:"https://codepen.io/mjgartendev/pen/eoqWwV"},{name:"Browser based IDE for bundling ES Modules (UI only)",description:"Layout only of my dream project. A reimagined, simplified, browser only development environment",href:"https://codepen.io/mjgartendev/full/zQOLqW"},{name:"Svelte CSS Grid Editor",description:"A super simple CSS Grid App Layout designer",href:"https://stackblitz.com/edit/svelte-dynagrid-rk12va"}]}}export default class extends e{constructor(e){super(),t(this,e,v,g,r,[])}}
//# sourceMappingURL=portfolio.95500688.js.map