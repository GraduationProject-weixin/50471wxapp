(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/auctionershoushuji/add-or-update"],{"1ff8":function(t,e,r){"use strict";r.r(e);var n=r("b8a3"),a=r("7b0e");for(var i in a)"default"!==i&&function(t){r.d(e,t,(function(){return a[t]}))}(i);r("59b6");var u,s=r("f0c5"),o=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"a11870ae",null,!1,n["a"],u);e["default"]=o.exports},"4a8d":function(t,e,r){"use strict";(function(t){r("6cdc"),r("921b");n(r("66fd"));var e=n(r("1ff8"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("543d")["createPage"])},"59b6":function(t,e,r){"use strict";var n=r("f9f3"),a=r.n(n);a.a},"7b0e":function(t,e,r){"use strict";r.r(e);var n=r("9126"),a=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a},9126:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(r("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e,r,n,a,i,u){try{var s=t[i](u),o=s.value}catch(c){return void r(c)}s.done?e(o):Promise.resolve(o).then(n,a)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var u=t.apply(e,r);function s(t){i(u,n,a,s,o,"next",t)}function o(t){i(u,n,a,s,o,"throw",t)}s(void 0)}))}}var s=function(){return Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(r.bind(null,"e2b1"))},o=function(){return r.e("components/xia-editor/xia-editor").then(r.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{refid:"",userid:"",nickname:"",avatarurl:"",auctionprice:"",auctionstatus:""},auctionstatusOptions:[],auctionstatusIndex:0,user:{},ro:{refid:!1,userid:!1,nickname:!1,avatarurl:!1,auctionprice:!1,auctionstatus:!1}}},components:{wPicker:s,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=u(n.default.mark((function e(r){var a,i,u,s;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.getStorageSync("nowTable"),e.next=3,this.$api.session(a);case 3:if(i=e.sent,this.user=i.data,this.auctionstatusOptions="出局,领先".split(","),this.ruleForm.userid=t.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=t.getStorageSync("nickname")),!r.id){e.next=14;break}return this.ruleForm.id=r.id,e.next=12,this.$api.info("auctionershoushuji",this.ruleForm.id);case 12:i=e.sent,this.ruleForm=i.data;case 14:if(this.cross=r.cross,!r.cross){e.next=46;break}u=t.getStorageSync("crossObj"),e.t0=n.default.keys(u);case 18:if((e.t1=e.t0()).done){e.next=46;break}if(s=e.t1.value,"refid"!=s){e.next=24;break}return this.ruleForm.refid=u[s],this.ro.refid=!0,e.abrupt("continue",18);case 24:if("userid"!=s){e.next=28;break}return this.ruleForm.userid=u[s],this.ro.userid=!0,e.abrupt("continue",18);case 28:if("nickname"!=s){e.next=32;break}return this.ruleForm.nickname=u[s],this.ro.nickname=!0,e.abrupt("continue",18);case 32:if("avatarurl"!=s){e.next=36;break}return this.ruleForm.avatarurl=u[s].split(",")[0],this.ro.avatarurl=!0,e.abrupt("continue",18);case 36:if("auctionprice"!=s){e.next=40;break}return this.ruleForm.auctionprice=u[s],this.ro.auctionprice=!0,e.abrupt("continue",18);case 40:if("auctionstatus"!=s){e.next=44;break}return this.ruleForm.auctionstatus=u[s],this.ro.auctionstatus=!0,e.abrupt("continue",18);case 44:e.next=18;break;case 46:this.styleChange();case 47:case"end":return e.stop()}}),e,this)})));function r(t){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},auctionstatusChange:function(t){this.auctionstatusIndex=t.target.value,this.ruleForm.auctionstatus=this.auctionstatusOptions[this.auctionstatusIndex]},avatarurlTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.avatarurl="upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(n.default.mark((function e(){var r,a,i,u,s,o,c,l,f,d;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.refid){e.next=3;break}return this.$utils.msg("关联表id不能为空"),e.abrupt("return");case 3:if(this.ruleForm.userid){e.next=6;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.auctionprice||this.$validate.isNumber(this.ruleForm.auctionprice)){e.next=9;break}return this.$utils.msg("竞拍价格应输入数字"),e.abrupt("return");case 9:if(!this.cross){e.next=25;break}if(s=t.getStorageSync("statusColumnName"),o=t.getStorageSync("statusColumnValue"),""==s){e.next=25;break}if(r||(r=t.getStorageSync("crossObj")),s.startsWith("[")){e.next=21;break}for(c in r)c==s&&(r[c]=o);return l=t.getStorageSync("crossTable"),e.next=19,this.$api.update("".concat(l),r);case 19:e.next=25;break;case 21:a=Number(t.getStorageSync("userid")),i=r["id"],u=t.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 25:if(!i||!a){e.next=47;break}return this.ruleForm.crossuserid=a,this.ruleForm.crossrefid=i,f={page:1,limit:10,crossuserid:a,crossrefid:i},e.next=31,this.$api.list("auctionershoushuji",f);case 31:if(d=e.sent,!(d.data.total>=u)){e.next=37;break}return this.$utils.msg(t.getStorageSync("tips")),e.abrupt("return",!1);case 37:if(!this.ruleForm.id){e.next=42;break}return e.next=40,this.$api.update("auctionershoushuji",this.ruleForm);case 40:e.next=44;break;case 42:return e.next=44,this.$api.add("auctionershoushuji",this.ruleForm);case 44:this.$utils.msgBack("提交成功");case 45:e.next=55;break;case 47:if(!this.ruleForm.id){e.next=52;break}return e.next=50,this.$api.update("auctionershoushuji",this.ruleForm);case 50:e.next=54;break;case 52:return e.next=54,this.$api.add("auctionershoushuji",this.ruleForm);case 54:this.$utils.msgBack("提交成功");case 55:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,r=e.getFullYear(),n=e.getMonth()+1,a=e.getDate();return"start"===t?r-=60:"end"===t&&(r+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(r,"-").concat(n,"-").concat(a)},toggleTab:function(t){this.$refs[t].show()}}};e.default=c}).call(this,r("543d")["default"])},b8a3:function(t,e,r){"use strict";var n,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}))},f9f3:function(t,e,r){}},[["4a8d","common/runtime","common/vendor"]]]);