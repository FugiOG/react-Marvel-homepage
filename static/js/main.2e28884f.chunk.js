(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{21:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(12),s=c.n(r),i=c(9),l=c(2),o=c(3),j=(c(21),c.p+"static/media/mjolnir.61f31e18.png"),u=c(5),b=c.n(u),m=c(7),d=function(){var e=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(o.a)(r,2),i=s[0],l=s[1];return{loading:c,request:Object(n.useCallback)(function(){var e=Object(m.a)(b.a.mark((function e(t){var c,n,r,s,i,o=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>1&&void 0!==o[1]?o[1]:"GET",n=o.length>2&&void 0!==o[2]?o[2]:null,r=o.length>3&&void 0!==o[3]?o[3]:{"Content-type":"application/json"},a(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:n,headers:r});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Couldn't fetch ".concat(t,", status: ").concat(s.status));case 10:return e.next=12,s.json();case 12:return i=e.sent,a(!1),e.abrupt("return",i);case 17:throw e.prev=17,e.t0=e.catch(4),a(!1),l(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:i,clearError:Object(n.useCallback)((function(){return l(null)}),[])}}(),t=e.loading,c=e.request,a=e.error,r=e.clearError,s="https://gateway.marvel.com:443/v1/public/",i="apikey=c65c6c4f74077c85f47223756e7b0505",l=function(){var e=Object(m.a)(b.a.mark((function e(){var t,n,a,r=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:100,n=r.length>1&&void 0!==r[1]?r[1]:8,e.next=4,c("".concat(s,"comics?orderBy=issueNumber&limit=").concat(n,"&offset=").concat(t,"&").concat(i));case 4:return a=e.sent,e.abrupt("return",a.data.results.map(h));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(m.a)(b.a.mark((function e(){var t,n,a,r=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:210,n=r.length>1&&void 0!==r[1]?r[1]:9,e.next=4,c("".concat(s,"characters?limit=").concat(n,"&offset=").concat(t,"&").concat(i));case 4:return a=e.sent,e.abrupt("return",a.data.results.map(d));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(m.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(s,"characters/").concat(t,"?").concat(i));case 2:return n=e.sent,e.abrupt("return",d(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){return{name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"description is missing",thumbnail:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),homepage:e.urls[0].url,wiki:e.urls[1].url,id:e.id,comics:e.comics.items}},h=function(e){return{id:e.id,title:e.title,description:e.description,price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available",thumbnail:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",language:e.textObjects.language||"en-us"}};return{loading:t,error:a,getAllCharacters:j,getCharacters:u,clearError:r,getAllComics:l}},h=c(0),O=function(){return Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(h.jsx)("g",{transform:"translate(80,50)",children:Object(h.jsx)("g",{transform:"rotate(0)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(h.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(h.jsx)("g",{transform:"rotate(45)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(h.jsx)("g",{transform:"translate(50,80)",children:Object(h.jsx)("g",{transform:"rotate(90)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(h.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(h.jsx)("g",{transform:"rotate(135)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(h.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(h.jsx)("g",{transform:"rotate(180)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(h.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(h.jsx)("g",{transform:"rotate(225)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(h.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(h.jsx)("g",{transform:"rotate(270)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(h.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(h.jsx)("g",{transform:"rotate(315)",children:Object(h.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(h.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(h.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},f=c.p+"static/media/error.42292aa1.gif",x=function(){return Object(h.jsx)("img",{src:f,style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},alt:""})},p=function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i=null;return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(i={objectFit:"contain"}),Object(h.jsxs)("div",{className:"randomchar__block",children:[Object(h.jsx)("img",{src:a,alt:"Random character",className:"randomchar__img",style:i}),Object(h.jsxs)("div",{className:"randomchar__info",children:[Object(h.jsx)("p",{className:"randomchar__name",children:c}),Object(h.jsx)("p",{className:"randomchar__descr",children:n}),Object(h.jsxs)("div",{className:"randomchar__btns",children:[Object(h.jsx)("a",{href:r,className:"button button__main",children:Object(h.jsx)("div",{className:"inner",children:"homepage"})}),Object(h.jsx)("a",{href:s,className:"button button__secondary",children:Object(h.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},v=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),c=t[0],a=t[1],r=d(),s=r.loading,i=r.error,l=r.getCharacters,u=r.clearError;Object(n.useEffect)((function(){m()}),[]);var b=function(e){a(e)},m=function(){u();var e=Math.floor(400*Math.random()+1011e3);l(e).then(b)},f=i?Object(h.jsx)(x,{}):null,v=s?Object(h.jsx)(O,{}):null,g=i||s?null:Object(h.jsx)(p,{char:c});return Object(h.jsxs)("div",{className:"randomchar",children:[f,v,g,Object(h.jsxs)("div",{className:"randomchar__static",children:[Object(h.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(h.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(h.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(h.jsx)("button",{onClick:m,className:"button button__main",children:Object(h.jsx)("div",{className:"inner",children:"try it"})}),Object(h.jsx)("img",{src:j,alt:"mjolnir",className:"randomchar__decoration"})]})]})},g=c(8),_=(c(24),function(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(!1),i=Object(o.a)(s,2),l=i[0],j=i[1],u=Object(n.useState)(210),b=Object(o.a)(u,2),m=b[0],f=b[1],p=Object(n.useState)(!1),v=Object(o.a)(p,2),_=v[0],y=v[1],N=Object(n.useState)(9),k=Object(o.a)(N,2),C=k[0],w=(k[1],d()),T=w.loading,S=w.error,E=w.getAllCharacters;Object(n.useEffect)((function(){A(m,C,!0)}),[]);var A=function(e,t,c){j(!c),E(e,t).then(F)},F=function(e){var t=!1;e.length<9&&(t=!0),r((function(t){return[].concat(Object(g.a)(t),Object(g.a)(e))})),j((function(e){return!1})),f((function(e){return e+C})),y((function(e){return t}))},I=Object(n.useRef)([]);var M=function(t){var c=t.map((function(t,c){var n=t.name,a=t.thumbnail,r=t.id,s=null;return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(s={objectFit:"contain"}),Object(h.jsxs)("li",{ref:function(e){return I.current[c]=e},className:"char__item",onClick:function(){e.onCharSelected(r),function(e){I.current.forEach((function(e){return e.classList.remove("char__item_selected")})),I.current[e].classList.add("char__item_selected"),I.current[e].focus()}(c)},tabIndex:0,children:[Object(h.jsx)("img",{src:a,alt:n,style:s}),Object(h.jsx)("div",{className:"char__name",children:n})]},r)}));return Object(h.jsx)("ul",{className:"char__grid",children:c})}(a),R=S?Object(h.jsx)(x,{}):null,B=T&&!l?Object(h.jsx)(O,{}):null;return Object(h.jsxs)("div",{className:"char__list",children:[R,B,M,Object(h.jsx)("button",{className:"button button__main button__long",onClick:function(){return A(m,C)},disabled:l,style:{display:_?"none":"block"},children:Object(h.jsx)("div",{className:"inner",children:"load more"})})]})}),y=(c(25),c(26),function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(h.jsxs)("div",{className:"skeleton",children:[Object(h.jsxs)("div",{className:"pulse skeleton__header",children:[Object(h.jsx)("div",{className:"pulse skeleton__circle"}),Object(h.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(h.jsx)("div",{className:"pulse skeleton__block"}),Object(h.jsx)("div",{className:"pulse skeleton__block"}),Object(h.jsx)("div",{className:"pulse skeleton__block"})]})]})}),N=function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,l=null;return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(l={objectFit:"contain"}),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"char__basics",children:[Object(h.jsx)("img",{src:a,alt:c,style:l}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"char__info-name",children:c}),Object(h.jsxs)("div",{className:"char__btns",children:[Object(h.jsx)("a",{href:r,className:"button button__main",children:Object(h.jsx)("div",{className:"inner",children:"homepage"})}),Object(h.jsx)("a",{href:s,className:"button button__secondary",children:Object(h.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(h.jsx)("div",{className:"char__descr",children:n}),Object(h.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(h.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"Comics is missing",i.map((function(e,t){if(!(t>9))return Object(h.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})},k=function(e){var t=Object(n.useState)(null),c=Object(o.a)(t,2),a=c[0],r=c[1],s=d(),i=s.loading,l=s.error,j=s.getCharacters,u=s.clearError;Object(n.useEffect)((function(){m()}),[e.charId]);var b=function(e){r(e)},m=function(){var t=e.charId;t&&(u(),j(t).then(b))},f=i||l||a?null:Object(h.jsx)(y,{}),p=i?Object(h.jsx)(O,{}):null,v=l?Object(h.jsx)(x,{}):null,g=i||l||!a?null:Object(h.jsx)(N,{char:a});return Object(h.jsxs)("div",{className:"char__info",children:[f,p,v,g]})},C=c(13),w=c(14),T=c(16),S=c(15),E=function(e){Object(T.a)(c,e);var t=Object(S.a)(c);function c(){var e;Object(C.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={error:!1},e}return Object(w.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(h.jsx)(x,{}):this.props.children}}]),c}(n.Component),A=c.p+"static/media/vision.067d4ae1.png",F=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(E,{children:Object(h.jsx)(v,{})}),Object(h.jsxs)("div",{className:"char__content",children:[Object(h.jsx)(E,{children:Object(h.jsx)(_,{onCharSelected:function(e){a(e)}})}),Object(h.jsx)(E,{children:Object(h.jsx)(k,{charId:c})})]}),Object(h.jsx)("img",{className:"bg-decoration",src:A,alt:"vision"})]})},I=(c(27),c.p+"static/media/Avengers.4065c8f9.png"),M=c.p+"static/media/Avengers_logo.9eaf2193.png",R=function(){return Object(h.jsxs)("div",{className:"app__banner",children:[Object(h.jsx)("img",{src:I,alt:"Avengers"}),Object(h.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(h.jsx)("br",{}),"Stay tuned!"]}),Object(h.jsx)("img",{src:M,alt:"Avengers logo"})]})},B=(c(28),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(o.a)(r,2),i=s[0],l=s[1],j=Object(n.useState)(210),u=Object(o.a)(j,2),b=u[0],m=u[1],f=Object(n.useState)(!1),p=Object(o.a)(f,2),v=p[0],_=p[1],y=Object(n.useState)(8),N=Object(o.a)(y,2),k=N[0],C=(N[1],d()),w=C.loading,T=C.error,S=C.getAllComics,E=C.clearError;Object(n.useEffect)((function(){F(b,k,!0)}),[]);var A=function(e){var t=e.length<8;a((function(t){return[].concat(Object(g.a)(t),Object(g.a)(e))})),l((function(e){return!1})),m((function(e){return e+k})),_((function(e){return t}))},F=function(e,t,c){E(),l(!c),S(e,t).then(A)};var I=function(e){var t=e.map((function(e){var t=e.id,c=e.title,n=e.price,a=e.thumbnail;return Object(h.jsx)("li",{tabIndex:0,className:"comics__item",children:Object(h.jsxs)("a",{href:"#",children:[Object(h.jsx)("img",{src:a,alt:c,className:"comics__item-img"}),Object(h.jsx)("div",{className:"comics__item-name",children:c}),Object(h.jsx)("div",{className:"comics__item-price",children:n})]})},t)}));return Object(h.jsx)("ul",{className:"comics__grid",children:t})}(c),M=T?Object(h.jsx)(x,{}):null,R=w&&!i?Object(h.jsx)(O,{}):null;return Object(h.jsxs)("div",{className:"comics__list",children:[I,M,R,Object(h.jsx)("button",{className:"button button__main button__long",disabled:i,style:{display:v?"none":"block"},onClick:function(){return F(b,k)},children:Object(h.jsx)("div",{className:"inner",children:"load more"})})]})}),q=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(R,{}),Object(h.jsx)(E,{children:Object(h.jsx)(B,{})})]})},D=(c(29),function(){return Object(h.jsxs)("header",{className:"app__header",children:[Object(h.jsx)("h1",{className:"app__title",children:Object(h.jsxs)(i.b,{to:"/",children:[Object(h.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(h.jsx)("nav",{className:"app__menu",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(i.c,{end:!0,style:function(e){return{color:e.isActive?"#9F0013":"#232222"}},to:"/",children:"Characters"})}),"/",Object(h.jsx)("li",{children:Object(h.jsx)(i.c,{end:!0,style:function(e){return{color:e.isActive?"#9F0013":"#232222"}},to:"/comics",children:"Comics"})})]})})]})}),J=function(){return Object(h.jsx)(i.a,{children:Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(D,{}),Object(h.jsx)("main",{children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/",element:Object(h.jsx)(F,{})}),Object(h.jsx)(l.a,{path:"/comics",element:Object(h.jsx)(q,{})})]})})]})})};c(30);s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(J,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.2e28884f.chunk.js.map