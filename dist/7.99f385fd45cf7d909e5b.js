(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{GOcB:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),a=function(){},t=u("kf7m"),s=u("KX97"),i=u("Ip0R"),o=function(l,n,u,e,a,t){this.taskTitle=l,this.taskMessage=n,this.createdOn=u,this.createdBy=e,this.assignedTo=a,this.status=t},d=function(){function l(){this.todo=[new o("Responsive","Etiam porta sem malesuada magna mollis euismod.","May 17","Elizabeth Elliott","assets/img/portrait/small/avatar-s-3.png","New"),new o("QA Testing","Etiam porta sem malesuada magna mollis euismod.","May 17","Elizabeth Elliott","assets/img/portrait/small/avatar-s-3.png","New"),new o("Budget","Etiam porta sem malesuada magna mollis euismod.","May 17","Elizabeth Elliott","assets/img/portrait/small/avatar-s-3.png","New")],this.inProcess=[new o("checklist","Etiam porta sem malesuada magna mollis euismod.","Apr 11","Bruce Reid","assets/img/portrait/small/avatar-s-1.png","In Process"),new o("Navigation","Etiam porta sem malesuada magna mollis euismod.","Apr 11","Bruce Reid","assets/img/portrait/small/avatar-s-1.png","In Process"),new o("Bootstrap 4","Etiam porta sem malesuada magna mollis euismod.","Apr 11","Bruce Reid","assets/img/portrait/small/avatar-s-1.png","In Process")],this.backLog=[new o("Assessment","Etiam porta sem malesuada magna mollis euismod.","Jun 19","Kelly Reyes","assets/img/portrait/small/avatar-s-5.png","Pending"),new o("Schedule","Etiam porta sem malesuada magna mollis euismod.","Jun 19","Kelly Reyes","assets/img/portrait/small/avatar-s-5.png","Pending"),new o("Unit tests","Etiam porta sem malesuada magna mollis euismod.","Jun 19","Kelly Reyes","assets/img/portrait/small/avatar-s-5.png","Pending")],this.completed=[new o("Angular 5","Etiam porta sem malesuada magna mollis euismod.","Aug 22","Sara Ali","assets/img/portrait/small/avatar-s-7.png","Completed"),new o("Fields","Etiam porta sem malesuada magna mollis euismod.","Aug 22","Sara Ali","assets/img/portrait/small/avatar-s-7.png","Completed"),new o("Task board","Etiam porta sem malesuada magna mollis euismod.","Aug 22","Sara Ali","assets/img/portrait/small/avatar-s-7.png","Completed")]}return l.prototype.addNewTask=function(l,n){this.todo.push(new o(l,n,"Nov 12","Elizabeth Elliott","assets/img/portrait/small/avatar-s-3.png","New"))},l.prototype.gettodo=function(){return this.todo},l}(),r=function(){function l(l,n){this.elRef=l,this.taskBoardService=n,this.todo=n.todo,this.inProcess=n.inProcess,this.backLog=n.backLog,this.completed=n.completed}return l.prototype.onAddTask=function(){""!=this.messageInputRef.nativeElement.value&&""!=this.titleInputRef.nativeElement.value&&(this.taskBoardService.addNewTask(this.titleInputRef.nativeElement.value,this.messageInputRef.nativeElement.value),this.todo=this.taskBoardService.gettodo()),this.titleInputRef.nativeElement.value="",this.messageInputRef.nativeElement.value="",this.titleInputRef.nativeElement.focus()},l}(),c=e["\u0275crt"]({encapsulation:2,styles:[[".gh-fork{position:fixed;top:0;right:0;border:0}.dragdrop-wrapper{display:table}.dragdrop-container:nth-child(odd){background-color:rgba(0,0,0,.2)}.dragdrop-container>div,.gu-mirror{transition:opacity .4s ease-in-out}.dragdrop-container>div{cursor:move;cursor:grab;cursor:-webkit-grab}.gu-mirror{cursor:grabbing;cursor:-webkit-grabbing}.dragdrop-container .ex-moved{background-color:#e74c3c}.dragdrop-container.ex-over{background-color:rgba(255,255,255,.3)}#left-lovehandles>div,#right-lovehandles>div{cursor:initial}.handle{padding:0 5px;margin-right:5px;background-color:rgba(0,0,0,.4);cursor:move}.image-thing{margin:20px 0;display:block;text-align:center}.slack-join{position:absolute;font-weight:400;font-size:14px;right:10px;top:50%;margin-top:-8px;line-height:16px}"]],data:{}});function m(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,14,"div",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,13,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,12,"div",[["class","card-block pt-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,5,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"h5",[["class","text-bold-500 primary float-left"]],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,["",""])),(l()(),e["\u0275eld"](6,0,null,null,2,"div",[["class","actions float-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,0,"i",[["class","ft-edit mr-1 info"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,0,"i",[["class","ft-trash-2 danger"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](10,null,["",""])),(l()(),e["\u0275eld"](11,0,null,null,1,"img",[["class","rounded-circle width-50 mr-2"]],[[8,"src",4]],null,null,null,null)),e["\u0275pad"](12,1),(l()(),e["\u0275eld"](13,0,null,null,1,"span",[["class","primary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](14,null,["",""]))],null,function(l,n){l(n,5,0,n.context.$implicit.taskTitle),l(n,10,0,n.context.$implicit.taskMessage),l(n,11,0,l(n,12,0,n.context.$implicit.assignedTo)),l(n,14,0,n.context.$implicit.createdOn)})}function p(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,14,"div",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,13,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,12,"div",[["class","card-block pt-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,5,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"h5",[["class","text-bold-500 info float-left"]],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,["",""])),(l()(),e["\u0275eld"](6,0,null,null,2,"div",[["class","actions float-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,0,"i",[["class","ft-edit mr-1 info"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,0,"i",[["class","ft-trash-2 danger"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](10,null,["",""])),(l()(),e["\u0275eld"](11,0,null,null,1,"img",[["class","rounded-circle width-50 mr-2"]],[[8,"src",4]],null,null,null,null)),e["\u0275pad"](12,1),(l()(),e["\u0275eld"](13,0,null,null,1,"span",[["class","info"]],null,null,null,null,null)),(l()(),e["\u0275ted"](14,null,["",""]))],null,function(l,n){l(n,5,0,n.context.$implicit.taskTitle),l(n,10,0,n.context.$implicit.taskMessage),l(n,11,0,l(n,12,0,n.context.$implicit.assignedTo)),l(n,14,0,n.context.$implicit.createdOn)})}function g(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,14,"div",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,13,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,12,"div",[["class","card-block pt-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,5,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"h5",[["class","text-bold-500 success float-left"]],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,["",""])),(l()(),e["\u0275eld"](6,0,null,null,2,"div",[["class","actions float-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,0,"i",[["class","ft-edit mr-1 info"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,0,"i",[["class","ft-trash-2 danger"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](10,null,["",""])),(l()(),e["\u0275eld"](11,0,null,null,1,"img",[["class","rounded-circle width-50 mr-2"]],[[8,"src",4]],null,null,null,null)),e["\u0275pad"](12,1),(l()(),e["\u0275eld"](13,0,null,null,1,"span",[["class","success"]],null,null,null,null,null)),(l()(),e["\u0275ted"](14,null,["",""]))],null,function(l,n){l(n,5,0,n.context.$implicit.taskTitle),l(n,10,0,n.context.$implicit.taskMessage),l(n,11,0,l(n,12,0,n.context.$implicit.assignedTo)),l(n,14,0,n.context.$implicit.createdOn)})}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,14,"div",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,13,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,12,"div",[["class","card-block pt-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,5,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"h5",[["class","text-bold-500 warning float-left"]],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,["",""])),(l()(),e["\u0275eld"](6,0,null,null,2,"div",[["class","actions float-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,0,"i",[["class","ft-edit mr-1 info"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,0,"i",[["class","ft-trash-2 danger"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](10,null,["",""])),(l()(),e["\u0275eld"](11,0,null,null,1,"img",[["class","rounded-circle width-50 mr-2"]],[[8,"src",4]],null,null,null,null)),e["\u0275pad"](12,1),(l()(),e["\u0275eld"](13,0,null,null,1,"span",[["class","warning"]],null,null,null,null,null)),(l()(),e["\u0275ted"](14,null,["",""]))],null,function(l,n){l(n,5,0,n.context.$implicit.taskTitle),l(n,10,0,n.context.$implicit.taskMessage),l(n,11,0,l(n,12,0,n.context.$implicit.assignedTo)),l(n,14,0,n.context.$implicit.createdOn)})}function v(l){return e["\u0275vid"](0,[e["\u0275qud"](402653184,1,{titleInputRef:0}),e["\u0275qud"](402653184,2,{messageInputRef:0}),(l()(),e["\u0275eld"](2,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,3,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"div",[["class","content-header"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Task Board"])),(l()(),e["\u0275eld"](6,0,null,null,0,"p",[["class","content-sub-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,55,"section",[["id","taskboard"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,32,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,7,"div",[["class","col-md-3 col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,2,"h4",[["class","ml-2 mt-2 text-bold-500"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,0,"i",[["class","ft-list mr-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" To Dos"])),(l()(),e["\u0275eld"](13,0,null,null,3,"div",[["class","dragdrop-container"]],null,null,null,null,null)),e["\u0275did"](14,606208,null,0,t.DragulaDirective,[e.ElementRef,s.DragulaService],{dragula:[0,"dragula"],dragulaModel:[1,"dragulaModel"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](16,802816,null,0,i.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](17,0,null,null,7,"div",[["class","col-md-3 col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,2,"h4",[["class","ml-2 mt-2 text-bold-500"]],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,0,"i",[["class","ft-trending-up mr-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" In Progress"])),(l()(),e["\u0275eld"](21,0,null,null,3,"div",[["class","dragdrop-container"]],null,null,null,null,null)),e["\u0275did"](22,606208,null,0,t.DragulaDirective,[e.ElementRef,s.DragulaService],{dragula:[0,"dragula"],dragulaModel:[1,"dragulaModel"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,p)),e["\u0275did"](24,802816,null,0,i.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](25,0,null,null,7,"div",[["class","col-md-3 col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,2,"h4",[["class","ml-2 mt-2 text-bold-500"]],null,null,null,null,null)),(l()(),e["\u0275eld"](27,0,null,null,0,"i",[["class","ft-thumbs-up mr-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Completed"])),(l()(),e["\u0275eld"](29,0,null,null,3,"div",[["class","dragdrop-container"]],null,null,null,null,null)),e["\u0275did"](30,606208,null,0,t.DragulaDirective,[e.ElementRef,s.DragulaService],{dragula:[0,"dragula"],dragulaModel:[1,"dragulaModel"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,g)),e["\u0275did"](32,802816,null,0,i.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](33,0,null,null,7,"div",[["class","col-md-3 col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](34,0,null,null,2,"h4",[["class","ml-2 mt-2 text-bold-500"]],null,null,null,null,null)),(l()(),e["\u0275eld"](35,0,null,null,0,"i",[["class","ft-alert-octagon mr-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["On Hold"])),(l()(),e["\u0275eld"](37,0,null,null,3,"div",[["class","dragdrop-container"]],null,null,null,null,null)),e["\u0275did"](38,606208,null,0,t.DragulaDirective,[e.ElementRef,s.DragulaService],{dragula:[0,"dragula"],dragulaModel:[1,"dragulaModel"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](40,802816,null,0,i.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](41,0,null,null,21,"section",[["class","taskboard-app-form bg-blue-grey bg-lighten-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](42,0,null,null,20,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](43,0,null,null,19,"div",[["class","card-block pt-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](44,0,null,null,1,"h5",[["class","text-bold-500"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Create new Task"])),(l()(),e["\u0275eld"](46,0,null,null,16,"form",[["class","taskboard-app-input row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](47,0,null,null,5,"fieldset",[["class","form-group position-relative has-icon-left col-md-4 col-12 mb-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](48,0,null,null,1,"div",[["class","form-control-position"]],null,null,null,null,null)),(l()(),e["\u0275eld"](49,0,null,null,0,"i",[["class","icon-emoticon-smile"]],null,null,null,null,null)),(l()(),e["\u0275eld"](50,0,[[1,0],["todoTitle",1]],null,0,"input",[["class","form-control"],["id","todoTitle"],["placeholder","Title"],["type","text"]],null,[[null,"keydown.enter"]],function(l,n,u){var e=!0;return"keydown.enter"===n&&(e=!1!==u.preventDefault()&&e),e},null,null)),(l()(),e["\u0275eld"](51,0,null,null,1,"div",[["class","form-control-position control-position-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](52,0,null,null,0,"i",[["class","ft-image"]],null,null,null,null,null)),(l()(),e["\u0275eld"](53,0,null,null,5,"fieldset",[["class","form-group position-relative has-icon-left col-md-6 col-12 mb-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](54,0,null,null,1,"div",[["class","form-control-position"]],null,null,null,null,null)),(l()(),e["\u0275eld"](55,0,null,null,0,"i",[["class","icon-emoticon-smile"]],null,null,null,null,null)),(l()(),e["\u0275eld"](56,0,[[2,0],["todoMessage",1]],null,0,"input",[["class","form-control"],["id","todoMessage"],["placeholder","Message"],["type","text"]],null,[[null,"keydown.enter"]],function(l,n,u){var e=!0;return"keydown.enter"===n&&(e=!1!==u.preventDefault()&&e),e},null,null)),(l()(),e["\u0275eld"](57,0,null,null,1,"div",[["class","form-control-position control-position-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](58,0,null,null,0,"i",[["class","ft-image"]],null,null,null,null,null)),(l()(),e["\u0275eld"](59,0,null,null,3,"fieldset",[["class","form-group position-relative has-icon-left col-md-2 col-12 mb-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](60,0,null,null,2,"button",[["class","btn btn-raised btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onAddTask()&&e),e},null,null)),(l()(),e["\u0275eld"](61,0,null,null,0,"i",[["class","fa fa-paper-plane-o hidden-lg-up"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Create"]))],function(l,n){var u=n.component;l(n,14,0,"task-group",u.todo),l(n,16,0,u.todo),l(n,22,0,"task-group",u.inProcess),l(n,24,0,u.inProcess),l(n,30,0,"task-group",u.completed),l(n,32,0,u.completed),l(n,38,0,"task-group",u.backLog),l(n,40,0,u.backLog)},null)}var h=e["\u0275ccf"]("app-taskboard",r,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"app-taskboard",[],null,null,null,v,c)),e["\u0275prd"](512,null,d,d,[]),e["\u0275did"](2,49152,null,0,r,[e.ElementRef,d],null,null)],null,null)},{},{},[]),b=u("ZYCi"),k={title:"Taskboard"},w=function(){},x=u("Ttb/");u.d(n,"TaskboardModuleNgFactory",function(){return R});var R=e["\u0275cmf"](a,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[h]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,i.NgLocalization,i.NgLocaleLocalization,[e.LOCALE_ID,[2,i["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,s.DragulaService,s.DragulaService,[]),e["\u0275mpd"](1073742336,i.CommonModule,i.CommonModule,[]),e["\u0275mpd"](1073742336,b.p,b.p,[[2,b.u],[2,b.l]]),e["\u0275mpd"](1073742336,w,w,[]),e["\u0275mpd"](1073742336,x.DragulaModule,x.DragulaModule,[]),e["\u0275mpd"](1073742336,a,a,[]),e["\u0275mpd"](1024,b.j,function(){return[[{path:"",component:r,data:k}]]},[])])})}}]);