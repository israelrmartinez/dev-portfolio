"use strict";(self.webpackChunkismartinez=self.webpackChunkismartinez||[]).push([[411,84],{411:function(e,n,a){a.r(n);var t=a(9439),c=a(2791),r=a(7111),s=a(7022),o=a(9743),i=a(2677),l=a(1394),f=a(7084),u=a(126),d=a(2150),h=a(184),v={introTextContainer:{margin:"8%",flexDirection:"column",whiteSpace:"pre-wrap",textAlign:"left",fontSize:"1.2em",fontWeight:500},introImageContainer:{margin:10,justifyContent:"center",alignItems:"center",display:"flex"}};n.default=function(e){var n,a=e.header,m=(0,c.useState)(null),p=(0,t.Z)(m,2),x=p[0],Z=p[1];return(0,c.useEffect)((function(){fetch(u.Z.about,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return Z(e)})).catch((function(e){return e}))}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.default,{title:a}),(0,h.jsx)("div",{className:"section-content-container",children:(0,h.jsx)(s.Z,{children:x?(0,h.jsx)(l.ZP,{children:(0,h.jsxs)(o.Z,{children:[(0,h.jsx)(i.Z,{style:v.introTextContainer,children:(n=x.about,(0,h.jsx)(r.D,{children:n}))}),(0,h.jsx)(i.Z,{style:v.introImageContainer,children:(0,h.jsx)("img",{src:null===x||void 0===x?void 0:x.imageSource,alt:"profile"})})]})}):(0,h.jsx)(d.default,{})})})]})}},7084:function(e,n,a){a.r(n);a(2791),a(3508);var t=a(184);n.default=function(e){var n=e.title;return(0,t.jsx)("div",{className:"header",children:n})}},2677:function(e,n,a){var t=a(9439),c=a(1413),r=a(5987),s=a(1694),o=a.n(s),i=a(2791),l=a(162),f=a(184),u=["as","bsPrefix","className"],d=["className"];var h=i.forwardRef((function(e,n){var a=function(e){var n=e.as,a=e.bsPrefix,t=e.className,s=(0,r.Z)(e,u);a=(0,l.vE)(a,"col");var i=(0,l.pi)(),f=(0,l.zG)(),d=[],h=[];return i.forEach((function(e){var n,t,c,r=s[e];delete s[e],"object"===typeof r&&null!=r?(n=r.span,t=r.offset,c=r.order):n=r;var o=e!==f?"-".concat(e):"";n&&d.push(!0===n?"".concat(a).concat(o):"".concat(a).concat(o,"-").concat(n)),null!=c&&h.push("order".concat(o,"-").concat(c)),null!=t&&h.push("offset".concat(o,"-").concat(t))})),[(0,c.Z)((0,c.Z)({},s),{},{className:o().apply(void 0,[t].concat(d,h))}),{as:n,bsPrefix:a,spans:d}]}(e),s=(0,t.Z)(a,2),i=s[0],h=i.className,v=(0,r.Z)(i,d),m=s[1],p=m.as,x=void 0===p?"div":p,Z=m.bsPrefix,j=m.spans;return(0,f.jsx)(x,(0,c.Z)((0,c.Z)({},v),{},{ref:n,className:o()(h,!j.length&&Z)}))}));h.displayName="Col",n.Z=h},9743:function(e,n,a){var t=a(1413),c=a(5987),r=a(1694),s=a.n(r),o=a(2791),i=a(162),l=a(184),f=["bsPrefix","className","as"],u=o.forwardRef((function(e,n){var a=e.bsPrefix,r=e.className,o=e.as,u=void 0===o?"div":o,d=(0,c.Z)(e,f),h=(0,i.vE)(a,"row"),v=(0,i.pi)(),m=(0,i.zG)(),p="".concat(h,"-cols"),x=[];return v.forEach((function(e){var n,a=d[e];delete d[e],n=null!=a&&"object"===typeof a?a.cols:a;var t=e!==m?"-".concat(e):"";null!=n&&x.push("".concat(p).concat(t,"-").concat(n))})),(0,l.jsx)(u,(0,t.Z)((0,t.Z)({ref:n},d),{},{className:s().apply(void 0,[r,h].concat(x))}))}));u.displayName="Row",n.Z=u}}]);
//# sourceMappingURL=411.d6dff5d8.chunk.js.map