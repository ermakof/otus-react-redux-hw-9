(self.webpackChunklines=self.webpackChunklines||[]).push([[179],{9375:function(e,t,n){"use strict";var r=n(7294),l=n(3935),i=n(8),o=n.n(i),a=n(9704),s=n(6403),c=n(4500),d=n.n(c),u=n(7159),f=n(9133);var m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Object.keys([...Array(e)]).map((e=>parseInt(e)))};var g=e=>{const t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}return t};var p=e=>t=>{const n=t.map((()=>0));for(let r=0;r<e;r+=1)n[t[r]]=Math.floor(3*Math.random()+1);return n};var h=e=>t=>{let n=parseInt((t.length*e/100).toFixed(),10);return p(n)(t)};var j=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;return(0,f.compose)(h(t),g,m)(e)};const b={1:{percent:10,chain:2,increase:3},2:{percent:20,chain:3,increase:4},3:{percent:30,chain:4,increase:5}};var v={userLevel:"1",gameFieldPercentFilled:0,gameFieldData:j(81,0),highlightedCells:void 0,score:0,selectedCell:void 0,isLoading:!1,hitParade:void 0};const y=e=>e.map(((e,t)=>e?-1:t)).filter((e=>e>-1)),O=e=>t=>t.slice(0,e);var E=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1";const n=b[t].increase;return(0,f.compose)(O(n),g,y)(e)};var w=e=>t=>{const n=((e,t)=>e&&e.filter((e=>e.indexOf(t)>-1))[0])(t[0],e),r=((e,t)=>e&&e.filter((e=>e.indexOf(t)>-1))[0])(t[1],e),l=[];return n&&l.push(n),r&&l.push(r),l};var P=e=>e[0]+9*e[1];const z=(e,t,n,r,l)=>{const i=[],o={1:[],2:[],3:[]},a=b[n].chain;for(let n=0;n<9;n+=1){const s=P("H"===e?[n,t]:[t,n]),c=r[s];r[s]&&c===l?o[l].push(s):(l&&o[l].length>a&&i.push([...o[l]]),o[l]=[])}return o[l].length>a&&i.push([...o[l]]),i};var x=e=>{const t=Math.min(Math.max(Math.ceil((e+1)/9)-1,0),8);return[Math.min(Math.max(e-9*t,0),8),t]};var k=(e,t)=>n=>{const r=x(e),l=((e,t,n,r)=>z("V",e,t,n,r))(r[0],t,n,n[e]),i=((e,t,n,r)=>z("H",e,t,n,r))(r[1],t,n,n[e]),o=[];return l.length&&o.push(l),i.length&&o.push(i),o};var S=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return(0,f.compose)(w(e),k(e,t))(n)};var C=()=>"".concat(1e7,-1e3).concat(-4e3).concat(-8e3).concat(-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))),F=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const r=[...n];return null!=e&&e>-1&&e<n.length&&(r[e]=t),r}},D=(e,t,n)=>null==t||null==n?e:(0,f.compose)(F(n,e[t]),F(t,0))(e),Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise((t=>setTimeout(t,e)))};const R=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"X";return e.reduce(((e,n)=>n.reduce(((e,n)=>(e[n]=t,e)),e)),{})},A=e=>{const t={};return e.forEach((e=>{t[e]=""})),t},L=(e,t)=>{const n=[...e];return Object.keys(t).forEach((e=>{n[Number(e)]=Math.floor(3*Math.random()+1)})),n},I=(e,t,n)=>{const r=(e=>{const t=Array.isArray(e)&&Math.sqrt(e.length);if(!t)return null;const n=(e,n)=>e>=0&&e<t&&n>=0&&n<t;return{SIZE:t,validatePoints:(e,t)=>n(t[0],t[1])&&n(e[0],e[1]),validateOutbounds:n,createGrid:()=>{const n=[];for(let r=0;r<t;r+=1){const r=t*n.length,l=r+t;n.push(e.slice(r,l).map((e=>e?-1:-2)))}return n}}})(e);if(!r||null==t||null==n)return null;const l=r.createGrid(),i=Array.isArray(t)?t[0]:x(t)[1],o=Array.isArray(t)?t[1]:x(t)[0],a=Array.isArray(n)?n[0]:x(n)[1],s=Array.isArray(n)?n[1]:x(n)[0],c=[1,0,-1,0],d=[0,1,0,-1],u=Array(r.SIZE**2),f=Array(r.SIZE**2);let m,g;if(!r.validatePoints([i,o],[a,s]))return null;if(-1===l[a][s])return null;let p=0;l[i][o]=0;do{g=!0;for(let e=0;e<r.SIZE;e+=1)for(let t=0;t<r.SIZE;t+=1)if(l[e][t]===p)for(let n=0;n<4;n+=1){const i=e+c[n],o=t+d[n];r.validateOutbounds(i,o)&&-2===l[i][o]&&(g=!1,l[i][o]=p+1)}p+=1}while(!g&&-2===l[a][s]);if(-2===l[a][s])return null;m=l[a][s];let h=a,j=s;for(p=m;p>0;){u[p]=h,f[p]=j,p--;for(let e=0;e<4;++e){const t=j+d[e],n=h+c[e];if(r.validateOutbounds(n,t)&&l[n][t]==p){h+=c[e],j+=d[e];break}}}return u[0]=i,f[0]=o,u.reduce(((e,t,n)=>(e.push([f[n],t]),e)),[])};var M=(e,t)=>{let n="";if(Array.isArray(e)&&e.length){const r=e[0];if(Array.isArray(r)&&r.length>1)return n=r[0]+1===r[1]?"Y":r[0]+t===r[1]?"X":"",n}return n};function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const U=(0,s.oM)({name:"app",initialState:v,reducers:{rehydrate:e=>e,restoreGame:(e,t)=>t.payload,setUserLevel:(e,t)=>{let{payload:n}=t;e.userLevel=n,e.selectedCell=void 0,e.highlightedCells=void 0,e.score=0,e.gameFieldPercentFilled=b[n].percent,e.gameFieldData=j(81,e.gameFieldPercentFilled)},setSelectedCell:(e,t)=>{let{payload:n}=t;e.selectedCell=n},startGameSteps:(e,t)=>{let{payload:n}=t;return e},updateGame:(e,t)=>G(G({},e),t.payload),initApp:e=>{e.gameFieldPercentFilled=0,e.gameFieldData=j(81,0),e.userLevel="1",e.score=0},resetApp:e=>{const t=10*Number(e.userLevel);e.selectedCell=void 0,e.highlightedCells=void 0,e.score=0,e.gameFieldPercentFilled=t,e.gameFieldData=j(81,t)},waitOn:e=>{e.isLoading=!0},waitOff:e=>{e.isLoading=!1},updateHitParadeInfo:(e,t)=>{let{payload:n}=t;e.hitParade||(e.hitParade={}),n.ts&&(e.hitParade[n.ts]=n)},deleteUserFromHitParade:(e,t)=>{let{payload:n}=t;e.hitParade&&n&&delete e.hitParade[n]}}}),{actions:Y,reducer:H}=U;var J={userProfile:void 0};const B=(0,s.oM)({name:"auth",initialState:J,reducers:{rehydrate:e=>e,setUser:(e,t)=>{let{payload:n}=t;return e},login:(e,t)=>{let{payload:n}=t;e.userProfile=n},logout:(e,t)=>{let{payload:n}=t;e.userProfile=void 0}}}),{actions:W,reducer:q}=B,V={app:H,auth:q};var X=n(4857);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){K(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Q="lines:userProfile",ee=e=>new Promise(((t,n)=>{setTimeout((()=>{try{if(!e)throw"Нет данных о пользователе!";const n=(new Date).getTime();let r=$($({},e),{},{token:C(),loginTime:n});localStorage.setItem(Q,JSON.stringify(r)),t(r)}catch(e){n(e)}}),500)})),te=()=>new Promise((e=>{setTimeout((()=>{localStorage.removeItem(Q),e(!0)}),500)}));var ne=n(9713);var re=(e,t)=>{const n=[...e];return t.length>0&&t.forEach((e=>e&&e.forEach((e=>{n[e]=0})))),n};function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){oe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const ae="lines:app";function*se(){yield(0,X.gz)(Y.waitOn());const e=yield(0,X.RE)([localStorage,localStorage.getItem],ae);if(e){const t=yield(0,X.RE)([JSON,JSON.parse],e);yield(0,X.gz)(Y.restoreGame(t));const{userProfile:n}=yield(0,X.Ys)(pe),r={login:n.login,ts:n.loginTime,score:0};yield(0,X.gz)(Y.updateHitParadeInfo(r))}yield(0,X.gz)(Y.waitOff())}const ce=e=>e.app;function*de(){const e=yield(0,X.Ys)(ce);yield(0,X.RE)([localStorage,localStorage.setItem],ae,JSON.stringify(e))}function*ue(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{gameFieldData:n,selectedCell:r}=yield(0,X.Ys)(ce);let l=yield(0,X.RE)(D,n,r,e);yield(0,X.gz)(Y.updateGame(ie({gameFieldData:l,selectedCell:e},t)))}function*fe(e,t,n){const{gameFieldData:r}=yield(0,X.Ys)(ce),l=Number(yield(0,X.RE)(P,e)),i=Number(yield(0,X.RE)(P,t)),o=yield(0,X.RE)(D,r,l,i),a={[i]:""};yield(0,X.gz)(Y.updateGame({gameFieldData:o,highlightedCells:a})),yield(0,X.RE)(Z,n)}function*me(e){let{payload:t}=e;const{gameFieldData:n,selectedCell:r,userLevel:l}=yield(0,X.Ys)(ce);if(null!=r&&!n[t]){const e=yield(0,X.RE)(I,n,r,t);let i;if(!e)return void(yield*function*(e,t,n){yield*ue(t,{highlightedCells:{[t]:"#00000070"}}),yield(0,X.RE)(Z,n),yield*ue(e,{highlightedCells:void 0})}(r,t,250));yield*function*(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;yield(0,X.gz)(Y.updateGame({selectedCell:void 0}));for(let e=1;e<t.length;e+=1)yield*fe(t[e-1],t[e],100);const r={[e]:""};yield(0,X.gz)(Y.updateGame({highlightedCells:r})),yield(0,X.RE)(Z,n)}(t,e,250),i=yield(0,X.RE)(D,n,r,t);const o=yield(0,X.RE)(S,Number(t),l,i);Array.isArray(o)&&o.length?(yield*function*(e,t){const n=M(e,9),r=yield(0,X.RE)(R,e,n);yield(0,X.gz)(Y.updateGame({highlightedCells:r})),yield(0,X.RE)(Z,t)}(o,100),yield*function*(e){const{gameFieldData:t,score:n=0,highlightedCells:r,hitParade:l}=yield(0,X.Ys)(ce),i=yield(0,X.RE)(re,t,e),o=n+(r?Object.keys(r).length:0),{userProfile:a}=yield(0,X.Ys)(pe);let s;l&&a&&(s=(0,ne.d9v)(l),s[a.loginTime].score=o),yield(0,X.gz)(Y.updateGame({gameFieldData:i,highlightedCells:void 0,score:o,hitParade:s}))}(o)):(yield*function*(e){const{gameFieldData:t,userLevel:n}=yield(0,X.Ys)(ce),r=yield(0,X.RE)(E,t,n),l=yield(0,X.RE)(A,r),i=yield(0,X.RE)(L,t,l);yield(0,X.gz)(Y.updateGame({gameFieldData:i,highlightedCells:l})),yield(0,X.RE)(Z,e)}(250),yield*function*(){yield(0,X.gz)(Y.updateGame({highlightedCells:void 0}))}()),yield*de()}}function*ge(){yield(0,X.ib)(Y.rehydrate.type,se),yield(0,X.ib)(Y.setUserLevel.type,de),yield(0,X.ib)(Y.startGameSteps.type,me),yield(0,X.ib)(Y.resetApp.type,de)}const pe=e=>e.auth;function*he(e){let{payload:t}=e;yield(0,X.gz)(Y.waitOn());let n=yield(0,X.RE)(ee,t);n&&(yield(0,X.gz)(W.login(n)),yield(0,X.gz)(Y.resetApp())),yield(0,X.gz)(Y.waitOff())}function*je(e){let{payload:t}=e;yield(0,X.gz)(Y.waitOn());const{hitParade:n}=yield(0,X.Ys)(ce);n&&t&&!n[t].score&&(yield(0,X.gz)(Y.deleteUserFromHitParade(t))),yield(0,X.RE)(te),yield(0,X.gz)(Y.initApp()),yield(0,X.gz)(Y.waitOff())}function*be(){const e=yield(0,X.RE)([localStorage,localStorage.getItem],"lines:userProfile");if(e){const t=yield(0,X.RE)([JSON,JSON.parse],e);yield(0,X.gz)(W.login(t))}}function*ve(){yield(0,X.ib)(W.setUser.type,he),yield(0,X.ib)(W.logout.type,je),yield(0,X.ib)(W.rehydrate.type,be)}const ye=(0,u.ZP)(),Oe=(0,s.xC)({reducer:V,middleware:e=>e().prepend().concat(ye).concat(d())});ye.run((function*(){yield(0,X.$6)([(0,X.RE)(ve),(0,X.RE)(ge)])})),Oe.dispatch(W.rehydrate());var Ee,we=n(2666),Pe=n(1821);var ze,xe,ke,Se=we.Z.div(Ee||(ze=["\n  color: #faebd7;\n  background-color: #000;\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n"],xe||(xe=ze.slice(0)),Ee=Object.freeze(Object.defineProperties(ze,{raw:{value:Object.freeze(xe)}})))),Ce=n(3409),Fe=n(1740),De=n(1054);function Ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ze(Object(n),!0).forEach((function(t){Ae(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ze(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Le=we.Z.div(ke||(ke=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n  font-size: 16px;\n\n  label {\n    margin-right: 5px;\n  }\n\n  button {\n    margin: 5px;\n  }\n\n  input {\n    margin-right: 30px;\n    width: 100px;\n  }\n\n  form {\n    margin: auto 0;\n  }\n"])));var Ie,Me=()=>{const e=(0,a.I0)(),{setUser:t}=W,[n,l]=(0,r.useState)({login:"",password:""}),i=e=>{const{id:t,value:r}=e.currentTarget;l(Re(Re({},n),{},{[t]:r}))},o=!n.login.trim()||!n.password.trim();return r.createElement(Le,{role:"authForm"},r.createElement(De.J9,{initialValues:Re({},n),onSubmit:()=>{e(t(n))}},r.createElement(De.l0,null,r.createElement("label",{htmlFor:"login"},"Имя"),r.createElement(De.gN,{role:"login",id:"login",name:"login",placeholder:"Введите логин",value:n.login,onChange:i}),r.createElement("label",{htmlFor:"password"},"Пароль"),r.createElement(De.gN,{role:"password",id:"password",name:"password",placeholder:"Введите пароль",value:n.password,onChange:i}),r.createElement("button",{role:"buttonLogin",disabled:o,type:"submit"},"Войти"))))};const Te=we.Z.button(Ie||(Ie=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  height: 30px;\n  margin: auto 20px;\n"])));var Ge,Ne=e=>{let{title:t="Button",onClick:n,role:l="button"}=e;return r.createElement(Te,{role:l,onClick:n},t)};const Ue=[{id:"1",name:"Падаван"},{id:"2",name:"Джедай"},{id:"3",name:"Член Совета Силы"}],Ye=we.Z.div(Ge||(Ge=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n\n  select {\n    height: 30px;\n    margin: auto 5px;\n  }\n\n  p {\n    margin: auto 0;\n  }\n"])));var He,Je=e=>{let{onSelect:t,selectedLevel:n,options:l=Ue}=e;return r.createElement(Ye,null,r.createElement("p",null,"Уровень"),r.createElement("select",{value:n,role:"select",name:"select",onChange:t},l.map((e=>r.createElement("option",{key:e.id,role:"option",value:e.id},e.name)))))};const Be=we.Z.div(He||(He=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n  width: 100%;\n"]))),We=e=>{let{userLevel:t,userProfile:n}=e;const l=(0,a.I0)(),i=(0,r.useCallback)((()=>{l(Y.updateHitParadeInfo({login:n.login,ts:n.loginTime,score:0})),l(Y.resetApp())}),[n]),o=(0,r.useCallback)((e=>{const{value:t}=e.currentTarget;l(Y.updateHitParadeInfo({login:n.login,ts:n.loginTime,score:0})),l(Y.setUserLevel(t))}),[n]);return r.createElement(Be,{role:"formControls"},r.createElement(Ne,{role:"buttonReset",onClick:i,title:"Сброс"}),r.createElement(Je,{onSelect:o,selectedLevel:t}))};var qe,Ve,Xe=(0,r.memo)(We);function _e(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const $e=(0,we.Z)(Se)(qe||(qe=_e(["\n  width: 66%;\n  justify-content: left;\n"]))),Ke=(0,we.Z)(Ne)(Ve||(Ve=_e(["\n  margin-left: auto;\n"]))),Qe=()=>{const{userLevel:e}=(0,a.v9)(ce),{userProfile:t}=(0,a.v9)(pe),n=(0,a.I0)();(0,r.useEffect)((()=>{n(Y.rehydrate())}),[]);return r.createElement($e,{role:"userForm"},r.createElement(Xe,{userLevel:e,userProfile:t}),r.createElement(Ke,{role:"buttonLogout",onClick:()=>{n(W.logout(t.loginTime))},title:"Выйти"}))};var et,tt=(0,r.memo)(Qe);const nt=we.Z.p(et||(et=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  font-size: 28px;\n  line-height: 36px;\n  margin: auto 20px;\n  width: 34%;\n"])));var rt,lt,it,ot=()=>r.createElement(nt,{role:"gameTitle"},"Lines"),at=n(917);function st(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const ct=we.Z.div(rt||(rt=st(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),dt=(0,at.F4)(lt||(lt=st(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),ut=(0,we.Z)(ct)(it||(it=st(["\n  background: rgba(0, 0, 0, 0.3);\n\n  article {\n    display: inline-block;\n    width: 64px;\n    height: 64px;\n\n    div {\n      box-sizing: border-box;\n      display: block;\n      position: absolute;\n      width: 51px;\n      height: 51px;\n      margin: 6px;\n      border: 4px solid #0055a6;\n      border-radius: 50%;\n      animation: "," 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n      border-color: #0055a6 transparent transparent transparent;\n    }\n  }\n"])),dt),ft=()=>{const[e,t]=(0,r.useState)(null);return(0,r.useEffect)((()=>{const e=document.getElementById("loading");t(e)}),[]),e&&(0,l.createPortal)(r.createElement(ut,{role:"loading"},r.createElement("article",null,r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))),e)};var mt,gt=(0,r.memo)(ft);const pt=we.Z.div(mt||(mt=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n  width: 100%;\n"])));var ht=e=>{let{login:t=""}=e;const{isLoading:n}=(0,a.v9)((e=>{let{app:t}=e;return t}));let l=(0,Fe.s0)();return(0,r.useEffect)((()=>{t&&l("/",{replace:!0})}),[t]),r.createElement(pt,null,r.createElement(ot,null),r.createElement(Fe.j3,null),n&&r.createElement(gt,null))};var jt=e=>{let{children:t,login:n}=e,l=(0,Fe.TH)();return n?t:r.createElement(Fe.Fg,{to:"/auth",state:{from:l},replace:!0})};var bt,vt=()=>{const{userProfile:e}=(0,a.v9)((e=>{let{auth:t}=e;return t}));return r.createElement(Ce.UT,null,r.createElement(Fe.Z5,null,r.createElement(Fe.AW,{element:r.createElement(ht,{login:null==e?void 0:e.login})},r.createElement(Fe.AW,{path:"/auth",element:r.createElement(Me,null)}),r.createElement(Fe.AW,{path:"/",element:r.createElement(jt,{login:null==e?void 0:e.login},r.createElement(tt,null))}))))};const yt=(0,we.Z)(Se)(bt||(bt=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  width: 100%;\n"]))),Ot=()=>r.createElement(yt,{role:"topPanel"},r.createElement(vt,null));var Et,wt=(0,r.memo)(Ot);const Pt=we.Z.p(Et||(Et=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  margin: auto 20px;\n"]))),zt=e=>{let{data:t=[]}=e;return r.createElement(Pt,{role:"messagePercentFilled"},"Процент заполнения: ".concat((t.filter((e=>!!e)).length/t.length*100||0).toFixed(2)))};var xt,kt=(0,r.memo)(zt);const St=we.Z.p(xt||(xt=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  margin: auto 20px;\n"]))),Ct=e=>{let{value:t=0}=e;return r.createElement(St,{role:"messageResult"},"Результат: ".concat(t))};var Ft,Dt=(0,r.memo)(Ct);const Zt=we.Z.div(Ft||(Ft=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  opacity: ",";\n"])),(e=>{let{active:t}=e;return t?1:.3})),Rt=()=>{const{gameFieldData:e,score:t=0}=(0,a.v9)((e=>{let{app:t}=e;return t})),n=(0,a.v9)((e=>{let{auth:t}=e;return!!t.userProfile}));return r.createElement(Zt,{active:n},r.createElement(Se,{role:"bottomPanel"},r.createElement(Dt,{value:t}),r.createElement(kt,{data:e})))};var At=(0,r.memo)(Rt);var Lt,It,Mt,Tt;function Gt(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const Nt=(0,at.F4)(Lt||(Lt=Gt(["\n  from, 20%, 53%, 80%, to {\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    transform: translate3d(0, -15px, 0);\n  }\n\n  70% {\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, -5px,0);\n  }\n"]))),Ut={1:"#ff0000",2:"#ffff00",3:"#00ff00"},Yt=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"".concat(Ut[e]).concat(t||"")},Ht=we.Z.div(It||(It=Gt(["\n  position: relative;\n  display: block;\n  width: ","px;\n  height: ","px;\n  text-align: center;\n  border-top: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n  border-right: ","\n  border-bottom: 1px solid;\n  float: left;\n  ","\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-out;\n  background: #555;\n  background: #d1d1d1;\n  border: 0.6vh solid transparent;\n  border-color: white #9e9e9e #9e9e9e white;  \n"])),(e=>{let{isRight:t}=e;return 50-(t?2:1)}),49,(e=>{let{isRight:t}=e;return"1px solid ".concat(t?"#ddd":"",";")}),(e=>{let{isLeft:t}=e;return t?"clear: both;":""})),Jt=we.Z.div(Mt||(Mt=Gt(["\n  cursor: pointer;\n  background: #ffff00;\n  border-radius: 50%;\n  background: ",";\n  border-radius: 50%;\n  width: 25px;\n  height: 25px;\n  margin: 10px;\n  border: 0.2vh solid transparent;\n  border-color: ",";\n\n  animation: "," 1s ease infinite;\n\n  ","\n"])),(e=>{let{selected:t,highlighted:n,filled:r}=e;return n&&"#"===n.substring(0,1)?n:t?Yt(r):Yt(r,"a0")}),(e=>{let{selected:t}=e;return t?"#555":"#9e9e9e"}),(e=>{let{selected:t}=e;return t?Nt:""}),(e=>{let{highlighted:t,filled:n}=e;return t?"":":hover {background: ".concat(Yt(n),";}")})),Bt=we.Z.div(Tt||(Tt=Gt(["\n  margin-left: -4px;\n  height: 2px;\n  width: 57px;\n  padding: 0;\n  position: absolute;\n  top: 22px;\n  background: #666666;\n  ","\n"])),(e=>{let{direction:t}=e;return"X"===t?"transform: rotate(-90deg)":""}));var Wt,qt=e=>{let{num:t=0,filled:n=0,isSelected:l=!1,isLeft:i=!0,isRight:o=!0,highlighted:s=""}=e;const c=(0,a.I0)();return r.createElement(Ht,{role:"cellContainer-".concat(t),isRight:o,isLeft:i,onClick:e=>{e.stopPropagation(),l||s||c(Y.startGameSteps(t))}},n>0&&n<4&&r.createElement(r.Fragment,null,r.createElement(Jt,{role:"cellContent-".concat(t),selected:l,onClick:e=>{e.stopPropagation(),s||c(Y.setSelectedCell(l?void 0:t))},highlighted:s,filled:n}),s&&"#"!==s.substring(0,1)&&r.createElement(Bt,{role:"cellDestroy-".concat(t,"-").concat(s.substring(0,1)),direction:s})))};const Vt=we.Z.div(Wt||(Wt=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  position: relative;\n  color: #faebd7;\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n  width: 34%;\n"])));var Xt,_t,$t,Kt=Vt;function Qt(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const en=we.Z.section(Xt||(Xt=Qt(["\n  margin: auto;\n  min-width: 560px;\n  z-index: 999;\n"]))),tn=(0,we.Z)(Kt)(_t||(_t=Qt(["\n  background: #282c34;\n"]))),nn=we.Z.p($t||($t=Qt(["\n  height: 80vh;\n  position: relative;\n  text-align: center;\n"])));var rn,ln=()=>{const{gameFieldData:e,selectedCell:t,highlightedCells:n={}}=(0,a.v9)((e=>{let{app:t}=e;return t}));return e.length?r.createElement(tn,null,r.createElement(en,{role:"cellsGrid"},e.map(((e,l)=>{const i=Math.floor(l/9),o=l%9,a=8===o,s=0===o;return r.createElement(qt,{key:"".concat(i,"-").concat(o),num:l,filled:e,isSelected:t===l,isLeft:s,isRight:a,highlighted:n[l]})})),r.createElement("div",{style:{clear:"both"}}))):r.createElement(nn,{role:"noDataMessage"},"Нет данных!")};const on=we.Z.p(rn||(rn=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  text-align: center;\n  font-size: 18px;\n"])));var an,sn=on;const cn=we.Z.div(an||(an=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  width: 90%;\n  overflow-y: auto;\n  overflow-x: hidden;\n"])));var dn=cn;const un=(e,t)=>e.score>t.score?-1:e.score<t.score?1:0;var fn,mn,gn,pn,hn;function jn(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const bn=we.Z.div(fn||(fn=jn(["\n  width: 50%;\n"]))),vn=we.Z.div(mn||(mn=jn(["\n  width: 30%;\n"]))),yn=we.Z.div(gn||(gn=jn(["\n  width: 15%;\n"]))),On=we.Z.div(pn||(pn=jn(["\n  width: 10%;\n"]))),En=we.Z.div(hn||(hn=jn(["\n  display: flex;\n  line-height: 40px;\n  ","\n  ","\n  ","\n  ","\n"])),(e=>{let{winner:t}=e;return 1===t?"color: #ffff00;":""}),(e=>{let{winner:t}=e;return 2===t?"color: #c0c0c0;":""}),(e=>{let{winner:t}=e;return 3===t?"color: #a52a2a;":""}),(e=>{let{highlighted:t}=e;return t?"background: #aaaaaa45;":""})),wn=()=>r.createElement(En,{role:"header"},r.createElement(bn,{role:"col"},"Время"),r.createElement(vn,{role:"col"},"Имя"),r.createElement(yn,{role:"col"},"Счет"),r.createElement(On,{role:"col"},"Место"));var Pn=(0,r.memo)(wn);const zn=e=>{let{user:t,winner:n,highlighted:l=!1}=e;const i=o()(t.ts).tz("Europe/Moscow").format("DD.MM.YYYY, HH:mm:ss");return r.createElement(En,{role:"row",winner:n,highlighted:l},r.createElement(bn,{role:"col"},i),r.createElement(vn,{role:"col"},t.login),r.createElement(yn,{role:"col"},t.score),n&&r.createElement(On,{"data-testid":"colWinnerPlace",role:"col"}))};var xn=(0,r.memo)(zn);const kn=e=>{let{list:t,loginTime:n}=e;const l=Object.values(t).sort(un);return r.createElement(dn,{role:"grid"},r.createElement(Pn,null),l.map(((e,t)=>r.createElement(xn,{key:e.ts,user:e,winner:t+1,highlighted:e.ts===n}))))};var Sn,Cn=(0,r.memo)(kn);const Fn=(0,we.Z)(Kt)(Sn||(Sn=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  background: #282c34;\n"]))),Dn=()=>{const e=(0,a.v9)((e=>{let{app:t}=e;return t.hitParade})),t=(0,a.v9)((e=>{let{auth:t}=e;return t.userProfile||{}}));return r.createElement(Fn,{role:"panelHitParade"},r.createElement(dn,{role:"rootGrid"},r.createElement(sn,null,"Хит-парад"),e&&r.createElement(Cn,{list:e,loginTime:t.loginTime})))};var Zn,Rn=(0,r.memo)(Dn);const An=(0,we.Z)(Kt)(Zn||(Zn=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  background: #282c34;\n"]))),Ln=e=>{let{login:t}=e;return r.createElement(An,{role:"userInfo"},r.createElement(dn,{role:"grid"},r.createElement(sn,null,"Игрок: ".concat(t||""))))};var In,Mn=(0,r.memo)(Ln);const Tn=we.Z.div(In||(In=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n  height: 80vh;\n  position: relative;\n  overflow: auto;\n  opacity: ",";\n"])),(e=>{let{active:t}=e;return t?1:.3}));var Gn,Nn,Un=()=>{var e;const t=(0,a.v9)(pe);return r.createElement(Tn,{role:"bodyPanel",active:!!t.userProfile},r.createElement(Rn,null),r.createElement(ln,null),r.createElement(Mn,{login:null===(e=t.userProfile)||void 0===e?void 0:e.login}))};function Yn(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const Hn=we.Z.div(Gn||(Gn=Yn(["\n  overflow: hidden;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',\n    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n"]))),Jn=(0,Pe.iv)(Nn||(Nn=Yn(["\n  body {\n    background: #282c34;\n    color: white;\n    margin: 0;\n    padding: 0;\n    min-height: '100vh';\n    max-width: '100vw';\n  }\n"])));var Bn=()=>r.createElement(Hn,{role:"rootApp"},r.createElement(Pe.xB,{styles:Jn}),r.createElement(wt,null),r.createElement(Un,null),r.createElement(At,null));var Wn=()=>r.createElement(r.StrictMode,null,r.createElement(a.zt,{store:Oe},r.createElement(Bn,null)));o().locale("ru"),o().tz.setDefault("Europe/Moscow"),l.render(r.createElement(Wn,null),document.getElementById("root"))},6700:function(e,t,n){var r={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function l(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}l.keys=function(){return Object.keys(r)},l.resolve=i,e.exports=l,l.id=6700}},function(e){e.O(0,[471],(function(){return t=9375,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=main.6910f075bbdf6d9c6cd7.js.map