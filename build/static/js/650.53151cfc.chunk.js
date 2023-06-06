"use strict";(self.webpackChunkismartinez=self.webpackChunkismartinez||[]).push([[650,84,328],{7084:function(e,a,r){r.r(a);r(2791),r(3508);var t=r(184);a.default=function(e){var a=e.title;return(0,t.jsx)("div",{className:"header",children:a})}},1650:function(e,a,r){r.r(a);var t=r(9439),n=r(2791),c=r(7022),s=r(9743),o=r(3360),i=r(6444),l=r(4075),d=r.n(l),f=r(7084),u=r(126),v=r(7328),m=r(2150),x=r(184),b={containerStyle:{marginBottom:25},showMoreStyle:{margin:25}};a.default=function(e){var a,r=(0,n.useContext)(i.Ni),l=e.header,Z=(0,n.useState)(null),p=(0,t.Z)(Z,2),h=p[0],y=p[1],g=(0,n.useState)(!1),j=(0,t.Z)(g,2),N=j[0],S=j[1];(0,n.useEffect)((function(){fetch(u.Z.projects,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return y(e)})).catch((function(e){return e}))}),[]);var P=N&&h?h.length:6;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f.default,{title:l}),h?(0,x.jsx)("div",{className:"section-content-container",children:(0,x.jsxs)(c.Z,{style:b.containerStyle,children:[(0,x.jsx)(s.Z,{xs:1,sm:1,md:2,lg:3,className:"g-4",children:null===(a=h.projects)||void 0===a?void 0:a.slice(0,P).map((function(e){return(0,x.jsx)(d(),{children:(0,x.jsx)(v.default,{project:e})},e.title)}))}),!N&&(0,x.jsx)(o.Z,{style:b.showMoreStyle,variant:r.bsSecondaryVariant,onClick:function(){return S(!0)},children:"show more"})]})}):(0,x.jsx)(m.default,{})]})}},7328:function(e,a,r){r.r(a),r.d(a,{default:function(){return h}});var t=r(1413),n=r(2791),c=r(2677),s=r(9140),o=r(3360),i=r(5987),l=r(1694),d=r.n(l),f=r(162),u=r(184),v=["bsPrefix","bg","pill","text","className","as"],m=n.forwardRef((function(e,a){var r=e.bsPrefix,n=e.bg,c=void 0===n?"primary":n,s=e.pill,o=void 0!==s&&s,l=e.text,m=e.className,x=e.as,b=void 0===x?"span":x,Z=(0,i.Z)(e,v),p=(0,f.vE)(r,"badge");return(0,u.jsx)(b,(0,t.Z)((0,t.Z)({ref:a},Z),{},{className:d()(m,p,o&&"rounded-pill",l&&"text-".concat(l),c&&"bg-".concat(c))}))}));m.displayName="Badge";var x=m,b=r(6444),Z=r(7111),p={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}},h=function(e){var a,r,i=(0,n.useContext)(b.Ni),l=e.project;return(0,u.jsx)(c.Z,{children:(0,u.jsxs)(s.Z,{style:(0,t.Z)((0,t.Z)({},p.cardStyle),{},{backgroundColor:i.cardBackground,borderColor:i.cardBorderColor}),text:i.bsSecondaryVariant,children:[(0,u.jsx)(s.Z.Img,{variant:"top",src:null===l||void 0===l?void 0:l.image}),(0,u.jsxs)(s.Z.Body,{children:[(0,u.jsx)(s.Z.Title,{style:p.cardTitleStyle,children:l.title}),(0,u.jsx)(s.Z.Text,{style:p.cardTextStyle,children:(r=l.bodyText,(0,u.jsx)(Z.D,{children:r}))})]}),(0,u.jsx)(s.Z.Body,{children:null===l||void 0===l||null===(a=l.links)||void 0===a?void 0:a.map((function(e){return(0,u.jsx)(o.Z,{style:p.buttonStyle,variant:"outline-"+i.bsSecondaryVariant,onClick:function(){return window.open(e.href,"_blank")},children:e.text},e.href)}))}),l.tags&&(0,u.jsx)(s.Z.Footer,{style:{backgroundColor:i.cardFooterBackground},children:l.tags.map((function(e){return(0,u.jsx)(x,{pill:!0,bg:i.bsSecondaryVariant,text:i.bsPrimaryVariant,style:p.badgeStyle,children:e},e)}))})]})})}},3360:function(e,a,r){var t=r(1413),n=r(9439),c=r(5987),s=r(1694),o=r.n(s),i=r(2791),l=r(5341),d=r(162),f=r(184),u=["as","bsPrefix","variant","size","active","disabled","className"],v=i.forwardRef((function(e,a){var r=e.as,s=e.bsPrefix,i=e.variant,v=void 0===i?"primary":i,m=e.size,x=e.active,b=void 0!==x&&x,Z=e.disabled,p=void 0!==Z&&Z,h=e.className,y=(0,c.Z)(e,u),g=(0,d.vE)(s,"btn"),j=(0,l.FT)((0,t.Z)({tagName:r,disabled:p},y)),N=(0,n.Z)(j,2),S=N[0],P=N[1].tagName;return(0,f.jsx)(P,(0,t.Z)((0,t.Z)((0,t.Z)({},S),y),{},{ref:a,disabled:p,className:o()(h,g,b&&"active",v&&"".concat(g,"-").concat(v),m&&"".concat(g,"-").concat(m),y.href&&p&&"disabled")}))}));v.displayName="Button",a.Z=v},9140:function(e,a,r){r.d(a,{Z:function(){return B}});var t=r(1413),n=r(5987),c=r(1694),s=r.n(c),o=r(2791),i=r(162),l=r(6543),d=r(7472),f=r(184),u=["bsPrefix","className","variant","as"],v=o.forwardRef((function(e,a){var r=e.bsPrefix,c=e.className,o=e.variant,l=e.as,d=void 0===l?"img":l,v=(0,n.Z)(e,u),m=(0,i.vE)(r,"card-img");return(0,f.jsx)(d,(0,t.Z)({ref:a,className:s()(o?"".concat(m,"-").concat(o):m,c)},v))}));v.displayName="CardImg";var m=v,x=r(6040),b=["bsPrefix","className","as"],Z=o.forwardRef((function(e,a){var r=e.bsPrefix,c=e.className,l=e.as,d=void 0===l?"div":l,u=(0,n.Z)(e,b),v=(0,i.vE)(r,"card-header"),m=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:v}}),[v]);return(0,f.jsx)(x.Z.Provider,{value:m,children:(0,f.jsx)(d,(0,t.Z)((0,t.Z)({ref:a},u),{},{className:s()(c,v)}))})}));Z.displayName="CardHeader";var p=Z,h=["bsPrefix","className","bg","text","border","body","children","as"],y=(0,d.Z)("h5"),g=(0,d.Z)("h6"),j=(0,l.Z)("card-body"),N=(0,l.Z)("card-title",{Component:y}),S=(0,l.Z)("card-subtitle",{Component:g}),P=(0,l.Z)("card-link",{Component:"a"}),C=(0,l.Z)("card-text",{Component:"p"}),w=(0,l.Z)("card-footer"),k=(0,l.Z)("card-img-overlay"),T=o.forwardRef((function(e,a){var r=e.bsPrefix,c=e.className,o=e.bg,l=e.text,d=e.border,u=e.body,v=void 0!==u&&u,m=e.children,x=e.as,b=void 0===x?"div":x,Z=(0,n.Z)(e,h),p=(0,i.vE)(r,"card");return(0,f.jsx)(b,(0,t.Z)((0,t.Z)({ref:a},Z),{},{className:s()(c,p,o&&"bg-".concat(o),l&&"text-".concat(l),d&&"border-".concat(d)),children:v?(0,f.jsx)(j,{children:m}):m}))}));T.displayName="Card";var B=Object.assign(T,{Img:m,Title:N,Subtitle:S,Body:j,Link:P,Text:C,Header:p,Footer:w,ImgOverlay:k})},2677:function(e,a,r){var t=r(9439),n=r(1413),c=r(5987),s=r(1694),o=r.n(s),i=r(2791),l=r(162),d=r(184),f=["as","bsPrefix","className"],u=["className"];var v=i.forwardRef((function(e,a){var r=function(e){var a=e.as,r=e.bsPrefix,t=e.className,s=(0,c.Z)(e,f);r=(0,l.vE)(r,"col");var i=(0,l.pi)(),d=(0,l.zG)(),u=[],v=[];return i.forEach((function(e){var a,t,n,c=s[e];delete s[e],"object"===typeof c&&null!=c?(a=c.span,t=c.offset,n=c.order):a=c;var o=e!==d?"-".concat(e):"";a&&u.push(!0===a?"".concat(r).concat(o):"".concat(r).concat(o,"-").concat(a)),null!=n&&v.push("order".concat(o,"-").concat(n)),null!=t&&v.push("offset".concat(o,"-").concat(t))})),[(0,n.Z)((0,n.Z)({},s),{},{className:o().apply(void 0,[t].concat(u,v))}),{as:a,bsPrefix:r,spans:u}]}(e),s=(0,t.Z)(r,2),i=s[0],v=i.className,m=(0,c.Z)(i,u),x=s[1],b=x.as,Z=void 0===b?"div":b,p=x.bsPrefix,h=x.spans;return(0,d.jsx)(Z,(0,n.Z)((0,n.Z)({},m),{},{ref:a,className:o()(v,!h.length&&p)}))}));v.displayName="Col",a.Z=v},9743:function(e,a,r){var t=r(1413),n=r(5987),c=r(1694),s=r.n(c),o=r(2791),i=r(162),l=r(184),d=["bsPrefix","className","as"],f=o.forwardRef((function(e,a){var r=e.bsPrefix,c=e.className,o=e.as,f=void 0===o?"div":o,u=(0,n.Z)(e,d),v=(0,i.vE)(r,"row"),m=(0,i.pi)(),x=(0,i.zG)(),b="".concat(v,"-cols"),Z=[];return m.forEach((function(e){var a,r=u[e];delete u[e],a=null!=r&&"object"===typeof r?r.cols:r;var t=e!==x?"-".concat(e):"";null!=a&&Z.push("".concat(b).concat(t,"-").concat(a))})),(0,l.jsx)(f,(0,t.Z)((0,t.Z)({ref:a},u),{},{className:s().apply(void 0,[c,v].concat(Z))}))}));f.displayName="Row",a.Z=f}}]);
//# sourceMappingURL=650.53151cfc.chunk.js.map