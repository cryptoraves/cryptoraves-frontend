webpackJsonp([1],{AiIB:function(t,s,a){t.exports=a.p+"static/img/cryptoraves_Horozontal Alignment_Full Color_JPG.9bb7237.png"},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),i=a("mtWM"),o=a.n(i),r={name:"App",data:function(){return{postBody:"",errors:[],user:"",userList:[],currentScroll:0,showHeader:!1}},created:function(){window.addEventListener("scroll",this.handleScroll),this.getUserList()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{getUserList:function(){var t=this;o.a.get("https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=searchBar").then(function(s){t.userList=s.data.userList}).catch(function(s){t.errors.push(s)})},goPortfolio:function(t){this.userList.includes(this.user)&&this.$router.push({name:"Portfolio",query:{user:this.user}})},handleScroll:function(t){this.currentScroll>t.srcElement.scrollingElement.scrollTop?t.srcElement.scrollingElement.scrollTop<=100&&(this.showHeader=!1):t.srcElement.scrollingElement.scrollTop>100&&(this.showHeader=!0),this.currentScroll=t.srcElement.scrollingElement.scrollTop}}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"header-area header-absolate",class:{fadeIn:!0===t.showHeader},attrs:{id:"nav"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-4 col-lg-2"},[e("div",{staticClass:"logo-area"},[e("router-link",{attrs:{to:"/"}},[e("img",{attrs:{src:a("AiIB"),alt:""}})])],1)]),t._v(" "),e("div",{staticClass:"col-8 col-lg-10 d-none d-lg-block text-right"},[e("div",{staticClass:"d-flex d-flex-right form-group mt-3"},[e("div",{staticClass:"d-flex"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],staticClass:"form-control c-search-input",attrs:{type:"text",list:"mylist",placeholder:"Search for Twitter handle."},domProps:{value:t.user},on:{input:function(s){s.target.composing||(t.user=s.target.value)}}}),t._v(" "),e("datalist",{attrs:{id:"mylist"}},t._l(t.userList,function(s){return e("option",{key:s,domProps:{value:s}},[t._v("\n                                  "+t._s(s)+"\n                              ")])}),0),t._v(" "),e("a",{staticClass:"gradient-btn subscribe c-search",attrs:{href:"#"},on:{click:t.goPortfolio}},[e("i",{staticClass:"fa fa-search"})])]),t._v(" "),e("router-link",{staticClass:"gradient-btn subscribe animated-button ml-2",attrs:{to:"/"}},[t._v("Get Your Tokens!")])],1)])])])]),t._v(" "),e("router-view"),t._v(" "),e("div",{staticClass:"community-area wow fadeInUp section-padding",attrs:{id:"contact"}},[e("div",{staticClass:"container"},[t._m(1),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-md-6 col-sm-12"},[e("div",{staticClass:"single-footer"},[e("div",{staticClass:"logo-area footer"},[e("router-link",{attrs:{to:"/"}},[e("img",{attrs:{src:a("R4aY"),alt:""}})])],1),t._v(" "),e("p",{staticClass:"ml-2 mt-1"},[t._v("It's Crypto You can Tweet!")])])]),t._v(" "),t._m(2)])])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-4 d-block d-lg-none"},[s("div",{staticClass:"mobile-menu"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 text-center"},[s("div",{staticClass:"heading"},[s("div",{staticClass:"space-10"}),this._v(" "),s("h1",[this._v("Our Community ")]),this._v(" "),s("p",[this._v("Contact: info@cryptoraves.space")])]),this._v(" "),s("div",{staticClass:"space-60"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-lg-6 col-md-6 col-sm-12 d-flex-end"},[s("div",{staticClass:"single-community mid-social"},[s("a",{staticClass:"twitter",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-twitter"})])]),this._v(" "),s("div",{staticClass:"single-community mid-social"},[s("a",{staticClass:"youtube",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-reddit"})])]),this._v(" "),s("div",{staticClass:"single-community mid-social"},[s("a",{staticClass:"github",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-facebook"})])]),this._v(" "),s("div",{staticClass:"single-community mid-social"},[s("a",{staticClass:"behance",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-medium"})])])])}]};var c=a("VU/8")(r,n,!1,function(t){a("dBQ8")},null,null).exports,l=a("/ocq"),v={name:"Landing",data:function(){return{title:"It's Crypto You Can Tweet!",copyTweet:"@cryptoraves #makeitrave",message:""}},methods:{clipboardSuccessHandler:function(t){t.value,t.event;this.message="copied successfully"},clipboardErrorHandler:function(t){t.value,t.event;this.message="copy error"},goTweeter:function(){window.open("https://twitter.com")}}},d={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"landing"},[t._m(0),t._v(" "),a("div",{staticClass:"distibution-bg"},[a("div",{staticClass:"distibution wow fadeInUp",attrs:{id:"token"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 mt-2"},[a("div",{staticClass:"single-about"},[a("div",{staticClass:"single-about-text"},[a("h4",[t._v("Get Your Tokens!")]),t._v(" "),a("p",[t._v("\n                                      Tweet: @cryptoraves #makeitrave\n                                      "),a("i",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.copyTweet,expression:"copyTweet"},{name:"clipboard",rawName:"v-clipboard:success",value:t.clipboardSuccessHandler,expression:"clipboardSuccessHandler",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.clipboardErrorHandler,expression:"clipboardErrorHandler",arg:"error"}],staticClass:"fa fa-copy"}),t._v(" "),a("i",{staticClass:"fa fa-twitter",on:{click:t.goTweeter}})]),t._v(" "),a("p",[t._v(t._s(t.message))])])])]),t._v(" "),t._m(1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)]),t._v(" "),a("div",{staticClass:"space-90"})])]),t._v(" "),t._m(5)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"welcome-area wow fadeInUp",attrs:{id:"home"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"space-90"}),this._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-12 align-self-center"},[s("div",{staticClass:"welcome-right"},[s("div",{staticClass:"welcome-text"},[s("h1",[this._v("It's Crypto You Can Tweet!")]),this._v(" "),s("h4",[this._v("Get free tokens. Share without fees.\n                          "),s("br"),this._v("Add value to your online cred.")])])])])]),this._v(" "),s("div",{staticClass:"space-90"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-lg-6 mt-2"},[a("div",{staticClass:"single-about"},[a("div",{staticClass:"single-about-text"},[a("h4",[t._v("Share Them!")]),t._v(" "),a("p",[t._v("\n                                      This "),a("b",[t._v("Tweet")]),t._v(" sends 2000 tokens to @Alice:\n                                      "),a("br"),a("span",[t._v("@cryptoraves 2000 @Alice")]),t._v(" "),a("br"),t._v("This "),a("b",[t._v("Tweet reply")]),t._v(" sends 2000 tokens to the original poster: \n                                      "),a("br"),a("span",[t._v("@cryptoraves 2000")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 mt-4"},[a("div",{staticClass:"single-about"},[a("div",{staticClass:"single-about-text"},[a("h4",[t._v("See Your Balance!")]),t._v(" "),a("p",{staticClass:"d-flex"},[a("input",{staticClass:"form-control c-search-input",attrs:{type:"text",placeholder:"Get Your Twiter Handle!"}}),t._v(" "),a("span",{staticClass:"gradient-btn subscribe c-search"},[a("i",{staticClass:"fa fa-search"})])]),t._v(" "),a("h6",{staticClass:"d-flex d-space"},[a("span",[t._v("Total Cryptoraves Token Balance "),a("b",{staticClass:"ml-4"},[t._v("45,000,000.5")])])]),t._v(" "),a("p",[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("From")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Amount")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("To")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Date")])])]),t._v(" "),a("tbody",[a("tr",[a("th",{attrs:{scope:"row"}},[t._v("1")]),t._v(" "),a("td",[t._v("@Alice")]),t._v(" "),a("td",[t._v("1000")]),t._v(" "),a("td",[t._v("@mdo")]),t._v(" "),a("td",[t._v("05/01/2019")])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v("2")]),t._v(" "),a("td",[t._v("@Alice")]),t._v(" "),a("td",[t._v("2000")]),t._v(" "),a("td",[t._v("@fat")]),t._v(" "),a("td",[t._v("06/01/2019")])])])])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12 mt-4"},[s("div",{staticClass:"single-about"},[s("div",{staticClass:"single-about-text"},[s("h4",[this._v("What are cryptoraves Tokens?")]),this._v(" "),s("p",[this._v("\n                                      Cryptoraves are Ethereum based tokens that you can share on Twitter.\n                                      Social media users like you will have more control over your online voice.\n                                      You can give and receive cryptoraves tokens as recognition for important ideas.\n                                      You now become empowered to build a new kind of social value system.\n                                  ")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 mt-4"},[s("div",{staticClass:"single-about"},[s("div",{staticClass:"single-about-text"},[s("h4",[this._v("Learn More!")]),this._v(" "),s("p",[this._v("\n                                      See our Reddit Alpha-Lounch Announcement. (link)\n                                      Read our blog series. (Medium icon, link to our page)\n                                  ")])])])]),this._v(" "),s("div",{staticClass:"col-lg-6 mt-4"},[s("div",{staticClass:"single-about"},[s("div",{staticClass:"single-about-text"},[s("h4",[this._v("Donate Here")]),this._v(" "),s("p",[this._v("                                         \n                                      Click here for a link to our wallet.                                \n                                  ")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"roadmap-area section-padding wow fadeInUp",attrs:{id:"roadmap"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center"},[e("div",{staticClass:"heading"},[e("h5",[t._v("history Timeline")]),t._v(" "),e("div",{staticClass:"space-10"}),t._v(" "),e("h1",[t._v("Development Roadmap")])]),t._v(" "),e("div",{staticClass:"space-60 d-none d-sm-block"})])])]),t._v(" "),e("div",{staticClass:"container"},[e("div",[e("div",{staticClass:"roadmap-item"},[e("div",{staticClass:"single-roadmap text-center road-left"},[e("div",{staticClass:"single-roadmap-img"},[e("img",{attrs:{src:a("nulN"),alt:""}})]),t._v(" "),e("div",{staticClass:"roadmap-text"},[e("p",[t._v("Q1 2019")]),t._v(" "),e("div",{staticClass:"space-10"}),t._v(" "),e("h5",[t._v("Alpha-Launch (link to M blog)")])])])]),t._v(" "),e("div",{staticClass:"roadmap-item"},[e("div",{staticClass:"single-roadmap text-center road-left"},[e("div",{staticClass:"single-roadmap-img"},[e("img",{attrs:{src:a("n+AU"),alt:""}})]),t._v(" "),e("div",{staticClass:"roadmap-text"},[e("p",[t._v("Q2 ~ Q4 2019")]),t._v(" "),e("div",{staticClass:"space-10"}),t._v(" "),e("h5",[t._v("Building the cryptoraves Vision (link to M blog)")])])])]),t._v(" "),e("div",{staticClass:"roadmap-item"},[e("div",{staticClass:"single-roadmap text-center road-left"},[e("div",{staticClass:"single-roadmap-img"},[e("img",{attrs:{src:a("NhTv"),alt:""}})]),t._v(" "),e("div",{staticClass:"roadmap-text"},[e("p",[t._v("Q1 2020")]),t._v(" "),e("div",{staticClass:"space-10"}),t._v(" "),e("h5",[t._v("Beta-Launch (link to M blog)")])])])])])])])}]};var u=a("VU/8")(v,d,!1,function(t){a("UoFH")},"data-v-f182eed4",null).exports,_={name:"Portfolio",data:function(){return{txnId:"",tableRows:[]}},created:function(){this.txnId=this.$route.query.txnId,this.getTransaction(this.txnId)},methods:{getTransaction:function(t){var s=this;o.a.get("https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=confirmationPage&txnId="+t).then(function(t){var a=JSON.parse(t.data);s.tableRows=a.tableRows}).catch(function(t){s.errors.push(t)})},goAnother:function(t){this.$router.push({name:"Portfolio",query:{user:t}})}}},h={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"distibution-bg"},[a("div",{staticClass:"distibution wow fadeInUp",attrs:{id:"token"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"single-about"},[a("div",{staticClass:"single-about-text"},[t._m(1),t._v(" "),a("p",[a("table",{staticClass:"table"},[t._m(2),t._v(" "),a("tbody",t._l(t.tableRows,function(s){return a("tr",{key:s.txnId},[a("td",{on:{click:function(a){return t.goAnother(s.from)}}},[a("b",[t._v(t._s(s.from))])]),t._v(" "),a("td",[t._v(t._s(s.amount))]),t._v(" "),a("td",{on:{click:function(a){return t.goAnother(s.to)}}},[a("b",[t._v(t._s(s.to))])]),t._v(" "),a("td",[t._v(t._s(s.date))])])}),0)])])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-12 align-self-center"},[a("div",{staticClass:"welcome-right"},[a("div",{staticClass:"welcome-text"},[a("h4",{staticClass:"mt-4"},[t._v("Transaction ID# "+t._s(t.txnId))])])])])])]),t._v(" "),a("div",{staticClass:"space-90"})])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"welcome-area wow fadeInUp",attrs:{id:"home"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"space-90"}),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-12 align-self-center"},[a("div",{staticClass:"welcome-right"},[a("div",{staticClass:"welcome-text"},[a("h1",[t._v("It's Crypto You Can Tweet!")]),t._v(" "),a("h4",[t._v("Get free tokens. Share without fees.\n                            "),a("br"),t._v("Add value to your online cred.")]),t._v(" "),a("h2",[t._v("Transaction Confirmed.")])])])])]),t._v(" "),a("div",{staticClass:"space-90"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h6",{staticClass:"d-flex d-space"},[s("span",[this._v("Transaction information")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[this._v("From")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("Amount")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("To")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("Date")])])])}]},p=a("VU/8")(_,h,!1,null,null,null).exports,m={name:"Portfolio",data:function(){return{user:"",tableRows:[],rowCount:0,tokenBalance:"0",earliestDatetime:""}},created:function(){this.user=this.$route.query.user,this.getPortfolio(this.user)},beforeRouteUpdate:function(t,s,a){this.user=t.query.user,this.getPortfolio(this.user),a()},methods:{getPortfolio:function(t){var s=this;o.a.get("https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=portfolioPage&userName="+t).then(function(a){s.user=t;var e=JSON.parse(a.data);s.tableRows=e.tableRows,s.rowCount=e.rowCount,s.tokenBalance=e.tokenBalance,s.earliestDatetime=e.earliestDatetime}).catch(function(t){s.errors.push(t)})},goAnother:function(t){this.getPortfolio(t)},goTransaction:function(t){this.$router.push({name:"Confirmation",query:{txnId:t}})}}},f={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"welcome-area wow fadeInUp",attrs:{id:"home"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"space-90"}),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-12 align-self-center"},[a("div",{staticClass:"welcome-right"},[a("div",{staticClass:"welcome-text"},[a("h1",[t._v(t._s(t.user)+"'s Cryptoraves Tokens")]),t._v(" "),t._m(0)])])])]),t._v(" "),a("div",{staticClass:"space-90"})])]),t._v(" "),a("div",{staticClass:"distibution-bg"},[a("div",{staticClass:"distibution wow fadeInUp",attrs:{id:"token"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"single-about"},[a("div",{staticClass:"single-about-text"},[a("h4",[t._v("Total Cryptoraves Token Balance "),a("b",{staticClass:"ml-4"},[t._v(t._s(t.tokenBalance))])]),t._v(" "),a("h6",{staticClass:"d-flex d-space"},[a("span",[t._v("Transaction history")]),t._v(" "),a("small",[t._v("Earliest "+t._s(t.earliestDatetime))])]),t._v(" "),a("p",[a("table",{staticClass:"table"},[t._m(1),t._v(" "),a("tbody",t._l(t.tableRows,function(s,e){return a("tr",{key:s.txnId,attrs:{index:e}},[a("th",{attrs:{scope:"row"},on:{click:function(a){return t.goTransaction(s.txnId)}}},[a("b",[t._v(t._s(e+1))])]),t._v(" "),a("td",{on:{click:function(a){return t.goAnother(s.from)}}},[a("b",[t._v(t._s(s.from))])]),t._v(" "),a("td",[t._v(t._s(s.amount))]),t._v(" "),a("td",{on:{click:function(a){return t.goAnother(s.to)}}},[a("b",[t._v(t._s(s.to))])]),t._v(" "),a("td",[t._v(t._s(s.date))])])}),0)])])])])])])]),t._v(" "),a("div",{staticClass:"space-90"})])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h4",[this._v("Get free tokens. Share without fees.\r\n                            "),s("br"),this._v("Add value to your online cred.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("From")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Amount")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("To")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Date")])])])}]},C=a("VU/8")(m,f,!1,null,null,null).exports;e.a.use(l.a);var g=new l.a({routes:[{path:"/",name:"Landing",component:u},{path:"/confirmation/:txnId",name:"Confirmation",component:p},{path:"/portfolio/:user?",name:"Portfolio",component:C}]}),b=a("DOD7"),w=a.n(b);a("K3J8");e.a.config.productionTip=!1,e.a.use(w.a),e.a.directive("autocomplete",{bind:function(){this.input=document.querySelector("input")},update:function(t,s){},unbind:function(){}}),new e.a({el:"#app",router:g,components:{App:c},template:"<App/>"}).$mount("#app")},NhTv:function(t,s,a){t.exports=a.p+"static/img/OLVCJG11.b372ba5.png"},R4aY:function(t,s,a){t.exports=a.p+"static/img/cryptoraves_Horozontal Alignment_Full Color_JPG2.7bc8b54.png"},UoFH:function(t,s){},dBQ8:function(t,s){},"n+AU":function(t,s,a){t.exports=a.p+"static/img/OLVCJG10.631b3ab.png"},nulN:function(t,s,a){t.exports=a.p+"static/img/OLVCJG9.a226332.png"}},["NHnr"]);
//# sourceMappingURL=app.87fbd11d1c3a78a5908a.js.map