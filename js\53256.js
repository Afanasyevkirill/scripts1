"use strict";(self.webpackChunkof_vue=self.webpackChunkof_vue||[]).push([[53256],{88878:function(t,e,i){i.d(e,{A:function(){return v}});var o=function t(){var e=this,i=e._self._c;return e.html?i("span",{directives:[{name:"safe-html",rawName:"v-safe-html",value:{text:e.prettierDate},expression:"{ text: prettierDate }"}],staticClass:"datetime",attrs:{title:e.prettierDateFull}}):i("span",{attrs:{title:e.prettierDateFull}},[e._v(" "+e._s(e.prettierDate)+" ")])},s=[],n=i(218111),a=i(161701),r=i(974353),h=i.n(r),d=i(853581),m=i.n(d),l=i(343522),p=i.n(l),u=i(606279),c=i.n(u);h().extend(p()),h().extend(m()),h().extend(c());var f={name:"UtilsTime",props:{type:{type:String,default:"feed"},date:{type:[String,Number,Date],default:""},html:{type:Boolean,default:!1},relativeTimeFormat:{type:String,default:"full"}},data(){return{prettierDate:"",prettierDateFull:"",interval:null}},computed:{is24hrFormatLocale(){return["it","fr","de","es","ja","pt","ro","ru","uk","zh"].includes(this.$i18n.locale)},monthDayFormat(){return this.is24hrFormatLocale?"D MMM":"MMM D"},timeFormat(){return this.is24hrFormatLocale?"H:mm":"h:mm a"},relativeTime(){const t={future:"in %s",past:"%s ago",s:"seconds",ss:"%d seconds",m:"1 minute",mm:"%d minutes",h:"1 hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};return"short"===this.relativeTimeFormat&&(t.s="%ds",t.ss="%ds",t.m="1m",t.mm="%dm",t.h="1h",t.hh="%dh"),t}},watch:{date(){this.updateMoment()},"$i18n.locale"(){this.updateMoment()}},mounted(){this.updateMoment(),this.$root.$on("updateTime",this.updateMoment)},beforeDestroy(){this.$root.$off("updateTime",this.updateMoment)},methods:{updateMoment(){this.dayJsUpdateLocale();const t=t=>t instanceof Date&&!Number.isNaN(t);if(this.$nextTick((()=>{this.$emit("time",this.prettierDate)})),!t(new Date(this.date)))return void(this.prettierDate="");const e=h()(this.date),i=h()();if("setting-sessions"===this.type)return void(this.prettierDate=e.format(`M/D/YY ${this.timeFormat}`));if("setting-token"===this.type)return void(this.prettierDate=e.format("M/D/YY"));if("expired"===this.type)return void(this.prettierDate=e.fromNow(!0));if("future"===this.type)return void(this.prettierDate=i.to(this.date));if("time-only"===this.type)return void(this.prettierDate=e.format(this.timeFormat));if("month-date-only"===this.type)return void(this.prettierDate=e.format(this.monthDayFormat));if("date-only"===this.type)return void(this.prettierDate=e.format(`${this.monthDayFormat}, YYYY`));if("scheduled-stream"===this.type)return this.prettierDate=e.format(`${this.monthDayFormat}, ${this.timeFormat}`),void(this.html&&(this.prettierDate=this.prettierDate.split(",").map((t=>`<span>${t}</span>`)).join("")));if("scheduled-stream-post"===this.type)return void(this.prettierDate=e.format(`${this.monthDayFormat}, ${this.timeFormat}`));if("payments"===this.type&&this.html)return void(this.prettierDate=`<span class="date">${e.format(`${this.monthDayFormat}, YYYY, ${this.timeFormat}`)}</span>`);const o=i.subtract(1,"days").startOf("day"),s=i.add(1,"days").startOf("day"),n=i.add(1,"days").endOf("day"),a=i.endOf("year"),r=e.isSame(i,"day"),d=e.isSame(o,"day"),m=e.isSame(s,"day"),l=e.isSame(i,"year");if(this.prettierDateFull=e.format(`${this.monthDayFormat}, ${this.timeFormat}`),["feed","chat","schedule","timeline","payments","reply"].includes(this.type)){if("schedule"===this.type&&i.isAfter(this.date))return void(this.prettierDate=this.$t("message.now"));if(r)return"chat"===this.type?void(this.prettierDate=e.format(this.timeFormat)):"timeline"===this.type?void(this.prettierDate=this.$t("message.today")):"reply"===this.type?void(this.prettierDate=`${this.$t("message.today")} ${e.format(this.timeFormat)}`):void(this.prettierDate=e.fromNow());if(m)return void(this.prettierDate=`${this.$t("message.tomorrow")}, ${e.format(this.timeFormat)}`);if(d)return"reply"===this.type?void(this.prettierDate=`${this.$t("message.yesterday")} ${e.format(this.timeFormat)}`):void(this.prettierDate=this.$t("message.yesterday"));if(e.isAfter(a))return"reply"===this.type?void(this.prettierDate=e.format(`${this.monthDayFormat} YYYY ${this.timeFormat}`)):void(this.prettierDate=e.format(`${this.monthDayFormat} YYYY, ${this.timeFormat}`));if(e.isAfter(n))return"reply"===this.type?void(this.prettierDate=e.format(`${this.monthDayFormat} ${this.timeFormat}`)):void(this.prettierDate=e.format(`${this.monthDayFormat}, ${this.timeFormat}`));if(l)return"reply"===this.type?void(this.prettierDate=e.format(`${this.monthDayFormat} ${this.timeFormat}`)):void(this.prettierDate=e.format(this.monthDayFormat));this.prettierDate=e.format(`${this.monthDayFormat}, YYYY`)}"vote-finished"===this.type&&(this.prettierDate=h().duration(e.diff(i)).humanize())},dayJsUpdateLocale(){h().updateLocale("en",{relativeTime:this.relativeTime})}}},y=f,g,D,v=(0,i(281656).A)(y,o,s,!1,null,null,null).exports},277832:function(t,e,i){i.d(e,{G:function(){return a}});var o=i(16280),s=i.n(o);const n={usd:{symbol:"$"},eur:{symbol:"€"},gbp:{symbol:"£"}},a={get(t){const e="string"==typeof t?t.toLowerCase():null;return n[e]||n.usd},getSymbol(t){var e;return null===(e=this.get(t))||void 0===e?void 0:e.symbol},format(t,e){const i=undefined;if(!/^\d{1,3}(?:,?\d{3})*(?:\.\d{1,2})?$/.test(t))throw new Error("Amount is invalid!");const o=undefined;if(!(e&&"string"==typeof e))throw new Error("Currency is invalid!");const s=this.get(e);return null!=s&&s.symbol?`${null==s?void 0:s.symbol}${t}`:`${t} ${e.toUpperCase()}`}}},530546:function(t,e,i){i.d(e,{y:function(){return D}});var o=i(411331),s=i.n(o),n=i(198023),a=i.n(n),r=i(185015),h=i.n(r),d=i(944114),m=i.n(d),l=i(218111),p=i.n(l),u=i(22489),c=i.n(u),f=i(18237),y=i.n(f);function g(t){return s()(t)?{...t}:h()(t)?t.split(" ").filter(Boolean).reduce(((t,e)=>({...t,[e]:!0})),{}):a()(t)?{[t]:!0}:{}}function D(t){let e={};return e=Array.isArray(t)?t.reduce(((t,e)=>Array.isArray(e)?t:{...t,...g(e)}),{}):g(t),Object.keys(e).reduce(((t,i)=>(e[i]&&t.push(i),t)),[])}},589354:function(t,e,i){var o=i(501882),s=i.n(o),n=i(16280),a=i.n(n),r=i(362214),h=i(980471);const d="infinite";class m{constructor(t,e){if(!(t instanceof r.A))throw new Error("Lightbox must be an instance of PhotoSwipeLightbox!");this.lightbox=t,this.isLoading=!1,this.isCompleted=!1,this.options={enabled:(0,h.Kp)(null==e?void 0:e.enabled),load:(0,h.Sr)(null==e?void 0:e.load,null),preloadOffset:(0,h.P_)(null==e?void 0:e.preloadOffset,3)},this.options.enabled&&s()(this.options.load)&&this.lightbox.on("init",this.init.bind(this))}isInfiniteContent(t){return(null==t?void 0:t.data.type)===d}setState({isLoading:t=this.isLoading,isCompleted:e=this.isCompleted}={}){this.isLoading=t,this.isCompleted=e,this.lightbox.pswp.dispatch("change")}loadContent(){this.isLoading||(this.setState({isLoading:!0}),this.options.load({loaded:()=>this.setState({isLoading:!1}),complete:()=>this.setState({isLoading:!1,isCompleted:!0})}))}init(){this.lightbox.pswp.options.loop=!1,this.addInfiniteItemFilters(),this.bindEvents(),this.lightbox.pswp.dispatch("change")}addInfiniteItemFilters(){this.lightbox.pswp.addFilter("numItems",(t=>this.isCompleted?t:t+1)),this.lightbox.pswp.addFilter("itemData",((t,e)=>{const i=e===this.lightbox.pswp.getNumItems()-1;return this.isCompleted||!i?t:{type:d}}))}isInfiniteLoadingReady(){return!this.isCompleted&&!this.isLoading}bindEvents(){this.lightbox.on("contentLoad",(t=>{this.isInfiniteContent(t.content)&&(t.preventDefault(),t.content.state="loading")})),this.lightbox.on("contentActivate",(({content:t})=>{const e=undefined,i=this.lightbox.pswp.getNumItems()-1-this.options.preloadOffset;this.isInfiniteLoadingReady()&&t.index>=i&&this.loadContent(),this.isInfiniteContent(t)&&this.manageBgClickAction(t)})),this.lightbox.on("dataSourceUpdated",(()=>{this.isInfiniteLoadingReady()&&this.lightbox.pswp.refreshSlideContent(this.lightbox.pswp.getNumItems()-1)}))}manageBgClickAction(t){const{bgClickAction:e}=this.lightbox.pswp.options;this.lightbox.pswp.options.bgClickAction=!1;const i=({content:o})=>{o.index===t.index&&(this.lightbox.pswp.options.bgClickAction=e,this.lightbox.off("contentLoad",i))};this.lightbox.on("contentLoad",i)}}e.A=m},683402:function(t,e,i){i.d(e,{_u:function(){return s},ho:function(){return n},jH:function(){return o}});const o=["close","change","destroy","afterInit","loadError","pointerUp","beforeOpen","bindEvents","pinchClose","firstUpdate","pointerDown","pointerMove","contentInit","contentLoad","verticalDrag","loadComplete","initialLayout","contentResize","contentAppend","contentRemove","contentDestroy","imageSizeChange","contentLazyLoad","contentActivate","contentLoadImage","contentDeactivate","openingAnimationEnd","closingAnimationEnd","openingAnimationStart","closingAnimationStart"],s={allowPanToNext:!0,spacing:.1,loop:!0,pinchToClose:!0,closeOnVerticalDrag:!0,hideAnimationDuration:333,showAnimationDuration:333,zoomAnimationDuration:333,escKey:!0,arrowKeys:!0,trapFocus:!0,returnFocus:!0,maxWidthToAnimate:4e3,clickToCloseNonZoomable:!0,imageClickAction:"zoom-or-close",bgClickAction:"close",tapAction:"toggle-controls",doubleTapAction:"zoom",indexIndicatorSep:" / ",preloaderDelay:2e3,bgOpacity:.8,index:0,errorMsg:"The image cannot be loaded",preload:[1,2],easing:"cubic-bezier(.4,0,.22,1)"},n={BAR:"bar",ROOT:"root",WRAPPER:"wrapper"}}}]);