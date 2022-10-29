"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[652],{75276:function(e,n,t){var r=t(85893),a=t(68527),o=t(20949),i=t(14382),c=t(13365),l=t(82138),d=t(81961),s=t(94045),p=t(57277),u=t(67294),b=t(83897),f=t(61454);n.Z=function(e){var n=e.resetState,t=e.id,m=e.submitHandler,g=e.gameStyle,_=e.gameStatus,x=(0,l.Z)("edit-game"),k=x.t,h=x.lang,w=(0,p.$x)(t),y=w.owner,v=w.entryPrice,j=w.countDownDuration,C=w.primaryWinnerPercentage,z=w.secondaryWinnerPercentage,O=w.ownerPercentage,S=w.gameInfoStatus,P=(0,u.useState)(),N=P[0],T=P[1],I=(0,u.useState)(""),Z=I[0],M=I[1],B=(0,u.useState)(),E=B[0],D=B[1],G=(0,u.useState)(""),X=G[0],A=G[1],W=(0,u.useState)(),L=W[0],J=W[1],F=(0,u.useState)(""),R=F[0],V=F[1],$=(0,u.useState)(),H=$[0],Q=$[1],U=(0,u.useState)(""),q=U[0],K=U[1],Y=(0,u.useState)(),ee=Y[0],ne=Y[1],te=(0,u.useState)(""),re=te[0],ae=te[1],oe=function(){console.log("ResetGetter:resetNow"),T((0,s.aQ)(v,0)),D(parseInt(j)),J(parseInt(O)),Q(parseInt(C)),ne(parseInt(z))};(0,u.useEffect)((function(){oe()}),[n]),(0,u.useEffect)((function(){y.toLowerCase()!=d.je&&oe()}),[y]);var ie=function(e,n){n(isNaN(e)?"":parseInt(e))},ce=!1;return S==d.J_.pending?(0,r.jsx)(a.xu,{d:"flex",justifyContent:"center",alignItems:"flex-start",children:(0,r.jsx)(c.Z,{isLoading:!0,children:""})}):(0,r.jsxs)("form",{onSubmit:function(e){try{e.preventDefault()}catch(a){}ce=!1,M(""),A(""),V(""),K(""),ae(""),(0,s.N4)(N)&&(ce=!0,M(k("entry-price-empty-error"))),N<d.bB.minEntryPrice&&(ce=!0,M(k("entry-price-empty-error"))),(0,s.N4)(E)&&(ce=!0,A(k("countdown-empty-error"))),E<d.bB.gameMinCountdown&&(ce=!0,A(k("countdown-min-error",[d.bB.gameMinCountdown],!0))),E>d.bB.gameMaxCountdown&&(console.log("Form: ".concat(j,"Input | isNaN ").concat(E," = $").concat(isNaN(E)," | gt: ").concat(E>d.bB.gameMaxCountdown)),ce=!0,A(k("countdown-max-error",[d.bB.gameMaxCountdown],!0)));var n=!0,t=!0,r=!0;((0,s.N4)(L)||L<1)&&(ce=!0,n=!1,V(k("owner-empty-error"))),((0,s.N4)(H)||L<1)&&(ce=!0,t=!1,K(k("primary-empty-error"))),((0,s.N4)(ee)||L<1)&&(ce=!0,r=!1,ae(k("secondary-empty-error"))),n&&t&&r&&L+H+ee!=100&&(console.log("Form: ".concat(L+H+ee," != 100")),ce=!0,V(k("percentage-error")),K(k("percentage-error")),ae(k("percentage-error"))),!ce&&m&&(y.toLowerCase()==d.je?m({entryPrice:(0,s.kz)(N).toString(),countDownDuration:E,ownerPercentage:L,primaryWinnerPercentage:H,secondaryWinnerPercentage:ee}):m({entryPrice:N==v?0:(0,s.kz)(N).toString(),countDownDuration:E==j?0:E,ownerPercentage:L==O?0:L,primaryWinnerPercentage:H==C?0:H,secondaryWinnerPercentage:ee==z?0:ee}))},children:[(0,r.jsx)(i.Z,{okText:k("common:ok"),mb:4,borderColor:(0,o.ff)("rgba(0,0,0,0.16)","rgba(255,255,255,0.16)"),title:"".concat(k("entry-price")),name:"entry-price",type:"number",errorMessage:Z,infoText:k("info-text"),info:k("entry-price-desc"),helperText:k("entry-price-help",[b.Z.format(d.bB.minEntryPrice,{locale:h})]),value:N,onChange:function(e){return ie(e.target.value,T)}}),(0,r.jsx)(i.Z,{okText:k("common:ok"),mb:4,borderColor:(0,o.ff)("rgba(0,0,0,0.16)","rgba(255,255,255,0.16)"),title:"".concat(k("countdown")),name:"countdown",type:"number",errorMessage:X,infoText:k("info-text"),info:k("countdown-desc"),helperText:k("countdown-helper-text",[b.Z.format(d.bB.gameMinCountdown,{locale:h}),b.Z.format(d.bB.gameMaxCountdown,{locale:h})]),value:E,onChange:function(e){return ie(e.target.value,D)}}),(0,r.jsx)(i.Z,{okText:k("common:ok"),mb:4,borderColor:(0,o.ff)("rgba(0,0,0,0.16)","rgba(255,255,255,0.16)"),title:"".concat(k("owner-percentage")),name:"owner-percentage",type:"number",errorMessage:R,infoText:k("info-text"),info:k("owner-percentage-desc"),placeholder:15,value:L,onChange:function(e){return ie(e.target.value,J)}}),(0,r.jsx)(i.Z,{okText:k("common:ok"),mb:4,borderColor:(0,o.ff)("rgba(0,0,0,0.16)","rgba(255,255,255,0.16)"),title:"".concat(k("primary-percentage")),name:"primary-percentage",type:"number",errorMessage:q,infoText:k("info-text"),info:k("primary-percentage-desc"),placeholder:65,value:H,onChange:function(e){return ie(e.target.value,Q)}}),(0,r.jsx)(i.Z,{okText:k("common:ok"),mb:4,borderColor:(0,o.ff)("rgba(0,0,0,0.16)","rgba(255,255,255,0.16)"),title:"".concat(k("secondary-percentage")),name:"secondary-percentage",type:"number",errorMessage:re,infoText:k("info-text"),info:k("secondary-percentage-desc"),placeholder:20,value:ee,onChange:function(e){return ie(e.target.value,ne)}}),(0,r.jsx)(f.Z,{my:4,width:"full",type:"submit",textTransform:"capitalize",disabled:"italic"==g,fontStyle:g,children:k(_)})]})}},14382:function(e,n,t){t.d(n,{Z:function(){return _}});var r=t(85893),a=t(79762),o=t(68527),i=t(26723),c=t(4612),l=t(86455),d=t.n(l),s=t(94045),p=t(20945),u=t(65988);function b(e){e.isGlobal;return(0,r.jsx)(u.default,{id:"419935b8c322d923",children:".react-datetime-picker {display:-webkit-inline-box;\ndisplay:-webkit-inline-flex;\ndisplay:-ms-inline-flexbox;\ndisplay:inline-flex;\nposition:relative;\nwidth:100%}\n.react-datetime-picker, .react-datetime-picker *, .react-datetime-picker *:before, .react-datetime-picker *:after {-moz-box-sizing:border-box;\n-webkit-box-sizing:border-box;\nbox-sizing:border-box}\n.react-datetime-picker--disabled {background-color:#f0f0f0;\ncolor:#6d6d6d}\n.react-datetime-picker__wrapper {display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-box-flex:1;\n-webkit-flex-grow:1;\n-ms-flex-positive:1;\nflex-grow:1;\n-webkit-flex-shrink:0;\n-ms-flex-negative:0;\nflex-shrink:0;\nwidth:100%;\nmin-width:0px;\noutline:2px solid transparent;\noutline-offset:2px;\nposition:relative;\n-webkit-appearance:none;\n-moz-appearance:none;\n-ms-appearance:none;\n-webkit-appearance:none;\n-moz-appearance:none;\n-ms-appearance:none;\nappearance:none;\ntransition-property:var(--chakra-transition-property-common);\ntransition-duration:var(--chakra-transition-duration-normal);\nfont-size:var(--chakra-fontSizes-md);\n-webkit-padding-start:var(--chakra-space-4);\npadding-inline-start:var(--chakra-space-4);\n-webkit-padding-end:var(--chakra-space-4);\npadding-inline-end:var(--chakra-space-4);\nheight:var(--chakra-sizes-10);\nborder-radius:var(--chakra-radii-md);\nborder:1px solid;\nborder-color:inherit;\nbackground:inherit}\n.react-datetime-picker__inputGroup {min-width:calc(4px + (4px * 3) + 0.54em * 6 + 0.217em * 2);\n-webkit-box-flex:1;\n-webkit-flex-grow:1;\n-ms-flex-positive:1;\nflex-grow:1;\npadding:0 2px}\n.react-datetime-picker__inputGroup__divider {padding:1px 0;\nwhite-space:pre}\n.react-datetime-picker__inputGroup__input {min-width:0.54em;\nheight:calc(100% - 2px);\nposition:relative;\npadding:1px;\nborder:0;\nbackground:none;\nfont:inherit;\nbox-sizing:content-box;\n-moz-appearance:textfield}\n.react-datetime-picker__inputGroup__input::-webkit-outer-spin-button, .react-datetime-picker__inputGroup__input::-webkit-inner-spin-button {-webkit-appearance:none;\nmargin:0}\n.react-datetime-picker__inputGroup__input:invalid {background:rgba(255, 0, 0, 0.1)}\n.react-datetime-picker__inputGroup__input--hasLeadingZero {margin-left:-0.54em;\npadding-left:calc(1px + 0.54em)}\n.react-datetime-picker__inputGroup__amPm {font:inherit;\n-moz-appearance:menulist}\n.react-datetime-picker__button {border:0;\nbackground:transparent;\npadding:4px 6px}\n.react-datetime-picker__button:enabled {cursor:pointer}\n.react-datetime-picker__button:enabled:hover .react-datetime-picker__button__icon, .react-datetime-picker__button:enabled:focus .react-datetime-picker__button__icon {stroke:#0078d7}\n.react-datetime-picker__button:disabled .react-datetime-picker__button__icon {stroke:#6d6d6d}\n.react-datetime-picker__button svg {display:inherit}\n.react-datetime-picker__calendar, .react-datetime-picker__clock {position:absolute;\ntop:100%;\nleft:0;\nz-index:1}\n.react-datetime-picker__calendar--closed, .react-datetime-picker__clock--closed {display:none}\n.react-datetime-picker__calendar {width:350px;\nmax-width:100vw}\n.react-datetime-picker__calendar .react-calendar {border-width:thin}\n.react-datetime-picker__clock {width:200px;\nheight:200px;\nmax-width:100vw;\npadding:25px;\nborder-radius:var(--chakra-radii-md);\nborder:1px solid;\nborder-color:inherit}\n.react-calendar {width:350px;\nmax-width:100%;\nfont-family:Arial, Helvetica, sans-serif;\nline-height:1.125em;\nborder-radius:var(--chakra-radii-md);\nborder:1px solid;\nborder-color:inherit}\n.chakra-ui-light .react-calendar, .chakra-ui-light .react-datetime-picker__clock {background:rgb(255, 255, 255)!important}\n.chakra-ui-dark .react-calendar, .chakra-ui-dark .react-datetime-picker__clock {background:rgb(39, 38, 44)!important}\n.react-calendar--doubleView {width:700px}\n.react-calendar--doubleView .react-calendar__viewContainer {display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\nmargin:-0.5em}\n.react-calendar--doubleView .react-calendar__viewContainer >* {width:50%;\nmargin:0.5em}\n.react-calendar, .react-calendar *, .react-calendar *:before, .react-calendar *:after {-moz-box-sizing:border-box;\n-webkit-box-sizing:border-box;\nbox-sizing:border-box}\n.react-calendar button {margin:0;\nborder:0;\noutline:none}\n.react-calendar button:enabled:hover {cursor:pointer}\n.react-calendar__navigation {display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\nheight:44px;\nmargin-bottom:1em}\n.react-calendar__navigation button {min-width:44px;\nbackground:none}\n.react-calendar__navigation button:disabled {background-color:#f0f0f0}\n.react-calendar__navigation button:enabled:hover, .react-calendar__navigation button:enabled:focus {background-color:#e6e6e6}\n.react-calendar__month-view__weekdays {text-align:center;\ntext-transform:uppercase;\nfont-weight:bold;\nfont-size:0.75em}\n.react-calendar__month-view__weekdays__weekday {padding:0.5em}\n.react-calendar__month-view__weekNumbers .react-calendar__tile {display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\n-webkit-justify-content:center;\njustify-content:center;\nfont-size:0.75em;\nfont-weight:bold}\n.react-calendar__month-view__days__day--weekend {color:#d10000}\n.react-calendar__month-view__days__day--neighboringMonth {color:#757575}\n.react-calendar__year-view .react-calendar__tile, .react-calendar__decade-view .react-calendar__tile, .react-calendar__century-view .react-calendar__tile {padding:2em 0.5em}\n.react-calendar__tile {max-width:100%;\npadding:10px 6.6667px;\nbackground:none;\ntext-align:center;\nline-height:16px}\n.react-calendar__tile:disabled {background-color:#f0f0f0}\n.react-calendar__tile:enabled:hover, .react-calendar__tile:enabled:focus {background-color:#e6e6e6}\n.react-calendar__tile--now {background:#ffff76}\n.react-calendar__tile--now:enabled:hover, .react-calendar__tile--now:enabled:focus {background:#ffffa9}\n.react-calendar__tile--hasActive {background:#76baff}\n.react-calendar__tile--hasActive:enabled:hover, .react-calendar__tile--hasActive:enabled:focus {background:#a9d4ff}\n.react-calendar__tile--active {background:#006edc;\ncolor:white}\n.react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus {background:#1087ff}\n.react-calendar--selectRange .react-calendar__tile--hover {background-color:#e6e6e6}\n.react-clock {display:block!important;\nposition:relative}\n.react-clock, .react-clock *, .react-clock *:before, .react-clock *:after {-moz-box-sizing:border-box;\n-webkit-box-sizing:border-box;\nbox-sizing:border-box}\n.react-clock__face {position:absolute;\ntop:0;\nbottom:0;\nleft:0;\nright:0;\nborder:1px solid black;\nborder-radius:50%}\n.react-clock__hand {position:absolute;\ntop:0;\nbottom:0;\nleft:50%;\nright:50%}\n.react-clock__hand__body {position:absolute;\nbackground-color:black;\n-webkit-transform:translateX(-50%);\n-moz-transform:translateX(-50%);\n-ms-transform:translateX(-50%);\ntransform:translateX(-50%)}\n.react-clock__mark {position:absolute;\ntop:0;\nbottom:0;\nleft:50%;\nright:50%}\n.react-clock__mark__body {position:absolute;\nbackground-color:black;\n-webkit-transform:translateX(-50%);\n-moz-transform:translateX(-50%);\n-ms-transform:translateX(-50%);\ntransform:translateX(-50%)}\n.react-clock__mark__number {position:absolute;\nleft:-40px;\nwidth:80px;\ntext-align:center}\n.react-clock__second-hand__body {background-color:red}"})}var f=t(31567);function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function g(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var _=function(e){var n=e.title,t=e.name,l=e.type,u=e.locale,_=e.value,x=e.onChange,k=e.errorMessage,h=e.helperText,w=e.info,y=e.infoText,v=e.okText,j=e.placeholder,C=g(e,["title","name","type","locale","value","onChange","errorMessage","helperText","info","infoText","okText","placeholder"]),z=(0,f.$)().lang;return(0,r.jsxs)(a.NI,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){m(e,n,t[n])}))}return e}({isInvalid:!(0,s.N4)(k)},C,{children:[(0,s.N4)(w)?(0,r.jsx)(a.lX,{textTransform:"capitalize",children:n}):(0,r.jsxs)(o.Ug,{flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",children:[(0,r.jsx)(a.lX,{textTransform:"capitalize",children:n}),w?(0,r.jsx)(i.zx,{size:"xs",marginInlineStart:"0px !important",marginInlineEnd:"0px !important",p:"3px",onClick:function(){return e=w,void d().fire({icon:"info",text:e,confirmButtonText:v,showCancelButton:!1});var e},children:y||"?"}):null]}),"date"!=l?(0,r.jsx)(c.II,{name:t,type:l,placeholder:j||"",value:_,onChange:x,errorBorderColor:"red.300",isInvalid:!(0,s.N4)(k)}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.Z,{locale:u||z,onChange:x,value:_}),(0,r.jsx)(b,{})]}),(0,s.N4)(k)?null:(0,r.jsx)(a.J1,{children:k}),(0,s.N4)(h)?null:(0,r.jsx)(a.Q6,{children:h})]}))}},61454:function(e,n,t){var r=t(85893),a=t(20949),o=t(26723);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}n.Z=function(e){var n=e.as,t=e.children,l=e.variant,d=c(e,["as","children","variant"]),s=(0,a.ff)("colorAccent.light","colorAccent.dark"),p=(0,a.ff)("colorAccentDestination.light","colorAccentDestination.dark");return(0,r.jsx)(o.zx,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}({as:n||"button",d:"inline-flex",justifyContent:"center",alignItems:"center",p:"0px 24px",h:"48px",letterSpacing:"0.03em",textAlign:"center",borderRadius:"16px",bg:"outline"==l?"transparent":s,border:"outline"==l?"2px solid":"none",borderColor:"outline"==l?p:"transparent",color:"outline"==l?p:"#fff",boxShadow:"ghost"==l||"outline"==l?"none":"rgb(14 14 44 / 40%) 0px -1px 0px 0px inset",opacity:"ghost"==l?"0.8":"1",transition:"background-color 0.2s ease 0s, opacity 0.2s ease 0s",_hover:{opacity:"0.65",bg:s,color:"#fff",border:"none !important"},_disabled:{opacity:"0.65",cursor:"not-allowed"}},d,{children:t}))}},80109:function(e,n,t){t.d(n,{k:function(){return s}});var r=t(35666),a=t.n(r),o=t(67294),i=t(77044),c=t(81961),l=t(94045);function d(e,n,t,r,a,o,i){try{var c=e[o](i),l=c.value}catch(d){return void t(d)}c.done?n(l):Promise.resolve(l).then(r,a)}var s=function(e,n,t){c.J_.pending,c.J_.ok,c.J_.notOk;var r=(0,i.Ge)().library,s=(0,o.useState)(),p=s[0],u=s[1];return(0,o.useEffect)((function(){var o,i=(o=a().mark((function o(){return a().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r.once(e,(function(a){r.removeListener(e,(function(){})),u(a),1==a.status?n&&n(a):t&&t(a)}));case 1:case"end":return a.stop()}}),o)})),function(){var e=this,n=arguments;return new Promise((function(t,r){var a=o.apply(e,n);function i(e){d(a,t,r,i,c,"next",e)}function c(e){d(a,t,r,i,c,"throw",e)}i(void 0)}))});return r&&!(0,l.N4)(e)?i():u(null),function(){!(0,l.N4)(e)&&r&&r.removeListener(e,(function(){return u(null)}))}}),[r,e]),p}}}]);