(self.webpackChunkof_vue=self.webpackChunkof_vue||[]).push([[10881],{124444:function(e,t,s){"use strict";var r=s(218111),i=s.n(r),o=s(22489),a=s.n(o),n=s(110908);t.A={computed:{...(0,n.vrn)(["activePostLabel"]),isPinnedPostRemove(){const{query:{filter:e,order:t}}=this.$route,s=e||t;return!s||"publish_date_asc"===s}},methods:{postsByTypeParams(){const{name:e,query:{filter:t,order:s,q:r},params:{labelId:i,postType:o}}=this.$route;return{isHidePinnedPosts:!("Profile"!==e||t||this.activePostLabel||s&&"publish_date_asc"!==s),routeParams:{type:o,query:r,order:s,filter:t,label:i||this.activePostLabel}}}}}},305287:function(e,t,s){var r=s(634932),i=s(827185),o=s(269302),a=s(980741),n=o((function(e){var t=r(e,a);return t.length&&t[0]===e[0]?i(t):[]}));e.exports=n},497375:function(e){var t,s;t=this,s=function(){"use strict";return function(e,t){var s=t.prototype,r=s.format;s.format=function(e){var t=this,s=this.$locale();if(!this.isValid())return r.bind(this)(e);var i=this.$utils(),o=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return s.ordinal(t.$D);case"gggg":return t.weekYear();case"GGGG":return t.isoWeekYear();case"wo":return s.ordinal(t.week(),"W");case"w":case"ww":return i.s(t.week(),"w"===e?1:2,"0");case"W":case"WW":return i.s(t.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return i.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();case"z":return"["+t.offsetName()+"]";case"zzz":return"["+t.offsetName("long")+"]";default:return e}}));return r.bind(this)(o)}}},e.exports=s()},827185:function(e,t,s){var r=s(138859),i=s(415325),o=s(729905),a=s(634932),n=s(827301),h=s(19219),u=Math.min;function d(e,t,s){for(var d=s?o:i,l=e[0].length,f=e.length,P=f,c=Array(f),m=1/0,g=[];P--;){var p=e[P];P&&t&&(p=a(p,n(t))),m=u(p.length,m),c[P]=!s&&(t||l>=120&&p.length>=120)?new r(P&&p):void 0}p=e[0];var v=-1,I=c[0];e:for(;++v<l&&g.length<m;){var U=p[v],L=t?t(U):U;if(U=s||0!==U?U:0,!(I?h(I,L):d(g,L,s))){for(P=f;--P;){var $=c[P];if(!($?h($,L):d(e[P],L,s)))continue e}I&&I.push(L),g.push(U)}}return g}e.exports=d},910881:function(e,t,s){"use strict";var r=s(305287),i=s.n(r),o=s(858156),a=s.n(o),n=s(16280),h=s.n(n),u=s(218111),d=s.n(u),l=s(22489),f=s.n(l),P=s(725440),c=s.n(P),m=s(962953),g=s.n(m),p=s(803296),v=s.n(p),I=s(527208),U=s.n(I),L=s(548408),$=s.n(L),y=s(814603),w=s.n(y),S=s(147566),b=s.n(S),k=s(198721),O=s.n(k),T=s(974353),A=s.n(T),D=s(497375),M=s.n(D),B=s(110908),x=s(667747),R=s(124444),C=s(932983),G=s(758987);A().extend(M()),t.A={data(){return{userLoaded:null}},mixins:[x.A,R.A],computed:{...(0,B.kbi)(["getLastProfileItemIds","getPost","getTempItemIds","getPostById"]),...(0,B.npG)(["authUser","authUserId","isAuth"]),...(0,B.ZOz)(["findUserByUserName","getUser","userId"]),...(0,B.B4G)(["route"]),...(0,B.Hdj)(["getInit"]),...(0,B.vrn)(["activePostLabel"]),isProfileAlias(){return"ProfileAlias"===this.$route.name},isProfile(){return"Profile"===this.$route.name||this.isProfileAlias},isProfileOrInner(){return this.isProfile||"ProfileInner"===this.$route.name},isLabelPage(){return!!this.activePostLabel},isPostPage(){return"Post"===this.$route.name},isProfileOrInnerOrPost(){return this.isProfileOrInner||["Post","MessagePage"].includes(this.$route.name)},isOwnProfileOrPostFirstLoad(){return!this.route.from.name&&this.isAuthUser&&this.isProfileOrInnerOrPost}},methods:{...(0,B.xon)(["fetchUserStories","fetchUserHighlights"]),...(0,B.Cj8)(["resetProfileHighlights","setUserStories"]),...(0,B.tSh)(["setCurrentUser","resetUserLinks","setProfileDataLoadingError","resetNfts"]),...(0,B.sxm)(["resetSpotifyBio"]),...(0,B.CXg)(["fetchCurrentUser","socialButtonsGetByUser"]),...(0,B.yKE)(["setItemIds","setLastProfileItemId","setPrevUserPostsToLoad","setPinnedIds","resetPosts","resetPostsFiltersCounter","deletePost"]),...(0,B.$GZ)(["fetchUserPosts","fetchPost","fetchPostsPinned"]),...(0,B.bKs)(["fetchMessageToPost","fetchChatsMessages"]),...(0,B.Zp1)(["resetScheduledStreams"]),async fetchProfileData(e,t,s){if(this.setProfileDataLoadingError(!1),!e)return void this.setProfileDataLoadingError(!0);let r;if(this.setPrevUserPostsToLoad(!1),this.userLoaded)r=this.userLoaded,this.userLoaded=null;else{this.isAfterUnblock||this.$route.params.noLoadUser||this.isOwnProfileOrPostFirstLoad||this.setCurrentUser(null);try{if((this.$route.params.noLoadUser||this.isOwnProfileOrPostFirstLoad)&&(r=Number.isNaN(+e)?this.findUserByUserName(e):this.getUser(e)),!r||!r.id){let t;if(this.getUserWithRef&&this.referrer)try{const{host:e,pathname:s}=new URL(this.referrer);t=this.$window.encodeURIComponent(`${e.replace("www.","")}${"/"!==s?s:""}`)}catch(u){}r=await this.fetchCurrentUser({id:e,httpreferrer:t})}}catch(u){this.setProfileDataLoadingError(!0)}}if(r){if(!r.isPerformer&&this.isProfileOrInner&&"archived"===this.$route.params.postType)return void this.$router.replace({name:"Profile",params:{userId:r.username}});if(this.isProfileOrInnerOrPost&&r.username!==this.$route.params.userId)return this.userLoaded=r,void this.changeRoute(r);if(this.isMyProfileHasScenario)return;if(this.isProfileOrInner&&r.isBlocked)return void("ProfileInner"===this.$route.name&&this.$router.replace({name:"Profile",params:{userId:r.username}}));if(this.isProfileOrInner&&r.isPerformer&&(r.id?this.socialButtonsGetByUser(r.id):(0,G.Bg)({error:new Error("Invalid user object"),extra:{user:r}})),!r.isPrivateRestriction||r.isPrivateRestriction&&this.isAuthUser||r.subscribedBy){var o,a;const{id:e}=r,{name:u,params:{postId:d,noLoadPostData:l,postType:f},query:{q:P,order:c,filter:m}}=this.$route;if(r.isPerformer&&this.isProfileOrInner&&(this.isAuth&&this.fetchUserHighlights({userId:e}),r.hasStories&&r.canLookStory&&this.fetchUserStories(e),"function"==typeof this.onReadySendProfileStatHandler&&this.onReadySendProfileStatHandler()),["Post","MessagePage"].includes(u)&&d&&!l)return void await this.setPostData(t,s);let g=this.getLastProfileItemIds(r.username,f),p,v,I,U,L,$,y;if(g.length){var n;({pinnedPostsIds:I,userPostItemIds:U}=this.getTempItemIds(r.username));const e=undefined;if(["Post","PostsEdit","MessagePage"].includes(null===(n=this.route)||void 0===n||null===(n=n.from)||void 0===n?void 0:n.name)){var h;const e=+this.route.from.params.postId,t=undefined;if(!(null===(h=this.getPostById(e))||void 0===h||!h.id))L=[+this.route.from.params.postId];else{const t=g.indexOf(e),s=g[t+1];g=g.filter((t=>t!==e)),U=U.filter((t=>t!==e)),L=s?[s]:[]}}else L=i()(I,g);if(L.length||(L=i()(U,g)),p=U.indexOf(L[0]),I.length?v=I.indexOf(L[0]):this.setPinnedIds(),-1===v&&p>0){if(this.setPinnedIds(),this.isPostPage)return;this.setPrevUserPostsToLoad(!0)}this.isProfile&&(-1===v&&-1===p?this.fetchPostsPinned({isPinnedPostRemove:this.isPinnedPostRemove}):(p>0||r.hasPinnedPosts&&!I.length)&&this.setPrevUserPostsToLoad(!0)),(p>=0||v>=0)&&((v>=0||0===p)&&this.setPinnedIds(I),this.setItemIds(L))}if(p>-1){const[e]=this.getPost(U[p]);null!=e&&e.isPinned?(y=!0,this.setPrevUserPostsToLoad(!1)):$=this.getTimeMarker(e)}const w={id:e,type:f,query:P,order:c,filter:m,beforePublishTime:$,more:!!$,label:this.activePostLabel};this.isPostPage||(r.isPerformer?await this.getProfileDataPosts(w,y):this.resetPosts(),this.setLastProfileItemId({username:r.username,arr:[]}));const S=null===(o=this.route)||void 0===o||null===(o=o.from)||void 0===o?void 0:o.params.postId;null!==(a=L)&&void 0!==a&&a.length&&!S&&this.hasPrevUserPostsToLoad&&setTimeout((()=>{const e=this.$refs.loadPrevPostsButton;(0,C.PA)(e,{offset:65})}),1e3)}else r.isPrivateRestriction&&["Post","MessagePage"].includes(this.$route.name)&&this.$router.replace({name:"Profile",params:{userId:r.username,noLoadUser:!0}})}},async getProfileDataPosts(e,t){const{filter:s,order:r}=this.$route.query,i=undefined;this.isProfile&&!s&&!this.activePostLabel&&(!r||"publish_date_asc"===r)&&(e.pinned=0);try{t?await Promise.all([this.fetchPostsPinned({isPinnedPostRemove:this.isPinnedPostRemove}),this.fetchUserPosts(e)]):await this.fetchUserPosts(e)}catch(o){}},getTimeMarker(e){const t=a()(e,"postedAt"),s=a()(e,"postedAtPrecise");return s?A().unix(s).format("X.SSSSSS"):A()(t).format("X.SSSSSS")},changeRoute(e){this.isProfileAlias?this.$router.replace({name:"Profile",params:{userId:e.username}}):this.$router.replace({...this.$route,params:{userId:e.username}})},async setPostData(e,t){const{params:{postId:s}}=this.$route;let r;if("MessagePage"===this.$route.name&&(r=await this.fetchMessageToPost({groupId:s,userId:e,limit:1,id:s})),this.isPostPage&&(r=await this.fetchPost({id:s,active:!0,signal:t})),!r.isCanceled)if(Array.isArray(r)&&!r.length)this.setProfileDataLoadingError(!0);else if(r.author){const{author:{id:e,username:t}}=r,{params:{userId:s}}=this.$route;let i;if(t)i=t;else if(e){const t=this.getUser(e);i=a()(t,"username",!1)}i!==s&&await this.$router.replace({...this.$route,params:{userId:i}})}},resetProfileData(e){this.resetPostsFiltersCounter(),this.setUserStories({userId:e,stories:[]}),this.resetProfileHighlights(),this.resetSpotifyBio(),this.resetUserLinks(),this.resetNfts(),this.resetScheduledStreams()}}}},980741:function(e,t,s){var r=s(683693);function i(e){return r(e)?e:[]}e.exports=i}}]);