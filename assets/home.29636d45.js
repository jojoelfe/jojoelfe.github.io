import{g as $,h as i,i as u,d as f,j as C,_ as I,o as g,c as h,e as t,u as r,p as b,k as y,l as M,r as N,a as m,m as B}from"./app.1a4bd96d.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";const w=$("user",()=>{const s=i(""),e=i(new Set),l=u(()=>Array.from(e.value)),d=u(()=>l.value.filter(v=>v!==s.value)),p=i(100),n=i(100),o=i(100),a=i(100);function _(v){s.value&&e.value.add(s.value),s.value=v}return{setNewName:_,otherNames:d,savedName:s,focus:p,mag:n,astigx:o,astigy:a}});const c=s=>(b("data-v-79040acb"),s=s(),y(),s),S={class:"controls flex flex-row flex-gap-20px bg-white p-2 rounded-3xl shadow-xl border"},V=c(()=>t("div",{class:"label m-auto text-center"}," Focus ",-1)),A=["value"],K=c(()=>t("div",{class:"mark"}," \u2B24 ",-1)),j=[K],E=c(()=>t("div",{class:"label"}," Magnification ",-1)),H=["value"],P=c(()=>t("div",{class:"mark"}," \u2B24 ",-1)),R=[P],L=c(()=>t("div",{class:"label"}," Astig X ",-1)),T=["value"],q=c(()=>t("div",{class:"mark"}," \u2B24 ",-1)),z=[q],D=c(()=>t("div",{class:"label"}," Astig Y ",-1)),F=["value"],G=c(()=>t("div",{class:"mark"}," \u2B24 ",-1)),O=[G],U=f({setup(s){const e=w();function l(o){e.focus=o.target.value}function d(o){e.mag=o.target.value}function p(o){e.astigx=o.target.value}function n(o){e.astigy=o.target.value}return C(()=>{I(()=>import("./input-knob.esm.af9b4d6e.js"),[])}),(o,a)=>(g(),h("div",S,[t("div",null,[V,t("input-knob",{value:r(e).focus,class:"m-auto",scale:"10",min:"0",max:"200",onKnobMoveChange:a[0]||(a[0]=_=>l(_))},j,40,A)]),t("div",null,[E,t("input-knob",{value:r(e).mag,class:"m-auto",scale:"10",min:"0",max:"200",onKnobMoveChange:a[1]||(a[1]=_=>d(_))},R,40,H)]),t("div",null,[L,t("input-knob",{value:r(e).astigx,class:"m-auto",scale:"10",min:"0",max:"200",onKnobMoveChange:a[2]||(a[2]=_=>p(_))},z,40,T)]),t("div",null,[D,t("input-knob",{value:r(e).astigy,class:"m-auto",scale:"10",min:"0",max:"200",onKnobMoveChange:a[3]||(a[3]=_=>n(_))},O,40,F)])]))}});var X=x(U,[["__scopeId","data-v-79040acb"]]);const Y={},k=s=>(b("data-v-20bb980e"),s=s(),y(),s),J={"text-xl":"","mt-6":"","mr-6":""},Q=k(()=>t("a",{class:"icon-btn mx-2",rel:"noreferrer",href:"https://github.com/jojoelfe",target:"_blank",title:"GitHub"},[t("div",{"i-carbon-logo-github":""})],-1)),W=k(()=>t("a",{class:"icon-btn mx-2",rel:"noreferrer",href:"https://grigoriefflab.umassmed.edu/",target:"_blank",title:"Lab"},[t("div",{"i-fontisto:laboratory":""})],-1)),Z=[Q,W];function tt(s,e){return g(),h("nav",J,Z)}var et=x(Y,[["render",tt],["__scopeId","data-v-20bb980e"]]);const st={class:"px-4 py-10 text-gray-700 dark:text-gray-200 text-base bg-cover min-h-screen",style:{"background-image":"url('/cover.png')","background-size":"100%","background-attachment":"fixed"}},ot={class:"m-auto max-w-prose w-full bg-white p-6 rounded-lg shadow-lg mag"},at={class:"blur"},nt=B("div> "),_t=f({setup(s){M(n=>({"63ca6fa2":r(l),"6c54fd16":r(d),"0ec4fa85":r(p)}));const e=w();u(()=>Math.atan(e.astigy-100/e.astigx-100)*180/Math.PI);const l=u(()=>{const n=(e.astigx-100)/3,o=(e.astigy-100)/3;return`drop-shadow(${n}px ${o}px 0px) drop-shadow(${-n}px ${-o}px 0px)`}),d=u(()=>`blur(${(e.focus/20-5)**2+Math.sqrt(((e.astigx-100)/20)**2+(e.astigy-100)**2/20)}px)`),p=u(()=>`scale(${10**((e.mag-100)/100)})`);return(n,o)=>{const a=et,_=N("RouterView"),v=X;return g(),h("main",st,[m(a),t("div",ot,[t("div",at,[m(_)]),nt]),m(v)])}}});var it=x(_t,[["__scopeId","data-v-19368aae"]]);export{it as default};
