webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},a,!1,function(t){n("gsu9")},null,null).exports,i=n("/ocq"),o=n("gRE1"),c=n.n(o),l=n("Gu7T"),u=n.n(l),p={props:{col:{type:Number,default:2}},data:function(){return{testData:[]}},mounted:function(){this.init()},watch:{col:{handler:function(t){var e=this;console.log("%c 🍾 当前列数改变val: ","font-size:20px;background-color: #2EAFB0;color:#fff;",t),this.$nextTick(function(){e.init()})}}},methods:{init:function(){var t=this;this.testData=[];for(var e=1;e<=25;e++){var n=Math.floor(100*Math.random()+40),r={iheight:n,msg:"高度："+n+"px 排序"+e,order:e%this.col||this.col};this.testData.push(r)}this.$nextTick(function(){var e={};t.$refs.items.forEach(function(t){e[t.style.order]=(e[t.style.order]||0)+t.clientHeight+17});var n=Math.max.apply(Math,u()(c()(e)));t.$refs.wrapper.style.height=n+"px"})}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{ref:"wrapper",staticClass:"test-wrapper"},[t._l(t.testData,function(e,r){return n("div",{key:r,ref:"items",refInFor:!0,staticClass:"item",style:"height: "+e.iheight+"px; order: "+e.order+";"},[t._v(t._s(e.msg))])}),t._v(" "),t._l(t.col-1,function(t,e){return n("div",{key:e+"key",staticClass:"split",style:"order: "+t})})],2)])},staticRenderFns:[]};var d={data:function(){return{col:5}},components:{waterfall:n("VU/8")(p,f,!1,function(t){n("bn+G")},null,null).exports},methods:{sub:function(){this.col-=1},add:function(){this.col+=1}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("p",[t._v("waterfall-demo")]),t._v(" "),n("p",[t._v("当前列数 "+t._s(t.col))]),t._v(" "),n("span",{staticClass:"btn",on:{click:t.sub}},[t._v(" - ")]),t._v(" "),n("span",{staticClass:"btn",on:{click:t.add}},[t._v(" + ")]),t._v(" "),n("waterfall",{attrs:{col:t.col}})],1)},staticRenderFns:[]};var v=n("VU/8")(d,h,!1,function(t){n("na1B")},"data-v-6031c4f4",null).exports;r.a.use(i.a);var _=new i.a({routes:[{path:"/",name:"HelloWorld",component:v}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:_,components:{App:s},template:"<App/>"})},"bn+G":function(t,e){},gsu9:function(t,e){},na1B:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.888965335a4641d6020a.js.map