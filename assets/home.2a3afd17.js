import{q as b,r,f as l,_ as m,d as v,a as w,s as y,o as f,c as x,l as t,u as d,v as N,x as k,y as C,n as I,j as p,z as S}from"./app.495e2bf6.js";const g=b("user",()=>{const s=r(""),o=r(new Set),c=l(()=>Array.from(o.value)),_=l(()=>c.value.filter(u=>u!==s.value)),e=r(100),a=r(100);function n(u){s.value&&o.value.add(s.value),s.value=u}return{setNewName:n,otherNames:_,savedName:s,focus:e,mag:a}});const i=s=>(N("data-v-7cc65dca"),s=s(),k(),s),V={class:"controls flex flex-row flex-gap-20px bg-white p-2 rounded-3xl shadow-xl border"},$=i(()=>t("div",{class:"label m-auto text-center"}," Focus ",-1)),B=["value"],M=i(()=>t("div",{class:"mark"}," \u2B24 ",-1)),E=[M],R=i(()=>t("div",{class:"label"}," Magnification ",-1)),A=["value"],K=i(()=>t("div",{class:"mark"}," \u2B24 ",-1)),P=[K],j=v({setup(s){const o=g();function c(e){o.focus=e.target.value}function _(e){o.mag=e.target.value}return w(()=>{y(()=>import("./input-knob.esm.af9b4d6e.js"),[])}),(e,a)=>(f(),x("div",V,[t("div",null,[$,t("input-knob",{value:d(o).focus,class:"m-auto",scale:"10",min:"0",max:"200",onKnobMoveChange:a[0]||(a[0]=n=>c(n))},E,40,B)]),t("div",null,[R,t("input-knob",{value:d(o).mag,class:"m-auto",scale:"10",min:"0",max:"200",onKnobMoveChange:a[1]||(a[1]=n=>_(n))},P,40,A)])]))}});var q=m(j,[["__scopeId","data-v-7cc65dca"]]);const z={class:"px-4 py-10 text-gray-700 dark:text-gray-200"},D={class:"blur m-auto max-w-xl w-100%"},F=v({setup(s){C(e=>({"3575510e":d(c),"5c9053cc":d(_)}));const o=g(),c=l(()=>`blur(${(o.focus/20-5)**2}px)`),_=l(()=>{const e=10**((o.mag-100)/100);return console.log(`scale(${e})`),`scale(${e})`});return(e,a)=>{const n=S,u=I("RouterView"),h=q;return f(),x("main",z,[p(n),t("div",D,[p(u)]),p(h)])}}});var L=m(F,[["__scopeId","data-v-98ce89c2"]]);export{L as default};
