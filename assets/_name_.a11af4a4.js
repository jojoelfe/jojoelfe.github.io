import{d as p,h as d,i as _,b as k,w as h,o as a,c as r,g as t,t as n,e,F as b,r as f,j as x}from"./app.08208a42.js";const y=t("div",{"text-4xl":""},[t("div",{"i-carbon-pedestrian":"","inline-block":""})],-1),v={"text-sm":"","opacity-50":""},g={key:0,"text-sm":"","mt-4":""},N={"opacity-75":""},w=["to"],E=p({props:{name:null},setup(u){const l=u,m=d(),i=_(),{t:s}=k();return h(()=>{i.setNewName(l.name)}),(B,c)=>(a(),r("div",null,[y,t("p",null,n(e(s)("intro.hi",{name:l.name})),1),t("p",v,[t("em",null,n(e(s)("intro.dynamic-route")),1)]),e(i).otherNames.length?(a(),r("p",g,[t("span",N,n(e(s)("intro.aka"))+":",1),t("ul",null,[(a(!0),r(b,null,f(e(i).otherNames,o=>(a(),r("li",{key:o},[t("router-link",{to:`/hi/${o}`,replace:""},n(o),9,w)]))),128))])])):x("",!0),t("div",null,[t("button",{btn:"",m:"3 t6","text-sm":"",onClick:c[0]||(c[0]=o=>e(m).back())},n(e(s)("button.back")),1)])]))}});export{E as default};