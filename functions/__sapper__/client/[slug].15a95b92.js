import{S as t,i as s,s as o,a,e,t as n,d as i,c as r,b as p,f as c,g as l,h,o as u,n as f}from"./chunk.74b5ecd6.js";function m(t){var s,o,m,d,g,v,x=t.post.title,b=t.post.html;return document.title=s=t.post.title,{c(){o=a(),m=e("h1"),d=n(x),g=a(),v=e("div"),this.h()},l(t){o=i(t,"\n\n"),m=r(t,"H1",{},!1);var s=p(m);d=i(s,x),s.forEach(c),g=i(t,"\n\n"),v=r(t,"DIV",{class:!0},!1),p(v).forEach(c),this.h()},h(){v.className="content svelte-gnxal1"},m(t,s){l(t,o,s),l(t,m,s),h(m,d),l(t,g,s),l(t,v,s),v.innerHTML=b},p(t,o){t.post&&s!==(s=o.post.title)&&(document.title=s),t.post&&x!==(x=o.post.title)&&u(d,x),t.post&&b!==(b=o.post.html)&&(v.innerHTML=b)},i:f,o:f,d(t){t&&(c(o),c(m),c(g),c(v))}}}async function d({params:t,query:s}){const o=await this.fetch(`blog/${t.slug}.json`),a=await o.json();if(200===o.status)return{post:a};this.error(o.status,a.message)}function g(t,s,o){let{post:a}=s;return t.$set=(t=>{"post"in t&&o("post",a=t.post)}),{post:a}}export default class extends t{constructor(t){super(),s(this,t,g,m,o,["post"])}}export{d as preload};
//# sourceMappingURL=[slug].15a95b92.js.map
