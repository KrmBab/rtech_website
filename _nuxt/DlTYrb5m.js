const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DsdiBwgl.js","./DL8N0AZg.js","./CGaaTrXx.js","./DlAUqK2U.js","./pageTitel.B_j8azIs.css"])))=>i.map(i=>d[i]);
import{_ as p}from"./CGaaTrXx.js";import{getMdcConfigs as R}from"./bNaE6FFb.js";function V({langs:_=[],themes:C=[],bundledLangs:N={},bundledThemes:x={},getMdcConfigs:v,options:k}={}){let w,T;async function D(){var r,o;const{createHighlighterCore:s,addClassToHast:i,isSpecialLang:c,isSpecialTheme:f}=await p(async()=>{const{createHighlighterCore:n,addClassToHast:u,isSpecialLang:m,isSpecialTheme:g}=await import("./DsdiBwgl.js");return{createHighlighterCore:n,addClassToHast:u,isSpecialLang:m,isSpecialTheme:g}},__vite__mapDeps([0,1,2,3,4]),import.meta.url),{transformerNotationDiff:a,transformerNotationErrorLevel:E,transformerNotationFocus:L,transformerNotationHighlight:S}=await p(async()=>{const{transformerNotationDiff:n,transformerNotationErrorLevel:u,transformerNotationFocus:m,transformerNotationHighlight:g}=await import("./DyXibH8M.js");return{transformerNotationDiff:n,transformerNotationErrorLevel:u,transformerNotationFocus:m,transformerNotationHighlight:g}},[],import.meta.url),d=await s({langs:_,themes:C,loadWasm:()=>p(()=>import("./CG6Dc4jp.js"),[],import.meta.url)});for await(const n of await H())await((o=(r=n.shiki)==null?void 0:r.setup)==null?void 0:o.call(r,d));return{shiki:d,addClassToHast:i,isSpecialLang:c,isSpecialTheme:f,transformers:[a(),E(),L(),S()]}}async function I(){return w||(w=D()),w}async function H(){return T||(T=Promise.resolve((v==null?void 0:v())||[])),T}return async(s,i,c,f={})=>{var b,P,A;const{shiki:a,addClassToHast:E,isSpecialLang:L,isSpecialTheme:S,transformers:d}=await I(),r={defaultColor:!1,meta:{__raw:f.meta}};i==="ts-type"||i==="typescript-type"?(i="typescript",r.grammarContextCode="let a:"):(i==="vue-html"||i==="vue-template")&&(i="vue",r.grammarContextCode="<template>");const o=typeof c=="string"?{default:c}:c||{},n=a.getLoadedThemes(),u=a.getLoadedLanguages();typeof i=="string"&&!u.includes(i)&&!L(i)&&(N[i]?await a.loadLanguage(N[i]):i="text");for(const[t,e]of Object.entries(o))typeof e=="string"&&!n.includes(e)&&!S(e)&&(x[e]?await a.loadTheme(x[e]):o[t]="none");const m=[...d];for(const t of await H()){const e=typeof((b=t.shiki)==null?void 0:b.transformers)=="function"?await((P=t.shiki)==null?void 0:P.transformers(s,i,c,f)):((A=t.shiki)==null?void 0:A.transformers)||[];m.push(...e)}const h=a.codeToHast(s.trimEnd(),{lang:i,...r,themes:o,transformers:[...m,{name:"mdc:highlight",line(t,e){var l;(l=f.highlights)!=null&&l.includes(e)&&E(t,"highlight"),t.properties.line=e}},{name:"mdc:newline",line(t){if(s!=null&&s.includes(`
`)){if(t.children.length===0||t.children.length===1&&t.children[0].type==="element"&&t.children[0].children.length===1&&t.children[0].children[0].type==="text"&&t.children[0].children[0].value===""){t.children=[{type:"element",tagName:"span",properties:{emptyLinePlaceholder:!0},children:[{type:"text",value:`
`}]}];return}const e=t.children.at(-1);if((e==null?void 0:e.type)==="element"&&e.tagName==="span"){const l=e.children.at(-1);(l==null?void 0:l.type)==="text"&&(l.value+=`
`)}}}}]}).children[0],O=h.children[0],y=k==null?void 0:k.wrapperStyle;h.properties.style=y?typeof y=="string"?y:h.properties.style:"";const $=[];return Object.keys(o).forEach(t=>{const e=t!=="default"?`.${t}`:"";$.push(y?`${e} .shiki,`:"",`html .${t} .shiki span {`,`color: var(--shiki-${t});`,`background: var(--shiki-${t}-bg);`,`font-style: var(--shiki-${t}-font-style);`,`font-weight: var(--shiki-${t}-font-weight);`,`text-decoration: var(--shiki-${t}-text-decoration);`,"}"),$.push(`html${e} .shiki span {`,`color: var(--shiki-${t});`,`background: var(--shiki-${t}-bg);`,`font-style: var(--shiki-${t}-font-style);`,`font-weight: var(--shiki-${t}-font-weight);`,`text-decoration: var(--shiki-${t}-text-decoration);`,"}")}),{tree:O.children,className:Array.isArray(h.properties.class)?h.properties.class.join(" "):h.properties.class,inlineStyle:h.properties.style,style:$.join("")}}}const j={typescript:()=>p(()=>import("./BUp808Xb.js"),[],import.meta.url),ts:()=>p(()=>import("./BUp808Xb.js"),[],import.meta.url)},F={"github-light":()=>p(()=>import("./Rcb2q3L5.js"),[],import.meta.url).then(_=>_.default)},W={wrapperStyle:!0},G=V({bundledLangs:j,bundledThemes:F,options:W,getMdcConfigs:R});export{V as createShikiHighlighter,G as default};
