"use strict";(self["webpackChunkPandoraNext_TokensTool"]=self["webpackChunkPandoraNext_TokensTool"]||[]).push([[344],{344:function(e,a,t){t.r(a),t.d(a,{default:function(){return j}});var o=t(6773),l=(t(487),t(3164)),s=(t(6335),t(6252));const n=e=>((0,s.dD)("data-v-438c2585"),e=e(),(0,s.Cn)(),e),r={class:"content_login"},i=n((()=>(0,s._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"},null,-1))),c={class:"login-container"},m=["src"],d=n((()=>(0,s._)("h4",null,"Pandora-TokensTool",-1))),u={class:"container"},p={style:{display:"flex",transform:"translate(0vw, 2vh)","font-size":"14.6px"}},v={style:{display:"flex",transform:"translate(0vw, 2vh)","margin-top":"5vh","font-size":"14.6px"}},h={style:{display:"flex",transform:"translate(0.5vw, 0vh)","margin-top":"6vh"}},g={style:{display:"block",transform:"translate(0vw, 0vh)","margin-top":"3.5vh"}},f={class:"bottom"},k={style:{"text-align":"center",transform:"translateY(0vh)"}},_={key:0},w=n((()=>(0,s._)("h3",null,[(0,s.Uk)(" 获取token "),(0,s._)("a",{href:"https://chat.OpenAI.com/api/auth/session"},"官网地址 "),(0,s._)("a",{href:"https://ai.fakeopen.com/auth"},"Pandora地址"),(0,s.Uk)(" 欢迎大家来扩展 "),(0,s._)("a",{href:"https://github.com/Yanyutin753/PandoraNext-TokensTool"},"PandoraNext-TokensTool v0.5.3 ")],-1))),b=[w],y={key:1},T=n((()=>(0,s._)("br",null,null,-1))),x=n((()=>(0,s._)("h3",null,[(0,s.Uk)(" 获取token "),(0,s._)("a",{href:"https://chat.OpenAI.com/api/auth/session"},"官网地址 "),(0,s._)("a",{href:"https://ai.fakeopen.com/auth"},"Pandora地址"),(0,s._)("br"),(0,s.Uk)(" 欢迎大家来扩展 "),(0,s._)("a",{href:"https://github.com/Yanyutin753/PandoraNext-TokensTool"},"PandoraNext-TokensTool v0.5.3 ")],-1))),I=[T,x];function P(e,a,t,n,w,T){const x=l.gN,P=(0,s.up)("h9"),S=o.XZ;return(0,s.wg)(),(0,s.iD)("div",r,[i,(0,s._)("div",c,[(0,s._)("img",{src:n.image,alt:"Your Image","size:30":""},null,8,m),d]),(0,s._)("div",u,[(0,s._)("div",p,[(0,s.Wm)(x,{modelValue:n.username,"onUpdate:modelValue":a[0]||(a[0]=e=>n.username=e),name:"用户名",label:"用户名",placeholder:"用户名",class:"userName"},null,8,["modelValue"])]),(0,s._)("div",v,[(0,s.Wm)(x,{modelValue:n.password,"onUpdate:modelValue":a[1]||(a[1]=e=>n.password=e),type:"password",name:"密码",label:"密码",placeholder:"密码",class:"userName"},null,8,["modelValue"])]),(0,s._)("div",h,[(0,s.Wm)(S,{class:"remember",modelValue:n.checked,"onUpdate:modelValue":a[2]||(a[2]=e=>n.checked=e),"checked-color":"#0ea27e","icon-size":"13.5px"},{default:(0,s.w5)((()=>[(0,s.Wm)(P,{style:{"font-size":"13.5px",transform:"translateX(7px)"}},{default:(0,s.w5)((()=>[(0,s.Uk)("记住密码")])),_:1})])),_:1},8,["modelValue"])]),(0,s._)("div",g,[(0,s._)("input",{type:"submit",onClick:a[3]||(a[3]=(...e)=>n.submit&&n.submit(...e)),value:"登录",class:"userName"})])]),(0,s._)("div",f,[(0,s._)("div",k,[0==n.page?((0,s.wg)(),(0,s.iD)("div",_,b)):((0,s.wg)(),(0,s.iD)("div",y,I))])])])}var S=t(2262),U=t(2201),N=t(451),z=t(1348),V={setup(){const e=(0,U.tv)(),a=(0,S.iH)(""),t=(0,S.iH)(""),o=(0,S.iH)(""),l=N,n=(0,S.iH)(!0);(0,s.bv)((()=>{const e=localStorage.getItem("savedUsername"),l=localStorage.getItem("savedPassword"),s=localStorage.getItem("savedRemember");"true"===s&&(a.value=e||"",t.value=l||"",o.value=!0),window.innerWidth>767&&(n.value=!1)}));const r=()=>{o.value?(localStorage.setItem("savedUsername",a.value),localStorage.setItem("savedPassword",t.value),localStorage.setItem("savedRemember","true")):(localStorage.removeItem("savedUsername"),localStorage.removeItem("savedPassword"),localStorage.removeItem("savedRemember"));let l={loginUsername:a.value,loginPassword:t.value};fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`},body:JSON.stringify(l)}).then((e=>e.json())).then((a=>{if(1===a.code){console.log("登录成功");const t=a.data;localStorage.setItem("jwtToken",t),(0,z.z8)("登录成功！"),setTimeout((()=>{window.innerWidth<=1e3?e.replace("/iphone"):e.replace("/")}),1e3)}else console.error("登录失败"),(0,z.z8)("账号或密码错误！")})).catch((e=>{console.error("登录时出现错误:",e),(0,z.z8)("账号或密码错误！")}))};return{username:a,password:t,image:l,checked:o,submit:r,page:n}}},W=t(3744);const C=(0,W.Z)(V,[["render",P],["__scopeId","data-v-438c2585"]]);var j=C},451:function(e,a,t){e.exports=t.p+"img/chatGpt.93292c55.jpg"}}]);
//# sourceMappingURL=344.79892b7f.js.map