"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3687],{3687:(ve,k,w)=>{w.r(k),w.d(k,{scopeCss:()=>he});var f="-shadowcsshost",E="-shadowcssslotted",b="-shadowcsscontext",m=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",j=new RegExp("("+f+m,"gim"),N=new RegExp("("+b+m,"gim"),M=new RegExp("("+E+m,"gim"),h=f+"-no-combinator",D=/-shadowcsshost-no-combinator([^\s]*)/,K=[/::shadow/g,/::content/g],_=/-shadowcsshost/gim,C=e=>new RegExp(`((?<!(^@supports(.*)))|(?<={.*))(${e}\\b)`,"gim"),Y=C("::slotted"),A=C(":host"),G=C(":host-context"),I=/\/\*\s*[\s\S]*?\*\//g,F=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,Q=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,V=/([{}])/g,X=/(^.*?[^\\])??((:+)(.*)|$)/,R="%BLOCK%",O=(e,t,r)=>e.replace(t,(...n)=>{if(n[2]){const o=n[2].split(","),s=[];for(let a=0;a<o.length;a++){const c=o[a].trim();if(!c)break;s.push(r(h,c,n[3]))}return s.join(",")}return h+n[3]}),y=(e,t,r)=>e+t.replace(f,"")+r,oe=(e,t,r)=>t.indexOf(f)>-1?y(e,t,r):e+t+r+", "+t+" "+e+r,B=(e,t)=>e.replace(X,(r,n="",o,s="",a="")=>n+t+s+a),x=(e,t,r,n)=>((e,t)=>{const r=(e=>{const t=e.split(V),r=[],n=[];let o=0,s=[];for(let c=0;c<t.length;c++){const l=t[c];"}"===l&&o--,o>0?s.push(l):(s.length>0&&(n.push(s.join("")),r.push(R),s=[]),r.push(l)),"{"===l&&o++}return s.length>0&&(n.push(s.join("")),r.push(R)),{escapedString:r.join(""),blocks:n}})(e);let n=0;return r.escapedString.replace(Q,(...o)=>{const s=o[2];let a="",c=o[4],l="";c&&c.startsWith("{"+R)&&(a=r.blocks[n++],c=c.substring(8),l="{");const d=t({selector:s,content:a});return`${o[1]}${d.selector}${o[3]}${l}${d.content}${c}`})})(e,o=>{let s=o.selector,a=o.content;return"@"!==o.selector[0]?s=((e,t,r,n)=>e.split(",").map(o=>n&&o.indexOf("."+n)>-1?o.trim():((e,t)=>!(e=>(e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(t).test(e))(o,t)?((e,t,r)=>{const o="."+(t=t.replace(/\[is=([^\]]*)\]/g,(v,...i)=>i[0])),s=v=>{let i=v.trim();if(!i)return"";if(v.indexOf(h)>-1)i=((e,t,r)=>{if(_.lastIndex=0,_.test(e)){const n=`.${r}`;return e.replace(D,(o,s)=>B(s,n)).replace(_,n+" ")}return t+" "+e})(v,t,r);else{const S=v.replace(_,"");S.length>0&&(i=B(S,o))}return i},a=(e=>{const t=[];let r=0;return{content:(e=e.replace(/(\[[^\]]*\])/g,(s,a)=>{const c=`__ph-${r}__`;return t.push(a),r++,c})).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(s,a,c)=>{const l=`__ph-${r}__`;return t.push(c),r++,a+l}),placeholders:t}})(e);let u,c="",l=0;const d=/( |>|\+|~(?!=))\s*/g;let p=!((e=a.content).indexOf(h)>-1);for(;null!==(u=d.exec(e));){const v=u[1],i=e.slice(l,u.index).trim();p=p||i.indexOf(h)>-1,c+=`${p?s(i):i} ${v} `,l=d.lastIndex}const H=e.substring(l);return p=p||H.indexOf(h)>-1,c+=p?s(H):H,((e,t)=>t.replace(/__ph-(\d+)__/g,(r,n)=>e[+n]))(a.placeholders,c)})(o,t,r).trim():o.trim()).join(", "))(o.selector,t,r,n):(o.selector.startsWith("@media")||o.selector.startsWith("@supports")||o.selector.startsWith("@page")||o.selector.startsWith("@document"))&&(a=x(o.content,t,r,n)),{selector:s.replace(/\s{2,}/g," ").trim(),content:a}}),$=(e,t)=>e.replace(/-shadowcsshost-no-combinator/g,`.${t}`),he=(e,t)=>{const r=t+"-h",n=t+"-s",o=(e=>e.match(F)||[])(e),s=((e,t,r,n)=>{const o=((e,t)=>{const r="."+t+" > ",n=[];return e=e.replace(M,(...o)=>{if(o[2]){const s=o[2].trim(),c=r+s+o[3];let l="";for(let g=o[4]-1;g>=0;g--){const p=o[5][g];if("}"===p||","===p)break;l=p+l}const u=(l+c).trim(),d=`${l.trimEnd()}${c.trim()}`.trim();return u!==d&&n.push({orgSelector:u,updatedSelector:`${d}, ${u}`}),c}return h+o[3]}),{selectors:n,cssText:e}})(e=(e=>O(e,N,oe))(e=(e=>O(e,j,y))(e=(e=>e.replace(G,`$1${b}`).replace(A,`$1${f}`).replace(Y,`$1${E}`))(e))),n);return e=(e=>K.reduce((t,r)=>t.replace(r," "),e))(e=o.cssText),t&&(e=x(e,t,r,n)),{cssText:(e=(e=$(e,r)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:o.selectors.map(s=>({orgSelector:$(s.orgSelector,r),updatedSelector:$(s.updatedSelector,r)}))}})(e=(e=>e.replace(I,""))(e),t,r,n);return e=[s.cssText,...o].join("\n"),s.slottedSelectors.forEach(a=>{const c=new RegExp((e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"))(a.orgSelector),"g");e=e.replace(c,a.updatedSelector)}),e}}}]);