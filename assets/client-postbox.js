"use strict";function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function _next(a){asyncGeneratorStep(f,d,e,_next,_throw,"next",a)}function _throw(a){asyncGeneratorStep(f,d,e,_next,_throw,"throw",a)}var f=a.apply(b,c);_next(void 0)})}}function ufrSetPostBox(){return _ufrSetPostBox.apply(this,arguments)}function _ufrSetPostBox(){return _ufrSetPostBox=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E;return regeneratorRuntime.wrap(function _callee2$(F){for(;;)switch(F.prev=F.next){case 0:if(D=function _strip(a){return a?(a=a.replaceAll(/(<p>|<\/p>)/gm,""),a=a.replaceAll(/(&lt;p>|&lt;\/p>)/gm,""),a=a.replaceAll(/\n/gm," "),a):""},n=function _getPosts3(){return n=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(a,b,c,d){var e;return regeneratorRuntime.wrap(function _callee$(f){for(;;)switch(f.prev=f.next){case 0:e=ufrGlobals.siteUrl+"/wp-json/wp/v2/posts?_embed=&_locale=user&per_page=1",f.t0=a,f.next="all"===f.t0?4:"most-seen"===f.t0?14:"category"===f.t0?24:"tag"===f.t0?34:44;break;case 4:f.t1=d,f.next="first"===f.t1?7:"last"===f.t1?10:13;break;case 7:return f.next=9,fetch(e);case 9:return f.abrupt("return",f.sent.json());case 10:return f.next=12,fetch(e+"&order=asc");case 12:return f.abrupt("return",f.sent.json());case 13:return f.abrupt("break",44);case 14:f.t2=d,f.next="first"===f.t2?17:"last"===f.t2?20:23;break;case 17:return f.next=19,fetch(ufrGlobals.siteUrl+"/wp-json/ufr/most-seen-posts?quantity=1");case 19:return f.abrupt("return",f.sent.json());case 20:return f.next=22,fetch(ufrGlobals.siteUrl+"/wp-json/ufr/most-seen-posts?quantity=1&order=asc");case 22:return f.abrupt("return",f.sent.json());case 23:return f.abrupt("break",44);case 24:f.t3=d,f.next="first"===f.t3?27:"last"===f.t3?30:33;break;case 27:return f.next=29,fetch(e+"&categories=".concat(b,"&quantity=1"));case 29:return f.abrupt("return",f.sent.json());case 30:return f.next=32,fetch(e+"&categories=".concat(b,"&quantity=1&order=asc"));case 32:return f.abrupt("return",f.sent.json());case 33:return f.abrupt("break",44);case 34:f.t4=d,f.next="first"===f.t4?37:"last"===f.t4?40:43;break;case 37:return f.next=39,fetch(e+"&tags=".concat(c,"&quantity=1"));case 39:return f.abrupt("return",f.sent.json());case 40:return f.next=42,fetch(e+"&tags=".concat(c,"&quantity=1&order=asc"));case 42:return f.abrupt("return",f.sent.json());case 43:return f.abrupt("break",44);case 44:case"end":return f.stop();}},_callee)})),n.apply(this,arguments)},m=function _getPosts2(){return n.apply(this,arguments)},d=a.postType,e=a.postCategory,f=a.postTag,g=a.showExcerpt,h=a.boxID,i=a.postSelection,j=a.showTitle,k=a.showShareBtn,l=a.post,o=document.getElementById(h).querySelector(".box"),p=o.querySelector(".title"),q=o.querySelector(".excerpt"),r=o.querySelector(".content"),s=o.querySelector(".fa-facebook-f"),t=o.querySelector(".fa-twitter"),u=o.querySelector(".fa-whatsapp"),null===l||void 0===l){F.next=15;break}F.t0=l,F.next=18;break;case 15:return F.next=17,m(d,e,f,i);case 17:F.t0=F.sent[0];case 18:if(v=F.t0,v){F.next=22;break}return o.innerHTML="<div class=\"not-found\">Nenhum post encontrado.</div>",F.abrupt("return");case 22:w=v.link,x=v._embedded,y=v.thumbnail,z=v.excerpt,A=v.title,B=ufrGlobals.themeUrl+"/assets/img/logo/ufr-bg.png",C=x?null===(b=x["wp:featuredmedia"])||void 0===b||null===(c=b[0])||void 0===c?void 0:c.source_url:void 0,C&&(B=C),y&&(B=y),"most-seen"===d||l||(A=A.rendered,z=z.rendered),E={facebook:"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURI(w)),twitter:"https://twitter.com/intent/tweet?url=".concat(encodeURI(w),"&text=").concat(encodeURI("Veja este interessante artigo: "+A)),whatsapp:"https://api.whatsapp.com/send?text=".concat(encodeURI(A+"\n"+w))},o.style.backgroundImage="url(".concat(B,")"),p.innerHTML=j&&A?A:"",q.innerHTML=g&&z?D(z):"",o.style.height="".concat(o.clientWidth,"px"),r.style.height="".concat(o.clientWidth-(k?57:0),"px"),k&&(s.onclick=function(){return window.open(E.facebook,"_blank")},t.onclick=function(){return window.open(E.twitter,"_blank")},u.onclick=function(){return window.open(E.whatsapp,"_blank")},s.onauxclick=function(){return window.open(E.facebook,"_blank")},t.onauxclick=function(){return window.open(E.twitter,"_blank")},u.onauxclick=function(){return window.open(E.whatsapp,"_blank")});case 36:case"end":return F.stop();}},_callee2)})),_ufrSetPostBox.apply(this,arguments)}
