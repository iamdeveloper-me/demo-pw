(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{y4es:function(l,t,n){"use strict";n.r(t);var a=n("CcnG"),e=function(){},u=n("q0nV"),s=n("ixSq"),i=n("k1Da"),r=n("q1/r"),o=n("7gbQ"),c=n("UOCa"),d=n("Ip0R"),p=function(l,t,n,a,e,u){this.avatar=l,this.chatClass=t,this.imagePath=n,this.time=a,this.messages=e,this.messageType=u},m="ADD_CHAT1",h="ADD_CHAT2",g="ADD_CHAT3",v="ADD_CHAT4",f="ADD_CHAT5",y="ADD_CHAT6",w="ADD_CHAT7",b=function(){return function(l){this.payload=l,this.type=m}}(),x=function(){return function(l){this.payload=l,this.type=h}}(),I=function(){return function(l){this.payload=l,this.type=g}}(),C=function(){return function(l){this.payload=l,this.type=v}}(),k=function(){return function(l){this.payload=l,this.type=f}}(),A=function(){return function(l){this.payload=l,this.type=y}}(),V=function(){return function(l){this.payload=l,this.type=w}}(),R=function(){function l(l,t){this.elRef=l,this.store=t,this.currentChatId="chat1",this.messages=new Array,this.item=0}return l.prototype.ngOnInit=function(){var l=this;$.getScript("./assets/js/chat.js"),this.chatState=this.store.select("chat"),this.subscription=this.chatState.subscribe(function(t){l.chat=t.chat1,l.activeChatUser="Elizabeth Elliott",l.activeChatUserImg="assets/img/portrait/small/avatar-s-3.png"})},l.prototype.onAddMessage=function(){""!=this.messageInputRef.nativeElement.value&&("chat1"===this.currentChatId?this.store.dispatch(new b(new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",[this.messageInputRef.nativeElement.value],"text"))):"chat2"===this.currentChatId?this.store.dispatch(new x(new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",[this.messageInputRef.nativeElement.value],"text"))):"chat3"===this.currentChatId?this.store.dispatch(new I(new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",[this.messageInputRef.nativeElement.value],"text"))):"chat4"===this.currentChatId?this.store.dispatch(new C(new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",[this.messageInputRef.nativeElement.value],"text"))):"chat5"===this.currentChatId?this.store.dispatch(new k(new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",[this.messageInputRef.nativeElement.value],"text"))):"chat6"===this.currentChatId?this.store.dispatch(new A(new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",[this.messageInputRef.nativeElement.value],"text"))):"chat7"===this.currentChatId&&this.store.dispatch(new V(new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",[this.messageInputRef.nativeElement.value],"text")))),this.messageInputRef.nativeElement.value="",this.messageInputRef.nativeElement.focus()},l.prototype.SetActive=function(l,t){var n=this;this.currentChatId=t;var a=this.elRef.nativeElement.getElementsByClassName("list-group-item");[].forEach.call(a,function(l){l.setAttribute("class","list-group-item no-border")}),l.currentTarget.setAttribute("class","list-group-item bg-blue-grey bg-lighten-5 border-right-primary border-right-2"),this.messages=[],"chat1"===t?this.subscription=this.store.select("chat").subscribe(function(l){n.chat=l.chat1,n.activeChatUser="Elizabeth Elliott",n.activeChatUserImg="assets/img/portrait/small/avatar-s-3.png"}):"chat2"===t?this.subscription=this.store.select("chat").subscribe(function(l){n.chat=l.chat2,n.activeChatUser="Kristopher Candy",n.activeChatUserImg="assets/img/portrait/small/avatar-s-7.png"}):"chat3"===t?this.subscription=this.store.select("chat").subscribe(function(l){n.chat=l.chat3,n.activeChatUser="Sarah Woods",n.activeChatUserImg="assets/img/portrait/small/avatar-s-8.png"}):"chat4"===t?this.subscription=this.store.select("chat").subscribe(function(l){n.chat=l.chat4,n.activeChatUser="Bruce Reid",n.activeChatUserImg="assets/img/portrait/small/avatar-s-5.png"}):"chat5"===t?this.subscription=this.store.select("chat").subscribe(function(l){n.chat=l.chat5,n.activeChatUser="Heather Howell",n.activeChatUserImg="assets/img/portrait/small/avatar-s-9.png"}):"chat6"===t?this.subscription=this.store.select("chat").subscribe(function(l){n.chat=l.chat6,n.activeChatUser="Kelly Reyes",n.activeChatUserImg="assets/img/portrait/small/avatar-s-4.png"}):"chat7"===t&&(this.subscription=this.store.select("chat").subscribe(function(l){n.chat=l.chat7,n.activeChatUser="Vincent Nelson",n.activeChatUserImg="assets/img/portrait/small/avatar-s-14.png"}))},l}(),H=n("yGQT"),T=a["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function F(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a["\u0275ted"](1,null,["",""]))],null,function(l,t){l(t,1,0,t.parent.context.$implicit)})}function D(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,8,"vg-player",[],[[2,"fullscreen",null],[2,"native-fullscreen",null],[2,"controls-hidden",null],[4,"z-index",null]],null,null,u.b,u.a)),a["\u0275prd"](512,null,s.VgAPI,s.VgAPI,[]),a["\u0275prd"](512,null,i.VgFullscreenAPI,i.VgFullscreenAPI,[]),a["\u0275prd"](512,null,r.VgControlsHidden,r.VgControlsHidden,[]),a["\u0275did"](4,1228800,null,1,o.VgPlayer,[a.ElementRef,s.VgAPI,i.VgFullscreenAPI,r.VgControlsHidden],null,null),a["\u0275qud"](603979776,2,{medias:1}),(l()(),a["\u0275eld"](6,0,[["media1",1]],0,2,"audio",[["controls",""],["id","singleAudio"],["preload","auto"]],null,null,null,null,null)),a["\u0275did"](7,212992,[[2,4]],0,c.VgMedia,[s.VgAPI,a.ChangeDetectorRef],{vgMedia:[0,"vgMedia"]},null),(l()(),a["\u0275eld"](8,0,null,null,0,"source",[["type","audio/mp3"]],[[8,"src",4]],null,null,null,null))],function(l,t){l(t,7,0,a["\u0275nov"](t,6))},function(l,t){l(t,0,0,a["\u0275nov"](t,4).isFullscreen,a["\u0275nov"](t,4).isNativeFullscreen,a["\u0275nov"](t,4).areControlsHidden,a["\u0275nov"](t,4).zIndex),l(t,8,0,t.parent.context.$implicit)})}function M(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,8,"vg-player",[["style","height: 250px; width: 250px"]],[[2,"fullscreen",null],[2,"native-fullscreen",null],[2,"controls-hidden",null],[4,"z-index",null]],null,null,u.b,u.a)),a["\u0275prd"](512,null,s.VgAPI,s.VgAPI,[]),a["\u0275prd"](512,null,i.VgFullscreenAPI,i.VgFullscreenAPI,[]),a["\u0275prd"](512,null,r.VgControlsHidden,r.VgControlsHidden,[]),a["\u0275did"](4,1228800,null,1,o.VgPlayer,[a.ElementRef,s.VgAPI,i.VgFullscreenAPI,r.VgControlsHidden],null,null),a["\u0275qud"](603979776,3,{medias:1}),(l()(),a["\u0275eld"](6,0,[["media",1]],0,2,"video",[["controls",""],["id","singleVideo"],["preload","auto"]],null,null,null,null,null)),a["\u0275did"](7,212992,[[3,4]],0,c.VgMedia,[s.VgAPI,a.ChangeDetectorRef],{vgMedia:[0,"vgMedia"]},null),(l()(),a["\u0275eld"](8,0,null,null,0,"source",[["type","video/mp4"]],[[8,"src",4]],null,null,null,null))],function(l,t){l(t,7,0,a["\u0275nov"](t,6))},function(l,t){l(t,0,0,a["\u0275nov"](t,4).isFullscreen,a["\u0275nov"](t,4).isNativeFullscreen,a["\u0275nov"](t,4).areControlsHidden,a["\u0275nov"](t,4).zIndex),l(t,8,0,t.parent.context.$implicit)})}function P(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,6,"div",[["class","chat-content"]],null,null,null,null,null)),(l()(),a["\u0275and"](16777216,null,null,1,null,F)),a["\u0275did"](2,16384,null,0,d.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),a["\u0275and"](16777216,null,null,1,null,D)),a["\u0275did"](4,16384,null,0,d.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),a["\u0275and"](16777216,null,null,1,null,M)),a["\u0275did"](6,16384,null,0,d.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,t){l(t,2,0,"text"===t.parent.context.$implicit.messageType),l(t,4,0,"audio"===t.parent.context.$implicit.messageType),l(t,6,0,"video"===t.parent.context.$implicit.messageType)},null)}function U(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,1,"p",[["class","time"]],null,null,null,null,null)),(l()(),a["\u0275ted"](1,null,["",""]))],null,function(l,t){l(t,1,0,t.parent.context.$implicit.time)})}function j(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,11,"div",[],null,null,null,null,null)),a["\u0275did"](1,278528,null,0,d.NgClass,[a.IterableDiffers,a.KeyValueDiffers,a.ElementRef,a.Renderer2],{ngClass:[0,"ngClass"]},null),a["\u0275pad"](2,1),(l()(),a["\u0275eld"](3,0,null,null,3,"div",[["class","chat-avatar"]],null,null,null,null,null)),(l()(),a["\u0275eld"](4,0,null,null,2,"a",[["class","avatar"],["data-original-title",""],["data-placement","[chat.avatar]"],["data-toggle","tooltip"],["title",""]],null,null,null,null,null)),(l()(),a["\u0275eld"](5,0,null,null,1,"img",[["alt","avatar"],["class","width-50"]],[[8,"src",4]],null,null,null,null)),a["\u0275pad"](6,1),(l()(),a["\u0275eld"](7,0,null,null,2,"div",[["class","chat-body"]],null,null,null,null,null)),(l()(),a["\u0275and"](16777216,null,null,1,null,P)),a["\u0275did"](9,802816,null,0,d.NgForOf,[a.ViewContainerRef,a.TemplateRef,a.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),a["\u0275and"](16777216,null,null,1,null,U)),a["\u0275did"](11,16384,null,0,d.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,t){l(t,1,0,l(t,2,0,t.context.$implicit.chatClass)),l(t,9,0,t.context.$implicit.messages),l(t,11,0,""!=t.context.$implicit.time)},function(l,t){l(t,5,0,l(t,6,0,t.context.$implicit.imagePath))})}function E(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,2,"div",[["class","chat-content"]],null,null,null,null,null)),(l()(),a["\u0275eld"](1,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a["\u0275ted"](2,null,["",""]))],null,function(l,t){l(t,2,0,t.context.$implicit)})}function N(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,6,"div",[["class","chat"]],null,null,null,null,null)),(l()(),a["\u0275eld"](1,0,null,null,2,"div",[["class","chat-avatar"]],null,null,null,null,null)),(l()(),a["\u0275eld"](2,0,null,null,1,"a",[["class","avatar"],["data-original-title",""],["data-placement","right"],["data-toggle","tooltip"],["title",""]],null,null,null,null,null)),(l()(),a["\u0275eld"](3,0,null,null,0,"img",[["alt","avatar"],["class","width-50"],["src","assets/img/portrait/small/avatar-s-1.png"]],null,null,null,null,null)),(l()(),a["\u0275eld"](4,0,null,null,2,"div",[["class","chat-body"]],null,null,null,null,null)),(l()(),a["\u0275and"](16777216,null,null,1,null,E)),a["\u0275did"](6,802816,null,0,d.NgForOf,[a.ViewContainerRef,a.TemplateRef,a.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,t){l(t,6,0,t.component.messages)},null)}function O(l){return a["\u0275vid"](2,[a["\u0275qud"](402653184,1,{messageInputRef:0}),(l()(),a["\u0275eld"](1,0,null,null,142,"div",[["class","chat-application"]],null,null,null,null,null)),(l()(),a["\u0275eld"](2,0,null,null,0,"div",[["class","content-overlay"]],null,null,null,null,null)),(l()(),a["\u0275eld"](3,0,null,null,110,"div",[["class","chat-sidebar float-left d-none d-sm-none d-md-block d-lg-block"]],null,null,null,null,null)),(l()(),a["\u0275eld"](4,0,null,null,109,"div",[["class","chat-sidebar-content"]],null,null,null,null,null)),(l()(),a["\u0275eld"](5,0,null,null,5,"div",[["class","chat-fixed-search p-2"]],null,null,null,null,null)),(l()(),a["\u0275eld"](6,0,null,null,4,"form",[],null,null,null,null,null)),(l()(),a["\u0275eld"](7,0,null,null,3,"div",[["class","position-relative has-icon-left"]],null,null,null,null,null)),(l()(),a["\u0275eld"](8,0,null,null,0,"input",[["class","form-control"],["id","timesheetinput1"],["name","employeename"],["type","text"]],null,null,null,null,null)),(l()(),a["\u0275eld"](9,0,null,null,1,"div",[["class","form-control-position"]],null,null,null,null,null)),(l()(),a["\u0275eld"](10,0,null,null,0,"i",[["class","ft-user"]],null,null,null,null,null)),(l()(),a["\u0275eld"](11,0,null,null,102,"div",[["class","list-group position-relative"],["id","users-list"]],null,null,null,null,null)),(l()(),a["\u0275eld"](12,0,null,null,101,"div",[["class","users-list-padding"]],null,null,null,null,null)),(l()(),a["\u0275eld"](13,0,null,null,14,"a",[["class","list-group-item bg-blue-grey bg-lighten-5 border-right-primary border-right-2"]],null,[[null,"click"]],function(l,t,n){var a=!0;return"click"===t&&(a=!1!==l.component.SetActive(n,"chat1")&&a),a},null,null)),(l()(),a["\u0275eld"](14,0,null,null,13,"span",[["class","media"]],null,null,null,null,null)),(l()(),a["\u0275eld"](15,0,null,null,2,"span",[["class","avatar avatar-md avatar-online"]],null,null,null,null,null)),(l()(),a["\u0275eld"](16,0,null,null,0,"img",[["alt","Generic placeholder image"],["class","media-object d-flex mr-3 bg-primary height-50 rounded-circle"],["src","assets/img/portrait/small/avatar-s-3.png"]],null,null,null,null,null)),(l()(),a["\u0275eld"](17,0,null,null,0,"i",[],null,null,null,null,null)),(l()(),a["\u0275eld"](18,0,null,null,9,"div",[["class","media-body"]],null,null,null,null,null)),(l()(),a["\u0275eld"](19,0,null,null,3,"h6",[["class","list-group-item-heading"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["Elizabeth Elliott "])),(l()(),a["\u0275eld"](21,0,null,null,1,"span",[["class","font-small-3 float-right primary"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["4:14 AM"])),(l()(),a["\u0275eld"](23,0,null,null,4,"p",[["class","list-group-item-text text-muted"]],null,null,null,null,null)),(l()(),a["\u0275eld"](24,0,null,null,0,"i",[["class","ft-check primary font-small-2"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,[" Okay "])),(l()(),a["\u0275eld"](26,0,null,null,1,"span",[["class","float-right primary"]],null,null,null,null,null)),(l()(),a["\u0275eld"](27,0,null,null,0,"i",[["class","font-medium-1 icon-pin blue-grey lighten-3"]],null,null,null,null,null)),(l()(),a["\u0275eld"](28,0,null,null,15,"a",[["class","list-group-item no-border"]],null,[[null,"click"]],function(l,t,n){var a=!0;return"click"===t&&(a=!1!==l.component.SetActive(n,"chat2")&&a),a},null,null)),(l()(),a["\u0275eld"](29,0,null,null,14,"span",[["class","media"]],null,null,null,null,null)),(l()(),a["\u0275eld"](30,0,null,null,2,"span",[["class","avatar avatar-md avatar-busy"]],null,null,null,null,null)),(l()(),a["\u0275eld"](31,0,null,null,0,"img",[["alt","Generic placeholder image"],["class","media-object d-flex mr-3 bg-primary height-50 rounded-circle"],["src","assets/img/portrait/small/avatar-s-7.png"]],null,null,null,null,null)),(l()(),a["\u0275eld"](32,0,null,null,0,"i",[],null,null,null,null,null)),(l()(),a["\u0275eld"](33,0,null,null,10,"div",[["class","media-body"]],null,null,null,null,null)),(l()(),a["\u0275eld"](34,0,null,null,3,"h6",[["class","list-group-item-heading"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["Kristopher Candy "])),(l()(),a["\u0275eld"](36,0,null,null,1,"span",[["class","font-small-3 float-right primary"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["9:04 PM"])),(l()(),a["\u0275eld"](38,0,null,null,5,"p",[["class","list-group-item-text text-muted"]],null,null,null,null,null)),(l()(),a["\u0275eld"](39,0,null,null,0,"i",[["class","ft-check primary font-small-2"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,[" Thank you "])),(l()(),a["\u0275eld"](41,0,null,null,2,"span",[["class","float-right \n                        primary"]],null,null,null,null,null)),(l()(),a["\u0275eld"](42,0,null,null,1,"span",[["class","badge badge-pill badge-primary"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["12"])),(l()(),a["\u0275eld"](44,0,null,null,16,"a",[["class","list-group-item no-border"]],null,[[null,"click"]],function(l,t,n){var a=!0;return"click"===t&&(a=!1!==l.component.SetActive(n,"chat3")&&a),a},null,null)),(l()(),a["\u0275eld"](45,0,null,null,15,"span",[["class","media"]],null,null,null,null,null)),(l()(),a["\u0275eld"](46,0,null,null,2,"span",[["class","avatar avatar-md avatar-away"]],null,null,null,null,null)),(l()(),a["\u0275eld"](47,0,null,null,0,"img",[["alt","Generic placeholder image"],["class","media-object d-flex mr-3 bg-primary height-50 rounded-circle"],["src","assets/img/portrait/small/avatar-s-8.png"]],null,null,null,null,null)),(l()(),a["\u0275eld"](48,0,null,null,0,"i",[],null,null,null,null,null)),(l()(),a["\u0275eld"](49,0,null,null,11,"div",[["class","media-body"]],null,null,null,null,null)),(l()(),a["\u0275eld"](50,0,null,null,3,"h6",[["class","list-group-item-heading"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["Sarah Woods "])),(l()(),a["\u0275eld"](52,0,null,null,1,"span",[["class","font-small-3 float-right primary"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["2:14 AM"])),(l()(),a["\u0275eld"](54,0,null,null,6,"p",[["class","list-group-item-text text-muted"]],null,null,null,null,null)),(l()(),a["\u0275eld"](55,0,null,null,0,"i",[["class","ft-check font-small-2"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,[" Hello krish! "])),(l()(),a["\u0275eld"](57,0,null,null,3,"span",[["class","float-right primary"]],null,null,null,null,null)),(l()(),a["\u0275eld"](58,0,null,null,0,"i",[["class","font-medium-1 icon-volume-off blue-grey lighten-3 mr-1"]],null,null,null,null,null)),(l()(),a["\u0275eld"](59,0,null,null,1,"span",[["class","badge badge-pill badge-primary"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["3"])),(l()(),a["\u0275eld"](61,0,null,null,12,"a",[["class","list-group-item no-border"]],null,[[null,"click"]],function(l,t,n){var a=!0;return"click"===t&&(a=!1!==l.component.SetActive(n,"chat4")&&a),a},null,null)),(l()(),a["\u0275eld"](62,0,null,null,11,"span",[["class","media"]],null,null,null,null,null)),(l()(),a["\u0275eld"](63,0,null,null,2,"span",[["class","avatar avatar-md avatar-away"]],null,null,null,null,null)),(l()(),a["\u0275eld"](64,0,null,null,0,"img",[["alt","Generic placeholder image"],["class","media-object d-flex mr-3 bg-primary height-50 rounded-circle"],["src","assets/img/portrait/small/avatar-s-5.png"]],null,null,null,null,null)),(l()(),a["\u0275eld"](65,0,null,null,0,"i",[],null,null,null,null,null)),(l()(),a["\u0275eld"](66,0,null,null,7,"div",[["class","media-body"]],null,null,null,null,null)),(l()(),a["\u0275eld"](67,0,null,null,3,"h6",[["class","list-group-item-heading"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["Bruce Reid "])),(l()(),a["\u0275eld"](69,0,null,null,1,"span",[["class","font-small-3 float-right primary"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["Yesterday"])),(l()(),a["\u0275eld"](71,0,null,null,2,"p",[["class","list-group-item-text text-muted"]],null,null,null,null,null)),(l()(),a["\u0275eld"](72,0,null,null,0,"i",[["class","ft-check font-small-2"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,[" Will connect you"])),(l()(),a["\u0275eld"](74,0,null,null,15,"a",[["class","list-group-item no-border"]],null,[[null,"click"]],function(l,t,n){var a=!0;return"click"===t&&(a=!1!==l.component.SetActive(n,"chat5")&&a),a},null,null)),(l()(),a["\u0275eld"](75,0,null,null,14,"span",[["class","media"]],null,null,null,null,null)),(l()(),a["\u0275eld"](76,0,null,null,2,"span",[["class","avatar avatar-md avatar-online"]],null,null,null,null,null)),(l()(),a["\u0275eld"](77,0,null,null,0,"img",[["alt","Generic placeholder image"],["class","media-object d-flex mr-3 bg-primary height-50 rounded-circle"],["src","assets/img/portrait/small/avatar-s-9.png"]],null,null,null,null,null)),(l()(),a["\u0275eld"](78,0,null,null,0,"i",[],null,null,null,null,null)),(l()(),a["\u0275eld"](79,0,null,null,10,"div",[["class","media-body"]],null,null,null,null,null)),(l()(),a["\u0275eld"](80,0,null,null,3,"h6",[["class","list-group-item-heading"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["Heather Howell "])),(l()(),a["\u0275eld"](82,0,null,null,1,"span",[["class","font-small-3 float-right primary"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["Friday"])),(l()(),a["\u0275eld"](84,0,null,null,5,"p",[["class","list-group-item-text text-muted"]],null,null,null,null,null)),(l()(),a["\u0275eld"](85,0,null,null,0,"i",[["class","ft-check font-small-2"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,[" Thank you "])),(l()(),a["\u0275eld"](87,0,null,null,2,"span",[["class","float-right primary"]],null,null,null,null,null)),(l()(),a["\u0275eld"](88,0,null,null,1,"span",[["class","badge badge-pill badge-primary"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["4"])),(l()(),a["\u0275eld"](90,0,null,null,12,"a",[["class","list-group-item no-border"]],null,[[null,"click"]],function(l,t,n){var a=!0;return"click"===t&&(a=!1!==l.component.SetActive(n,"chat6")&&a),a},null,null)),(l()(),a["\u0275eld"](91,0,null,null,11,"span",[["class","media"]],null,null,null,null,null)),(l()(),a["\u0275eld"](92,0,null,null,2,"span",[["class","avatar avatar-md avatar-busy"]],null,null,null,null,null)),(l()(),a["\u0275eld"](93,0,null,null,0,"img",[["alt","Generic placeholder image"],["class","media-object d-flex mr-3 bg-primary height-50 rounded-circle"],["src","assets/img/portrait/small/avatar-s-4.png"]],null,null,null,null,null)),(l()(),a["\u0275eld"](94,0,null,null,0,"i",[],null,null,null,null,null)),(l()(),a["\u0275eld"](95,0,null,null,7,"div",[["class","media-body"]],null,null,null,null,null)),(l()(),a["\u0275eld"](96,0,null,null,3,"h6",[["class","list-group-item-heading"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["Kelly Reyes "])),(l()(),a["\u0275eld"](98,0,null,null,1,"span",[["class","font-small-3 float-right primary"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["Thrusday"])),(l()(),a["\u0275eld"](100,0,null,null,2,"p",[["class","list-group-item-text text-muted"]],null,null,null,null,null)),(l()(),a["\u0275eld"](101,0,null,null,0,"i",[["class","ft-check font-small-2"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,[" I love you "])),(l()(),a["\u0275eld"](103,0,null,null,10,"a",[["class","list-group-item no-border"]],null,[[null,"click"]],function(l,t,n){var a=!0;return"click"===t&&(a=!1!==l.component.SetActive(n,"chat7")&&a),a},null,null)),(l()(),a["\u0275eld"](104,0,null,null,9,"span",[["class","media"]],null,null,null,null,null)),(l()(),a["\u0275eld"](105,0,null,null,2,"span",[["class","avatar avatar-md avatar-online"]],null,null,null,null,null)),(l()(),a["\u0275eld"](106,0,null,null,0,"img",[["alt","Generic placeholder image"],["class","media-object d-flex mr-3 bg-primary height-50 rounded-circle"],["src","assets/img/portrait/small/avatar-s-14.png"]],null,null,null,null,null)),(l()(),a["\u0275eld"](107,0,null,null,0,"i",[],null,null,null,null,null)),(l()(),a["\u0275eld"](108,0,null,null,5,"div",[["class","media-body"]],null,null,null,null,null)),(l()(),a["\u0275eld"](109,0,null,null,1,"h6",[["class","list-group-item-heading"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["Vincent Nelson"])),(l()(),a["\u0275eld"](111,0,null,null,2,"p",[["class","list-group-item-text text-muted"]],null,null,null,null,null)),(l()(),a["\u0275eld"](112,0,null,null,0,"i",[["class","ft-check primary font-small-2"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,[" Who you are?"])),(l()(),a["\u0275eld"](114,0,null,null,8,"div",[["class","chat-name p-2 bg-white"]],null,null,null,null,null)),(l()(),a["\u0275eld"](115,0,null,null,7,"div",[["class","media"]],null,null,null,null,null)),(l()(),a["\u0275eld"](116,0,null,null,0,"span",[["class","chat-app-sidebar-toggle ft-align-justify font-large-1 mr-2 d-none d-block d-sm-block d-md-none"]],null,null,null,null,null)),(l()(),a["\u0275eld"](117,0,null,null,5,"div",[["class","media-body"]],null,null,null,null,null)),(l()(),a["\u0275eld"](118,0,null,null,1,"img",[["alt","avatar"],["class","rounded-circle mr-1"],["width","37"]],[[8,"src",4]],null,null,null,null)),a["\u0275pad"](119,1),(l()(),a["\u0275eld"](120,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),a["\u0275ted"](121,null,["",""])),(l()(),a["\u0275eld"](122,0,null,null,0,"i",[["class","ft-more-vertical float-right mt-1"]],null,null,null,null,null)),(l()(),a["\u0275eld"](123,0,[["scrollMe",1]],null,8,"section",[["class","chat-app-window"]],[[8,"scrollTop",0]],null,null,null,null)),(l()(),a["\u0275eld"](124,0,null,null,1,"div",[["class","badge badge-dark mb-1"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["NgRx Chat History"])),(l()(),a["\u0275eld"](126,0,null,null,5,"div",[["class","chats"]],null,null,null,null,null)),(l()(),a["\u0275eld"](127,0,null,null,4,"div",[["class","chats"]],null,null,null,null,null)),(l()(),a["\u0275and"](16777216,null,null,1,null,j)),a["\u0275did"](129,802816,null,0,d.NgForOf,[a.ViewContainerRef,a.TemplateRef,a.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),a["\u0275and"](16777216,null,null,1,null,N)),a["\u0275did"](131,16384,null,0,d.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),a["\u0275eld"](132,0,null,null,11,"section",[["class","chat-app-form bg-blue-grey bg-lighten-5"]],null,null,null,null,null)),(l()(),a["\u0275eld"](133,0,null,null,10,"form",[["class","chat-app-input row"]],null,null,null,null,null)),(l()(),a["\u0275eld"](134,0,null,null,5,"fieldset",[["class","form-group position-relative has-icon-left col-xl-10 col-lg-8 col-8 m-0 mb-1"]],null,null,null,null,null)),(l()(),a["\u0275eld"](135,0,null,null,1,"div",[["class","form-control-position"]],null,null,null,null,null)),(l()(),a["\u0275eld"](136,0,null,null,0,"i",[["class","icon-emoticon-smile"]],null,null,null,null,null)),(l()(),a["\u0275eld"](137,0,[[1,0],["messageInput",1]],null,0,"input",[["class","form-control"],["id","iconLeft4"],["placeholder","Type your message"],["type","text"]],null,[[null,"keydown.enter"]],function(l,t,n){var a=!0;return"keydown.enter"===t&&(l.component.onAddMessage(),a=!1!==n.preventDefault()&&a),a},null,null)),(l()(),a["\u0275eld"](138,0,null,null,1,"div",[["class","form-control-position control-position-right"]],null,null,null,null,null)),(l()(),a["\u0275eld"](139,0,null,null,0,"i",[["class","ft-image"]],null,null,null,null,null)),(l()(),a["\u0275eld"](140,0,null,null,3,"fieldset",[["class","form-group position-relative has-icon-left col-xl-2 col-lg-4 col-4 m-0 mb-1"]],null,null,null,null,null)),(l()(),a["\u0275eld"](141,0,null,null,2,"button",[["class","btn btn-raised btn-primary"],["type","button"]],null,[[null,"click"]],function(l,t,n){var a=!0;return"click"===t&&(a=!1!==l.component.onAddMessage()&&a),a},null,null)),(l()(),a["\u0275eld"](142,0,null,null,0,"i",[["class","fa fa-paper-plane-o hidden-lg-up"]],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,[" Send"]))],function(l,t){var n=t.component;l(t,129,0,n.chat),l(t,131,0,n.messages.length>0)},function(l,t){var n=t.component;l(t,118,0,l(t,119,0,n.activeChatUserImg)),l(t,121,0,n.activeChatUser),l(t,123,0,a["\u0275nov"](t,123).scrollHeight)})}var S=a["\u0275ccf"]("app-ngrx-chat",R,function(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,1,"app-ngrx-chat",[],null,null,null,O,T)),a["\u0275did"](1,114688,null,0,R,[a.ElementRef,H.n],null,null)],function(l,t){l(t,1,0)},null)},{},{},[]),_=n("OVs2"),q=n("ZYCi"),W={title:"Chat"},z=function(){},G=n("MdqY"),L=n("SV7k"),J=n("OlqA"),Y=n("c9mH"),B=Object.assign||function(l){for(var t,n=1,a=arguments.length;n<a;n++)for(var e in t=arguments[n])Object.prototype.hasOwnProperty.call(t,e)&&(l[e]=t[e]);return l},K={chat1:[new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["How can we help? We are here for you!"],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-3.png","1 hour ago",["Hey John, I am looking for the best admin template.","Could you please help me to find it out?","It should be angular 5 bootstrap compatible."],"text"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","30 minutes ago",["Absolutely!","Apex admin is the responsive angular 5 bootstrap admin template."],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-3.png","20 minutes ago",["Can you provide me audio link?"],"text"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["http://static.videogular.com/assets/audios/videogular.mp3"],"audio"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-3.png","10 minutes ago",["Can you provide me video link?"],"text"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["http://static.videogular.com/assets/videos/videogular.mp4"],"video"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-3.png","just now",["Looks clean and fresh UI.","It is perfect for my next project.","How can I purchase it?"],"text"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["Thanks, from ThemeForest."],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-3.png","",["I will purchase it for sure.","Thanks."],"text")],chat2:[new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["How can we help"],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-7.png","1 hours ago",["Hi, I spoke with a representative yesterday.","he gave me some steps to fix my problem","but they didn\u2019t help."],"text"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","20 minutes ago",["Can you provide me audio link of your conversation?"],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-7.png","",["http://static.videogular.com/assets/audios/videogular.mp3"],"audio"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","10 minutes ago",["Can you provide me video link of your issue?"],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-7.png","",["http://static.videogular.com/assets/videos/videogular.mp4"],"video"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["I\u2019m sorry to hear that","Can I ask which model of projector you own?","What steps did he suggest you to take?","What sort of issue are you having?"],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-7.png","",["An issue with the power."],"text"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["Did you make sure the outlet you plugged it into was functional."],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-7.png","",["Yes"],"text")],chat3:[new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["How can we help"],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-8.png","1 hours ago",["Hey John, I am looking for the best admin template.","Could you please help me to find it out?","It should be angular 5 bootstrap compatible."],"text"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["Absolutely!","Apex admin is the responsive angular 5 bootstrap admin template."],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-8.png","20 minutes ago",["Can you provide me audio link?"],"text"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["http://static.videogular.com/assets/audios/videogular.mp3"],"audio"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-8.png","10 minutes ago",["Can you provide me video link?"],"text"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["http://static.videogular.com/assets/videos/videogular.mp4"],"video"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-8.png","",["Looks clean and fresh UI.","It is perfect for my next project.","How can I purchase it?"],"text"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["Thanks, from ThemeForest."],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-8.png","",["I will purchase it for sure.","Thanks."],"text")],chat4:[new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["How can we help"],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-5.png","1 hours ago",["Hi, I spoke with a representative yesterday.","he gave me some steps to fix my problem","but they didn\u2019t help."],"text"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","20 minutes ago",["Can you provide me audio link of your conversation?"],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-5.png","",["http://static.videogular.com/assets/audios/videogular.mp3"],"audio"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","10 minutes ago",["Can you provide me video link of your issue?"],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-5.png","",["http://static.videogular.com/assets/videos/videogular.mp4"],"video"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["I\u2019m sorry to hear that","Can I ask which model of projector you own?","What steps did he suggest you to take?","What sort of issue are you having?"],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-5.png","",["An issue with the power."],"text"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["Did you make sure the outlet you plugged it into was functional."],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-5.png","",["Yes"],"text")],chat5:[new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["How can we help"],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-9.png","1 hours ago",["Hey John, I am looking for the best admin template.","Could you please help me to find it out?","It should be angular 5 bootstrap compatible."],"text"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["Absolutely!","Apex admin is the responsive angular 5 bootstrap admin template."],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-9.png","20 minutes ago",["Can you provide me audio link?"],"text"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["http://static.videogular.com/assets/audios/videogular.mp3"],"audio"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-9.png","10 minutes ago",["Can you provide me video link?"],"text"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["http://static.videogular.com/assets/videos/videogular.mp4"],"video"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-9.png","",["Looks clean and fresh UI.","It is perfect for my next project.","How can I purchase it?"],"text"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["Thanks, from ThemeForest."],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-9.png","",["I will purchase it for sure.","Thanks."],"text")],chat6:[new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["How can we help"],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-4.png","1 hours ago",["Hi, I spoke with a representative yesterday.","he gave me some steps to fix my problem","but they didn\u2019t help."],"text"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","20 minutes ago",["Can you provide me audio link of your conversation?"],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-4.png","",["http://static.videogular.com/assets/audios/videogular.mp3"],"audio"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","10 minutes ago",["Can you provide me video link of your issue?"],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-4.png","",["http://static.videogular.com/assets/videos/videogular.mp4"],"video"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["I\u2019m sorry to hear that","Can I ask which model of projector you own?","What steps did he suggest you to take?","What sort of issue are you having?"],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-4.png","",["An issue with the power."],"text"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["Did you make sure the outlet you plugged it into was functional."],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-4.png","",["Yes"],"text")],chat7:[new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["How can we help"],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-14.png","1 hours ago",["Hey John, I am looking for the best admin template.","Could you please help me to find it out?","It should be angular 4 bootstrap compatible."],"text"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["Absolutely!","Apex admin is the responsive angular 4 bootstrap admin template."],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-14.png","20 minutes ago",["Can you provide me audio link?"],"text"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["http://static.videogular.com/assets/audios/videogular.mp3"],"audio"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-14.png","10 minutes ago",["Can you provide me video link?"],"text"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["http://static.videogular.com/assets/videos/videogular.mp4"],"video"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-14.png","",["Looks clean and fresh UI.","It is perfect for my next project.","How can I purchase it?"],"text"),new p("right","chat","assets/img/portrait/small/avatar-s-1.png","",["Thanks, from ThemeForest."],"text"),new p("left","chat chat-left","assets/img/portrait/small/avatar-s-14.png","",["I will purchase it for sure.","Thanks."],"text")]};function Q(l,t){switch(void 0===l&&(l=K),t.type){case m:return l.chat1.slice(),B({},l,{chat1:l.chat1.concat([t.payload])});case h:return l.chat2.slice(),B({},l,{chat2:l.chat2.concat([t.payload])});case g:return l.chat3.slice(),B({},l,{chat3:l.chat3.concat([t.payload])});case v:return l.chat4.slice(),B({},l,{chat4:l.chat4.concat([t.payload])});case f:return l.chat5.slice(),B({},l,{chat5:l.chat5.concat([t.payload])});case y:return l.chat6.slice(),B({},l,{chat6:l.chat6.concat([t.payload])});case w:return l.chat7.slice(),B({},l,{chat7:l.chat7.concat([t.payload])});default:return l}}n.d(t,"ChatNGRXModuleNgFactory",function(){return X});var X=a["\u0275cmf"](e,[],function(l){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[S]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[a.LOCALE_ID,[2,d["\u0275angular_packages_common_common_a"]]]),a["\u0275mpd"](4608,s.VgAPI,s.VgAPI,[]),a["\u0275mpd"](4608,i.VgFullscreenAPI,i.VgFullscreenAPI,[]),a["\u0275mpd"](4608,_.VgUtils,_.VgUtils,[]),a["\u0275mpd"](4608,r.VgControlsHidden,r.VgControlsHidden,[]),a["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),a["\u0275mpd"](1073742336,q.p,q.p,[[2,q.u],[2,q.l]]),a["\u0275mpd"](1073742336,z,z,[]),a["\u0275mpd"](1073742336,G.VgCoreModule,G.VgCoreModule,[]),a["\u0275mpd"](1073742336,L.VgControlsModule,L.VgControlsModule,[]),a["\u0275mpd"](1073742336,J.VgOverlayPlayModule,J.VgOverlayPlayModule,[]),a["\u0275mpd"](1073742336,Y.VgBufferingModule,Y.VgBufferingModule,[]),a["\u0275mpd"](1024,H.j,function(){return[{key:"chat",reducerFactory:H.z,metaReducers:[],initialState:void 0}]},[]),a["\u0275mpd"](1024,H.q,function(){return[Q]},[]),a["\u0275mpd"](1024,H.r,function(l){return[l]},[H.q]),a["\u0275mpd"](1024,H.b,function(l,t,n){return[H.w(l,t,n)]},[a.Injector,H.q,H.r]),a["\u0275mpd"](1073873408,H.o,H.o,[H.j,H.b,H.g,H.p]),a["\u0275mpd"](1073742336,e,e,[]),a["\u0275mpd"](1024,q.j,function(){return[[{path:"",component:R,data:W}]]},[])])})}}]);