(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(38),i=t.n(o),l=(t(82),t(2)),c=t(3);function u(){var e=Object(l.a)(["\n    position: relative;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n"]);return u=function(){return e},e}var s=c.a.div(u()),p=t(10),v=t(16),d=t(74),m=t(13),f={isLoginFormOpen:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"TOGGLE_LOGIN_FORM":return Object(m.a)({},e,{isLoginFormOpen:n.loginBool});default:return e}},g={modalType:"",isActive:!1,isVisible:!1},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SHOW_MODAL":return Object(m.a)({},e,{modalType:n.payload.modalType,isActive:n.payload.modalActivityBool,isVisible:n.payload.modalActivityBool});case"HIDE_MODAL":return console.log("hiding modal"),Object(m.a)({},e,{isVisible:!1});case"DEACTIVATE_MODAL":return console.log("deactivating modal"),Object(m.a)({},e,{modalType:"",isActive:!1});default:return e}},w={currXp:0,isReseting:!1,currLevel:{level:null,xpFloor:null,nextLevel:null}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_CURR_LEVEL":return Object(m.a)({},e,{currLevel:n.currLevel});case"SET_CURR_XP":return Object(m.a)({},e,{currXp:n.currXp});case"CLEAR_XP":return w;default:return e}},O=Object(v.c)({loginReducer:h,modalReducer:b,xpBarReducer:x}),j=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.d;function y(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(v.e)(O,j(Object(v.a)(d.a)))}var L=t(4),E=t(5),C=t(8),A=t(6),k=t(7),z=function(e,n,t){return function(r){return r(n?{type:"SHOW_MODAL",payload:{modalType:e,modalActivityBool:n}}:(a=t,function(e){setTimeout(function(){e({type:"HIDE_MODAL"}),setTimeout(function(){e({type:"DEACTIVATE_MODAL"})},500)},a||0)}));var a}};function F(){var e=Object(l.a)(["\n    width: 100%;\n    height: 50px;\n"]);return F=function(){return e},e}var X=c.a.header(F());function S(){var e=Object(l.a)(["\n    width: ",";\n    height: ",";\n    margin: ",";\n    padding: ",";\n    display: ",";\n    .fas {\n        color: black;\n    }\n"]);return S=function(){return e},e}var I=c.a.img(S(),function(e){return e.width||"auto"},function(e){return e.height||"auto"},function(e){return e.margin||"0"},function(e){return e.padding||"0"},function(e){return e.display||"block"}),M=function(e){function n(){return Object(L.a)(this,n),Object(C.a)(this,Object(A.a)(n).apply(this,arguments))}return Object(k.a)(n,e),Object(E.a)(n,[{key:"render",value:function(){return a.a.createElement(X,null)}}]),n}(r.Component),R=Object(p.b)(function(e){return{}},{toggleModalAction:z})(M),T=t(15),_=t(59),B=t.n(_);B.a.initializeApp({apiKey:"AIzaSyAh7ssN8Jt8ywDtNUznq58sfyvya-mdRZ4",authDomain:"xp-bar.firebaseapp.com",databaseURL:"https://xp-bar.firebaseio.com/",projectId:"xp-bar",storageBucket:"xp-bar.appspot.com",messagingSenderId:"965104940223"});var D=B.a,V=t(75),U=t.n(V),G=function(e){switch(console.log("Current Xp "+e),!0){case e>=0&&e<300:return{level:1,xpFloor:0,nextLevel:300};case e>=300&&e<900:return{level:2,xpFloor:300,nextLevel:900};case e>=900&&e<2700:return{level:3,xpFloor:900,nextLevel:2700};case e>=2700&&e<6500:return{level:4,xpFloor:2700,nextLevel:6500};case e>=6500&&e<14e3:return{level:5,xpFloor:6500,nextLevel:14e3};case e>=14e3&&e<23e3:return{level:6,xpFloor:14e3,nextLevel:23e3};case e>=23e3&&e<34e3:return{level:7,xpFloor:23e3,nextLevel:34e3};case e>=34e3&&e<48e3:return{level:8,xpFloor:34e3,nextLevel:48e3};case e>=48e3&&e<64e3:return{level:9,xpFloor:48e3,nextLevel:64e3};case e>=64e3&&e<85e3:return{level:10,xpFloor:64e3,nextLevel:85e3};case e>=85e3&&e<1e5:return{level:11,xpFloor:85e3,nextLevel:1e5};case e>=1e5&&e<12e4:return{level:12,xpFloor:1e5,nextLevel:12e4};case e>=12e4&&e<14e4:return{level:13,xpFloor:12e4,nextLevel:14e4};case e>=14e4&&e<165e3:return{level:14,xpFloor:14e4,nextLevel:165e3};case e>=165e3&&e<195e3:return{level:15,xpFloor:165e3,nextLevel:195e3};case e>=195e3&&e<225e3:return{level:16,xpFloor:195e3,nextLevel:225e3};case e>=225e3&&e<265e3:return{level:17,xpFloor:225e3,nextLevel:265e3};case e>=265e3&&e<305e3:return{level:18,xpFloor:265e3,nextLevel:305e3};case e>=305e3&&e<355e3:return{level:19,xpFloor:305e3,nextLevel:355e3};case e>=355e3:return{level:20,xpFloor:355e3};default:return null}};function H(){var e=Object(l.a)(["\n    width: ",";\n    margin: 0 auto;\n    height: 100%;\n    border: 3px solid rgba(241,231,103,1);\n    border-image: url('/images/gold.jpg') 30;\n    border-radius: 25px;\n"]);return H=function(){return e},e}var N=c.a.div(H(),function(e){return e.percent||"80%"});function P(){var e=Object(l.a)(["\n    font-size: 1.5em;\n    color: #ffc22a;\n    position: absolute;\n    margin: 12px 0;\n    width: 80%;\n    text-align: center;\n"]);return P=function(){return e},e}var W=c.a.h4(P());function J(){var e=Object(l.a)(["\n    width: ",";\n    height: 100%;\n    background: linear-gradient(to left, rgb(142, 45, 226), rgb(74, 0, 224));\n    -webkit-transition: width 2s; /* For Safari 3.1 to 6.0 */\n    transition: width 1s\n    ","\n"]);return J=function(){return e},e}var q=c.a.div(J(),function(e){return e.percent||"0"},function(e){return e.isReseting?"\n         -webkit-transition: width 0s; /* For Safari 3.1 to 6.0 */\n         transition: width 0s\n    ":"\n        -webkit-transition: width 2s; /* For Safari 3.1 to 6.0 */\n         transition: width 1s\n    "});function Q(){var e=Object(l.a)(["\n    font-size: 20px;\n    width: ",";\n    text-align: ",";\n    margin: ",";\n"]);return Q=function(){return e},e}var K=c.a.h1(Q(),function(e){return e.width||"100%"},function(e){return e.textAlign||"left"},function(e){return e.margin||"0 auto"});function Y(){var e=Object(l.a)(["\n    width: 100%;\n    height: 50px;\n"]);return Y=function(){return e},e}var Z=c.a.div(Y());function $(){var e=Object(l.a)(["\n    margin: ",";\n    display: ","; \n    mask: ",";\n    #path12357{\n        mask: url('/images/gold.jpg') no-repeat 100% 100%;;\n    }\n"]);return $=function(){return e},e}Z.Level=K,Z.FillContainer=N,Z.CurrXp=W,Z.Fill=q;var ee=c.a.svg($(),function(e){return e.margin||"0 auto"},function(e){return e.display||"block"},function(e){return e.mask||"none"}),ne=function(e){function n(){return Object(L.a)(this,n),Object(C.a)(this,Object(A.a)(n).apply(this,arguments))}return Object(k.a)(n,e),Object(E.a)(n,[{key:"render",value:function(){return a.a.createElement(ee,Object.assign({},this.props,{mask:"url('/images/gold.jpg') no-repeat 100% 100%",id:"svg2",xlink:"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/2000/svg",height:"100%",width:"80%",viewBox:"0 0 200 115",version:"1.0"}),a.a.createElement("defs",null,a.a.createElement("pattern",{id:"img1",patternUnits:"userSpaceOnUse",width:"248",height:"248"},a.a.createElement("image",{href:"/images/gold.jpg",x:"0",y:"-80",width:"248",height:"248"})),"          "),a.a.createElement("path",{id:"path12357",fill:"url(#img1)",fillRule:"evenodd",d:"m93 0l-93 81v1l37 22-5 4 22 20h128v-10l1-3 6-3 3-7-1-13v-5l2-6-40-51 3-10v-1l-10 2-13-17-2-1-36-3h-2zm0 1v20l-22 5v1c-4 10-4 22 2 32v2c-4 9-2 19 3 27h-2l-4 4c-18-28-17-55-1-70 15-14 24-21 24-21zm2 0l36 3v20l-19 5v1h1l-3 14c-5-7-1-18 3-25v-1l-17.5 2.5-0.5-19.5zm38 4l12 16-11.5 2.5-0.5-18.5zm-24 15l-13.5 5v-2.5l13.5-2.5zm45 0.5l-6 2.5-1-1 7-1.5zm-8 2l1 1-13.5 4.5v-2.5l12.5-3zm-53 0.5v2c-5 2-11 3-16 1l16-3zm38 3v2l-13 1 13-3zm22 5l39 50-24 4-7 5c-4-10-2-22 1-32h1v-2h-1c-7-7-11-15-9-25zm-44 22l-12 2v-1l12-1zm-15 1v1.5l-18 3.5c5.13-4.175 12.928-4.616 18-5zm17 0.5l-14 4.5v-2l14-2.5zm-17 3v2.5c-5 1-11 1-16 0l16-2.5zm64-0.5l-22 3v-2c7-1.5 14.5-1 22-1zm2 1c-7.5 4-15.5 6.5-24 7v-3l24-4zm-28 1v1.5l-10 2.5 10-4zm-18 3l2 3-3 8s-1-7 1-11zm18 0.5v2.5h-13l13-2.5zm-63 29.5c-8 10-17.5 13-29 8l-38-19s3-4 7-6c22-12.5 43 6 60 17zm26-6v2l-13 1c4-1.5 8.5-2.5 13-3zm3 0l14 1-14 1v-2zm14 2c0.5 4.5 3.32 10.819 4 12v2l18-1v12c-14 2-20-5-25-17l-6-1-1-4h-4v-2l14-1zm-17 1v1l-6.5-0.5 6.5-0.5zm39 7v3l-13 1 13-4zm3 0l17 1-17 2v-3zm17 3c0 11-7 14.5-17 14v-12l17-2z"}))}}]),n}(r.Component),te=function(e){function n(){var e,t;Object(L.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(C.a)(this,(e=Object(A.a)(n)).call.apply(e,[this].concat(a)))).state={newXpInput:0,fanFare:new Audio(U.a)},t.handleClick=function(){var e=t.state.newXpInput;if(console.log("NewXp",e,typeof t.props.currXp),e>=t.props.currLevel.nextLevel){alert("Leveling up soon"),e=t.props.currLevel.nextLevel;var n=G(e);t.props.setCurrXpAction(e),setTimeout(function(){alert("Level Up!"),this.props.setCurrLevelAction(n)}.bind(Object(T.a)(Object(T.a)(t))),2e3)}else{t.props.setCurrXpAction(e);var r=G(e);t.props.setCurrLevelAction(r)}D.database().ref("xp").push(e)},t.handleXpStore=function(){localStorage.setItem("xp",t.props.currXp)},t}return Object(k.a)(n,e),Object(E.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",this.handleXpStore),D.database().ref().child("xp").on("value",function(n){if(console.log("Snapshot",n.val()),e.props.setCurrXpAction(n.val()),n.val()>=e.props.currLevel.nextLevel){var t=e.props.currLevel.nextLevel,r=G(n.val());e.props.setCurrXpAction(t),setTimeout(function(){this.state.fanFare.play(),this.props.toggleModalAction("levelUp",!0),this.props.setCurrLevelAction(r)}.bind(e),1e3)}else{var a=G(n.val());e.props.setCurrLevelAction(a)}})}},{key:"componentWillMount",value:function(){var e=localStorage.getItem("xp");if(console.log("Getting current xp",e),e){console.log("setting curr xp and level"),this.props.setCurrXpAction(e);var n=G(e);this.props.setCurrLevelAction(n)}}},{key:"componentWillUnmount",value:function(){this.handleClick(),window.removeEventListener("beforeunload",this.handleXpStore)}},{key:"render",value:function(){if(this.props.currLevel){var e=this.props.currXp-this.props.currLevel.xpFloor,n=this.props.currLevel.nextLevel-this.props.currLevel.xpFloor;console.log("Curr XP "+e,"goal "+n);var t=e/n*100;return console.log(t),a.a.createElement(Z,null,a.a.createElement(Z.Level,{width:"80%"},"Level: ",this.props.currLevel.level?this.props.currLevel.level:null),a.a.createElement(ne,{margin:"0 auto",display:"block"}),a.a.createElement(Z.FillContainer,null,a.a.createElement(Z.CurrXp,null,this.props.currXp," / ",this.props.currLevel.nextLevel),a.a.createElement(Z.Fill,{isReseting:this.props.isReseting,percent:t+"%"})))}return a.a.createElement("h1",null,"Loading")}}]),n}(r.Component),re=Object(p.b)(function(e){return{currXp:e.xpBarReducer.currXp,currLevel:e.xpBarReducer.currLevel}},{setCurrLevelAction:function(e){return function(n){return n({type:"SET_CURR_LEVEL",currLevel:e})}},setCurrXpAction:function(e){return function(n){return n({type:"SET_CURR_XP",currXp:e})}},toggleModalAction:z})(te);function ae(){var e=Object(l.a)(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n"]);return ae=function(){return e},e}function oe(){var e=Object(l.a)(["\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n"]);return oe=function(){return e},e}function ie(){var e=Object(l.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return ie=function(){return e},e}var le=Object(c.b)(ie()),ce={fadeIn:{time:"500ms",keyframes:Object(c.b)(oe())},fadeOut:{time:"500ms",keyframes:Object(c.b)(ae())},rotate:{time:"700ms",keyframes:le}};function ue(){var e=Object(l.a)(["\n    position: absolute;\n    width:100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.5);\n    z-index: 100;\n"]);return ue=function(){return e},e}var se=c.a.div(ue());function pe(){var e=Object(l.a)(["\n    display: flex;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n    width: 300px;\n    height: auto;\n    background-color: #fff;\n    z-index: 200;\n\n"]);return pe=function(){return e},e}var ve=c.a.div(pe());function de(){var e=Object(l.a)(["\n    display: flex;\n    width: ",";\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n    margin: 0 auto;\n"]);return de=function(){return e},e}var me=c.a.form(de(),function(e){return e.width||"100%"});function fe(){var e=Object(l.a)(["\n    display: flex;\n    width: 100%;\n    flex-flow: row nowrap;\n    margin: ",";\n    justify-content: ",";\n    align-items: ",";\n"]);return fe=function(){return e},e}var he=c.a.div(fe(),function(e){return e.margin||"0"},function(e){return e.justifyContent||"center"},function(e){return e.alignItems||"center"});function ge(){var e=Object(l.a)(["\n    width: ",";\n    height: 30px;\n    margin: ",";\n    color: #333333;\n    border: 3px solid #e7e7e7;\n    border-radius: 3px;\n"]);return ge=function(){return e},e}var be=c.a.input(ge(),function(e){return e.width||"calc(100% - 3px)"},function(e){return e.margin||"0"});function we(){var e=Object(l.a)(["\n    display: flex;\n    width: 100%;\n    flex-flow: column nowrap;\n    margin: ",";\n    justify-content: ",";\n    align-items: ",";\n"]);return we=function(){return e},e}var xe=c.a.div(we(),function(e){return e.margin||"0"},function(e){return e.justifyContent||"center"},function(e){return e.alignItems||"center"});function Oe(){var e=Object(l.a)(["\n    font-size: 1em;\n    width: 100%;\n    text-align: left;\n    margin: 0.5em 0;\n    font-style: italic;\n"]);return Oe=function(){return e},e}var je=c.a.label(Oe());function ye(){var e=Object(l.a)(["\n    width: ",";\n    height: 40px;\n    max-width: 300px;\n    margin: 1em auto;\n    color: #ffffff;\n    font-size: 1em;\n    font-weight: bold;\n    border-radius: 5px;\n    background-color: #ffc22a;\n"]);return ye=function(){return e},e}var Le=c.a.button(ye(),function(e){return e.width||"100%"});function Ee(){var e=Object(l.a)(["\n    font-size: 1em;\n    width: ",";\n    text-align: ",";\n    margin: ",";\n"]);return Ee=function(){return e},e}var Ce=c.a.q(Ee(),function(e){return e.width||"100%"},function(e){return e.textAlign||"left"},function(e){return e.margin||"0 auto"});function Ae(){var e=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    transition: visibility "," linear;\n    animation: "," "," linear;\n    visibility: ",";\n"]);return Ae=function(){return e},e}var ke=c.a.div(Ae(),ce.fadeIn.time,function(e){return e.isVisible?ce.fadeIn.keyframes:ce.fadeOut.keyframes},ce.fadeIn.time,function(e){return e.isVisible?"visible":"hidden"});ke.Overlay=se,ke.Box=ve,ke.Close=I,ke.Icon=I,ke.Heading=K,ke.Quote=Ce,ke.Form=me,ke.FormRow=he,ke.FieldGroup=xe,ke.Input=be,ke.Label=je,ke.Button=Le;var ze=t(39);function Fe(){var e=Object(l.a)(["\n    width: 100%;\n    height: 100%;\n"]);return Fe=function(){return e},e}var Xe=c.a.div(Fe()),Se=function(e){function n(){var e,t;Object(L.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(C.a)(this,(e=Object(A.a)(n)).call.apply(e,[this].concat(a)))).state={username:"",password:""},t.handleClose=function(){t.props.toggleModalAction(null,!1)},t.handleClick=function(){alert(t.state.username)},t.handleInputChange=function(e){t.setState(Object(ze.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault()},t}return Object(k.a)(n,e),Object(E.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(Xe,null,a.a.createElement(ke.Form,{width:"90%",onSubmit:this.handleSubmit},a.a.createElement(ke.FormRow,null,a.a.createElement(ke.Close,{margin:"1em 0 0 auto",width:"20px",height:"20px",padding:"5px",src:"/xp-barimages/cancel.svg",onClick:this.handleClose})),a.a.createElement(ke.Heading,null,"Sign In"),a.a.createElement(ke.FieldGroup,{id:"username",margin:"0.25em 0"},a.a.createElement(ke.Label,{htmlFor:"username"},"Username"),a.a.createElement(ke.Input,{id:"username",name:"username",type:"input",value:this.state.username,onChange:function(n){return e.setState({username:n.target.value})}})),a.a.createElement(ke.FieldGroup,{id:"password",margin:"0.25em 0"},a.a.createElement(ke.Label,{htmlFor:"password"},"Password"),a.a.createElement(ke.Input,{id:"password",name:"password",type:"password",value:this.state.password,onChange:function(n){return e.setState({password:n.target.value})}}))))}}]),n}(r.Component),Ie=Object(p.b)(function(e){return{}},{toggleModalAction:z})(Se),Me=function(e){function n(){return Object(L.a)(this,n),Object(C.a)(this,Object(A.a)(n).apply(this,arguments))}return Object(k.a)(n,e),Object(E.a)(n,[{key:"render",value:function(){return a.a.createElement(ee,Object.assign({},this.props,{width:"60px",height:"60px",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1000 1000","enable-background":"new 0 0 1000 1000",xmlSpace:"preserve"}),a.a.createElement("metadata",null," Svg Vector Icons : http://www.onlinewebfonts.com/icon "),a.a.createElement("g",null,a.a.createElement("g",{transform:"translate(0.000000,511.000000) scale(0.100000,-0.100000)"},a.a.createElement("path",{d:"M637.1,3280.4c-183.9-55.2-259.5-92-345.3-165.5c-91.9-81.7-106.3-106.3-145.1-257.5c-45-171.6-24.5-235,112.4-384.1c132.8-143,183.9-228.9,183.9-314.7c0-73.6-94-257.5-190-378c-38.8-47-87.9-118.5-108.3-157.3c-47-94-49-273.8,0-363.7c55.2-106.3,188-222.7,335.1-294.2l136.9-67.4l480.2-14.3c353.5-8.2,543.5-24.5,725.4-57.2c134.9-24.5,275.8-49,312.6-55.2l65.4-12.3V904c0,226.8,116.5,745.8,202.3,899.1c10.2,18.4-22.5,67.4-104.2,151.2c-141,147.1-300.4,382.1-433.2,639.6c-175.7,341.2-376,559.9-617.1,668.2C1109.1,3323.3,810.8,3333.5,637.1,3280.4z"}),a.a.createElement("path",{d:"M4713.5,3296.7c-322.8-40.9-754-212.5-1074.8-427c-200.2-134.9-598.7-533.3-729.5-731.5c-222.7-335.1-359.6-688.6-416.8-1066.6c-53.1-363.7,16.4-1452.8,118.5-1857.4c89.9-359.6,298.3-645.7,535.3-733.5c255.4-96,388.2-190,474.1-339.2c26.6-45,85.8-194.1,132.8-329c102.2-302.4,153.2-378,306.5-478.1c406.6-263.6,1430.3-265.6,1834.9-4.1c151.2,100.1,206.4,183.9,310.6,482.2c47,134.9,100.1,271.8,116.5,304.4c61.3,120.6,185.9,228.8,337.1,296.3c259.5,114.4,290.1,132.8,396.4,239.1c171.7,167.5,292.2,470,353.5,876.6c71.5,478.1,92,1440.5,36.8,1681.6c-122.6,529.2-347.4,933.8-737.6,1324.1c-255.4,255.4-453.6,396.4-756,541.5C5522.6,3280.4,5126.3,3349.8,4713.5,3296.7z M4147.5,244c175.7-36.8,296.3-104.2,347.4-190c53.1-89.9,79.7-322.9,55.2-490.4c-24.5-171.6-120.6-365.8-226.8-463.8c-114.4-102.2-310.6-192.1-457.7-206.4c-261.5-26.6-641.6,91.9-801,251.3c-114.4,114.4-155.3,214.6-165.5,408.7c-20.4,390.3,167.5,617.1,578.3,700.8C3614.2,280.8,4000.4,276.7,4147.5,244z M6542.3,233.8c382.1-98.1,537.4-302.4,517-682.5c-6.1-134.9-20.4-185.9-67.4-275.8c-104.2-190-331-318.8-647.7-369.8c-206.4-34.7-351.5-14.3-525.1,73.6c-314.6,157.3-467.9,482.2-412.8,874.5c24.5,181.9,59.3,245.2,167.6,308.5C5769.9,276.7,6237.8,311.4,6542.3,233.8z M5095.6-914.6c67.4-32.7,94-83.8,220.7-404.6c118.5-306.5,130.8-376,81.7-467.9c-42.9-83.8-128.7-112.4-306.5-98.1c-81.7,6.1-183.9,2-228.9-6.1c-165.5-38.8-333.1,69.5-333.1,214.6c0,67.4,143,470,226.8,637.5C4834-885.9,4950.5-843,5095.6-914.6z"}),a.a.createElement("path",{d:"M8804.2,3282.4c-271.8-98.1-494.5-329-688.6-719.2c-114.4-230.9-277.9-467.9-427.1-617.1l-132.8-134.8l69.5-202.3c75.6-220.7,122.6-455.6,145.1-707c10.2-132.8,18.4-157.3,47-149.2c273.8,81.7,735.6,134.9,1176.9,134.9c388.2,2,474,22.5,672.2,163.5c251.3,181.9,298.3,427.1,124.6,668.2c-294.3,404.6-302.4,478.1-73.6,729.5c161.4,177.8,179.8,232.9,134.8,410.7c-36.8,143-75.6,200.2-188,286.1C9472.4,3294.6,9035.1,3364.1,8804.2,3282.4z"}),a.a.createElement("path",{d:"M7645.6-740.9c-51.1-273.8-202.3-613-339.2-754l-61.3-63.3l138.9-83.8c486.3-290.1,764.2-559.9,1013.5-986.9c134.9-230.9,271.8-365.7,435.2-425c247.2-94,449.5-32.7,547.6,165.5c28.6,57.2,53.1,122.6,53.1,143c0,83.8,96,279.9,255.4,517c212.5,316.7,239.1,406.6,190,647.7c-57.2,273.8-149.2,408.7-331,488.3c-87.9,38.8-159.4,47-472,59.3l-367.8,16.3l-490.4,163.5c-269.7,89.9-504.7,169.6-523.1,177.8C7668.1-665.3,7657.9-679.6,7645.6-740.9z"}),a.a.createElement("path",{d:"M1771.1-855.3L1291-1016.7l-367.8-16.3c-316.7-12.3-382.1-20.4-476.1-61.3c-136.9-59.3-235-173.7-288.1-335.1c-104.2-314.6-77.7-467.9,138.9-784.6c177.8-255.4,214.5-329,257.5-496.5c18.4-71.5,55.2-167.5,81.7-212.5c96-167.5,300.4-216.6,535.4-128.7c151.2,55.2,337.1,239.1,433.2,425c169.6,326.9,447.5,617.1,837.8,872.5c130.8,85.8,245.2,163.5,255.4,171.6c10.2,8.2-18.4,57.2-63.3,108.3c-108.3,122.6-218.6,353.5-286.1,594.6c-30.6,106.3-65.4,192.1-77.6,192.1C2261.5-689.8,2034.7-765.4,1771.1-855.3z"}))))}}]),n}(r.Component);function Re(){var e=Object(l.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: middle;\n    width: 100%;\n    height: 100%;\n"]);return Re=function(){return e},e}var Te=c.a.div(Re()),_e=function(e){function n(){var e,t;Object(L.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(C.a)(this,(e=Object(A.a)(n)).call.apply(e,[this].concat(a)))).handleClick=function(){},t}return Object(k.a)(n,e),Object(E.a)(n,[{key:"render",value:function(){return a.a.createElement(Te,null,a.a.createElement(Me,null),a.a.createElement(ke.Heading,{textAlign:"center",margin:"0.5em 0"},"Ye be level 5 now!"),a.a.createElement(ke.Quote,{textAlign:"Center",margin:"0.5em 0"},"In an honest service there is thin commons, low wages, and hard labor...No, a merry life and a short one, shall be my motto."),a.a.createElement(ke.Button,{onClick:this.props.toggleModalAction,width:"60%"},"Continue"))}}]),n}(r.Component),Be=Object(p.b)(function(e){return{}},{toggleModalAction:z})(_e),De=function(e){function n(){var e,t;Object(L.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=Object(C.a)(this,(e=Object(A.a)(n)).call.apply(e,[this].concat(o)))).renderModal=function(){switch(t.props.modalType){case"login":return a.a.createElement(Ie,null);case"levelUp":return a.a.createElement(Be,null);default:return a.a.createElement("h1",null,"Invalid Modal Type")}},t}return Object(k.a)(n,e),Object(E.a)(n,[{key:"render",value:function(){return console.log("rendering"),a.a.createElement(ke,{isVisible:this.props.isVisible},a.a.createElement(ke.Overlay,null),a.a.createElement(ke.Box,null,this.renderModal()))}}]),n}(r.Component),Ve=Object(p.b)(function(e){return{modalType:e.modalReducer.modalType,isVisible:e.modalReducer.isVisible}},{})(De);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(function(){return a.a.createElement(p.a,{store:y()},a.a.createElement(s,null,a.a.createElement(R,null),a.a.createElement(re,null),a.a.createElement(Ve,null)))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},75:function(e,n,t){e.exports=t.p+"static/media/LevelUp.5ee8aef7.wav"},77:function(e,n,t){e.exports=t(142)},82:function(e,n,t){}},[[77,1,2]]]);
//# sourceMappingURL=main.3a616acf.chunk.js.map