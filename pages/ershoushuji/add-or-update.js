(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ershoushuji/add-or-update"],{"3f30":function(e,t,r){"use strict";r.r(t);var i=r("c6fc"),n=r.n(i);for(var u in i)"default"!==u&&function(e){r.d(t,e,(function(){return i[e]}))}(u);t["default"]=n.a},"419a":function(e,t,r){"use strict";r.r(t);var i=r("d1bd"),n=r("3f30");for(var u in n)"default"!==u&&function(e){r.d(t,e,(function(){return n[e]}))}(u);r("623e");var s,a=r("f0c5"),c=Object(a["a"])(n["default"],i["b"],i["c"],!1,null,"5ee7b3a4",null,!1,i["a"],s);t["default"]=c.exports},"623e":function(e,t,r){"use strict";var i=r("6a5b"),n=r.n(i);n.a},"6a5b":function(e,t,r){},a720:function(e,t,r){"use strict";(function(e){r("6cdc"),r("921b");i(r("66fd"));var t=i(r("419a"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])},c6fc:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r("a34a"));function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r,i,n,u,s){try{var a=e[u](s),c=a.value}catch(o){return void r(o)}a.done?t(c):Promise.resolve(c).then(i,n)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(i,n){var s=e.apply(t,r);function a(e){u(s,i,n,a,c,"next",e)}function c(e){u(s,i,n,a,c,"throw",e)}a(void 0)}))}}var a=function(){return Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(r.bind(null,"e2b1"))},c=function(){return r.e("components/xia-editor/xia-editor").then(r.bind(null,"064f"))},o={data:function(){return{cross:"",ruleForm:{tushubianhao:this.getUUID(),tushumingcheng:"",tushuleixing:"",tupian:"",zuozhe:"",chubanshe:"",chubanshijian:"",tushujianjie:"",reversetime:"",price:"",startprice:"",stepprice:"",endprice:""},tushuleixingOptions:[],tushuleixingIndex:0,user:{},ro:{tushubianhao:!1,tushumingcheng:!1,tushuleixing:!1,tupian:!1,zuozhe:!1,chubanshe:!1,chubanshijian:!1,tushujianjie:!1,thumbsupnum:!1,crazilynum:!1,clicktime:!1,reversetime:!1,clicknum:!1,price:!1,startprice:!1,stepprice:!1,endprice:!1}}},components:{wPicker:a,xiaEditor:c},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=s(i.default.mark((function t(r){var n,u,s,a;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.getStorageSync("nowTable"),t.next=3,this.$api.session(n);case 3:return u=t.sent,this.user=u.data,t.next=7,this.$api.option("tushuleixing","tushuleixing",{});case 7:if(u=t.sent,this.tushuleixingOptions=u.data,this.tushuleixingOptions.unshift("请选择图书类型"),this.ruleForm.userid=e.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!r.id){t.next=18;break}return this.ruleForm.id=r.id,t.next=16,this.$api.info("ershoushuji",this.ruleForm.id);case 16:u=t.sent,this.ruleForm=u.data;case 18:if(this.cross=r.cross,!r.cross){t.next=94;break}s=e.getStorageSync("crossObj"),t.t0=i.default.keys(s);case 22:if((t.t1=t.t0()).done){t.next=94;break}if(a=t.t1.value,"tushubianhao"!=a){t.next=28;break}return this.ruleForm.tushubianhao=s[a],this.ro.tushubianhao=!0,t.abrupt("continue",22);case 28:if("tushumingcheng"!=a){t.next=32;break}return this.ruleForm.tushumingcheng=s[a],this.ro.tushumingcheng=!0,t.abrupt("continue",22);case 32:if("tushuleixing"!=a){t.next=36;break}return this.ruleForm.tushuleixing=s[a],this.ro.tushuleixing=!0,t.abrupt("continue",22);case 36:if("tupian"!=a){t.next=40;break}return this.ruleForm.tupian=s[a].split(",")[0],this.ro.tupian=!0,t.abrupt("continue",22);case 40:if("zuozhe"!=a){t.next=44;break}return this.ruleForm.zuozhe=s[a],this.ro.zuozhe=!0,t.abrupt("continue",22);case 44:if("chubanshe"!=a){t.next=48;break}return this.ruleForm.chubanshe=s[a],this.ro.chubanshe=!0,t.abrupt("continue",22);case 48:if("chubanshijian"!=a){t.next=52;break}return this.ruleForm.chubanshijian=s[a],this.ro.chubanshijian=!0,t.abrupt("continue",22);case 52:if("tushujianjie"!=a){t.next=56;break}return this.ruleForm.tushujianjie=s[a],this.ro.tushujianjie=!0,t.abrupt("continue",22);case 56:if("thumbsupnum"!=a){t.next=60;break}return this.ruleForm.thumbsupnum=s[a],this.ro.thumbsupnum=!0,t.abrupt("continue",22);case 60:if("crazilynum"!=a){t.next=64;break}return this.ruleForm.crazilynum=s[a],this.ro.crazilynum=!0,t.abrupt("continue",22);case 64:if("clicktime"!=a){t.next=68;break}return this.ruleForm.clicktime=s[a],this.ro.clicktime=!0,t.abrupt("continue",22);case 68:if("reversetime"!=a){t.next=72;break}return this.ruleForm.reversetime=s[a],this.ro.reversetime=!0,t.abrupt("continue",22);case 72:if("clicknum"!=a){t.next=76;break}return this.ruleForm.clicknum=s[a],this.ro.clicknum=!0,t.abrupt("continue",22);case 76:if("price"!=a){t.next=80;break}return this.ruleForm.price=s[a],this.ro.price=!0,t.abrupt("continue",22);case 80:if("startprice"!=a){t.next=84;break}return this.ruleForm.startprice=s[a],this.ro.startprice=!0,t.abrupt("continue",22);case 84:if("stepprice"!=a){t.next=88;break}return this.ruleForm.stepprice=s[a],this.ro.stepprice=!0,t.abrupt("continue",22);case 88:if("endprice"!=a){t.next=92;break}return this.ruleForm.endprice=s[a],this.ro.endprice=!0,t.abrupt("continue",22);case 92:t.next=22;break;case 94:this.styleChange();case 95:case"end":return t.stop()}}),t,this)})));function r(e){return t.apply(this,arguments)}return r}(),methods:{tushujianjieChange:function(e){this.ruleForm.tushujianjie=e},styleChange:function(){this.$nextTick((function(){}))},chubanshijianChange:function(e){this.ruleForm.chubanshijian=e.target.value,this.$forceUpdate()},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},reversetimeConfirm:function(e){console.log(e),this.ruleForm.reversetime=e.result,this.$forceUpdate()},tushuleixingChange:function(e){this.tushuleixingIndex=e.target.value,this.ruleForm.tushuleixing=this.tushuleixingOptions[this.tushuleixingIndex]},tupianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.tupian="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=s(i.default.mark((function t(){var r,n,u,s,a,c,o,h,l,m;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.tushumingcheng){t.next=3;break}return this.$utils.msg("图书名称不能为空"),t.abrupt("return");case 3:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){t.next=6;break}return this.$utils.msg("赞应输入整数"),t.abrupt("return");case 6:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){t.next=9;break}return this.$utils.msg("踩应输入整数"),t.abrupt("return");case 9:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){t.next=12;break}return this.$utils.msg("点击次数应输入整数"),t.abrupt("return");case 12:if(this.ruleForm.price){t.next=15;break}return this.$utils.msg("价格不能为空"),t.abrupt("return");case 15:if(!this.ruleForm.price||this.$validate.isNumber(this.ruleForm.price)){t.next=18;break}return this.$utils.msg("价格应输入数字"),t.abrupt("return");case 18:if(this.ruleForm.startprice){t.next=21;break}return this.$utils.msg("起拍价不能为空"),t.abrupt("return");case 21:if(!this.ruleForm.startprice||this.$validate.isNumber(this.ruleForm.startprice)){t.next=24;break}return this.$utils.msg("起拍价应输入数字"),t.abrupt("return");case 24:if(!this.ruleForm.stepprice||this.$validate.isNumber(this.ruleForm.stepprice)){t.next=27;break}return this.$utils.msg("加价幅度应输入数字"),t.abrupt("return");case 27:if(!this.ruleForm.endprice||this.$validate.isNumber(this.ruleForm.endprice)){t.next=30;break}return this.$utils.msg("一口价应输入数字"),t.abrupt("return");case 30:if(!this.cross){t.next=46;break}if(a=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==a){t.next=46;break}if(r||(r=e.getStorageSync("crossObj")),a.startsWith("[")){t.next=42;break}for(o in r)o==a&&(r[o]=c);return h=e.getStorageSync("crossTable"),t.next=40,this.$api.update("".concat(h),r);case 40:t.next=46;break;case 42:n=Number(e.getStorageSync("userid")),u=r["id"],s=e.getStorageSync("statusColumnName"),s=s.replace(/\[/,"").replace(/\]/,"");case 46:if(!u||!n){t.next=68;break}return this.ruleForm.crossuserid=n,this.ruleForm.crossrefid=u,l={page:1,limit:10,crossuserid:n,crossrefid:u},t.next=52,this.$api.list("ershoushuji",l);case 52:if(m=t.sent,!(m.data.total>=s)){t.next=58;break}return this.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 58:if(!this.ruleForm.id){t.next=63;break}return t.next=61,this.$api.update("ershoushuji",this.ruleForm);case 61:t.next=65;break;case 63:return t.next=65,this.$api.add("ershoushuji",this.ruleForm);case 65:this.$utils.msgBack("提交成功");case 66:t.next=76;break;case 68:if(!this.ruleForm.id){t.next=73;break}return t.next=71,this.$api.update("ershoushuji",this.ruleForm);case 71:t.next=75;break;case 73:return t.next=75,this.$api.add("ershoushuji",this.ruleForm);case 75:this.$utils.msgBack("提交成功");case 76:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),i=t.getMonth()+1,n=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(r,"-").concat(i,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};t.default=o}).call(this,r("543d")["default"])},d1bd:function(e,t,r){"use strict";var i={"xia-editor":()=>r.e("components/xia-editor/xia-editor").then(r.bind(null,"064f")),"w-picker":()=>Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(r.bind(null,"e2b1"))},n=function(){var e=this,t=e.$createElement,r=(e._self._c,e.ruleForm.tupian.split(","));e.$mp.data=Object.assign({},{$root:{g0:r}})},u=[];r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return i}))}},[["a720","common/runtime","common/vendor"]]]);