webpackJsonp([1],{"619t":function(t,s){},AiIB:function(t,s,a){t.exports=a.p+"static/img/cryptoraves_Horozontal Alignment_Full Color_JPG.9bb7237.png"},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("7+uW"),e=a("mtWM"),o=a.n(e),c={name:"App",data:function(){return{postBody:"",errors:[]}},methods:{getUserList:function(){var t=this;o.a.get("https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=searchBar").then(function(t){console.log(t)}).catch(function(s){t.errors.push(s)})},postPost:function(){var t=this;o.a.post("https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=searchBar",{body:this.postBody}).then(function(t){console.log(t)}).catch(function(s){t.errors.push(s)})}}},l={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"header-area wow fadeInDown header-absolate",attrs:{id:"nav","data-0":"position:fixed;","data-top-top":"position:fixed;top:0;","data-edge-strategy":"set"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[t._m(0),t._v(" "),i("div",{staticClass:"col-4 col-lg-2"},[i("div",{staticClass:"logo-area"},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:a("AiIB"),alt:""}})])],1)]),t._v(" "),i("div",{staticClass:"col-8 col-lg-10 d-none d-lg-block text-right"},[i("div",{staticClass:"d-flex d-flex-right form-group mt-3"},[i("div",{staticClass:"d-flex"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.postBody,expression:"postBody"}],staticClass:"form-control c-search-input",attrs:{type:"text",placeholder:"Search for Twitter handle."},domProps:{value:t.postBody},on:{change:function(s){return t.getUserList()},input:function(s){s.target.composing||(t.postBody=s.target.value)}}}),t._v(" "),i("router-link",{staticClass:"gradient-btn subscribe c-search",attrs:{to:"/portfolio"}},[i("i",{staticClass:"fa fa-search"})])],1),t._v(" "),i("router-link",{staticClass:"gradient-btn subscribe animated-button ml-2",attrs:{to:"/"}},[t._v("Get Your Tokens!")])],1)])])])]),t._v(" "),i("router-view"),t._v(" "),i("div",{staticClass:"community-area wow fadeInUp section-padding",attrs:{id:"contact"}},[i("div",{staticClass:"container"},[t._m(1),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-6 col-md-6 col-sm-12"},[i("div",{staticClass:"single-footer"},[i("div",{staticClass:"logo-area footer"},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:a("R4aY"),alt:""}})])],1),t._v(" "),i("p",{staticClass:"ml-2 mt-1"},[t._v("It's Crypto You can Tweet!")])])]),t._v(" "),t._m(2)])])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-4 d-block d-lg-none"},[s("div",{staticClass:"mobile-menu"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 text-center"},[s("div",{staticClass:"heading"},[s("h5",[this._v("Great Community")]),this._v(" "),s("div",{staticClass:"space-10"}),this._v(" "),s("h1",[this._v("Our Community ")]),this._v(" "),s("p",[this._v("Contact: info@cryptoraves.space")])]),this._v(" "),s("div",{staticClass:"space-60"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-lg-6 col-md-6 col-sm-12 d-flex-end"},[s("div",{staticClass:"single-community mid-social"},[s("a",{staticClass:"github",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-facebook"})])]),this._v(" "),s("div",{staticClass:"single-community mid-social"},[s("a",{staticClass:"twitter",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-twitter"})])]),this._v(" "),s("div",{staticClass:"single-community mid-social"},[s("a",{staticClass:"youtube",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-reddit"})])]),this._v(" "),s("div",{staticClass:"single-community mid-social"},[s("a",{staticClass:"behance",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-medium"})])])])}]};var n=a("VU/8")(c,l,!1,function(t){a("619t")},null,null).exports,r=a("/ocq"),v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"landing"},[i("div",{staticClass:"welcome-area wow fadeInUp",attrs:{id:"home"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"space-90"}),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-12 align-self-center"},[i("div",{staticClass:"welcome-right"},[i("div",{staticClass:"welcome-text"},[i("h1",[t._v("It's Crypto You Can Tweet!")]),t._v(" "),i("h4",[t._v("Get free tokens. Share without fees. Add value to your online cred.")])])])])]),t._v(" "),i("div",{staticClass:"space-90"})])]),t._v(" "),i("div",{staticClass:"distibution-bg"},[i("div",{staticClass:"distibution wow fadeInUp",attrs:{id:"token"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-6 mt-2"},[i("div",{staticClass:"single-about"},[i("div",{staticClass:"single-about-text"},[i("h4",[t._v("Get Your Tokens!")]),t._v(" "),i("p",[t._v("\n                                      Tweet: @cryptoraves #makeitrage\n                                      "),i("i",{staticClass:"fa fa-copy"}),t._v(" "),i("i",{staticClass:"fa fa-twitter"})])])])]),t._v(" "),i("div",{staticClass:"col-lg-6 mt-2"},[i("div",{staticClass:"single-about"},[i("div",{staticClass:"single-about-text"},[i("h4",[t._v("Share Them!")]),t._v(" "),i("p",[t._v("\n                                      This Tweet sends 2000 tokens to @Alices @cryptoraves 2000 @Alice. \n                                      This Tweet reply sends 2000 tokens to the original poster: @cryptoraves 2000.\n                                  ")])])])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-12 mt-4"},[i("div",{staticClass:"single-about"},[i("div",{staticClass:"single-about-text"},[i("h4",[t._v("See Your Balance!")]),t._v(" "),i("p",{staticClass:"d-flex"},[i("input",{staticClass:"form-control c-search-input",attrs:{type:"text",placeholder:"Get Your Tokens!"}}),t._v(" "),i("span",{staticClass:"gradient-btn subscribe c-search"},[i("i",{staticClass:"fa fa-search"})])]),t._v(" "),i("h6",{staticClass:"d-flex d-space"},[i("span",[t._v("Transaction history")]),t._v(" "),i("span",[t._v("Total Cryptoraves Token Balance "),i("b",{staticClass:"ml-4"},[t._v("45,000,000.5")])])]),t._v(" "),i("p",[i("table",{staticClass:"table"},[i("thead",[i("tr",[i("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),i("th",{attrs:{scope:"col"}},[t._v("From")]),t._v(" "),i("th",{attrs:{scope:"col"}},[t._v("Amount")]),t._v(" "),i("th",{attrs:{scope:"col"}},[t._v("To")]),t._v(" "),i("th",{attrs:{scope:"col"}},[t._v("Date")])])]),t._v(" "),i("tbody",[i("tr",[i("th",{attrs:{scope:"row"}},[t._v("1")]),t._v(" "),i("td",[t._v("@Alice")]),t._v(" "),i("td",[t._v("1000")]),t._v(" "),i("td",[t._v("@mdo")]),t._v(" "),i("td",[t._v("05/01/2019")])]),t._v(" "),i("tr",[i("th",{attrs:{scope:"row"}},[t._v("2")]),t._v(" "),i("td",[t._v("@Alice")]),t._v(" "),i("td",[t._v("2000")]),t._v(" "),i("td",[t._v("@fat")]),t._v(" "),i("td",[t._v("06/01/2019")])])])])])])])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-12 mt-4"},[i("div",{staticClass:"single-about"},[i("div",{staticClass:"single-about-text"},[i("h4",[t._v("What are cryptoraves Tokens?")]),t._v(" "),i("p",[t._v("\n                                      Cryptoraves are Ethereum based tokens that you can share on Twitter.\n                                      Social media users like you will have more control over your online voice.\n                                      You can give and receive cryptoraves tokens as recognition for important ideas.\n                                      You now become empowered to build a new kind of social value system.\n                                  ")])])])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-6 mt-4"},[i("div",{staticClass:"single-about"},[i("div",{staticClass:"single-about-text"},[i("h4",[t._v("Learn More!")]),t._v(" "),i("p",[t._v("\n                                      See our Reddit Alpha-Lounch Announcement. (link)\n                                      Read our blog series. (Medium icon, link to our page)\n                                  ")])])])]),t._v(" "),i("div",{staticClass:"col-lg-6 mt-4"},[i("div",{staticClass:"single-about"},[i("div",{staticClass:"single-about-text"},[i("h4",[t._v("Donate Here")]),t._v(" "),i("p",[t._v("                                         \n                                      Click here for a link to our wallet.                                \n                                  ")])])])])])]),t._v(" "),i("div",{staticClass:"space-90"})])]),t._v(" "),i("div",{staticClass:"roadmap-area section-padding wow fadeInUp",attrs:{id:"roadmap"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 text-center"},[i("div",{staticClass:"heading"},[i("h5",[t._v("history Timeline")]),t._v(" "),i("div",{staticClass:"space-10"}),t._v(" "),i("h1",[t._v("Development Roadmap")])]),t._v(" "),i("div",{staticClass:"space-60 d-none d-sm-block"})])])]),t._v(" "),i("div",{staticClass:"container"},[i("div",[i("div",{staticClass:"roadmap-item"},[i("div",{staticClass:"single-roadmap text-center road-left"},[i("div",{staticClass:"single-roadmap-img"},[i("img",{attrs:{src:a("nulN"),alt:""}})]),t._v(" "),i("div",{staticClass:"roadmap-text"},[i("p",[t._v("Q1 2019")]),t._v(" "),i("div",{staticClass:"space-10"}),t._v(" "),i("h5",[t._v("Alpha-Launch (link to M blog)")])])])]),t._v(" "),i("div",{staticClass:"roadmap-item"},[i("div",{staticClass:"single-roadmap text-center road-left"},[i("div",{staticClass:"single-roadmap-img"},[i("img",{attrs:{src:a("n+AU"),alt:""}})]),t._v(" "),i("div",{staticClass:"roadmap-text"},[i("p",[t._v("Q2 ~ Q4 2019")]),t._v(" "),i("div",{staticClass:"space-10"}),t._v(" "),i("h5",[t._v("Building the cryptoraves Vision (link to M blog)")])])])]),t._v(" "),i("div",{staticClass:"roadmap-item"},[i("div",{staticClass:"single-roadmap text-center road-left"},[i("div",{staticClass:"single-roadmap-img"},[i("img",{attrs:{src:a("NhTv"),alt:""}})]),t._v(" "),i("div",{staticClass:"roadmap-text"},[i("p",[t._v("Q1 2020")]),t._v(" "),i("div",{staticClass:"space-10"}),t._v(" "),i("h5",[t._v("Beta-Launch (link to M blog)")])])])])])])])])}]};var d=a("VU/8")({name:"Landing",data:function(){return{title:"It's Crypto You Can Tweet!"}}},v,!1,function(t){a("bhS0")},"data-v-5a325f93",null).exports,_={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"distibution-bg"},[a("div",{staticClass:"distibution wow fadeInUp",attrs:{id:"token"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"single-about"},[a("div",{staticClass:"single-about-text"},[t._m(1),t._v(" "),a("p",[a("table",{staticClass:"table"},[t._m(2),t._v(" "),a("tbody",[a("tr",[a("th",{attrs:{scope:"row"}},[t._v("1")]),t._v(" "),a("td",[a("router-link",{attrs:{to:"/portfolio"}},[t._v("@Alice")])],1),t._v(" "),a("td",[t._v("1000")]),t._v(" "),a("td",[t._v("@mdo")]),t._v(" "),a("td",[t._v("05/01/2019")])])])])])])])])]),t._v(" "),t._m(3)]),t._v(" "),a("div",{staticClass:"space-90"})])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"welcome-area wow fadeInUp",attrs:{id:"home"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"space-90"}),this._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-12 align-self-center"},[s("div",{staticClass:"welcome-right"},[s("div",{staticClass:"welcome-text"},[s("h1",[this._v("Transaction Confirmed?")]),this._v(" "),s("h4",[this._v("Get free tokens. Share without fees. Add value to your online cred.")]),this._v(" "),s("h2",[this._v("Transaction Confirmed.")])])])])]),this._v(" "),s("div",{staticClass:"space-90"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h6",{staticClass:"d-flex d-space"},[s("span",[this._v("Transaction information")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("From")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Amount")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("To")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Date")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-12 align-self-center"},[s("div",{staticClass:"welcome-right"},[s("div",{staticClass:"welcome-text"},[s("h4",{staticClass:"mt-4"},[this._v("Transaction ID# 01Zx...")])])])])])}]},p=a("VU/8")(null,_,!1,null,null,null).exports,h={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"distibution-bg"},[a("div",{staticClass:"distibution wow fadeInUp",attrs:{id:"token"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"single-about"},[a("div",{staticClass:"single-about-text"},[t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[a("table",{staticClass:"table"},[t._m(3),t._v(" "),a("tbody",[a("tr",[a("th",{attrs:{scope:"row"}},[a("router-link",{attrs:{to:"/confirmation"}},[t._v("1")])],1),t._v(" "),t._m(4),t._v(" "),a("td",[t._v("1000")]),t._v(" "),a("td",[t._v("@mdo")]),t._v(" "),a("td",[t._v("05/01/2019")])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[a("router-link",{attrs:{to:"/confirmation"}},[t._v("2")])],1),t._v(" "),t._m(5),t._v(" "),a("td",[t._v("2000")]),t._v(" "),a("td",[t._v("@fat")]),t._v(" "),a("td",[t._v("06/01/2019")])])])])])])])])])]),t._v(" "),a("div",{staticClass:"space-90"})])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"welcome-area wow fadeInUp",attrs:{id:"home"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"space-90"}),this._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-12 align-self-center"},[s("div",{staticClass:"welcome-right"},[s("div",{staticClass:"welcome-text"},[s("h1",[this._v("@Vitalik Boterin's Cryptoraves Token")]),this._v(" "),s("h4",[this._v("Get free tokens. Share without fees. Add value to your online cred.")])])])])]),this._v(" "),s("div",{staticClass:"space-90"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",[this._v("Total Cryptoraves Token Balance "),s("b",{staticClass:"ml-4"},[this._v("45,000,000.5")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h6",{staticClass:"d-flex d-space"},[s("span",[this._v("Transaction history")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("From")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Amount")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("To")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Date")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",[s("a",{attrs:{href:"#"}},[this._v("@Alice")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",[s("a",{attrs:{href:"#"}},[this._v("@Alice")])])}]},u=a("VU/8")(null,h,!1,null,null,null).exports;i.a.use(r.a);var m=new r.a({routes:[{path:"/",name:"Landing",component:d},{path:"/confirmation",name:"Confirmation",component:p},{path:"/portfolio",name:"Portfolio",component:u}]});a("K3J8");i.a.config.productionTip=!1,new i.a({el:"#app",router:m,components:{App:n},template:"<App/>"})},NhTv:function(t,s,a){t.exports=a.p+"static/img/OLVCJG11.b372ba5.png"},R4aY:function(t,s,a){t.exports=a.p+"static/img/cryptoraves_Horozontal Alignment_Full Color_JPG2.7bc8b54.png"},bhS0:function(t,s){},"n+AU":function(t,s,a){t.exports=a.p+"static/img/OLVCJG10.631b3ab.png"},nulN:function(t,s,a){t.exports=a.p+"static/img/OLVCJG9.a226332.png"}},["NHnr"]);
//# sourceMappingURL=app.74de92158174377c2a80.js.map