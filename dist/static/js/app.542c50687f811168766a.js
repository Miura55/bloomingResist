webpackJsonp([1],{"9M+g":function(e,a){},Jmt5:function(e,a){},NHnr:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=t("7+uW"),r={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var n=t("VU/8")({name:"App"},r,!1,function(e){t("gsu9")},null,null).exports,i=t("Tqaz"),l=t("/ocq"),s={data:function(){return{inClient:!1,userName:"",reqParam:{familyName:"",firstName:"",firstNameCap:"",familyNameCap:"",bYear:"",bMonth:"",bDay:"",bloodType:"",job:"",zipcode:"",region:"",city:"",phoneNumber:"",startDate:"",endDate:""}}},created:function(){this.initializeLiff()},methods:{initializeLiff:function(){var e=this;liff.init({liffId:"1653851902-k6abNz2a"},function(a){e.loginCheck()},function(e){console.log("LIFF initialization failed",e)})},loginCheck:function(){var e=this;liff.isLoggedIn()||liff.isInClient()?liff.getProfile().then(function(a){e.userName=a.displayName,console.log(e.userName),e.$swal("ログインしました")}).catch(function(e){console.log("error",e)}):this.$router.push({name:"Login"})},logout:function(){liff.isLoggedIn()&&(liff.logout(),this.$router.push({name:"Login"}))},send:function(e){console.log(this.reqParam),this.axios.post("https://8457ede6.us-south.apigw.appdomain.cloud/blooming/resist",this.reqParam).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}}},m={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("h1",[e._v("ようこそ "+e._s(e.userName)+" さん")]),e._v(" "),t("button",{staticClass:"btn btn-danger mb-1",on:{click:e.logout}},[e._v("ログアウト")]),e._v(" "),t("form",{attrs:{name:"form",id:"form"}},[t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-4 control-label",attrs:{for:"name"}},[e._v("氏名")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.reqParam.familyName,expression:"reqParam.familyName"}],staticClass:"form-control col-2",attrs:{type:"text",id:"familyName",placeholder:"姓"},domProps:{value:e.reqParam.familyName},on:{input:function(a){a.target.composing||e.$set(e.reqParam,"familyName",a.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.reqParam.firstName,expression:"reqParam.firstName"}],staticClass:"form-control col-2",attrs:{type:"text",id:"firstName",placeholder:"名"},domProps:{value:e.reqParam.firstName},on:{input:function(a){a.target.composing||e.$set(e.reqParam,"firstName",a.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-4 control-label",attrs:{for:"yomi"}},[e._v("ふりがな")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.reqParam.familyNameCap,expression:"reqParam.familyNameCap"}],staticClass:"form-control col-2",attrs:{type:"text",id:"familyNameCap",placeholder:"せい"},domProps:{value:e.reqParam.familyNameCap},on:{input:function(a){a.target.composing||e.$set(e.reqParam,"familyNameCap",a.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.reqParam.firstNameCap,expression:"reqParam.firstNameCap"}],staticClass:"form-control col-2",attrs:{type:"text",id:"firstNameCap",placeholder:"めい"},domProps:{value:e.reqParam.firstNameCap},on:{input:function(a){a.target.composing||e.$set(e.reqParam,"firstNameCap",a.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-4 control-label",attrs:{for:"birthday"}},[e._v("生年月日")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.reqParam.bYear,expression:"reqParam.bYear"}],staticClass:"form-control col-2  ",attrs:{type:"tel",name:"year",id:"bYear",maxlength:"4",placeholder:"年"},domProps:{value:e.reqParam.bYear},on:{input:function(a){a.target.composing||e.$set(e.reqParam,"bYear",a.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.reqParam.bMonth,expression:"reqParam.bMonth"}],staticClass:"form-control col-2",attrs:{type:"tel",name:"month",id:"bMonth",maxlength:"2",placeholder:"月"},domProps:{value:e.reqParam.bMonth},on:{input:function(a){a.target.composing||e.$set(e.reqParam,"bMonth",a.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.reqParam.bDay,expression:"reqParam.bDay"}],staticClass:"form-control col-2",attrs:{type:"tel",name:"day",id:"bDay",maxlength:"2",placeholder:"日"},domProps:{value:e.reqParam.bDay},on:{input:function(a){a.target.composing||e.$set(e.reqParam,"bDay",a.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-4 control-label",attrs:{for:"bloodType"}},[e._v("血液型")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.reqParam.bloodType,expression:"reqParam.bloodType"}],staticClass:"form-control col-2",attrs:{name:"bloodType",id:"bloodType"},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.reqParam,"bloodType",a.target.multiple?t:t[0])}}},[t("option",{attrs:{value:""}},[e._v("選択してください")]),e._v(" "),t("option",{attrs:{value:"A"}},[e._v("A")]),e._v(" "),t("option",{attrs:{value:"B"}},[e._v("B")]),e._v(" "),t("option",{attrs:{value:"O"}},[e._v("O")]),e._v(" "),t("option",{attrs:{value:"AB"}},[e._v("AB")])])]),e._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-4 control-label",attrs:{for:"job"}},[e._v("職業")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.reqParam.job,expression:"reqParam.job"}],staticClass:"form-control col-4",attrs:{name:"job",id:"job"},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.reqParam,"job",a.target.multiple?t:t[0])}}},[t("option",{attrs:{value:""}},[e._v("選択してください")]),e._v(" "),t("option",{attrs:{value:"公務員"}},[e._v("公務員")]),e._v(" "),t("option",{attrs:{value:"経営者・役員"}},[e._v("経営者・役員")]),e._v(" "),t("option",{attrs:{value:"会社員"}},[e._v("会社員")]),e._v(" "),t("option",{attrs:{value:"自営業"}},[e._v("自営業")]),e._v(" "),t("option",{attrs:{value:"自由業"}},[e._v("自由業")]),e._v(" "),t("option",{attrs:{value:"専業主婦"}},[e._v("専業主婦")]),e._v(" "),t("option",{attrs:{value:"パート・アルバイト"}},[e._v("パート・アルバイト")]),e._v(" "),t("option",{attrs:{value:"学生"}},[e._v("学生")]),e._v(" "),t("option",{attrs:{value:"その他"}},[e._v("その他")])])]),e._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-4 control-label",attrs:{for:"zipcode"}},[e._v("郵便番号(数字のみ)")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.reqParam.zipcode,expression:"reqParam.zipcode"}],staticClass:"form-control col-4",attrs:{type:"tel",name:"zipcode",id:"zipcode"},domProps:{value:e.reqParam.zipcode},on:{input:function(a){a.target.composing||e.$set(e.reqParam,"zipcode",a.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-4 control-label",attrs:{for:"region"}},[e._v("住所")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.reqParam.region,expression:"reqParam.region"}],staticClass:"form-control col-2",attrs:{type:"text",name:"region",id:"region",placeholder:"都道府県"},domProps:{value:e.reqParam.region},on:{input:function(a){a.target.composing||e.$set(e.reqParam,"region",a.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.reqParam.city,expression:"reqParam.city"}],staticClass:"form-control col-4",attrs:{type:"text",name:"city",id:"city",placeholder:"市区町村以下"},domProps:{value:e.reqParam.city},on:{input:function(a){a.target.composing||e.$set(e.reqParam,"city",a.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-4 control-label",attrs:{for:"phoneNumber"}},[e._v("電話番号")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.reqParam.phoneNumber,expression:"reqParam.phoneNumber"}],staticClass:"form-control col-4",attrs:{type:"tel",name:"phoneNumber",id:"phoneNumber"},domProps:{value:e.reqParam.phoneNumber},on:{input:function(a){a.target.composing||e.$set(e.reqParam,"phoneNumber",a.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-4 control-label",attrs:{for:"startDate"}},[e._v("開始希望日")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.reqParam.startDate,expression:"reqParam.startDate"}],staticClass:"form-control col-4",attrs:{type:"date",name:"startDate",id:"startDate"},domProps:{value:e.reqParam.startDate},on:{input:function(a){a.target.composing||e.$set(e.reqParam,"startDate",a.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-4 control-label",attrs:{for:"endDate"}},[e._v("終了希望日")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.reqParam.endDate,expression:"reqParam.endDate"}],staticClass:"form-control col-4",attrs:{type:"date",name:"endDate",id:"endDate"},domProps:{value:e.reqParam.endDate},on:{input:function(a){a.target.composing||e.$set(e.reqParam,"endDate",a.target.value)}}})])]),e._v(" "),t("button",{staticClass:"btn btn-primary col-4",on:{click:e.send}},[e._v("登録")])])},staticRenderFns:[]},c=t("VU/8")(s,m,!1,null,null,null).exports,u={created:function(){this.initializeLiff()},methods:{initializeLiff:function(){var e=this;liff.init({liffId:"1653851902-k6abNz2a"},function(a){liff.isLoggedIn()&&e.$router.push({name:"Form"})},function(e){console.log("LIFF initialization failed",e)})},loginAction:function(){liff.isLoggedIn()||liff.login()}}},p={render:function(){var e=this.$createElement,a=this._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("h3",[a("v-btn",{staticClass:"btn btn-success",on:{click:this.loginAction}},[this._v("LINEログイン")])],1)])],1)],1)},staticRenderFns:[]},v=t("VU/8")(u,p,!1,null,null,null).exports,d=(t("Jmt5"),t("9M+g"),t("nUxp")),f=t.n(d),g=t("mtWM"),_=t.n(g),b=t("Rf8U"),P=t.n(b);o.default.use(f.a),o.default.use(l.a),o.default.use(i.a),o.default.use(P.a,_.a);var h=new l.a({routes:[{path:"/",name:"Form",component:c},{path:"/login",name:"Login",component:v}]});o.default.config.productionTip=!1,new o.default({el:"#app",router:h,components:{App:n},template:"<App/>"})},gsu9:function(e,a){}},["NHnr"]);
//# sourceMappingURL=app.542c50687f811168766a.js.map