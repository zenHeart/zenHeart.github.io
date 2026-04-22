const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.CWmLBzon.js","assets/chunks/framework.BG8d4IEm.js"])))=>i.map(i=>d[i]);
import{d as T,c,r as m,n as A,o as i,a as H,t as h,b as E,w as g,T as Sn,e as _,_ as C,u as U,i as Jn,f as Kn,g as En,h as f,j as e,k as p,l as en,m as _n,p as M,q as R,s as pn,v as z,x as an,y as xn,z as Qn,A as Xn,F as j,B as N,C as X,D as hn,E as x,G as Vn,H as W,I as Nn,J as Z,K as Q,L as mn,M as Zn,N as ln,O as kn,P as un,Q as In,R as gn,S as ne,U as ee,V as te,W as Fn,X as Hn,Y as se,Z as oe,$ as On,a0 as on,a1 as ae,a2 as ie,a3 as le,a4 as re,a5 as ce,a6 as K}from"./framework.BG8d4IEm.js";const ue=T({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(n){return(t,s)=>(i(),c("span",{class:A(["VPBadge",n.type])},[m(t.$slots,"default",{},()=>[H(h(n.text),1)])],2))}}),de={key:0,class:"VPBackdrop"},pe=T({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(n){return(t,s)=>(i(),E(Sn,{name:"fade"},{default:g(()=>[n.show?(i(),c("div",de)):_("",!0)]),_:1}))}}),he=C(pe,[["__scopeId","data-v-b7ac1021"]]),D=U;function me(n,t){let s,o=!1;return()=>{s&&clearTimeout(s),o?s=setTimeout(n,t):(n(),(o=!0)&&setTimeout(()=>o=!1,t))}}function wn(n){return n.startsWith("/")?n:`/${n}`}function Tn(n){const{pathname:t,search:s,hash:o,protocol:a}=new URL(n,"http://a.com");if(Jn(n)||n.startsWith("#")||!a.startsWith("http")||!Kn(t))return n;const{site:r}=D(),l=t.endsWith("/")||t.endsWith(".html")?n:n.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,r.value.cleanUrls?"":".html")}${s}${o}`);return En(l)}function rn({correspondingLink:n=!1}={}){const{site:t,localeIndex:s,page:o,theme:a,hash:r}=D(),l=f(()=>{var d,k;return{label:(d=t.value.locales[s.value])==null?void 0:d.label,link:((k=t.value.locales[s.value])==null?void 0:k.link)||(s.value==="root"?"/":`/${s.value}/`)}});return{localeLinks:f(()=>Object.entries(t.value.locales).flatMap(([d,k])=>l.value.label===k.label?[]:{text:k.label,link:ge(k.link||(d==="root"?"/":`/${d}/`),a.value.i18nRouting!==!1&&n,o.value.relativePath.slice(l.value.link.length-1),!t.value.cleanUrls)+r.value})),currentLang:l}}function ge(n,t,s,o){return t?n.replace(/\/$/,"")+wn(s.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,o?".html":"")):n}const ve={class:"NotFound"},be={class:"code"},fe={class:"title"},_e={class:"quote"},ke={class:"action"},we=["href","aria-label"],ye=T({__name:"NotFound",setup(n){const{theme:t}=D(),{currentLang:s}=rn();return(o,a)=>{var r,l,u,d,k;return i(),c("div",ve,[e("p",be,h(((r=p(t).notFound)==null?void 0:r.code)??"404"),1),e("h1",fe,h(((l=p(t).notFound)==null?void 0:l.title)??"PAGE NOT FOUND"),1),a[0]||(a[0]=e("div",{class:"divider"},null,-1)),e("blockquote",_e,h(((u=p(t).notFound)==null?void 0:u.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),e("div",ke,[e("a",{class:"link",href:p(En)(p(s).link),"aria-label":((d=p(t).notFound)==null?void 0:d.linkLabel)??"go to home"},h(((k=p(t).notFound)==null?void 0:k.linkText)??"Take me home"),9,we)])])}}}),$e=C(ye,[["__scopeId","data-v-b48e8f80"]]);function zn(n,t){if(Array.isArray(n))return cn(n);if(n==null)return[];t=wn(t);const s=Object.keys(n).sort((a,r)=>r.split("/").length-a.split("/").length).find(a=>t.startsWith(wn(a))),o=s?n[s]:[];return Array.isArray(o)?cn(o):cn(o.items,o.base)}function Se(n){const t=[];let s=0;for(const o in n){const a=n[o];if(a.items){s=t.push(a);continue}t[s]||t.push({items:[]}),t[s].items.push(a)}return t}function Ee(n){const t=[];function s(o){for(const a of o)a.text&&a.link&&t.push({text:a.text,link:a.link,docFooterText:a.docFooterText}),a.items&&s(a.items)}return s(n),t}function yn(n,t){return Array.isArray(t)?t.some(s=>yn(n,s)):en(n,t.link)?!0:t.items?yn(n,t.items):!1}function cn(n,t){return[...n].map(s=>{const o={...s},a=o.base||t;return a&&o.link&&(o.link=a+o.link),o.items&&(o.items=cn(o.items,a)),o})}function Y(){const{frontmatter:n,page:t,theme:s}=D(),o=_n("(min-width: 960px)"),a=M(!1),r=f(()=>{const $=s.value.sidebar,y=t.value.relativePath;return $?zn($,y):[]}),l=M(r.value);R(r,($,y)=>{JSON.stringify($)!==JSON.stringify(y)&&(l.value=r.value)});const u=f(()=>n.value.sidebar!==!1&&l.value.length>0&&n.value.layout!=="home"),d=f(()=>k?n.value.aside==null?s.value.aside==="left":n.value.aside==="left":!1),k=f(()=>n.value.layout==="home"?!1:n.value.aside!=null?!!n.value.aside:s.value.aside!==!1),b=f(()=>u.value&&o.value),v=f(()=>u.value?Se(l.value):[]);function w(){a.value=!0}function S(){a.value=!1}function P(){a.value?S():w()}return{isOpen:a,sidebar:l,sidebarGroups:v,hasSidebar:u,hasAside:k,leftAside:d,isSidebarEnabled:b,open:w,close:S,toggle:P}}function xe(n,t){let s;pn(()=>{s=n.value?document.activeElement:void 0}),z(()=>{window.addEventListener("keyup",o)}),an(()=>{window.removeEventListener("keyup",o)});function o(a){a.key==="Escape"&&n.value&&(t(),s==null||s.focus())}}function Te(n){const{page:t,hash:s}=D(),o=M(!1),a=f(()=>n.value.collapsed!=null),r=f(()=>!!n.value.link),l=M(!1),u=()=>{l.value=en(t.value.relativePath,n.value.link)};R([t,n,s],u),z(u);const d=f(()=>l.value?!0:n.value.items?yn(t.value.relativePath,n.value.items):!1),k=f(()=>!!(n.value.items&&n.value.items.length));pn(()=>{o.value=!!(a.value&&n.value.collapsed)}),xn(()=>{(l.value||d.value)&&(o.value=!1)});function b(){a.value&&(o.value=!o.value)}return{collapsed:o,collapsible:a,isLink:r,isActiveLink:l,hasActiveLink:d,hasChildren:k,toggle:b}}function Pe(){const{hasSidebar:n}=Y(),t=_n("(min-width: 960px)"),s=_n("(min-width: 1280px)");return{isAsideEnabled:f(()=>!s.value&&!t.value?!1:n.value?s.value:t.value)}}const je=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,$n=[];function Rn(n){return typeof n.outline=="object"&&!Array.isArray(n.outline)&&n.outline.label||n.outlineTitle||"On this page"}function Pn(n){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(s=>s.id&&s.hasChildNodes()).map(s=>{const o=Number(s.tagName[1]);return{element:s,title:Ce(s),link:"#"+s.id,level:o}});return Le(t,n)}function Ce(n){let t="";for(const s of n.childNodes)if(s.nodeType===1){if(je.test(s.className))continue;t+=s.textContent}else s.nodeType===3&&(t+=s.textContent);return t.trim()}function Le(n,t){if(t===!1)return[];const s=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[o,a]=typeof s=="number"?[s,s]:s==="deep"?[2,6]:s;return Ae(n,o,a)}function Me(n,t){const{isAsideEnabled:s}=Pe(),o=me(r,100);let a=null;z(()=>{requestAnimationFrame(r),window.addEventListener("scroll",o)}),Qn(()=>{l(location.hash)}),an(()=>{window.removeEventListener("scroll",o)});function r(){if(!s.value)return;const u=window.scrollY,d=window.innerHeight,k=document.body.offsetHeight,b=Math.abs(u+d-k)<1,v=$n.map(({element:S,link:P})=>({link:P,top:Be(S)})).filter(({top:S})=>!Number.isNaN(S)).sort((S,P)=>S.top-P.top);if(!v.length){l(null);return}if(u<1){l(null);return}if(b){l(v[v.length-1].link);return}let w=null;for(const{link:S,top:P}of v){if(P>u+Xn()+4)break;w=S}l(w)}function l(u){a&&a.classList.remove("active"),u==null?a=null:a=n.value.querySelector(`a[href="${decodeURIComponent(u)}"]`);const d=a;d?(d.classList.add("active"),t.value.style.top=d.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function Be(n){let t=0;for(;n!==document.body;){if(n===null)return NaN;t+=n.offsetTop,n=n.offsetParent}return t}function Ae(n,t,s){$n.length=0;const o=[],a=[];return n.forEach(r=>{const l={...r,children:[]};let u=a[a.length-1];for(;u&&u.level>=l.level;)a.pop(),u=a[a.length-1];if(l.element.classList.contains("ignore-header")||u&&"shouldIgnore"in u){a.push({level:l.level,shouldIgnore:!0});return}l.level>s||l.level<t||($n.push({element:l.element,link:l.link}),u?u.children.push(l):o.push(l),a.push(l))}),o}const De=["href","title"],Ve=T({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(n){function t({target:s}){const o=s.href.split("#")[1],a=document.getElementById(decodeURIComponent(o));a==null||a.focus({preventScroll:!0})}return(s,o)=>{const a=X("VPDocOutlineItem",!0);return i(),c("ul",{class:A(["VPDocOutlineItem",n.root?"root":"nested"])},[(i(!0),c(j,null,N(n.headers,({children:r,link:l,title:u})=>(i(),c("li",null,[e("a",{class:"outline-link",href:l,onClick:t,title:u},h(u),9,De),r!=null&&r.length?(i(),E(a,{key:0,headers:r},null,8,["headers"])):_("",!0)]))),256))],2)}}}),Un=C(Ve,[["__scopeId","data-v-1bb50e2f"]]),Ne={class:"content"},Ie={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Fe=T({__name:"VPDocAsideOutline",setup(n){const{frontmatter:t,theme:s}=D(),o=Vn([]);hn(()=>{o.value=Pn(t.value.outline??s.value.outline)});const a=M(),r=M();return Me(a,r),(l,u)=>(i(),c("nav",{"aria-labelledby":"doc-outline-aria-label",class:A(["VPDocAsideOutline",{"has-outline":o.value.length>0}]),ref_key:"container",ref:a},[e("div",Ne,[e("div",{class:"outline-marker",ref_key:"marker",ref:r},null,512),e("div",Ie,h(p(Rn)(p(s))),1),x(Un,{headers:o.value,root:!0},null,8,["headers"])])],2))}}),He=C(Fe,[["__scopeId","data-v-1b8e9579"]]),Oe={class:"VPDocAsideCarbonAds"},ze=T({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(n){const t=()=>null;return(s,o)=>(i(),c("div",Oe,[x(p(t),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),Re={class:"VPDocAside"},Ue=T({__name:"VPDocAside",setup(n){const{theme:t}=D();return(s,o)=>(i(),c("div",Re,[m(s.$slots,"aside-top",{},void 0,!0),m(s.$slots,"aside-outline-before",{},void 0,!0),x(He),m(s.$slots,"aside-outline-after",{},void 0,!0),o[0]||(o[0]=e("div",{class:"spacer"},null,-1)),m(s.$slots,"aside-ads-before",{},void 0,!0),p(t).carbonAds?(i(),E(ze,{key:0,"carbon-ads":p(t).carbonAds},null,8,["carbon-ads"])):_("",!0),m(s.$slots,"aside-ads-after",{},void 0,!0),m(s.$slots,"aside-bottom",{},void 0,!0)]))}}),qe=C(Ue,[["__scopeId","data-v-f7de1d3b"]]);function We(){const{theme:n,page:t}=D();return f(()=>{const{text:s="Edit this page",pattern:o=""}=n.value.editLink||{};let a;return typeof o=="function"?a=o(t.value):a=o.replace(/:path/g,t.value.filePath),{url:a,text:s}})}function Ge(){const{page:n,theme:t,frontmatter:s}=D();return f(()=>{var k,b,v,w,S,P,$,y;const o=zn(t.value.sidebar,n.value.relativePath),a=Ee(o),r=Ye(a,L=>L.link.replace(/[?#].*$/,"")),l=r.findIndex(L=>en(n.value.relativePath,L.link)),u=((k=t.value.docFooter)==null?void 0:k.prev)===!1&&!s.value.prev||s.value.prev===!1,d=((b=t.value.docFooter)==null?void 0:b.next)===!1&&!s.value.next||s.value.next===!1;return{prev:u?void 0:{text:(typeof s.value.prev=="string"?s.value.prev:typeof s.value.prev=="object"?s.value.prev.text:void 0)??((v=r[l-1])==null?void 0:v.docFooterText)??((w=r[l-1])==null?void 0:w.text),link:(typeof s.value.prev=="object"?s.value.prev.link:void 0)??((S=r[l-1])==null?void 0:S.link)},next:d?void 0:{text:(typeof s.value.next=="string"?s.value.next:typeof s.value.next=="object"?s.value.next.text:void 0)??((P=r[l+1])==null?void 0:P.docFooterText)??(($=r[l+1])==null?void 0:$.text),link:(typeof s.value.next=="object"?s.value.next.link:void 0)??((y=r[l+1])==null?void 0:y.link)}}})}function Ye(n,t){const s=new Set;return n.filter(o=>{const a=t(o);return s.has(a)?!1:s.add(a)})}const G=T({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(n){const t=n,s=f(()=>t.tag??(t.href?"a":"span")),o=f(()=>t.href&&Nn.test(t.href)||t.target==="_blank");return(a,r)=>(i(),E(W(s.value),{class:A(["VPLink",{link:n.href,"vp-external-link-icon":o.value,"no-icon":n.noIcon}]),href:n.href?p(Tn)(n.href):void 0,target:n.target??(o.value?"_blank":void 0),rel:n.rel??(o.value?"noreferrer":void 0)},{default:g(()=>[m(a.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Je={class:"VPLastUpdated"},Ke=["datetime"],Qe=T({__name:"VPDocFooterLastUpdated",setup(n){const{theme:t,page:s,lang:o}=D(),a=f(()=>new Date(s.value.lastUpdated)),r=f(()=>a.value.toISOString()),l=M("");return z(()=>{pn(()=>{var u,d,k;l.value=new Intl.DateTimeFormat((d=(u=t.value.lastUpdated)==null?void 0:u.formatOptions)!=null&&d.forceLocale?o.value:void 0,((k=t.value.lastUpdated)==null?void 0:k.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(a.value)})}),(u,d)=>{var k;return i(),c("p",Je,[H(h(((k=p(t).lastUpdated)==null?void 0:k.text)||p(t).lastUpdatedText||"Last updated")+": ",1),e("time",{datetime:r.value},h(l.value),9,Ke)])}}}),Xe=C(Qe,[["__scopeId","data-v-b2389d5d"]]),Ze={key:0,class:"VPDocFooter"},nt={key:0,class:"edit-info"},et={key:0,class:"edit-link"},tt={key:1,class:"last-updated"},st={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},ot={class:"pager"},at=["innerHTML"],it=["innerHTML"],lt={class:"pager"},rt=["innerHTML"],ct=["innerHTML"],ut=T({__name:"VPDocFooter",setup(n){const{theme:t,page:s,frontmatter:o}=D(),a=We(),r=Ge(),l=f(()=>t.value.editLink&&o.value.editLink!==!1),u=f(()=>s.value.lastUpdated),d=f(()=>l.value||u.value||r.value.prev||r.value.next);return(k,b)=>{var v,w,S,P;return d.value?(i(),c("footer",Ze,[m(k.$slots,"doc-footer-before",{},void 0,!0),l.value||u.value?(i(),c("div",nt,[l.value?(i(),c("div",et,[x(G,{class:"edit-link-button",href:p(a).url,"no-icon":!0},{default:g(()=>[b[0]||(b[0]=e("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),H(" "+h(p(a).text),1)]),_:1},8,["href"])])):_("",!0),u.value?(i(),c("div",tt,[x(Xe)])):_("",!0)])):_("",!0),(v=p(r).prev)!=null&&v.link||(w=p(r).next)!=null&&w.link?(i(),c("nav",st,[b[1]||(b[1]=e("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),e("div",ot,[(S=p(r).prev)!=null&&S.link?(i(),E(G,{key:0,class:"pager-link prev",href:p(r).prev.link},{default:g(()=>{var $;return[e("span",{class:"desc",innerHTML:(($=p(t).docFooter)==null?void 0:$.prev)||"Previous page"},null,8,at),e("span",{class:"title",innerHTML:p(r).prev.text},null,8,it)]}),_:1},8,["href"])):_("",!0)]),e("div",lt,[(P=p(r).next)!=null&&P.link?(i(),E(G,{key:0,class:"pager-link next",href:p(r).next.link},{default:g(()=>{var $;return[e("span",{class:"desc",innerHTML:(($=p(t).docFooter)==null?void 0:$.next)||"Next page"},null,8,rt),e("span",{class:"title",innerHTML:p(r).next.text},null,8,ct)]}),_:1},8,["href"])):_("",!0)])])):_("",!0)])):_("",!0)}}}),dt=C(ut,[["__scopeId","data-v-9a0d6f1a"]]),pt={class:"container"},ht={class:"aside-container"},mt={class:"aside-content"},gt={class:"content"},vt={class:"content-container"},bt={class:"main"},ft=T({__name:"VPDoc",setup(n){const{theme:t}=D(),s=Z(),{hasSidebar:o,hasAside:a,leftAside:r}=Y(),l=f(()=>s.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(u,d)=>{const k=X("Content");return i(),c("div",{class:A(["VPDoc",{"has-sidebar":p(o),"has-aside":p(a)}])},[m(u.$slots,"doc-top",{},void 0,!0),e("div",pt,[p(a)?(i(),c("div",{key:0,class:A(["aside",{"left-aside":p(r)}])},[d[0]||(d[0]=e("div",{class:"aside-curtain"},null,-1)),e("div",ht,[e("div",mt,[x(qe,null,{"aside-top":g(()=>[m(u.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":g(()=>[m(u.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":g(()=>[m(u.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":g(()=>[m(u.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":g(()=>[m(u.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":g(()=>[m(u.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):_("",!0),e("div",gt,[e("div",vt,[m(u.$slots,"doc-before",{},void 0,!0),e("main",bt,[x(k,{class:A(["vp-doc",[l.value,p(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),x(dt,null,{"doc-footer-before":g(()=>[m(u.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),m(u.$slots,"doc-after",{},void 0,!0)])])]),m(u.$slots,"doc-bottom",{},void 0,!0)],2)}}}),_t=C(ft,[["__scopeId","data-v-3f074082"]]),kt=T({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(n){const t=n,s=f(()=>t.href&&Nn.test(t.href)),o=f(()=>t.tag||(t.href?"a":"button"));return(a,r)=>(i(),E(W(o.value),{class:A(["VPButton",[n.size,n.theme]]),href:n.href?p(Tn)(n.href):void 0,target:t.target??(s.value?"_blank":void 0),rel:t.rel??(s.value?"noreferrer":void 0)},{default:g(()=>[H(h(n.text),1)]),_:1},8,["class","href","target","rel"]))}}),wt=C(kt,[["__scopeId","data-v-f948f00d"]]),yt=["src","alt"],$t=T({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(n){return(t,s)=>{const o=X("VPImage",!0);return n.image?(i(),c(j,{key:0},[typeof n.image=="string"||"src"in n.image?(i(),c("img",Q({key:0,class:"VPImage"},typeof n.image=="string"?t.$attrs:{...n.image,...t.$attrs},{src:p(En)(typeof n.image=="string"?n.image:n.image.src),alt:n.alt??(typeof n.image=="string"?"":n.image.alt||"")}),null,16,yt)):(i(),c(j,{key:1},[x(o,Q({class:"dark",image:n.image.dark,alt:n.image.alt},t.$attrs),null,16,["image","alt"]),x(o,Q({class:"light",image:n.image.light,alt:n.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):_("",!0)}}}),dn=C($t,[["__scopeId","data-v-2e887340"]]),St={class:"container"},Et={class:"main"},xt={class:"heading"},Tt=["innerHTML"],Pt=["innerHTML"],jt=["innerHTML"],Ct={key:0,class:"actions"},Lt={key:0,class:"image"},Mt={class:"image-container"},Bt=T({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(n){const t=mn("hero-image-slot-exists");return(s,o)=>(i(),c("div",{class:A(["VPHero",{"has-image":n.image||p(t)}])},[e("div",St,[e("div",Et,[m(s.$slots,"home-hero-info-before",{},void 0,!0),m(s.$slots,"home-hero-info",{},()=>[e("h1",xt,[n.name?(i(),c("span",{key:0,innerHTML:n.name,class:"name clip"},null,8,Tt)):_("",!0),n.text?(i(),c("span",{key:1,innerHTML:n.text,class:"text"},null,8,Pt)):_("",!0)]),n.tagline?(i(),c("p",{key:0,innerHTML:n.tagline,class:"tagline"},null,8,jt)):_("",!0)],!0),m(s.$slots,"home-hero-info-after",{},void 0,!0),n.actions?(i(),c("div",Ct,[(i(!0),c(j,null,N(n.actions,a=>(i(),c("div",{key:a.link,class:"action"},[x(wt,{tag:"a",size:"medium",theme:a.theme,text:a.text,href:a.link,target:a.target,rel:a.rel},null,8,["theme","text","href","target","rel"])]))),128))])):_("",!0),m(s.$slots,"home-hero-actions-after",{},void 0,!0)]),n.image||p(t)?(i(),c("div",Lt,[e("div",Mt,[o[0]||(o[0]=e("div",{class:"image-bg"},null,-1)),m(s.$slots,"home-hero-image",{},()=>[n.image?(i(),E(dn,{key:0,class:"image-src",image:n.image},null,8,["image"])):_("",!0)],!0)])])):_("",!0)])],2))}}),At=C(Bt,[["__scopeId","data-v-83bd4504"]]),Dt=T({__name:"VPHomeHero",setup(n){const{frontmatter:t}=D();return(s,o)=>p(t).hero?(i(),E(At,{key:0,class:"VPHomeHero",name:p(t).hero.name,text:p(t).hero.text,tagline:p(t).hero.tagline,image:p(t).hero.image,actions:p(t).hero.actions},{"home-hero-info-before":g(()=>[m(s.$slots,"home-hero-info-before")]),"home-hero-info":g(()=>[m(s.$slots,"home-hero-info")]),"home-hero-info-after":g(()=>[m(s.$slots,"home-hero-info-after")]),"home-hero-actions-after":g(()=>[m(s.$slots,"home-hero-actions-after")]),"home-hero-image":g(()=>[m(s.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):_("",!0)}}),Vt={class:"box"},Nt={key:0,class:"icon"},It=["innerHTML"],Ft=["innerHTML"],Ht=["innerHTML"],Ot={key:4,class:"link-text"},zt={class:"link-text-value"},Rt=T({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(n){return(t,s)=>(i(),E(G,{class:"VPFeature",href:n.link,rel:n.rel,target:n.target,"no-icon":!0,tag:n.link?"a":"div"},{default:g(()=>[e("article",Vt,[typeof n.icon=="object"&&n.icon.wrap?(i(),c("div",Nt,[x(dn,{image:n.icon,alt:n.icon.alt,height:n.icon.height||48,width:n.icon.width||48},null,8,["image","alt","height","width"])])):typeof n.icon=="object"?(i(),E(dn,{key:1,image:n.icon,alt:n.icon.alt,height:n.icon.height||48,width:n.icon.width||48},null,8,["image","alt","height","width"])):n.icon?(i(),c("div",{key:2,class:"icon",innerHTML:n.icon},null,8,It)):_("",!0),e("h2",{class:"title",innerHTML:n.title},null,8,Ft),n.details?(i(),c("p",{key:3,class:"details",innerHTML:n.details},null,8,Ht)):_("",!0),n.linkText?(i(),c("div",Ot,[e("p",zt,[H(h(n.linkText)+" ",1),s[0]||(s[0]=e("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):_("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Ut=C(Rt,[["__scopeId","data-v-86e8a3d6"]]),qt={key:0,class:"VPFeatures"},Wt={class:"container"},Gt={class:"items"},Yt=T({__name:"VPFeatures",props:{features:{}},setup(n){const t=n,s=f(()=>{const o=t.features.length;if(o){if(o===2)return"grid-2";if(o===3)return"grid-3";if(o%3===0)return"grid-6";if(o>3)return"grid-4"}else return});return(o,a)=>n.features?(i(),c("div",qt,[e("div",Wt,[e("div",Gt,[(i(!0),c(j,null,N(n.features,r=>(i(),c("div",{key:r.title,class:A(["item",[s.value]])},[x(Ut,{icon:r.icon,title:r.title,details:r.details,link:r.link,"link-text":r.linkText,rel:r.rel,target:r.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):_("",!0)}}),Jt=C(Yt,[["__scopeId","data-v-6f850371"]]),Kt=T({__name:"VPHomeFeatures",setup(n){const{frontmatter:t}=D();return(s,o)=>p(t).features?(i(),E(Jt,{key:0,class:"VPHomeFeatures",features:p(t).features},null,8,["features"])):_("",!0)}}),Qt=T({__name:"VPHomeContent",setup(n){const{width:t}=Zn({initialWidth:0,includeScrollbar:!1});return(s,o)=>(i(),c("div",{class:"vp-doc container",style:ln(p(t)?{"--vp-offset":`calc(50% - ${p(t)/2}px)`}:{})},[m(s.$slots,"default",{},void 0,!0)],4))}}),Xt=C(Qt,[["__scopeId","data-v-5c770f1e"]]),Zt=T({__name:"VPHome",setup(n){const{frontmatter:t,theme:s}=D();return(o,a)=>{const r=X("Content");return i(),c("div",{class:A(["VPHome",{"external-link-icon-enabled":p(s).externalLinkIcon}])},[m(o.$slots,"home-hero-before",{},void 0,!0),x(Dt,null,{"home-hero-info-before":g(()=>[m(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":g(()=>[m(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":g(()=>[m(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":g(()=>[m(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":g(()=>[m(o.$slots,"home-hero-image",{},void 0,!0)]),_:3}),m(o.$slots,"home-hero-after",{},void 0,!0),m(o.$slots,"home-features-before",{},void 0,!0),x(Kt),m(o.$slots,"home-features-after",{},void 0,!0),p(t).markdownStyles!==!1?(i(),E(Xt,{key:0},{default:g(()=>[x(r)]),_:1})):(i(),E(r,{key:1}))],2)}}}),ns=C(Zt,[["__scopeId","data-v-cebdd215"]]),es={},ts={class:"VPPage"};function ss(n,t){const s=X("Content");return i(),c("div",ts,[m(n.$slots,"page-top"),x(s),m(n.$slots,"page-bottom")])}const os=C(es,[["render",ss]]),as=T({__name:"VPContent",setup(n){const{page:t,frontmatter:s}=D(),{hasSidebar:o}=Y();return(a,r)=>(i(),c("div",{class:A(["VPContent",{"has-sidebar":p(o),"is-home":p(s).layout==="home"}]),id:"VPContent"},[p(t).isNotFound?m(a.$slots,"not-found",{key:0},()=>[x($e)],!0):p(s).layout==="page"?(i(),E(os,{key:1},{"page-top":g(()=>[m(a.$slots,"page-top",{},void 0,!0)]),"page-bottom":g(()=>[m(a.$slots,"page-bottom",{},void 0,!0)]),_:3})):p(s).layout==="home"?(i(),E(ns,{key:2},{"home-hero-before":g(()=>[m(a.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":g(()=>[m(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":g(()=>[m(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":g(()=>[m(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":g(()=>[m(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":g(()=>[m(a.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":g(()=>[m(a.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":g(()=>[m(a.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":g(()=>[m(a.$slots,"home-features-after",{},void 0,!0)]),_:3})):p(s).layout&&p(s).layout!=="doc"?(i(),E(W(p(s).layout),{key:3})):(i(),E(_t,{key:4},{"doc-top":g(()=>[m(a.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":g(()=>[m(a.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":g(()=>[m(a.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":g(()=>[m(a.$slots,"doc-before",{},void 0,!0)]),"doc-after":g(()=>[m(a.$slots,"doc-after",{},void 0,!0)]),"aside-top":g(()=>[m(a.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":g(()=>[m(a.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":g(()=>[m(a.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":g(()=>[m(a.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":g(()=>[m(a.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":g(()=>[m(a.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),is=C(as,[["__scopeId","data-v-18922324"]]),ls={class:"container"},rs=["innerHTML"],cs=["innerHTML"],us=T({__name:"VPFooter",setup(n){const{theme:t,frontmatter:s}=D(),{hasSidebar:o}=Y();return(a,r)=>p(t).footer&&p(s).footer!==!1?(i(),c("footer",{key:0,class:A(["VPFooter",{"has-sidebar":p(o)}])},[e("div",ls,[p(t).footer.message?(i(),c("p",{key:0,class:"message",innerHTML:p(t).footer.message},null,8,rs)):_("",!0),p(t).footer.copyright?(i(),c("p",{key:1,class:"copyright",innerHTML:p(t).footer.copyright},null,8,cs)):_("",!0)])],2)):_("",!0)}}),ds=C(us,[["__scopeId","data-v-06d71405"]]);function ps(){const{theme:n,frontmatter:t}=D(),s=Vn([]),o=f(()=>s.value.length>0);return hn(()=>{s.value=Pn(t.value.outline??n.value.outline)}),{headers:s,hasLocalNav:o}}const hs={class:"menu-text"},ms={class:"header"},gs={class:"outline"},vs=T({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(n){const t=n,{theme:s}=D(),o=M(!1),a=M(0),r=M(),l=M();function u(v){var w;(w=r.value)!=null&&w.contains(v.target)||(o.value=!1)}R(o,v=>{if(v){document.addEventListener("click",u);return}document.removeEventListener("click",u)}),kn("Escape",()=>{o.value=!1}),hn(()=>{o.value=!1});function d(){o.value=!o.value,a.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function k(v){v.target.classList.contains("outline-link")&&(l.value&&(l.value.style.transition="none"),un(()=>{o.value=!1}))}function b(){o.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(v,w)=>(i(),c("div",{class:"VPLocalNavOutlineDropdown",style:ln({"--vp-vh":a.value+"px"}),ref_key:"main",ref:r},[n.headers.length>0?(i(),c("button",{key:0,onClick:d,class:A({open:o.value})},[e("span",hs,h(p(Rn)(p(s))),1),w[0]||(w[0]=e("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(i(),c("button",{key:1,onClick:b},h(p(s).returnToTopLabel||"Return to top"),1)),x(Sn,{name:"flyout"},{default:g(()=>[o.value?(i(),c("div",{key:0,ref_key:"items",ref:l,class:"items",onClick:k},[e("div",ms,[e("a",{class:"top-link",href:"#",onClick:b},h(p(s).returnToTopLabel||"Return to top"),1)]),e("div",gs,[x(Un,{headers:n.headers},null,8,["headers"])])],512)):_("",!0)]),_:1})],4))}}),bs=C(vs,[["__scopeId","data-v-801c28d8"]]),fs={class:"container"},_s=["aria-expanded"],ks={class:"menu-text"},ws=T({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(n){const{theme:t,frontmatter:s}=D(),{hasSidebar:o}=Y(),{headers:a}=ps(),{y:r}=In(),l=M(0);z(()=>{l.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),hn(()=>{a.value=Pn(s.value.outline??t.value.outline)});const u=f(()=>a.value.length===0),d=f(()=>u.value&&!o.value),k=f(()=>({VPLocalNav:!0,"has-sidebar":o.value,empty:u.value,fixed:d.value}));return(b,v)=>p(s).layout!=="home"&&(!d.value||p(r)>=l.value)?(i(),c("div",{key:0,class:A(k.value)},[e("div",fs,[p(o)?(i(),c("button",{key:0,class:"menu","aria-expanded":n.open,"aria-controls":"VPSidebarNav",onClick:v[0]||(v[0]=w=>b.$emit("open-menu"))},[v[1]||(v[1]=e("span",{class:"vpi-align-left menu-icon"},null,-1)),e("span",ks,h(p(t).sidebarMenuLabel||"Menu"),1)],8,_s)):_("",!0),x(bs,{headers:p(a),navHeight:l.value},null,8,["headers","navHeight"])])],2)):_("",!0)}}),ys=C(ws,[["__scopeId","data-v-7c89ae68"]]);function $s(){const n=M(!1);function t(){n.value=!0,window.addEventListener("resize",a)}function s(){n.value=!1,window.removeEventListener("resize",a)}function o(){n.value?s():t()}function a(){window.outerWidth>=768&&s()}const r=Z();return R(()=>r.path,s),{isScreenOpen:n,openScreen:t,closeScreen:s,toggleScreen:o}}const Ss={},Es={class:"VPSwitch",type:"button",role:"switch"},xs={class:"check"},Ts={key:0,class:"icon"};function Ps(n,t){return i(),c("button",Es,[e("span",xs,[n.$slots.default?(i(),c("span",Ts,[m(n.$slots,"default",{},void 0,!0)])):_("",!0)])])}const js=C(Ss,[["render",Ps],["__scopeId","data-v-17e19c2b"]]),Cs=T({__name:"VPSwitchAppearance",setup(n){const{isDark:t,theme:s}=D(),o=mn("toggle-appearance",()=>{t.value=!t.value}),a=M("");return xn(()=>{a.value=t.value?s.value.lightModeSwitchTitle||"Switch to light theme":s.value.darkModeSwitchTitle||"Switch to dark theme"}),(r,l)=>(i(),E(js,{title:a.value,class:"VPSwitchAppearance","aria-checked":p(t),onClick:p(o)},{default:g(()=>[...l[0]||(l[0]=[e("span",{class:"vpi-sun sun"},null,-1),e("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),jn=C(Cs,[["__scopeId","data-v-c5990faa"]]),Ls={key:0,class:"VPNavBarAppearance"},Ms=T({__name:"VPNavBarAppearance",setup(n){const{site:t}=D();return(s,o)=>p(t).appearance&&p(t).appearance!=="force-dark"&&p(t).appearance!=="force-auto"?(i(),c("div",Ls,[x(jn)])):_("",!0)}}),Bs=C(Ms,[["__scopeId","data-v-fc2400f8"]]),Cn=M();let qn=!1,bn=0;function As(n){const t=M(!1);if(gn){!qn&&Ds(),bn++;const s=R(Cn,o=>{var a,r,l;o===n.el.value||(a=n.el.value)!=null&&a.contains(o)?(t.value=!0,(r=n.onFocus)==null||r.call(n)):(t.value=!1,(l=n.onBlur)==null||l.call(n))});an(()=>{s(),bn--,bn||Vs()})}return ne(t)}function Ds(){document.addEventListener("focusin",Wn),qn=!0,Cn.value=document.activeElement}function Vs(){document.removeEventListener("focusin",Wn)}function Wn(){Cn.value=document.activeElement}const Ns={class:"VPMenuLink"},Is=["innerHTML"],Fs=T({__name:"VPMenuLink",props:{item:{}},setup(n){const{page:t}=D();return(s,o)=>(i(),c("div",Ns,[x(G,{class:A({active:p(en)(p(t).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon},{default:g(()=>[e("span",{innerHTML:n.item.text},null,8,Is)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),vn=C(Fs,[["__scopeId","data-v-00f3014d"]]),Hs={class:"VPMenuGroup"},Os={key:0,class:"title"},zs=T({__name:"VPMenuGroup",props:{text:{},items:{}},setup(n){return(t,s)=>(i(),c("div",Hs,[n.text?(i(),c("p",Os,h(n.text),1)):_("",!0),(i(!0),c(j,null,N(n.items,o=>(i(),c(j,null,["link"in o?(i(),E(vn,{key:0,item:o},null,8,["item"])):_("",!0)],64))),256))]))}}),Rs=C(zs,[["__scopeId","data-v-26cc089b"]]),Us={class:"VPMenu"},qs={key:0,class:"items"},Ws=T({__name:"VPMenu",props:{items:{}},setup(n){return(t,s)=>(i(),c("div",Us,[n.items?(i(),c("div",qs,[(i(!0),c(j,null,N(n.items,o=>(i(),c(j,{key:JSON.stringify(o)},["link"in o?(i(),E(vn,{key:0,item:o},null,8,["item"])):"component"in o?(i(),E(W(o.component),Q({key:1,ref_for:!0},o.props),null,16)):(i(),E(Rs,{key:2,text:o.text,items:o.items},null,8,["text","items"]))],64))),128))])):_("",!0),m(t.$slots,"default",{},void 0,!0)]))}}),Gs=C(Ws,[["__scopeId","data-v-d4cc9330"]]),Ys=["aria-expanded","aria-label"],Js={key:0,class:"text"},Ks=["innerHTML"],Qs={key:1,class:"vpi-more-horizontal icon"},Xs={class:"menu"},Zs=T({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(n){const t=M(!1),s=M();As({el:s,onBlur:o});function o(){t.value=!1}return(a,r)=>(i(),c("div",{class:"VPFlyout",ref_key:"el",ref:s,onMouseenter:r[1]||(r[1]=l=>t.value=!0),onMouseleave:r[2]||(r[2]=l=>t.value=!1)},[e("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":n.label,onClick:r[0]||(r[0]=l=>t.value=!t.value)},[n.button||n.icon?(i(),c("span",Js,[n.icon?(i(),c("span",{key:0,class:A([n.icon,"option-icon"])},null,2)):_("",!0),n.button?(i(),c("span",{key:1,innerHTML:n.button},null,8,Ks)):_("",!0),r[3]||(r[3]=e("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(i(),c("span",Qs))],8,Ys),e("div",Xs,[x(Gs,{items:n.items},{default:g(()=>[m(a.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Ln=C(Zs,[["__scopeId","data-v-234f5712"]]),no=["href","aria-label","innerHTML"],eo=T({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(n){const t=n,s=M();z(async()=>{var r;await un();const a=(r=s.value)==null?void 0:r.children[0];a instanceof HTMLElement&&a.className.startsWith("vpi-social-")&&(getComputedStyle(a).maskImage||getComputedStyle(a).webkitMaskImage)==="none"&&a.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${t.icon}.svg')`)});const o=f(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}"></span>`);return(a,r)=>(i(),c("a",{ref_key:"el",ref:s,class:"VPSocialLink no-icon",href:n.link,"aria-label":n.ariaLabel??(typeof n.icon=="string"?n.icon:""),target:"_blank",rel:"noopener",innerHTML:o.value},null,8,no))}}),to=C(eo,[["__scopeId","data-v-cb9d65cd"]]),so={class:"VPSocialLinks"},oo=T({__name:"VPSocialLinks",props:{links:{}},setup(n){return(t,s)=>(i(),c("div",so,[(i(!0),c(j,null,N(n.links,({link:o,icon:a,ariaLabel:r})=>(i(),E(to,{key:o,icon:a,link:o,ariaLabel:r},null,8,["icon","link","ariaLabel"]))),128))]))}}),Mn=C(oo,[["__scopeId","data-v-6f57d3b5"]]),ao={key:0,class:"group translations"},io={class:"trans-title"},lo={key:1,class:"group"},ro={class:"item appearance"},co={class:"label"},uo={class:"appearance-action"},po={key:2,class:"group"},ho={class:"item social-links"},mo=T({__name:"VPNavBarExtra",setup(n){const{site:t,theme:s}=D(),{localeLinks:o,currentLang:a}=rn({correspondingLink:!0}),r=f(()=>o.value.length&&a.value.label||t.value.appearance||s.value.socialLinks);return(l,u)=>r.value?(i(),E(Ln,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:g(()=>[p(o).length&&p(a).label?(i(),c("div",ao,[e("p",io,h(p(a).label),1),(i(!0),c(j,null,N(p(o),d=>(i(),E(vn,{key:d.link,item:d},null,8,["item"]))),128))])):_("",!0),p(t).appearance&&p(t).appearance!=="force-dark"&&p(t).appearance!=="force-auto"?(i(),c("div",lo,[e("div",ro,[e("p",co,h(p(s).darkModeSwitchLabel||"Appearance"),1),e("div",uo,[x(jn)])])])):_("",!0),p(s).socialLinks?(i(),c("div",po,[e("div",ho,[x(Mn,{class:"social-links-list",links:p(s).socialLinks},null,8,["links"])])])):_("",!0)]),_:1})):_("",!0)}}),go=C(mo,[["__scopeId","data-v-80cd8c2c"]]),vo=["aria-expanded"],bo=T({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(n){return(t,s)=>(i(),c("button",{type:"button",class:A(["VPNavBarHamburger",{active:n.active}]),"aria-label":"mobile navigation","aria-expanded":n.active,"aria-controls":"VPNavScreen",onClick:s[0]||(s[0]=o=>t.$emit("click"))},[...s[1]||(s[1]=[e("span",{class:"container"},[e("span",{class:"top"}),e("span",{class:"middle"}),e("span",{class:"bottom"})],-1)])],10,vo))}}),fo=C(bo,[["__scopeId","data-v-3e4dddb7"]]),_o=["innerHTML"],ko=T({__name:"VPNavBarMenuLink",props:{item:{}},setup(n){const{page:t}=D();return(s,o)=>(i(),E(G,{class:A({VPNavBarMenuLink:!0,active:p(en)(p(t).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,tabindex:"0"},{default:g(()=>[e("span",{innerHTML:n.item.text},null,8,_o)]),_:1},8,["class","href","target","rel","no-icon"]))}}),wo=C(ko,[["__scopeId","data-v-7b67baa4"]]),yo=T({__name:"VPNavBarMenuGroup",props:{item:{}},setup(n){const t=n,{page:s}=D(),o=r=>"component"in r?!1:"link"in r?en(s.value.relativePath,r.link,!!t.item.activeMatch):r.items.some(o),a=f(()=>o(t.item));return(r,l)=>(i(),E(Ln,{class:A({VPNavBarMenuGroup:!0,active:p(en)(p(s).relativePath,n.item.activeMatch,!!n.item.activeMatch)||a.value}),button:n.item.text,items:n.item.items},null,8,["class","button","items"]))}}),$o={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},So=T({__name:"VPNavBarMenu",setup(n){const{theme:t}=D();return(s,o)=>p(t).nav?(i(),c("nav",$o,[o[0]||(o[0]=e("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(i(!0),c(j,null,N(p(t).nav,a=>(i(),c(j,{key:JSON.stringify(a)},["link"in a?(i(),E(wo,{key:0,item:a},null,8,["item"])):"component"in a?(i(),E(W(a.component),Q({key:1,ref_for:!0},a.props),null,16)):(i(),E(yo,{key:2,item:a},null,8,["item"]))],64))),128))])):_("",!0)}}),Eo=C(So,[["__scopeId","data-v-152ed661"]]);function xo(n){const{localeIndex:t,theme:s}=D();function o(a){var P,$,y;const r=a.split("."),l=(P=s.value.search)==null?void 0:P.options,u=l&&typeof l=="object",d=u&&((y=($=l.locales)==null?void 0:$[t.value])==null?void 0:y.translations)||null,k=u&&l.translations||null;let b=d,v=k,w=n;const S=r.pop();for(const L of r){let I=null;const B=w==null?void 0:w[L];B&&(I=w=B);const V=v==null?void 0:v[L];V&&(I=v=V);const F=b==null?void 0:b[L];F&&(I=b=F),B||(w=I),V||(v=I),F||(b=I)}return(b==null?void 0:b[S])??(v==null?void 0:v[S])??(w==null?void 0:w[S])??""}return o}const To=["aria-label"],Po={class:"DocSearch-Button-Container"},jo={class:"DocSearch-Button-Placeholder"},An=T({__name:"VPNavBarSearchButton",setup(n){const s=xo({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(o,a)=>(i(),c("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":p(s)("button.buttonAriaLabel")},[e("span",Po,[a[0]||(a[0]=e("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),e("span",jo,h(p(s)("button.buttonText")),1)]),a[1]||(a[1]=e("span",{class:"DocSearch-Button-Keys"},[e("kbd",{class:"DocSearch-Button-Key"}),e("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,To))}}),Co={class:"VPNavBarSearch"},Lo={id:"local-search"},Mo={key:1,id:"docsearch"},Bo=T({__name:"VPNavBarSearch",setup(n){const t=ee(()=>te(()=>import("./VPLocalSearchBox.CWmLBzon.js"),__vite__mapDeps([0,1]))),s=()=>null,{theme:o}=D(),a=M(!1),r=M(!1);z(()=>{});function l(){a.value||(a.value=!0,setTimeout(u,16))}function u(){const v=new Event("keydown");v.key="k",v.metaKey=!0,window.dispatchEvent(v),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||u()},16)}function d(v){const w=v.target,S=w.tagName;return w.isContentEditable||S==="INPUT"||S==="SELECT"||S==="TEXTAREA"}const k=M(!1);kn("k",v=>{(v.ctrlKey||v.metaKey)&&(v.preventDefault(),k.value=!0)}),kn("/",v=>{d(v)||(v.preventDefault(),k.value=!0)});const b="local";return(v,w)=>{var S;return i(),c("div",Co,[p(b)==="local"?(i(),c(j,{key:0},[k.value?(i(),E(p(t),{key:0,onClose:w[0]||(w[0]=P=>k.value=!1)})):_("",!0),e("div",Lo,[x(An,{onClick:w[1]||(w[1]=P=>k.value=!0)})])],64)):p(b)==="algolia"?(i(),c(j,{key:1},[a.value?(i(),E(p(s),{key:0,algolia:((S=p(o).search)==null?void 0:S.options)??p(o).algolia,onVnodeBeforeMount:w[2]||(w[2]=P=>r.value=!0)},null,8,["algolia"])):_("",!0),r.value?_("",!0):(i(),c("div",Mo,[x(An,{onClick:l})]))],64)):_("",!0)])}}}),Ao=T({__name:"VPNavBarSocialLinks",setup(n){const{theme:t}=D();return(s,o)=>p(t).socialLinks?(i(),E(Mn,{key:0,class:"VPNavBarSocialLinks",links:p(t).socialLinks},null,8,["links"])):_("",!0)}}),Do=C(Ao,[["__scopeId","data-v-18fa7273"]]),Vo=["href","rel","target"],No=["innerHTML"],Io={key:2},Fo=T({__name:"VPNavBarTitle",setup(n){const{site:t,theme:s}=D(),{hasSidebar:o}=Y(),{currentLang:a}=rn(),r=f(()=>{var d;return typeof s.value.logoLink=="string"?s.value.logoLink:(d=s.value.logoLink)==null?void 0:d.link}),l=f(()=>{var d;return typeof s.value.logoLink=="string"||(d=s.value.logoLink)==null?void 0:d.rel}),u=f(()=>{var d;return typeof s.value.logoLink=="string"||(d=s.value.logoLink)==null?void 0:d.target});return(d,k)=>(i(),c("div",{class:A(["VPNavBarTitle",{"has-sidebar":p(o)}])},[e("a",{class:"title",href:r.value??p(Tn)(p(a).link),rel:l.value,target:u.value},[m(d.$slots,"nav-bar-title-before",{},void 0,!0),p(s).logo?(i(),E(dn,{key:0,class:"logo",image:p(s).logo},null,8,["image"])):_("",!0),p(s).siteTitle?(i(),c("span",{key:1,innerHTML:p(s).siteTitle},null,8,No)):p(s).siteTitle===void 0?(i(),c("span",Io,h(p(t).title),1)):_("",!0),m(d.$slots,"nav-bar-title-after",{},void 0,!0)],8,Vo)],2))}}),Ho=C(Fo,[["__scopeId","data-v-1396ba66"]]),Oo={class:"items"},zo={class:"title"},Ro=T({__name:"VPNavBarTranslations",setup(n){const{theme:t}=D(),{localeLinks:s,currentLang:o}=rn({correspondingLink:!0});return(a,r)=>p(s).length&&p(o).label?(i(),E(Ln,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:p(t).langMenuLabel||"Change language"},{default:g(()=>[e("div",Oo,[e("p",zo,h(p(o).label),1),(i(!0),c(j,null,N(p(s),l=>(i(),E(vn,{key:l.link,item:l},null,8,["item"]))),128))])]),_:1},8,["label"])):_("",!0)}}),Uo=C(Ro,[["__scopeId","data-v-22afe1d0"]]),qo={class:"wrapper"},Wo={class:"container"},Go={class:"title"},Yo={class:"content"},Jo={class:"content-body"},Ko=T({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(n){const t=n,{y:s}=In(),{hasSidebar:o}=Y(),{frontmatter:a}=D(),r=M({});return xn(()=>{r.value={"has-sidebar":o.value,home:a.value.layout==="home",top:s.value===0,"screen-open":t.isScreenOpen}}),(l,u)=>(i(),c("div",{class:A(["VPNavBar",r.value])},[e("div",qo,[e("div",Wo,[e("div",Go,[x(Ho,null,{"nav-bar-title-before":g(()=>[m(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":g(()=>[m(l.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),e("div",Yo,[e("div",Jo,[m(l.$slots,"nav-bar-content-before",{},void 0,!0),x(Bo,{class:"search"}),x(Eo,{class:"menu"}),x(Uo,{class:"translations"}),x(Bs,{class:"appearance"}),x(Do,{class:"social-links"}),x(go,{class:"extra"}),m(l.$slots,"nav-bar-content-after",{},void 0,!0),x(fo,{class:"hamburger",active:n.isScreenOpen,onClick:u[0]||(u[0]=d=>l.$emit("toggle-screen"))},null,8,["active"])])])])]),u[1]||(u[1]=e("div",{class:"divider"},[e("div",{class:"divider-line"})],-1))],2))}}),Qo=C(Ko,[["__scopeId","data-v-23d6a5e9"]]),Xo={key:0,class:"VPNavScreenAppearance"},Zo={class:"text"},na=T({__name:"VPNavScreenAppearance",setup(n){const{site:t,theme:s}=D();return(o,a)=>p(t).appearance&&p(t).appearance!=="force-dark"&&p(t).appearance!=="force-auto"?(i(),c("div",Xo,[e("p",Zo,h(p(s).darkModeSwitchLabel||"Appearance"),1),x(jn)])):_("",!0)}}),ea=C(na,[["__scopeId","data-v-50fb64a4"]]),ta=["innerHTML"],sa=T({__name:"VPNavScreenMenuLink",props:{item:{}},setup(n){const t=mn("close-screen");return(s,o)=>(i(),E(G,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,onClick:p(t)},{default:g(()=>[e("span",{innerHTML:n.item.text},null,8,ta)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),oa=C(sa,[["__scopeId","data-v-1c439e69"]]),aa=["innerHTML"],ia=T({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(n){const t=mn("close-screen");return(s,o)=>(i(),E(G,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,onClick:p(t)},{default:g(()=>[e("span",{innerHTML:n.item.text},null,8,aa)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Gn=C(ia,[["__scopeId","data-v-455b60fa"]]),la={class:"VPNavScreenMenuGroupSection"},ra={key:0,class:"title"},ca=T({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(n){return(t,s)=>(i(),c("div",la,[n.text?(i(),c("p",ra,h(n.text),1)):_("",!0),(i(!0),c(j,null,N(n.items,o=>(i(),E(Gn,{key:o.text,item:o},null,8,["item"]))),128))]))}}),ua=C(ca,[["__scopeId","data-v-51f4aeaa"]]),da=["aria-controls","aria-expanded"],pa=["innerHTML"],ha=["id"],ma={key:0,class:"item"},ga={key:1,class:"item"},va={key:2,class:"group"},ba=T({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(n){const t=n,s=M(!1),o=f(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function a(){s.value=!s.value}return(r,l)=>(i(),c("div",{class:A(["VPNavScreenMenuGroup",{open:s.value}])},[e("button",{class:"button","aria-controls":o.value,"aria-expanded":s.value,onClick:a},[e("span",{class:"button-text",innerHTML:n.text},null,8,pa),l[0]||(l[0]=e("span",{class:"vpi-plus button-icon"},null,-1))],8,da),e("div",{id:o.value,class:"items"},[(i(!0),c(j,null,N(n.items,u=>(i(),c(j,{key:JSON.stringify(u)},["link"in u?(i(),c("div",ma,[x(Gn,{item:u},null,8,["item"])])):"component"in u?(i(),c("div",ga,[(i(),E(W(u.component),Q({ref_for:!0},u.props,{"screen-menu":""}),null,16))])):(i(),c("div",va,[x(ua,{text:u.text,items:u.items},null,8,["text","items"])]))],64))),128))],8,ha)],2))}}),fa=C(ba,[["__scopeId","data-v-8567d8b7"]]),_a={key:0,class:"VPNavScreenMenu"},ka=T({__name:"VPNavScreenMenu",setup(n){const{theme:t}=D();return(s,o)=>p(t).nav?(i(),c("nav",_a,[(i(!0),c(j,null,N(p(t).nav,a=>(i(),c(j,{key:JSON.stringify(a)},["link"in a?(i(),E(oa,{key:0,item:a},null,8,["item"])):"component"in a?(i(),E(W(a.component),Q({key:1,ref_for:!0},a.props,{"screen-menu":""}),null,16)):(i(),E(fa,{key:2,text:a.text||"",items:a.items},null,8,["text","items"]))],64))),128))])):_("",!0)}}),wa=T({__name:"VPNavScreenSocialLinks",setup(n){const{theme:t}=D();return(s,o)=>p(t).socialLinks?(i(),E(Mn,{key:0,class:"VPNavScreenSocialLinks",links:p(t).socialLinks},null,8,["links"])):_("",!0)}}),ya={class:"list"},$a=T({__name:"VPNavScreenTranslations",setup(n){const{localeLinks:t,currentLang:s}=rn({correspondingLink:!0}),o=M(!1);function a(){o.value=!o.value}return(r,l)=>p(t).length&&p(s).label?(i(),c("div",{key:0,class:A(["VPNavScreenTranslations",{open:o.value}])},[e("button",{class:"title",onClick:a},[l[0]||(l[0]=e("span",{class:"vpi-languages icon lang"},null,-1)),H(" "+h(p(s).label)+" ",1),l[1]||(l[1]=e("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),e("ul",ya,[(i(!0),c(j,null,N(p(t),u=>(i(),c("li",{key:u.link,class:"item"},[x(G,{class:"link",href:u.link},{default:g(()=>[H(h(u.text),1)]),_:2},1032,["href"])]))),128))])],2)):_("",!0)}}),Sa=C($a,[["__scopeId","data-v-d2107739"]]),Ea={class:"container"},xa=T({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(n){const t=M(null),s=Fn(gn?document.body:null);return(o,a)=>(i(),E(Sn,{name:"fade",onEnter:a[0]||(a[0]=r=>s.value=!0),onAfterLeave:a[1]||(a[1]=r=>s.value=!1)},{default:g(()=>[n.open?(i(),c("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[e("div",Ea,[m(o.$slots,"nav-screen-content-before",{},void 0,!0),x(ka,{class:"menu"}),x(Sa,{class:"translations"}),x(ea,{class:"appearance"}),x(wa,{class:"social-links"}),m(o.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):_("",!0)]),_:3}))}}),Ta=C(xa,[["__scopeId","data-v-cd5b96b1"]]),Pa={key:0,class:"VPNav"},ja=T({__name:"VPNav",setup(n){const{isScreenOpen:t,closeScreen:s,toggleScreen:o}=$s(),{frontmatter:a}=D(),r=f(()=>a.value.navbar!==!1);return Hn("close-screen",s),pn(()=>{gn&&document.documentElement.classList.toggle("hide-nav",!r.value)}),(l,u)=>r.value?(i(),c("header",Pa,[x(Qo,{"is-screen-open":p(t),onToggleScreen:p(o)},{"nav-bar-title-before":g(()=>[m(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":g(()=>[m(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":g(()=>[m(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":g(()=>[m(l.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),x(Ta,{open:p(t)},{"nav-screen-content-before":g(()=>[m(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":g(()=>[m(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):_("",!0)}}),Ca=C(ja,[["__scopeId","data-v-fa50d59e"]]),La=["role","tabindex"],Ma={key:1,class:"items"},Ba=T({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(n){const t=n,{collapsed:s,collapsible:o,isLink:a,isActiveLink:r,hasActiveLink:l,hasChildren:u,toggle:d}=Te(f(()=>t.item)),k=f(()=>u.value?"section":"div"),b=f(()=>a.value?"a":"div"),v=f(()=>u.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),w=f(()=>a.value?void 0:"button"),S=f(()=>[[`level-${t.depth}`],{collapsible:o.value},{collapsed:s.value},{"is-link":a.value},{"is-active":r.value},{"has-active":l.value}]);function P(y){"key"in y&&y.key!=="Enter"||!t.item.link&&d()}function $(){t.item.link&&d()}return(y,L)=>{const I=X("VPSidebarItem",!0);return i(),E(W(k.value),{class:A(["VPSidebarItem",S.value])},{default:g(()=>[n.item.text?(i(),c("div",Q({key:0,class:"item",role:w.value},se(n.item.items?{click:P,keydown:P}:{},!0),{tabindex:n.item.items&&0}),[L[1]||(L[1]=e("div",{class:"indicator"},null,-1)),n.item.link?(i(),E(G,{key:0,tag:b.value,class:"link",href:n.item.link,rel:n.item.rel,target:n.item.target},{default:g(()=>[(i(),E(W(v.value),{class:"text",innerHTML:n.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(i(),E(W(v.value),{key:1,class:"text",innerHTML:n.item.text},null,8,["innerHTML"])),n.item.collapsed!=null&&n.item.items&&n.item.items.length?(i(),c("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:$,onKeydown:oe($,["enter"]),tabindex:"0"},[...L[0]||(L[0]=[e("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):_("",!0)],16,La)):_("",!0),n.item.items&&n.item.items.length?(i(),c("div",Ma,[n.depth<5?(i(!0),c(j,{key:0},N(n.item.items,B=>(i(),E(I,{key:B.text,item:B,depth:n.depth+1},null,8,["item","depth"]))),128)):_("",!0)])):_("",!0)]),_:1},8,["class"])}}}),Aa=C(Ba,[["__scopeId","data-v-315ef591"]]),Da=T({__name:"VPSidebarGroup",props:{items:{}},setup(n){const t=M(!0);let s=null;return z(()=>{s=setTimeout(()=>{s=null,t.value=!1},300)}),On(()=>{s!=null&&(clearTimeout(s),s=null)}),(o,a)=>(i(!0),c(j,null,N(n.items,r=>(i(),c("div",{key:r.text,class:A(["group",{"no-transition":t.value}])},[x(Aa,{item:r,depth:0},null,8,["item"])],2))),128))}}),Va=C(Da,[["__scopeId","data-v-0520cbe0"]]),Na={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Ia=T({__name:"VPSidebar",props:{open:{type:Boolean}},setup(n){const{sidebarGroups:t,hasSidebar:s}=Y(),o=n,a=M(null),r=Fn(gn?document.body:null);R([o,a],()=>{var u;o.open?(r.value=!0,(u=a.value)==null||u.focus()):r.value=!1},{immediate:!0,flush:"post"});const l=M(0);return R(t,()=>{l.value+=1},{deep:!0}),(u,d)=>p(s)?(i(),c("aside",{key:0,class:A(["VPSidebar",{open:n.open}]),ref_key:"navEl",ref:a,onClick:d[0]||(d[0]=on(()=>{},["stop"]))},[d[2]||(d[2]=e("div",{class:"curtain"},null,-1)),e("nav",Na,[d[1]||(d[1]=e("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),m(u.$slots,"sidebar-nav-before",{},void 0,!0),(i(),E(Va,{items:p(t),key:l.value},null,8,["items"])),m(u.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):_("",!0)}}),Fa=C(Ia,[["__scopeId","data-v-1a6ff6b7"]]),Ha=T({__name:"VPSkipLink",setup(n){const{theme:t}=D(),s=Z(),o=M();R(()=>s.path,()=>o.value.focus());function a({target:r}){const l=document.getElementById(decodeURIComponent(r.hash).slice(1));if(l){const u=()=>{l.removeAttribute("tabindex"),l.removeEventListener("blur",u)};l.setAttribute("tabindex","-1"),l.addEventListener("blur",u),l.focus(),window.scrollTo(0,0)}}return(r,l)=>(i(),c(j,null,[e("span",{ref_key:"backToTop",ref:o,tabindex:"-1"},null,512),e("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:a},h(p(t).skipToContentLabel||"Skip to content"),1)],64))}}),Oa=C(Ha,[["__scopeId","data-v-39726def"]]),za=T({__name:"Layout",setup(n){const{isOpen:t,open:s,close:o}=Y(),a=Z();R(()=>a.path,o),xe(t,o);const{frontmatter:r}=D(),l=ae(),u=f(()=>!!l["home-hero-image"]);return Hn("hero-image-slot-exists",u),(d,k)=>{const b=X("Content");return p(r).layout!==!1?(i(),c("div",{key:0,class:A(["Layout",p(r).pageClass])},[m(d.$slots,"layout-top",{},void 0,!0),x(Oa),x(he,{class:"backdrop",show:p(t),onClick:p(o)},null,8,["show","onClick"]),x(Ca,null,{"nav-bar-title-before":g(()=>[m(d.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":g(()=>[m(d.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":g(()=>[m(d.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":g(()=>[m(d.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":g(()=>[m(d.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":g(()=>[m(d.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),x(ys,{open:p(t),onOpenMenu:p(s)},null,8,["open","onOpenMenu"]),x(Fa,{open:p(t)},{"sidebar-nav-before":g(()=>[m(d.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":g(()=>[m(d.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),x(is,null,{"page-top":g(()=>[m(d.$slots,"page-top",{},void 0,!0)]),"page-bottom":g(()=>[m(d.$slots,"page-bottom",{},void 0,!0)]),"not-found":g(()=>[m(d.$slots,"not-found",{},void 0,!0)]),"home-hero-before":g(()=>[m(d.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":g(()=>[m(d.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":g(()=>[m(d.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":g(()=>[m(d.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":g(()=>[m(d.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":g(()=>[m(d.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":g(()=>[m(d.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":g(()=>[m(d.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":g(()=>[m(d.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":g(()=>[m(d.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":g(()=>[m(d.$slots,"doc-before",{},void 0,!0)]),"doc-after":g(()=>[m(d.$slots,"doc-after",{},void 0,!0)]),"doc-top":g(()=>[m(d.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":g(()=>[m(d.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":g(()=>[m(d.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":g(()=>[m(d.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":g(()=>[m(d.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":g(()=>[m(d.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":g(()=>[m(d.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":g(()=>[m(d.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),x(ds),m(d.$slots,"layout-bottom",{},void 0,!0)],2)):(i(),E(b,{key:1}))}}}),Ra=C(za,[["__scopeId","data-v-3302330f"]]),Ua={Layout:Ra,enhanceApp:({app:n})=>{n.component("Badge",ue)}},qa={zh:{brand:{seal:"禅",taglineCn:"编码即是修行",taglineEn:"ZENHEART"},header:{searchTooltip:"搜索 (⌘K)",themeTooltip:"切换主题",rssTooltip:"RSS 订阅",menuTooltip:"菜单",feedUrl:"/feed.xml"},footer:{blogLabel:"博客",aboutLabel:"关于"},home:{recentPostsLabel:"近期笔记",recentPostsLabelEn:"Recent Notes",viewAllLabel:"查看全部 →",articlesLabel:"文章",yearSpanLabel:"年度跨度",tagsLabel:"标签分类",tagsTitle:"标签",tagsTitleEn:"Tags",timelineLabel:"时间线",timelineLabelEn:"Timeline",defaultTitle:"编码即是修行",defaultTagline:"Coding as Spiritual Practice"},search:{placeholder:"搜索文章...",closeHint:"ESC 关闭",noResults:"未找到匹配的文章",navHint:"↑↓ 导航",openHint:"↵ 打开",exitHint:"esc 关闭"},tweaks:{title:"设置",inkLabel:"墨色",inkOptions:["淡","中","浓"]},tagsPage:{title:"标签",titleEn:"topics",description:"十年写作的沉淀，大多落在工具、方法论与计算机基础三处。下面是所有主题的分布 —— 字号代表篇数。点击任一标签查看归档。",distributionTitle:"分布",distributionTitleEn:"distribution"},archivePage:{title:"全部笔记",titleEn:"archive",searchPlaceholder:"在标题、摘要、标签中搜索…",noResults:"无匹配结果 · no matches",filterLabel:"按标签过滤",filterLabelEn:"filter",byYearLabel:"按年份",byYearLabelEn:"by year"},projectsPage:{title:"项目看板",titleEn:"kanban",kanbanColumns:[{key:"待完善",en:"backlog",tone:"draft"},{key:"进行中",en:"in-progress",tone:"wip"},{key:"已完成",en:"shipped",tone:"done"}],emptyState:"— empty —",openLabel:"↗ open",categoryGuides:"指南",categoryGuidesEn:"guides",categoryTools:"工具",categoryToolsEn:"tools"},aboutPage:{profileLabel:"档案",profileLabelEn:"Profile",experienceLabel:"经历",experienceLabelEn:"Experience",contactLabel:"联系",contactLabelEn:"Contact",postsLabel:"篇笔记",projectsLabel:"open-source projects"}}};function J(n,t="zh"){var o,a;const s=(a=(o=n==null?void 0:n.themeConfig)==null?void 0:o.i18n)==null?void 0:a[t];return{...qa[t],...s}}const Wa={class:"chrome"},Ga={class:"chrome-inner"},Ya={class:"brand",href:"/"},Ja={class:"seal"},Ka={class:"brand-text"},Qa={class:"brand-cn"},Xa={class:"brand-en"},Za={class:"nav"},ni=["href"],ei={key:0,class:"en"},ti={class:"chrome-right"},si=["title"],oi=["title"],ai={key:0,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ii={key:1,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},li=["href","title"],ri=["title","aria-expanded"],ci={key:0,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},ui={key:1,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},di=["href"],pi={class:"mobile-nav-text"},hi={key:0,class:"mobile-nav-en"},mi=["href"],gi={__name:"Header",props:{isDark:Boolean,searchOpen:Boolean},emits:["update:isDark","update:searchOpen"],setup(n,{emit:t}){const s=n,o=t,{site:a}=U(),r=Z(),l=f(()=>{var P,$;return(($=(P=a.value)==null?void 0:P.themeConfig)==null?void 0:$.nav)||[]}),u=f(()=>J(a.value)),d=M(!1);function k(){o("update:isDark",!s.isDark),document.documentElement.setAttribute("data-theme",s.isDark?"light":"dark"),localStorage.setItem("theme",s.isDark?"light":"dark")}function b(){o("update:searchOpen",!0),d.value=!1}function v(){d.value=!d.value}function w(){d.value=!1}R(()=>r.path,w),R(d,P=>{typeof document>"u"||(document.body.style.overflow=P?"hidden":"")});function S(P){P.key==="Escape"&&d.value&&w()}return z(()=>document.addEventListener("keydown",S)),On(()=>{document.removeEventListener("keydown",S),typeof document<"u"&&(document.body.style.overflow="")}),(P,$)=>(i(),c(j,null,[e("header",Wa,[e("div",Ga,[e("a",Ya,[e("span",Ja,h(u.value.brand.seal),1),e("span",Ka,[e("span",Qa,h(u.value.brand.taglineCn),1),e("span",Xa,h(u.value.brand.taglineEn),1)])]),e("nav",Za,[(i(!0),c(j,null,N(l.value,y=>(i(),c("a",{key:y.path||y.link,href:y.path||y.link,class:A({active:p(r).path===(y.path||y.link)||y.path&&p(r).path.startsWith(y.path)})},[H(h(y.text),1),y.en?(i(),c("span",ei,h(y.en),1)):_("",!0)],10,ni))),128))]),e("div",ti,[e("button",{class:"icon-btn",onClick:b,title:u.value.header.searchTooltip},[...$[0]||($[0]=[e("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("path",{d:"m21 21-4.35-4.35"})],-1)])],8,si),e("button",{class:"icon-btn",onClick:k,title:u.value.header.themeTooltip},[n.isDark?(i(),c("svg",ii,[...$[2]||($[2]=[ie('<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',9)])])):(i(),c("svg",ai,[...$[1]||($[1]=[e("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},null,-1)])]))],8,oi),e("a",{class:"icon-btn rss-link",href:u.value.header.feedUrl,title:u.value.header.rssTooltip},[...$[3]||($[3]=[e("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M4 11a9 9 0 0 1 9 9"}),e("path",{d:"M4 4a16 16 0 0 1 16 16"}),e("circle",{cx:"5",cy:"19",r:"1"})],-1)])],8,li),e("button",{class:A(["icon-btn menu-btn",{active:d.value}]),onClick:v,title:u.value.header.menuTooltip,"aria-expanded":d.value,"aria-label":"菜单"},[d.value?(i(),c("svg",ui,[...$[5]||($[5]=[e("line",{x1:"6",y1:"6",x2:"18",y2:"18"},null,-1),e("line",{x1:"6",y1:"18",x2:"18",y2:"6"},null,-1)])])):(i(),c("svg",ci,[...$[4]||($[4]=[e("line",{x1:"4",y1:"7",x2:"20",y2:"7"},null,-1),e("line",{x1:"4",y1:"12",x2:"20",y2:"12"},null,-1),e("line",{x1:"4",y1:"17",x2:"20",y2:"17"},null,-1)])]))],10,ri)])])]),(i(),E(le,{to:"body"},[e("div",{class:A(["mobile-drawer",{open:d.value}]),onClick:on(w,["self"]),"aria-hidden":"true"},[e("nav",{class:"mobile-nav",onClick:w},[(i(!0),c(j,null,N(l.value,y=>(i(),c("a",{key:y.path||y.link,href:y.path||y.link,class:A({active:p(r).path===(y.path||y.link)||y.path&&p(r).path.startsWith(y.path)})},[e("span",pi,h(y.text),1),y.en?(i(),c("span",hi,h(y.en),1)):_("",!0)],10,di))),128)),e("a",{href:u.value.header.feedUrl,class:"mobile-nav-rss"},[...$[6]||($[6]=[e("span",{class:"mobile-nav-text"},"RSS",-1),e("span",{class:"mobile-nav-en"},"feed.xml",-1)])],8,mi)])],2)]))],64))}},vi={class:"foot"},bi=["href"],fi={href:"/posts"},_i={href:"/about"},ki={__name:"Footer",setup(n){const{site:t}=U(),s=f(()=>{var l,u;return((u=(l=t.value)==null?void 0:l.themeConfig)==null?void 0:u.profile)||{}}),o=f(()=>{var l,u;return((u=(l=t.value)==null?void 0:l.themeConfig)==null?void 0:u.contact)||{}}),a=f(()=>J(t.value)),r=f(()=>{const l=s.value.since;return l?`${l}—${new Date().getFullYear()}`:new Date().getFullYear()});return(l,u)=>(i(),c("footer",vi,[e("span",null,"© "+h(r.value)+" "+h(s.value.name),1),e("div",null,[e("a",{href:o.value.github},"GitHub",8,bi),e("a",fi,h(a.value.footer.blogLabel),1),e("a",_i,h(a.value.footer.aboutLabel),1)])]))}},wi=`---   
tags: 
    - 计算机基础
---

# BNF 范式


## 什么是 BNF 范式
BNF(Backus-Naur Form) 巴克斯范式用来描述语法规则的语法。
使用场景如下:
1. [C 语言的 BNF 描述](https://cs.wmich.edu/~gupta/teaching/cs4850/sumII06/The%20syntax%20of%20C%20in%20Backus-Naur%20form.htm)
2. [CSS 语法规则描述](https://www.w3.org/TR/CSS21/grammar.html)
3. linux 指令使用的描述,使用 \`man <command_name>\` 查看指令时看到的 \`SYNOPSIS\` 
极为 bnf 的语法描述。


## 为什么需要学习 bnf
理解 bnf 除了能够更好的读懂各种类 bnf 的语法描述外。
**可以利用 \`bnf\` 的思想来抽象编程问题。**

## BNF 的规则描述

BNF 利用符号来进行规则定义，相关符号的含义如下表。
这里 bnf 不仅仅指基础的巴克斯范式还包括 [ABNF](ftp://ftp.rfc-editor.org/in-notes/rfc4234.txt) 规则。


| 符号  | 作用                                                 |
| :---- | ---------------------------------------------------- |
| \`::=\` | 表示被定义为，有时也可用 \`=\`                         |
| \`|\`   | 表示或逻辑                                           |
| \`/\`   | 表示选择                                             |
| \`<>\`  | 表示一个属性或类型                                   |
| \`；\`  | 结束符                                               |
| \` \`   | 空格表示连接符                                       |
| \`[]\`  | 括号中内容可选                                       |
| \`{}\`  | 表示对前面内容的重复次数，其中可以填入数字，类似正则 |
| \`()\`  | 括号中的内容为一组                                   |


## 规则举例
### \`<>\` 用来包含规则名
范例：

	name =  <rulename> | rulename

规则名不区分大小写,也可以不带尖括号

### 空格对多个属性进行分隔

范例：

    foo         =  %x61           ; a
    bar         =  %x62           ; b
    mumble      =  foo bar foo

利用空格，分号给一个规则赋值时多个属性的方法

### / 选择
范例：

      foo / bar

/ 表示从这 foo 或 bar 中选择一个



### () 序列组
范例：
        (elem foo) / (bar blat)

括号表示一个序列组

### 不定循环
范例：
\`\`\`md
<a>*<b>element  //元素 element 至少出现 a 此至多 b 次
*<element>      //出现任意次数
3*3<element>    //只出现 3 次
1*<element>     //至少 1 次
1*2<element>    //这是1-2 次
\`\`\`
默认值 \`0 * ∞ <element>\`

### 指定循环
范例：

    <n>element
    等同于
    <n>*<n>element

相当于只使用 n 次某元素

### 可选序列
范例：

    [foo bar]
    等同于
    *1(foo bar)

表明某一规则只出现 0 或 1 次


## 参考资料

[BNF 注释](http://cui.unige.ch/db-research/Enseignement/analyseinfo/AboutBNF.html#Marcotty86)

[ABNF](ftp://ftp.rfc-editor.org/in-notes/rfc4234.txt)










`,yi=`---   
tags:  
    - 工具
---

# Markdown

**使用 Markdown 的经验**

## Markdown 概述

markdown 是一种**轻量级的标记语言**，作用是为了更方便的书写网络文档。    
原理上文本标记会被 markdown 编辑器转换为 html 标签，例如在你想添加标题的文本前加入 \`#\` 内容就会被 \`<h1>\` 包含。     
对于 WEB 开发者，甚至可以在编写文本时嵌入 html 和 js 来增强文档表现。     

## 初学者入门
对于首次使用 Markdown 进行文档编写的人，首先你需要一个趁手的编辑器来解析 Markdown 文件(github 上的 .md 文件即为这种格式)。
目前大部分的博客网站都支持 Markdown 的编写，例如笔者所使用的 CSDN, 若你想在本地编写文档，可以使用 Notepad 等编辑器。具体选择可参见[知乎 Markdown讨论](http://www.zhihu.com/question/19637157)。

有了一款趁手的编辑器，可以开始码字了，那么如何最快掌握呢？
笔者的原则是实践出真知，参看[示例文档1](https://github.com/othree/markdown-syntax-zhtw/blob/master/syntax.md) 照着这边文章，查看它的 Markdown 文件，原样把文档打一遍，就像下面这样:

![im1](http://ww2.sinaimg.cn/mw690/965bbb87gw1f2yrnatsvkj211w0lc11c.jpg)

如果觉得一篇不够练手，这里有[示例文档2](https://github.com/younghz/Markdown)把这两篇文章都敲完了，笔者认为你应该已经掌握它的语法了。


## Makrdown 使用经验
### markdown 心得和技巧
笔者在未使用 Markdown 之前都是采用 word 来进行文档编辑，所以会很注重，文档的结构和排版方式。
在使用 Markdown 的初期，会纠结于为什么文档不能把标题居中等排版问题上，但是仔细思考后有了如下体会。

Mrakdown 强调的是**简单**。这个概念的核心意义就在于极简主义，所以重点在于如何有效的组织文章,心得如下:
   

**把文章拆分成块**

这个概念类似于编程的模块化思想，把有限的 Markdown 标签和你的文章块进行组合。
思考你的文章组件有哪些比如*文章标题*、*引言*、*目录*、*章节标题*、*内容*、*代码示例* 那么把这些文章部件和 Markdown 的语法标记逐一对应。

对应关系范例:
* **文章标题:** 用 \`#\` 来表示
* **前言:** 采用\`**内容**\`粗体，对文章主旨做一个概述
* **章节标题:** 采用 \`##,###\` 不要嵌套过深的层级.
* **内容:** 出现句号就换行。需要分段就空行。



markdown 的语法本身就包含了文章的布局层次在里面。
你需要做的就是巧妙的利用它的标记生成自己的模板格式。**笔者会将自己总结的模板保存方便以后使用**   
那么如何定义模块呢？目前我体会到的是保证语法和文本模块之间的内在契合性。
举例，比如说对于长文我们会存在目录，那么如何表示目录的层级呢？这里用 markdown 语法有以下几种办法。
1. 利用\`#\` 表示层级
2. 单纯的使用数字表示层级
3. 利用\`>\`来表示层级
4. 利用制表符或引号的层级缩颈表示层级
那么上面那种方法最好呢？我的原则是用最少的符号表示最强的效果。
所以首选方法1.因为只需用标题本身的功能就可以表示所有需要的目录关系。
包括目录的层级，等并且利用\`#\`号模式可以在变为html,利用 css 自动添加序号。所以该模式教合适。
下面是我编写markdown的一些文法规则。目的是为了保证所有文档的统一。

> 文章整体框架

文章框架布局结构:
 
    //1. 文章标识 编辑器自动生成，用来整理和归档文章  
     
    //2. 题头 = 标题 + 概要      
    //标题 言简意赅
    //概要 一句话描述本文中心思想
    //水平线 分隔题头和正文
    
    //3. 正文 = 子标题 + 块结构
    //一级标题 内容可以单独抽离时使用
    //# VI 语法 
    //# VI 插件  
    //上述两部分可以独立成章使用一级标题
    //二级标题 相对一级标题可以独立的内容
    //# vi 语法
    //## 输入模式
    //## 命令模式
    //上述两部分属于 VI 语法的子集，且具有一定的独立性拆分成二级标题
    //三级标题 划分方法同上
    //当在三级标题下还可能存在递归性时，利用块结构实现书写
    //只能有三层标题结构，超过三层利用块结构的层级关系体现
    //↓↓↓↓↓↓示例如下↓↓↓↓↓↓
    
    ---
    title: VIM 使用 
    category: linux tool
    date: 2016-9-12
    modifiedOn: 2016-9-25
    ---                            
      
    # VIM 使用

    **前言:介绍 VIM 基本语法及相关工具**   
    
    ---   
    
    ## VIM 语法   
    块结构...          
    ### 基本概念    
    块结构...
    ### 模式切换    
    块结构...  
       

> 块结构

块结构用在文章的各级标题内容中，为内容的组成单元
块结构 = 块标题 + 子内容

>> 块标题

采用\`>\`来实现块标题，块标题的也可以存在层级，只需利用多层
\`>\` 即可。只建议使用两层块标题，不要让文档出现过深的嵌套。举例如下:

    > 块结构
    块结构 = 块标题 + 子内容
    >> 块标题
    ...
    >> 子内容
    ...
    
>> 子内容

子内容是组成文章部件的最小单元，常用的子内容如下。
* 无序子内容
利用\`*，-，+\`都可，利用制表符缩进子内容的递归性
* 有序子内容
利用\`1.,2.\`,实现，利用制表符实现递归性，和无序子内容可相互包含
* 代码块
所有编程语言范例使用

        \`\`\`js
            var a = 1;
        \`\`\`
        
        \`\`\`bash
            $ ls      //注意 linux 命令前面必须加提示符
        \`\`\`
* 文本块 非编程语言,但是需要利用块引用进行说明的地方该文本块是利用
换行和制表符生成的。

       //利用 ASCII Art 来描述 http 通讯
        request chain ------------------------>
        UA -------------------v------------------- O
        <----------------------- response chain

* 其他
    * 段落 多行文本使用，每一行文本出现句号后换行   
    * 关键字，利用一些特殊字符来强调某些内容，灵感来源于[如何使用下划线和黑体](http://www.gobloggingtips.com/bold-italics-and-underlines-in-blog-posts/)
    
            \`短命令\`  --> 所有较短命令或一些技术术语和特殊字符
            
            **强调**   --> 文章中强调的观点或技术术语以及需要加强的概念
             
            _斜体_     --> 只用在引用或非强调但需要突出的内容上
             
            ~~删除~~    --> 用在删除和修改的内容  
     
    * 链接和图像引用
    * 表格，用在需要说明函数 API 或一些配置参数的场合
    
  
    
### markdown 语言技巧
> 连接引用

有些编辑器是支持图片的相对路径引用的，若不支持相对路径可以采用微博或第三方服务器来引用图片。
对于相对独立的引用直接使用内嵌式写法，若涉及到大量的连接引用比如说文末的参考文章，则建议采用显示连接更好。
利用显示连接时不建议索引 id 都放在文章最后，最好在哪里引用就放在它的下面。方便文章修改。

> 善用工具

笔者在 \`chroem\` 浏览器上预装了 \`stackedit\` 编辑器，它支持利用文本标记编写流程图的功能。   
虽然这以不属于 markdown 语法。但是重点在于学会利用并扩展工具的使用。
我的建议是多使用几款找到自己中意的，然后精通它，这样你才能从随心所欲的操作中获得成就感。   


## MarkDown 语法详解

建议看这篇[markdown 语法讲解](http://xianbai.me/learn-md/article/about/readme.html) 。 
### 标题的两种表示方法
#### \`#\` 表示标题

范例:

    # 一级标题
    ## 二级标题
    ### 三级标题
    #### 四级标题
    ##### 五级标题
    ###### 六级标题

结果:
> # 一级标题
> ## 二级标题
> ### 三级标题
> #### 四级标题
> ##### 五级标题
> ###### 六级标题

### \`===\` 表示一级标题 \`---\` 表示二级标题

范例:

    一级标题
    ===
    二级标题
    ---

结果:
> 一级标题
> ===
> 二级标题
> ---

## 段落和换行
### 表示段落的块前后各空一行

范例:

    第一段

    第二段

结果:

> 第一段

> 第二段

### 在行末添加两个或以上空格实现换行 

范例:

    第一行   
    第二行   

结果:
> 第一行   
> 第二行  

## 文本块
### 代码块   

范例:

    \`\`\`js
    funciton test()
    {

    }
    \`\`\`

结果:
> \`\`\`js
> function test()
> {
>    
> }
> \`\`\`

### 文本块 
  
只需要在段落前产生3个空格的空格即可，注意若出现其他文本块，则需要再产生 3 个空格以此类推

范例:

    文本块举例

结果:
>       文本块 

### 引用块  

使用 \`>\` 符号支持嵌套,注意要断开应用块空一行即可。
若不空行,一般会继续按照上一行应用模式显示。

范例:

    > 这是第一层
    >> 这是第二层

    > 这是第一层
    //空行后才有效

结果:
> 这是第一层
>> 这是第二层
>> 这是第二层   

> 这是第一层

##　斜体，黑体

使用 \`×　×\`和\`××　××\`表示斜体和粗体，或者 \`_ _\`或\`__ __\`

范例:

    *斜体*
    **粗体**
    _斜体_
    __粗体__

结果:
> *斜体*

> **粗体**

> _斜体_

> __粗体__

### 列表
### 无序列表
使用 \`-、*、+\`  三个符号表示无序列表

范例:

    - 条目一
    - 条目二

    或
    + 条目一
    + 条目二

    或
    * 条目一
    * 条目二

结果:
> * 条目一
> * 条目二

### 有序列表
使用数字加标点表示有序列表,注意点号后要加空格   

范例:

      1. 条目1
      2. 条目2

      或
      7. 条目1
      3. 条目2

     以上两个显示结果相同，说明 markdown 在处理时只是依照格式来进行排序
     不过考虑到阅读性建议按照实际顺序排序

结果:
> 1. 条目1
> 2. 条目2

## 分割线 
连写三个或以上的 *、-、_ 均会产生下划线

范例:

    ---

    或
    ___

    或
    ***
    也可以使用超过3个的字符
结果:
> ----


## 引用超链接和图片 
### 超链接 
超链接的表示方法分为内嵌、参考、自动连接

> 内嵌式写法

范例:

    [引用文本](链接地址)
    如:[百度首页](http://www.baidu.com)

    也可采用相对地址来表示前提是 markdown 文件和你的网页是在用一个主机之下

结果:
> [百度首页](http://www.baidu,com)

> 参考链接方式

>> 显示连接

范例:

    [引用文本][id]
    [id]: URL "可选择的标题"
    如:
    [百度首页][h1]

结果:
>  [百度][h1]

>  [h1]: http://www.baidu,com "百度连接"


>> 隐式连接

范例:

    [引用文本][]
    [引用文本]: URL "可选择的标题" \`\`\`\`
    如:
    [百度首页][]

结果:

> [百度首页][] 

> [百度首页]: http://www.baidu,com "百度首页"

###  图片显示
图片显示类似超链接，引用时开头加！即可

> 内嵌式写法

范例:

    [引用文本](链接地址)
    如:![MARKDOWN图标](http://www.newasp.net/attachment/soft/2015/0713/085610_78002493.png)

    也可采用相对地址来表示前提是 markdown 文件和你的网页是在用一个主机之下

结果:
> ![MARKDOWN图标](http://www.newasp.net/attachment/soft/2015/0713/085610_78002493.png)

> 参考链接方式

>> 显示连接

范例:

    ![引用文本][id]
    [id]: URL "可选择的标题"
    如:
    ![MARKDOWN图标][i1]

    [i1]:http://www.newasp.net/attachment/soft/2015/0713/085610_78002493.png "图标"
    注意空行分开结果同上

>> 隐式连接

范例:

    ！[引用文本][]
    [引用文本]: URL "可选择的标题"
    如:
    [MARKDOWN图标][]

    [MARKDOWN图标]: http://www.newasp.net/attachment/soft/2015/0713/085610_78002493.png "图标"
    结果同上

### 自动链接
多用于邮箱或短的网址   

范例:   

    <http://www.baidu.com>
    <test@gmail.com>   

结果:
> <http://www.baidu.com>

> <123@email.com>

##　表格　　　
markdown 表格只具有基本功能，复杂合并建议直接使用\`html\`。
表格分为标题头和内容块参看范例

范例:

    | 标题一 | 标题二   // 注意利用 | 来划分标题 |
    | ------ | -------------------- |//利用 --- 来区分标题和内容，其中 :--- 左对齐、:---: 居中对齐、 ---: 右对齐
    内容|内容|       // 利用 | 来划分内容

结果:

> Header|Header 2|
> ---:|:---:
> Data 1|Data 2

你也可以利用它实现列合并   

范例: 

    | 标题一 | 标题三   // 注意利用 | 来划分标题 |
    | ------ | -------------------- | ---------- |//利用 --- 来区分标题和内容，其中 :--- 左对齐、:---: 居中对齐、 ---: 右对齐
    内容|内容|       // 利用 | 来划分内容
    
结果:

> 标题一||标题三|
> ---|---|---|
> 内容|内容|fdf|

## 代办清单

> 语法


\`[ ]\`表示没有完成。
\`[x]\` 表示完成。

\`\`\`
- [ ] Mercury
- [x] Venus
- [x] Earth (Orbit/Moon)
- [x] Mars
- [ ] Jupiter
- [ ] Saturn
- [ ] Uranus
- [ ] Neptune
- [ ] Comet Haley 
\`\`\`

> 显示结果

- [ ] Mercury
- [x] Venus
- [x] Earth (Orbit/Moon)
- [x] Mars
- [ ] Jupiter
- [ ] Saturn
- [ ] Uranus
- [ ] Neptune
- [ ] Comet Haley

## 其他符号讲解
> \\ 转译符号

范例:

    \\#

结果:
> \\#

> \\\`\\\` 用来标记

范例:

	\`标记内容\`
    
结果:
> \`标记内容\`

> 删除线

范例:

    ~~内容~~~

结果:
> ~~内容~~



## 文章构成部件

> 介绍 linux 命令

    ## <command_name>
    **功能:** <command_description>
    
    **参数:** 
    
    | 参数名       | 作用          |
    | :----------- | :------------ |
    | <parameter1> | <description> |
    | <parameter2> | <description> |
    ...
    
    **范例:**
    
    \`\`\`bash
       # <example_description> 
       <linux_command>
       
       ...
    \`\`\`
    

## markdown 扩展

github 的 mrakdown 语法称为.

[github flavored markdown](https://github.github.com/gfm/)
简称 **GFM**.








  












    

    

`,$i=`---   
tags:  
   - 云服务
---

# 新浪云服务器配置


**SAE 服务器的使用笔记**

## 服务器环境
* CentOS-6.x
* Apache-2.2.x
* PHP-5.3.x / PHP-5.6.x

## sae 设置

支持的判断条件

| 比较符号               | 作用                                                                         |
| :--------------------- | ---------------------------------------------------------------------------- |
| ==                     | 比较变量和字符串相等                                                         |
| !=                     | 比较变量和字符串不等                                                         |
| \`>,>=,<,<=\`            | 比较变量和数字                                                               |
| \`-f,！-f\`              | 检查文件是否存在                                                             |
| \`-d,!-d\`               | 检查目录是否存在                                                             |
| \`-e,!-e\`               | 运算符检查文件或目录是否存在                                                 |
| ~                      | 大小写敏感                                                                   |
| ~*                     | 大小写不敏感，运算符匹配变量和正则表达式，支持匹配组，利用 \`%[1-9]\` 进行引用 |
| \`%{REQ:HEADER_NAME} \`  | HTTP 请求头中的字段，如 %{REQ:HTTP_HOST}                                     |
| \`%{RESP:HEADER_NAME} \` | HTTP 响应头中的字段，如 %{RESP:CONTENT_ENCODING}                             |
| \`%{QUERY_STRING} \`     | 查询串，一般是 url 中问号后面的内容                                          |
| \`%{REQUEST_URI} \`      | 请求路径，即用户请求的 url 去掉主机部分和查询串后剩下的部分                  |

1. 设置访问没有指定文件的返回文件
\`-  directoryindex: aaa.php\`

2. 定义错误返回文件名
\`- errordoc: 404 /404.html\`


## url 重写举例
修改 config.yaml 文件可以实现类似 .htaccess 文件格式的配置。
URL 配置语法:

\`\`\`shell
   - rewrite: if （CONDTIONs） goto target_url
\`\`\`

使用举例：
1. 强制使用 https
\`\`\`shell
   - rewrite: if (%{REQ:X-Forwarded-Protol} != "https") goto "https://%{HTTP_HOST}%{REQUEST_URI}" 
\`\`\`

## sae cdn
[sae lib](https://lib.sinaapp.com/)

## 共享型数据库区别

[文档中心](http://www.sinacloud.com/home/index/faq_detail/doc_id/97.html)


`,Si=`---   
tags:  
    - 计算机基础
    - 操作系统
---
# 虚拟内存

**虚拟内存概念**

虚拟内存是指在实际设备上并不存在的虚拟 RAM 空间。

它的作用是当应用运行时，所需内存超出了设备实际拥有 RAM ，操作系统创造出的虚拟内存环境。

虚拟内存如何实现？假设一个操作系统需要 120 MB 的 RAM 来运行所有应用，但是实际内存只有 50 MB。
此时操作系统会调用，VMM(virtual memory menager) 去管理这 120 MB 内存空间，由于实际无内存不足，
VMM 会在硬盘上创建 70MB 的空间充当内存，这个空间山创造的对所需内存的映射我们称为**页面文件**。
也可以叫**交换文件**，页面文件和实际物理内存组合在一起，包含类应用所需的所有内存，当应用需要
内存超过实际范围时，VMM 会查找实际内存中目前未被使用的块，将内容复制到交换文件中，然后将交换文件
中对应的应用所需内存，放到实际的内存中。这个过程称为**页面调度**或**交换**。

因为有了虚拟内存，实现了多个任务的同步运行提供了存储保障，即使实际内存不足，也可以利用虚拟内存实现任务调度。

但是当应用大量依赖于虚拟内存时，由于 RAM 和实际内存之间读写速度存在差异，所以就会使系统具有卡顿。这种频繁的页面调度对系统的性能影响我们称为**抖动**。

`,Ei=`---
tags:  
    - shell
---

# cygwin


**windows 平台下实现 linux 终端环境的工具笔记**


## 简介
利用 cygwin 可以在 windows 下配置 linux 的工作环境。

## 使用
在 cygwin 的标题栏点击右键，选项，在鼠标和键盘这两个选项中可以设置，粘贴和复制的方式。
默认为利用鼠标中间进行粘贴。
由于 cygwin 的仿真界面过于低端。可以再安装 minttty 实现功能。


## 参考资料
* [cywin FAQ](https://cygwin.com/faq/faq.html#faq.using.copy-and-paste)
* [cygwin详解](http://www.crifan.com/files/doc/docbook/cygwin_intro/release/htmls/index.html)
`,xi=`---
tags: 
  - shell
---

# SecureCrt 

**终端连接工具的使用技巧和方法**


## 全局环境配置
1. 点击选项->全局选项


## 环境颜色配置
1. 点击 选项-> 会话选项 弹出如下，再点击 终端->外观-> 窗口，注意**要把字符编码选为， UTF-8**,
记住，编码决定了处理数据的逻辑，字体只是决定了处理结果的显示方式，所以在使用软件时看到出现乱码，是
编码方式出错了，而不是字体有问题！

    ![](./img/2016-10-07-tool_SecureCRT1.jpg)
 
2. 点击 终端->仿真 这是我的配置

    ![](./img/2016-10-07-tool_SecureCRT2.jpg)

## 连接配置
1. 点击 文件-> 连接，再 sessions 上点击右键，新建会话

  ![](./img/2016-10-07-tool_SecureCRT3.jpg)
  
2. 在新建会话上选择 会话类型，填入主机 IP 等信息。

## 分屏操作
1. 点击选项-> 全局选项，在打开对话框中选择 终端->标签页/平铺 这是我的配置

  ![](./img/2016-10-07-tool_SecureCRT4.jpg)
  
2. 点击窗口->垂直平铺

    ![](./img/2016-10-07-tool_SecureCRT5.jpg)
    
3. 打开新的会话是注意勾选在层叠窗口打开，不然 SecureCRT 会新建窗口打开会话
 
     ![](./img/2016-10-07-tool_SecureCRT6.jpg)
        
### 交互窗口
选择查看->交互窗口可以实现批量的命令导入。
在使用 vi 复制文本时十分有效。举例如下:

![](./img/2016-10-07-crt_view.gif)
        
## 使用问题
1. delete 变为 \`^h\`
选择选项 -> 会话选项，按照图示勾选两项后，重启会话

2. 方向键失灵
\`\`\`shell
    # 查看用户是否设置 shell
   grep <user_name> /etc/passwd
    
    # 修改shell
    chsh -s /bin/bash
\`\`\`
重启会话及正常。

![](./img/2016-10-07-crt_delete_error.jpg)




`,Ti=`---
tags:  
    - 工具
    - 绘图
---

# visio

**visio 的使用总结**

## 箭头的设置技巧
1. 跨过线时不弯曲
选择跨过后弯曲的的线，按照如下设置

![](./img/2016-10-19-visio.gif)
实际上也可以利用，行为中的放置设置线条的穿过行为。


## 快捷键使用
### 工具选择
* \`ctrl + 1\` 指针工具
* \`ctrl + shift + .\` 放大字体
* \`ctrl + shift + ，\` 缩小字体

1. 插入超链接
* \`ctrl + k\` 选中需要插入快捷键图形，若插入错误选中取消即可

[visio 快捷键](https://support.office.com/zh-cn/article/Visio-%E7%9A%84%E9%94%AE%E7%9B%98%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F-ee952f31-7e3e-4564-8116-f3ecbb733cc1)

## 连接点
连接点是指视图上的小差。如不想显示连接点
* 视图->取消连接点勾选即可

[连接点说明](https://support.office.com/zh-cn/article/%E6%B7%BB%E5%8A%A0%E3%80%81%E7%A7%BB%E5%8A%A8%E6%88%96%E5%88%A0%E9%99%A4%E8%BF%9E%E6%8E%A5%E7%82%B9-5669491f-9fce-4676-81f8-ef4553788416#bm4)

## 创建子流程
### 根据部分内容创建子流程
1. 选中部分流程
2. 选择进程 -> 根据所选内容创建

### 创建完整的子流程
1. 拖出子流程形状
2. 选择进程 -> 新建
3. 在新建的图表中添加子流程

可以利用 进程 -> 链接到现有页面控制子流程的跳转位置
利用 \`alt + 鼠标左键\` 跳转到子流程。  

## 首字母大写改小写
\`工具\` -> \`自动更正选项\` 取消首字母大写功能`,Pi=`---
tags:  
   - 编码  
---

# json

**json 格式及使用**


## 为什么需要 json
讨论如下引用场景，家中的智能设备将状态上报给微信上的 webapp 显示。
设备端利用 socket 进行状态的上报，服务端采用  
a 是一个智能设备它会将每小时温度的数据存储为如下结构体。由于设备使用的是 C 语言数据结构如下:
\`\`\`c++
   typeof struct deviceTmp{  
       int  tmpTime[],   //温度的变化的时间戳
       int  tmpData[]    //对应各时间戳的温度
   } 
\`\`\`

假设传输方式为字符串模式，利用 socket 将消息发给了 node 的服务端处理，由于 node 采用的是 js 
它需要把上述消息转变为如下格式。

\`\`\`js
   deviceTemp = {
    tmpTime:[],
    tmpData:[]
   } 
\`\`\`
如果 node 服务器还需要使用 http 将消息发给 php 服务器保存历史数据。则 php
服务器希望数据格式如下:

\`\`\`php
      deviceTemp = aray(
        "tmpTime" => array(),
        "tmpData" => array()
        
      )
\`\`\`

我们来看一下整个消息的处理过程

\`\`\`html
设备 --编码结构体为字符串--> node服务器 --
--> node 解码字符串 --编码字符串传给 php --> php 解码字符串处理
\`\`\`

数据本身为两个数组，由于设备，node 服务器，php 服务器采用不同的语言，所以在语法表征
相同数据结构时会存在差异。如何保证字符串在传送的过程中无需自定义加解码格式。

## json 是什么
理解了上面的问题可以看出 json 是一种编码方式，规定了如何利用文本来表征不同的数据结构。
所以我们所说的 json 对象更具体来说是如何使用文本模式来表征对象(它只能表征数据对象属性并不能表征方法)。

json 的灵感来自 js 的对象字面量语法。采用键值对的方式来表示数据结构。
支持的基本数据类型包括\`数值、字符串、数组,键值对结构\`
\`\`\`js
   //只支持 10 进制
   jsonNumber = "12" 
   JSON.parse(jsonNumber); // return  12
   
   //支持 unicode 字符集和转义字符字符串内容用双引号
   jsonStr = '"dfdf\\n\\u4e00"' 
   JSON.parse(jsonStr); // {‘dfdf
                        //   一'}"
   //支持多维数组                
   jsonArr = "[1,2,3]" 
   JSON.parse(jsonArr); // [1,2,3]     
   
   //键名必须为字符串用双引号
   //{} 中定义键值对，内部支持基本类型和嵌套结构
   jsonKeyValue = '{"key":12}';
   JSON.parse(jsonKeyValue); // [1,2,3]       
   
   //注意简直对字符串中的两次转义
   jsonKeyValue = '{"key":"\\\\nvalue\\\\u4e00"}'; 
   JSON.parse(jsonKeyValue); // [1,2,3]                                      
\`\`\`


 




`,ji=`---
tags: 
    - 工具     
---

# wamp

**wamp 的安装和配置笔记**


## 概述
wamp 是一个集成了 PHP、mysql、apache 的开发环境。

**注意在 wamp 下重装环境时配置文件不会变化**
这会导致原来无法运行的模块依旧不能正常工作。
1. 不要随便修改配置文件。记得备份，搞清楚了再动手。


## debug
在安装 apache 是，软件运行可能会出故障解决思路如下。

1. 定位错误

![](./img/2016-11-14-apache.gif)

若显示没有占用，请查看 apache 下 error log 的信息。
若利用上述步骤任无法定位问题，进入 wamp 下 apache 的 bin 目录。wamp 软件下路径如下
\`\\wamp\\bin\\apache\\apache2.4.9\\bin\`。
在该路径下打开命令行工具，执行如下语句。
\`\`\`dos
   httpd.exe -e debug  //该命令会显示 apache 的加载过程
\`\`\`
根据结果定位错误位置。

2. 处理错误

* 端口被占用

    若Test Port 80 端口被占用。修改文件 apache.sysConst 。

        Listen 0.0.0.0:80 改为
        Listen 0.0.0.0::8080

* 端口未被占用，wamp 服务为橙色
    1. 左键点击 apache 图标，点击 Apache > Service > Install Service。
    2. 左键点击 apache 图标，点击  Apache > Service > Start Service
    3. 左键点击 apache 图标，点击 Put online 即可
    4. 若在执行上述步骤是出现 \`Could not execute menu item\`请参看如下链接   
    [修改上线错误](http://stackoverflow.com/questions/10266656/could-not-execute-menu-item-internal-errorexception-when-changing-php-vers)

* 端口未被占用但是启用服务后显示 \`Forbidden\`

## 配置数据库时无法重启
修改 \`my.ini\` 的配置文件时注意保存为 **ASCII** 格式。
[第一行错误](http://stackoverflow.com/questions/8020297/mysql-my-cnf-file-found-option-without-preceding-group)

## 经验
配置文件出错时去各分离部分查找问题。`,Ci=`---
tags:  
    - shell
---

# putty

**putty 的使用笔记**

## 利用 putty 实现利用远程服务器建立 tunnel 通道
1. 打开 putty 界面进行配置
    1. 配置会话选项填写远程服务器地址
    2. 选择 ssh -> tunnel 
        1. Destination 选择 Dynamic 和 Auto
        2. Source port 选择 1024 端口 点击添加
    3. 重新回到 session 点击连接
    
    ![](./img/2016-12-02-putty.gif)

2. 打开 firefox 选择工具 -> 选项
    1. 选择高级 ->  网络 -> 设置
    2. 选择手动配置 -> SOCKS 主机 
        填入 localhost 1024 端口
    3. 点击确定后即可利用远程服务器作为 tunnel 通道实现访问。

	![](./img/2016-12-02-putty1.gif)


`,Li=`---
tags:  
    - 数据库
---

# redis 

**redis 数据库的使用笔记**

# 环境配置
1. 源码安装 redis
\`\`\`shell
   # 
   wget http://download.redis.io/redis-stable.tar.gz
   tar xvzf redis-stable.tar.gz
   cd redis-stable
   make 
\`\`\`
2. 安装 tcl 工具,[tcl](http://www.linuxfromscratch.org/blfs/view/cvs/general/tcl.html) 安装网页
参照连接进行安装。
3. 启动
\`\`\`bash
# mac
sudo brew services start redis 
\`\`\`
4. 测试
\`\`\`bash
# 连接 redis
# 若正常连接说明开启成功
redis-cli
\`\`\`

### php redis 扩展安装

* **centos 系统**

    \`\`\`bash
    # 确保安装  phpize
    yum install php71w-devel
    # 克隆 php redis 项目
    git clone https://github.com/phpredis/phpredis.git
    # 进入项目根目录
    # 参考 https://github.com/phpredis/phpredis#installation 完成剩余步骤
    \`\`\`

## 工具
* [gui 工具](https://redislabs.com/blog/so-youre-looking-for-the-redis-gui/)
`,Mi=`---
tags:  
    - 云服务 
---

# 百度地图


**百度地图的使用笔记**


## 快速入门
这里讲解如何在 web 中使用百度地图 API.
1. 进入百度地图网站 [申请秘钥](http://lbsyun.baidu.com/)
2. 创建应用 ![](./img/2016-12-26-baidu_map.jpg)
3. 在界面中包含 js 脚本，其余加载方式详见 [百度 js 说明](http://lbsyun.baidu.com/index.php?title=jspopular/guide/introduction#.E8.8E.B7.E5.8F.96JavaScript_API.E6.9C.8D.E5.8A.A1.E6.96.B9.E6.B3.95)

    \`\`\`html
    <script src="http://api.map.baidu.com/api?v=2.0&ak=您的密钥" type="text/javascript"><\/script>
        
    \`\`\`

4. 在界面中创造放置地图的元素
    
    \`\`\`html
       <div id="map" style="width:500px;height:320px"></div>  
    \`\`\`
5. 使用百度 js 对象创建地图
    \`\`\`html
       <script>
           /** 不要加 \`# 号\`，直接填入 id 名即可
            *  1. 创建 地图对象
            */
        
           var map = new BMap.Map("map"); 
          
          // 2. 创建坐标点 地理坐标点，经度:116.404，纬度:39.915
          var point = new BMap.Point(116.404, 39.915);          
          
          // 3. 地图初始化,15 表示地图比例的显示级别
          map.centerAndZoom(point, 15);
       
         // 4. 配置地图参数 过两秒后，将地图中心点移到经度:116.404，纬度:39.918 的地方 
         window.setTimeout(function(){  
             map.panTo(new BMap.Point(116.409, 39.918));    
         }, 2000);
       <\/script>     
    \`\`\`
    
## 基本概念
开发地图应用时相关术语如下。

| 名称   | 作用                                           |
| :----- | ---------------------------------------------- |
| 控件   | 控制地图显示属性的小组件，例如定位，比例尺等   |
| 覆盖物 | 叠加到地图上的显示称为覆盖物，例如目的地标记等 |



### 控件
百度支持的基本控件

| 类名称             | 作用                               |
| :----------------- | ---------------------------------- |
| Control            | 抽象基类，所有控件均继承此类       |
| NavigationControl  | 平移缩放控件，实现平移缩放         |
| OverviewMapControl | 缩略地图控件，实现可折叠的缩略地图 |
| ScaleControl       | 比例尺控件，显示地图的比例关系     |
| MapTypeControl     | 地图类型控件，显示地图的比例关系   |
| CopyrightControl   | 版权控件                           |
| GeolocationControl | 定位控件                           |

> **控件操作**

1. 添加控件

    在实例化地图对象后使用 \`addControl\` 方法添加控件
    \`\`\`js
       // 添加平移缩放控件
       map.addControl(new BMap.NavigationControl()); 
    \`\`\`

2. 配置控件
    1. 更改位置
    2. 修改大小
    
> **自定义控件**

自定义控件，需要继承控件的基类。
构造器中必须包含如下属性   

* defaultAnchor 设置控件位置
* defaultOffset 设置控件偏移

参照百度说明，定义单击放大两个图像级别控件。

1. 设置构造函数

    \`\`\`js
       // 定义一个控件类，即function    
       function ZoomControl(){    
           // 设置默认停靠位置和偏移量  
           this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;    
           this.defaultOffset = new BMap.Size(10, 10);    
       }    
       // 通过JavaScript的prototype属性继承于BMap.Control   
       ZoomControl.prototype = new BMap.Control(); 
    \`\`\`

2. 初始化控件
    
    \`\`\`js
    // 自定义控件必须实现initialize方法，并且将控件的DOM元素返回   
    // 在本方法中创建个div元素作为控件的容器，并将其添加到地图容器中   
    ZoomControl.prototype.initialize = function(map){    
    // 创建一个DOM元素   
     var div = document.createElement("div");    
    // 添加文字说明    
     div.appendChild(document.createTextNode("放大2级"));    
     // 设置样式    
     div.style.cursor = "pointer";    
     div.style.border = "1px solid gray";    
     div.style.backgroundColor = "white";    
     // 绑定事件，点击一次放大两级    
     div.onclick = function(e){  
      map.zoomTo(map.getZoom() + 2);    
     }    
     // 添加DOM元素到地图中   
     map.getContainer().appendChild(div);    
     // 将DOM元素返回  
     return div;    
     }    
    \`\`\`
    
3. 添加自定义控件

   \`\`\`js
       map.addControl( new ZoomControl()); 
   \`\`\` 


### 覆盖物
覆盖物有如下几类

| 对象名     | 作用                                          |
| :--------- | --------------------------------------------- |
| Overlay    | 覆盖物的抽象基类，所有覆盖物继承此基类        |
| Marker     | 标注地图上的点，可自定义图标形状              |
| Label      | 地图上文本标注，可自定义文本内容              |
| Polyline   | 地图上折线                                    |
| Polygon    | 地图上多边形，可自定义填充色                  |
| Circle     | 地图上原型区块                                |
| InfoWindow | 地图上信息窗口,同一时刻只能有一个信息窗口显示 |
    
> **覆盖物使用**

类似空间，使用\`addOverlay\`添加覆盖物
\`\`\`js
   //初始化覆盖物添加坐标
   var point = new BMap.Point(116.404, 39.915);    
   //添加覆盖物
   map.addOverlay(new BMap.Marker(point));   
\`\`\`
   
> **自定义覆盖物**

\`\`\`js
   function addMarker(point, index){  // 创建图标对象   
   var myIcon = new BMap.Icon("ev_charger.png", new BMap.Size(25, 25), {    
   // 指定定位位置。   
   // 当标注显示在地图上时，其所指向的地理位置距离图标左上    
   // 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
      // 图标中央下端的尖角位置。    
      offset: new BMap.Size(10, 25),    
      // 设置图片偏移。   
      // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
      // 需要指定大图的偏移位置，此做法与css sprites技术类似。    
      imageOffset: new BMap.Size(0, 0 - index * 25)   // 设置图片偏移    
    });      
   // 创建标注对象并添加到地图   
    var marker = new BMap.Marker(point, {icon: myIcon});    
    map.addOverlay(marker);    
   }    
   // 随机向地图添加10个标注    
   var bounds = map.getBounds();    
   var lngSpan = bounds.maxX - bounds.minX;    
   var latSpan = bounds.maxY - bounds.minY;    
   for (var i = 0; i < 10; i ++) {    
    var point = new BMap.Point(bounds.minX + lngSpan * (Math.random() * 0.7 + 0.15),    
                               bounds.minY + latSpan * (Math.random() * 0.7 + 0.15));    
    addMarker(point, i);    
   } 
\`\`\`


## 参考资料 
* [百度工具包](http://lbsyun.baidu.com/index.php?title=open/library)   
* [百度地图示例](http://lbsyun.baidu.com/jsdemo.htm#c1_14)
* [地图类参考](http://wiki.lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html) 

`,Bi=`---
title: github    
tags:  
    - git      
birth: 2017-01-12      
modified: 2017-01-12      
---

# github

**github 的使用笔记**


## github pages
### 概述
github 提供 \`<username>.github.io\` 的域名,作为用户 github 仓库静态服务的地址.
github page 存在两种类型.
* 用户或组织的主页
    * 仓库名必须为 \`<username>.github.io\`
    * 整个 master 分支下的内容用来编译生成你的主页
    * 仓库根目录,映射地址为 \`<username>.github.io/\` 
   
* 用户或组织项目主页
    * master 或 gh-pages 整个分支编译生成项目主页
    * 只使用 master 下的 \`docs\` 文件夹作为项目主页
    * 项目根目录或 docs 目录,映射地址为 \`<username>.github.io/<projectname>/\`


路径映射原理参见 [用户组织项目页面](https://help.github.com/articles/user-organization-and-project-pages/).
使用 github page 具有如下限制
* 资料内容不大于 1GB
* 流量限制 100GB/月
* 编译限制 10/小时

github 主页除了利用 html ,还可使用 [Jekyll](https://jekyllrb.com/docs/installation/)
来编译生成静态页面.

## github pages 快速配置
下面以用户 github pages 为例讲解配置步骤.
项目中的 github pages 类似.

1. 在 github 主页创建仓库名为 \`<username>.github.io\` 的项目
2. 在创建的项目的 \`Settings\` 选项 \`github pages\` 区域
    * 选择以 master branch 为主页 (默认纪委该选项)

3. 在仓库中中添加 \`index.html\` 文件内容为

\`\`\`html
<h1>hello world!</h1> 
\`\`\`

4. 保存修改后,访问 \`http(s)://<username>.github.io/index.html\` 即可查看到内容.

可参考
* [github pages 自定义](https://help.github.com/categories/customizing-github-pages/)
* [github pages demo](https://github.com/showcases/github-pages-examples)


## 使用 jekyll 编译原始内容
1. 忽略文件中添加 _\`site\` 文件夹作为本地浏览内容
2. 添加全局配置文件 \`_config.yml\`

参看 [github pages 基本使用](http://jmcglone.com/guides/github-pages/)

## github Key already in use
[解决方法](https://help.github.com/articles/error-key-already-in-use/)

删除仓库中的公钥.在全局设置中添加即可.


## github api
1. 登录用户后,在 \`Settings/Developer settings\`
personal access tokens 下生成 token.
2. 参考 [api ](https://developer.github.com/v3/guides/getting-started/#create-a-repository) 进行调用

也可采用其他授权方式调用接口 [授权调用](https://developer.github.com/v3/auth/#basic-authentication)


## 参考资料
* [jekyll](https://jekyllrb.com/)
* [域名重定向规则](https://help.github.com/articles/custom-domain-redirects-for-github-pages-sites/)
* [github.io 快速入门](https://pages.github.com/)
* [github.io  搭建](http://www.worldhello.net/gotgithub/03-project-hosting/050-homepage.html)
* [github help](https://help.github.com/categories/customizing-github-pages/)
* [config github page](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/)
* [github pages](https://pages.github.com/)`,Ai=`---  
tags:  
    - 工具
---

# sublime

**sublime 编辑器的使用**


## 概述
sublime 是一款编辑器。

## 基本配置
1. 去官网下载对应的版本进行安装
[sublime text](https://www.sublimetext.com/3)

安装完成后使用 \`subl --version\` 查看版本。
在 \`help -> enter lincense\` 中输入如下秘钥升级到 sublime 3.

\`\`\`
   —– BEGIN LICENSE —–
   Michael Barnes
   Single User License
   EA7E-821385
   8A353C41 872A0D5C DF9B2950 AFF6F667
   C458EA6D 8EA3C286 98D1D650 131A97AB
   AA919AEC EF20E143 B361B1E7 4C8B7F04
   B085E65E 2F5F5360 8489D422 FB8FC1AA
   93F6323C FD7F7544 3F39C318 D95E6480
   FCCC7561 8A4A1741 68FA4223 ADCEDE07
   200C25BE DBBC4855 C4CFB774 C5EC138C
   0FEC1CEF D9DCECEC D3A5DAD1 01316C36
   —— END LICENSE ——
 
\`\`\`

若密钥不可用可咨询查找。

2. 安装包管理工具 package control
    1. 去 [package control](https://packagecontrol.io/installation#st3)
    2. 参照描述进行安装
        1. 参照 simple 的步骤，在sublime 下利用快捷键\`ctrl + ~\` 打开控制台，复制其中 sublime3 内容到控制行。点击回车
        2.  安装完成后重启 sublime 
        3.  利用 \`ctrl + shift + p\` 打开模板，在其中输入\`package control\` 可以看到一系类的指令直接点击\`install package\` 就会在在弹出一个窗口，直接在窗口中安装你所需要的插件即可   
        
        安装该软件时可可能汇报如下错误，缺失 _ssl 文件。解决如下[缺失_ssl](https://github.com/wbond/package_control/issues/989)

    3. 参看 [package usage](https://packagecontrol.io/docs/usage) 验证安装成功
  
3.  利用包管理工具安装如下插件
    1. 使用 \`ctrl + shift + p\`(linux) 打开包管理工具
    2. 输入 pci ，选择 \`install package\` 安装插件
    3. 注意输入如下插件名进行安装
        * autoprefix      自动添加 css 前缀
        * colorpicker     自动添加颜色
        * emmet            快速编写 css 的利器
        * html-css-js prettify 格式化利器
        * git gutter       标识文件修改
        * gutter color      标识 css 有颜色属性的语句
 

## 常用快捷键
### 编辑

* \`ctrl + shift + d\` 复制一行
* \`ctrl + shift + 上下键 \` 移动某一行 

`,Di=`---
tags:
    - web
---
# emmet 使用手册

**利用 emmet 提高前端编写效率** 

---

## 环境安装
[emmet 官网](http://docs.emmet.io/) 下载编辑器插件，PHPSTORM 默认安装 EMMET 来开发代码

## 快速上手
采用缩写来定义常用的标签属性，及标签。例如
\\#id1 按下 tab 键后会变成\`<div id="id1"></div>\`
演示一个复杂的例子。
范例：

\`\`\`md
#page>div.logo+ul#navigation>li*5>a{Item $}
\`\`\`

按下 TAB 键后展开结果为：

\`\`\`html
<div id="page">
    <div class="logo"></div>
    <ul id="navigation">
        <li><a href="">Item 1</a></li>
        <li><a href="">Item 2</a></li>
        <li><a href="">Item 3</a></li>
        <li><a href="">Item 4</a></li>
        <li><a href="">Item 5</a></li>
    </ul>
</div>
\`\`\`

 将上述范例进行拆解，\`#page\` 默认产生了一个 id 为 div 的标签，\`>\` 和 CSS 的自结合符含义相同，代表 \`id=page\` 的 div 标签内部嵌套了，
 \`class=logo\` 的 div 其中 \`.logo\` 即表示类名为 \`logo\` \`+\` 号类似 CSS 的相邻兄弟结合符及 \`id=navigation\` 的ul 和div 之间是并列关系
 在后面的 \`*5\` 表示前面的 \`li\` 出现 5 次，{ $}表示 a 标签中包含按次序
 增加的 Item 1-5 的内容。再根据标识符优先级关系可以将上面的结构表示如下
 \`#page>(div.logo+(ul#navigatiaon>(li*5>a{Item $})))\`

## 符号详解
EMMET 的语法类似与 CSS 的选择器标识符，语法分为  HTML 内部标签的简明写法和 style 中 CSS 的简明语法使用
并且支持嵌套操作，这在生成表格和产生表单等嵌套层级元素中及其有效，若自定标签例如 \`tag\` 按 tab 键后会变成标签格式
在组合时中间不能加空格，因为 EMMET 会将空格识别为结束，当然字符串中或\`{}\` 中的空格除外。

### 嵌套操作符
* **子代:\`>\`**

范例：\`div>ul>li\`

结果
\`\`\`html
<div>
    <ul>
        <li></li>
    </ul>
</div>
\`\`\`

* **兄弟:\`+\`**

范例：\`div+p+bp\`

结果
\`\`\`html
<div></div>
<p></p>
<bp></bp>
\`\`\`

* **上升:\`^\`**

范例：\`div+div>p>span+em^^bq+p\`

讲解：看上面范例攀爬元素可以出现多次，由于每出现一次\`>\`代表树的深度加一，
\`^\` 的作用是使后面的元素或元素组(下面会有范例)向上移动一层，当\`^\`的符号大于树的深度时
就是最外层元素，

结果:
\`\`\`html
<div>
    <p><span></span><em></em></p>
</div>
<blockquote></blockquote>
\`\`\`html

* **元素组:\`()\`**

范例：\`div>(header>ul>li*2>a)+footer>p\`

结果
\`\`\`html
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>
\`\`\`

* **元素组:\`()\`**

范例：\`div>(header>ul>li*2>a)+footer>p\`

结果
\`\`\`html
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>
\`\`\`
### 属性操作符

**ID 和类元素:\`#、.\`**

范例：\`div#header+div.page+div#footer.class1.class2.class3\`

结果

\`\`\`html  
<div id="header"></div>
<div class="page"></div>
<div id="footer" class="class1 class2 class3"></div>
\`\`\`

**自定义属性:\`[属性名1="属性值1..." 属性名2="属性值1"...]\`**

范例：\`td[title="Hello world!" colspan=3]\`

结果
\`\`\`html
<td title="Hello world!" colspan="3"></td>
\`\`\`

**项目编号:\`$\`、\`$@-\`、\`$@n\`**
解释:\`$\` 来表示顺序增加，\`$@-\`按照 \`*n1\` 从 n1 开始倒序减少,\`$@n\` 表示从
n 开始计数,这两种符号也可以结合使用\`$@-n\` 表示从基数为 n 加上重复符的次数倒序排列


范例：
1.\`ul>li.item$*5\` 
2.\`ul>li.item$@-*5\` 
3.\`ul>li.items$@10*5\`
4.\`ul>li.items$@-10*5\`

结果

1.
\`\`\`html    
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
</ul>
\`\`\`
2.
\`\`\`html
<ul>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
    <li class="item2"></li>
    <li class="item1"></li>
</ul>
\`\`\`

3.
\`\`\`html
<ul>
    <li class="items10"></li>
    <li class="items11"></li>
    <li class="items12"></li>
    <li class="items13"></li>
    <li class="items14"></li>
</ul>
\`\`\`
1. 
\`\`\`html
<ul>
    <li class="items14"></li>
    <li class="items13"></li>
    <li class="items12"></li>
    <li class="items11"></li>
    <li class="items10"></li>
</ul>
\`\`\`

**文本:\`{}\`**

范例：\`a["http://www.baidu.com"]{Click me}\`

结果

\`\`\`html
<a href="http://www.baidu.com">Click me</a>
\`\`\`

### 元素类型
所有元素的缩写和展开方式，都是以 json 的格式存储在 [snippets.json](https://github.com/emmetio/emmet/blob/master/lib/snippets.json)
的文件之下，这就意味着你可以自己修改，此文件来增加你所需要的缩写扩展。具体详见[EMMET 元素扩展](http://docs.emmet.io/abbreviations/types/)

### 隐式标签名
解释：当你在只使用 \`#类名\` 或 \`.属性名\` 是他可以根据父标签自动将属性添加到可能的标签中

举例: 
1.\`span#s1>#s2\` 
2.\`ul>.l_1\`

结果:

1.
\`\`\`html   
<span id="s1"><span id="s2"></span></span>
\`\`\`

2.
\`\`\`html
<ul>
  <li class="l_1"></li>
</ul>
\`\`\`

### [乱数假文](http://baike.baidu.com/link?url=hhaREMXKD4-FXl8e_K3p-8rcrJo0pxI26Ky9VDvoHX-9djUboExXcAcFnoF1_tI1TT_Kph5fcnDf4fQ9SVJVda)生成器
解释：乱数假文是一堆无意义的英文字符序列，是用来验证印刷排版的，你可以在段落中先插入这些，乱序字符
来模拟看排版是否正确。\`lorm\`后面跟数字可以控制生成的单词数量

举例:
1.\`p>lorem\` 
2.\`p>lorem3\`

结果:
1.
\`\`\`html
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus delectus eaque est iste laboriosam minima
necessitatibus, nostrum numquam officiis quaerat qui recusandae reiciendis repellat sint soluta tempora unde vero
voluptas!
</p>
\`\`\`
2.
\`\`\`html
<p>Lorem ipsum dolor.</p>
\`\`\`
## CSS 缩写
直接在 style 标签或 .css 文件中使用 css 缩写就会被，emmet 展开，

举例:1.\`m:10p\`2.\`mr10r\`3.\`p5rem+m10px!\`

结果:
\`\`\`css
/* 1 */
margin: 10%;
/* 2 */
margin-right: 10rem;
/* 3 */
margin: 10px !important;
\`\`\`

解释: css 缩写的展开方式及其智能，自动识别缩写全称及单位，感叹号代表重要性。

### 厂商前缀
对于不同属性由于各浏览器厂商会定义自己的规则前缀，在使用 emmet 缩写时自动帮我们识别，添加所有
可能会出现不同前置标签的属性。

`,Vi=`---
tags:
    - 方法论
---
# 技术学习方法论

**技术学习的目的方法等**

---


## 引言
在学习繁杂的 web 技术过程中，有时会陷入一定的焦虑，焦虑的问题如下！
1. 如何选择技术栈？
2. 如何快速上手一门技术？
3. 学会一门技术到精通一门技术的考量标准到底是什么？
4. 如何成为专家级的技术人员？
...

## 技术的阶段性
1. 听过但是忘了
2. 见过还记得
3. 做过且理解

## 如何选择技术栈
<!-- TODO:此处需补充 -->

          
## 学习模式
通过阅读有些的博文总结出了一些内在的规律性。
1. **套路化** 
有详细的操作流程和操作步骤，具有逻辑性和条理性。
2. **阶梯性**  
讲解的方式符合认知规律，都是从最基本的概念入手，逐层递进，实现对知识的整理和讲解。
3. **模块性**  
自成体系，有独立成章，整片文章具有弱相关和强独立，这就意味着对于不同层级的阅读者，能够提供多样的阅读体验。

## 学习问题
1. 建立基础认知，这是第一个阶段学会用
2. 建立场景，这是目前最缺乏的东西，每次，学完都没有绑定典型情景,导致基本认知出现断裂。需要进行如下强化。
    1. 总结典型应用场景
    2. 积累共性场景和模式
    3. 精简优化场景形成模板
3. 建立场景化后需要进一步进行系统级构建
    1. 场景的组合使用
    2. 建立场景模式的搭建原则

## 递归原则
1. 从基本层级开始
2. 深化一个层级
3. 实现递归



## 读源码
弄清楚设计思路，进行检索。`,Ni=`---
tags:
    - web
    - 兼容性     
---

# 点击穿透
在移动端，弹出层的事件会触发下层界面中的事件。

[点击穿透](http://www.tuicool.com/articles/6NfaUnM)
[segmentfault 点击穿透](https://segmentfault.com/a/1190000003848737)




## Deferred long-running timer task(s) to improve scrolling smoothness
    
* [ ] [stackoverflow 解答](https://stackoverflow.com/questions/37367200/deferred-long-running-timer-tasks-to-improve-scrolling-smoothness)`,Ii=`---
tags: 
    - 工具
    - 绘图
    
---

# mermaid

**基于 markdown 或 hmml 的画图工具**


## 参考资料
* [ ] [mermaid](http://knsv.github.io/mermaid/#mermaid)


`,Fi=`---
tags:  
    - git
--- 


# github pages

**github pages 的使用详解**


## 概述

[github pages](https://pages.github.com/)  是基于 github 的静态仓库.
可以利用 github pages 建立属于你的静态博客.此外 github 还提供了基于 [jekyll](http://jekyllrb.com/)
的静态网站编译服务,参照 jekyll 的文档规则将文件上传到 github,它会将内容自动编译成静态网站.通过 \`<username>.github.io\` 可以直接访问网站内容.

## 快速入门
1. 在 github 创建 \`<username>.github.io\` 的仓库.
例如我的 github 账户名为 \`zenHeart\` 仓库名为 \`zenHeart.githu.io\`.

2. 本地安装 jekyll 的环境.

    先保证安装了 ruby 环境.
    
    1. 安装 jekyll
        
        \`\`\`bash
        gem install jekyll
        \`\`\`
    2. 安装 bundle 包管理工具
    
        \`\`\`bash
        gem install bundle 
        \`\`\`

3. 初始化 jekyll blog.

\`\`\`bash
# 选择路径,初始化 jekyll 的 blog 目录
jekyll new github_blog 

# 切换到该目录
cd github_blog

# 安装依赖
bundle install

# 查看测试网页
jekyll serve

# 访问 localhost:4000 即可看到 jekyll 
\`\`\`

4. 配置本地仓库

\`\`\`bash
# 在 gitpage_blog 文件下初始化  
git init
\`\`\`

编辑 \`.gitignore\` 文件
添加如下内容

\`\`\`text
# 忽略项目文件
.idea

# 忽略本地编译后站点
_site
\`\`\`
    
添加 github pages 仓库地址

\`\`\`git
git remote add <url> 
\`\`\`



    

~~~javascript
var a = 1;

function add(a,b) {
    return a + b;
  
}

JSON.stringify('hello');
console.log('demo');
~~~

`,Hi=`---
tags:  
    - 工具
---

# jekyll

**jekyll 的使用笔记**


## 概述
jekyll 是基于 ruby 的静态博客生成器.
结合 [github pages](https://pages.github.com/)
可以实现快速部署个人静态博客.

## 快速入门

1. 环境安装
    * \`brew install ruby\` 安装 ruby,mac 默认安装了 [ruby](http://www.ruby-lang.org/en/downloads/) 环境.
    * \`curl -L get.rvm.io | bash -s stable\` 安装 ruby 版本管理工具 [rvm](http://www.rvm.io/)
    * \`gem install jekyll bundler\` 安装 [jekyll][jekyll],[bundler][bundler]

2. 新建 jekyll 博客.

    \`\`\`bash
    # 在家目录创建 blog 文件夹
    mkdir ~/blog

    # 在 blog 目录下初始化 jekyll_demo
    jekyll new ~/blog/jekyll_demo

    # 在 jekyll_demo 目录下安装依赖包
    bundle install

    # 编译本地 jekyll 博客
    jekyll serve
    \`\`\`
    访问 <http://localhost:4000>即可查看到 jekyll 默认主题 [minima](https://github.com/jekyll/minima)
    生成的静态页面.


jekyll serve 编译后的目录结构如下.

\`\`\`text
|-- Gemfile
|-- Gemfile.lock
|-- _config.yml
|-- _posts
|-- _site
|-- about.md
\`-- index.md
\`\`\`

各文件含义

| 文件                                             | 作用                                        |
| :----------------------------------------------- | ------------------------------------------- |
| [\`Gemfile\`](https://ruby-china.org/topics/26655) | ruby 安装包配置文件                         |
| \`Gemfile.lock\`                                   | [bundler][bundler] 记录已安装包的文件       |
| \`_config.yml\`                                    | [jekyll][jekyll] 编译器配置文件             |
| \`_posts\`                                         | 放置文章的目录                              |
| \`_site\`                                          | 编译器生成的静态网站                        |
| \`about.md\`                                       | 介绍信息,默认编译成 \`_site/about.html\` 文件 |
| \`index.md\`                                       | 主站索引,默认编译成 \`_site/index.html\` 文件 |

详见 [jekyll 目录结构](http://jekyllrb.com/docs/structure/)

## 创建新文章

在 \`_posts\` 目录下新建名为 \`<site.time | date: '%Y-%m-%d' >-jkeyll.md\`的文件.
添加如下内容.


\`\`\`text

---
title: jekyll
tags: jekyll ruby
---

jekyll demo
===

**前言: 讲解 jeyll 的使用**
---

today is <site.time | date: '%Y-%m-%d' >
\`\`\`




重新编译\`jekyll serve\`访问 <http://localhost:4000> 即可看到
如下内容


创建文件需要符合三点.

1. 文件名符合 \`<YYYY-MM-DD>-<filename>\` 的格式.
文件后缀取决于你用的文本类型例如 \`.md\` 表 markdown 类型.
2. 文件开头为

    \`\`\`txt

    ---
    title: jekyll
    tags: jekyll ruby
    ---
    \`\`\`
    符合 [front matter](http://jekyllrb.com/docs/frontmatter/) 格式. 该格式基于 [YAML](https://www.wikiwand.com/zh-cn/YAML)
    语法.用来定义文章中的变量,给 jekyll 解析.例如 title 变量值会被编译为对应 html 的 title 标签中.

3. 文章的内容
    \`\`\`md
    jekyll demo
    ===

    **前言: 讲解 jeyll 的使用**
    ---

    today is {{site.time | date: '%Y-%m-%d' }}
    \`\`\`

    符合对应的语法格式, jekyll 通过文件名后缀选择对应的转义引擎,
    例如 \`.md\` 文件,默认使用 [kramdown](https://kramdown.gettalong.org/) 转义为 html.
    可以看到文件内容除了支持标准的 markdown 文法,还支持模板,
    [jekyll][jekyll] 使用 [liquid](https://shopify.github.io/liquid/)
    来转义模板语法.

## 概念建立

通过以上实例我们可以直接在 \`_post\` 文件夹下
建立符合格式的文章,重新编译即可创建博客.
但是这只是最基础的内容,对于常见的博客我们可能有如下需求.

* 更换博客主题(默认主题太简陋)
* 实现索引文件(用来分类显示所有博文)
* 添加评论系统
* 添加博文统计系统
* 个性化配置

以上的需求我们会逐一讲解.

## 更换主题

使用 \`jekyll new <path>\` 命令默认使用的是 minima 主题.
更换主题的步骤如下.

1. 去 [jekyll-theme](http://jekyllthemes.org/) 选择一个你喜欢的主题
也可参看知乎 [简洁明快的 jekyll 模板](https://www.zhihu.com/question/20223939)
2. 进入主题的 github 页面,按照官方说明进行配置即可


简要概述就是把 _post 中的内容拷贝到主题对应文件中.
同时按照主题要求配置好自己个人信息即可.

## 静态服务器的工作流

jekyll 整个处理流程,步骤如下.

1. 读取\`_config.yml\` 配置项,确定 jekyll 引擎的工作,
空文件会利用默认配置进行处理.
2. 在工作目录全局递归查找文件头符合 \`front matter tags\` 格式的内容.
3. 模板处理
    1. jekylll 处理模板变量
        * \`site\` 包含整个静态网站信息,所有页面均可引用
        * \`page\` 包含该静态页面信息,可在页面中备引用
        * \`post\` 提交集合的变量

    2. liqiud 利用该模板将变量替换为对应内容.除了简单的变量替换模板还提供如下功能.
        * liqiud tags
        * liqiud variable
        * liqiud filter 实现内容过滤,

    3. 内容格式转换
        使用 [kramdown](https://kramdown.gettalong.org/converter/html.html) 将 markdown 等文本内容转换为 html 标签.

    4. 布局排版
        将文章写入设定的 \`layout\` 模板,或默认模板的 \`<content>\` 中,
        递归 layout 流程 [递归 layout](http://jekyllrb.com/tutorials/convert-site-to-jekyll/#how-layouts-work)

    5. 文件写入
        将排版后的文档按照文件路径或 \`permalink\` 配置项写入 \`_site\` 目录下

## 常见错误

**误解布局先后顺序**

1. liquid 解析变量在 jekyll 模板转化之前.
可以需要解析的模板变量放入 \`front formatter\` 之中

**忽略文件类型影响**

内容的编译是基于文件类型完成的.
若在 html 文件中包含 \`markdowm\` 类型文件.
解析器不会渲染.可以直接使用 html 替换对应文本内容即可

**复合使用**

例如模板的颜色高亮.使用如下结构

\`\`\`
{% highlight javascript %}
console.log('alert');
{% endhighlight %}
\`\`\`

无需在高亮内容中再使用 markdown 语法.
直接编写需要高亮的内容即可.
牢记静态网站的编译顺序.

liqiud 变量 ->  内容解析器 -> front formatter


## 学习内容
1. 全局配置文件
2. liquid 模板语法
3. 页面配置 \`front formatter\`
4. jekyll 常用特性
    * layout
    * premalink
    * ...

## 常用设置
### 配置 404 页面
只需在工作目录的根目录添加 \`404.md\` 或 \`404.html\` 即可.
或者直接将想作为 404 返回界面的文件的 \`pernalink\` 设置为 \`/404.html\` 即可.
若将今天页面布置到 apache 或 ngnix 服务器上,直接参看官方配置即可.



### 自定义渲染模板
1. 创建自定义模板

在工作目录的的 \`_layouts\` 目录中,新建 default.html.
可以利用模板变量定义引用.核心配置
    * 主内容去使用 \`<content>\`进行替换
    * title 利用 \`<page.title>\` 替换

2. 模板引用

在需要使用该模板的页面 \`fornt formatter\` 中配置 \`layout\` 为 \`_layouts\` 下的文件名.

3. 重新编译内容即可


**其他**

参见 [jekyll tutorials](http://jekyllrb.com/tutorials/convert-site-to-jekyll/)

### 快速入门
前提保证安装了 ruby 和 rubyGems 的保管理工具.

1. 环境安装

\`\`\`shell
sudo gem isntall jekyll

# 创建新 blog
jekyll new blog

# 切换到主目录
cd myblog

# 编译和创建服务
bundle exec jekyll serve
\`\`\`

## jekyll 原理

项目文件 -> 渲染模板 -> 格式转换 -> 静态网站(html,css,js)

详细步骤:

1. site 变量,收集所有静态页面定义的变量.
2. liquid 利用该模板解释文档中的内容
    * liquid

## 渲染模板支持的功能

[templates 模板](http://jekyllrb.com/docs/templates/#link)


[variable](http://jekyllrb.com/docs/variables/)

页面收集功能.当内容非提交或主页面时.
利用 [collections](http://jekyllrb.com/docs/collections/) 归纳页面.
例如按照标签,时间线等.

## collections 使用

利用 collection 来对文章进行分类

1. 去 \`_config.yml\` 文件添加配置,注意文件名称前加 \`_\` 才可引用.

\`\`\`yaml
collections:
  my_collection:
    output: true
    permalink: /:collection/:name

\`\`\`

也可选择其他的映射方式 [collections 映射](http://jekyllrb.com/docs/collections/)

2. 在更目录创建对应的 \`_my_collection\` 的文件夹

实际上 \`_posts\` 就是 jekyll 内部默认的 \`collections\` .

自定义变量放在 \`_data\` 利用 \`site.data.<file_name>\` 进行引用
支持  \`json,yaml,csv\` 三种文件类型.


## 本地文件和 url 映射原理

默认映射方式 \`/:categories/:year/:month/:day/:title.html\`
配置路径映射的方式有两种.
* 在每个文件中的 \`fromt matter\` 中设置 \`permalink\` 属性
* 在 _config.yml 中进行配置,参见 [config](http://jekyllrb.com/docs/configuration/)
和 [collections](http://jekyllrb.com/docs/collections/)

前者的设置会覆盖全局设置.常用技巧

* 忽略文件后缀,会将文件作为 index.html 放入目录

本地的文件类型分为三种.

* pages 直接加载的静态页面或内容
* 定义在 collections 模块中的内容
* 属于 post 目录下的内容

应为对于 post 文件下的内容命名有强约定,而对于其他两种类型没有此约定.
所以在全局设置 \`permalink\` 时对不同文件类型的表示有区别.

例如在全局环境下配置 \`permalink: data\`

* _posts 下的文件 url 为 \`/:categories/:year/:month/:day/:title.html\`
* collection 和 page 为 \`/:title.html\`

## 待度清单

* [ ] [jekyll 基本入门](http://jmcglone.com/guides/github-pages/)
* [ ] 博客迁移 [blog migrations](http://jekyllrb.com/docs/migrations/)
* [ ] 可以包含自定义 sass 文件  [asset](http://jekyllrb.com/docs/assets/)

语言使用 ruby.

\`\`\`
.
├── _config.yml
├── _data
|   └── members.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.md
|   └── on-simplicity-in-technology.md
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
|   └── 2009-04-26-barcamp-boston-4-roundup.md
├── _sass
|   ├── _base.scss
|   └── _layout.scss
├── _site
├── .jekyll-metadata
└── index.html # can also be an 'index.md' with valid YAML Frontmatter
\`\`\`

文件作用.

| 文件或路径          | 描述                                                                     |
| :------------------ | ------------------------------------------------------------------------ |
| _config.yml         | 保存文本编译的配置信息 [config](http://jekyllrb.com/docs/configuration/) |
| _drafts             | 草稿为发布的提交,[草稿工作流](http://jekyllrb.com/docs/drafts/)          |
| _includes           | 自定义重用模板                                                           |
| _layouts            | 包装提交文件的模板                                                       |
| _posts              | 编辑完成的动态文件内容                                                   |
| _data               | 格式化后的网页内容                                                       |
| _sass               | sass 文件                                                                |
| _site               | 默认编译形成的示例目录                                                   |
| .jekyll-metadata    | 追踪未修改文件                                                           |
| index.html,index.md | 主页                                                                     |
| other files         | 所有其他文件目录,例如图片,css 等                                         |

核心配置文件 \`_config.yml\` 决定 jekyll 的编译逻辑.
常用配置如下. <http://jekyllrb.com/docs/configuration/>.

| 配置             | 作用                             |
| :--------------- | -------------------------------- |
| site source      | 设置 jekyll 读取文件的路径       |
| site destination | 设置 jekyll 写入文件路径         |
| exclude          | 排出的路径或文件                 |
| include          | 包含的路径和文件                 |
| keep files       | 组织 jekyll 重新生成的文件或路径 |
| time zone        | 设置主站的时区                   |
| encoding         | 设置文件编码                     |
| safe             | 不懂                             |

## 编辑方法
1. _posts 存放已编写好的内容
2. _drafts 存放草稿


### post 文件规则
* 文件名 \`year-month-day-title.markup\`
    * year 四位格式
    * month,day 2 位格式
    * markup 问文件格式

* 文件开头符合 [yaml front matter](http://jekyllrb.com/docs/posts/)
    * 利用 \`---\` 划分题头和正文
    * 题头用来定义模板需要的默认变量,例如 title 等
    * 文件头定义字段可利用 liquid 模板语法引用.
    * 文件头也可为空,但必须保留 \`---\` 的结构,给 skeyll 解析
    * **注意文本格式不要是 bom 的 utf-8,特别是在 windows 下**
* 文件内容,支持如下格式
    * [markdown](https://daringfireball.net/projects/markdown/)
    * [textile](https://www.promptworks.com/textile)

文件开头提供如下的全局变量给 jekyll 去使用.

| 变量名              | 作用                                             |
| :------------------ | ------------------------------------------------ |
| layout              | 定义布局文件,文件必须存在于 \`_layouts\` 目录下    |
| date                | YYYY-MM-DD HH:MM:SS +/-TTTT 用来确保文件分类正确 |
| category,categories | 配合 yaml list 实现路由的多种映射类型            |
| tags                | 文章的标签                                       |
| permalink           | 设置文件和 url 之间的映射关系                    |
| published           | 是否编译显示该页面,布尔值                        |
| page                | 每个页面包含的变量                               |
| sites               | 网站变量                                         |


利用 \`jekyll serve --unpublished 或 --drafts 来编译草稿或私有文件\`

文件引用路径可以包含变量

\`\`\`md
site.url 在编译时会变为项目根路径

![]({{site.url}}/path/file)
\`\`\`

标注 post 文件格式如下

\`\`\`

    ---  ---> YAML 格式的题头
    layout: post  --> 布局模式为 post
    title:  "test skeyll" --> 文章主题
    date:   2015-11-17 16:16:01 -0600 --> 文章创建时间
    categories: jekyll update -->文章分类
    ---

    ---> 文章正文

    You’ll find this post in your \`_posts\` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run \`bundle exec jekyll serve\`, which launches a web server and auto-regenerates your site when a file is updated.

    To add new posts, simply add a file in the \`_posts\` directory that follows the convention \`YYYY-MM-DD-name-of-post.ext\` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

\`\`\`

文件内容的引用使用\`assets\` 或 \`downloads\` 文件夹.
为了防止应用路径丢失可以在引用前加入\`<site.url>\` 变量.
若加载资源一直属于根目录下则直接使用\`/path/source\` 即可.

\`\`\`md
![test]({{site.url}}/assets/test.jpg)
\`\`\`

可以直接在内容区域使用模板,例如想在文章结尾列出所有文章.

\`\`\`md
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
\`\`\`

内部模板引擎会将所有文章逐一列出.


## 插件体系

[plugins](http://jekyllrb.com/docs/plugins/#converters-1)

注意由于 github pages 中使用的是安全模式进行的编译,意味着你不能使用自定义插件进行编译.
基于此建议本地编译,在 githubpage 上传编译后的内容.

插件安装的三种方式

* 在 \`_plugins\` 目录下放置插件
* 在 \`_config.yml\` 文件中添加插件

\`\`\`yaml
plugins: [[jekyll-coffeescript, jekyll-watch, jekyll-assets]
\`\`\`

利用 \`gem istall jekyll-coffeescript jekyll-watch  jekyll-assets\` 安装插件

* 在 \`Gemfile\` 中添加相关插件

\`\`\`yaml
group :jekyll_plugins do
   gem "my-jekyll-plugin"
   gem "another-jekyll-plugin"
 end

\`\`\`

使用  \`bundle install\` 进行安装.

这三种方式可以被同时使用.插件一般分为五大类.

1. [generators](http://jekyllrb.com/docs/plugins/#generators)

定义一个符合自己规则的编译规则.
利用 generators 可以在每个文件中添加自定义内容.


2. [Converters](http://jekyllrb.com/docs/plugins/#converters)

选择新的转换器来转换文档内容

3. [Commands](http://jekyllrb.com/docs/plugins/#commands)

定义命令在文章中引用.

4.  [Tags](http://jekyllrb.com/docs/plugins/#tags)

自定义标签在模板中使用

5. [Hooks](http://jekyllrb.com/docs/plugins/#hooks)

利用钩子在引擎执行的各个阶段实现自动化控制.

**导航**


* 提取数据放入 _data 目录
* 在题头循环导出数据

1. 利用 data 定义分类用模板进行显示.

\`\`\`yaml
docs_list_title: Docs
docs:

- title: Introduction
  url: introduction.html

- title: Configuration
  url: configuration.html

- title: Deployment
  url: deployment.html
\`\`\`



若要产生排序的列表使用过滤器.


使用模板语言进行过滤.



## 模板原理

利用 [liqiud](https://shopify.github.io/liquid/) 进行模板解析.
利用题头进行变量定义.
模板应用方法.

> **变量**


    --- --> 利用 yaml 题头进行变量定义
    test:hello
    ---

    **<page.test>** --> 此处解析变量,注意变量属于 page 的属性



若想添加原始页面,直接在编译生成的静态网站中建立文档即可.
或者直接在在资源的根目录或子目录,创建 html 文件.
或题头符合 YAML 规范的 mark 文档,都会直接被编译到静态文件根目录
下的相应位置. jekyll 编译器会遍历根目录下内容进行处理.
若存在非 jekyll 直接规定的文件夹则直接编译到静态网站的相应位置.
同时会根据文件的类型进行默认的编译.利用 \`permalink\` 属性控制
markdown 等文档类型的编译位置.


## 坑
**ruby 版本不够**

1. 使用 brew 安装 rvm ,ruby 版本管理工具

\`\`\`bash
curl -L get.rvm.io | bash -s stable
source ~/.rvm/scripts/rvm
\`\`\`

2. 使用 rvm 管理 ruby 安装包

\`\`\`bash
# 验证 rvm 安装成功
rvm -v

# 列出所有 ruby 安装版本
rvm list known

# 安装 ruby,
rvm install 2.1.4

# 使用某版本 ruby 并设为默认
rvm use 2.1.4 --default

# 查看已安装版本
rvm list

# 卸载已安装版本
rvm remove 2.1.4

# 查看安装镜像
gem source

# 跟换镜像
gem update --system
gem uninstall rubygems-updates
gem sources -r http://rubygems.org/
gem sources -a http://rubyg.taobao.org
\`\`\`




**不理解 ruby 生态**

* gem 是 ruby 环境的包管理工具
* gemfile 是 ruby 安装配置文件
* bundle 也是包管理工具,但是比 gem 高级,支持批量安装
* 使用 rvm 管理 ruby 版本
* jekyll 是基于 ruby 的静态生成器
* jekyll 插件可以利用 bundle 来安装依赖


[jekyll]:http://jekyllrb.com/docs/quickstart/
[bundler]:http://bundler.io/

[jekyll-compose](https://github.com/jekyll/jekyll-compose)

## 颜色高亮

1. 
\`\`\`bash
gem install rouge
\`\`\`
2. 

\`\`\`yaml
highlighter: rouge
 
\`\`\`

## 资料
[自动加载](https://swaac.tamouse.org/jekyll/workflow/2016/01/13/jekyll-guard-livereload/)`,Oi=`---
tags:
	- 工具
---

# samba

**搭建 samba 文件服务笔记**


## 概述
利用 samba 可以搭建在 windows 下可访问的文件服务。
使用\`apt-get install sambat\`命令进行安装。
安装完成后跳转到\`vi /etc/samba/smb.conf\`文件下
可以在[samba配置项说明](https://www.samba.org/samba/docs/man/manpages/smb.conf.5.html)
查看详细配置。

利用 windows 进行连接时，使用网络驱动器实现盘符挂载

![](./img/2017-05-25-samba.gif)

## 遇到问题

### windos 不显示文件映射

在使用时 windows 无法正常显示映射路径。
重新注销后再次登录即可。

### 不同用户进行映射
1. win7 系统修改 \`C:\\Windows\\System32\\drivers\\etc\\hosts\` 文件
	\`\`\`md
		<ip 地址> <dns 映射> <别名1> <别名2>..
	\`\`\`
1. 连接的时候利用别名进行连接
	[多用户登录](http://superuser.com/questions/95872/sambawindows-allow-multiple-connections-by-different-users)
3. 连接时使用 \`\\\\<别名>\\<文件路径>\` 进行连接`,zi=`---
tags: 
	- 计算机基础
---

# 正则表达式

**正则表达式笔记**


## 正则表达式使用详解
使用正则表达式的作用
1. 实现复杂文本逻辑的替换
2. 查找文本模式
3. 提取文本模式


\`\`\`html
    <!doctype html>
    <html ng-app="MyModule">
    	<head>
    		<meta charset="utf-8">
    		<link rel="stylesheet" href="css/bootstrap-3.0.0/css/bootstrap.css">
    	</head>
    	<body>
    		<div ng-controller="MyCtrl">
    			<greeting greet="sayHello(name)"></greeting>
    			<greeting greet="sayHello(name)"></greeting>
    			<greeting greet="sayHello(name)"></greeting>
    		</div>
    		<p>number:123-3456-7923</p> 
    		 <p>hello hello hello   hello   hello   </p>
    	</body>
    	<script src="framework/angular-1.3.0.14/angular.js"><\/script>
    	<script src="ScopeAnd.js"><\/script>
    </html>
\`\`\`

### 匹配模式空行  
**注意:在使用正方向预查时，注意预查信息要保证唯一性，及预查模式不存在此时匹配的情况。**   
**也不能出现模式嵌套**

\`\`\`regexp
(?<=\\n)\\s*\\n  //匹配空行
^\\s\\s$        // 匹配规则同上  
\`\`\`

涉及知识点

| 正则符号       | 作用                                                                            |
| :------------- | :------------------------------------------------------------------------------ |
| \`(?<=pattern)\` | 限定搜索字符串前的限制条件，比如范例中\`(?<=\\n)\\s\`，只搜索前面是换行符的空白字符 |
| \`*\`            | 表示前面内容重复0到多次，类似\`{0，}\`，比如 \`\\s*\` 匹配多个或没有空白             |
| \`^\`            | 表示一行输入字符串开始位置，\`^\\s\`,搜索以空白符开始的行                          |
| \`$\`            | 表示一行输入字符串结束位置，\`\\s$\`，搜索以空白字符结束的行                       |
| \`\\s\`           | 单个空白字符，和\`[\\f\\n\\r\\t\\v]\` 相同                                             |

### 匹配 5 个字母的单词

\`\`\`regexp
\\b[[:alpha:]]{5}\\b 
\`\`\`

| 正则符号      | 作用                                                    |
| :------------ | :------------------------------------------------------ |
| \`[[:alpha:]]\` | 表示一个字母                                            |
| \`{n}\`         | 表示前面的内容重复5次，\`a{5}\`,搜索5个相同字母a 的字符串 |
| \`\\b\`          | 匹配单词的边界的位置                                    |


### 匹配一个尖括号内的内容
\`\`\`regexp
(?<=<).*?(?=>)
\`\`\`

| 正则符号 | 作用                                                                                                          |
| :------- | :------------------------------------------------------------------------------------------------------------ |
| \`(?=>)\`  | 正向肯定预查，限定字符串后面的搜索条件，\`(?=>)\`表示搜索字符内容后面必须有>符号                                |
| \`?\`      | 当 \`?\` 跟在\`*，{n,m},+\` 等次数符后面时，表示以最少字符串数量匹配限定条件,默认的是贪婪算法及尽可能多的匹配字符 |
| \`.\`      | 表示除\`\\n\` 外所有字符                                                                                         |


### 匹配电话号码
\`\`\`regexp
\\d{3}(-\\d{4}){2}
\`\`\`

| 正则符号 | 作用                           |
| :------- | :----------------------------- |
| \`\\d\`     | 表示 0-9 的数字，类似于\`[0-9]\` |
| \`{n}\`    | 重复前面的模式 n 次            |


## 后向引用
当我们利用括号进行字符匹配的时候存在两种情况
 1. 只搜索匹配的模式，匹配的模式不会缓存
 2. 搜索到匹配模式后，将匹配模式的的字符串进行缓存

对于模式以，一般是将就的内容整个覆盖为新内容，而模式二则是对旧的内容做部分更改，
及在保留部分原格式的基础上，插入信的格式，此时在替换时就需要利用缓存的内容来进行更新。

对于所有加括号内容，都会实现缓存。缓存的规则如下
1. 从左到右，以分组的左括号为标记，每出现一次左括号，分组序号加1
2. 对于每个匹配的字符串模式，都包含这样一个分组数组，用于保存模式匹配内容
3. 利用 \`\\n\` 表示每个匹配字符串对应的，分组内容
4. 在实现第二种替换时，利用 \`$n\` 来表示分组替换模式

其中 \`\\n\` 的模式匹配比较难与理解简单讲述一下

\`\`\`regexp
查找内容:((\\bhello\\b)\\s+)\\1
替换内容:$1
\`\`\`

1. 由于出现左括号变代表分组，所以每个匹配字符串会保存两个分组
2. 分组1 -> 最外面的大括号匹配的字符串内容，表示后面有空白的 hello 单词
3. 分组2 -> 内层括号匹配的字符串内容，表示hello单词
4. 由于匹配模式后面带有\\1，它表示重复步骤2中的分组结果，及后面带有空白的 hello 字符，
5. $2 替换第4步搜索到的字符串内容，为第1个分组中的内容

| 正则符号       | 作用                                                                        |
| :------------- | :-------------------------------------------------------------------------- |
| \`(exp)\`        | 搜索括号中模式，并保存到分组中 |
| \`(?<name>exp)\` | 将匹配模式内容，保存到名字为name的分组中，也可以使用(?'name'exp)的模式 |
| \`(?:exp)\`      | 搜索括号中模式，不保存到分组内容 |
| \`(?=exp)\`      | 正向肯定预查，匹配 exp 后面的位置 |
| \`(?<=exp)\`     | 反向肯定预查，匹配 exp 前面的位置 |
| \`(?!exp)\`      | 正向否定预查，匹配不是 exp 后面的位置 |
| \`(?<!exp)\`     | 反向否定预查，匹配不是 exp 前面的位置 |
| \`(?#comment)\`  | 正则表达式中的注释来描述匹配规则，对匹配不产生影响 |

    
## 正则使用配置项

<table cellspacing="0">
<thead>
<tr>
<th scope="col">名称</th>
<th scope="col">说明</th>
</tr>

</thead>
<tbody>
<tr>
<td>IgnoreCase(忽略大小写)</td>
<td>匹配时不区分大小写。</td>
</tr>
<tr>
<td>Multiline(多行模式)</td>
<td>更改<span class="code">^</span>和<span class="code">$</span>的含义，使它们分别在任意一行的行首和行尾匹配，而不仅仅在整个字符串的开头和结尾匹配。(在此模式下,<span class="code">$</span>的精确含意是:匹配\\n之前的位置以及字符串结束前的位置.) </td>
</tr>
<tr>
<td>Singleline(单行模式)</td>
<td>更改<span class="code">.</span>的含义，使它与每一个字符匹配（包括换行符\\n）。 </td>
</tr>
<tr>
<td>IgnorePatternWhitespace(忽略空白)</td>
<td>忽略表达式中的非转义空白并启用由<span class="code">#</span>标记的注释。</td>
</tr>
<tr>
<td>ExplicitCapture(显式捕获)</td>
<td>仅捕获已被显式命名的组。</td>
</tr>
</tbody>
</table>
  
## 平衡组递归匹配
替换模式
利用 \\L或\\l 实现对匹配组字符大小写的转换。
    


## 正则的基本介绍
正则是用来对文本进行模式匹配的语法。


## 正则回归陷阱
[正则陷阱](http://mp.weixin.qq.com/s/OtVRL37CNt_d5yEJPzzBzg)

## 资料
[regexp 学习](http://www.regexlab.com/zh/regref.htm)
`,Ri=`---
tags:
    - 工具
    - http
---

# fiddler

**讲解fiddler的使用**


## fiddler 概述
fiddler 是一个 windows 平台下的 http 抓包工具作用如下：
1. 查看 http 请求
2. 前后端接口调试
3. 测试通信性能

## fiddler 概念
### fiddler 的使用模式
* 流模式 (string) 随时接收
* 缓冲模式（buffering）数据流保存完才会发送

### 常见使用
利用 \`view -> toolbar\`  控制工具栏的显示
`,Ui=`---   
tags:  
  - 计算机基础
  - 规范
---

# 理解版本命名及限定规则

**版本命名和版本限定的相关知识**


## 版本命名规则
我们常见的版本命名格式为

\`\`\`
[name].x.y.z-[state]
\`\`\`

* \`name\`为可选字段,一般为 \`v\`,表示 version 
* \`x.y.z\` 为各版本的序号，遵循 [语义化版本命名规范](http://semver.org/lang/zh-CN/)
  **实际上基于此规范,不应该在版本前出现 name 字段.**

* \`state\` 可选字段,表示版本状态,例如 \`b\` 表示 beta 测试版,其他常见状态,后有详述

### 语义化版本命名规则
该规则对版本的迭代命名,做了很好的限制.
核心规则如下.

| 序号 | 格式要求 | 说明                                                          |
| :--- | :------- | :------------------------------------------------------------ |
| x    | 非负整数 | 主版本号(major)，进行不向下兼容的修改时，递增主版本号         |
| y    | 非负整数 | 次版本号(minor)，保持向下兼容,新增特性时，递增次版本号        |
| z    | 非负整数 | 修订号(patch),保持向下兼容,修复问题但不影响特性时，递增修订号 |


* \`0.y.z\` 表示开发阶段，一切可能随时改变，非稳定版。   
* \`1.0.0\` 界定此版本为初始稳定版，后面的一切更新都基于此版本进行修改。   

### 版本状态
| 描述方式 | 说明              | 含义                                                                                                       |
| :------- | ----------------- | ---------------------------------------------------------------------------------------------------------- |
| \`α\`或\`a\` | alpha 版          | 内测版本，内部测试的版本，bug 较多                                                                         |
| \`β\`或\`b\` | beta 版           | 公测版本，给外部进行测试的版本，有缺陷                                                                     |
| \`γ\`或\`g\` | Gamma 版          | 相当成熟的测试版，于发行版相差无几                                                                         |
| \`rc\`     | Release Candidate | 是前面三种测试版的进一步版本，实现了全部功能，清除了大部分 bug，接近发布倒计时，有时会进一步细分为 rc1,rc2 |

> 实际上大部分前端工具均遵守上述规则

在商业软件中还会见到如下字段.

| 描述方式       | 说明   | 含义                             |
| :------------- | ------ | -------------------------------- |
| \`Demo\`         | 演示版 | 只集成了正式版部分功能，无法升级 |
| \`SP\`           | SP1    | 是 service pack 的意思表示升级包 |
| \`Trial\`        | 试用版 | 试用版                           |
| \`Unregistered\` | 未注册 | 有功能或时间限制的版本           |
| \`Lite\`         | 精简版 | 只含有正式版核心功能             |
| \`enhance\`      | 增强版 | 属于正式版1                      |
| \`free\`         | 免费版 | 自由使用版本                     |
| \`release\`      | 发行版 | 有时间限制                       |
| \`upgrade\`      | 升级版 | 有功能增强或修复 bug             |
| \`Retail\`       | 零售版 | 单独发售                         |
| \`Cardware\`     | 共享版 | 公用许可证                       |



## 版本限定
在进行包管理时,为了保证安装依赖的兼容性.
必须对依赖包版本进行限定.参考  [npm 限定描述](https://docs.npmjs.com/misc/semver) 
举例如下

\`\`\`json
{
  "devDependencies": {
    "karma": "0.13.22"
  }
}
\`\`\`

表示安装 \`0.13.22\` 版本的 karma.

为了方便理解,版本限定的语法简述为为 \`[范围描述]<版本号描述>\`

* 范围描述可选,必须配和版本描述确定范围,无法独立存在
    * \`<\` 小于某一版本号
    * \`<=\` 小于等于某一版本号
    * \`>\` 大于某一版本号
    * \`>=\` 大于等于某一版本号
    * \`=\` 等于某一版本号,没有意义和直接写该版本号一样
    * \`~\` 基于版本号描述的最新补丁版本
    * \`^\` 基于版本号描述的最新兼容版本
    * \`-\` 某个范围,**他应该出现在两个版本描述中间,实际上语法应为 \`<版本描述>-<版本描述>\`,写在此处为了统一**
    
       严格来讲对 \`~,^\` 的表述需要结合具体的包管理工具和版本号规则来确定.但是对于一般使用记住如下原则.
       **\`^\`  是确保版本兼容性时,默认对次版本号的限定约束**
       **\`~\`  是确保版本兼容性时,默认对补丁号的约束**
    
    > 利用 \`^,~\` 的意义在于确保工具包对依赖版本的兼容性,排除主版本更迭,
    > 造成依赖失效的可能. 
    
* 版本描述
    * \`*\` 通配符,类似 \`glob\` 模式 \`*\`
    * \`x,X\` 约等于 \`*\` 号,通常用于次版本和补丁的通配. 
    * \`0\` 警惕这个字符,说明该依赖还未稳定(**如果它遵守语义化命名的话**),此外当该字符出现在最前面时,会改变 \`^,~\` 的限定特性.
    

相关举例如下

\`\`\`
< 1.2.3     小于1.2.3 的版本均可 
= 1.2.3     只支持等于1.2.3 的版本 
<= 1.2.3    只支持小于等于1.2.3 的版本
> 1.2.3     只支持大于 1.2.3 的版本
>= 1.2.3    只支持大于等于 1.2.3 的版本
1.2.3-2     支持 >=1.2.3 <3.0.0 的版本
1.x.1       支持 >=1.0.1 <1.1.0 的版本
*           支持 >= 0.0.0 的版本
""          同 *
1           表示 >=1.0.0 <2.0.0 其余任意位置为空相似
1.0         >= 1.0.0 < 1.1.0
~1.1.1      >=1.1.1 <1.2.0
~1.1        >=1.1.0 <1.2.0
~1          >=1.0.0 <2.0.0
^1.1.1      >=1.1.1 <2.0.0
^0.1.1      >=0.1.1 <0.2.0 注意这里,不要以为是 0.1.1-1.0.0 之间
^0.0.1      >=0.0.1 <0.0.2 同上,请注意
\`\`\`

> 注意大部分包管理工具均遵守上述规则,但是在进行版本限定时,请参考包管理工具的配置项说明,确定语法格式.

## 总结
最常用的知识

### 核心命名规则
* 版本号通常称为 \`x.y.z\`
    * x 主版本号,一般向下不兼容时增加此值
    * y 次版本号,向下兼容,添加新特性时增加此值
    * z 补丁号,修复问题为改变特性时增加此值
    * \`a,b,rc\` 分别表示 内测,公测,发行状态

### 版本限定
* \`~\` 在依赖版本兼容下,最近的补丁版
* \`^\` 在依赖版本兼容下,最近的次版本

> 重点是保证版本依赖的兼容性,不允许出现依赖的主版本号范围可变,即使你的开发包依旧可用


## 参考资料
[语义化版本规范](http://semver.org/lang/zh-CN/)

[npm 版本说明](https://docs.npmjs.com/misc/semver)

[composer version constraints](https://getcomposer.org/doc/articles/versions.md)

[百度文库-版本说明详解](http://wenku.baidu.com/view/267166728e9951e79b892703.html)

[wiki 软件版本](https://www.wikiwand.com/en/Software_versioning)

[What's the difference between tilde(~) and caret(^) in package.json](http://serve.3ezy.com/stackoverflow.com/questions/22343224/)`,qi=`---
tags: 
    - git
---

# gitbook 使用入门

**gitbook 笔记**   


## gitbook 基本介绍
**gitbook** 是用来制作电子书的开源工具。使用 [markdown](markdown) 文法来撰写文章。利用 gitbook 实现网络版的电子书制作。   
除此之外你还可以将书籍导出为 *epub*、*pdf*、*mobi* 的格式，方便自己和他人阅读。   

## 快速入门
### 安装 gitbook
1. 软件安装，软件的使用方法参见[附录教程](#appendix)

      [gitbook 官方下载地址](https://www.gitbook.com/editor)

2. 命令行安装

    在安装 node 环境的基础上，利用 npm 安装 gitbook<br>
    (对 node 和 npm 不懂的请参看 [node 入门](node_guide.md))
    \`\`\`
    npm install gitbook-cli -g //全局安装 gitbook
    \`\`\`

### 初始化gitbook
安装后，显示安装版本来确认安装成功
\`\`\`
gitbook -V //注意 V 大写
\`\`\`
新建目录，在其中初始化 gitbook
\`\`\`
gitbook init
\`\`\`
初始化后默认生成文件如下
\`\`\`
.
├── README.md
└── SUMMARY.md
\`\`\`
编辑 \`SUMMARY.md\` 修改内容
\`\`\`
# Summary

* [Introduction](README.md)
* [第一章](c1/c1s1.md)
\`\`\`
更改原路径为如下结构，并在\`c1s1.md\` 中编写**markdown**文件
\`\`\`
.
├── README.md
└── SUMMARY.md
├── c1/
|   └── c1s1.md
\`\`\`

### 编译运行 gitbook
编译的作用是将 markdown 文件转变为可以访问的 html
\`\`\`
gitbook build
\`\`\`
开启 gitbook 服务
\`\`\`
gitbook serve
\`\`\`
编译成功后显示信息

![](./img/2018-01-11-tool_gitbook_1.jpg)

在浏览器中打开连接
![](./img/2018-01-11-tool_gitbook_2.jpg)


### 错误及说明
1. 在 windos 上安装 gitbook 的软件后，可以直接像使用
markdown 编辑器一样去撰写书籍，上传到自己的 gitbook 账户即可浏览。
2. 笔者在 windos 7 上运行 \`gitbook build\` 时会出现如下错误
![](./img/2018-01-11-tool_gitbook_3.jpg)

错误是随机的也可能发生别的组件安装缺失的情况，解决步骤如下

   1. 在主目录下建立 book.json 的文件
   2. 根据错误提示安装对应的组件包，组件包去 [NPM 官网](https://www.npmjs.com/) 中查找
   3. 查找到对应安装包名称后，在 book.json 中写入如下内容
    \`\`\`
   {
        "plugins": ["-fontsettings","-sharing","-lunr","-search","-highlight","-livereload"]
    }

    \`\`\`
   4. 重新编译\`gitbook build\`
   5. 重新启动服务\`gitbook serve\`
   6. 此时会显示如下信息说明启动成功

      ![](./img/2018-01-11-tool_gitbook_4.jpg)

   7. 打开浏览器输入地址即可

## 详细介绍
通过快速入门我们对 gitbook 有了一个基本认识，下面来讲解在使用中常见的需求

### 书籍的上传
注意上传书籍时，若将 _gitbook 放入了忽略文档，则书籍需要在服务器端编译，就是下图中的 UPDATE 选项。   
建议在本地编辑好书籍后直接上传，包含 _gitbook 文件。 
   
当在本地编辑完书籍后，进入 [gitbook 官网](https://www.gitbook.com/)
用 github 账号登录，创建一本新书，点击新书中的 settings options子目录，在其中获得远程书本的仓库地址

![](./img/2018-01-11-tool_gitbook_5.jpg)

再点击 gitbook 右上角图标进入如下界面

![](./img/2018-01-11-tool_gitbook_6.jpg)

记住 application 中的仓库凭证，在获得了仓库的地址和密码后你就可以将本地书籍推送
到远程仓库了。推送流程如下
\`\`\`
    git remote add gitbook https://git.gitbook.com/{{UserName}}/{{Book}}.git  //添加远程仓库名
    git push -u -f gitbook master //上传你的书籍到远程仓库
\`\`\`
完成以上流程后你就可以在自己的书籍中看到上传内容。为了避免在上传时反复输入用户名和密码可以创建
~/.netrc 文件(只针对 linux 用户)
\`\`\`
echo machine git.gitbook.com valid USERNAME-or-EMAIL password API-TOKEN-or-PASSWORD >> ~/.netrc
\`\`\`
当然你也可以使用命令行创建新仓库
\`\`\`
    git init // 在 gitbook 的根路径下初始化 git
    git add {{yourbook}} // 添加你需要上传的文件
    git commit -m {{comment}} // 填写你的上传说明
    git remote add gitbook https://git.gitbook.com/{{UserName}}/{{Book}}.git  //添加远程仓库名
    git push -u -f gitbook master //上传你的书籍到远程仓库
\`\`\`

若使用的是 gitbook editor 必须现在远程新建书本。
然后点击 \`edit\`即可看到书本的地址，再推送即可
或者点击\`book setting\`也可以看到该设置。


### 生成其它格式书籍
你可以将自己的学习总结整理成册，利用 gitbook 生成 equb、pdf 等格式便于离线阅读。

由于在使用中依赖 ebook-convert，对于 windos 用户安装如下
1. 下载对应系统的应用[calibre](https://calibre-ebook.com/download)
2. 配置环境变量，将\`C:\\Program Files\\Calibre2\`路径添加到 PATH 的环境变量中
3. 安装 ebook-convert \`npm install ebook-convert -g
4. 在书本根目录使用 \`gitbook pdf\` 生成电子书

在书籍根目录下可以保存封面要求如下
1. 1800*2360 的 cover.jpg 200*262 的 cover_small.jpg


在 mac 下的操作步骤.

\`\`\`bash
#安装 calibre 
brew cask install calibre

# 创建命令行的软连接工具
sudo ln -s /Applications/calibre.app/Contents/MacOS/ebook-convert /usr/bin

# 编译生成 pdf
gitbook pdf
\`\`\`

### 书籍配置
官方给出的基本结构如下

\`\`\`
.
├── book.json
├── README.md
├── SUMMARY.md
├── chapter-1/
|   ├── README.md
|   └── something.md
└── chapter-2/
    ├── README.md
    └── something.md
\`\`\`
各文件说明

| 文件        | 描述                                 |
| :---------- | :----------------------------------- |
| book.json   | 存储对书本的配置信息例如版本、插件等 |
| README.md   | 对于书籍或章节的简介                 |
| SUMMARY.md  | 书本目录                             |
| GLOSSARY.md | 显示文章中的术语                     |


#### summary 文件
summary 用来配置文档目录，支持层级嵌套，gitbook 利用它生成书本的目录结构
范例如下：
\`\`\`
# 目录

* [第一章](c1/README.md)
    * [第一节](c1/c1s1.md)
    * [第二节](c1/c1s2.md)
* [第二章](c2/README.md)
    * [第一节](c2/c2s1.md)
    * [第二节](c2/c2s2.md)
\`\`\`
可以支持在目录中使用锚点
\`\`\`
# 目录

* [第一章](c1/README.md)
    * [第一节](c2/c2s1.md#mark)
        *[第一段](c2/c2s1.md#p1)
\`\`\`
利用markdown标题和水平线语法可以将目录划分为块
\`\`\`
# 目录

### 第一块
* [第一章](c1/README.md)
    * [第一节](c2/c2s1.md#mark)
        *[第一段](c2/c2s1.md#p1)

### 第二块
\`\`\`
在目录前生成扉页

\`\`\`

---
书名：WEB 学习笔记
---

# 目录
...
\`\`\`
####　book.json 文件
详细配置参见 [gitbook 配置说明](https://toolchain.gitbook.com/config.html)
本书的配置文件如下
\`\`\` json
{
  "title": "WEB 学习笔记"，
  "language": "zh",
  "author": "zenheart",
  "output": null,
  "plugins": ["-fontsettings","-sharing","-lunr","-search","-highlight","-livereload"],
  "variables": {}
}
\`\`\`
### glossary.md
定义术语
\`\`\`
    ## 术语1
    解释

    ## 术语2
    解释
\`\`\`




解释
1  #book-search-results > div.search-noresu...


### gitbook 忽略
若想在 gitbook 下实现文件的忽略。可以利用
* .gitignore
* .ignore
* .boolignore
三种格式的文件实现。语法遵循 .gitignore 语法规则。
### gitbook 评论
利用 gitbook 评论系统来实现协作开发。
注意在采用该模式时，要保证 gitbook 的为段落。

## 插件使用
[gitbook theme api](https://github.com/GitbookIO/theme-api)


## 常见错误
### gitbook Error: ENOENT
升级 gitbook \`gitbook update\`

## 参考资料
[如何利用 git 更新书籍](https://help.gitbook.com/books/how-can-i-use-git.html)

[gitbook api](https://developer.gitbook.com/)

`,Wi=`---
tags:
    - 操作系统
---

# mac 使用指南

**web 工程师的 mac 使用和配置技巧**


## 概述
笔者将 mac 使用分为如下部分.

* \`快捷键\` 常用的系统快捷键
* \`系统工具\` 讲解系统工具的配置和使用
* \`工具\` mac 生态下的常用工具

* \`杂项\` 笔者的使用经验和其他技巧

## 快捷键
### 基本认识
mac 下的按键和 windows 对应关系
* \`⌘\` Command, 类似 windows 键
* \`⇧\` 表示 Shift 
* \`⌥\` Option,类似 windows alt,表示可选功能
* \`⌃\` Control 键  

详细快捷键使用参见,[官方 mac 快捷键](https://support.apple.com/en-ca/HT201236)
下面值着重讲解需要注意的问题.

### 启动切换应用
对于 windows 用户在使用时可能存在如下障碍。
1. 关闭窗口不代表关闭程序。
2. 对于缩小和关闭的窗口，使用 \`⌘tab\` 切换时无法像 windows 一样直接打开。 

常用的应用处理如下

* \`⌘空格键\` 打开 Spotlight
* \`⌘alt+ 空格键\` 打开 finder 搜索
* \`⌘w\` 关闭窗口,应用还在后台
* \`⌘q\` 关闭窗口退出应用
* \`⌘h\` 隐藏窗口
* \`⌘m\` 最小化窗口
* \`⌘tab\` 切换应用可能存在如下三种情况
    * 已关闭窗口的应用
        1. \`⌘tab\` 切换到该应用
        2. \`⌘⌥（option）\` 松开 tab 按住 option
        3. \`⌥（option）\` 松开 \`⌘\` 键即可打开新的应用窗口
    * 以最小化的窗口应用
        1. \`⌘tab\` 切换到该应用
        2. \`⌘ + ↑ 或 ↓\` 代开对应的窗口，利用左右键进行选择
        3. 按 enter 打开应用
    * 隐藏窗口的应用
        切换到该应用后可以直接打开
* 选中文件后按住空格键可以预览该文件
* \`⌘ + ⌥ + esc\` 选择需要强制退出的应用
* \`⌘ + shift + 3\` 全屏截图   
* \`⌘ + shift + 4\` 部分截图   

## 系统设置

### Spotlight

> 学会利用 Spotlight 快速查找和打开应用,快捷键为 **⌘空格**.

为了加快查找效率,打开 spotlight 后利用 **⌘,** 打开配置项.

* 在搜索结果中,关闭对字体，文件，图片，其他的搜索。

> \`⌘,\` 会根据目前所在窗口,打开对应的应用配置,及其有用,后面不再赘述


举例如下:

* 搜索 \`pref\` 打开系统配置
* 搜索 \`activi\` 查看系统运行状态
* 搜索 \`ab\` 打开关于本机
* 搜索应用名,打开对应应用

> 支持中英文两种查找方式,按回车打开对应资源
> 下回再打开任何资源前,先尝试是否可以利用 spotlight 打开!


### dock 
类似 windows 任务栏，但是苹果会将所有安装软件显示在底部 dock 区。

* 关闭底部固定图标显示
利用 spotlight 搜索 \`terminal\` 输入第一句指令.
\`\`\`bash
    # dock 只显示运行的软件
   defaults write com.apple.dock static-only -boolean true; killall Dock 
   
   # 利用该配置恢复所有显示
   defaults write com.apple.dock static-only -boolean FALSE; killall Dock
\`\`\`

* 将 dock 变到左侧
    在 dock 下,打开配置,选择置于屏幕左边,也可根据自己喜好进行调整.

### finder 
类似 windows 计算机,显示磁盘文件.快捷键 \`⌘⌥空格\`

打开 finder 配置,修改如下选项

* 通用
    设置开启新 finder 时，打开家目录
* 边栏
    设置希望在 finder 中显示的文件夹，并关闭标记显示
 
### 用户与群组

打开 \`soptlight\`,搜索用户与群组.进行如下配置

* 登录选项 -> 将快速用户切换菜单显示为图标
* 点击当前用户 -> 登录项，设置自动启动的应用

> 你可以在登录项中配置执行脚本,这样在电脑重启时会自动执行,
例如重新挂载网络磁盘等

### headoff
若拥有苹果手机,电脑和平板,该工具则可实现跨设备同步.
详情参看[利用 headoff 实现三方同步](https://support.apple.com/zh-cn/HT204681)

### 触摸板
搜索触控版,打开配置界面

* 光标点按 
    * 设置轻点表示按
    * 设置辅助点按为右下角

### 键盘
搜索键盘,配置如下

* 键盘->修饰键将大写键改为控制键

### accounts
添加一个 icloud 账号，同步日历，find mac，联系人等

   
### activity monitor

查看系统运行状态工具

详细说明参看 [mac activity monitor](https://support.apple.com/en-us/HT201464)
  
## 命令行工具
mac 特有的命令行工具

### nettop
查看网络所有连接.

\`\`\`bash
# 打开应用
nettop 
# 只查看某个应用名
nettop -p mysqld
\`\`\`

具体使用参看 \`nettop -h\`

会按照应用名显示所有的应用.

* \`d\` 增量显示流入字节,还是总字节数
* \`p\` 控制显示的应用,通过空格选择开启或关闭
* \`q\` 退出应用
* \`↑,↓\` 控制显示的应用
* \`←,→\` 控制横向输出.

各项含义.


### 辅助功能
**设置词典朗读**
打开辅助功能 -> 语音,打开按键时朗读所选文本,快捷键为\`optionesc\`
* \`⌘ + ctrl + d\` 即可显示单词含义

[语音朗读设置](https://www.zhihu.com/question/30134586)
       
## 工具 
### Mac Scripting
利用脚本操作 Mac 应用,资料相见 [Mac Scripting](https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/index.html#//apple_ref/doc/uid/TP40016239-CH56-SW1)

### iMovie
用于视频剪切,查看 <https://www.bilibili.com/video/av57182819/> 学习。

### QuickTime Player
#### 录制 iPhone 镜像
苹果默认播放器,可以利用此播放器对 iPhone 或 iPad 进行录屏。

1. iPhone 或 iPad 链接 mac
2. mac 使用 SpotLight 打开 QuickTime Player
3. 点击新建 -> 影片录制,快捷键为 \`⌘⌥N\` 
4. 在打开的录屏界面中,点击屏幕中的 <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/il/osx-yosemite-quicktime-record_icon.png" width="16"/> 选择连接的 iPhone 或 iPad 即可开始录屏

详细资料参见 [apple 帮助中心](https://support.apple.com/en-us/HT201066)

#### 简单视频裁剪合并
1. 打开需要编辑的视频
2. 点击编辑 -> 修建,快捷键 \`⌘T\`
3. 拖动黄色的区块选择需要裁剪的内容
4. 另存为裁剪内容即可

除了裁剪也支持拼接多个视屏。

1. 打开视频文件
2. 讲其他视频文件按顺序拖入打开的视频
3. 另存为新视频即完成合并工作

详见[视频裁剪](https://support.apple.com/en-my/guide/quicktime-player/qtpa2d90df3d/mac)

### 取色器
前端开发经常需要提取颜色,采用mac自带取色器即可。

1. spotlight 查找 **数码测色剂**
2. 选择需要提取的颜色
3. \`⌘ + ⇧ + c\` 复制颜色即可

> 注意在提取颜色时不要点击,否则会切换到该应用此时 \`⌘⇧c\` 无效,**为了获取 16 进制颜色选择显示原生值即可**

### [Xcode](URL=https://developer.apple.com/xcode/)
* 去 app store 或苹果开发网站 安装 Xcode
* 安装 Xcode 命令行工具,打开终端,输入\`xcode-select --install\`


###  [Homebrew](http://brew.sh/)
mac 包管理工具，注意要先安装好 xcode,才可安装该软件。
后续大部分工具,均采用 \`brew\` 进行安装.

brew 默认将软件安装到了 \`/usr/local/bin\` 目录.
运行 \`brew doctor\` 检查安装.

对于 GUI 软件，需要使用 [\`brew cask\`](https://github.com/caskroom/homebrew-cask/blob/master/USAGE.md) 插件安装
安装 brew cask 插件。

\`\`\`bash
   brew install caskroom/cask/brew-cask 
\`\`\`

例如安装 chrome 使用

\`\`\`bash
   brew cask install google-chrome 
\`\`\`

对于相关 GUI 软件去 [Cask](https://caskroom.github.io/search) 中查询是否有对应安装包。

> 注意何时使用 brew 或 brew cast 进行安装。

* brew
    安装非 GUI 工具
* brew cask
    安装 GUI 应哟

常用的命令如下

\`\`\`bash
   # 安装软件 
   brew install <应用名> 
 
   # 卸载软件
   brew uninstall <应用名>   
             
   # 更新软件,不加包名，更新所有软件
   brew upgrade <应用名>   
              
   # 更新 brew 自身
   brew update 
                     
   # brew 支持断点续传，可以采用该语句清除未下载成功的缓存
   brew cleanup
   
   # 显示软件信息
   brew info <应用名>    
                   
   # 搜索 brew 支持的软件,支持模糊搜索
   brew search <应用名>   
             
   # 显示本机 brew 安装包
   brew list    
 
   # 显示过时的安装包
   brew outdated 
   
   # 记载新的包仓库
   brew tap <仓库名或地址>
\`\`\`

> 由于 \`brew cask\` 安装的为 GUI 软件包，部分命令会有区别,具体情况查看 \`brew cask -h\`

升级 brew 和所有工具的方法如下

\`\`\`bash
  # 更新 brew 和 brew cast
  brew update && brew upgrade caskroom/cask/brew-cask  
  
  # 升级所有 GUI 软件
  brew cask reinstall  \`brew cask outdated\` 
 
 # 升级所有非 GUI 工具
 brew upgrade
    
\`\`\`

笔者安装的开发工具如下

\`\`\`bash
# 开发工具
brew install git  # 版本控制软件
brew install node # 基于 js 的服务端引擎

# gui 工具
brew cask install phpstorm   # 编辑器
brew cask install sublime-text   # 编辑器
brew cask install google-chrome # google 浏览器
brew cask install p4merge # git 冲突解决工具
brew cask install the-unarchiver # 解压工具
brew cask install cheatsheet # 显示 mac 下快捷键
brew cask install ichm # 阅读 chm 文件
brew cask install iterm2 # 终端工具
brew cask install Cyberduck # 连接 sftp 工具
brew cask install licecap # gif 制作工具    
brew cask install spectacle # 控制屏幕工具
brew cask install charles # 代理工具
\`\`\`

#### 典型问题

**无法卸载软件出现  definition is invalid: invalid **

参看 [Fix casks with \`depends_on\` that reference pre-Mavericks ](https://github.com/Homebrew/homebrew-cask/issues/58046#issue-403953746) 的回答

### dash 

用来查找 API 的工具。在 chrome 下可以使用的 devtool 插件.
具体使用查看[dash 用户指南](https://kapeli.com/dash_guide)

### iterm2

[iterm2](https://www.iterm2.com/documentation.html)是终端模拟器，用来加载终端。

打开 iterm 配置项,配置如下

* 选择 \`key->Hotkey\` 设置显示和隐藏 iterm2 热键为 \`⌘⌥.\`
* 选择 \`profile->text\` 取消用灰色绘制文本
* 选择\`profile->color\` 选择配色为 solarized dark 

iterm 常用快捷键

* \`⌘Click\` 可以打开文件，文件夹和链接
    * 若文件名为\`filename:42\`,使用默认编辑器会直接定位到该行
* \`⌘d\` 垂直分屏
* \`⌘shiftd\` 水平分屏
* \`⌘[,]\` 切换各分屏
* \`⌘;\` 显示历史命令,自动补全命令
* \`⌘alte\` 全局查找所有终端
* \`⌘/\` 高亮查找光标位置
* \`⌘t\` 新建终端页
* \`⌘方向键\` 切换终端页
* \`⌘数字键\` 选择对应终端页
* \`⌘alt方向键\` 控制窗口位置
* \`⌘+,-\` 控制窗口和字体大小

iterm 默认 \`alt\` 不会触发 bash 快捷键,
参见 <https://stackoverflow.com/questions/18923765/bash-keyboard-shortcuts-in-iterm-like-altd-and-altf#18925650>

### zsh
zsh 是一个强大的 shell.结合 \`iterm\` 可以极大提高命令行使用效率.
强大之处参考如下: 
* [使用 zsh](https://wiki.archlinux.org/index.php/Zsh_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)
* [zsh优势](http://shanker.blog.51cto.com/1189689/1765036)

下载 zsh 和 zsh-completions(命令补全工具)
\`\`\`bash
 brew install zsh zsh-completions
\`\`\`
    
下载 oh-my-zsh 配置
\`\`\`bash
   git clone --recursive https://github.com/sorin-ionescu/prezto.git "\${ZDOTDIR:-$HOME}/.zprezto" 
\`\`\`

修改 shell 解释器为 zsh.
编辑 \`/etc/shells\` 文件.
末尾添加\`/usr/local/bin/zsh\`,保存关闭。 
在终端中执行以下命令：
        
\`\`\`bash
   chsh -s /usr/local/bin/zsh       
\`\`\`

> 你也可以直接修改 \`/etc/passwd\` 文件, 更改用户对应 shell 环境

更改 zsh 的主题编辑\`~/.zshrc\` 文件。查找 \`ZSH_THEME\` 配置项修改如下
\`\`\` 
ZSH_THEME=pygmalion
\`\`\`

重启 zsh 即可看到效果。

更多关于 [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh/wiki)


### libreoffice
mac 下类似 windows office 的开源软件.

\`\`\`bash
brew cask install libreoffice 
\`\`\`

###  [private-eye](https://radiosilenceapp.com/private-eye)
监测网络连接.

\`\`\`bash
breww cask install private-eye 
\`\`\`

###  [packetsender](https://packetsender.com/download)
tcp 网络监测工具.


### remindes
mac 自带的代办事项软件,方便记录代办内容


### [mackup](https://github.com/lra/mackup)
mac 配置备份工具

> 注意该工具会将原始文件移动到指定目录,删除而在源文件位置采用软链接形式。
> **不要随意删除 mackup 的备份资料,否则会造成原始文件的丢失**


## 杂项
### 文件挂载
挂载远程 ssh 服务器工具.若是简单文件拷贝使用 \`scp\` 指令.

若希望交互更友好使用 \`Cyberduck\`.
若希望可以将远程连接挂载到 finder 文件系统.

1. 安装 [osxfuse](https://osxfuse.github.io/)

    \`\`\`bash
    brew cask install osxfuse
    \`\`\`

2. 安装 sshfs

    \`\`\`bash
    brew install sshfs 
    \`\`\`

3. 使用 sshfs

    \`\`\`bash
    # 挂载 sftp 到本地
    mkdir ~/sshfs
    sshfs <user>@<ip> ~/sshfs
    
    # 卸载 sshfs 文件
    umount ~/sshfs 
    \`\`\`

mac 本身也支持 \`samba\` 服务的挂载.步骤如下

1. \`⌘k\` 打开连接到服务器
2. samba 输入对应的服务器地址,\`smb://<ip>/<path>\` 点击连接即可
       
### 复制文件内容到剪切板
\`\`\`bash
# 复制文件内容到剪切板
cat <filename> | pbcopy 

# 粘贴剪切板内容到终端
echo \`pbpaste\`
\`\`\`


### 命令打开文件

\`\`\`bash
# 利用 google chrome 打开应用
open -a 'google chrome' <filename> 
\`\`\`

### mac 共享文件

1.  打开文件共享设置

    \`系统偏好设置->文件共享\`

2. 设置共享文件夹

    1. 利用 共享文件夹框设置需要共享的目录
    2. 利用用户框设置共享对象及读写权限

3. 设置共享方式
    
    1. smb 用于 windows 用户共享
    2. afp mac 用户共享
    

### icloud 文件丢失
mac 桌面和文档默认使用 icloud 保存。
若取消 icloud 会删除本地文件。只在云端留有备份。
如若想要取消 icloud 对本地文档备份。在系统设置中取消对桌面和文档备份后。
将  icloud 的备份文件保存到对应位置即可

###  存储空间管理

[mac 存储空间管理](https://support.apple.com/zh-cn/HT206996)


### 蓝牙键盘
若购买 ipad 蓝牙键盘,相关快捷键如下 [ipad 蓝牙键盘](http://www.iphonehacks.com/2016/07/complete-guide-using-external-keyboard-ipad.html)
     
### 脚本
mac 中命令和 linux 会有稍许区别.
若为了保证移植性可使用跨平台的脚本语言例如 \`python\` 等.

### 关键按键失灵，例如 del,return 等
切换到其他用户登录.
若其他用户按键正常。说明是软件设置问题。
否则为硬件损坏。


### 检测硬件是否有问题
关机后，在接上电源(拔掉所有外设)，同时按住 \`shift+control+option+开/关机键\` 大概 10 s。
观察电源指示若电源的不变色说明硬件正常。


### safri 开启调试模式
1. \`cmd,\` 打开 safri 配置项
2. 高级选项开启开发模式


### 远程连接 windows
参看 [mac 连接 windows](https://support.apple.com/kb/PH18707?locale=zh_CN).
mac 配置好后 windows 连接参看 [windows 连接 mac](https://support.apple.com/kb/PH18708?locale=zh_CN&viewlocale=zh_CN)

可能出现的问题
1. 保证在一个局域网
2. windows 在网络中会自动显示 mac 共享的文件件.
记得刷新

### 命令行挂载移动硬盘
\`\`\`bash
# 显示所有硬盘
# 注意查看移动硬盘的名称
ls -l /Volumes # 显示挂载的磁盘

# 显示移动硬盘信息 
# 注意查看 Device Node 的值
# 假设为 /dev/disk1s1
diskutil info /Volumes/<盘符名称> 

# 退出移动硬盘
hdiutil eject /Volumes/<盘符名称>

# 创建挂载目录
mdkir ~/mount_hd

# 取消原来挂载点
sudo umount /Volumes/<盘符名称> 

# 挂载移动硬盘
sudo mount_ntfs -o rw,nobrowse /dev/<device node 的值> ~/mount_hd
\`\`\`
经过以上步骤挂载成功.

详见 [挂载硬盘](http://www.crazyant.net/1961.html)
若需永久挂载参考此链接 <https://github.com/GcsSloop/MacDeveloper/blob/master/Skill/Support_Ntfs.md>

### mac 预览图片
1. 选中图片按空格打开
2. 使用方向键切换 



### mac 修改用户名导致丢失管理员权限
1. 开机按住 'cmds' 直到系统运行在终端模式
2. 执行如下命令

\`\`\`bash
# 挂载所有文件系统
mount -uaw 
# 删除设置
rm var/db/.applesetupdone
# 重启电脑
reboot
\`\`\`
3. 此时会要求添加一个新账号


4. 添加新用户后即可对原账号内容进行修改,
原账号内容不会丢失!

### Mac 从睡眠状态恢复之后没有声音
参考 [MacBook Air突然没有声音？](https://www.zhihu.com/question/23498580)

执行 \`sudo killall coreaudiod\` 重启 audiod 进程即可

## 参考资料
[mac os 设置手册](http://sourabhbajaj.com/mac-setup/Homebrew/README.html)

[强迫症的 Mac 设置指南](https://github.com/macdao/ocds-guide-to-setting-up-mac)

[程序员如何优雅地使用 macOS](https://www.zhihu.com/question/20873070/answer/43230384)

[mac 快捷键](https://support.apple.com/zh-tw/HT201236)


`,Gi=`---   
tags:  
   - 操作系统
---

# windows 使用技巧

**windows 系统使用经验**


## windos 环境配置
### 任务管理器

双击空白区域会隐藏工具栏。
[任务管理器最小化模式](https://support.microsoft.com/en-us/kb/193050)

### 运行命令框

利用 \`windows + r\` 进入运行对话框,你可以在对话框中输入你想要打开的软件名，
在打开运行后，利用 \`f4\` 可以查看最近的指令
举例：   
\`\`\`txt
#  打开绘画工具
mspaint 

#  打开资源管理器
resmon 

#  任务管理器
taskmgr 

#  打开计算器
calc 

#  打开 dos 命令窗口
cmd 

#  打开photoshop，如果你已经安装了的话
photoshop 

# 打开记事本
notepad 

# windows 自带截图工具
snippingTool 

# 打开设备管理器
devmgmt.msc  

# 打开环境变量配置
sysdm.cpl

# 打开服务管理
services.msc

\`\`\`
可以利用运行窗口快速启动不同软件配置如下。
   
## 软件
### powershell
windows 下新版 shell

### everything
实现快速的文件查找。

[everything 常见问题](https://xbeta.info/everything/faq.htm#How_do_I_use_regex)

### [Chocolatey](https://chocolatey.org/) 
实现利用命令进行软件安装
常用命令。

\`\`\`bash
# 更新自身
choco upgrade chocolatey 
\`\`\`

### notebook
多方同步工具。
在使用时注意新的笔记本需要打开后才可使用。
若无法同步先去远程服务器查看服务器端是否有结果。
[资料](https://xbeta.info/everything/faq.htm#How_do_I_include_spaces_in_my_search)

### synergy
实现一套键鼠控制多台电脑

## 使用技巧
### 外界显示器配置

![](./img/2018-02-01-windows-mul-screen.gif)


### 更改系统盘符
1. 右键点击计算机->管理->磁盘管理
2. 选择对应磁盘->更改驱动器号和路径
3. 选择新的驱动器号即可


## dos 命令
### systeminfo
功能：显示 windows 系统参数

### ver 
功能：显示系统版本

### netstat
功能：显示网络连接  

举例：
\`\`\`bash
# 查看 tcp 会话状态
netstat  -p tcp  //查看 tcp 会话状态
# 显示某会话
# -a 显示所有网络会话
# -o 显示进程 id
# -n 显示序号
# 查询端口 8080 设计的进程信息
netstat -nao | findstr 8080
\`\`\`

### findstr
查询字符串内容



### SET

设置环境变量

**范例:** 

\`\`\`bash
# 设置环境变量
SET <env_name> = <value>

# 清空该变量
SET <env_name> = 

# 追加变量
STE <env_name> = %<env_name>%;<add_value>

# 显示变量,不存在会报未定义
SET <env_name> 
\`\`\`

### start
启动一个命令行窗口
\`\`\`
   start . //打开当前工作目录 
   start xx //打开应用，应用可以简写后放在 windows 目录下实现 
   start . //打开当前工作目录 
\`\`\`

可以使用该命令执行 windows 脚本，后缀为 \`.cmd\` 的文件。

\`\`\`cmd
   # 文件名
   start /B <command_file_name>  
\`\`\`

### tasklist
显示当前任务
\`\`\`dos
   tasklist /fi "imagename eq chrome*" //查找所有和 chrome 有关的进程 
   tasklist /fi "memusage gt 50000"  //查找占用内存超过50000kB 的进程
\`\`\`


### taskkill
终止当前进程
\`\`\`dos 
   taskkill /im chrome*  //杀死所有和 chrome 有关的进程
\`\`\`

### type
显示文件内容

### select-string

类似 linux 下的 grep 指令。

\`\`\`bash
# 显示对应的 tcp 连接
netstat -tno | select-string ":1111*"  
\`\`\`


## net 

用来停止和重启网络服务

\`\`\`bash
# 开启服务
net start <server_name> 

# 停止服务
net stop <server_name> 
\`\`\`

**注意若使用命令时报 error 5 ，说明需要使用管理员权限执行此命令**

## 快捷键  
### 窗口控制
* \`alt + f4\` 关闭窗口
* \`ctrl + w\` 关闭当前窗口
* \`shift + 应用图标\` 在新窗口打开应用
* \`ctrl + shift + esc\`  迅速打开任务管理器
* \`win + break\`  快速打开系统信息
* \`win + p\`  切换扩展屏模式
* \`win + B\`  定位到任务栏，系统工具
* \`win + n\` 打开任务对应窗口，\`n = [1-9]\` 均可
* \`win + T\` 预览任务栏应用
* \`win + SPACE\` 显示桌面
* \`ctrl + shift + 鼠标左键 + 应用图标\` 管理员方式打开应用

### 文件夹相关
* \`alt + ↑ | ← | →\` 父级和子级文件夹之间的切换
* \`shift + 鼠标右键\` 可以在此处打开命令窗口
* \`ctrl + shift + n\`   新建文件夹
* \`ctrl + d\`   删除文件夹
* \`f2\`   重命名文件
* \`alt + d\`   删除文件夹
* \`鼠标\` 同分区移动文件是剪切粘贴。
* \`ctrl + 鼠标\` 同分区复制文件 
* \`鼠标\` 不同分区复制文件 
* \`shift + 鼠标\` 不同分区剪切粘贴文件 
* \`alt + 鼠标\` 创建快捷方式 

## windows 环境变量详解

> PATH

path 在查找时，会根据顺序进行搜索。
如果找到了对应路径就不会继续查找。
在安装多个版本的软件时可以利用这个特性实现对版本的访问控制。

\`PATH=c:\\python\\2.5;c:\\python\\2.6\` 此时会默认使用 2.5.
\`PATH=c:\\python\\2.6;c:\\python\\2.2\` 此时会默认使用 2.6.

## 软件安装

使用 windows 进行软件安装时，若出现缺少某组件。
按照如下思路解决。
1. 可能是已安装该安装包，但是非官方资源软件无法识别。
2. 未安装该安装包


解决步骤

> 问题 1

1. 利用 \`windows + r\` 打开运行窗口输入 \`control panel\` 打开控制面板选择\`程序和功能\`
2. 在程序中查找对应的安装包，若存在但是安装显示错误，就先卸载。
3. 若无法直接卸载利用\`windows clean up\` 工具进行。
4. 卸载完后重新安装软件

> 问题2

1. 直接去官网下载对应安装包
2. 重新安装即可

## 虚拟光驱使用
对于 iso 的镜像文件，先挂在为虚拟光驱在进行运行。


## 微软软件的使用
### excel2007 的使用

> **行操作**

   

* \`ctrl + shift + +\` 插入一行
* \`ctrl + -\` 删除一行
* \`f4\` 重复上一步操作
* 选中行后利用左下角实心点拖动即可


> **选项卡**

1. 选中需要添加选项框的单元格
2. 点击 数据 -> 数据有效性
3. 选择序列模式
4. 在来源中将多条选项利用英文逗号隔开即可

**注意勾选提供下拉箭头**

> **条件格式**

1. 选择需要设置条件格式的单元格
2. 点击 开始 -> 条件格式 -> 管理规则
3. 新建规则,根据需求选择对应规则类型
4. 完成规则描述,选择对应的填充样式
5. 点击确认规则样式即可被运用到对应的单元格

> **条件筛选**

1. 选择要进行筛选的列
2. 开始 -> 排序和筛选 -> 筛选
3. 点击筛选的下拉框进行选择即可

**利用条件筛选可以满足大部分的需求**

> **甘特图**

[甘特图画法](https://www.zhihu.com/question/20995941)

> **分行求最值**

[数组模式](http://stackoverflow.com/questions/20269814/how-do-i-get-the-max-value-from-the-sum-of-two-columns-in-excel)

> **合并单元格**

* 使用 \`=<单元格1>  <单元格2>'\`

### 连接运算
使用 \`<单元格> & "<字符串内容>"\` 的模式连接内容
   

   

## outlook

### 设置邮箱签名

1. 新建邮件,点击签名
2. 创建签名,名称和内容
3. 设置签名在新邮件中使用

### 添加联系人
1. 点击联系人
2. 创建通讯录
3. 选择联系人即可

## 系统备份还原升级详解
### 升级
#### 硬件配置查看
1. 查看支持最大内存

\`\`\`bash
# 进入 cmd 控制台 
wmic memphysicla get maxcapacity


# 返回值除以 1024*1024 即为最大支持内存容量
\`\`\`

1. [华硕拆机查看](http://detail.zol.com.cn/386/385547/article_eva_53_91.shtml)

 
 
#### 安装固态硬盘

固态硬盘选购技巧

[知乎详解](https://www.zhihu.com/question/20369676)


1. 使用 [ahci 模式](http://jingyan.baidu.com/article/08b6a591fee1c214a9092210.html)
   
## 重装系统

### 启动 u 盘
启动 u 盘 有两种类型.
* uefi 适用于 2012 之后的电脑,是一种新的启动方式
* u 盘启动,对于较旧电脑不具有 uefi 的 bios 启动方式.
此时需要使用 u 盘启动.手动设置实现启动功能.

### pe 使用
1. 配置好 pe 启动盘
2. 利用 pe 启动盘配置好系统
3. 格式化固态硬盘
    1. 尽量减少分区数量
    2. 扇区设置为 4096 对齐
    
**注意 windows 光盘默认不带有驱动,所以在固态分区后,请先将网卡驱动和驱动精灵拷贝到
非系统盘,后续方便进行系统安装**

4. 重启计算机,按 esc 进入启动引导.注意不同品牌的启动引导可能不同.
参见如下.
![](http://www.windowszj.com/uploads/allimg/170130/00000W126-2.jpg)

5. 在 bios 配置界面将 sata 接口配置为 AHCI 模式,此模式会提升固态硬盘的读写速率.

6. 选择 bios 启动项,若为光盘安装则直接选用 dvd 模式,若为 ep,则选择对应的安装镜像即可

7. 若安装系统不带有驱动则使用前面拷贝到非系统分区的驱动进行安装.

## 系统备份
### windows 自带备份工具
在备份之前理解如下概念
* **驱动器** 表示被格式化的存储设备例如光盘，硬盘，软盘等
* **系统镜像** 只包含 windows 系统的驱动器（默认包含所有盘符）
* **备份文件** 对需要保存的文件进行压缩处理
* **备份期** 保存整个系统进行的时间节点


1. 点击控制面板选择备份和还原
2. 选择备份，备份方式有三种
    * 本地硬盘
    * 光盘
    * 网络硬盘
3. 选择需要备份的文件和自动备份的时间设定
4. 进行备份即可

**还原系统**

1. 选择备份和还原

利用还原可以对系统文件进行恢复

若要恢复整个镜像.使用高级恢复选择对应的文件即可.

**对于系统镜像不支持网络操作**

**可以使用 windows 进行文件备份实现网络恢复.但是不要备份系统**

**完全还原还是使用 ghost 文件**



### ghost
利用 ghost 实现对硬盘的恢复.
在初始装机时将安装好驱动和更新的系统盘符进行备份.

在使用 pe 启动后直接利用 ghost 文件进行恢复.




### 显示隐藏桌面
1. 点击运行搜索显示
2. 选择显示隐藏图标
3. 点选需要的图标即可


## 操作系统使用经验
1. 使用包管理工具
2. 进一切可能熟悉和精通命令行
3. 尽可能自动化
4. 形成工作流,远离舒适区
   

`,Yi=`---
tags:
    - 工具
    - http
---

# postman

**postman 的使用**



## 功能
* 利用 runner 导入测试数据
* 支持使用
    * [变量](https://www.getpostman.com/docs/v6/postman/environments_and_globals/variables)
    * [api](https://www.getpostman.com/docs/v6/postman/scripts/postman_sandbox_api_reference)
    
    可以把 postman 当做一个宿主环境
* [data file](https://www.getpostman.com/docs/v6/postman/collection_runs/working_with_data_files) 支持单一请求的多种情况测试    
* 利用 code 将请求转换为其他的语言.
* 利用目录进一步细分 collection
* 保存响应作为测试用例
* 采用链接的方式分享 \`collection\`,详见 [分享 collection](https://www.getpostman.com/docs/v6/postman/collections/sharing_collections)
* 直接在 import 中导入 curl 请求.
`,Ji=`---
tags: 
  - 工具 
---

# phpstorm 使用指南

**phpstorm 的使用技巧**



## 概述
笔者将 phpstorm 使用总结如下

* \`环境配置\` phpstrom 的常用配置
* \`快捷键\` 笔者常用的快捷键进行了分类整理
* \`工具\` 讲解笔者在使用中常用 phpstorm 功能
* \`其他\` 总结使用经验及其他内容
    

## 配置工作环境
phpstorm 中大部分配置均在 \`file -> Default Settings\` 中完成.
对应快捷键:
* \`⌘ + ,\` mac 环境
* \`ctrl + alt + s\` windows 环境

> 该快捷键在后续描述中不会强调,但非常重要!

### 主题配置
1. 选择主题 [phpstorm 主题网站](http://www.phpstorm-themes.com/)
2. 根据机型选择配置文件
    * \`MAC\`  选择 \`.icls\`   
    * \`WINDOWS\` 选择 \`.XML\`   
3. 替换主题,参照[主题帮助说明](http://www.phpstorm-themes.com/content/help)    
4. 选择主题


    ![](http://oap05mfra.bkt.clouddn.com/phpstorm1.gif)
    
### 设置键盘映射风格
phpstorm 在 mac 和 windows 默认快捷键有区别.
通过设置 \`keymap\` 可保证统一性.
 
* \`ctrl + '\`(注意是反引号) 选择 keymap 设置对应的快捷键风格

###  依赖工具
* 配置 SVN 的工作环境   
在 \`settings -> version_control -> subversion\` 中设置 svn.exe 的安装路径

* 配置 git    
在 \`settings -> version_control -> git\` 中设置 git.exe 的安装路径
    
* 添加浏览器   
    1. 打开设置
    2. 搜索  browser,添加新浏览器路径

### 插件安装
在设置界面搜索 plugins ,打开搜索各种插件.笔者使用插件如下

* \`key prompert\` 提醒使用键盘快捷键的工具
* \`IdeaVim\` 开启 vim 模式的编辑器
* \`BashSupport\` 支持 shell 的高亮
* \`settings repository\` 实现多台电脑的配置同步 **注意在同步配置后,涉及到路径的配置,在不同电脑上时需手动修复**
* \`live edit\` 配合 chrome,实现同步编辑



### 配置共享
1. 导出导入设置
[如何导出和导入配置文件](https://www.jetbrains.com/help/phpstorm/2016.2/exporting-and-importing-settings.html)

2. 共享配置文件
[共享配置文件说明](https://www.jetbrains.com/help/phpstorm/2016.1/sharing-your-ide-settings.html)

### wamp 关联 phpstorm
1. 打开配置界面
2. 参照如下 gif [wamp关联 phpstorm](./img/2018-08-10-phpstorm_wamp.gif)


## 快捷键

以 windows 模式下举例.若要查找快捷键.
打开设置面板,搜索 \`keymap\` 再查找对应快捷键即可.

### 控制光标位置
* \`ctrl + m\` 将光标定位到文件中心
* \`alt + j\` 多列模式进行选中,只会选择相同的单词
* \`alt + shift + j\` 取消多列模式
* \`ctrl + shift + m\` 匹配括号的位置，会将光标移动到对应正括号和反括号位置
* \`ctrl + [ 或 ]\` 具有相似功能
* \`ctrl + shift + [ 或 ]\` 可已选中对应的括号区域
* \`ctrl + pageup\` 将光标移动到页面顶头
* \`ctrl + pagedown\` 将光标移动到页面底部
* \`ctrl + g\`  输入\`:行号:列号\`快速定位文件位置

### 编辑文档
**删除**
* \`ctrl + y\` 删除一行，删除从
* \`ctrl + delete\` 删除光标后内容 
* \`ctrl + backspace\` 删除光标前一个字的内容  
* \`ctrl + enter\` 在行首会在该行前创建新行，行末会在改行后创建新行

**复制**   
* \`ctrl + d\` 复制选中块，若没有则只是复制当前行
* \`ctrl + shift + v\` 粘贴文档时可以选择行数，多选时按住\`shift\`，也可以显示剪切板历史

**选择移动**
* \`ctrl + w\` 进行选择扩展,加\`shift\`反向操作扩展
* \`shift + ↑ 或 ↓\` 向上或向下移动一行
* \`shift + ↑ 或 ↓\` 向上或向下选中多行
* \`home 或 end\`移动到行首或行末
* \`shift + home 或 end\` 选择光标到行首或行末的内容
* \`pageup 或 pagedown\` 向上或向下移动一页
* \`shift pageup 或 pagedown\` 向上或向下选择一页
* \`ctrl + shift + [ 或 ]\` 选择匹配括号的内容，注意使用时光标要放在括号前后才起作用
* \`shift + alt + ↑ 或 ↓\` 将光标对应行向上或向下移动，也可以选中多行进行移动
* \`shift + ctrl  + ↑ 或 ↓\` 对于函数等内容，它是向上或向下移动整个函数
* \`ctrl + shift + l \` 格式化代码，再加上\`alt\` 可以格式化全局
* \`alt + shift + insert\` 实现按照矩形格式来选择文本的功能

**文件控制**
* \`ctrl + b\` 跳转到函数 ，或者按住\`ctrl\` 点击函数也可实现该效果。
* \`ctrl + f12\` 显示函数之间的结构关系  
* \`alt + ↑ 或 ↓\` 函数跳转的上下切换
* \`ctrl + alt + ←  或 →\` 实现前进和返回，但是在windows 中这两个快捷键被用来转换屏幕,所以建议自定义快捷键。
* \`ctrl + alt + backspace\` 也可实现返回的功能
* \`F2\` 当出现规则检查错误时进行导航，加\`shift\`为反向导航，利用\`ctrl+f1\`查看错误原因,\`alt+enter\`查看解决办法
* \`F6\` 和 \`F5\` 移动和复制文件，在弹出框中写入路径即可
* \`ctrl + alt + shift + t\`在项目文件树中使用，会出现对文件移动、复制等操作
* \`shift + f6\` 项目窗口中使用可以重命名文件，在编辑模式下没有作用
* \`alt + insert\` 新建文件
* \`ctrl + shift + f\` 在工程中查找内容
* \`ctrl + shift + U\` 或者 edit | toggle case 修改字母大小写
* \`ctrl + -\` 收缩当前区块
* \`ctrl + +\` 展开当前区块
* \`ctrl + shift + -\` 收缩所有区块
* \`ctrl + shift + +\` 展开所有区块

**设置与查找**
* \`ctrl + n\` 全局查找类
* \`ctrl + shift + n\` 全局查找文件，你可以在查找时追加\`:行号:列号\`快速定位文件位置
* \`ctrl + shift + n\` 使用该方法也可以查找目录，只需要在搜索关键字后加上\`/\`的路径索引符即可
* \`ctrl + shift +a\` 查找 PHPSTORM 命令的名称，及快捷键，可以迅速执行
* \`ctrl + q\` 快速查找文档帮助在阅读函数时非常有用
* \`ctrl + alt + t\` 利用此实现环绕


**设置标签**   
* \`shift + f11\`,\`f11\` 设置和清除标签,利用标签来进行文件的修改

**添加注释**
* \`ctrl + /\` 添加单行注释
* \`ctrl + shift +\\\` 添加多行注释

> 注释模式会随着使用语言自动变化


**高级编辑功能**
* \`alt + enter\` 在编辑 php 时，若字符串为 HTML 片段，可以利用该功能实现片段代码编写
* \`alt + enter\` 该命令在不同环境有多种操作非常重要
* \`ctrl + alt + m\` 在编码时，可以将选择的块新建成函数
* \`shift + F6\` 在修改函数或文件名的同时，引用该函数或文件的地方也会同时修改
* \`ctrl + alt + n\` 当光标在函数变量附近时，使用该快捷键会将变量内容变成内联模式

### 工作窗口切换
**项目树和文件之间的切换**
* \`alt + f1 + 1\` 在全局查找到文件以后，利用该快捷键迅速定位在 项目树中的的位置
* \`f4\`  实现在查找到的文件和项目树之间进行切换
* \`alt+左右方向键\` 进行文件切换

**工作窗口切换**
* \`ctrl+tab+左右方向键\`切换所有工作选项
* \`alt + number\` 例如 \`alt + 打开关闭工程
* \`alt + 1\` 打开关闭工程文件夹，可以直接在项目树中输入字符进行查找，也可利用上下左右键进行展开
* \`alt + 6\` 查看 todo 信息
* \`alt + 7\` 打开函数结构显示
* \`ctrl + tab\` 切换显示工具栏
* \`alt + f12\` 快速打开控制台
* \`F12\` 打开最近关闭的窗口
* \`shift + esc\` 退出，\`esc\` 也有退出功能。
* \`ctrl + f4\` 在非编辑窗口下会退出，在编辑窗口下会关闭当前窗口
* \`f4 和 shift +f4\` 打开工程文件夹中所在位置的文件，在新窗口中打开
* \`ctrl + shift + e\`打开最近编辑的文件列表,\`ctrl + e\`相似
* \`alt + home\` 迅速回到顶层导航栏位置，利用上下左右箭头切换文件，这是可以利用上下左右键进行切换和展开
* \`f2\` 导航到下一个错误
* \`shift + f2\` 上一个错误
* \`alt + f12\` 打开终端
* \`ctrl + shift +t\` 在打开终端下创建新终端
* \`ctrl + shift +w\` 在打开终端下关闭终端

> 拖动工作路径和文件到终端下会创建一个指向该路径的新终端


### 杂项
* \`ctrl + j\` 查询当前文件支持的自定义模板
* \`双击 shift\` 显示最近的文件夹,类似 \`ctrl + e\`




## 工具
### 利用 TODO
**应用场景**
1. 标注你以后有待修改的代码
2. 团队协作时，告诉其他人需要维护的部分
3. 记录代办事项

**使用方法**  

> 单人使用  

利用注释快捷键添加注释,在注释中包含
\`todo 描述信息\`,以 js 代码举例

\`\`\`js
//todo 完成 xx 函数重构
\`\`\`

利用 \`alt + 6\` 即可查看项目中所有代办事项

> 多人模式

1. 打开设置,搜索 todo,添加新的 todo 模式，
2. 添加过滤器,点击 todo 窗口的漏斗图标就会看到自己的过滤器。
3. 添加 todo 模板
    1. 在 设置选型中设置好新的标记和过滤器
    2. 使用 live template 编辑模板   
    ![](./img/2018-08-10-phpstorm.png)
    3. 编辑模板中的变量   
    ![](./img/2018-08-10-phpstorm1.png)

更详细的描参见 [官方帮助](https://www.jetbrains.com/help/phpstorm/defining-todo-patterns-and-filters.html?search=todo)

> 使用建议
   
形成自己的 todo 风格，参考 stackoverflow 讨论([todo 的技巧](http://stackoverflow.com/questions/2944360/tokens-in-visual-studio-hack-todo-any-other))   

\`\`\`
    红色: 无法编译和运行的代码 
    // Error - 编译或运行时出错的代码
    // Broken - 代码无法运行或发生崩溃
    // WTF - 极度丑陋的代码
   
    橙色: 代码可以运行，但是方法不恰当
    // Hack - 为了使代码能正常运行而添加的黑客方法
    // FixMe - 代码实现了功能但是可以再可维护性、性能等方面进行改善
    // Bug - 代码已上线，但有时会出现 BUG
    // Review - 代码可以正常工作但是需要复审
    // Smells - 类似于修补
   
    蓝色: 代码可以正常运行，但是需要添加特性或补充
    // Todo - 函数还没有完善
    // Note - 解释目前的进展方便其他人
\`\`\`

### 自定义模板
1. 设置面板中搜索 live template
2. 创建模板组，它的作用是将一组模板放在一起，目的是便于管理，模板组命名可以参考如下规则
    * 根据文件类型建立模板组，比如 md 表示所有 markdown 文件下的模板
    * 只建立一个模板组 locke ,以自己的用户名建立模板组
    * 按照使用场景建立模板组 ，code 表示编程的模板组。
3. 在建立的模板组下创建模板,主要是确定如下方面

    ![](./img/2018-08-10-phpstorm_live_template.jpg)

4. 设置成功后在对应格式的文件中使用 \`ctrl + j\` 可以查看该文件类型对应支持的模板。
或者直接输入模板的简写，使用 tab 进行扩展。

在使用模板中有一些常用的预定义变量 

| phpstorm 内置变量 | 作用                         |
| :---------------- | ---------------------------- |
| $END$             | 用来确定模板展开后的光标位置 |

其余变量参见 [模板变量](https://www.jetbrains.com/help/phpstorm/live-template-variables.html?search=varia)

### 调试代码
重点是理解 phpstorm [run/debug 调试器配置](https://www.jetbrains.com/help/phpstorm/run-debug-configurations.html?search=run/debug)
不同语言需要不同的调试环境.此外需要熟悉 [phpstorm 调试窗口](https://www.jetbrains.com/help/phpstorm/debug-tool-window.html?search=debug)

#### js
参考 [官方调试说明](https://www.jetbrains.com/help/phpstorm/debugging-javascript-deployed-to-a-remote-server.html?search=javascript%20de#d109205e87)

#### html

官方帮助 [liveedit](https://www.jetbrains.com/help/pycharm/2016.3/live-edit.html?search=live%20ed)

1. 首先安装 \`liveedit\` 插件
2. 安装 JetBrains IDE Support chrome 插件
3. 在 phpstorm 中修改界面,chrome 会同步更新

可以配置  [match pattern](https://developer.chrome.com/extensions/match_patterns)

**可能存在问题**

1. 若无法正常运行查看页面是否有错误
2. 注意配置为 javascript 调试模式

#### php
详细步骤参见 [xdebug 配置](https://confluence.jetbrains.com/display/PhpStorm/Zero-configuration+Web+Application+Debugging+with+Xdebug+and+PhpStorm)

1.  打开设置界面选择 php->interpreter 打开 php.ini

    ![](./img/2018-08-10-php_debug.gif)
    
2. 在打开的配置界面中查找\`[xdebug]\`，并修改如下配置信息

\`\`\`ini
[xdebug]
;开启远程调试界面
xdebug.remote_enable = 1 
;设置远程界面地址
xdebug.remote_host = "localhost" 
;开启远程监听端口
xdebug.remote_port= 9000
xdebug.profiler_enable = off
xdebug.profiler_enable_trigger = off 
;xdebug.profiler_output_name = cachegrind.out.%t.%p
;xdebug.profiler_output_dir = "D:/work_software/wamp/tmp"
xdebug.show_local_vars=0
;xdebug 运行环境
xdebug.idekey="PHPSTORM" 
 
\`\`\`

3. 在 chrome 下安装 xdebug helper,修改 Ide key　为 phpstorm。
4. 在 phpstorm 下选择 run->启动 debug 监听
5. 在 phpstorm 页面中设置断点
6. 在浏览器中开启 xdebug helper 调试后，刷新页面即可

可参考
* [xdebug](https://confluence.jetbrains.com/display/PhpStorm/Validating+Your+Debugging+Configuration)
* [phpstomr xdebug](https://confluence.jetbrains.com/display/PhpStorm/Zero-configuration+Web+Application+Debugging+with+Xdebug+and+PhpStorm)

**坑**

> 9000 端口不可用

php-fpm 占用了此端口,所以注意屏蔽该端口使用 9100 代替即可

#### node

[调试 node 应用](https://confluence.jetbrains.com/display/WI/Running+and+debugging+Node.js+application)



### cvs
1. 选择 VCS 选择版本控制软件
2. 选择 git -> clone 操作
3. 输入远程仓库地址
4. 选择本地保存文件夹
5. 克隆到本地后，利用默认的远程仓库 \`origin\` 实现 push 和 pull 操作。

利用\`配置->版本控制->忽略文件\` 添加忽略信息.
详见 [phpstomr 官方忽略文件](https://www.jetbrains.com/help/phpstorm/configuring-ignored-files.html?search=ignore)

也可以使用 \`ctrl + 9\` 切换到版本控制.
选择图标来忽略文件.

可以利用 phpstorm 解决冲突图例如下

![](./img/2018-08-10-phpstorm_solve_conflict.jpg)

详见 [phpstorm 冲突解决](https://www.jetbrains.com/help/phpstorm/2016.3/resolving-conflicts.html)

参考如下方式配置 phpstorm 为冲突解决工具

#### 配置 phpstorm 为 mergetool 工具
参考 [git 配置讨论](https://gist.github.com/jvandyke/4355099#gistcomment-1437345)

phpstorm

\`\`\`ini
[diff]
  tool = pstorm
[difftool]
  prompt = false
[difftool.pstorm]
  cmd = /usr/local/bin/pstorm diff "$LOCAL" "$REMOTE"
[merge]
  tool = pstorm
[mergetool.pstorm]
  cmd = /usr/local/bin/pstorm merge "$LOCAL" "$REMOTE" "$BASE" "$MERGED"
\`\`\`

webstorm

\`\`\`ini
[diff]
  tool = wstorm
[difftool]
  prompt = false
[difftool.wstorm]
  cmd = /usr/local/bin/wstorm diff "$LOCAL" "$REMOTE"
[merge]
  tool = wstorm
[mergetool.wstorm]
  cmd = /usr/local/bin/wstorm merge "$LOCAL" "$REMOTE" "$BASE" "$MERGED"
\`\`\`


::: tip
可以点击顶栏 \`tools-> Run Command\` 触发 phpstorm 命令行工具,
更具体的使用参见 [phpstorm cli](https://blog.jetbrains.com/phpstorm/2013/07/command-line-tools-in-phpstorm/)
:::


## 自动环绕

* \`alt + ctrl + t\` 可以自动添加各种类型的包围快

![](./img/2018-08-10-phpstorm_surrond.png) 需要进行如下配置


## 利用命令打开文件
1. 选择 \`tools -> create command line launcher\`
 
2. 点击确认后即可利用

\`\`\`bash
# 打开文件
pstorm <file_naem> 
\`\`\` 

## 查看代码结构
利用 view->toolwindow->structure 查看代码结构

各图标含义如下

[图标含义](https://www.jetbrains.com/help/phpstorm/symbols.html)


## macros
利用 macro 来录制宏.

1. \`edit -> macros -> start macro recording\` 开始记录宏
2. 执行需要记录的操作
3. \`edit -> macros -> stop macro recording\`

结束后会要求输入宏名称.
保存后利用 \`edit -> macros -> start macro recording\` 播放录制的宏

> 可以在 php 设置中为 \`macros\` 分配快捷键,加快操作

## 其他
### 经验

> 工欲善其事,必先利其器

对于工具的使用笔者的原则为
* \`常看帮助\` 不会使用的地方先去源头看帮助.不要陷入漫长的查找中
* \`多总结,多记录\` 对于配置方面的工作,记下来免得下回又要重来
* \`不要受限\` 当这个工具无法满足你时.请结合其他工具.前提是官方以明确指出没有该特性
 

### 使用问题
#### 缓存
phpstorm 及其占用缓存.当电脑变慢时.
利用 \`file -> invalidate caches/restart\` 重启应用.


#### 工具栏消失
进入 view 菜单选择 \`tool bar\` 和 \`tool button\` 即可。

###  清除无用的 css 样式
1. \`code -> run\` 或者利用快捷键  \`alt + ctrl + shift + i\`
2. 输入 \`unused css\`
3. 选择删除无效的 css 样式

### 文件恢复
1. 右键点击工程文件夹
2. 选择\`local hostory\`
3. 选择 \`show history\`
4. 选中想要还原的状态，点击返回箭头即可。

### 文本对齐
1. 键值对对齐
[键值对对齐](http://stackoverflow.com/questions/29795116/stop-phpstorm-from-aligning-associative-arrays)
2. 变量申明对齐
![](./img/2018-08-10-phpstorm-align-consecutive.jpg)


### 修改 index 索引映射
该方法可以节约 \`phpstorm\` 缓存.
在配置相中打开 \`file types\`
选择 \`ignore files and folders\` 添加需要忽略的文件夹.
支持 \`glob\` 模式的查找.

### file watcher
文件自动监察运行.
详见 ![](./img/2018-08-10-phpstorm-file-watcher.png)

更详细的配置参见官方说明 [new watcher dialog](https://www.jetbrains.com/help/phpstorm/new-watcher-dialog.html#immediateFileSynchronization)

重点为

1. 配置检测文件的作用域.具体规则参见
[文件 scope](https://www.jetbrains.com/help/phpstorm/scope.html)
2. 文件变化后执行脚本配置

* [ ] [phpunit](https://www.jetbrains.com/help/phpstorm/testing-with-phpunit.html)


###  创建的文件被识别为文本模式,无法高亮
1.  打开配置,搜索 file types
2. 在右侧查找 Text 类型
3. 在 registered patterns 中删除被误识别的模式,点击 ok 即可.

参考  [PhpStorm can't highlight the file](https://stackoverflow.com/questions/48223377/phpstorm-cant-highlight-the-file)

## 参考资料
[phpstorm 利用快捷键](https://www.sitepoint.com/phpstorm-top-productivity-hacks-shortcuts/)

[phpstorm 节约时间的快捷键技巧](http://manovotny.com/phpstorm-keyboard-shortcuts/)

[phpstorm 使用视频](https://laracasts.com/series/how-to-be-awesome-in-phpstorm/episodes/24)


`,Ki=`---
tags: 
  - 工具
  - vscode
---

# vscode 使用指南

**vscode 编辑器使用经验**



## 概述
笔者讲解 mac 环境下 vscode 的使用配置。

## 界面结构
使用 spotligh 开启 vscode.基本界面显示如下

![](https://code.visualstudio.com/assets/docs/getstarted/userinterface/hero.png)

包含如下几块

* **Editor** 编辑区,可以横向或纵向打开多个窗口
* **Side Bar** 工作时显示对应视图
* **Status Bar** 工作状态条
* **Activity Bar** 切换视图并显示当前工作文件状态
* **Panels** 额外的面板,显示调试\b,终端等信息

## 基础配置
### 配置主题
\`⌘K ⌘T\` 选择 **Monokai Dimmed** 主题

你可以下载如下插件美化主题:

* [Material Theme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme) 设定主题
	> 尤大使用的是 Palenight 主题
* [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) 主题对应的图标,你也可以选择 [vscode icon](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)

### 配置 code 命令
1. \`⌘⇧p\` 打开命令行面板
2. 所有 \`shell command install\` 执行此命令
3. 该命令会在环境变量创建 \`code\` 命令行工具

示例如下:

\`\`\`shell
# 打开工程
code .
# 在最近窗口打开工程
code -r .
# 创建一个新窗口
code -n 
# \b更换本地语言
code --local=es
# 比较文件差异
code -d <file1> <file2>
# 打开文件并定向到指定行
code -g package.json:10:5
# 查看帮助信息
code --help
# 才 vscode 输出当前命令结果
ls | code -r -

# 禁用所有插件,并打开当前目录
code --disable-extensions .
\`\`\`

更详细的使用参见 [vscode](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)

### 终端设置
默认 mac 终端下,\`alt\` 键无法触发 shell 的多种快捷键,
而是会输出特殊字符.配置如下
1. \`⌘,\`  打开配置
2. 搜索 \`terminal.integrated.macOptionIsMeta\` 设置为 \`true\` 即可

出处参见: <https://github.com/Microsoft/vscode/issues/11314#issuecomment-384067528>


## 快捷键
### 面板切换
* \`⌘⇧e\` 文件夹窗口
* \`⌘⇧f\` 全局搜索
* \`⌘⇧g\` 版本控制界面
* \`⌘⇧d\` 调试界面
* \`⌘⇧x\` 插件界面
### 视窗控制
* \`⌘b\` 显示和隐藏 Side Bar
* \`⌘\\\` 纵向分屏
* \`⌘w\` 切换窗口
* \`⌘m\` \b开启 zen 模式编辑文档,\b详见 [zen mode](https://code.visualstudio.com/docs/getstarted/userinterface#_zen-mode)
    > 默认快捷键为 \`⌘k\` 无法工作,请自行修改
* \`⌘p\` 在已添加的目录中\b快速打开文件
    > 结合 ? 获取 vscode 支持的相关命令帮助
* \`⌘p⇧\` 利用方式运行 vscode 函数
* \`⌃tab\` 窗口切换,利用 \bshift 方向切换

### 导航控制
* \`⌘o\` 打开文件对应的 finder
* \`⌘⇧o\` 打开文件符号链接列表
* \`⌘t\` 显示所有打开文件符号链接列表
* \`⌘p\` 打开文件列表
* \`⌘g\` 定向到特定行
* \`f12\`  显示引用的位置
* \`⇧f12\`  显示所有引用的位置


### 光标操作
* \`⌥→\` 单词后
* \`⌥←\` 单词前
* \`⌘→,⌃e\` 行尾
* \`⌘←,⌃a\` 行头
* \`⌘↑\` 开头
* \`⌘↓\` 结尾
* \`⌘⇧\\\` 代码块开头,结尾来回触发
* \`⌘[\` 向前缩进
* \`⌘]\` 向后缩进
* \`⌘u\` 向后跳转光标位置
	> 注意该操作不能跨文件执行
* \`⌃-\` 向前切换光标位置
	> 该操作可以跨文件执行
* \`⌃⇧-\` 向前移动光标位置

### 其他快捷键
* \`f2\` 选择变量名或者函数名,按该快捷键会重构所有使用该函数或变量的命名
* \`⌘⌥[\` 折叠片段
* \`⌘⌥]\` 展开片段

## 配置
vscode 配置分为如下几种
* \`User Settings\` 用户配置,全局作用范围
* \`Workspace Settings\` 作用于当前工程
* \`\bDirectory\` Settings\` 作用于当前目录
\b详细的配置参见 [config](https://code.visualstudio.com/docs/getstarted/settings#_default-settings)
* \`files.exclude\`  配置 sidebar 忽略显示的文件和目录,参见 \b[Explorer tips](https://code.visualstudio.com/docs/getstarted/userinterface#_explorer)
* \`terminal.integrated.shell.osx\` 设定 mac 使用的 shell 建议配置为 \`zsh\`

## 调试
### [node 调试](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)






### 更改语言高亮
1. 使用 \`⌘K M\` 打开语言面板,选择对应语言.

### 更换主题
1. 使用 \`⌘K ⌘T\` 打开主题面板
2. 选择对应主题

### 安装扩展
1. 使用 \`⇧⌘X\` 打开扩展
2. 查找并安装扩展 


### 开发自定义扩展ld
详见 [扩展开发](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_creating-my-own-extension) \b


### 代码片段
\`⌘⇧p\` 搜索 \`config snippets\` 设置代码片段,使用详见 [代码片段](https://github.com/liwei0526vip/vscode/blob/master/10%20!%20%E6%8B%92%E7%BB%9D%E9%87%8D%E5%A4%8D%EF%BC%8C%E4%BD%A0%E7%9A%84%E4%BB%A3%E7%A0%81%E7%99%BE%E5%AE%9D%E7%AE%B1%EF%BC%9A%E5%A6%82%E4%BD%95%E4%B9%A6%E5%86%99code%20snippet%EF%BC%9F.md)

### 设置识别 npmrc 文件
由于 npmrc 格式和 ini 文件类似,采用如下方式识别 npmrc 文件

1. \`⌘,\` 打开配置
2. 搜索 \`associations\`
3. 添加如下配置
	\`\`\`json
	"files.associations": {
		".npmrc":"ini"
	},
	\`\`\`


## 插件

### live server
使用 live server 实现修改实时同步到浏览器。

* \`⌘l⌘o\` 在浏览器打开 live server

## bugs
### 在输入中英文时,有时会出现不显示的 0x08 非法字符
详见 [vscode控制字符引起的问题以及解决思路](https://segmentfault.com/a/1190000013357949?utm_source=tag-newest).参考上述博文配置 \`"editor.renderControlCharacters": true\` 
配置后特殊字符会显示为<small style="font-weight:900">bs</small>.这样在编辑时即可手动删掉 0x08 等不显示字符

## 参考资料
* [ ] [todo 工具的学习](https://www.npmjs.com/package/vscode-todo-plus)
* [vscode](https://code.visualstudio.com/docs)
* [vscode can do](https://www.vscodecandothat.com/)
* [vscode 编辑器](https://github.com/liwei0526vip/vscode)         
* [ ] 插件推荐 <https://www.jonrcorbin.com/the-best-vs-code-extension-list-for-full-stack-developers/>`,Qi=`---
tags: 
    - web
---

# web 简史

**简述 web 的发展历史,理解技术演化的缘由**


## 第一个网页

故事从[伯纳斯-李][bns]开始,他在[CERN][CERN]担任软件工程师时发现查找资料很不方便。
因为各种资料存储在不同的电脑上，他必须登录对应电脑来获取资料。为了实现不同电脑之间资源的共享,他需要解决如下问题:
1. 如何实现多台电脑间资源的共享
2. 如何解决不同类型电脑上资源显示的问题


在 1989 年他完成了初步构想。并与 1990 年发明了第一个[浏览器][worldweb]和[服务器][CERN httpd].
于是第一个[网站][firest_server]诞生了.随后在 1994 年他创建了[万维网联盟](www),来实现对WEB技术的规范化。
这就是如今大名鼎鼎的[**W3C网站**][W3C]。早期的 WEB 组织，为了利于 WEB 的正常发展提出了几个革命性观点:
1. **去中心化**
    没有资源的总控中心，所有 WEB 的资源都应该是独立的节点
2. **无差别**
    网络资源连接之间不具有差异性，也称网络中立性原则
3. **自底向上设计**
    人人皆可为 WEB 做贡献而不是只有专家才可
4. **通用性**
    任何人都何以发布任何资源，但必须遵守相同的规则(遵从 W3C 的规范等)
5. **一致性**
    对于通用的标准，任何人都必须遵守，并且保持一致

## 第一个图形浏览器
在 1990 年，伯纳斯李提出 WEB 思想后，1993 年 NCSA 发明了第一个运行在图形界面下的  [mosaic](https://zh.wikipedia.org/wiki/Mosaic)浏览器。
该浏览器实现了内联图片和带颜色的超链接等功能，而这个项目的领导者[马克·安德森][mld]随后离职开创了[网景公司][Netscape]

## js 的诞生
在当时用户利用浏览器只能显示静态资源,[马克·安德森][mld] 为了实现客户端脚本功能,在 1995 年网景公司的雇员[布兰登·艾克][bl]发明了 javascript 来增强和用户的交互。

网景公司的浏览器初衷是不依赖于运行平台的应用程序，这使得微软感受到了威胁，在网景推出具有 js 功能的浏览器后，微软也不甘落后在浏览器中加入了自己的脚本语言\`Jscript\`.

两家公司为了获取市场份额。相继在自己的浏览器中加入新功能，第一次浏览器大战就此拉开战幕。

## css 的诞生
由于当时 WEB 还是基于 HTML 规范。而自从图形浏览器出现后，为了实现丰富的视觉效果， W3C 
在 HTML 标签中加入了类似于\`FONT、CETEER\`等用来控制文本展现的标签。导致在书写页面时混杂着大量的页面呈现逻辑。

为了改变这种现状，在 1996 年，W3C 发布了 CSS1，将控制页面呈现的内容单独分离出来。而微软
也顺势发布了支持这些规范的 ie3 浏览器。

## EcmaScript 规范
在这场持续的战争中产生了如下问题：
1. 把加入新功能的重要性放在修复错误之前
2. 不尊重 W3C 的标准，采用专属格式
介于上述现状，1996- 1997 ECMA 承担起了规范脚本语言 js 的任务，这个规范就是
[EcmaScript][EcmaScript],他规范了脚本的语法和内建对象。第一次浏览器大战在 1998 年
以微软的胜利告终。

## cgi
在 web 发展的初期它只能获取静态页面。为了实现类似统计访问者数量，
获取数据数据库中的内同并显示等功能，就需要在请求后，利用服务器端的脚本将处理返回。
这样的功能在当时称为[cgi][cgi],随后随着 WEB 的富应用化就出现了类似 PHP、
ASP.NET、Python、Ruby等服务端的语言，它们实现了对请求结果进行处理，
例如查询数据库、处理用户数据等在返回 HTML 或其他资源的功能。

## 表单技术
另一个方面，为了实现客户端向服务器提交数据，比如订购货物，[表单][webform]技术发展起来。


## XMLHttpRequest
可是在使用类似表单的技术时，由于客户端需要等待服务端返回处理结果。微软在2000年利用\`XMLHttpRequest\`对象实现了对请求的异步加载。

## ajax
随后 2005 年goole在开发google地图时,雇员[杰西·詹姆士·贾瑞特][jjg]谈论了利用[ajax][ajax]
技术来实现异步加载。通过跟新浏览器中 DOM 对象节点，实现了在不刷新页面的前提下，从服务器获取数据。
由于 ajax 的出现，使复杂的 web 应用成为可能，出现了像 \`gmail、google map\`这样的杀手级应用。
时间推进到 2007-2010 年，涌现了三种开发潮流。
1. web 向移动页面倾斜
2. jquery 将 js 在前端兼容性等问题进行了解决
3. node.js 发布了，使 js 在服务端运行成为可能。


## MV*
伴随 web 应用的进一步复杂，基于 DOM 操作的 jquery 库无法胜任类似客户端应用复杂度的 SPA.

借鉴路由管理、模板等后端开发理念，前端出现了 backbone,ember,derby,meteor，angular 等
MV* 框架。这些框架整合了各种开发需求，形成了一套完整的应用开发体系。

此外由于 node 在后端的强势发展，及 W3C 等在 html5 和其他 web 标准的逐步完善。
原来单纯的 html 静态资源，渐渐脱离了后端的控制，独立出来成为了完整的前端体系。
包括开发的自动化，各种开发模式百花齐放，产生了如今的前端。


## 参考文章
[Berners-Lee:ansers for young people](https://www.w3.org/People/Berners-Lee/Kids.html)
[web 历史技术参考](http://blog.jobbole.com/45169/)   
[web 的历史](http://webfoundation.org/about/vision/history-of-the-web/)   
[a little history of 3w](https://www.w3.org/History.html)   
[web 程序开发的历史](https://www.devsaran.com/blog/history-web-application-development)   
[动态脚本语言的历史](http://royal.pingdom.com/2007/12/07/a-history-of-the-dynamic-web/)   
[ajax 的诞生](http://techtracer.com/2007/03/12/the-birth-of-ajax-an-amazing-story/)   
[web 设计简明历史](http://blog.froont.com/brief-history-of-web-design-for-designers/)


[webform]:http://www.joomlavision.com/illustrated-history-web-forms/
[jjg]:https://zh.wikipedia.org/wiki/%E5%82%91%E8%A5%BF%C2%B7%E8%A9%B9%E5%A7%86%E5%A3%AB%C2%B7%E8%B3%88%E7%91%9E%E7%89%B9
[bns]:https://zh.wikipedia.org/wiki/%E8%92%82%E5%A7%86%C2%B7%E4%BC%AF%E7%BA%B3%E6%96%AF-%E6%9D%8E
[CERN]: http://home.web.cern.ch/
[worldweb]:https://zh.wikipedia.org/wiki/WorldWideWeb
[CERN httpd]:https://zh.wikipedia.org/wiki/CERN_httpd
[firest_server]:http://info.cern.ch/
[www]:https://www.w3.org/
[W3C]:https://www.w3.org/
[mld]:https://zh.wikipedia.org/wiki/%E9%A9%AC%E5%85%8B%C2%B7%E5%AE%89%E5%BE%B7%E6%A3%AE
[Netscape]:https://zh.wikipedia.org/wiki/%E7%BD%91%E6%99%AF%E5%AF%BC%E8%88%AA%E8%80%85
[bl]:https://zh.wikipedia.org/wiki/%E5%B8%83%E8%98%AD%E7%99%BB%C2%B7%E8%89%BE%E5%85%8B
[EcmaScript]:http://www.ecma-international.org/publications/standards/Ecma-262.htm
[cgi]:https://zh.wikipedia.org/wiki/CGI
[ajax]:https://zh.wikipedia.org/wiki/AJAX
`,Xi=`---
tags:
    - 工具
    - 绘图
---

# xmind

**详解 xmind 的使用**


## xmind
讲解 xmind 的使用

## 快捷键

* \`⌘ + 鼠标移动\`  **该移动可避免图形插入节点中**
* \`⌘ + 鼠标选择\` 可复选其他内容

## 经验
### 复制联系
1. 按住左键拖动选择自定义主题内容,
2. 按住 \`⌘\` 选择联系箭头
3. \`⌘ + c\` 复制整个内容区
4. 将整个内容区粘贴到关联节点

> **tip** 
> 由于 xmind 会自动把复制内容合并到节点,
> 可以选择联系的主题节点,拖动到不产生自动合并的地方
> 再按住 \`⌘\` 拖动联系节点,此时不会产生自动合并


结合自定义主题和结构可创造复杂的图例.`,Zi=`---
tags:
    - 计算机基础 
    - 编码
---

# 转义字符 \\t

**转义字符 \\t**


## 引言
在学习 [c 程序设计语言第二版](https://book.douban.com/subject/1139336/)
时,无法理解习题 1.20 **制表符终止位** 的概念,查阅相关资料,发现是未理解转义字符 \`\\t\`

## 制表符(TAB)
\`\\t\` 制表符用于控制水平光标位置。
在终端默认为 8 个字符,制表符的特性总结为:**将当前光标自动移动到,距离最近的下一个8n字符间隔之后,n 为正整数**

::: tip
8 个**字符间隔**是默认行为,可用 \`tabs n\` 设定 \`\\t\` 的间距
,**字符间隔**为单个空格宽度 ,若为中文等其他字符可能占据多个**字符间隔**
:::

而之前的错误认知一直以为制表符，代替固定的**字符间隔**,例如 \`\\t\` 表示 3 个**字符间隔**可以采用如下方式验证

shell 中输入如下指令

\`\`\`bash
# 在出现 \\t 的位置后利用 | 标识
echo "hello--\\t|中aa\\t|\\t|\\na\\t|----\\t|------\\t|"
\`\`\`

在 \`\\t\` 后填充 \`|\` 字符模拟光标位置,输出结果为:

\`\`\`
hello-- |中aa   |       |
a       |----   |------ |
\`\`\`

结果可知 \`\\t\` 会自动调整光标位置,使之在 8n 个**字符间隔**之后

也可以在 \`vscode\` 编辑其中验证此特性,输入一个或多个字符按一下 \`tab\` 键看光标会移动到哪？
> 注意编辑器中查看 \`tab\` 相关设置,确定使能了制表符特性

实际上在文档软件中也存在制表符概念,这里以 mac 自带的 pages 举例。
参看动图:

![](./img/2019-05-11-tab.png)

可以看到,在按下 \`tab\` 键后,光标的自动移动到,布局中设定的制表符距离之后。

通过修改距离,会更改光标的移动间距,读者可以尝试输入字符再按 tab 键,确认光标移动是否符合如下规则

> 光标只会相对每行起始位置,移动到最近 \`xn\` 间距后,\`x\` 表示设定的距离,\`n\` 为正整数

通过上述示例希望读者完全理解 \`\\t\` 的作用。

此外推荐阅读 [阮一峰回车和换行符](https://www.ruanyifeng.com/blog/2006/04/post_213.html) 理解 \`\\r\` 和 \`\\n\`

既然理解了制表符的功能制表符终止位的含义就清晰可见了

> **制表符终止位是指使用制表符键所对应的光标位置** `,nl=`---
tags: 
    - 翻译
    - 方法论
---

# 技术写作须知

> 该译文对应原文: [Notes on Technical Writing](https://mkaz.blog/misc/notes-on-technical-writing/)


再过去的一年,我断断续续为 WordPress 文档工作。在冻结发布期间,我开始为开发者迁移到新平台做出贡献。我发现自己很享受写文档,同时写文档也有益于帮助和指导他人。虽然这不是我的主要工作,我还是会抽出时间保持贡献。

这段时间,我阅读了大量关于技术写作的资料。这是我的笔记,不仅帮助我后续记忆,也可作为我目前写作的参考工具。

## 原则
以下原则是撰写文档时须谨记的
* 技术写作的目的是更快更好的帮助用户完成任务
* 实践出真知,演示优于描述
* 让用户尽快获得成功
    > 译者注: 技术写作必须尽早让用户获得反馈和价值
* 文档类型不是只有一种
    > 译者注: 要根据目的选择技术文档的类型

## 建议
* 明确你的受众和写作意图
* 重要的信息放在前面
* 善用列表
    > 译者注:例如编写技术教程,采用有序列表编排示例步骤,便于读者操作和定位问题。
* 一个段落,一个概念
* 勤于修改

## 避免元写作

避免写描述写作的内容,文字本身没有思想,是笔者和读者赋予了文字灵魂。

你不需要告知读者接下来要说什么,直接说就好了。

* **反例:** 本章节讨论影响名气起伏的因素
* **范例:** 名气起伏受什么影响?

不要在写作中引用章节

* **反例:** 总结上一章关于......
* **范例:** 综上所述.....

不要描述极度复杂的概念,同样也不要讲显而易见的内容。读者会自行判断概念的难易。

## 极简教学
John M. Carroll 和他在 IBM 的同事研究如何创建支持文档,分析使用户熟练掌握的最佳方案。在 1980 年代，他们开发了一种极简方法，并编写了一本极佳的[《IBM Displaywriter 操作员培训手册》](https://www.utwente.nl/en/bms/ist/minimalism/displaywriter.pdf)，提供给首次使用文本处理器的人。

> 译者注: [Displaywriter](http://www.obsoletecomputermuseum.org/displayw/) 是 IBM 开发的电子文档编辑器

极简教学的四条原则:
* 选择面向行动的方法,用户总期望做点什么。这条原则反映了极简主义以用户为中心的本质。
* 明确任务域的工具。工具是达到目的的手段。该原则要求设计人员选择对用户有意义的培训任务。
* 提供错误识别和恢复,人非圣贤,孰能无过,提升用户处理错误的体验和能力。
* 明确准备,学习,定位。设计必须尽可能满足目标受众的不同需求和倾向。该原则也反映了极简主义的以用户为中心的本质。

[深入阅读极简教学](https://www.utwente.nl/en/bms/ist/minimalism/)出自荷兰特文特大学的教学技术系。

## 建构主义
美国心理学家 Jerome Bruner 研究人类认知心理学。布鲁纳著作的一个主要议题是确认学习是一个主动的过程，学习者基于已有的知识构建新的概念。将建构主义原理应用于文档：
* 鼓励读者去发现原理
* 将信息转换为读者当前可以接受的水平
* 以递进方式编排材料,在已掌握知识上构筑新的概念
* 融入活动对话框,鼓励用户去操作 “试一下”,"看看发生了什么","自行验证"

进一步阅读 [Bruner 构建理论](https://www.instructionaldesign.org/theories/constructivist/)

## 文档类型
Daniele Procida 撰写了[关于文档你不知道的](https://www.divio.com/blog/documentation/) 不是所有的东西都叫文档，这里(至少) 有四种类型文档。
 
1. **教程(Tutorials)**    教程面向教学针对初学者,通过一系列指导课程,给用户提供基本的信心和技能。教程不应该预设知识或语言,但是任可帮助那些一无所知的初学者。
2. **使用指南**  使用指南或者 FAQ 是面向目标的。由用户确定,使用指南可以假定用户具有预设知识和语言，但是需要知道如何解决特定问题。
3. **说明** 说明或概述文档是面向理解的，提供背景或额外详细的上下文
    > 译者注: 这类似文档概念建立和术语阐述章节,例如 [webpack concept](https://webpack.js.org/concepts/)
4. **参考指南** 参考指南是面向信息的，它应该准确而完整的描述机理。API 文档是参考指南的典型事例。

## 延伸阅读
* [Google Technical Writing](https://developers.google.com/tech-writing/one)

`,el=`---
tags:
    - 翻译
    - 方法论
---

# 解决问题的思路

> 该译文对应原文: [How I think about solving problems](https://humanwhocodes.com/blog/2020/02/how-i-think-about-solving-problems/) (**该文出自 JS 高级程序设计作者 Nicholas C. Zakas**)

5 个疑问帮助我决定，排序和解决问题

在我软件开发的早期生涯中，我认为自己的主要贡献是编写代码。毕竟软件工程师被支付薪水的主要部分就是创造软件和编写代码。我花了好几年的时间才意识到有大量其他的贡献在创造软件时(如果不是，为什么会有主管，设计师，产品经理，销售人员等)。我自己逐渐从一个编码人员转为一个问题解决者。有些时候问题可以通过编码解决， 而其他时候解答并不总是和代码相关。

一旦我理解到自己是一个问题解决者，我决定采取一种高效的方式处理发生的问题。
当作为技术主管后，我每天都身处持续的问题之中。这迫使我不得不思考一种对策在尽可能解决更多问题的前提下，使决定更加果断，问题的排序更加高效。

最终，我定义了一个问题清单，当每个问题出现时，我发现按顺序回答这个清单的问题可以帮助我尽可能做出最佳的决定。

1. 这真的是一个问题么？
2. 该问题需要被解决么？
3. 该问题需要现在被解决么？
4. 该问题需要被你解决么？
5. 有更简单的问题我可以解决来取代此问题么?

每一个问题都被设计用来揭露问题的一个方面，这可以帮助你进入下一个步骤，
如果足够幸运，尽可能避免回答所有问题。(\`笔者注:此处的含义是减少问题到第五步的数量\`)。这些问题有细微的差别，我将会详细讲解。


## 这真的是一个问题么？

处理任何问题的第一阶段是识别它是否是一个真正的问题，这需要一个明确的定义。
基于这篇文章的目的， 我将定义**问题是如果不处理会导致客观条件下坏结果的任何事情**。这意味着假设下雨时你让窗户一整晚开着它就是一个问题，因为房间内部会变得潮湿，这可能损坏你的地板，家具或其他财产。避免这种坏结果的一个解决方案是在你上床之前关上窗户，这将避免你的财产遭受损害。

当作为一个领导者，收到一些听起来像是问题的抱怨，但只是一个建议的现象非常普遍。举个例子， 我同很多刚开始工作或加入一个新团队的工程师谈过，他们感觉团队做的很多事都是错误的:使用的框架很糟糕，代码风格差劲，文件组织方式错误，他们会怎样解决这些问题?这是一个巨大的工作量!

我会问软件工程师这个问题:**它是一个问题么或有哪些区别?** 很多时候**错误只是意味着不是我曾经的习惯或偏好**。如果你能够识别哪些报告问题并非真正的问题，你将不在花费资源在解答上。团队成员对做事的方式不满意并不是一个客观上的坏结果。团队的分歧本质上没有问题。如果你可以决定一个问题并非真正的问题你就可以处理其他的任务。

## 该问题需要被解决么?

当你确定这是一个问题后，下一步就是确定这个问题是否需要解决。一个问题可以不被解决只要坏结果可以容忍或者影响缓慢。举个例子，如果 web 应用的一部分只有系统管理员(典型的是只有 5 个人或者更少)用，它的加载慢于应用的其他部分， 你可以认为这一部分是可以接受的。这个问题范围过于狭隘而且只影响了几个人在不经常使用的情况下。当然能够解决这个问题也很好，虽然这不是必须的，因为他的负面影响足够小，即使不解决也不会导致更大的潜在问题。另一种提问方式是:**如果不解决这个问题会发生什么?**，如果答案是不多，可以考虑不解决这个问题。

## 该问题需要现在被解决么?
如果你有一个待解决的问题，下一个问题就是它需要现在被解决或者暂缓。有一些问题明显很急迫需要被立即处理: 网站被关闭，每当有人使用时应用发生崩溃， 等等。这些问题需要被解决是因为坏结果是直接的，连续，且持续增长的。网站关闭时间越长公司损失越多。应用崩溃次数越多，用户会更有可能选择竞品。

同等重要的问题是确定问题解决是否可以被推迟。有一系列意想不到的不紧急的问题会暴露给主管层。这些问题需要最终解决但不是立即解决。软件开发中符合此类的最常见问题就是技术栈。技术栈是你应用(或基础设施)中任何表现不如预期的部分。据我所知，技术栈很少被处理直到它变为一个紧急事件(这时已经晚了)。然而，技术栈并不是需要放下其他所有事情开始着手处理。它属于中间区域，现在不需完成，但必须被解决!

一个问题不需要现在解决，推迟它是一个不错的注意。推迟它， 意味着计划在未来处理， 而不是什么都不做。如果现在不是处理这个问题的最佳时机那么决定什么时候处理它: 在这一周，这个月，六个月?把它放入你的日历或任务管理系统以防你忘记追踪它。另一种询问此问题的方式是，**这个问题紧急么?**

## 该问题需要我解决么?

该问题非常适合管理层或者有许多任务需要完成的人。这个问题的某些方面是否需要特殊技能而只有你才能处理，或者其他人也可完成这个任务。

这个问题改编自我的导师给我的建议。我曾今抱怨自己一直在收集任务而不能持续跟进。他告诉我我必须问自己:这是 Nicholas 的问题么? 这里有一些事是只有我知道如何做， 而其他事情是我需要关注的。这些事我需要安排给其他人。导师给我的另一个重要的建议: **你可以比别人更快的完成某些事并不意味着必须自己来**。对于一些不紧急的任务，用一天或两天完成并无区别。

所以如果有些问题别人可以解决，如果你是一个管理者或已经有很多工作了，那就分配出去。

## 有更简单的问题我可以解决来取代此问题么?

最后一个步骤一旦你决定这个迫切的问题需要你亲自解决，就该判断是否有更简单的问题可以被解决。关键在于更简单的问题相对原始问题必须给你相同或相似的结果并且可以节约你的时间(或其他资源)。

当我在新版我的雅虎页面工作时，一个产品经理表示一些测试用户需要页面添加尺寸可变的列。这是一个相当复杂的问题因为在 2006 年 web 浏览器并不像如今这么强大。这个任务几乎不可能， 当时页面已经充满了 JavaScript，添加更多逻辑去管理复杂的鼠标移动而且需要保存着这些信息到后端是一个艰难并且极易出错的任务。

我要求来自用户反馈的原始数据， 试图弄清尺寸可变的列是用来解决什么问题。实时证明没有用户要求尺寸可变的列(产品经理从客户的抱怨中推导出了这个需求)。相反，他们抱怨无法使新版雅虎页面看起来和老版本一样。我们创建了和老版本几乎完全不匹配的新布局，但是事实显示用户更喜欢老版本布局。这允许我们关注一个跟简单的问题:重新创建老版本布局。

因此，我们花费了少量时间在新页面上重新创建老版本布局，并重新收集用户对话。
人们很乐意看到新页面和老版本基本相似。通过解决简化的问题，我们节约了大量的开发时间同时用户也感到开心。

并不总是有简单的问题可以解决，但是每当问题看起来特别巨大或者困难时值得花费时间去检查。

## 总结

这五个问题已经成为我解决问题的基本方法，不仅仅是在我的工作中也包括我的日常生活。无论问题何时出现，通过这些问题都使我成为更有效的问题解决者，并且对结果总体感觉满意。无法为你的服务员计算 15% 的小费?我以 20% 替代(或者 10% 如果我不满意他的服务)。我的高中校友机构总是向我发送通知说我并非验证的校友？这些并不是我需要解决的问题。我需要一个新的驾照如果我想要在美国旅游？这是我今年需要解决的问题，但不是现在。

有很多的方式解决问题，我并不确定我的方法对所有人都适用。但我确定有解决问题的方案强于没有任何方法。人生充满了问题，有大有小，你每天都会面对。有一个清晰定义和可重复的策略是解决问题更易接受的最简单方法。



-----

笔者总结。上述方法提炼为如下的检查清单

* [ ] 这是一个问题么？问题定义阶段
    > 如果这个事情不解决会出现坏的结果,则考虑是一个问题，**注意这里关注的是结果,这意味着一件事情即使中途产生了损失但只要不影响结果都是可以接受的!!!**
* [ ] 这个问题需要被解决么？问题的价值评估
    * [ ] 问题的影响点是否足够小？ 从结果评估
    * [ ] 问题解决是否需要大量资源？ 从成本评估
    > 从经济学角度对高成本低回报的事情不要投入太多精力
* [ ] 这个问题需要现在被解决么？问题的优先级评估
    * [ ] 采用 [时间“四象限”法](https://wiki.mbalib.com/wiki/%E6%97%B6%E9%97%B4%E2%80%9C%E5%9B%9B%E8%B1%A1%E9%99%90%E2%80%9D%E6%B3%95) 评估问题优先级
    * [ ] 采用 ToDo List 管理问题
* [ ] 这个问题需要你解决么？问题的领域划分
    > 善于利用外在环境合理优化资源调度
* [ ] 问题是否可简化为其他问题? 问题的解决策略
    > 类似 [分治法](https://zh.wikipedia.org/zh-hans/%E5%88%86%E6%B2%BB%E6%B3%95) 

`,tl=`---
tags: 
    - TypeScript
    - 翻译
---

# 什么是 TypeScript 中的类型,两种观点

> 该译文对应原文 [What is a type in TypeScript? Two perspectives](https://2ality.com/2020/02/understanding-types-typescript.html)


## 1 三个问题针对每种观点
以下三个问题对理解类型系统如何工作至关重要。每个问题都需要采用两种观点来解答。

1. \`myVariable\` 属于类型  \`MyType\` 意味着什么
  
    \`\`\`ts
    let myVariable: MyType
    \`\`\`

2. \`SourceType\` 赋给了 \`TargetType\` 么

    \`\`\`ts
    let source:SourceType = /*...*/
    let target:TargetType = source/*...*/
    \`\`\`

3. TypeUnion 如何从 Type1，Type2和 Type3 中派生的？

    \`\`\`ts
    type typeUnion = Type1 | Type2 | Type3;
    \`\`\`

## 2 观点一：类型是值的集合
在这种视角下,类型是值的的集合

1. 如果 \`myVariable\` 属于类型 \`MyType\`,表示所有可以赋给 \`myVariable\` 的值都必须是属于 \`MyType\` 集合的元素
2. \`sourceType\` 可以赋给 \`TargetType\` 是 \`SourceType\` 为 \`TargetType\` 的子集。
3. 联合类型(TypeUnion) 属于类型 \`Type1\`,\`Type2\` 和 \`Type3\` 是集合理论的并集

## 3 观点 2: 类型兼容关系

在这种视角下: 我们不关心值和在代码运行时如何变化。取而代之，我们更多采用静态视角。

* 源代码都有位置,每个位置都有一个静态类型。在有 TypeScript 识别的编辑器,我们可以看到静态类型的位置如果光标悬停在代码上。
* 源码位置通过赋值，函数调用等关联上目标位置时。源码位置对应的类型必须和目标位置的类型兼容。TypeScript 规范定义类型兼容称之为[类型关联](https://github.com/microsoft/TypeScript/blob/master/doc/spec.md#3.11)
* [类型关联赋值兼容性](https://github.com/microsoft/TypeScript/blob/master/doc/spec.md#3114-assignment-compatibility) 定义了何时源类型 S 可以赋值给目标类型 T
    * S 和 T 是相同的类型
    * S 和 T 是类型 any
    * 等等

让我们思考上述问题:

1. \`myVariable\` 属于类型 \`MyType\` 如果属于 \`myVariable\` 的静态类型可以赋给 \`MyType\`
2. \`SourceType\` 是可以赋给 \`TargetType\` 如果它们赋值兼容
3. 联合类型(type unions) 如何工作参考[类型关系的显示成员](https://github.com/microsoft/TypeScript/blob/master/doc/spec.md#3111-apparent-members)

TypeScript 类型系统一个非常有意思的特性是相同的变量可以在不同位置有不同的静态类型。

\`\`\`ts
const arr = [];
// 推导类型: any[]
arr;

arr.push(123);
// 推导类型: number[]
arr;

arr.push('abc');
// 推导类型: (string | number)[]
arr;
\`\`\`

## 4 标明类型系统(Nominal type systems) vs 结构类型系统(structural type systems )

静态类型系统的一个任务是判断两种静态类型是否兼容。
* 静态类型 \`U\` 是一个实际的参数(例如通过函数调用)
* 静态类型 \`T\` 是一个相关的格式化参数(指定为函数定义的一部分)

> 笔者注: 这里 \`U\` 是实参(真实传入的值), \`T\` 是形参(函数申明传入的变量)

这通常意味着检查 \`U\` 是否属于 \`T\` 的子类型。两种方法实现这种检查(粗略来看)
* 在标明类型系统, 两种静态类型是相等的如果他们拥有相同的标识符(名字),一个类型是另一个的子类型如果它们的子类型关系式显示申明的。
  * 表明类型语言例如 C++,Java,C,Swift 和 Rust
* 在结构化类型系统, 两种静态类型是相同的如果他们拥有相同的结构(如果它们的各部分名字和类型均相同)。类型 \`U\` 是另一种类型 \`T\` 的子类型如果 \`U\` 拥有类型 \`T\` 的所有部分(类型 U 可能还包含其他部分),而且类型 \`U\` 的每个部分属于类型 T 相关联部分的子类型.
  * 结构化类型语言 OCaml/ReasonML,Haskell 和 TypeScript

以下的代码在标明类型系统中会出错,但在 TypeScript 结构类型系统中是合法的。因为类 A 和 类 B 拥有相同的结构。

\`\`\`ts
class A {
    name: 'A';
}
class B {
    name = 'B';
}

const somaVariable:A = new B(); 
\`\`\`

TypeScript 接口同样是结构化的。不必为了匹配而实现该接口。

\`\`\`js
interface Point {
    x: number;
    y: number;
}
const point: Point = {x:1, y:2};
\`\`\`

## 进一步阅读
* [TypeScript 手册类型兼容](https://www.typescriptlang.org/docs/handbook/type-compatibility.html)
* [TypeScript 规范类型关系章节](https://github.com/microsoft/TypeScript/blob/master/doc/spec.md#3.11)

-----

## 笔者注
理解 TypeScript 是结构化类型系统。可以帮助你更好的使用 TypeScript。


TypeScript 在设计之初定义了一系列准则，参考[TypeScript 设计目的](https://github.com/microsoft/TypeScript/wiki/TypeScript-Design-Goals) 翻译如下:

**目标:**

1. 静态识别可能出错的结构
2. 提供一个结构机制用于组织大型代码
3. 产出代码不要增加运行时负担
4. 产出干净,惯用的,可识别的 js 代码
5. 产出一种可组合且易于推理的语言
6. 向当前和未来的 ECMAScript 规范靠拢
7. 保留所有 JavaScript 代码运行时特性
8. 避免添加表达式层面的语法
9. 使用一致,完全可擦除的结构化类型系统
10. 成为跨平台的工具
11. 不要和 TypeScript 发生破坏性迭代

**非目标:**

1. 完全模仿现有语言,使用当前 JavaScript 的特性和编程设计者的意图来开发一门更有价值的语言作为替代。
2. 激进的优化程序运行时性能,产出在运行平台性能更良好的 JavaScript 代码
3. 专注于完全或证明正确的类型系统,取代在正确性和高产性上进行平衡。
4. 提供一个端到端的编译管道,取代创建一个可扩展的外部工具用于编译器或其他更复杂的构建流
5. 在编码中添加或依赖与运行时的类型信息,或产出基于类型系统的不同代码。取代鼓励不依赖于运行时元数据的编程模式
6. 提供额外的运行时函数或库。取代使用 TypeScript 描述已经存在的库
7. 引入一些可能使用户惊讶的特性。取代其他语言经过考量而采用的通用模式。

根据该设计主旨可以看到 TypeScript 的如下特性

1. 属于静态类型检查
    > 这意味着不应该在运行时依赖 TypeScript 类型组织代码逻辑
2. 属于结构化类型
    > 不要执着于类型的完全匹配只要结构相似就是相同类型
3. 类型检查为首要准则
    > TypeScript 准确的说并不是一门语言,它只是类型检查的工具,应该把**学习重点放在更好的类型检查上,而非它所提供的语言特性**


工作是马拉松而非短跑
保持谦逊,而非愚蠢
和自己比较而非他人
尊重人,而非头衔
选择挑战,而非安逸
工作从白板开始,而非键盘
价值驱动,而非代码
热爱生活,而非工作`,sl=`---
tags: 
    - 工具
---

# 书签订阅 RSS

## 引言
笔者使用 [inoreader](https://www.inoreader.com/) 订阅 RSS。
但是知乎专栏,微博等无法转换为 RSS。google 后发现利用 [RSSHub](https://docs.rsshub.app/) 可将各种资源转换为 RSS 订阅。由于手动转换网址为 RSS 过于麻烦,研究后发现了如下解决方案。

## 预备知识 URL scheme
参考 [URL rfc](https://tools.ietf.org/html/rfc1738#section-5) 资源定位符的一般形式为 \`scheme:schemepart\`。其中 \`scheme\` 决定了资源的访问策略。
在浏览器中一般使用 \`http,https\` 访问资源,实际访问地址还可为其他形式

* \`mailto\` 打开邮箱 <mailto:zenheart_register@163.com>
* \`tel\` 拨打电话 <tel:1234> 
* \`file:\`  打开本地文件

:::tip
你甚至可以使用 [**vscode:**](vscode:) 打开 VSCode 编辑器,只要相关应用设置了符合 \`scheme\` 策略,浏览器便会根据 \`scheme\` 打开应用
:::

可查看 [mdn](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AAemail%E9%93%BE%E6%8E%A5) 进一步理解各种 scheme 的使用。

基于上述原则实际上访问地址也可为一段 js 代码。采用 \`javascript:\` 即可。例如 <a href="javascript:alert('hello world')">javascript:alert('hello world')</a> 该链接会触发 \`alert('hello world')\` 执行。

基于此 scheme 我们可以将当前地址转换为 RSS 订阅的逻辑保存为 \`javascript:\` 的标签即可。

## URL 转换为 RSS 订阅
假设将 github issue 转换为 RSS 订阅。参考 [RSSHub github issue](https://docs.rsshub.app/programming.html#github) 可知需将 issues 链接转换为 \`https://rsshub.app/github/issue/用户名/用户仓库\` 订阅地址。

在访问 issue 时,我们需要把从当前地址提取 \`/用户名/用户仓库\` 转换为 \`https://rsshub.app/github/issue/用户名/用户仓库\` RSS 订阅地址

利用 [location](https://developer.mozilla.org/zh-CN/docs/Web/API/Location) 对象可以很方便的从 URL 提取相应信息。 

转换为 RSS 的地址如何触发 [inoreader](https://www.inoreader.com/) 订阅。利用 \`https://www.inoreader.com/bookmarklet/subscribe/RSS地址\` 触发订阅。

综合上述逻辑访问 [RSS gist](https://gist.github.com/zenHeart/8aec3f90366829afba32858bb38e8daa) 查看结果,拖动此标签到书签栏查看效果 <a style="display: inline-block;padding: 1px 6px;color: #fff;background: #32a0eb;border-radius: 4px;" href="javascript:(function()%7B(function()%20%7Blet%20rssData%20%3D%20%7Bzhihu%3A%20%7Bvalidator%3A%20%2Fzhuanlan.zhihu.com%2F%2CurlToRss%3A%20location%20%3D%3E%60https%3A%2F%2Frss.lilydjwg.me%2Fzhihuzhuanlan%2F%24%7Blocation.pathname.split('%2F')%5B1%5D%7D%60%7D%2CgithubIssue%3A%20%7Bvalidator%3A%20%2Fgithub%5C.com%5C.*issues%2F%2CurlToRss%3A%20location%20%3D%3E%60https%3A%2F%2Frsshub.app%2Fgithub%2Fissue%2F%24%7Blocation.pathname.split('%2F').slice(1%2C%203).join('%2F')%7D%60%7D%7D%3Blet%20validatorRss%20%3D%20(url%2C%20validator)%20%3D%3E%20validator.test(url)%3Blet%20addRss%20%3D%20url%20%3D%3E%20%60https%3A%2F%2Fwww.inoreader.com%2F%3Fadd_feed%3D%24%7Burl%7D%60%3Blet%20subscribe%20%3D%20(a%2C%20w%2C%20h)%20%3D%3E%20%7Bvar%20b%20%3D%20window.screenLeft%20!%3D%20undefined%20%3F%20window.screenLeft%20%3A%20screen.left%3Bvar%20c%20%3D%20window.screenTop%20!%3D%20undefined%20%3F%20window.screenTop%20%3A%20screen.top%3Bwidth%20%3D%20window.innerWidth%3F%20window.innerWidth%3A%20document.documentElement.clientWidth%3F%20document.documentElement.clientWidth%3A%20screen.width%3Bheight%20%3D%20window.innerHeight%3F%20window.innerHeight%3A%20document.documentElement.clientHeight%3F%20document.documentElement.clientHeight%3A%20screen.height%3Bvar%20d%20%3D%20width%20%2F%202%20-%20w%20%2F%202%20%2B%20b%3Bvar%20e%20%3D%20height%20%2F%202%20-%20h%20%2F%202%20%2B%20c%3Bvar%20f%20%3D%20window.open(a%2Cnew%20Date().getTime()%2C'width%3D'%20%2Bw%20%2B'%2C%20height%3D'%20%2Bh%20%2B'%2C%20top%3D'%20%2Be%20%2B'%2C%20left%3D'%20%2Bd%20%2B'location%3Dyes%2Cresizable%3Dyes%2Cstatus%3Dno%2Cscrollbars%3Dno%2Cpersonalbar%3Dno%2Ctoolbar%3Dno%2Cmenubar%3Dno')%3Bif%20(window.focus)%20%7Bf.focus()%3B%7D%7D%3Blet%20l%20%3D%20location%3Blet%20res%3Bfor%20(let%20k%20in%20rssData)%20%7Blet%20rss%20%3D%20rssData%5Bk%5D%3Bif%20(validatorRss(l.href%2C%20rss.validator))%20%7Bres%20%3Drss.urlToRss(l)%3B%7D%7Dif%20(res)%20%7Bsubscribe('https%3A%2F%2Fwww.inoreader.com%2Fbookmarklet%2Fsubscribe%2F'%20%2BencodeURIComponent(res)%2C640%2C400)%3B%7D%20else%20%7Bsubscribe('https%3A%2F%2Fwww.inoreader.com%2Fbookmarklet%2Fsubscribe%2F'%20%2BencodeURIComponent(location.href)%2C640%2C400)%3B%7D%7D)()%7D)()">rss</a> 

## 代码片段保存为标签

既然标签可以执行 javascript 代码,可以建立一个 \`code\` 书签,保存常用的脚本标签。此外结合 [Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb) 实现快捷调用。

相比 [Snippets](https://developer.chrome.com/docs/devtools/javascript/snippets?hl=zh-cn) 需要打开控制台后触发,该方法更方便。`,ol=`---
tags:
    - 翻译
    - 方法论
---

# 软件工程师新手给自己的一封信

> 从[阮一峰微博](https://www.weibo.com/1400854834/IBlq9AeRh?from=page_1005051400854834_profile&wvr=6&mod=weibotime)读到此文,深有同感翻译如下,该译文对应原文[A letter to myself as a fresh software engineer](https://www.florio.dev/20200328-letter-to-myself)


亲爱的自己:

你刚从大学毕业准备在 IT 领域开始你的事业。我无法向你透露任何内容,但我保证这将是一段有趣的旅程。我给你写这封信是想给你一些建议使你变得更加专业。在未来几年没有什么事情是你无法学到的,但是有一些我希望在我事业开始前就有人告诉我。这些事情的排序不分先后,**都很重要**。

## 工作是马拉松而非短跑
成为优秀软件工程师的路很漫长。不要因为没有快速获胜而轻言放弃。花时间学习,并在你感兴趣的领域变得优秀,记住这是马拉松而非短跑。

## 保持谦逊,而非愚蠢
能做到很不错,但是保持谦逊是基础。尽管你经验丰富, **三人行必有我师**。但这并不意味着你不如别人，你必须尊重自己和你的技能。如果你不尊重自己那是愚蠢而非谦逊。

## 和自己比较而非他人
和他人比较没有意义。工作上总有人比你更优秀。同样也有人比那些优与你的人更优秀。依此类推......,你需要做的是尽力而为。如果你认为某些人比你优秀,向他学习。继续努力,最终你将成为其他人的参考。

## 尊重人,而非头衔
在你的职涯中，你将会和杰出的业界专家共事。更为重要的是,你将遇到杰出的人。尊重他们自身而非他们所拥有的头衔。如果张三是首席架构师并不意味着他比初期开发工程师李四更值得尊敬。

## 选择挑战,而非安逸
职业生涯有很多的路口，你有多次选择，但总而言之是在舒适区和跳出舒适区之间选择。在你的生活中可能会有片刻想要停下来，因为你对目前所取得的成就感到满意。在那时尝试走出舒适区。这个决定将使你变得更加专业，你也会在事业上获得更大的满足。**记住最好的事总是发生在舒适区外。**

## 工作从白板开始,而非键盘
当你开始设计新的特性或新系统时，不要直接在键盘上开始编码。作为工程师,你训练和使用的能力是你的大脑,而不是手指。**三思而后行**。因此先从白板开始而非键盘。思考你需要实现什么,如果有
合作伙伴质疑你的想法更好。白板意味着所有可以帮助你思考的事物，笔和纸，笔记本应用程序，[draw.io](https://app.diagrams.net/)等。

## 价值驱动,而非代码
不要受 [非我所创主义](https://zh.wikipedia.org/wiki/%E9%9D%9E%E6%88%91%E6%89%80%E5%89%B5)的影响。重复发明轮子没有价值。避免浪费时间在已经存在的东西上。如果你可以通过组合不同工具轻松达成你的目标,就这么干。作为软件工程师你应该交付业务价值而非代码行数。

> 笔者注,对于造轮子作者的本意是应该执着于创造价值,而非技术本身。**技术只是手段而非目的**,推荐阅读 [JavaScript 疲劳终极指南：我们行业的真相](https://zcfy.cc/article/3914?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io) 进一步理解此思想

## 热爱生活,而非工作
在 IT 领域,很容易过多专注与工作。毕竟，对于大多数人这不仅是工作还是理想。记住**除了工作还有诗和远方**。去活的充实而丰富。运动、读书、培养爱好，旅游去看我们美好的世界。和朋友叙旧，找到你的另一半，并尽可能去关怀、支持和爱她。您会惊讶地发现，拥有充实的生活会极大地提高您的专业水平。

这是我目前知道的全部,我还有许多需要学习。


最后一件事: **享受过程**!


来自(一个更有经验的)你。`,al=`---
tags: share
---

# 记一次微信分享

**这是一次微信分享的资料这里记录一下**

## 自我介绍
大家好我是 15  级一个普通二本毕业生。到今年 7 月就工作 5 年了。

### 大学经历
我大学学的自动化, 从大一开始就在学校参加比赛,大一暑假参加数学建模学会了 \`matlab\` 也有幸获得了全国一等奖。

大二由于是自动化专业接触到单片机知识, 所以加入了学校电子实验室学习 C 语言,同时开始学习单片机,主要用的是 \`STC 51\` 系列、\`Atmel Mega\`系列 和 \`TI MSP430\` 系列的 8 位、16 位单片机, 暑假参加了飞思卡尔智能车大赛还有全国电子设计大赛也获得了一些名次。

大三也参加了智能车和湖北省电子设计大赛成绩还行,大四在学校学习 FPGA 临近毕业找的 offer 是一家深圳做电子通路的公司。

### 工作履历
\`1-3 年\` 一直在这家公司,由于公司的培养体系很健全, 有师徒制, 所以在第一年学习了前端基础,php,nodejs 等知识, 主要的工作偏 IoT 方向,做了智能家居等方面的应用,由于公司本身是一个芯片代理商,RD 的价值主要依托于芯片做方案, 并不是纯正的互联网公司。所以我就跳槽了。

\`3-4年\` 在一个还不错的公司做 WebAPP 相关的开发,主要的技术栈是 Vue。

\`19 年\` 因为个人发展回到武汉,在一家公司做 CRM 系统,由于工作太累,2020 年又跳槽到了新的公司(其中由于疫情在家自学了两个月 😂 )。

## 学习经验
说一下自己工作五年的一些学习经验吧, 我觉得主要是如下四点:

1. 去源头找答案
2. 不要给自己设限
3. 形成自己的做事模式
4. 一切以解决问题为中心

下面我会详细展开讲解

### 去源头找答案
首先学会使用正确的搜索引擎,推荐使用 [google 助手](http://www.cnplugins.com/office/gugefangwenzhushou/) 利用 google。学会一些基本的搜索指令,详见 [知乎](https://www.zhihu.com/question/20161362)。

技术学习尝试去源头找答案,例如不理解 ECMAScript 特性的机制,去读 [规范](https://tc39.es/ecma262/), 看不懂在向上去看 [MDN](https://developer.mozilla.org/zh-CN/) 的相关使用说明。 同样如果好奇规范的来历你也可以向下去看 [tc39](https://github.com/tc39/test262) 提案的演变规则,甚至去 [邮件组](https://esdiscuss.org/1) 查看一个特性的想法从开始到确定的全过程,通过知乎这个提问的回答: [为什么Js中localStroage只能存string类型的value？](https://www.zhihu.com/question/366665675/answer/1127726009) 来理解这种知识溯源的能力。

上面只列举了 JS, 实际上这个思想是可以推广到其他技术甚至是非技术学习的,例如网络协议去看 [RFC](http://www.rfcreader.com/#rfc1001),IEEE 等各种规范, MVC 模式去读原始的论文, 当你能从源头完全消化并理解知识的时候,你已经强于那些通过二层或三层信息链路才能理解的人。这也是为什么在面试时喜欢问源码,应为从源头获取信息的能力可以很好体现出技术能力。

### 不要给自己设限
先是工程师,再是软件工程师,再是前端工程师。你的职业只决定了你的专精范为, 并没有限定你的知识边界。

想学硬件买一块 [Arduino](https://www.arduino.cc/) 或树莓派做个数码时钟,推荐 [杜洋电子工作室](http://www.doyoung.net/) DIY 自己的创意。

想学后端,在自己电脑上搭建 mysql,nginx 环境,用 nodejs,php 或其他语言,选一个框架搭建 CRUD 的系统。

想学运维, 从搭建一个简单的 ftp 服务开始,理解 FHS, 系统权限, 配置管理等知识, 掌握 shell , 进一步学习 docker 等容器技术。

当然还包括产品,设计等方方面面的知识,只要你感兴趣就去学,不要只局限在前端领域,因为技术的思想是相通的,你知道的越多你的思路越开阔。


### 形成自己的做事模式
为什么要学习设计模式, 因为它抽象了一些经典问题,总结了一套标准化的解决方案,提高了软件开发的效率和质量。同样在你的工作中你也应该形成应对不同事情的做事模式,提高效率。

例如我工作的任务管理上, 会采用 TODO 模式操作步骤如下。
1. 明确任务,采用 5W1H 原则
2. 拆分任务,确定关键链路
3. 采用任务优先级排序任务
4. 细化任务拆分 TODO 列表
5. 按照排序逐项完成

例如做一个需求,先采用 5W1H 搞清楚需求的来龙去脉,对接人等等信息,清楚后再拆分你的任务,例如设计,编码,UI,联调 。假设到了编码环节再进一步将功能拆分为一系列 TODO 项,如果用 vscode 推荐[todo+ 插件](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-todo-plus) ,你可以在项目中添加 \`.todo\`, 然后在 [.git/info/exclude](https://git-scm.com/docs/gitignore) 中添加 \`.todo\`保证只在自己工程忽略此文件, 通过此文件追踪你的代码代办清单。结合 [todo tree 插件](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) 精确到单行代码级别的控制。

当然还有很多的模式,你可以在反复的操作中优化这些应对模式从而形成自己对于不同事情的最优策略。如果你看过 JS 高级程序设计,你肯定知道 Nicholas C. Zakas, 这是他最近的博文 [How I think about solving problems](https://humanwhocodes.com/blog/2020/02/how-i-think-about-solving-problems/) 总结了他解决问题的模式, [我的拙译在此](http://blog.zenheart.site/posts/2020-02-21-how-i-think-about-solving-problem.html)。


### 一切以解决问题为中心
一切已解决问题为中心, 在我工作的前几年我也痴迷对新技术的追逐, 但是我逐渐发现软件工程的本质是为了解决问题, 而不是这些技术本身。这些技术的目的是为了更好更快的解决问题, 所以在你学习之前先问自己你是要解决问题还是单纯的为了追逐技术。

同样除了解决问题你还需要保持好奇心, 如果熟悉 npm 你肯定知道 Tj, express, mocha 等一系列 npm 核心包的创建者, quora 上有个提问 [How did TJ Holowaychuk learn to program?](https://www.quora.com/How-did-TJ-Holowaychuk-learn-to-program)(需翻墙) Tj 的回答就是我总是好奇这是怎么工作的,保持好奇以解决问题为中心，再去学习技术你会有无限动力。

## 总结
最后希望大家真的能有所收获,如果感兴趣可以关注我的 [blog](http://blog.zenheart.site/) 或者 [github](https://github.com/zenHeart) 。
`,il=`---
tags:
  - 工具
  - mac
---

# iOS 快捷指令使用详解

## 前言

rss 订阅中看到了 [用 JS 玩轉 iOS shortcuts](https://blog.techbridge.cc/2020/04/26/ios-shortcuts-js/) 的 blog,于是学习了此工具的使用。

## 什么是快捷指令
参考 [wiki](https://zh.wikipedia.org/wiki/%E5%BF%AB%E6%8D%B7%E6%8C%87%E4%BB%A4), 快捷指令是由阿里·温斯坦等开发者于 2014 年开发的一款工作流应用。该应用于 2017 年被苹果收购,2018 作为 iOS 12 版本的内置应用推出。

快捷指令可以将 APP 中常用的操作组合起来映射为一个快捷命令,下次直接使用快捷命令便会触发者一系列操作。参考 [快捷命令使用手册](https://support.apple.com/zh-cn/guide/shortcuts/welcome/ios) 进一步理解。


## 快速入门

> 确保 iOS 版本 \`≥ 12\`,我使用 \`13.4.1\` 说明如何使用。

该示例实现了,将访问的网页添加到备忘录特定页面的功能。
> 开始之前确保在备忘录应用中创建了一个 \`杂货铺的文件夹\` 且包含 \`收藏\` 为开头的文件 

<iframe  height="400" width="600"  src="//player.bilibili.com/player.html?aid=668008428&bvid=BV1Xa4y1v7LN&cid=186917494&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

核心步骤
1. 在 iPhone 页面下拉唤起搜索,查找 \`shortcuts\` 打开快捷路径的应用
2. 点击右上角创建快捷路径
3. 将创建的快捷路径添加到共享按钮
4. safari 访问任意网页,点击共享按钮,触发快捷命令,会自动提取 url 并保存到备忘录收藏夹。

你也可以手机端打开 [test 快捷路径](https://www.icloud.com/shortcuts/276b71131ab743d6b5af6103458c8cac)

> **注意使用前确保 [允许不受信任的快捷指令](https://support.apple.com/zh-cn/guide/shortcuts/apdfeb05586f/3.5/ios/13.5#apdf9081945c)**


## 核心概念
根据 [快速入门](#快速入门) 的示例,指令是由一系列独立的操作串联起来的。
阅读 [快捷指令操作原理](https://support.apple.com/zh-cn/guide/shortcuts/apdad3cbabfc/ios) 进一步理解操作流程。

### 操作

例如示例中的 \`追加到备忘录\`,\`显示备忘录\` 等一系列功能。
iOS 内置了一系列内置操作方便你处理日常工作。大致分为如下几类

* \`App\` 暴露了 App 的内置功能,包括邮件,短信,safari 等
* \`脚本\` 提供了一系列的控制逻辑及硬件控制功能,例如 获取电池电量,在 safari 中执行脚本
甚至包括执行执行 api,连接远程 ssh 执行命令的功能
* \`媒体\` 包含了一系列音频,视频制作 gif 的能力
* \`位置\` 包含地理位置控制,天气等接口
* \`文稿\` 包含文本处理,markdown 等常用格式的相关操作
* \`共享\` 包含共享和邮件,短信等通知功能
* \`网页\` safari 的一系列操作能力

你也可以在搜索框查询所需的操作。

### 输入和输出
一般的操作都会有输入,输出的概念,例如 \`获取 url\` 的操作会从输入中提取 url。
输出 \`url\` 的文本。每一个操作都包含自己的输入输出规则,通过点击操作旁边的感叹号,查询操作的帮助。其中包含一些典型的输入。

* \`快捷指令输入\` 是根据当前执行快捷指令的环境提取输入,例如示例是从 safari 浏览器提取 url
* \`剪切板\` 是从剪切板提取输入
* \`魔法变量\` 是从变量中提取输入,后有详述 

### 变量
通过变量你可以将不同的操作流程串联起来,通过将中间值保存到变量,来组合
不同的输入结果。


快捷指令的重点就是利用操作结合需要处理的内容,创建一系列的操作流。
处理基本的组合,快捷指令也提供了逻辑判断,重复等逻辑操作,查看 [高级快捷指令](https://support.apple.com/zh-cn/guide/shortcuts/apdb5506f698/ios) 理解。


## 自动化
除了创建快捷指令,你也可以采用自动化来设定自动执行的任务,概念类似 Unix 系统的定时任务。
但注意只有特定任务才会自动触发,某些任务需要手动确认后才可执行。

:::tip
若设定自动化任务的下方有 \`运行时询问\` 则该任务可以自动触发,否则需要手动确认后才会执行
:::

可以自动触发的任务列表详见 [自动化无需询问](https://support.apple.com/zh-cn/guide/shortcuts/apd602971e63/ios#apd27e876cf8)

`,ll=`---
tags:
  - 工具
  - 虚拟机
---

# virtualbox

**记录 virtualbox 的基本使用**

因为需要 elctron windows 端的效果,所以安装虚拟机来测试应用。

## 基本安装
mac 环境直接使用 \`brew cask install virtualbox\` 安装即可。
**注意安装过程中,确保\`安全性与隐私->通用\`中允许 virtualbox 相关权限**。
也可以去 [virtualbox download](https://www.virtualbox.org/wiki/Downloads) 下载对应版本

## windows 镜像安装
1. 去 [microsoft](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/) 下载 \`VirtualBox\` 虚拟机对应的镜像
2. 在本地安装的 \`VirtualBox\` 中导入镜像即可
3. 注意用登陆密码在上面下载地址中有写为 **Passw0rd!**

### 共享文件
为了实现应用安装,可以将本地电脑上目录共享到虚拟机。步骤如下
1. 在对应虚拟机下点击右键选择设置进入设置面板
2. 选择共享文件,点击加号添加对应文件夹即可
  > 为了确保每次都加在,可勾选自动挂载选项

动图如下

![](https://wx2.sinaimg.cn/large/965bbb87gy1genotwdwjag20k20cr7wh.gif)

`,rl=`---
tags:
    - 工具
    - vscode
read: 8
---

# vscode snippets 插件

> 讲解如何创建一个 vscode snippets 插件

## snippet 
日常工作中经常会遇到重复的代码片段，IDE 提供了 snippet 来实现代码片段复用，参考 [vscode snippet 文档](https://code.visualstudio.com/docs/editor/userdefinedsnippets)  创建代码片段。核心结构为

\`\`\`json
{
  // 片段的名称
  "For Loop": {
    // 触发片段的简写名称  
    "prefix": ["h", "h1"],
    // 片段内容，
    "body": ["hello world"],
    // 片段描述信息，可选
    "description": "test snippets"
  }
}
\`\`\`

\`body\` 字段常用语法模式为

1. \`$1-n\`  tab 占位 ,当输入片段后,利用 \`tab\` 键会切换光标到对应占位位置
   > 注意占位符变量只支持数字，**$0** 表示光标最终停留位置
2. \`\${n: default}\` 占位默认值, 当对应占位符未输入内容时会被 default 替换
3. \`\${n:|1,2,3|}\` 占位选择，切换到对应占位会弹出选择框
4. \`\${name:default}\` 变量，未定义变量默认为 default
    > 注意由于变量未设置 default 时会默认为空，再使用片段时若想显示 $ 可采用 \`$$\` 的方式

5. 内置变量，例如期望占位内容的默认值为剪切板内容，可使用
\`$CLIPBOARD\` ,或者采用 \`$TM_FILENAME_BASE\` 来将组件名设置为去掉后缀的文件名，常量列表参见 [Variables](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables)
6. 变量转换,例如想提取 \`$TM_FILENAME\` 的后缀名，可采用 \`\${TM_FILENAME/\\(\\\\.\\\\w+)$/$1/}\` 提取文件后缀名，

其余更详细语法参见 [grammar](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_grammar)


### 片段快捷键
对于反复使用的片段支持快捷键触发，配置格式为 

\`\`\`json
{
  // 配置对应快捷键
  "key": "cmd+k 1",
  "command": "editor.action.insertSnippet",
  "when": "editorTextFocus",
  "args": {
     // 快捷键触发的片段 
    "snippet": "console.log($1)$0"
  }
}
\`\`\`

也可将快捷键绑定到申明的代码片段上，修改 \`args\` 配置为

\`\`\`json
{
  // ...
  "args": {
    "langId": "csharp", // 对应的语言
    "name": "myFavSnippet" // 片段的键名
  }
}
\`\`\`
详细的语言支持参见 [language Identifiers](https://code.visualstudio.com/docs/languages/identifiers)

### 项目共享片段
可在特定项目创建复用的片段

1. 在项目根目录创建 \`.vscode\` 文件夹
2. 在 \`.vscode\` 文件夹, 添加后缀为 \`.code-snippets\` 的文件，例如 \`test.code-snippets\`
3. 在创建的 \`test.code-snippets\` 文件中添加片段

    \`\`\`json 
    {
    "test": {
       "prefix": ["af", "arrowf"],
       "body": "const \${1:func} = () => { $0 }",
       "description": "arrow function",
       // 此处申明对应作用范围
       "scope": "javascript,typescript"
       }
    }
    \`\`\`
4. 项目中即可使用该片段

该功能在版本 1.28 出现，详见 [project snippets](https://code.visualstudio.com/updates/v1_28#_project-level-snippets)


## vscode snippet 插件
除了本地和项目中配置 snippet,可将 snippet 制作为插件进行分享。
参考 [snippet guide](https://code.visualstudio.com/api/language-extensions/snippet-guide)

1. 在 package.json 中申明插件路径
  \`\`\`json
  {
     "contributes": {
       "snippets": [
         {
           "language": "javascript",
           // 这里统一放在 snippets 目录方便组织
           "path": "./snippets/a.json"
         }
       ]
     }
  } 
  \`\`\`

2. 在 \`snippets\` 目录创建 \`a.json\` 的 snippet

然后将整个项目拷贝到 \`~/.vscode/extensions\` ,重启 vscode 即可触发插件的 snippet

### 本地打包和安装
采用 vsce 将应用打包为 \`.vsix\` 文件，其他可采用 vscode 提供的 cli \`code\` 命令进行安装，开启 code 命令详见 [配置 code 命令](http://blog.zenheart.site/posts/2018-08-28-vscode.html#%E9%85%8D%E7%BD%AE-code-%E5%91%BD%E4%BB%A4) 

\`\`\`bash
# 1. 全局安装 vsce
npm install -g vsce


# 2. 项目更目录打包插件
vsce package

# 3. 使用 code 安装 .vsix 文件
code --install-extension my-extension-0.0.1.vsix
\`\`\`

### 发布
发布详见 [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) 流程类似 npm 包发布


## snippets 模板扩展
由于 vscode snippets 不支持模板文件，单书写片段过于庞大时，
需要将模板内容转换为 snippet \`body\` 字段的数组模式。为了简化类似 snippet 的书写流程，可以在 \`body\` 中配置模板文件路径。然后利用 
js 脚本读取路径中的文件内容转换为数组，重新保存即可简化包含大量内容的片段书写
`,cl=`---
tags:
    - 工具
    - vimium
    - 浏览器插件
---

# vimium 

**脱离鼠标操作 chrome \b利器**

## 快捷键
### 页面浏览类
| 按键 | 作用                     |
| :--- | :----------------------- |
| ？   | 显示所有可用的快捷键     |
| h    | 左移                     |
| j    | 下移                     |
| k    | 上移                     |
| l    | 右移                     |
| gg   | 回到页面开头             |
| G    | 回到页面底部             |
| d    | 向下滑动页面的一半       |
| u    | 向上滑动页面的一半       |
| f    | 在当前页面打开连接       |
| F    | 在新的页面打开连接       |
| r    | 重新加载页面             |
| yy   | 复制当前网页链接到剪切板 |
| yf   | 复制当前页面的链接       |
| v    | 进入复制模式             |
| V    | 进入行复制模式           |
| gi   | 快速定位到搜索框         |


### 标签控制类
| 按键   | 作用                               |
| :----- | :--------------------------------- |
| o      | 打开 URL、书签和历史导航           |
| O      | 在新的标签打开 URL、书签和历史导航 |
| b      | 打开书签                           |
| B      | 在新窗口打开书签                   |
| J,gT   | 向有移动标签                       |
| K,gt   | 向左移动标签                       |
| g0     | 移动到第一个标签                   |
| g$     | 移动到最后一个标签                 |
| ^      | 回到前面的标签页，历史标签导航     |
| t      | 创建新标签                         |
| T      | 搜寻你打开的标签页                 |
| yt     | 将当前打开标签进行复制             |
| x      | 关闭当前标签页                     |
| X      | 恢复关闭标签页                     |
| ctrl+p | 打印当前页面                       |
| H      | 历史倒退                           |
| L      | 历史前进                           |


### 搜索
\`/\`|查找模式，利用 ESC 退出，按回车键查找
n|向下寻找
N|向上寻找
u|向上滑动页面的一半
f|在当前页面打开连接
F|在新的页面打开连接
r|重新加载页面


## 使能正则查询
1. \`⇧ + ？\` 打开配置项
2. 点击 \`options\`
3. 勾选 \` Treat find queries as JavaScript regular expressions\`
4。 保存配置即可

> 查询时使用 / 使能查询,例如 \`/[a-z]\` 及使能 js 正则查询


## 杂项

| 不常用功能 | 作用                                   |
| :--------- | :------------------------------------- |
| gs         | 查看页面源码，会在新的页面打开页面源码 |
| i          | 进入插入模式                           |
| gf         | 循环当前祯                             |
| gF         | 回到顶祯或底祯                         |
| yf         | 复制连接到剪切板                       |`,ul=Object.assign({"/posts/2016-08-22-bnf.md":wi,"/posts/2016-08-22-markdown.md":yi,"/posts/2016-08-22-sae.md":$i,"/posts/2016-08-22-virtual_memory.md":Si,"/posts/2016-09-09-cygwin.md":Ei,"/posts/2016-10-07-SecureCRT.md":xi,"/posts/2016-10-19-visio.md":Ti,"/posts/2016-11-03-json.md":Pi,"/posts/2016-11-14-wamp.md":ji,"/posts/2016-12-02-putty.md":Ci,"/posts/2016-12-18-redis.md":Li,"/posts/2016-12-26-baidu_map.md":Mi,"/posts/2017-01-12-github.md":Bi,"/posts/2017-02-04-sublime.md":Ai,"/posts/2017-02-09-emmet.md":Di,"/posts/2017-02-09-how_to_learning_language.md":Vi,"/posts/2017-02-22-click_through.md":Ni,"/posts/2017-04-20-mermaid.md":Ii,"/posts/2017-04-30-github-pages.md":Fi,"/posts/2017-05-05-jekyll.md":Hi,"/posts/2017-05-25-samba.md":Oi,"/posts/2017-08-25-regexp.md":zi,"/posts/2017-09-12-fiddler.md":Ri,"/posts/2017-09-26-version.md":Ui,"/posts/2018-01-11-gitbook.md":qi,"/posts/2018-01-23-mac.md":Wi,"/posts/2018-02-01-windows.md":Gi,"/posts/2018-04-18-postman.md":Yi,"/posts/2018-08-10-phpstorm.md":Ji,"/posts/2018-08-28-vscode.md":Ki,"/posts/2018-09-22-web-history.md":Qi,"/posts/2018-10-26-xmind.md":Xi,"/posts/2019-05-11-escape.md":Zi,"/posts/2020-01-18-notes-on-technical-writing.md":nl,"/posts/2020-02-21-how-i-think-about-solving-problem.md":el,"/posts/2020-02-29-understanding-types-typescript.md":tl,"/posts/2020-03-24-rss-bookmark.md":sl,"/posts/2020-04-02-letter-to-myself.md":ol,"/posts/2020-04-20-share-in-wechat.md":al,"/posts/2020-05-03-shortcuts.md":il,"/posts/2020-05-10-virtualbox.md":ll,"/posts/2020-08-08-vscode-snippets.md":rl,"/posts/2022-10-10-vimium.md":cl});function dl(n=""){const t=n.replace(/[#*`\[\]]/g,"").length;return Math.ceil(t/200)}function pl(n="",t=150){const l=(n.replace(/^---[\s\S]*?---/,"").replace(/^#+ .*/gm,"").split(/\n\n+/).filter(u=>u.trim().length>0)[0]||"").replace(/[*_`#>\[\]]/g,"").replace(/\n+/g," ").trim();return l.length<=t?l:l.slice(0,t)+"…"}function hl(n){return n.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase())}function ml(n){const t=n.match(/^---\n([\s\S]*?)\n---/);if(!t)return{};const s={},o=t[1].split(`
`);let a=null,r=[];return o.forEach(l=>{if(l.match(/^\s+-\s+/)){const u=l.replace(/^\s+-\s+/,"").trim();a&&r.push(u)}else{a&&r.length>0&&(s[a]=r,r=[]);const u=l.indexOf(":");if(u>0){a=l.slice(0,u).trim();const d=l.slice(u+1).trim();d&&(s[a]=d,r=[])}}}),a&&r.length>0&&(s[a]=r),s}function tn(){const n=f(()=>Object.entries(ul).map(([o,a])=>{const r=o.replace(".md",""),l=r,u=ml(a),d=o.match(/(\d{4}-\d{2}-\d{2})/),k=d?d[1]:"",v=r.replace("/posts/","").replace(/^\d{4}-\d{2}-\d{2}-/,""),w=u.slug||v,S=u.title||(w?hl(w):""),P=Array.isArray(u.tags)?u.tags:[],$=u.description||u.excerpt||pl(a),y=parseInt(u.read)||dl(a);return{date:k,slug:w,url:l,title:S,excerpt:$,tags:P,read:y}}).filter(o=>o.date).sort((o,a)=>a.date.localeCompare(o.date))),t=f(()=>{const o=n.value||[],a={};return o.forEach(r=>{Array.isArray(r.tags)&&r.tags.forEach(l=>{a[l]=(a[l]||0)+1})}),Object.entries(a).map(([r,l])=>({name:r,count:l})).sort((r,l)=>l.count-r.count)}),s=f(()=>{const o={};return(n.value||[]).forEach(r=>{var u;const l=(u=r.date)==null?void 0:u.split("-")[0];l&&(o[l]||(o[l]=[]),o[l].push(r))}),Object.entries(o).sort((r,l)=>l[0]-r[0])});return{POSTS:n,TAGS:t,postsByYear:s}}const gl={class:"home"},vl={class:"hero"},bl={class:"tagline"},fl={class:"intro"},_l={class:"hero-meta"},kl={class:"home-grid"},wl={class:"entries"},yl={class:"section-head"},$l={class:"en"},Sl={href:"/posts",class:"more"},El={class:"year-label"},xl={class:"year-num"},Tl={class:"year-count"},Pl=["href"],jl={class:"date"},Cl={class:"title"},Ll={class:"excerpt"},Ml={class:"tag-row"},Bl={class:"sidebar"},Al={class:"aside-block"},Dl={class:"en"},Vl={class:"aside-tags"},Nl=["href"],Il={class:"count"},Fl={class:"aside-block"},Hl={class:"en"},Ol={class:"aside-years"},zl=["href"],Rl={class:"year-name"},Ul={class:"year-count"},ql={__name:"HomePage",setup(n){const{site:t}=U(),{POSTS:s,TAGS:o}=tn(),a=f(()=>J(t.value)),r=f(()=>{var v,w;return((w=(v=t.value)==null?void 0:v.themeConfig)==null?void 0:w.hero)||{}}),l=f(()=>r.value.title||a.value.home.defaultTitle),u=f(()=>r.value.tagline||a.value.home.defaultTagline),d=f(()=>r.value.intro||""),k=f(()=>{const v=s.value.slice(0,8),w={};return v.forEach(S=>{var $;const P=($=S.date)==null?void 0:$.split("-")[0];P&&(w[P]||(w[P]=[]),w[P].push(S))}),Object.entries(w).sort((S,P)=>P[0]-S[0])}),b=f(()=>{const v={};return s.value.forEach(w=>{var P;const S=(P=w.date)==null?void 0:P.split("-")[0];S&&(v[S]||(v[S]=[]),v[S].push(w))}),Object.entries(v).sort((w,S)=>S[0]-w[0])});return(v,w)=>(i(),c("section",gl,[e("div",vl,[w[0]||(w[0]=e("div",{class:"wash"},null,-1)),e("h1",null,h(l.value),1),e("p",bl,h(u.value),1),e("p",fl,h(d.value),1),e("div",_l,[e("span",null,[e("strong",null,h(p(s).length),1),H(" "+h(a.value.home.articlesLabel),1)]),e("span",null,[e("strong",null,h(b.value.length),1),H(" "+h(a.value.home.yearSpanLabel),1)]),e("span",null,[e("strong",null,h(p(o).length),1),H(" "+h(a.value.home.tagsLabel),1)])])]),e("div",kl,[e("div",wl,[e("div",yl,[e("h2",null,[H(h(a.value.home.recentPostsLabel),1),e("span",$l,h(a.value.home.recentPostsLabelEn),1)]),e("a",Sl,h(a.value.home.viewAllLabel),1)]),(i(!0),c(j,null,N(k.value,([S,P])=>(i(),c("div",{key:S,class:"year-group"},[e("div",El,[e("span",xl,h(S),1),e("span",Tl,h(P.length)+" "+h(P.length===1?"entry":"entries"),1)]),(i(!0),c(j,null,N(P,$=>(i(),c("a",{key:$.slug,href:$.url,class:"entry"},[e("time",jl,h($.date.slice(5)),1),e("div",null,[e("h3",Cl,h($.title),1),e("p",Ll,h($.excerpt),1)]),e("div",Ml,[(i(!0),c(j,null,N($.tags,y=>(i(),c("span",{key:y,class:"tag"},h(y),1))),128))])],8,Pl))),128))]))),128))]),e("aside",Bl,[e("div",Al,[e("h3",null,[H(h(a.value.home.tagsTitle),1),e("span",Dl,h(a.value.home.tagsTitleEn),1)]),e("div",Vl,[(i(!0),c(j,null,N(p(o).slice(0,15),S=>(i(),c("a",{key:S.name,href:`/posts?tag=${S.name}`,class:"tag"},[H(h(S.name),1),e("span",Il,h(S.count),1)],8,Nl))),128))])]),e("div",Fl,[e("h3",null,[H(h(a.value.home.timelineLabel),1),e("span",Hl,h(a.value.home.timelineLabelEn),1)]),e("div",Ol,[(i(!0),c(j,null,N(b.value,([S,P])=>(i(),c("a",{key:S,href:`/posts?year=${S}`,class:"year-item"},[e("span",Rl,h(S),1),e("span",Ul,h(P.length),1)],8,zl))),128))])])])])]))}},Wl={class:"posts-archive"},Gl={class:"page-head"},Yl={class:"page-title"},Jl={class:"cn"},Kl={class:"en"},Ql={class:"page-meta"},Xl={class:"archive-grid"},Zl={class:"archive-main"},nr={class:"archive-search-row"},er=["placeholder"],tr={key:0,class:"archive-no-results"},sr={class:"year-label"},or={class:"year-num"},ar={class:"year-count"},ir=["href"],lr={class:"date"},rr={class:"title"},cr={class:"excerpt"},ur={class:"tag-row"},dr={class:"archive-sidebar"},pr={class:"aside-block"},hr={class:"en"},mr={class:"aside-tags"},gr=["onClick"],vr={class:"count"},br={class:"aside-block"},fr={class:"en"},_r={class:"aside-years"},kr=["onClick"],wr={class:"year-name"},yr={class:"year-count"},$r={__name:"PostsArchive",setup(n){const t=Z(),{site:s}=U(),{POSTS:o,TAGS:a,postsByYear:r}=tn(),l=f(()=>J(s.value)),u=M(""),d=M(null),k=M(null);z(()=>{const $=new URLSearchParams(window.location.search);d.value=$.get("tag")||"",k.value=$.get("year")||""});const b=f({get:()=>d.value||u.value,set:$=>{if(u.value=$,d.value&&!$){const y=new URLSearchParams(window.location.search);y.delete("tag"),window.history.pushState({},"",y.toString()?`/posts?${y}`:"/posts")}}}),v=f(()=>{const $=t.query&&t.query.tag||d.value,y=t.query&&t.query.year||k.value;return(o.value||[]).filter(I=>{if($&&!I.tags.includes($)||y&&!I.date.startsWith(y))return!1;if(u.value){const B=u.value.toLowerCase();return I.title.toLowerCase().includes(B)||I.excerpt.toLowerCase().includes(B)||I.tags.some(V=>V.toLowerCase().includes(B))}return!0})}),w=f(()=>{const $={};return v.value.forEach(y=>{const L=y.date.split("-")[0];$[L]||($[L]=[]),$[L].push(y)}),Object.entries($).sort((y,L)=>L[0]-y[0])});function S($){const y=new URLSearchParams(window.location.search);d.value===$?y.delete("tag"):y.set("tag",$);const L=y.toString();window.location.href=L?`/posts?${L}`:"/posts"}function P($){const y=new URLSearchParams(window.location.search);k.value===$?y.delete("year"):y.set("year",$);const L=y.toString();window.location.href=L?`/posts?${L}`:"/posts"}return($,y)=>{var L,I,B,V;return i(),c("section",Wl,[e("div",Gl,[e("h1",Yl,[e("span",Jl,h(l.value.archivePage.title),1),e("span",Kl,"/ "+h(l.value.archivePage.titleEn)+" · "+h(v.value.length)+" of "+h(p(o).length),1)]),e("span",Ql,h((I=(L=p(o)[p(o).length-1])==null?void 0:L.date)==null?void 0:I.slice(0,4))+" — "+h((V=(B=p(o)[0])==null?void 0:B.date)==null?void 0:V.slice(0,4)),1)]),e("div",Xl,[e("div",Zl,[e("div",nr,[re(e("input",{"onUpdate:modelValue":y[0]||(y[0]=F=>b.value=F),type:"text",placeholder:l.value.archivePage.searchPlaceholder,class:"archive-search-input"},null,8,er),[[ce,b.value]]),d.value?(i(),c("button",{key:0,onClick:y[1]||(y[1]=F=>S(d.value)),class:"archive-tag-filter-btn"},h(d.value)+" × ",1)):_("",!0)]),w.value.length===0?(i(),c("div",tr,h(l.value.archivePage.noResults),1)):_("",!0),(i(!0),c(j,null,N(w.value,([F,O])=>(i(),c("div",{key:F,class:"year-group"},[e("div",sr,[e("span",or,h(F),1),e("span",ar,h(O.length)+" entries",1)]),(i(!0),c(j,null,N(O,q=>(i(),c("a",{key:q.slug,href:q.url,class:"entry"},[e("span",lr,h(q.date),1),e("div",null,[e("h3",rr,h(q.title),1),e("p",cr,h(q.excerpt),1)]),e("div",ur,[(i(!0),c(j,null,N(q.tags,sn=>(i(),c("span",{key:sn,class:"tag"},h(sn),1))),128))])],8,ir))),128))]))),128))]),e("aside",dr,[e("div",pr,[e("h3",null,[H(h(l.value.archivePage.filterLabel),1),e("span",hr,h(l.value.archivePage.filterLabelEn),1)]),e("div",mr,[(i(!0),c(j,null,N(p(a),F=>(i(),c("a",{key:F.name,href:"/posts",class:A(["tag",{active:d.value===F.name}]),onClick:on(O=>S(F.name),["prevent"])},[H(h(F.name),1),e("span",vr,h(F.count),1)],10,gr))),128))])]),e("div",br,[e("h3",null,[H(h(l.value.archivePage.byYearLabel),1),e("span",fr,h(l.value.archivePage.byYearLabelEn),1)]),e("div",_r,[(i(!0),c(j,null,N(p(r),([F,O])=>(i(),c("a",{key:F,href:"/posts",class:A(["year-item",{active:k.value===F}]),onClick:on(q=>P(F),["prevent"])},[e("span",wr,h(F),1),e("span",yr,h(O.length),1)],10,kr))),128))])])])])])}}},Sr={class:"tags-page"},Er={class:"page-head"},xr={class:"page-title"},Tr={class:"cn"},Pr={class:"en"},jr={class:"page-meta"},Cr={class:"tag-cloud-wrap"},Lr={class:"tag-cloud-desc"},Mr={class:"tag-cloud"},Br=["href"],Ar={class:"count"},Dr={class:"section-head",style:{"margin-top":"48px"}},Vr={class:"en"},Nr={class:"tag-distribution"},Ir=["href"],Fr={class:"tag-dist-name"},Hr={class:"tag-dist-bar"},Or={class:"tag-dist-count"},zr={__name:"TagsPage",setup(n){const{site:t}=U(),{POSTS:s,TAGS:o}=tn(),a=f(()=>J(t.value)),r=f(()=>Math.max(...(o.value||[]).map(l=>l.count)));return(l,u)=>(i(),c("section",Sr,[e("div",Er,[e("h1",xr,[e("span",Tr,h(a.value.tagsPage.title),1),e("span",Pr,"/ "+h(a.value.tagsPage.titleEn),1)]),e("span",jr,h(p(o).length)+" topics · "+h(p(s).length)+" entries",1)]),e("div",Cr,[e("p",Lr,h(a.value.tagsPage.description),1),e("div",Mr,[(i(!0),c(j,null,N(p(o),d=>(i(),c("a",{key:d.name,href:`/posts?tag=${d.name}`,class:A(["tag",{big:d.count>=r.value*.5,mid:d.count>=r.value*.2&&d.count<r.value*.5}])},[H(h(d.name),1),e("span",Ar,h(d.count),1)],10,Br))),128))]),e("div",Dr,[e("h2",null,[H(h(a.value.tagsPage.distributionTitle),1),e("span",Vr,"/ "+h(a.value.tagsPage.distributionTitleEn),1)])]),e("div",Nr,[(i(!0),c(j,null,N(p(o),d=>(i(),c("a",{key:d.name,href:`/posts?tag=${d.name}`,class:"tag-dist-row"},[e("span",Fr,h(d.name),1),e("div",Hr,[e("div",{class:"tag-dist-fill",style:ln({width:d.count/r.value*100+"%"})},null,4)]),e("span",Or,h(d.count),1)],8,Ir))),128))])])]))}},Rr={class:"projects-page"},Ur={class:"page-head"},qr={class:"page-title"},Wr={class:"cn"},Gr={class:"en"},Yr={class:"page-meta"},Jr={class:"projects-kanban"},Kr={class:"kanban-col-head"},Qr={class:"kanban-col-title"},Xr={class:"kanban-col-title-en"},Zr={class:"kanban-cards"},nc={key:0,class:"kanban-empty"},ec=["href"],tc={class:"kanban-card-meta"},sc={class:"kanban-card-cat"},oc={class:"kanban-card-footer"},ac={class:"kanban-legend"},ic={class:"kanban-legend-item"},lc={class:"kanban-legend-item"},rc={__name:"ProjectsPage",setup(n){const{site:t}=U(),s=f(()=>{var r,l;return((l=(r=t.value)==null?void 0:r.themeConfig)==null?void 0:l.projects)||[]}),o=f(()=>J(t.value)),a=f(()=>o.value.projectsPage.kanbanColumns);return(r,l)=>(i(),c("section",Rr,[e("div",Ur,[e("h1",qr,[e("span",Wr,h(o.value.projectsPage.title),1),e("span",Gr,"/ "+h(o.value.projectsPage.titleEn),1)]),e("span",Yr,h(s.value.length)+" projects · open source",1)]),e("div",Jr,[(i(!0),c(j,null,N(a.value,u=>(i(),c("div",{key:u.key,class:"kanban-col"},[e("div",Kr,[e("div",null,[e("span",Qr,h(u.key),1),e("span",Xr,"/ "+h(u.en),1)]),e("span",{class:A(["kanban-col-count",u.tone])},h((s.value.filter(d=>d.status===u.key)||[]).length),3)]),e("div",Zr,[s.value.filter(d=>d.status===u.key).length===0?(i(),c("div",nc,h(o.value.projectsPage.emptyState),1)):_("",!0),(i(!0),c(j,null,N(s.value.filter(d=>d.status===u.key),d=>(i(),c("a",{key:d.title,href:d.url,target:"_blank",rel:"noopener",class:"kanban-card"},[e("div",tc,[e("span",{class:"kanban-card-dot",style:ln({background:d.category===o.value.projectsPage.categoryGuides?"var(--seal)":"var(--ink-soft)"})},null,4),e("span",sc,h(d.category),1)]),e("h3",null,h(d.title),1),e("p",null,h(d.desc),1),e("div",oc,[e("span",null,"#"+h(d.title.toLowerCase().replace(/[^a-z0-9]/g,"-").slice(0,12)),1),e("span",null,"↗ "+h(o.value.projectsPage.openLabel),1)])],8,ec))),128))])]))),128))]),e("div",ac,[e("span",ic,[l[0]||(l[0]=e("span",{class:"kanban-legend-dot",style:{background:"var(--seal)"}},null,-1)),H(" "+h(o.value.projectsPage.categoryGuides)+" / "+h(o.value.projectsPage.categoryGuidesEn),1)]),e("span",lc,[l[1]||(l[1]=e("span",{class:"kanban-legend-dot",style:{background:"var(--ink-soft)"}},null,-1)),H(" "+h(o.value.projectsPage.categoryTools)+" / "+h(o.value.projectsPage.categoryToolsEn),1)])])]))}},cc={class:"about-page"},uc={class:"about-head"},dc={class:"about-photo"},pc={class:"role"},hc={class:"bio"},mc={class:"about-section"},gc={class:"en"},vc={key:0,class:"about-row"},bc={key:1,class:"about-row"},fc={key:2,class:"about-row"},_c={class:"about-row"},kc={class:"when"},wc={class:"about-row"},yc={key:0,class:"about-section"},$c={class:"en"},Sc={key:0,class:"when"},Ec={class:"en"},xc={class:"about-prose"},Tc={key:1,class:"about-section"},Pc={class:"en"},jc={key:0,class:"about-row"},Cc=["href"],Lc={key:1,class:"about-row"},Mc=["href"],Bc={key:2,class:"about-row"},Ac={style:{"font-family":"var(--mono)","font-size":"13px"}},Dc={__name:"AboutPage",setup(n){const{site:t}=U(),{POSTS:s}=tn(),o=f(()=>J(t.value)),a=f(()=>{var k,b;return((b=(k=t.value)==null?void 0:k.themeConfig)==null?void 0:b.profile)||{}}),r=f(()=>{var k,b;return((b=(k=t.value)==null?void 0:k.themeConfig)==null?void 0:b.experience)||[]}),l=f(()=>{var k,b;return((b=(k=t.value)==null?void 0:k.themeConfig)==null?void 0:b.about)||[]}),u=f(()=>{var k,b;return((b=(k=t.value)==null?void 0:k.themeConfig)==null?void 0:b.contact)||{}}),d=f(()=>{var k,b;return((b=(k=t.value)==null?void 0:k.themeConfig)==null?void 0:b.projects)||[]});return(k,b)=>(i(),c("section",cc,[e("div",uc,[e("div",dc,h(a.value.avatar),1),e("div",null,[e("h1",null,h(a.value.name),1),e("div",pc,h(a.value.role),1),e("p",hc,h(a.value.bio),1)])]),e("div",mc,[e("h2",null,[H(h(o.value.aboutPage.profileLabel)+" ",1),e("span",gc,"· "+h(o.value.aboutPage.profileLabelEn),1)]),e("dl",null,[a.value.location?(i(),c("div",vc,[b[0]||(b[0]=e("dt",null,"location",-1)),e("dd",null,h(a.value.location),1)])):_("",!0),a.value.focus?(i(),c("div",bc,[b[1]||(b[1]=e("dt",null,"focus",-1)),e("dd",null,h(a.value.focus),1)])):_("",!0),a.value.stack?(i(),c("div",fc,[b[2]||(b[2]=e("dt",null,"stack",-1)),e("dd",null,h(a.value.stack),1)])):_("",!0),e("div",_c,[b[3]||(b[3]=e("dt",null,"writing",-1)),e("dd",null,[H(h(p(s).length)+" "+h(o.value.aboutPage.postsLabel),1),e("span",kc,"since "+h(a.value.since),1)])]),e("div",wc,[b[4]||(b[4]=e("dt",null,"works",-1)),e("dd",null,h(d.value.length)+" "+h(o.value.aboutPage.projectsLabel),1)])])]),r.value.length?(i(),c("div",yc,[e("h2",null,[H(h(o.value.aboutPage.experienceLabel)+" ",1),e("span",$c,"· "+h(o.value.aboutPage.experienceLabelEn),1)]),e("dl",null,[(i(!0),c(j,null,N(r.value,v=>(i(),c("div",{key:v.period,class:"about-row"},[e("dt",null,h(v.period),1),e("dd",null,[H(h(v.title),1),v.note?(i(),c("span",Sc,h(v.note),1)):_("",!0)])]))),128))])])):_("",!0),(i(!0),c(j,null,N(l.value,v=>(i(),c("div",{key:v.title,class:"about-section"},[e("h2",null,[H(h(v.title)+" ",1),e("span",Ec,"· "+h(v.titleEn),1)]),e("p",xc,h(v.content),1)]))),128)),u.value.github||u.value.rss||u.value.email?(i(),c("div",Tc,[e("h2",null,[H(h(o.value.aboutPage.contactLabel)+" ",1),e("span",Pc,"· "+h(o.value.aboutPage.contactLabelEn),1)]),e("dl",null,[u.value.github?(i(),c("div",jc,[b[5]||(b[5]=e("dt",null,"github",-1)),e("dd",null,[e("a",{href:u.value.github,target:"_blank",rel:"noopener"},h(u.value.githubUsername||"@zenHeart"),9,Cc)])])):_("",!0),u.value.rss?(i(),c("div",Lc,[b[6]||(b[6]=e("dt",null,"rss",-1)),e("dd",null,[e("a",{href:u.value.rss},h(o.value.header.feedUrl),9,Mc)])])):_("",!0),u.value.email?(i(),c("div",Bc,[b[7]||(b[7]=e("dt",null,"email",-1)),e("dd",Ac,h(u.value.email),1)])):_("",!0)])])):_("",!0)]))}},Vc={key:0,class:"post-toc"},Nc=["onClick"],Ic={class:"post-wrap"},Fc={class:"post-head"},Hc={class:"kicker"},Oc={key:0},zc={key:0,class:"dek"},Rc={key:1,class:"post-tags"},Uc={class:"post-body"},qc={class:"post-foot"},Wc=["href"],Gc={key:1},Yc=["href"],Jc={key:3},Kc={__name:"PostContent",setup(n){const{frontmatter:t,page:s}=U(),o=Z(),{POSTS:a}=tn(),r=M(0),l=M(null),u=M([]),d=f(()=>a.value.findIndex(B=>B.url===o.path.replace(/\/$/,""))),k=f(()=>d.value>0?a.value[d.value-1]:null),b=f(()=>d.value>=0&&d.value<a.value.length-1?a.value[d.value+1]:null),v=f(()=>{var B,V;return((B=t.value)==null?void 0:B.title)||((V=s.value)==null?void 0:V.title)||""}),w=f(()=>{var F;const B=(F=t.value)==null?void 0:F.date;if(B)return B;const V=o.path.match(/(\d{4}-\d{2}-\d{2})/);return V?V[1]:""}),S=f(()=>{var B;return(B=t.value)==null?void 0:B.read}),P=f(()=>{var B;return((B=t.value)==null?void 0:B.description)||""}),$=f(()=>{var B;return((B=t.value)==null?void 0:B.tags)||[]});function y(){const B=document.querySelector(".post-body");if(!B)return;const V=B.getBoundingClientRect(),F=Math.max(1,B.offsetHeight-window.innerHeight+200),O=Math.max(0,-V.top);r.value=Math.min(100,Math.max(0,O/F*100));const q=B.querySelectorAll("h2, h3");let sn=null;for(const Bn of q)if(Bn.getBoundingClientRect().top<120)sn=Bn.id;else break;l.value=sn}function L(B){var V;(V=document.getElementById(B))==null||V.scrollIntoView({behavior:"smooth",block:"start"})}function I(){const B=document.querySelector(".post-body");if(!B)return;const V=[];B.querySelectorAll("h2, h3").forEach(F=>{if(!F.id)return;const O=(F.textContent||"").replace(/\u200b/g,"").replace(/^#\s*/,"").trim();V.push({id:F.id,text:O,level:F.tagName==="H2"?2:3})}),u.value=V}return z(()=>{window.addEventListener("scroll",y,{passive:!0}),y(),un(()=>setTimeout(I,50))}),an(()=>{window.removeEventListener("scroll",y)}),R(()=>o.path,()=>{r.value=0,u.value=[],un(()=>setTimeout(I,50))}),(B,V)=>{const F=X("Content");return i(),c(j,null,[e("div",{class:"reading-progress",style:ln({width:r.value+"%"})},null,4),u.value.length>0?(i(),c("nav",Vc,[V[0]||(V[0]=e("div",{class:"toc-label"},"目次 / toc",-1)),e("ul",null,[(i(!0),c(j,null,N(u.value,O=>(i(),c("li",{key:O.id,class:A({indent:O.level===3})},[e("a",{class:A({active:l.value===O.id}),onClick:q=>L(O.id)},h(O.text),11,Nc)],2))),128))])])):_("",!0),e("article",Ic,[V[6]||(V[6]=e("a",{href:"/posts",class:"back-link"},"← 返回博客 / back",-1)),e("header",Fc,[e("div",Hc,[w.value?(i(),c("span",Oc,h(w.value),1)):_("",!0),S.value?(i(),c(j,{key:1},[V[1]||(V[1]=e("span",null,"·",-1)),e("span",null,"约 "+h(S.value)+" 分钟",1)],64)):_("",!0),V[2]||(V[2]=e("span",null,"·",-1)),V[3]||(V[3]=e("span",null,"by zenheart",-1))]),e("h1",null,h(v.value),1),P.value?(i(),c("p",zc,h(P.value),1)):_("",!0),$.value.length?(i(),c("div",Rc,[(i(!0),c(j,null,N($.value,O=>(i(),c("a",{key:O,href:"/posts",class:"tag"},h(O),1))),128))])):_("",!0)]),e("div",Uc,[x(F)]),e("nav",qc,[b.value?(i(),c("a",{key:0,href:b.value.url,class:"nav-card prev"},[V[4]||(V[4]=e("div",{class:"dir"},"← 上一篇 / prev",-1)),e("h4",null,h(b.value.title),1)],8,Wc)):(i(),c("div",Gc)),k.value?(i(),c("a",{key:2,href:k.value.url,class:"nav-card next"},[V[5]||(V[5]=e("div",{class:"dir"},"下一篇 / next →",-1)),e("h4",null,h(k.value.title),1)],8,Yc)):(i(),c("div",Jc))])])],64)}}},Qc={class:"search-panel"},Xc={class:"search-input-row"},Zc=["value","placeholder"],nu={class:"hint"},eu={class:"search-results"},tu={key:0,class:"search-empty"},su=["href"],ou={class:"date"},au={class:"title"},iu={class:"search-footer"},lu={__name:"SearchOverlay",props:{searchOpen:Boolean,searchQuery:String,searchFocused:Number},emits:["update:searchOpen","update:searchQuery","update:searchFocused"],setup(n,{emit:t}){const s=n,o=t,{site:a}=U(),{POSTS:r}=tn(),l=f(()=>J(a.value)),u=f(()=>{if(!s.searchQuery)return[];const b=s.searchQuery.toLowerCase();return(r.value||[]).filter(w=>w.title.toLowerCase().includes(b)||w.excerpt.toLowerCase().includes(b)||w.tags.some(S=>S.toLowerCase().includes(b))).slice(0,8)});function d(){o("update:searchOpen",!1),o("update:searchQuery","")}function k(b){b.key==="Escape"&&d(),s.searchOpen&&(b.key==="ArrowDown"&&(b.preventDefault(),o("update:searchFocused",Math.min(s.searchFocused+1,u.value.length-1))),b.key==="ArrowUp"&&(b.preventDefault(),o("update:searchFocused",Math.max(s.searchFocused-1,0))),b.key==="Enter"&&u.value[s.searchFocused]&&(window.location.href=u.value[s.searchFocused].url))}return z(()=>document.addEventListener("keydown",k)),an(()=>document.removeEventListener("keydown",k)),(b,v)=>n.searchOpen?(i(),c("div",{key:0,class:"search-overlay open",onClick:on(d,["self"])},[e("div",Qc,[e("div",Xc,[v[1]||(v[1]=e("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("path",{d:"m21 21-4.35-4.35"})],-1)),e("input",{value:n.searchQuery,onInput:v[0]||(v[0]=w=>o("update:searchQuery",w.target.value)),placeholder:l.value.search.placeholder,autofocus:""},null,40,Zc),e("span",nu,h(l.value.search.closeHint),1)]),e("div",eu,[u.value.length===0&&n.searchQuery?(i(),c("div",tu,h(l.value.search.noResults),1)):_("",!0),(i(!0),c(j,null,N(u.value,(w,S)=>(i(),c("a",{key:w.slug,href:w.url,class:A(["search-result",{focused:S===n.searchFocused}])},[e("span",ou,h(w.date),1),e("span",au,h(w.title),1)],10,su))),128))]),e("div",iu,[e("span",null,[v[2]||(v[2]=e("kbd",null,"↑",-1)),v[3]||(v[3]=e("kbd",null,"↓",-1)),H(" "+h(l.value.search.navHint),1)]),e("span",null,[v[4]||(v[4]=e("kbd",null,"↵",-1)),H(" "+h(l.value.search.openHint),1)]),e("span",null,[v[5]||(v[5]=e("kbd",null,"esc",-1)),H(" "+h(l.value.search.exitHint),1)])])])])):_("",!0)}},ru={class:"tweaks-row"},cu={class:"options"},uu=["onClick"],du={__name:"TweaksPanel",props:{tweaksOpen:Boolean,ink:String},emits:["update:tweaksOpen","update:ink"],setup(n,{emit:t}){const s=t,{site:o}=U(),a=f(()=>J(o.value)),r=["light","normal","heavy"];return(l,u)=>(i(),c("div",{class:A(["tweaks-panel",{open:n.tweaksOpen}])},[e("h4",null,h(a.value.tweaks.title),1),e("div",ru,[e("label",null,h(a.value.tweaks.inkLabel),1),e("div",cu,[(i(),c(j,null,N(r,(d,k)=>e("button",{key:d,class:A({active:n.ink===d}),onClick:b=>s("update:ink",d)},h(a.value.tweaks.inkOptions[k]),11,uu)),64))])])],2))}},fn=M(!1),Dn=M(""),pu=M(0),hu=M(!1),mu=M("normal"),nn=M(!1);function Yn(n){const t=document.documentElement;t.setAttribute("data-theme",n?"dark":"light"),t.classList.toggle("dark",n)}z(()=>{nn.value=localStorage.getItem("theme")==="dark",Yn(nn.value)});function gu(){function n(){nn.value=!nn.value,Yn(nn.value),localStorage.setItem("theme",nn.value?"dark":"light")}function t(){fn.value=!0}function s(){fn.value=!1,Dn.value=""}return{searchOpen:fn,searchQuery:Dn,searchFocused:pu,tweaksOpen:hu,ink:mu,isDark:nn,toggleDarkMode:n,openSearch:t,closeSearch:s}}const vu=["data-ink"],bu={class:"page"},fu={__name:"Layout",setup(n){const{site:t}=U(),s=Z(),{isDark:o,searchOpen:a,searchQuery:r,searchFocused:l,tweaksOpen:u,ink:d,openSearch:k}=gu(),b=f(()=>s.path==="/"||s.path==="/index"),v=f(()=>s.path==="/posts"||s.path==="/posts/"),w=f(()=>s.path==="/tags"||s.path==="/tags/"),S=f(()=>s.path==="/projects"||s.path==="/projects/"),P=f(()=>s.path==="/about"||s.path==="/about/"),$=f(()=>s.path.startsWith("/posts/")&&s.path.length>7);return z(()=>{document.addEventListener("keydown",y=>{(y.metaKey||y.ctrlKey)&&y.key==="k"&&(y.preventDefault(),k())})}),(y,L)=>(i(),c("div",{class:"zen-app","data-ink":p(d)},[x(gi,{isDark:p(o),"onUpdate:isDark":L[0]||(L[0]=I=>K(o)?o.value=I:null),searchOpen:p(a),"onUpdate:searchOpen":L[1]||(L[1]=I=>K(a)?a.value=I:null),tweaksOpen:p(u),"onUpdate:tweaksOpen":L[2]||(L[2]=I=>K(u)?u.value=I:null)},null,8,["isDark","searchOpen","tweaksOpen"]),e("main",bu,[b.value?(i(),E(ql,{key:0})):v.value?(i(),E($r,{key:1})):w.value?(i(),E(zr,{key:2})):S.value?(i(),E(rc,{key:3})):P.value?(i(),E(Dc,{key:4})):$.value?(i(),E(Kc,{key:5})):_("",!0)]),x(ki),x(lu,{searchOpen:p(a),"onUpdate:searchOpen":L[3]||(L[3]=I=>K(a)?a.value=I:null),searchQuery:p(r),"onUpdate:searchQuery":L[4]||(L[4]=I=>K(r)?r.value=I:null),searchFocused:p(l),"onUpdate:searchFocused":L[5]||(L[5]=I=>K(l)?l.value=I:null)},null,8,["searchOpen","searchQuery","searchFocused"]),x(du,{tweaksOpen:p(u),"onUpdate:tweaksOpen":L[6]||(L[6]=I=>K(u)?u.value=I:null),ink:p(d),"onUpdate:ink":L[7]||(L[7]=I=>K(d)?d.value=I:null)},null,8,["tweaksOpen","ink"])],8,vu))}},ku={extends:Ua,Layout:fu,enhanceApp({app:n,router:t,siteData:s}){}};export{xo as c,ku as t,D as u};
