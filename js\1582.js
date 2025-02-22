"use strict";(self.webpackChunkof_vue=self.webpackChunkof_vue||[]).push([[1582],{236611:function(e,t){t.A={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}}},260571:function(e,t,n){var i=n(841764),o=n(37655),r=n(124187),l=n(993808),s=n(899394),a=n(652479),p=n(164271),c=n(731215),h=n(537724),u=n(660918),f=n(105793),g=n(938087),k=n(415687),A=n(588135),m=n(161376),b=n(75052);const d=[["text",r.A],["linkify",l.A],["newline",s.A],["escape",a.A],["backticks",p.A],["strikethrough",c.A.tokenize],["emphasis",h.A.tokenize],["link",u.A],["image",f.A],["autolink",g.A],["html_inline",k.A],["entity",A.A]],y=[["balance_pairs",m.A],["strikethrough",c.A.postProcess],["emphasis",h.A.postProcess],["fragments_join",b.A]];function x(){this.ruler=new i.A;for(let e=0;e<d.length;e++)this.ruler.push(d[e][0],d[e][1]);this.ruler2=new i.A;for(let e=0;e<y.length;e++)this.ruler2.push(y[e][0],y[e][1])}x.prototype.skipToken=function(e){const t=e.pos,n=this.ruler.getRules(""),i=n.length,o=e.md.options.maxNesting,r=e.cache;if(void 0!==r[t])return void(e.pos=r[t]);let l=!1;if(e.level<o){for(let s=0;s<i;s++)if(e.level++,l=n[s](e,!0),e.level--,l){if(t>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;l||e.pos++,r[t]=e.pos},x.prototype.tokenize=function(e){const t=this.ruler.getRules(""),n=t.length,i=e.posMax,o=e.md.options.maxNesting;for(;e.pos<i;){const r=e.pos;let l=!1;if(e.level<o)for(let i=0;i<n;i++)if(l=t[i](e,!1),l){if(r>=e.pos)throw new Error("inline rule didn't increment state.pos");break}if(l){if(e.pos>=i)break}else e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},x.prototype.parse=function(e,t,n,i){const o=new this.State(e,t,n,i);this.tokenize(o);const r=this.ruler2.getRules(""),l=r.length;for(let s=0;s<l;s++)r[s](o)},x.prototype.State=o.A,t.A=x},379878:function(e,t){t.A={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}}},659427:function(e,t,n){var i=n(841764),o=n(279279),r=n(835994),l=n(942049),s=n(569405),a=n(937903),p=n(363044),c=n(301766),h=n(603305),u=n(627647),f=n(305380),g=n(592376),k=n(759668);const A=[["table",r.A,["paragraph","reference"]],["code",l.A],["fence",s.A,["paragraph","reference","blockquote","list"]],["blockquote",a.A,["paragraph","reference","blockquote","list"]],["hr",p.A,["paragraph","reference","blockquote","list"]],["list",c.A,["paragraph","reference","blockquote"]],["reference",h.A],["html_block",u.A,["paragraph","reference","blockquote"]],["heading",f.A,["paragraph","reference","blockquote"]],["lheading",g.A],["paragraph",k.A]];function m(){this.ruler=new i.A;for(let e=0;e<A.length;e++)this.ruler.push(A[e][0],A[e][1],{alt:(A[e][2]||[]).slice()})}m.prototype.tokenize=function(e,t,n){const i=this.ruler.getRules(""),o=i.length,r=e.md.options.maxNesting;let l=t,s=!1;for(;l<n&&(e.line=l=e.skipEmptyLines(l),!(l>=n))&&!(e.sCount[l]<e.blkIndent);){if(e.level>=r){e.line=n;break}const t=e.line;let a=!1;for(let r=0;r<o;r++)if(a=i[r](e,l,n,!1),a){if(t>=e.line)throw new Error("block rule didn't increment state.line");break}if(!a)throw new Error("none of the block rules matched");e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),l=e.line,l<n&&e.isEmpty(l)&&(s=!0,l++,e.line=l)}},m.prototype.parse=function(e,t,n,i){if(!e)return;const o=new this.State(e,t,n,i);this.tokenize(o,o.line,o.lineMax)},m.prototype.State=o.A,t.A=m},704805:function(e,t){t.A={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}}},942257:function(e,t,n){var i=n(841764),o=n(907487),r=n(530825),l=n(271703),s=n(57287),a=n(233806),p=n(871927),c=n(285456),h=n(441256);const u=[["normalize",r.A],["block",l.A],["inline",s.A],["linkify",a.A],["replacements",p.A],["smartquotes",c.A],["text_join",h.A]];function f(){this.ruler=new i.A;for(let e=0;e<u.length;e++)this.ruler.push(u[e][0],u[e][1])}f.prototype.process=function(e){const t=this.ruler.getRules("");for(let n=0,i=t.length;n<i;n++)t[n](e)},f.prototype.State=o.A,t.A=f}}]);