"use strict";(self.webpackChunklines=self.webpackChunklines||[]).push([[179],{338:function(e,t,n){var r=n(294),l=n(935),i=n(704),o=n(403),a=n(500),c=n.n(a),s=n(159),d=n(133);var u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Object.keys([...Array(e)]).map((e=>parseInt(e)))};var p=e=>{const t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}return t};var f=e=>t=>{const n=t.map((()=>0));for(let r=0;r<e;r+=1)n[t[r]]=Math.floor(3*Math.random()+1);return n};var g=e=>t=>{let n=parseInt((t.length*e/100).toFixed(),10);return f(n)(t)};var m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;return(0,d.compose)(g(t),p,u)(e)};const h={1:{percent:10,chain:2,increase:3},2:{percent:20,chain:3,increase:4},3:{percent:30,chain:4,increase:5}};var b={userLevel:"1",gameFieldPercentFilled:0,gameFieldData:m(81,0),highlightedCells:void 0,score:0,selectedCell:void 0,isLoading:!1};const y=e=>e.map(((e,t)=>e?-1:t)).filter((e=>e>-1));var v=(e,t)=>{const n=h[t].increase;return(0,d.compose)((r=n,e=>e.slice(0,r)),p,y)(e);var r};var O=e=>t=>{const n=((e,t)=>e&&e.filter((e=>e.indexOf(t)>-1))[0])(t[0],e),r=((e,t)=>e&&e.filter((e=>e.indexOf(t)>-1))[0])(t[1],e),l=[];return n&&l.push(n),r&&l.push(r),l};var E=e=>e[0]+9*e[1];const j=(e,t,n,r,l)=>{const i=[],o={1:[],2:[],3:[]},a=h[n].chain;for(let n=0;n<9;n+=1){const c=E("H"===e?[n,t]:[t,n]),s=r[c];r[c]&&s===l?o[l].push(c):(l&&o[l].length>a&&i.push([...o[l]]),o[l]=[])}return o[l].length>a&&i.push([...o[l]]),i};var w=e=>{const t=Math.min(Math.max(Math.ceil((e+1)/9)-1,0),8);return[Math.min(Math.max(e-9*t,0),8),t]};var P=(e,t)=>n=>{const r=w(e),l=((e,t,n,r)=>j("V",e,t,n,r))(r[0],t,n,n[e]),i=((e,t,n,r)=>j("H",e,t,n,r))(r[1],t,n,n[e]),o=[];return l.length&&o.push(l),i.length&&o.push(i),o};var x=(e,t,n)=>(0,d.compose)(O(e),P(e,t))(n);var z=()=>"".concat(1e7,-1e3).concat(-4e3).concat(-8e3).concat(-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))),S=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const r=[...n];return null!=e&&e>-1&&e<n.length&&(r[e]=t),r}},C=(e,t,n)=>null==t?e:(0,d.compose)(S(n,e[t]),S(t,0))(e),F=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise((t=>setTimeout(t,e)))};const k=e=>e.reduce(((e,t)=>t.reduce(((e,t)=>(e[t]="",e)),e)),{}),D=e=>{const t={};return e.forEach((e=>{t[e]=""})),t},R=(e,t)=>{const n=[...e];return Object.keys(t).forEach((e=>{n[Number(e)]=Math.floor(3*Math.random()+1)})),n},A=(e,t,n)=>{const r=(e=>{const t=Array.isArray(e)&&Math.sqrt(e.length);if(!t)return null;const n=(e,n)=>e>=0&&e<t&&n>=0&&n<t;return{SIZE:t,validatePoints:(e,t)=>n(t[0],t[1])&&n(e[0],e[1]),validateOutbounds:n,createGrid:()=>{const n=[];for(let r=0;r<t;r+=1){const r=t*n.length,l=r+t;n.push(e.slice(r,l).map((e=>e?-1:-2)))}return n}}})(e);if(!r||null==t||null==n)return null;const l=r.createGrid(),i=Array.isArray(t)?t[0]:w(t)[1],o=Array.isArray(t)?t[1]:w(t)[0],a=Array.isArray(n)?n[0]:w(n)[1],c=Array.isArray(n)?n[1]:w(n)[0],s=[1,0,-1,0],d=[0,1,0,-1],u=Array(r.SIZE**2),p=Array(r.SIZE**2);let f,g;if(!r.validatePoints([i,o],[a,c]))return null;if(-1===l[a][c])return null;let m=0;l[i][o]=0;do{g=!0;for(let e=0;e<r.SIZE;e+=1)for(let t=0;t<r.SIZE;t+=1)if(l[e][t]===m)for(let n=0;n<4;n+=1){const i=e+s[n],o=t+d[n];r.validateOutbounds(i,o)&&-2===l[i][o]&&(g=!1,l[i][o]=m+1)}m+=1}while(!g&&-2===l[a][c]);if(-2===l[a][c])return null;f=l[a][c];let h=a,b=c;for(m=f;m>0;){u[m]=h,p[m]=b,m--;for(let e=0;e<4;++e){const t=b+d[e],n=h+s[e];if(r.validateOutbounds(n,t)&&l[n][t]==m){h+=s[e],b+=d[e];break}}}return u[0]=i,p[0]=o,u.reduce(((e,t,n)=>(e.push([p[n],t]),e)),[])};function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){M(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const I=(0,o.oM)({name:"app",initialState:b,reducers:{rehydrate:e=>e,restoreGame:(e,t)=>t.payload,setUserLevel:(e,t)=>{let{payload:n}=t;e.userLevel=n,e.selectedCell=void 0,e.highlightedCells=void 0,e.score=0,e.gameFieldPercentFilled=h[n].percent,e.gameFieldData=m(81,e.gameFieldPercentFilled)},setSelectedCell:(e,t)=>{let{payload:n}=t;e.selectedCell=n},startGameSteps:(e,t)=>{let{payload:n}=t;return e},updateGame:(e,t)=>L(L({},e),t.payload),initApp:e=>{e.gameFieldPercentFilled=0,e.gameFieldData=m(81,0)},resetApp:e=>{const t=10*Number(e.userLevel);e.selectedCell=void 0,e.highlightedCells=void 0,e.score=0,e.gameFieldPercentFilled=t,e.gameFieldData=m(81,t)},waitOn:e=>{e.isLoading=!0},waitOff:e=>{e.isLoading=!1}}}),{actions:G,reducer:N}=I,U={userProfile:void 0},B=(0,o.oM)({name:"auth",initialState:U,reducers:{rehydrate:e=>e,setUser:(e,t)=>{let{payload:n}=t;return e},login:(e,t)=>{let{payload:n}=t;e.userProfile=n},logout:e=>{e.userProfile=void 0}}}),{actions:J,reducer:T}=B,Y={app:N,auth:T};var H=n(517);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const $=e=>new Promise(((t,n)=>{setTimeout((()=>{try{if(!e)throw"Нет данных о пользователе!";let n=W(W({},e),{},{token:z()});localStorage.setItem(fe,JSON.stringify(n)),t(n)}catch(e){n(e||"Ошибка получения данных!")}}),500)})),K=()=>new Promise((e=>{setTimeout((()=>{localStorage.removeItem(fe),e(!0)}),500)}));function*Q(e){let{payload:t}=e;yield(0,H.gz)(G.waitOn());let n=yield(0,H.RE)($,t);n&&(yield(0,H.gz)(J.login(n)),yield(0,H.gz)(G.resetApp())),yield(0,H.gz)(G.waitOff())}function*X(){yield(0,H.gz)(G.waitOn()),yield(0,H.RE)(K),yield(0,H.gz)(G.initApp()),yield(0,H.gz)(G.waitOff())}function*_(){const e=yield(0,H.RE)([localStorage,localStorage.getItem],"lines:userProfile");if(e){const t=yield(0,H.RE)([JSON,JSON.parse],e);yield(0,H.gz)(J.login(t))}}function*ee(){yield(0,H.ib)(J.setUser.type,Q),yield(0,H.ib)(J.logout.type,X),yield(0,H.ib)(J.rehydrate.type,_)}var te=(e,t)=>{const n=[...e];return t.length>0&&t.forEach((e=>e&&e.forEach((e=>{n[e]=0})))),n};function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){le(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function*ie(){yield(0,H.gz)(G.waitOn());const e=yield(0,H.RE)([localStorage,localStorage.getItem],pe);if(e){const t=yield(0,H.RE)([JSON,JSON.parse],e);yield(0,H.gz)(G.restoreGame(t))}yield(0,H.gz)(G.waitOff())}const oe=e=>e.app;function*ae(){const e=yield(0,H.Ys)(oe);yield(0,H.RE)([localStorage,localStorage.setItem],pe,JSON.stringify(e))}function*ce(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{gameFieldData:n,selectedCell:r}=yield(0,H.Ys)(oe);let l=yield(0,H.RE)(C,n,r,e);yield(0,H.gz)(G.updateGame(re({gameFieldData:l,selectedCell:e},t)))}function*se(e,t,n){const{gameFieldData:r}=yield(0,H.Ys)(oe),l=Number(yield(0,H.RE)(E,e)),i=Number(yield(0,H.RE)(E,t)),o=yield(0,H.RE)(C,r,l,i),a={[i]:""};yield(0,H.gz)(G.updateGame({gameFieldData:o,highlightedCells:a})),yield(0,H.RE)(F,n)}function*de(e){let{payload:t}=e;const{gameFieldData:n,selectedCell:r,userLevel:l}=yield(0,H.Ys)(oe);if(null!=r&&!n[t]){const e=yield(0,H.RE)(A,n,r,t);let i;if(!e)return void(yield*function*(e,t,n){yield*ce(t,{highlightedCells:{[t]:"#00000070"}}),yield(0,H.RE)(F,n),yield*ce(e,{highlightedCells:void 0})}(r,t,250));yield*function*(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;yield(0,H.gz)(G.updateGame({selectedCell:void 0}));for(let e=1;e<t.length;e+=1)yield*se(t[e-1],t[e],100);const r={[e]:""};yield(0,H.gz)(G.updateGame({highlightedCells:r})),yield(0,H.RE)(F,n)}(t,e,250),i=yield(0,H.RE)(C,n,r,t);const o=yield(0,H.RE)(x,Number(t),l.toString(),i);Array.isArray(o)&&o.length?(yield*function*(e,t){const n=yield(0,H.RE)(k,e);yield(0,H.gz)(G.updateGame({highlightedCells:n})),yield(0,H.RE)(F,t)}(o,100),yield*function*(e){const t=yield(0,H.Ys)(oe),{gameFieldData:n,score:r,highlightedCells:l}=t,i=yield(0,H.RE)(te,n,e),o=r+(l?Object.keys(l).length:0);yield(0,H.gz)(G.updateGame({gameFieldData:i,highlightedCells:void 0,score:o}))}(o)):(yield*function*(e){const{gameFieldData:t,userLevel:n}=yield(0,H.Ys)(oe),r=yield(0,H.RE)(v,t,n),l=yield(0,H.RE)(D,r),i=yield(0,H.RE)(R,t,l);yield(0,H.gz)(G.updateGame({gameFieldData:i,highlightedCells:l})),yield(0,H.RE)(F,e)}(250),yield*function*(){yield(0,H.gz)(G.updateGame({highlightedCells:void 0}))}()),yield*ae()}}function*ue(){yield(0,H.ib)(G.rehydrate.type,ie),yield(0,H.ib)(G.setUserLevel.type,ae),yield(0,H.ib)(G.startGameSteps.type,de),yield(0,H.ib)(G.resetApp.type,ae)}const pe="lines:app",fe="lines:userProfile",ge=(0,s.ZP)(),me=(0,o.xC)({reducer:Y,middleware:e=>e().prepend().concat(ge).concat(c())});ge.run((function*(){yield(0,H.$6)([ee(),ue()])})),me.dispatch(J.rehydrate());var he,be=n(70),ye=n(821);var ve,Oe,Ee,je=be.Z.div(he||(ve=["\n  background-color: #000;\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n"],Oe||(Oe=ve.slice(0)),he=Object.freeze(Object.defineProperties(ve,{raw:{value:Object.freeze(Oe)}})))),we=n(409),Pe=n(740),xe=n(54);function ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ze(Object(n),!0).forEach((function(t){Ce(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ze(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Fe=be.Z.div(Ee||(Ee=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  font-size: 16px;\n\n  label {\n    margin-right: 5px;\n  }\n\n  button {\n    margin: 5px;\n  }\n\n  input {\n    margin-right: 30px;\n    width: 100px;\n  }\n\n  form {\n    margin: 3vh 0;\n  }\n"])));var ke,De=()=>{const e=(0,i.I0)(),{setUser:t}=J,[n,l]=(0,r.useState)({login:"",password:""}),o=e=>{const{id:t,value:r}=e.currentTarget;l(Se(Se({},n),{},{[t]:r}))};return r.createElement(Fe,{role:"authForm"},r.createElement(xe.J9,{initialValues:Se({},n),onSubmit:()=>{e(t(n))}},r.createElement(xe.l0,null,r.createElement("label",{htmlFor:"login"},"Имя"),r.createElement(xe.gN,{role:"login",id:"login",name:"login",placeholder:"Введите логин",value:n.login,onChange:o}),r.createElement("label",{htmlFor:"password"},"Пароль"),r.createElement(xe.gN,{role:"password",id:"password",name:"password",placeholder:"Введите пароль",value:n.password,onChange:o}),r.createElement("button",{role:"buttonLogin",disabled:!n.login||!n.password,type:"submit"},"Войти"))))};const Re=be.Z.button(ke||(ke=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  height: 30px;\n  margin: auto 20px;\n"])));var Ae,Ze=e=>{let{title:t="Button",onClick:n,role:l="button"}=e;return r.createElement(Re,{role:l,onClick:n},t)};const Le=[{id:"1",name:"Падаван"},{id:"2",name:"Джедай"},{id:"3",name:"Член Совета Силы"}],Me=be.Z.div(Ae||(Ae=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n\n  select {\n    height: 30px;\n    margin: auto 5px;\n  }\n\n  p {\n    margin: auto;\n  }\n"])));var Ie=e=>{let{onSelect:t,selectedLevel:n}=e;return r.createElement(Me,null,r.createElement("p",null,"Уровень"),r.createElement("select",{value:n,role:"select",name:"select",onChange:t},Le.map((e=>r.createElement("option",{key:e.id,role:"option",value:e.id},e.name)))))};const Ge=()=>{const{userLevel:e}=(0,i.v9)((e=>{let{app:t}=e;return t})),t=(0,i.I0)();(0,r.useEffect)((()=>{t(G.rehydrate())}),[]);return r.createElement(je,{role:"userForm"},r.createElement(Ze,{role:"buttonReset",onClick:()=>{t(G.resetApp())},title:"Сброс"}),r.createElement(Ie,{onSelect:e=>{const{value:n}=e.currentTarget;t(G.setUserLevel(n))},selectedLevel:e}),r.createElement(Ze,{role:"buttonLogout",onClick:()=>{t(J.logout())},title:"Выйти"}))};var Ne,Ue=(0,r.memo)(Ge);const Be=be.Z.p(Ne||(Ne=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  font-size: 20px;\n  line-height: 30px;\n  margin-right: 20px;\n"])));var Je,Te,Ye,He=e=>{let{login:t=""}=e;return t?r.createElement(Be,null,"Игрок: ".concat(t)):r.createElement(Be,null,"Lines")},Ve=n(917);function We(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const qe=be.Z.div(Je||(Je=We(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),$e=(0,Ve.F4)(Te||(Te=We(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),Ke=(0,be.Z)(qe)(Ye||(Ye=We(["\n  background: rgba(0, 0, 0, 0.3);\n\n  article {\n    display: inline-block;\n    width: 64px;\n    height: 64px;\n\n    div {\n      box-sizing: border-box;\n      display: block;\n      position: absolute;\n      width: 51px;\n      height: 51px;\n      margin: 6px;\n      border: 4px solid #0055a6;\n      border-radius: 50%;\n      animation: "," 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n      border-color: #0055a6 transparent transparent transparent;\n    }\n  }\n"])),$e),Qe=()=>{const[e,t]=(0,r.useState)(null);return(0,r.useEffect)((()=>{const e=document.getElementById("loading");t(e)}),[]),e&&(0,l.createPortal)(r.createElement(Ke,{role:"loading"},r.createElement("article",null,r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))),e)};var Xe,_e=(0,r.memo)(Qe);const et=be.Z.div(Xe||(Xe=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n"])));var tt=e=>{let{login:t=""}=e;const{isLoading:n}=(0,i.v9)((e=>{let{app:t}=e;return t}));let l=(0,Pe.s0)();return(0,r.useEffect)((()=>{t&&l("/",{replace:!0})}),[t]),r.createElement(et,null,r.createElement(He,{login:t}),r.createElement(Pe.j3,null),n&&r.createElement(_e,null))};var nt=e=>{let{children:t,login:n}=e,l=(0,Pe.TH)();return n?t:r.createElement(Pe.Fg,{to:"/auth",state:{from:l},replace:!0})};var rt=()=>{const{userProfile:e}=(0,i.v9)((e=>{let{auth:t}=e;return t}));return r.createElement(we.UT,null,r.createElement(Pe.Z5,null,r.createElement(Pe.AW,{element:r.createElement(tt,{login:null==e?void 0:e.login})},r.createElement(Pe.AW,{path:"/auth",element:r.createElement(De,null)}),r.createElement(Pe.AW,{path:"/",element:r.createElement(nt,{login:null==e?void 0:e.login},r.createElement(Ue,null))}))))};const lt=()=>r.createElement(je,{role:"topPanel"},r.createElement(rt,null));var it,ot,at=(0,r.memo)(lt);function ct(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const st=be.Z.div(it||(it=ct(["\n  opacity: ",";\n"])),(e=>{let{active:t}=e;return t?1:.3})),dt=be.Z.p(ot||(ot=ct(["\n  margin: auto 20px;\n"]))),ut=()=>{const{gameFieldData:e,score:t=0}=(0,i.v9)((e=>{let{app:t}=e;return t})),n=(0,i.v9)((e=>{let{auth:t}=e;return!!t.userProfile}));return r.createElement(st,{active:n},r.createElement(je,{role:"bottomPanel"},r.createElement(dt,{role:"messageResult"},"Результат: ".concat(t)),r.createElement(dt,{role:"messagePercentFilled"},"Процент заполнения: ".concat((e.filter((e=>!!e)).length/e.length*100).toFixed(2)))))};var pt=(0,r.memo)(ut);var ft,gt,mt;function ht(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const bt=(0,Ve.F4)(ft||(ft=ht(["\n  from, 20%, 53%, 80%, to {\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    transform: translate3d(0, -15px, 0);\n  }\n\n  70% {\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, -5px,0);\n  }\n"]))),yt={1:"#ff0000",2:"#ffff00",3:"#00ff00"},vt=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"".concat(yt[e]).concat(t||"")},Ot=be.Z.div(gt||(gt=ht(["\n  display: block;\n  width: ","px;\n  height: ","px;\n  text-align: center;\n  border-top: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n  border-right: ","\n  border-bottom: ","\n  float: left;\n  ","\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-out;\n  background: #555;\n  background: #d1d1d1;\n  border: 0.6vh solid transparent;\n  border-color: white #9e9e9e #9e9e9e white;  \n"])),(e=>{let{isRight:t}=e;return 50-(t?2:1)}),(e=>{let{isBottom:t}=e;return 50-(t?2:1)}),(e=>{let{isRight:t}=e;return"1px solid ".concat(t?"#ddd":"",";")}),(e=>{let{isBottom:t}=e;return"1px solid ".concat(t?"#ddd":"",";")}),(e=>{let{isLeft:t}=e;return t?"clear: both;":""})),Et=be.Z.div(mt||(mt=ht(["\n  cursor: pointer;\n  background: #ffff00;\n  border-radius: 50%;\n  background: ",";\n  border-radius: 50%;\n  width: 25px;\n  height: 25px;\n  margin: 10px;\n  border: 0.2vh solid transparent;\n  border-color: ",";\n\n  animation: "," 1s ease infinite;\n\n  ","\n"])),(e=>{let{selected:t,highlighted:n,filled:r}=e;return n||(t?vt(r):vt(r,"a0"))}),(e=>{let{selected:t}=e;return t?"#555":"#9e9e9e"}),(e=>{let{selected:t}=e;return t?bt:""}),(e=>{let{highlighted:t,filled:n}=e;return t?"":":hover {background: ".concat(vt(n),";}")}));var jt,wt,Pt=e=>{let{num:t,filled:n=0,isSelected:l=!1,isLeft:o=!0,isRight:a=!0,highlighted:c=""}=e;const s=(0,i.I0)();return r.createElement(Ot,{role:"cellContainer-".concat(t),isRight:a,isLeft:o,onClick:e=>{e.stopPropagation(),l||c||s(G.startGameSteps(t))}},n>0&&r.createElement(Et,{role:"cellContent-".concat(t),selected:l,onClick:e=>{e.stopPropagation(),c||s(G.setSelectedCell(l?void 0:t))},highlighted:c,filled:n}))};function xt(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const zt=be.Z.section(jt||(jt=xt(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: fit-content;\n  width: fit-content;\n  opacity: ",";\n"])),(e=>{let{active:t}=e;return t?1:.3})),St=be.Z.p(wt||(wt=xt(["\n  height: 80vh;\n  position: relative;\n  text-align: center;\n"])));var Ct,Ft=()=>{const e=(0,i.v9)((e=>{let{auth:t}=e;return!!t.userProfile})),{gameFieldData:t,selectedCell:n,highlightedCells:l={}}=(0,i.v9)((e=>{let{app:t}=e;return t})),o=Math.floor(t.length/9)-1;return t.length?r.createElement(zt,{role:"cellsGrid",active:e},t.map(((e,t)=>{const i=Math.floor(t/9),a=t%9,c=8===a,s=i===o,d=0===a;return r.createElement(Pt,{key:"".concat(i,"-").concat(a),num:t,filled:e,isSelected:n===t,isLeft:d,isRight:c,isBottom:s,highlighted:l[t]})})),r.createElement("div",{style:{clear:"both"}})):r.createElement(St,{role:"noDataMessage"},"Нет данных!")};const kt=be.Z.div(Ct||(Ct=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  height: 80vh;\n  position: relative;\n"])));var Dt,Rt,At=()=>r.createElement(kt,{role:"gamePanel"},r.createElement(Ft,null));function Zt(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const Lt=be.Z.div(Dt||(Dt=Zt(["\n  overflow: hidden;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',\n    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n"]))),Mt=(0,ye.iv)(Rt||(Rt=Zt(["\n  body {\n    background: #282c34;\n    color: white;\n    margin: 0;\n    padding: 0;\n    min-height: '100vh';\n    max-width: '100vw';\n  }\n"])));var It=()=>r.createElement(Lt,{role:"rootApp"},r.createElement(ye.xB,{styles:Mt}),r.createElement(at,null),r.createElement(At,null),r.createElement(pt,null));var Gt=()=>r.createElement(r.StrictMode,null,r.createElement(i.zt,{store:me},r.createElement(It,null)));l.render(r.createElement(Gt,null),document.getElementById("root"))}},function(e){e.O(0,[534],(function(){return t=338,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=main.f7841020aa57af621f9a.js.map