"use strict";(self.webpackChunkof_vue=self.webpackChunkof_vue||[]).push([[42845],{342845:function(e,t,n){n.d(t,{$t:function(){return N},LN:function(){return o},U3:function(){return h},hs:function(){return I},i5:function(){return f},k_:function(){return T},nh:function(){return p}});var r=n(742225),s=n(238262);const i=Object.create(null);class o{constructor(e,t,n){this.$anchor=e,this.$head=t,this.ranges=n||[new a(e.min(t),e.max(t))]}get anchor(){return this.$anchor.pos}get head(){return this.$head.pos}get from(){return this.$from.pos}get to(){return this.$to.pos}get $from(){return this.ranges[0].$from}get $to(){return this.ranges[0].$to}get empty(){let e=this.ranges;for(let t=0;t<e.length;t++)if(e[t].$from.pos!=e[t].$to.pos)return!1;return!0}content(){return this.$from.doc.slice(this.from,this.to,!0)}replace(e,t=r.Ji.empty){let n=t.content.lastChild,s=null;for(let r=0;r<t.openEnd;r++)s=n,n=n.lastChild;let i=e.steps.length,o=this.ranges;for(let a=0;a<o.length;a++){let{$from:l,$to:c}=o[a],h=e.mapping.slice(i);e.replaceRange(h.map(l.pos),h.map(c.pos),a?r.Ji.empty:t),0==a&&S(e,i,(n?n.isInline:s&&s.isTextblock)?-1:1)}}replaceWith(e,t){let n=e.steps.length,r=this.ranges;for(let s=0;s<r.length;s++){let{$from:i,$to:o}=r[s],a=e.mapping.slice(n),l=a.map(i.pos),c=a.map(o.pos);s?e.deleteRange(l,c):(e.replaceRangeWith(l,c,t),S(e,n,t.isInline?-1:1))}}static findFrom(e,t,n=!1){let r=e.parent.inlineContent?new h(e):g(e.node(0),e.parent,e.pos,e.index(),t,n);if(r)return r;for(let s=e.depth-1;s>=0;s--){let r=t<0?g(e.node(0),e.node(s),e.before(s+1),e.index(s),t,n):g(e.node(0),e.node(s),e.after(s+1),e.index(s)+1,t,n);if(r)return r}return null}static near(e,t=1){return this.findFrom(e,t)||this.findFrom(e,-t)||new f(e.node(0))}static atStart(e){return g(e,e,0,0,1)||new f(e)}static atEnd(e){return g(e,e,e.content.size,e.childCount,-1)||new f(e)}static fromJSON(e,t){if(!t||!t.type)throw new RangeError("Invalid input for Selection.fromJSON");let n=i[t.type];if(!n)throw new RangeError(`No selection type ${t.type} defined`);return n.fromJSON(e,t)}static jsonID(e,t){if(e in i)throw new RangeError("Duplicate use of selection JSON ID "+e);return i[e]=t,t.prototype.jsonID=e,t}getBookmark(){return h.between(this.$anchor,this.$head).getBookmark()}}o.prototype.visible=!0;class a{constructor(e,t){this.$from=e,this.$to=t}}let l=!1;function c(e){l||e.parent.inlineContent||(l=!0,console.warn("TextSelection endpoint not pointing into a node with inline content ("+e.parent.type.name+")"))}class h extends o{constructor(e,t=e){c(e),c(t),super(e,t)}get $cursor(){return this.$anchor.pos==this.$head.pos?this.$head:null}map(e,t){let n=e.resolve(t.map(this.head));if(!n.parent.inlineContent)return o.near(n);let r=e.resolve(t.map(this.anchor));return new h(r.parent.inlineContent?r:n,n)}replace(e,t=r.Ji.empty){if(super.replace(e,t),t==r.Ji.empty){let t=this.$from.marksAcross(this.$to);t&&e.ensureMarks(t)}}eq(e){return e instanceof h&&e.anchor==this.anchor&&e.head==this.head}getBookmark(){return new u(this.anchor,this.head)}toJSON(){return{type:"text",anchor:this.anchor,head:this.head}}static fromJSON(e,t){if("number"!=typeof t.anchor||"number"!=typeof t.head)throw new RangeError("Invalid input for TextSelection.fromJSON");return new h(e.resolve(t.anchor),e.resolve(t.head))}static create(e,t,n=t){let r=e.resolve(t);return new this(r,n==t?r:e.resolve(n))}static between(e,t,n){let r=e.pos-t.pos;if(n&&!r||(n=r>=0?1:-1),!t.parent.inlineContent){let e=o.findFrom(t,n,!0)||o.findFrom(t,-n,!0);if(!e)return o.near(t,n);t=e.$head}return e.parent.inlineContent||(0==r||(e=(o.findFrom(e,-n,!0)||o.findFrom(e,n,!0)).$anchor).pos<t.pos!=r<0)&&(e=t),new h(e,t)}}o.jsonID("text",h);class u{constructor(e,t){this.anchor=e,this.head=t}map(e){return new u(e.map(this.anchor),e.map(this.head))}resolve(e){return h.between(e.resolve(this.anchor),e.resolve(this.head))}}class p extends o{constructor(e){let t=e.nodeAfter,n=e.node(0).resolve(e.pos+t.nodeSize);super(e,n),this.node=t}map(e,t){let{deleted:n,pos:r}=t.mapResult(this.anchor),s=e.resolve(r);return n?o.near(s):new p(s)}content(){return new r.Ji(r.FK.from(this.node),0,0)}eq(e){return e instanceof p&&e.anchor==this.anchor}toJSON(){return{type:"node",anchor:this.anchor}}getBookmark(){return new d(this.anchor)}static fromJSON(e,t){if("number"!=typeof t.anchor)throw new RangeError("Invalid input for NodeSelection.fromJSON");return new p(e.resolve(t.anchor))}static create(e,t){return new p(e.resolve(t))}static isSelectable(e){return!e.isText&&!1!==e.type.spec.selectable}}p.prototype.visible=!1,o.jsonID("node",p);class d{constructor(e){this.anchor=e}map(e){let{deleted:t,pos:n}=e.mapResult(this.anchor);return t?new u(n,n):new d(n)}resolve(e){let t=e.resolve(this.anchor),n=t.nodeAfter;return n&&p.isSelectable(n)?new p(t):o.near(t)}}class f extends o{constructor(e){super(e.resolve(0),e.resolve(e.content.size))}replace(e,t=r.Ji.empty){if(t==r.Ji.empty){e.delete(0,e.doc.content.size);let t=o.atStart(e.doc);t.eq(e.selection)||e.setSelection(t)}else super.replace(e,t)}toJSON(){return{type:"all"}}static fromJSON(e){return new f(e)}map(e){return new f(e)}eq(e){return e instanceof f}getBookmark(){return m}}o.jsonID("all",f);const m={map(){return this},resolve(e){return new f(e)}};function g(e,t,n,r,s,i=!1){if(t.inlineContent)return h.create(e,n);for(let o=r-(s>0?0:1);s>0?o<t.childCount:o>=0;o+=s){let r=t.child(o);if(r.isAtom){if(!i&&p.isSelectable(r))return p.create(e,n-(s<0?r.nodeSize:0))}else{let t=g(e,r,n+s,s<0?r.childCount:0,s,i);if(t)return t}n+=r.nodeSize*s}return null}function S(e,t,n){let r=e.steps.length-1;if(r<t)return;let i=e.steps[r],a,l;(i instanceof s.Ln||i instanceof s.Wg)&&(e.mapping.maps[r].forEach(((e,t,n,r)=>{null==l&&(l=r)})),e.setSelection(o.near(e.doc.resolve(l),n)))}const k=1,y=2,w=4;class $ extends s.dL{constructor(e){super(e.doc),this.curSelectionFor=0,this.updated=0,this.meta=Object.create(null),this.time=Date.now(),this.curSelection=e.selection,this.storedMarks=e.storedMarks}get selection(){return this.curSelectionFor<this.steps.length&&(this.curSelection=this.curSelection.map(this.doc,this.mapping.slice(this.curSelectionFor)),this.curSelectionFor=this.steps.length),this.curSelection}setSelection(e){if(e.$from.doc!=this.doc)throw new RangeError("Selection passed to setSelection must point at the current document");return this.curSelection=e,this.curSelectionFor=this.steps.length,this.updated=-3&this.updated|1,this.storedMarks=null,this}get selectionSet(){return(1&this.updated)>0}setStoredMarks(e){return this.storedMarks=e,this.updated|=2,this}ensureMarks(e){return r.CU.sameSet(this.storedMarks||this.selection.$from.marks(),e)||this.setStoredMarks(e),this}addStoredMark(e){return this.ensureMarks(e.addToSet(this.storedMarks||this.selection.$head.marks()))}removeStoredMark(e){return this.ensureMarks(e.removeFromSet(this.storedMarks||this.selection.$head.marks()))}get storedMarksSet(){return(2&this.updated)>0}addStep(e,t){super.addStep(e,t),this.updated=-3&this.updated,this.storedMarks=null}setTime(e){return this.time=e,this}replaceSelection(e){return this.selection.replace(this,e),this}replaceSelectionWith(e,t=!0){let n=this.selection;return t&&(e=e.mark(this.storedMarks||(n.empty?n.$from.marks():n.$from.marksAcross(n.$to)||r.CU.none))),n.replaceWith(this,e),this}deleteSelection(){return this.selection.replace(this),this}insertText(e,t,n){let r=this.doc.type.schema;if(null==t)return e?this.replaceSelectionWith(r.text(e),!0):this.deleteSelection();{if(null==n&&(n=t),n=null==n?t:n,!e)return this.deleteRange(t,n);let s=this.storedMarks;if(!s){let e=this.doc.resolve(t);s=n==t?e.marks():e.marksAcross(this.doc.resolve(n))}return this.replaceRangeWith(t,n,r.text(e,s)),this.selection.empty||this.setSelection(o.near(this.selection.$to)),this}}setMeta(e,t){return this.meta["string"==typeof e?e:e.key]=t,this}getMeta(e){return this.meta["string"==typeof e?e:e.key]}get isGeneric(){for(let e in this.meta)return!1;return!0}scrollIntoView(){return this.updated|=4,this}get scrolledIntoView(){return(4&this.updated)>0}}function v(e,t){return t&&e?e.bind(t):e}class O{constructor(e,t,n){this.name=e,this.init=v(t.init,n),this.apply=v(t.apply,n)}}const J=[new O("doc",{init(e){return e.doc||e.schema.topNodeType.createAndFill()},apply(e){return e.doc}}),new O("selection",{init(e,t){return e.selection||o.atStart(t.doc)},apply(e){return e.selection}}),new O("storedMarks",{init(e){return e.storedMarks||null},apply(e,t,n,r){return r.selection.$cursor?e.storedMarks:null}}),new O("scrollToSelection",{init(){return 0},apply(e,t){return e.scrolledIntoView?t+1:t}})];class M{constructor(e,t){this.schema=e,this.plugins=[],this.pluginsByKey=Object.create(null),this.fields=J.slice(),t&&t.forEach((e=>{if(this.pluginsByKey[e.key])throw new RangeError("Adding different instances of a keyed plugin ("+e.key+")");this.plugins.push(e),this.pluginsByKey[e.key]=e,e.spec.state&&this.fields.push(new O(e.key,e.spec.state,e))}))}}class N{constructor(e){this.config=e}get schema(){return this.config.schema}get plugins(){return this.config.plugins}apply(e){return this.applyTransaction(e).state}filterTransaction(e,t=-1){for(let n=0;n<this.config.plugins.length;n++)if(n!=t){let t=this.config.plugins[n];if(t.spec.filterTransaction&&!t.spec.filterTransaction.call(t,e,this))return!1}return!0}applyTransaction(e){if(!this.filterTransaction(e))return{state:this,transactions:[]};let t=[e],n=this.applyInner(e),r=null;for(;;){let s=!1;for(let i=0;i<this.config.plugins.length;i++){let o=this.config.plugins[i];if(o.spec.appendTransaction){let a=r?r[i].n:0,l=r?r[i].state:this,c=a<t.length&&o.spec.appendTransaction.call(o,a?t.slice(a):t,l,n);if(c&&n.filterTransaction(c,i)){if(c.setMeta("appendedTransaction",e),!r){r=[];for(let e=0;e<this.config.plugins.length;e++)r.push(e<i?{state:n,n:t.length}:{state:this,n:0})}t.push(c),n=n.applyInner(c),s=!0}r&&(r[i]={state:n,n:t.length})}}if(!s)return{state:n,transactions:t}}}applyInner(e){if(!e.before.eq(this.doc))throw new RangeError("Applying a mismatched transaction");let t=new N(this.config),n=this.config.fields;for(let r=0;r<n.length;r++){let s=n[r];t[s.name]=s.apply(e,this[s.name],this,t)}return t}get tr(){return new $(this)}static create(e){let t=new M(e.doc?e.doc.type.schema:e.schema,e.plugins),n=new N(t);for(let r=0;r<t.fields.length;r++)n[t.fields[r].name]=t.fields[r].init(e,n);return n}reconfigure(e){let t=new M(this.schema,e.plugins),n=t.fields,r=new N(t);for(let s=0;s<n.length;s++){let t=n[s].name;r[t]=this.hasOwnProperty(t)?this[t]:n[s].init(e,r)}return r}toJSON(e){let t={doc:this.doc.toJSON(),selection:this.selection.toJSON()};if(this.storedMarks&&(t.storedMarks=this.storedMarks.map((e=>e.toJSON()))),e&&"object"==typeof e)for(let n in e){if("doc"==n||"selection"==n)throw new RangeError("The JSON fields `doc` and `selection` are reserved");let r=e[n],s=r.spec.state;s&&s.toJSON&&(t[n]=s.toJSON.call(r,this[r.key]))}return t}static fromJSON(e,t,n){if(!t)throw new RangeError("Invalid input for EditorState.fromJSON");if(!e.schema)throw new RangeError("Required config field 'schema' missing");let s=new M(e.schema,e.plugins),i=new N(s);return s.fields.forEach((s=>{if("doc"==s.name)i.doc=r.bP.fromJSON(e.schema,t.doc);else if("selection"==s.name)i.selection=o.fromJSON(i.doc,t.selection);else if("storedMarks"==s.name)t.storedMarks&&(i.storedMarks=t.storedMarks.map(e.schema.markFromJSON));else{if(n)for(let r in n){let o=n[r],a=o.spec.state;if(o.key==s.name&&a&&a.fromJSON&&Object.prototype.hasOwnProperty.call(t,r))return void(i[s.name]=a.fromJSON.call(o,e,t[r],i))}i[s.name]=s.init(e,i)}})),i}}function b(e,t,n){for(let r in e){let s=e[r];s instanceof Function?s=s.bind(t):"handleDOMEvents"==r&&(s=b(s,t,{})),n[r]=s}return n}class T{constructor(e){this.spec=e,this.props={},e.props&&b(e.props,this,this.props),this.key=e.key?e.key.key:E("plugin")}getState(e){return e[this.key]}}const R=Object.create(null);function E(e){return e in R?e+"$"+ ++R[e]:(R[e]=0,e+"$")}class I{constructor(e="key"){this.key=E(e)}get(e){return e.config.pluginsByKey[this.key]}getState(e){return e[this.key]}}}}]);