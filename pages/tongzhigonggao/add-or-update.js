(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tongzhigonggao/add-or-update"],{"01b9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,i,a,o){try{var u=t[a](o),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(r,i)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function u(t){a(o,r,i,u,s,"next",t)}function s(t){a(o,r,i,u,s,"throw",t)}u(void 0)}))}}var u=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))},s=function(){return n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{biaoti:"",neirong:"",faburen:"",faburiqi:"",tupian:""},user:{},ro:{biaoti:!1,neirong:!1,faburen:!1,faburiqi:!1,tupian:!1}}},components:{wPicker:u,xiaEditor:s},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=o(r.default.mark((function e(n){var i,a,o,u;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.faburiqi=this.$utils.getCurDate(),i=t.getStorageSync("nowTable"),e.next=4,this.$api.session(i);case 4:if(a=e.sent,this.user=a.data,this.ruleForm.userid=t.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=t.getStorageSync("nickname")),!n.id){e.next=14;break}return this.ruleForm.id=n.id,e.next=12,this.$api.info("tongzhigonggao",this.ruleForm.id);case 12:a=e.sent,this.ruleForm=a.data;case 14:if(this.cross=n.cross,!n.cross){e.next=42;break}o=t.getStorageSync("crossObj"),e.t0=r.default.keys(o);case 18:if((e.t1=e.t0()).done){e.next=42;break}if(u=e.t1.value,"biaoti"!=u){e.next=24;break}return this.ruleForm.biaoti=o[u],this.ro.biaoti=!0,e.abrupt("continue",18);case 24:if("neirong"!=u){e.next=28;break}return this.ruleForm.neirong=o[u],this.ro.neirong=!0,e.abrupt("continue",18);case 28:if("faburen"!=u){e.next=32;break}return this.ruleForm.faburen=o[u],this.ro.faburen=!0,e.abrupt("continue",18);case 32:if("faburiqi"!=u){e.next=36;break}return this.ruleForm.faburiqi=o[u],this.ro.faburiqi=!0,e.abrupt("continue",18);case 36:if("tupian"!=u){e.next=40;break}return this.ruleForm.tupian=o[u].split(",")[0],this.ro.tupian=!0,e.abrupt("continue",18);case 40:e.next=18;break;case 42:this.styleChange();case 43:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),methods:{neirongChange:function(t){this.ruleForm.neirong=t},styleChange:function(){this.$nextTick((function(){}))},faburiqiChange:function(t){this.ruleForm.faburiqi=t.target.value,this.$forceUpdate()},tupianTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.tupian="upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=o(r.default.mark((function e(){var n,i,a,o,u,s,c,f,l,d;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.cross){e.next=16;break}if(u=t.getStorageSync("statusColumnName"),s=t.getStorageSync("statusColumnValue"),""==u){e.next=16;break}if(n||(n=t.getStorageSync("crossObj")),u.startsWith("[")){e.next=12;break}for(c in n)c==u&&(n[c]=s);return f=t.getStorageSync("crossTable"),e.next=10,this.$api.update("".concat(f),n);case 10:e.next=16;break;case 12:i=Number(t.getStorageSync("userid")),a=n["id"],o=t.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 16:if(!a||!i){e.next=38;break}return this.ruleForm.crossuserid=i,this.ruleForm.crossrefid=a,l={page:1,limit:10,crossuserid:i,crossrefid:a},e.next=22,this.$api.list("tongzhigonggao",l);case 22:if(d=e.sent,!(d.data.total>=o)){e.next=28;break}return this.$utils.msg(t.getStorageSync("tips")),e.abrupt("return",!1);case 28:if(!this.ruleForm.id){e.next=33;break}return e.next=31,this.$api.update("tongzhigonggao",this.ruleForm);case 31:e.next=35;break;case 33:return e.next=35,this.$api.add("tongzhigonggao",this.ruleForm);case 35:this.$utils.msgBack("提交成功");case 36:e.next=46;break;case 38:if(!this.ruleForm.id){e.next=43;break}return e.next=41,this.$api.update("tongzhigonggao",this.ruleForm);case 41:e.next=45;break;case 43:return e.next=45,this.$api.add("tongzhigonggao",this.ruleForm);case 45:this.$utils.msgBack("提交成功");case 46:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,n=e.getFullYear(),r=e.getMonth()+1,i=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(n,"-").concat(r,"-").concat(i)},toggleTab:function(t){this.$refs[t].show()}}};e.default=c}).call(this,n("543d")["default"])},"0314":function(t,e,n){"use strict";var r=n("0a82"),i=n.n(r);i.a},"04fa":function(t,e,n){"use strict";n.r(e);var r=n("01b9"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"0a82":function(t,e,n){},"32eb":function(t,e,n){"use strict";var r={"xia-editor":()=>n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f"))},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.ruleForm.tupian.split(","));t.$mp.data=Object.assign({},{$root:{g0:n}})},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))},"52fb":function(t,e,n){"use strict";n.r(e);var r=n("32eb"),i=n("04fa");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("0314");var o,u=n("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"a7f347fa",null,!1,r["a"],o);e["default"]=s.exports},"7f22":function(t,e,n){"use strict";(function(t){n("6cdc"),n("921b");r(n("66fd"));var e=r(n("52fb"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["7f22","common/runtime","common/vendor"]]]);