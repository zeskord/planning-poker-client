(this["webpackJsonpplanning-poker-client"]=this["webpackJsonpplanning-poker-client"]||[]).push([[0],{15:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),c=a(10),s=a.n(c),i=(a(15),a(5)),o=a(2),l=a.n(o),u=a(1),d=a(4),p=a(0),m=function(e){var t=void 0,a="coffee"===e.mark||"infinity"===e.mark;!e.markVisible&e.itsMe&void 0!==e.mark?t=a?Object(p.jsx)("img",{src:e.mark+"-light.svg",style:{width:"1.5rem",height:"100%"},alt:e.mark}):Object(p.jsx)("span",{className:"badge rounded-pill bg-secondary mt-1",children:e.mark}):e.markVisible&&(t=a?Object(p.jsx)("img",{src:e.mark+"-dark.svg",style:{width:"1.5rem",height:"100%"},alt:e.mark}):Object(p.jsx)("span",{className:"badge rounded-pill bg-primary mt-1",children:e.mark}));var n="list-group-item justify-content-between align-items-center"+(void 0!==e.mark?" list-group-item-success":"");return Object(p.jsx)("li",{className:n,children:Object(p.jsxs)("div",{className:"d-flex justify-content-between my-1",children:[e.userName,void 0!==t&&t]})},e.id)},b=function(e){return Object(p.jsx)("ul",{className:"list-group my-2",children:e.users.map((function(t){return Object(p.jsx)(m,{id:t.id,userName:t.name,mark:t.mark,markVisible:e.marksVisible,itsMe:e.currentUserName===t.name},t.id)}))})},j=function(e){return Object(p.jsx)("li",{className:"list-group-item justify-content-between align-items-center py-1",children:Object(p.jsx)("div",{className:"d-flex justify-content-between",children:e.userName})},e.id)},h=function(e){return Object(p.jsx)("ul",{class:"list-group",style:{fontSize:".8rem"},children:e.spectators.map((function(e){return Object(p.jsx)(j,{id:e.id,userName:e.name},e.id)}))})},f="https://109.196.164.69:443",O=function(e){function t(){return(t=Object(d.a)(l.a.mark((function t(a){var n,r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(f,"/api/logOut"),r=localStorage.getItem("user"),t.next=4,fetch(n,{method:"POST",headers:{"user-data":r}});case 4:c={userName:void 0,isAuthenticated:!1},e.setAuthState(c),localStorage.removeItem("user");case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function a(){return(a=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(f,"/api/fullReset"),e.next=3,fetch(a,{method:"POST"});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)("a",{className:"navbar-brand",href:"#",children:e.userName}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(p.jsxs)("div",{className:"navbar-nav",children:[Object(p.jsx)("a",{className:"nav-link",href:"#",onClick:function(e){return t.apply(this,arguments)},children:"\u0420\u0430\u0437\u043b\u043e\u0433\u0438\u043d\u0438\u0442\u044c\u0441\u044f"}),Object(p.jsx)("a",{className:"nav-link",href:"#",onClick:function(e){return a.apply(this,arguments)},children:"\u041f\u043e\u043b\u043d\u044b\u0439 \u0441\u0431\u0440\u043e\u0441"})]})})]})})},v=function(e){function t(){return(t=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.modalOnSelect(e.title);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(p.jsx)("div",{className:"card my-2 text-center",style:{width:"18rem"},onClick:function(){return t.apply(this,arguments)},children:Object(p.jsx)("div",{className:"card-body",children:Object(p.jsx)("h5",{className:"card-title align-middle","data-bs-toggle":"modal","data-bs-target":"#myModal",style:{fontSize:"2rem"},children:e.title})})})},x=function(e){function t(){return(t=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.modalOnSelect(e.title);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(p.jsx)("div",{className:"card my-2 text-center",style:{width:"18rem",height:"100%"},onClick:function(){return t.apply(this,arguments)},children:Object(p.jsx)("img",{src:e.img,className:"card-img my-2",style:{width:"18rem",height:"4rem"},alt:"...","data-bs-toggle":"modal","data-bs-target":"#myModal"})})},g=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)(x,{variant:"primary",title:"coffee",img:"coffee-dark.svg",modalOnSelect:e.modalOnSelect},"coffee"),["0","0.5","1","2","3","5","8","13","21","34","55","89"].map((function(t){return Object(p.jsx)(v,{variant:"primary",title:t,modalOnSelect:e.modalOnSelect},t)})),Object(p.jsx)(x,{variant:"primary",title:"infinity",img:"infinity-dark.svg",modalOnSelect:e.modalOnSelect},"infinity")]})},y=(a(19),a.p+"static/media/eye.5ad2f0fa.svg"),N=a.p+"static/media/eye-slash.3ddd08de.svg",k=function(e){var t=Object(n.useRef)(void 0),a=Object(n.useState)({user:{}}),r=Object(i.a)(a,2),c=r[0],s=r[1],o=Object(n.useState)(void 0),m=Object(i.a)(o,2),j=m[0],v=m[1],x=Object(n.useState)(void 0),k=Object(i.a)(x,2),S=k[0],w=k[1],C=Object(n.useState)(!1),I=Object(i.a)(C,2),T=I[0],A=I[1],M=Object(n.useState)(!1),P=Object(i.a)(M,2),J=P[0],V=P[1],U=Object(n.useState)({users:[],spectators:[],userIDs:[],spectatorIDs:[],marksVisible:!1}),E=Object(i.a)(U,2),F=E[0],D=E[1],L=Object(n.useState)({list:[]}),z=Object(i.a)(L,2),B=z[0],K=z[1];function R(){return(R=Object(d.a)(l.a.mark((function e(){var a,n,r,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="".concat(f,"/api/getUserData"),n=localStorage.getItem("user"),e.next=5,fetch(a,{headers:{"Content-Type":"application/json",Accept:"application/json","user-data":n}});case 5:return r=e.sent,e.next=8,r.json();case 8:return c=e.sent,i={name:c.user,isSpectator:c.isSpectator},s((function(e){return Object(u.a)(Object(u.a)({},e),{},{user:i})})),e.next=13,H();case 13:t.current=setInterval(H,2e3),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430:",e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function H(){return W.apply(this,arguments)}function W(){return(W=Object(d.a)(l.a.mark((function e(){var t,a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(f,"/api/tick"),a=localStorage.getItem("user"),e.next=5,fetch(t,{headers:{"Content-Type":"application/json;charset=utf-8","user-data":a}});case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,D((function(e){return Object(u.a)(Object(u.a)({},e),{},{users:r.users})})),K((function(e){return Object(u.a)(Object(u.a)({},e),{},{list:r.spectators})})),V(r.marksVisible),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430:",e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function q(){return G.apply(this,arguments)}function G(){return(G=Object(d.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(f,"/api/sendMark"),a={user:c.user.name,mark:S},e.next=5,fetch(t,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8","user-data":JSON.stringify(c.user)},body:JSON.stringify(a)});case 5:return n=e.sent,e.next=8,n.text();case 8:return e.next=10,H();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function Q(){return(Q=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:13===t.keyCode&&q();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(){return(X=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="".concat(f,"/api/showMarks"),e.next=4,fetch(a,{method:"POST"});case 4:H(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function Y(){return(Y=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="".concat(f,"/api/clearMarks"),e.next=4,fetch(a,{method:"POST"});case 4:H(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function Z(){return(Z=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{A(!0)}catch(t){console.error("\u041e\u0448\u0438\u0431\u043a\u0430:",t)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(){return($=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A(!1),w(a=t),v(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(S);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){return function(){R.apply(this,arguments)}(),function(){clearInterval(t.current)}}),[e]),Object(n.useEffect)((function(){void 0!==j&&q()}),[j]),Object(n.useEffect)((function(){}),[S]),Object(n.useEffect)((function(){var e=F.users.find((function(e){return e.name===c.user.name}));void 0!==e&&void 0===e.mark&&void 0!==j&&v(void 0)}),[F]);return Object(p.jsxs)("div",{bg:"light",children:[Object(p.jsx)(O,{userName:c.user.name,setAuthState:e.setAuthState}),Object(p.jsxs)("div",{className:"container-sm",children:[Object(p.jsxs)("div",{className:"input-group input-group-lg my-2",children:[Object(p.jsx)("span",{className:"input-group-text",children:"\u041e\u0446\u0435\u043d\u043a\u0430"}),Object(p.jsx)("input",{type:"number",className:"form-control",onChange:function(e){var t=e.target.value;w(t)},onKeyUp:function(e){return Q.apply(this,arguments)},value:S||""}),Object(p.jsx)("button",{className:"btn btn-secondary",type:"button","data-bs-toggle":"modal","data-bs-target":"#myModal",onClick:function(e){return Z.apply(this,arguments)},children:". . ."})]}),Object(p.jsx)("button",{type:"button",className:"btn btn-primary btn-lg my-2",onClick:function(){return _.apply(this,arguments)},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"}),Object(p.jsx)(b,{users:F.users,marksVisible:J,currentUserName:c.user.name}),Object(p.jsx)("img",{className:"my-2",src:J?y:N}),Object(p.jsx)("div",{className:"pt-2",children:Object(p.jsx)("button",{type:"button",className:"btn btn-success btn-lg",onClick:function(e){return X.apply(this,arguments)},children:"\u0412\u0441\u043a\u0440\u044b\u0432\u0430\u0435\u043c\u0441\u044f"})}),Object(p.jsx)("div",{className:"my-2",children:Object(p.jsx)("button",{type:"button",className:"btn btn-warning btn-lg my-2",onClick:function(e){return Y.apply(this,arguments)},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043e\u0446\u0435\u043d\u043a\u0438"})}),0!==B.list.length&&Object(p.jsxs)("div",{className:"card my-4",children:[Object(p.jsx)("div",{className:"card-header",children:"\u0417\u0440\u0438\u0442\u0435\u043b\u0438"}),Object(p.jsx)("div",{className:"card-body",children:Object(p.jsx)(h,{className:"my-2 px-2",spectators:B.list})})]})]}),Object(p.jsx)("div",{className:"modal fade",id:"myModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","data-bs-backdrop":"static","data-bs-keyboard":"false","aria-hidden":!T,children:Object(p.jsx)("div",{className:"modal-dialog",children:Object(p.jsxs)("div",{className:"modal-content",children:[Object(p.jsxs)("div",{className:"modal-header",children:[Object(p.jsx)("h5",{className:"modal-title",children:"\u0412\u044b\u0431\u043e\u0440 \u043e\u0446\u0435\u043d\u043a\u0438"}),Object(p.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]}),Object(p.jsx)("div",{className:"modal-body",children:Object(p.jsx)(g,{modalOnSelect:function(e){return $.apply(this,arguments)}})}),Object(p.jsx)("div",{className:"modal-footer",children:Object(p.jsx)("button",{type:"button",className:"btn btn-secondary btn-lg my-2","data-bs-dismiss":"modal",onClick:function(){return A(!1)},children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})})]})})})]})},S=function(e){var t="",a=!1,r=Object(n.useState)({userName:"",isSpectator:!1}),c=Object(i.a)(r,2),s=c[0],o=c[1];function m(){return b.apply(this,arguments)}function b(){return(b=Object(d.a)(l.a.mark((function t(){var a,n,r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={userName:s.userName,isSpectator:s.isSpectator},t.next=3,fetch("".concat(f,"/api/login"),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(a)});case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,c={userName:r.name,isSpectator:r.isSpectator,isAuthenticated:!0},localStorage.setItem("user",JSON.stringify({name:c.userName,isSpectator:c.isSpectator})),e.setAuthState(c);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(p.jsxs)("div",{className:"container-sm",children:[Object(p.jsx)("div",{className:"input-group mb-3",children:Object(p.jsx)("input",{className:"form-control form-control-lg",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f","aria-label":"Username","aria-describedby":"basic-addon1",type:"text",id:"userName",value:s.userName,onChange:function(e){t=e.target.value,o((function(e){return Object(u.a)(Object(u.a)({},e),{},{userName:t})}))},onKeyUp:function(e){13===e.keyCode&&m()}})}),Object(p.jsx)("div",{className:"input-group mb-3",children:Object(p.jsxs)("div",{className:"form-check",children:[Object(p.jsx)("input",{className:"form-check-input",type:"checkbox",id:"isSpectator",value:s.isSpectator,onChange:function(e){a=e.target.value,o((function(e){return Object(u.a)(Object(u.a)({},e),{},{isSpectator:a})}))}}),Object(p.jsx)("label",{className:"form-check-label",htmlFor:"isSpectator",children:"\u042f \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c"})]})}),Object(p.jsx)("div",{className:"input-group mb-3",children:Object(p.jsx)("button",{className:"btn btn-primary",onClick:m,children:"\u0412\u043e\u0439\u0442\u0438"})})]})},w=(a(18),function(e){var t=void 0,a=localStorage.getItem("user");null!==a&&(t=JSON.parse(a));var r=void 0!==t,c=Object(n.useState)({isAuthenticated:r,isSpectator:r?t.isSpectator:void 0,userName:r?t.name:void 0}),s=Object(i.a)(c,2),o=s[0],l=s[1];return Object(p.jsx)("div",{className:"bg-light",style:{minWidth:"100vw",minHeight:"100vh"},children:o.isAuthenticated?Object(p.jsx)(k,{setAuthState:l}):Object(p.jsx)(S,{setAuthState:l})})}),C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root")),C()}},[[20,1,2]]]);
//# sourceMappingURL=main.500b3921.chunk.js.map