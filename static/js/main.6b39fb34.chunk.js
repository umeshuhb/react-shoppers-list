(this["webpackJsonpreact-shoppers-list"]=this["webpackJsonpreact-shoppers-list"]||[]).push([[0],{68:function(t,e,c){},70:function(t,e,c){},80:function(t,e,c){},81:function(t,e,c){"use strict";c.r(e);var n=c(4),a=c(0),r=c.n(a),s=c(9),i=c.n(s),o=(c(68),c(45)),u=c(10),l=c(24),d=c.n(l),p=c(38),h=c(36);c(70);var j=function(t){var e=t.itemDetail;return Object(n.jsx)("div",{className:"product",children:Object(n.jsxs)(o.b,{to:"".concat("/react-shoppers-list","/").concat(e.categoryId,"/").concat(e.id),children:[e.name,Object(n.jsx)("img",{src:"".concat("/react-shoppers-list","/").concat(e.imageUrl),width:"100px",height:"100px"})]})})},b=c(113),x=c(120),f=c(116),m=c(119),v=Object(a.createContext)(),O=function(t){var e=Object(a.useState)({id:1,name:"Laptops"}),c=Object(h.a)(e,2),r=c[0],s=c[1];return Object(n.jsx)(v.Provider,{value:[r,s],children:t.children})},g=function(t){var e=Object(a.useState)([{category:{}}]),c=Object(h.a)(e,2),r=c[0],s=c[1],i=Object(a.useContext)(v),o=Object(h.a)(i,2),u=o[0],l=o[1],O=Object(a.useState)([{product:{}}]),g=Object(h.a)(O,2),y=g[0],k=g[1];Object(a.useEffect)((function(){I()}),[]),Object(a.useEffect)((function(){D()}),[u]);var w=Object(b.a)((function(t){return{formControl:{margin:t.spacing(1),minWidth:120},selectEmpty:{marginTop:t.spacing(2)}}}))(),C="https://my-json-server.typicode.com/umeshuhb/shoppers-list-db",D=function(){var t=Object(p.a)(d.a.mark((function t(){var e,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(C,"/products?categoryId=").concat(u.id));case 3:return e=t.sent,t.next=6,e.json();case 6:c=t.sent,k(c),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),I=function(){var t=Object(p.a)(d.a.mark((function t(){var e,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(C,"/categories"));case 3:return e=t.sent,t.next=6,e.json();case 6:c=t.sent,s(c),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("span",{children:"Category :"}),Object(n.jsx)(f.a,{className:w.formControl,children:Object(n.jsx)(m.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:u.id,onChange:function(t){var e=r.filter((function(e){return e.id===t.target.value}))[0].name;l({id:t.target.value,name:e})},children:r.map((function(t,e){return Object(n.jsx)(x.a,{value:t.id,children:t.name},e)}))})})]}),Object(n.jsx)("div",{className:"data-container flex-container",children:y.map((function(t,e){return Object(n.jsx)(j,{itemDetail:t},e)}))})]})},y=c(53),k=c(54),w=c(57),C=c(56),D=c(118),I=c(55),N=c.n(I),B=function(t){Object(w.a)(c,t);var e=Object(C.a)(c);function c(){var t;Object(y.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={productDetails:null},t}return Object(k.a)(c,[{key:"componentDidMount",value:function(){this.fetchProductDetail(this.props.match.params)}},{key:"fetchProductDetail",value:function(){var t=Object(p.a)(d.a.mark((function t(e){var c,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat("https://my-json-server.typicode.com/umeshuhb/shoppers-list-db","/productDetails?categoryId=").concat(e.catId,"&id=").concat(e.id));case 3:return c=t.sent,t.next=6,c.json();case 6:n=t.sent,this.setState({productDetails:n}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,this,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},{key:"goBack",value:function(){this.props.history.goBack()}},{key:"render",value:function(){var t=this.state.productDetails;return null===t?Object(n.jsx)("h2",{children:"Loading Product Details..."}):!t||t.length<1?Object(n.jsx)("h1",{children:" No data to display"}):Object(n.jsxs)("div",{className:"product_details",children:[Object(n.jsxs)("div",{className:"header",children:[Object(n.jsxs)(D.a,{variant:"contained",color:"primary",onClick:this.goBack.bind(this),children:[Object(n.jsx)(N.a,{})," ",Object(n.jsx)("span",{className:"textButton",children:"Back"})]}),Object(n.jsx)("h2",{children:t[0].name})]}),Object(n.jsxs)("div",{style:{width:"500px",margin:"20px auto",color:"#333"},children:[Object(n.jsx)("img",{src:"".concat("/react-shoppers-list","/").concat(t[0].imageUrl),width:"280px",height:"280px"}),Object(n.jsx)("pre",{dangerouslySetInnerHTML:{__html:t[0].description}})]})]})}}]),c}(a.Component),S=(c(80),"/react-shoppers-list");var P=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(O,{children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(u.a,{exact:!0,path:"".concat(S,"/"),component:g}),Object(n.jsx)(u.a,{path:"".concat(S,"/:catId/:id"),component:B})]})})})},L=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,122)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;c(t),n(t),a(t),r(t),s(t)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root")),L()}},[[81,1,2]]]);
//# sourceMappingURL=main.6b39fb34.chunk.js.map