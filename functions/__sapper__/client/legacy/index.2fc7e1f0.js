import{_ as t,a as n,b as s,c as o,i as r,d as a,s as e,S as f,e as c,t as u,g as i,h,j as l,k as p,l as g,m as v,u as m,f as d,n as b,D as j}from"./chunk.dd08f473.js";function E(t,n,s){var o=Object.create(t);return o.post=n[s],o}function k(t){var n,s,o,r,a=t.post.title;return{c:function(){n=c("li"),s=c("a"),o=u(a),this.h()},l:function(t){n=i(t,"LI",{},!1);var r=h(n);s=i(r,"A",{rel:!0,href:!0},!1);var e=h(s);o=l(e,a),e.forEach(p),r.forEach(p),this.h()},h:function(){s.rel="prefetch",s.href=r="blog/"+t.post.slug},m:function(t,r){g(t,n,r),v(n,s),v(s,o)},p:function(t,n){t.posts&&a!==(a=n.post.title)&&m(o,a),t.posts&&r!==(r="blog/"+n.post.slug)&&(s.href=r)},d:function(t){t&&p(n)}}}function x(t){for(var n,s,o,r,a,e=t.posts,f=[],m=0;m<e.length;m+=1)f[m]=k(E(t,e,m));return{c:function(){n=d(),s=c("h1"),o=u("Recent posts"),r=d(),a=c("ul");for(var t=0;t<f.length;t+=1)f[t].c();this.h()},l:function(t){n=l(t,"\n\n"),s=i(t,"H1",{},!1);var e=h(s);o=l(e,"Recent posts"),e.forEach(p),r=l(t,"\n\n"),a=i(t,"UL",{class:!0},!1);for(var c=h(a),u=0;u<f.length;u+=1)f[u].l(c);c.forEach(p),this.h()},h:function(){document.title="Blog",a.className="svelte-1frg2tf"},m:function(t,e){g(t,n,e),g(t,s,e),v(s,o),g(t,r,e),g(t,a,e);for(var c=0;c<f.length;c+=1)f[c].m(a,null)},p:function(t,n){if(t.posts){e=n.posts;for(var s=0;s<e.length;s+=1){var o=E(n,e,s);f[s]?f[s].p(t,o):(f[s]=k(o),f[s].c(),f[s].m(a,null))}for(;s<f.length;s+=1)f[s].d(1);f.length=e.length}},i:b,o:b,d:function(t){t&&(p(n),p(s),p(r),p(a)),j(f,t)}}}function L(t){t.params,t.query;return this.fetch("blog.json").then(function(t){return t.json()}).then(function(t){return{posts:t}})}function R(t,n,s){var o=n.posts;return t.$set=function(t){"posts"in t&&s("posts",o=t.posts)},{posts:o}}export default(function(c){function u(t){var f;return n(this,u),f=s(this,o(u).call(this)),r(a(f),t,R,x,e,["posts"]),f}return t(u,f),u}());export{L as preload};
//# sourceMappingURL=index.2fc7e1f0.js.map