(function(t){function n(n){for(var a,i,u=n[0],l=n[1],s=n[2],d=0,p=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(n);while(p.length)p.shift()();return r.push.apply(r,s||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],a=!0,u=1;u<e.length;u++){var l=e[u];0!==o[l]&&(a=!1)}a&&(r.splice(n--,1),t=i(i.s=e[0]))}return t}var a={},o={app:0},r=[];function i(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=a,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)i.d(e,a,function(n){return t[n]}.bind(null,a));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="Loan-calculator/dist/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var c=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"2bbb":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"app-wrapper"},[e("h1",[t._v("Loan calculator")]),e("Calculator",{attrs:{handleResult:t.handleResult}}),e("Result",{attrs:{result:t.result,validate:t.validate}})],1)])},r=[],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("form",{on:{submit:function(n){return n.preventDefault(),t.calculate(t.amount,t.duration)}}},[e("div",{staticClass:"row"},[e("label",{attrs:{for:"amount"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{id:"amount",placeholder:"Enter the amount",autocomplete:"off"},domProps:{value:t.amount},on:{input:function(n){n.target.composing||(t.amount=n.target.value)}}})]),e("label",{attrs:{for:"duration"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.duration,expression:"duration"}],attrs:{id:"duration",placeholder:"Enter the duration",autocomplete:"off"},domProps:{value:t.duration},on:{input:function(n){n.target.composing||(t.duration=n.target.value)}}})])]),e("Button",{attrs:{type:"submit",id:"submit",disabled:!t.amount||!t.duration}},[t._v("Submit")]),e("ul",{staticClass:"validation-wrap"},t._l(t.validationMSG,(function(n,a){return e("li",{key:a,staticClass:"validation-msg"},[t._v(" - "+t._s(n)+" ")])})),0)],1)},u=[],l=e("b259"),s={props:{handleResult:Function},data:function(){return{amount:void 0,duration:void 0,minAmount:1e4,maxAmount:1e5,minDuration:1,maxDuration:5,validationMSG:[]}},methods:{calculate:function(t,n){var e=this.minAmount,a=this.maxAmount,o=this.minDuration,r=this.maxDuration,i=t>=e&&t<=a,u=n>=o&&n<=r;if(i&&u)return this.validationMSG.length&&(this.validationMSG=[]),void this.handleResult(l,!0);this.validationMSG.length&&(this.validationMSG=[]),i||this.validationMSG.push("Amount must be between 10,000 - 100,000 EUR."),u||this.validationMSG.push("Duration must be between 1 - 5 years."),this.handleResult(void 0,!1)}}},c=s,d=(e("bb98"),e("2877")),p=Object(d["a"])(c,i,u,!1,null,"48a15bb4",null),f=p.exports,v=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.validate?e("div",{staticClass:"result"},[e("p",[t._v("Will equal:")]),e("div",{staticClass:"result-inner",attrs:{id:"result-inner"}},[t._v(" Monthly Installment: "),e("span",{staticStyle:{"text-decoration":"underline","font-weight":"700"}},[t._v(t._s(t.result.monthlyInstallment))])])]):t._e()},m=[],b={props:{validate:Boolean,result:Object}},h=b,y=(e("bf01"),Object(d["a"])(h,v,m,!1,null,"5990de1e",null)),g=y.exports,_={data:function(){return{result:void 0,validate:!1}},methods:{handleResult:function(t,n){this.result=t,this.validate=n}},components:{Calculator:f,Result:g}},w=_,x=(e("cf25"),Object(d["a"])(w,o,r,!1,null,null,null)),O=x.exports;e("c89a");a["a"].config.productionTip=!1,window.onload=function(){new a["a"]({render:function(t){return t(O)}}).$mount("#app")}},b259:function(t){t.exports=JSON.parse('{"amount":"10000.00","duration":"5","monthlyInstallment":"5390.61 EUR"}')},b2b5:function(t,n,e){},bb98:function(t,n,e){"use strict";var a=e("2bbb"),o=e.n(a);o.a},bf01:function(t,n,e){"use strict";var a=e("b2b5"),o=e.n(a);o.a},c89a:function(t,n,e){},cf25:function(t,n,e){"use strict";var a=e("fea6"),o=e.n(a);o.a},fea6:function(t,n,e){}});
//# sourceMappingURL=app.13c50842.js.map