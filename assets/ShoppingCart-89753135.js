import{_ as p,x as u,N as a,q as g,y as h,o as c,c as n,F as v,e as m,b as t,t as r,p as S,d as C}from"./index-423356a3.js";const f=e=>(S("data-v-72968560"),e=e(),C(),e),k={class:"cart"},x={class:"cart__img"},y=["src"],I={class:"cart__content"},P=["onClick"],B=f(()=>t("div",null,null,-1)),D={__name:"ShoppingCart",setup(e){const o=u();o.getProducts(),a.start();const d=g(()=>o.data),i=_=>{o.addItem(_)};return h(()=>{a.done()}),a.configure({showSpinner:!1}),(_,N)=>(c(),n("div",k,[(c(!0),n(v,null,m(d.value,(s,l)=>(c(),n("div",{key:l,class:"cart__main"},[t("div",x,[t("img",{src:s.image,alt:""},null,8,y)]),t("div",I,[t("div",null,r(s.title),1),t("div",null,"price $"+r(s.price),1),t("div",null,"Rating: "+r(s.rating.rate),1)]),t("button",{onClick:b=>i(s)},"ADD CHAR",8,P),B]))),128))]))}},A=p(D,[["__scopeId","data-v-72968560"]]);export{A as default};