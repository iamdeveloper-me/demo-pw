(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3V6U":function(n,l,e){"use strict";e.r(l);var u=e("CcnG"),o=function(){},t=e("q0nV"),r=e("ixSq"),i=e("k1Da"),a=e("q1/r"),s=e("7gbQ"),c=e("ma0w"),d=u["\u0275crt"]({encapsulation:2,styles:["\n        vg-overlay-play {\n            z-index: 200;\n        }\n\n        vg-overlay-play.is-buffering {\n            display: none;\n        }\n\n        vg-overlay-play .vg-overlay-play {\n            transition: all 0.5s;\n            cursor: pointer;\n            position: absolute;\n            display: block;\n            color: white;\n            width: 100%;\n            height: 100%;\n            font-size: 80px;\n            filter: alpha(opacity=60);\n            opacity: 0.6;\n        }\n\n        vg-overlay-play .vg-overlay-play.native-fullscreen.controls-hidden {\n            cursor: none;\n        }\n\n        vg-overlay-play .vg-overlay-play .overlay-play-container.vg-icon-play_arrow {\n            pointer-events: none;\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            font-size: 80px;\n        }\n\n        vg-overlay-play .vg-overlay-play:hover {\n            filter: alpha(opacity=100);\n            opacity: 1;\n        }\n\n        vg-overlay-play .vg-overlay-play:hover .overlay-play-container.vg-icon-play_arrow:before {\n            transform: scale(1.2);\n        }\n    "],data:{}});function g(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"div",[["class","vg-overlay-play"]],[[2,"native-fullscreen",null],[2,"controls-hidden",null]],null,null,null,null)),(n()(),u["\u0275eld"](1,0,null,null,0,"div",[["class","overlay-play-container"]],[[2,"vg-icon-play_arrow",null]],null,null,null,null))],null,function(n,l){var e=l.component;n(l,0,0,e.isNativeFullscreen,e.areControlsHidden),n(l,1,0,"playing"!==e.getState())})}var v=e("7j3K"),p=u["\u0275crt"]({encapsulation:2,styles:["\n        vg-buffering {\n            display: none;\n            z-index: 201;\n        }\n\n        vg-buffering.is-buffering {\n            display: block;\n        }\n        \n        .vg-buffering {\n            position: absolute;\n            display: block;\n            width: 100%;\n            height: 100%;\n        }\n\n        .vg-buffering .bufferingContainer {\n            width: 100%;\n            position: absolute;\n            cursor: pointer;\n            top: 50%;\n            margin-top: -50px;\n\n            zoom: 1;\n            filter: alpha(opacity=60);\n            opacity: 0.6;\n        }\n\n        \n        .vg-buffering .loadingSpinner {\n            background-color: rgba(0, 0, 0, 0);\n            border: 5px solid rgba(255, 255, 255, 1);\n            opacity: .9;\n            border-top: 5px solid rgba(0, 0, 0, 0);\n            border-left: 5px solid rgba(0, 0, 0, 0);\n            border-radius: 50px;\n            box-shadow: 0 0 35px #FFFFFF;\n            width: 50px;\n            height: 50px;\n            margin: 0 auto;\n            -moz-animation: spin .5s infinite linear;\n            -webkit-animation: spin .5s infinite linear;\n        }\n\n        .vg-buffering .loadingSpinner .stop {\n            -webkit-animation-play-state: paused;\n            -moz-animation-play-state: paused;\n        }\n\n        @-moz-keyframes spin {\n            0% {\n                -moz-transform: rotate(0deg);\n            }\n            100% {\n                -moz-transform: rotate(360deg);\n            }\n        }\n\n        @-moz-keyframes spinoff {\n            0% {\n                -moz-transform: rotate(0deg);\n            }\n            100% {\n                -moz-transform: rotate(-360deg);\n            }\n        }\n\n        @-webkit-keyframes spin {\n            0% {\n                -webkit-transform: rotate(0deg);\n            }\n            100% {\n                -webkit-transform: rotate(360deg);\n            }\n        }\n\n        @-webkit-keyframes spinoff {\n            0% {\n                -webkit-transform: rotate(0deg);\n            }\n            100% {\n                -webkit-transform: rotate(-360deg);\n            }\n        }\n    "],data:{}});function m(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,2,"div",[["class","vg-buffering"]],null,null,null,null,null)),(n()(),u["\u0275eld"](1,0,null,null,1,"div",[["class","bufferingContainer"]],null,null,null,null,null)),(n()(),u["\u0275eld"](2,0,null,null,0,"div",[["class","loadingSpinner"]],null,null,null,null,null))],null,null)}var f=e("1WZM"),b=u["\u0275crt"]({encapsulation:2,styles:["\n        vg-scrub-bar {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            position: absolute;\n            width: 100%;\n            height: 5px;\n            bottom: 50px;\n            margin: 0;\n            cursor: pointer;\n            align-items: center;\n            background: rgba(0, 0, 0, 0.75);\n            z-index: 250;\n            -webkit-transition: bottom 1s, opacity 0.5s;\n            -khtml-transition: bottom 1s, opacity 0.5s;\n            -moz-transition: bottom 1s, opacity 0.5s;\n            -ms-transition: bottom 1s, opacity 0.5s;\n            transition: bottom 1s, opacity 0.5s;\n        }\n        \n        vg-scrub-bar .scrubBar {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n            height: 100%;\n        }\n\n        vg-controls vg-scrub-bar {\n            position: relative;\n            bottom: 0;\n            background: transparent;\n            height: 50px;\n            flex-grow: 1;\n            flex-basis: 0;\n            margin: 0 10px;\n            -webkit-transition: initial;\n            -khtml-transition: initial;\n            -moz-transition: initial;\n            -ms-transition: initial;\n            transition: initial;\n        }\n\n        vg-scrub-bar.hide {\n            bottom: 0;\n            opacity: 0;\n        }\n\n        vg-controls vg-scrub-bar.hide {\n            bottom: initial;\n            opacity: initial;\n        }\n    "],data:{}});function y(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"div",[["aria-label","scrub bar"],["aria-level","polite"],["aria-valuemax","100"],["aria-valuemin","0"],["class","scrubBar"],["role","slider"],["tabindex","0"]],[[1,"aria-valuenow",0],[1,"aria-valuetext",0]],null,null,null,null)),u["\u0275ncd"](null,0)],null,function(n,l){var e=l.component;n(l,0,0,e.getPercentage(),e.getPercentage()+"%")})}var h=e("Ip0R"),k=e("7NiZ"),x=u["\u0275crt"]({encapsulation:2,styles:["\n        vg-scrub-bar-current-time {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        vg-scrub-bar-current-time .background {\n            background-color: white;\n        }\n\n        vg-controls vg-scrub-bar-current-time {\n            position: absolute;\n            top: calc(50% - 3px);\n            -webkit-border-radius: 2px;\n            -moz-border-radius: 2px;\n            border-radius: 2px;\n        }\n\n        vg-controls vg-scrub-bar-current-time .background {\n            border: 1px solid white;\n            -webkit-border-radius: 2px;\n            -moz-border-radius: 2px;\n            border-radius: 2px;\n        }\n        \n        vg-scrub-bar-current-time .slider{\n            background: white;\n            height: 15px;\n            width: 15px;\n            border-radius: 50%;\n            box-shadow: 0px 0px 10px black;\n            margin-top: -5px;\n            margin-left: -10px;\n        }\n    "],data:{}});function w(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,0,"span",[["class","slider"]],null,null,null,null,null))],null,null)}function V(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,0,"div",[["class","background"]],[[4,"width",null]],null,null,null,null)),(n()(),u["\u0275and"](16777216,null,null,1,null,w)),u["\u0275did"](2,16384,null,0,h.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,l.component.vgSlider)},function(n,l){n(l,0,0,l.component.getPercentage())})}var P=e("A+AZ"),I=u["\u0275crt"]({encapsulation:2,styles:["\n        vg-scrub-bar-buffering-time {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        vg-scrub-bar-buffering-time .background {\n            background-color: rgba(255, 255, 255, 0.3);\n        }\n\n        vg-controls vg-scrub-bar-buffering-time {\n            position: absolute;\n            top: calc(50% - 3px);\n        }\n\n        vg-controls vg-scrub-bar-buffering-time .background {\n            -webkit-border-radius: 2px;\n            -moz-border-radius: 2px;\n            border-radius: 2px;\n        }\n    "],data:{}});function C(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,0,"div",[["class","background"]],[[4,"width",null]],null,null,null,null))],null,function(n,l){n(l,0,0,l.component.getBufferTime())})}var A=e("XlmU"),F=u["\u0275crt"]({encapsulation:2,styles:["\n        vg-controls {\n            position: absolute;\n            display: flex;\n            width: 100%;\n            height: 50px;\n            z-index: 300;\n            bottom: 0;\n            background-color: rgba(0, 0, 0, 0.5);\n            -webkit-transition: bottom 1s;\n            -khtml-transition: bottom 1s;\n            -moz-transition: bottom 1s;\n            -ms-transition: bottom 1s;\n            transition: bottom 1s;\n        }\n\n        vg-controls.hide {  \n            bottom: -50px;\n        }\n    "],data:{}});function S(n){return u["\u0275vid"](0,[u["\u0275ncd"](null,0)],null,null)}var B=e("mxS9"),z=u["\u0275crt"]({encapsulation:2,styles:["\n        vg-play-pause {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-play-pause .icon {\n            pointer-events: none;\n        }\n    "],data:{}});function R(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,0,"div",[["class","icon"],["role","button"],["tabindex","0"]],[[2,"vg-icon-pause",null],[2,"vg-icon-play_arrow",null],[1,"aria-label",0],[1,"aria-valuetext",0]],null,null,null,null))],null,function(n,l){var e=l.component;n(l,0,0,"playing"===e.getState(),"paused"===e.getState()||"ended"===e.getState(),"paused"===e.getState()?"play":"pause",e.ariaValue)})}var M=e("hsw8"),E=u["\u0275crt"]({encapsulation:2,styles:["\n        vg-playback-button {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        }\n\n        vg-playback-button .button {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 50px;\n        }\n    "],data:{}});function H(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"span",[["aria-label","playback speed button"],["class","button"],["role","button"],["tabindex","0"]],[[1,"aria-valuetext",0]],null,null,null,null)),(n()(),u["\u0275ted"](1,null,[" ","x "]))],null,function(n,l){var e=l.component;n(l,0,0,e.ariaValue),n(l,1,0,e.getPlaybackRate())})}var T=e("g0ep"),D=u["\u0275crt"]({encapsulation:2,styles:["\n        vg-time-display {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 60px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n            pointer-events: none;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        }\n    "],data:{}});function N(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["LIVE"]))],null,null)}function _(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),u["\u0275ted"](1,null,["",""])),u["\u0275ppd"](2,2)],null,function(n,l){var e=l.component;n(l,1,0,u["\u0275unv"](l,1,0,n(l,2,0,u["\u0275nov"](l.parent,0),e.getTime(),e.vgFormat)))})}function j(n){return u["\u0275vid"](0,[u["\u0275pid"](0,T.VgUtcPipe,[]),(n()(),u["\u0275and"](16777216,null,null,1,null,N)),u["\u0275did"](2,16384,null,0,h.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275and"](16777216,null,null,1,null,_)),u["\u0275did"](4,16384,null,0,h.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),u["\u0275ncd"](null,0)],function(n,l){var e=l.component;n(l,2,0,null==e.target?null:e.target.isLive),n(l,4,0,!(null!=e.target&&e.target.isLive))},null)}var O=e("T4n0"),K=u["\u0275crt"]({encapsulation:2,styles:["\n        vg-track-selector {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            width: 50px;\n            height: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n        vg-track-selector .container {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n            \n            padding: 0;\n            margin: 5px;\n        }\n        vg-track-selector select.trackSelector {\n            width: 50px;\n            padding: 5px 8px;\n            border: none;\n            background: none;\n            -webkit-appearance: none;\n            -moz-appearance: none;\n            appearance: none;\n            color: transparent;\n            font-size: 16px;\n        }\n        vg-track-selector select.trackSelector::-ms-expand {\n            display: none;\n        }\n        vg-track-selector select.trackSelector option {\n            color: #000;\n        }\n        vg-track-selector .track-selected {\n            position: absolute;\n            width: 100%;\n            height: 50px;\n            top: -6px;\n            text-align: center;\n            text-transform: uppercase;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n            padding-top: 2px;\n            pointer-events: none;\n        }\n        vg-track-selector .vg-icon-closed_caption:before {\n            width: 100%;\n        }\n    "],data:{}});function q(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"option",[],[[8,"value",0],[8,"selected",0]],null,null,null,null)),(n()(),u["\u0275ted"](1,null,[" "," "]))],null,function(n,l){n(l,0,0,l.context.$implicit.id,!0===l.context.$implicit.selected),n(l,1,0,l.context.$implicit.label)})}function L(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,5,"div",[["class","container"]],null,null,null,null,null)),(n()(),u["\u0275eld"](1,0,null,null,1,"div",[["class","track-selected"]],[[2,"vg-icon-closed_caption",null]],null,null,null,null)),(n()(),u["\u0275ted"](2,null,[" "," "])),(n()(),u["\u0275eld"](3,0,null,null,2,"select",[["aria-label","track selector"],["class","trackSelector"],["tabindex","0"]],[[1,"aria-valuetext",0]],[[null,"change"]],function(n,l,e){var u=!0;return"change"===l&&(u=!1!==n.component.selectTrack(e.target.value)&&u),u},null,null)),(n()(),u["\u0275and"](16777216,null,null,1,null,q)),u["\u0275did"](5,802816,null,0,h.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,5,0,l.component.tracks)},function(n,l){var e=l.component;n(l,1,0,!e.trackSelected),n(l,2,0,e.trackSelected||""),n(l,3,0,e.ariaValue)})}var U=e("fDV+"),Z=u["\u0275crt"]({encapsulation:2,styles:["\n        vg-mute {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-mute .icon {\n            pointer-events: none;\n        }\n    "],data:{}});function Y(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,0,"div",[["aria-label","mute button"],["class","icon"],["role","button"],["tabindex","0"]],[[2,"vg-icon-volume_up",null],[2,"vg-icon-volume_down",null],[2,"vg-icon-volume_mute",null],[2,"vg-icon-volume_off",null],[1,"aria-valuetext",0]],null,null,null,null))],null,function(n,l){var e=l.component;n(l,0,0,e.getVolume()>=.75,e.getVolume()>=.25&&e.getVolume()<.75,e.getVolume()>0&&e.getVolume()<.25,0===e.getVolume(),e.ariaValue)})}var $=e("IAT7"),J=u["\u0275crt"]({encapsulation:2,styles:["\n        vg-volume {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 100px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n        vg-volume .volumeBar {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n        }\n        vg-volume .volumeBackground {\n            display: flex;\n            flex-grow: 1;\n            height: 5px;\n            pointer-events: none;\n            background-color: #333;\n        }\n        vg-volume .volumeValue {\n            display: flex;\n            height: 5px;\n            pointer-events: none;\n            background-color: #FFF;\n            transition:all 0.2s ease-out;\n        }\n        vg-volume .volumeKnob {\n            position: absolute;\n            width: 15px; height: 15px;\n            left: 0; top: 50%;\n            transform: translateY(-50%);\n            border-radius: 15px;\n            pointer-events: none;\n            background-color: #FFF;\n            transition:all 0.2s ease-out;\n        }\n        vg-volume .volumeBackground.dragging .volumeValue,\n        vg-volume .volumeBackground.dragging .volumeKnob {\n            transition: none;\n        }\n    "],data:{}});function G(n){return u["\u0275vid"](0,[u["\u0275qud"](402653184,1,{volumeBarRef:0}),(n()(),u["\u0275eld"](1,0,[[1,0],["volumeBar",1]],null,5,"div",[["aria-label","volume level"],["aria-level","polite"],["aria-orientation","horizontal"],["aria-valuemax","100"],["aria-valuemin","0"],["class","volumeBar"],["role","slider"],["tabindex","0"]],[[1,"aria-valuenow",0],[1,"aria-valuetext",0]],[[null,"click"],[null,"mousedown"]],function(n,l,e){var u=!0,o=n.component;return"click"===l&&(u=!1!==o.onClick(e)&&u),"mousedown"===l&&(u=!1!==o.onMouseDown(e)&&u),u},null,null)),(n()(),u["\u0275eld"](2,0,null,null,4,"div",[["class","volumeBackground"]],null,null,null,null,null)),u["\u0275did"](3,278528,null,0,h.NgClass,[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](4,{dragging:0}),(n()(),u["\u0275eld"](5,0,null,null,0,"div",[["class","volumeValue"]],[[4,"width",null]],null,null,null,null)),(n()(),u["\u0275eld"](6,0,null,null,0,"div",[["class","volumeKnob"]],[[4,"left",null]],null,null,null,null))],function(n,l){n(l,3,0,"volumeBackground",n(l,4,0,l.component.isDragging))},function(n,l){var e=l.component;n(l,1,0,e.ariaValue,e.ariaValue+"%"),n(l,5,0,85*e.getVolume()+"%"),n(l,6,0,85*e.getVolume()+"%")})}var Q=e("jlVH"),W=u["\u0275crt"]({encapsulation:2,styles:["\n        vg-fullscreen {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-fullscreen .icon {\n            pointer-events: none;\n        }\n    "],data:{}});function X(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,0,"div",[["aria-label","fullscreen button"],["class","icon"],["role","button"],["tabindex","0"]],[[2,"vg-icon-fullscreen",null],[2,"vg-icon-fullscreen_exit",null],[1,"aria-valuetext",0]],null,null,null,null))],null,function(n,l){var e=l.component;n(l,0,0,!e.isFullscreen,e.isFullscreen,e.ariaValue)})}var nn=e("UOCa"),ln=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),en=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function un(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(n()(),u["\u0275eld"](1,0,null,null,3,"div",[["class","col-sm-12"]],null,null,null,null,null)),(n()(),u["\u0275eld"](2,0,null,null,1,"div",[["class","content-header"]],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Players"])),(n()(),u["\u0275eld"](4,0,null,null,0,"p",[["class","content-sub-header"]],null,null,null,null,null)),(n()(),u["\u0275eld"](5,0,null,null,68,"section",[["id","players"]],null,null,null,null,null)),(n()(),u["\u0275eld"](6,0,null,null,51,"div",[["class","card"]],null,null,null,null,null)),(n()(),u["\u0275eld"](7,0,null,null,2,"div",[["class","card-header"]],null,null,null,null,null)),(n()(),u["\u0275eld"](8,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Video Player"])),(n()(),u["\u0275eld"](10,0,null,null,47,"div",[["class","card-block"]],null,null,null,null,null)),(n()(),u["\u0275eld"](11,0,null,null,46,"div",[["class","row"]],null,null,null,null,null)),(n()(),u["\u0275eld"](12,0,null,null,45,"div",[["class","col-md-12 col-lg-12"]],null,null,null,null,null)),(n()(),u["\u0275eld"](13,0,null,null,44,"vg-player",[],[[2,"fullscreen",null],[2,"native-fullscreen",null],[2,"controls-hidden",null],[4,"z-index",null]],null,null,t.b,t.a)),u["\u0275prd"](512,null,r.VgAPI,r.VgAPI,[]),u["\u0275prd"](512,null,i.VgFullscreenAPI,i.VgFullscreenAPI,[]),u["\u0275prd"](512,null,a.VgControlsHidden,a.VgControlsHidden,[]),u["\u0275did"](17,1228800,null,1,s.VgPlayer,[u.ElementRef,r.VgAPI,i.VgFullscreenAPI,a.VgControlsHidden],null,null),u["\u0275qud"](603979776,1,{medias:1}),(n()(),u["\u0275eld"](19,0,null,0,1,"vg-overlay-play",[],[[2,"is-buffering",null]],[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==u["\u0275nov"](n,20).onClick()&&o),o},g,d)),u["\u0275did"](20,245760,null,0,c.VgOverlayPlay,[u.ElementRef,r.VgAPI,i.VgFullscreenAPI,a.VgControlsHidden],null,null),(n()(),u["\u0275eld"](21,0,null,0,1,"vg-buffering",[],[[2,"is-buffering",null]],null,null,m,p)),u["\u0275did"](22,245760,null,0,v.VgBuffering,[u.ElementRef,r.VgAPI],null,null),(n()(),u["\u0275eld"](23,0,null,0,5,"vg-scrub-bar",[],[[2,"hide",null]],[[null,"mousedown"],["document","mousemove"],["document","mouseup"],[null,"touchstart"],["document","touchmove"],["document","touchcancel"],["document","touchend"],[null,"keydown"]],function(n,l,e){var o=!0;return"mousedown"===l&&(o=!1!==u["\u0275nov"](n,24).onMouseDownScrubBar(e)&&o),"document:mousemove"===l&&(o=!1!==u["\u0275nov"](n,24).onMouseMoveScrubBar(e)&&o),"document:mouseup"===l&&(o=!1!==u["\u0275nov"](n,24).onMouseUpScrubBar(e)&&o),"touchstart"===l&&(o=!1!==u["\u0275nov"](n,24).onTouchStartScrubBar(e)&&o),"document:touchmove"===l&&(o=!1!==u["\u0275nov"](n,24).onTouchMoveScrubBar(e)&&o),"document:touchcancel"===l&&(o=!1!==u["\u0275nov"](n,24).onTouchCancelScrubBar(e)&&o),"document:touchend"===l&&(o=!1!==u["\u0275nov"](n,24).onTouchEndScrubBar(e)&&o),"keydown"===l&&(o=!1!==u["\u0275nov"](n,24).arrowAdjustVolume(e)&&o),o},y,b)),u["\u0275did"](24,245760,null,0,f.VgScrubBar,[u.ElementRef,r.VgAPI,a.VgControlsHidden],null,null),(n()(),u["\u0275eld"](25,0,null,0,1,"vg-scrub-bar-current-time",[],null,null,null,V,x)),u["\u0275did"](26,245760,null,0,k.VgScrubBarCurrentTime,[u.ElementRef,r.VgAPI],null,null),(n()(),u["\u0275eld"](27,0,null,0,1,"vg-scrub-bar-buffering-time",[],null,null,null,C,I)),u["\u0275did"](28,245760,null,0,P.VgScrubBarBufferingTime,[u.ElementRef,r.VgAPI],null,null),(n()(),u["\u0275eld"](29,0,null,0,21,"vg-controls",[],[[4,"pointer-events",null],[2,"hide",null]],null,null,S,F)),u["\u0275did"](30,4440064,null,0,A.VgControls,[r.VgAPI,u.ElementRef,a.VgControlsHidden],null,null),(n()(),u["\u0275eld"](31,0,null,0,1,"vg-play-pause",[],null,[[null,"click"],[null,"keydown"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==u["\u0275nov"](n,32).onClick()&&o),"keydown"===l&&(o=!1!==u["\u0275nov"](n,32).onKeyDown(e)&&o),o},R,z)),u["\u0275did"](32,245760,null,0,B.VgPlayPause,[u.ElementRef,r.VgAPI],null,null),(n()(),u["\u0275eld"](33,0,null,0,1,"vg-playback-button",[],null,[[null,"click"],[null,"keydown"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==u["\u0275nov"](n,34).onClick()&&o),"keydown"===l&&(o=!1!==u["\u0275nov"](n,34).onKeyDown(e)&&o),o},H,E)),u["\u0275did"](34,245760,null,0,M.VgPlaybackButton,[u.ElementRef,r.VgAPI],null,null),(n()(),u["\u0275eld"](35,0,null,0,1,"vg-time-display",[["vgFormat","mm:ss"],["vgProperty","current"]],null,null,null,j,D)),u["\u0275did"](36,245760,null,0,T.VgTimeDisplay,[u.ElementRef,r.VgAPI],{vgProperty:[0,"vgProperty"],vgFormat:[1,"vgFormat"]},null),(n()(),u["\u0275eld"](37,0,null,0,1,"vg-scrub-bar",[["style","pointer-events: none;"]],[[2,"hide",null]],[[null,"mousedown"],["document","mousemove"],["document","mouseup"],[null,"touchstart"],["document","touchmove"],["document","touchcancel"],["document","touchend"],[null,"keydown"]],function(n,l,e){var o=!0;return"mousedown"===l&&(o=!1!==u["\u0275nov"](n,38).onMouseDownScrubBar(e)&&o),"document:mousemove"===l&&(o=!1!==u["\u0275nov"](n,38).onMouseMoveScrubBar(e)&&o),"document:mouseup"===l&&(o=!1!==u["\u0275nov"](n,38).onMouseUpScrubBar(e)&&o),"touchstart"===l&&(o=!1!==u["\u0275nov"](n,38).onTouchStartScrubBar(e)&&o),"document:touchmove"===l&&(o=!1!==u["\u0275nov"](n,38).onTouchMoveScrubBar(e)&&o),"document:touchcancel"===l&&(o=!1!==u["\u0275nov"](n,38).onTouchCancelScrubBar(e)&&o),"document:touchend"===l&&(o=!1!==u["\u0275nov"](n,38).onTouchEndScrubBar(e)&&o),"keydown"===l&&(o=!1!==u["\u0275nov"](n,38).arrowAdjustVolume(e)&&o),o},y,b)),u["\u0275did"](38,245760,null,0,f.VgScrubBar,[u.ElementRef,r.VgAPI,a.VgControlsHidden],null,null),(n()(),u["\u0275eld"](39,0,null,0,1,"vg-time-display",[["vgFormat","mm:ss"],["vgProperty","left"]],null,null,null,j,D)),u["\u0275did"](40,245760,null,0,T.VgTimeDisplay,[u.ElementRef,r.VgAPI],{vgProperty:[0,"vgProperty"],vgFormat:[1,"vgFormat"]},null),(n()(),u["\u0275eld"](41,0,null,0,1,"vg-time-display",[["vgFormat","mm:ss"],["vgProperty","total"]],null,null,null,j,D)),u["\u0275did"](42,245760,null,0,T.VgTimeDisplay,[u.ElementRef,r.VgAPI],{vgProperty:[0,"vgProperty"],vgFormat:[1,"vgFormat"]},null),(n()(),u["\u0275eld"](43,0,null,0,1,"vg-track-selector",[],null,null,null,L,K)),u["\u0275did"](44,245760,null,0,O.VgTrackSelector,[u.ElementRef,r.VgAPI],null,null),(n()(),u["\u0275eld"](45,0,null,0,1,"vg-mute",[],null,[[null,"click"],[null,"keydown"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==u["\u0275nov"](n,46).onClick()&&o),"keydown"===l&&(o=!1!==u["\u0275nov"](n,46).onKeyDown(e)&&o),o},Y,Z)),u["\u0275did"](46,245760,null,0,U.VgMute,[u.ElementRef,r.VgAPI],null,null),(n()(),u["\u0275eld"](47,0,null,0,1,"vg-volume",[],null,[["document","mousemove"],["document","mouseup"],[null,"keydown"]],function(n,l,e){var o=!0;return"document:mousemove"===l&&(o=!1!==u["\u0275nov"](n,48).onDrag(e)&&o),"document:mouseup"===l&&(o=!1!==u["\u0275nov"](n,48).onStopDrag(e)&&o),"keydown"===l&&(o=!1!==u["\u0275nov"](n,48).arrowAdjustVolume(e)&&o),o},G,J)),u["\u0275did"](48,245760,null,0,$.VgVolume,[u.ElementRef,r.VgAPI],null,null),(n()(),u["\u0275eld"](49,0,null,0,1,"vg-fullscreen",[],null,[[null,"click"],[null,"keydown"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==u["\u0275nov"](n,50).onClick()&&o),"keydown"===l&&(o=!1!==u["\u0275nov"](n,50).onKeyDown(e)&&o),o},X,W)),u["\u0275did"](50,245760,null,0,Q.VgFullscreen,[u.ElementRef,r.VgAPI,i.VgFullscreenAPI],null,null),(n()(),u["\u0275eld"](51,0,[["media",1]],0,6,"video",[["crossorigin",""],["id","singleVideo"],["preload","auto"]],null,null,null,null,null)),u["\u0275did"](52,212992,[[1,4]],0,nn.VgMedia,[r.VgAPI,u.ChangeDetectorRef],{vgMedia:[0,"vgMedia"]},null),(n()(),u["\u0275eld"](53,0,null,null,0,"source",[["src","http://static.videogular.com/assets/videos/videogular.mp4"],["type","video/mp4"]],null,null,null,null,null)),(n()(),u["\u0275eld"](54,0,null,null,0,"source",[["src","http://static.videogular.com/assets/videos/videogular.ogg"],["type","video/ogg"]],null,null,null,null,null)),(n()(),u["\u0275eld"](55,0,null,null,0,"source",[["src","http://static.videogular.com/assets/videos/videogular.webm"],["type","video/webm"]],null,null,null,null,null)),(n()(),u["\u0275eld"](56,0,null,null,0,"track",[["default",""],["kind","subtitles"],["label","English"],["src","http://static.videogular.com/assets/subs/pale-blue-dot.vtt"],["srclang","en"]],null,null,null,null,null)),(n()(),u["\u0275eld"](57,0,null,null,0,"track",[["kind","subtitles"],["label","Espa\xf1ol"],["src","http://static.videogular.com/assets/subs/pale-blue-dot-es.vtt"],["srclang","es"]],null,null,null,null,null)),(n()(),u["\u0275eld"](58,0,null,null,15,"div",[["class","card"]],null,null,null,null,null)),(n()(),u["\u0275eld"](59,0,null,null,2,"div",[["class","card-header"]],null,null,null,null,null)),(n()(),u["\u0275eld"](60,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Audio Player"])),(n()(),u["\u0275eld"](62,0,null,null,11,"div",[["class","card-block"]],null,null,null,null,null)),(n()(),u["\u0275eld"](63,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(n()(),u["\u0275eld"](64,0,null,null,9,"div",[["class","col-md-12 col-lg-12"]],null,null,null,null,null)),(n()(),u["\u0275eld"](65,0,null,null,8,"vg-player",[],[[2,"fullscreen",null],[2,"native-fullscreen",null],[2,"controls-hidden",null],[4,"z-index",null]],null,null,t.b,t.a)),u["\u0275prd"](512,null,r.VgAPI,r.VgAPI,[]),u["\u0275prd"](512,null,i.VgFullscreenAPI,i.VgFullscreenAPI,[]),u["\u0275prd"](512,null,a.VgControlsHidden,a.VgControlsHidden,[]),u["\u0275did"](69,1228800,null,1,s.VgPlayer,[u.ElementRef,r.VgAPI,i.VgFullscreenAPI,a.VgControlsHidden],null,null),u["\u0275qud"](603979776,2,{medias:1}),(n()(),u["\u0275eld"](71,0,[["media1",1]],0,2,"audio",[["controls",""],["id","singleAudio"],["preload","auto"],["style","width: 100%"]],null,null,null,null,null)),u["\u0275did"](72,212992,[[2,4]],0,nn.VgMedia,[r.VgAPI,u.ChangeDetectorRef],{vgMedia:[0,"vgMedia"]},null),(n()(),u["\u0275eld"](73,0,null,null,0,"source",[["src","http://static.videogular.com/assets/audios/videogular.mp3"],["type","audio/mp3"]],null,null,null,null,null))],function(n,l){n(l,20,0),n(l,22,0),n(l,24,0),n(l,26,0),n(l,28,0),n(l,30,0),n(l,32,0),n(l,34,0),n(l,36,0,"current","mm:ss"),n(l,38,0),n(l,40,0,"left","mm:ss"),n(l,42,0,"total","mm:ss"),n(l,44,0),n(l,46,0),n(l,48,0),n(l,50,0),n(l,52,0,u["\u0275nov"](l,51)),n(l,72,0,u["\u0275nov"](l,71))},function(n,l){n(l,13,0,u["\u0275nov"](l,17).isFullscreen,u["\u0275nov"](l,17).isNativeFullscreen,u["\u0275nov"](l,17).areControlsHidden,u["\u0275nov"](l,17).zIndex),n(l,19,0,u["\u0275nov"](l,20).isBuffering),n(l,21,0,u["\u0275nov"](l,22).isBuffering),n(l,23,0,u["\u0275nov"](l,24).hideScrubBar),n(l,29,0,u["\u0275nov"](l,30).isAdsPlaying,u["\u0275nov"](l,30).hideControls),n(l,37,0,u["\u0275nov"](l,38).hideScrubBar),n(l,65,0,u["\u0275nov"](l,69).isFullscreen,u["\u0275nov"](l,69).isNativeFullscreen,u["\u0275nov"](l,69).areControlsHidden,u["\u0275nov"](l,69).zIndex)})}var on=u["\u0275ccf"]("app-player",ln,function(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"app-player",[],null,null,null,un,en)),u["\u0275did"](1,114688,null,0,ln,[],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),tn=e("OVs2"),rn=e("ZYCi"),an={title:"Player"},sn=function(){},cn=e("MdqY"),dn=e("SV7k"),gn=e("OlqA"),vn=e("c9mH");e.d(l,"PlayerModuleNgFactory",function(){return pn});var pn=u["\u0275cmf"](o,[],function(n){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[on]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,h.NgLocalization,h.NgLocaleLocalization,[u.LOCALE_ID,[2,h["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,r.VgAPI,r.VgAPI,[]),u["\u0275mpd"](4608,i.VgFullscreenAPI,i.VgFullscreenAPI,[]),u["\u0275mpd"](4608,tn.VgUtils,tn.VgUtils,[]),u["\u0275mpd"](4608,a.VgControlsHidden,a.VgControlsHidden,[]),u["\u0275mpd"](1073742336,h.CommonModule,h.CommonModule,[]),u["\u0275mpd"](1073742336,rn.p,rn.p,[[2,rn.u],[2,rn.l]]),u["\u0275mpd"](1073742336,sn,sn,[]),u["\u0275mpd"](1073742336,cn.VgCoreModule,cn.VgCoreModule,[]),u["\u0275mpd"](1073742336,dn.VgControlsModule,dn.VgControlsModule,[]),u["\u0275mpd"](1073742336,gn.VgOverlayPlayModule,gn.VgOverlayPlayModule,[]),u["\u0275mpd"](1073742336,vn.VgBufferingModule,vn.VgBufferingModule,[]),u["\u0275mpd"](1073742336,o,o,[]),u["\u0275mpd"](1024,rn.j,function(){return[[{path:"",component:ln,data:an}]]},[])])})}}]);