(window.webpackJsonp=window.webpackJsonp||[]).push([[10,6],{413:function(t,e,r){"use strict";r(13),r(11),r(12),r(4),r(15),r(10),r(16);var n=r(2),o=(r(28),r(198),r(199),r(414),r(197)),c=r(433),l=r(83),d=r(9);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},414:function(t,e,r){var content=r(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("e23b7040",content,!0,{sourceMap:!1})},415:function(t,e,r){var n=r(20)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},437:function(t,e,r){"use strict";r(11),r(12),r(15),r(16);var n=r(2),o=(r(4),r(54),r(61),r(35),r(13),r(34),r(62),r(416),r(55),r(417),r(418),r(419),r(420),r(421),r(422),r(423),r(424),r(425),r(426),r(427),r(428),r(429),r(56),r(10),r(278),r(1)),c=r(80),l=r(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],h=["start","end","center"];function m(t,e){return f.reduce((function(r,n){return r[t+Object(l.x)(n)]=e(),r}),{})}var y=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},_=m("align",(function(){return{type:String,default:null,validator:y}})),w=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},x=m("justify",(function(){return{type:String,default:null,validator:w}})),j=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},O=m("alignContent",(function(){return{type:String,default:null,validator:j}})),k={align:Object.keys(_),justify:Object.keys(x),alignContent:Object.keys(O)},S={align:"align",justify:"justify",alignContent:"align-content"};function C(t,e,r){var n=S[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var P=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},_),{},{justify:{type:String,default:null,validator:w}},x),{},{alignContent:{type:String,default:null,validator:j}},O),render:function(t,e){var r=e.props,data=e.data,o=e.children,l="";for(var d in r)l+=String(r[d]);var v=P.get(l);return v||function(){var t,e;for(e in v=[],k)k[e].forEach((function(t){var n=r[t],o=C(e,t,n);o&&v.push(o)}));v.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),P.set(l,v)}(),t(r.tag,Object(c.a)(data,{staticClass:"row",class:v}),o)}})},441:function(t,e,r){"use strict";r(11),r(12),r(15),r(16);var n=r(2),o=(r(4),r(28),r(13),r(34),r(62),r(416),r(55),r(417),r(418),r(419),r(420),r(421),r(422),r(423),r(424),r(425),r(426),r(427),r(428),r(429),r(56),r(54),r(10),r(64),r(278),r(1)),c=r(80),l=r(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],h=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=f.reduce((function(t,e){return t["offset"+Object(l.x)(e)]={type:[String,Number],default:null},t}),{}),y=f.reduce((function(t,e){return t["order"+Object(l.x)(e)]={type:[String,Number],default:null},t}),{}),_={col:Object.keys(h),offset:Object.keys(m),order:Object.keys(y)};function w(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var x=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in r)l+=String(r[d]);var v=x.get(l);return v||function(){var t,e;for(e in v=[],_)_[e].forEach((function(t){var n=r[t],o=w(e,t,n);o&&v.push(o)}));var o=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),x.set(l,v)}(),t(r.tag,Object(c.a)(data,{class:v}),o)}})},466:function(t,e,r){"use strict";r.r(e);var n=r(203),o=r(525),c=r(190),l=r(526),d=r(49),v=r(406),f={data:function(){return{type:"month",types:["month","week","day","4day"],mode:"stack",modes:["stack","column"],weekday:[0,1,2,3,4,5,6],weekdays:[{text:"Sun - Sat",value:[0,1,2,3,4,5,6]},{text:"Mon - Sun",value:[1,2,3,4,5,6,0]},{text:"Mon - Fri",value:[1,2,3,4,5]},{text:"Mon, Wed, Fri",value:[1,3,5]}],value:"",events:[],colors:["blue","indigo","deep-purple","cyan","green","orange","grey darken-1"],names:["Meeting with Luca","MileStone project3x","project review fikrati","Meeting with John"]}},methods:{getEvents:function(t){for(var e=t.start,r=t.end,n=[],o=new Date("".concat(e.date,"T00:00:00")),c=new Date("".concat(r.date,"T23:59:59")),l=(c.getTime()-o.getTime())/864e5,d=this.rnd(l,l+20),i=0;i<d;i++){var v=0===this.rnd(0,1),f=this.rnd(o.getTime(),c.getTime()),h=new Date(f-f%9e5),m=9e5*this.rnd(1,6),y=new Date(h.getTime()+m);n.push({name:this.names[this.rnd(0,this.names.length-1)],start:h,end:y,color:this.colors[this.rnd(0,this.colors.length-1)],timed:!v})}this.events=n},getEventColor:function(t){return t.color},rnd:function(a,b){return Math.floor((b-a+1)*Math.random())+a}}},h=r(91),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e(d.a,{staticClass:"d-flex",attrs:{tile:"",height:"54"}},[e(n.a,{staticClass:"ma-2",attrs:{icon:""},on:{click:function(e){return t.$refs.calendar.prev()}}},[e(c.a,[t._v("mdi-chevron-left")])],1),t._v(" "),e(l.a,{staticClass:"ma-2",attrs:{items:t.types,dense:"",outlined:"","hide-details":"",label:"type"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}}),t._v(" "),e(l.a,{staticClass:"ma-2",attrs:{items:t.modes,dense:"",outlined:"","hide-details":"",label:"event-overlap-mode"},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}}),t._v(" "),e(l.a,{staticClass:"ma-2",attrs:{items:t.weekdays,dense:"",outlined:"","hide-details":"",label:"weekdays"},model:{value:t.weekday,callback:function(e){t.weekday=e},expression:"weekday"}}),t._v(" "),e(v.a),t._v(" "),e(n.a,{staticClass:"ma-2",attrs:{icon:""},on:{click:function(e){return t.$refs.calendar.next()}}},[e(c.a,[t._v("mdi-chevron-right")])],1)],1),t._v(" "),e(d.a,{attrs:{height:"400"}},[e(o.a,{ref:"calendar",attrs:{weekdays:t.weekday,type:t.type,events:t.events,"event-overlap-mode":t.mode,"event-overlap-threshold":30,"event-color":t.getEventColor},on:{change:t.getEvents},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},528:function(t,e,r){"use strict";r.r(e);var n=r(413),o=r(441),c=r(446),l=r(188),d=r(126),v=r(191),f=r(82),h=r(437),m=(r(51),{data:function(){return{items:[{header:"New requests"},{avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",title:"If you enjoy reading or know others who do, we will help creating custom bookmarks",subtitle:'<span class="font-weight-bold">Ali Connors</span>'},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg",title:"Create artwork easily online just using...",subtitle:'<span class="font-weight-bold">Alex Scott</span> '},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/3.jpg",title:"Nowadays, computer vision is the most ....",subtitle:'<span class="font-weight-bold">Sandra Adams</span> '}]}}}),y=r(91),component=Object(y.a)(m,(function(){var t=this,e=t._self._c;return e(h.a,{staticClass:"mt-12"},[e(o.a,{attrs:{cols:"8"}},[e("calendar-component")],1),t._v(" "),e(o.a,{attrs:{cols:"4"}},[e(n.a,{attrs:{height:"450"}},[e(l.a,{attrs:{"two-line":""}},[t._l(t.items.slice(0,6),(function(r,n){return[r.header?e("h4",{key:r.header,staticClass:"ml-4"},[t._v("\n            "+t._s(r.header)+"\n          ")]):r.divider?e(c.a,{key:n,attrs:{inset:r.inset}}):e(d.a,{key:r.title},[e(v.a,[e("img",{attrs:{src:r.avatar}})]),t._v(" "),e(f.a,[e(f.c,{domProps:{innerHTML:t._s(r.title)}}),t._v(" "),e(f.b,{domProps:{innerHTML:t._s(r.subtitle)}})],1)],1)]}))],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CalendarComponent:r(466).default})}}]);