import{_ as g,u as m,r as c,a as f,o as h,c as b,b as s,w as p,v as r,p as w,d as x}from"./index-423356a3.js";const a=t=>(w("data-v-34f06b10"),t=t(),x(),t),k={class:"login"},I=a(()=>s("div",{class:"login__label"},"LOGIN ACCOUNT",-1)),L={class:"login__form"},U=a(()=>s("div",{class:"login__email__label"},"Email",-1)),y={class:"login__email"},B={class:"login__form"},C=a(()=>s("div",{class:"login__password__label"},"Password",-1)),S={class:"login__password"},N={class:"login__btn"},V={__name:"Login",setup(t){const _=m(),l=c(""),n=c(""),i=f(),u=()=>{const d={email:l.value,password:n.value};console.log(i),i.loginUser(d).then(o=>{o.access_token&&_.push({path:"/"})})},v=()=>{_.push({path:"/register"})};return(d,o)=>(h(),b("div",k,[I,s("div",L,[U,s("div",y,[p(s("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>l.value=e)},null,512),[[r,l.value]])])]),s("div",B,[C,s("div",S,[p(s("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=e=>n.value=e)},null,512),[[r,n.value]])])]),s("div",N,[s("button",{onClick:o[2]||(o[2]=e=>u())},"登入")]),s("div",{class:"login__goBtn",onClick:o[3]||(o[3]=e=>v())},"尚未註冊?")]))}},O=g(V,[["__scopeId","data-v-34f06b10"]]);export{O as default};
