(function(t){function e(e){for(var r,o,i=e[0],u=e[1],s=e[2],l=0,f=[];l<i.length;l++)o=i[l],c[o]&&f.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},c={app:0},a=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-1675999c":"115372bc","chunk-4869f1b6":"7bc8c1ff","chunk-644ec7c6":"91e8de2e"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-1675999c":1,"chunk-4869f1b6":1,"chunk-644ec7c6":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-1675999c":"34b26fa2","chunk-4869f1b6":"306d4862","chunk-644ec7c6":"d837d910"}[t]+".css",c=u.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===c)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||c,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[t],d.parentNode.removeChild(d),n(a)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){o[t]=0}));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise(function(e,n){r=c[t]=[e,n]});e.push(r[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t),s=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}c[t]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("div",{staticClass:"container"},[n("router-view")],1)],1)},c=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"blue darken-3"},[n("div",{staticClass:"nav-wrapper"},[n("router-link",{staticClass:"brand-logo right",attrs:{to:"/"}},[t._v("CONTACT BOOK")]),n("ul",{staticClass:"left hide-on-med-and-down"},[n("router-link",{attrs:{tag:"li",to:"/",exact:"","active-class":"active"}},[n("a",{attrs:{href:"#"}},[t._v("New contact")])]),n("router-link",{attrs:{tag:"li",to:"/list","active-class":"active"}},[n("a",{attrs:{href:"#"}},[t._v("Contact list")])])],1)],1)])},i=[],u={},s=u,l=(n("e160"),n("2877")),f=Object(l["a"])(s,a,i,!1,null,"22ac9774",null),d=f.exports,p={components:{Navbar:d}},h=p,m=(n("5c0b"),Object(l["a"])(h,o,c,!1,null,null,null)),v=m.exports,g=n("8c4f");r["a"].use(g["a"]);var b=new g["a"]({mode:"history",base:"/",routes:[{path:"/",name:"create",component:function(){return n.e("chunk-1675999c").then(n.bind(null,"d879"))}},{path:"/list",name:"list",component:function(){return n.e("chunk-644ec7c6").then(n.bind(null,"1a33"))}},{path:"/contact/:id",name:"contact",component:function(){return n.e("chunk-4869f1b6").then(n.bind(null,"b8fa"))}}]}),y=(n("7514"),n("cebc")),w=(n("20d6"),n("7f7f"),n("6d67"),n("2f62"));r["a"].use(w["a"]);var k=new w["a"].Store({state:{contacts:JSON.parse(localStorage.getItem("contacts")||"[]").map(function(t){return new Date(t.date)<new Date&&(t.status="outdated"),t})},mutations:{createContact:function(t,e){t.contacts.push(e),localStorage.setItem("contacts",JSON.stringify(t.contacts))},updateContact:function(t,e){var n=e.id,r=e.name,o=e.lastName,c=e.phone,a=e.date,i=e.address,u=e.email,s=t.contacts.concat(),l=s.findIndex(function(t){return t.id===n}),f=s[l];s[l]=Object(y["a"])({},f,{name:r,lastName:o,phone:c,date:a,address:i,email:u}),t.contacts=s,localStorage.setItem("contacts",JSON.stringify(t.contacts))},completeContact:function(t,e){var n=t.contacts.findIndex(function(t){return t.id===e});t.contacts[n].status="completed",localStorage.setItem("contacts",JSON.stringify(t.contacts))}},actions:{createContact:function(t,e){var n=t.commit;n("createContact",e)},deleteContact:function(t,e){var n=t.commit;n("deleteContact",e)},updateContact:function(t,e){var n=t.commit;n("updateContact",e)},completeContact:function(t,e){var n=t.commit;n("completeContact",e)}},getters:{contacts:function(t){return t.contacts},contactById:function(t){return function(e){return t.contacts.find(function(t){return t.id===e})}}}}),C=(n("6885"),n("9483"));Object(C["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["a"].config.productionTip=!1,new r["a"]({router:b,store:k,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(t,e,n){},d7fa:function(t,e,n){},e160:function(t,e,n){"use strict";var r=n("d7fa"),o=n.n(r);o.a}});
//# sourceMappingURL=app.f92b1ae6.js.map