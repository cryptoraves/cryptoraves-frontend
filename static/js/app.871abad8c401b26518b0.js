webpackJsonp([1],{AiIB:function(t,s,e){t.exports=e.p+"static/img/cryptoraves_Horozontal Alignment_Full Color_JPG.9bb7237.png"},LOA1:function(t,s,e){t.exports=e.p+"static/img/1.dba7044.png"},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),i=e("mtWM"),o=e.n(i),n={name:"App",data:function(){return{postBody:"",errors:[],user:"",userList:[],currentScroll:0,showHeader:!1}},mounted:function(){},created:function(){window.addEventListener("scroll",this.handleScroll),this.getUserList()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{getUserList:function(){var t=this;o.a.get("https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=searchBar").then(function(s){t.userList=s.data.userList}).catch(function(s){t.errors.push(s)})},onDone:function(){document.querySelector("#getToken").style.animation="shadow-pulse 1s",document.querySelector("#getToken").style.animationIterationCount="3"},goPortfolio:function(t){this.userList.includes(this.user)&&this.$router.push({name:"Portfolio",query:{user:this.user}})},handleScroll:function(t){this.currentScroll>t.srcElement.scrollingElement.scrollTop?t.srcElement.scrollingElement.scrollTop<=100&&(this.showHeader=!1):t.srcElement.scrollingElement.scrollTop>100&&(this.showHeader=!0),this.currentScroll=t.srcElement.scrollingElement.scrollTop}}},r={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"header-area header-absolate",class:{fadeIn:!0===t.showHeader},attrs:{id:"nav"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4 col-lg-2"},[a("div",{staticClass:"logo-area"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:e("AiIB"),alt:""}})])],1)]),t._v(" "),a("div",{staticClass:"col-8 col-lg-10 text-right"},[a("div",{staticClass:"d-flex d-flex-right form-group mt-3"},[a("div",{staticClass:"d-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],staticClass:"form-control c-search-input",attrs:{type:"text",list:"mylist",placeholder:"Search for Twitter handle."},domProps:{value:t.user},on:{change:t.goPortfolio,input:function(s){s.target.composing||(t.user=s.target.value)}}}),t._v(" "),a("datalist",{attrs:{id:"mylist"}},t._l(t.userList,function(s){return a("option",{key:s,domProps:{value:s}},[t._v("\n                                  "+t._s(s)+"\n                              ")])}),0),t._v(" "),a("a",{staticClass:"gradient-btn subscribe c-search",attrs:{href:"#"},on:{click:t.goPortfolio}},[a("i",{staticClass:"fa fa-search"})])]),t._v(" "),a("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#getToken",duration:500,easing:"linear",offset:-250,force:!0,onDone:t.onDone,cancelable:!0},expression:"{\n                          el: '#getToken',\n                          duration: 500,\n                          easing: 'linear',\n                          offset: -250,\n                          force: true,\n                          onDone: onDone,\n                          cancelable: true,                            \n                      }"}],staticClass:"gradient-btn subscribe animated-button ml-2",attrs:{to:"/"}},[t._v("Get Your Tokens!")])],1)])])])]),t._v(" "),a("router-view"),t._v(" "),a("div",{staticClass:"community-area wow fadeInUp section-padding",attrs:{id:"contact"}},[a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 col-md-6 col-sm-12"},[a("div",{staticClass:"single-footer"},[a("div",{staticClass:"logo-area footer"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:e("R4aY"),alt:""}})])],1),t._v(" "),a("p",{staticClass:"ml-2 mt-1"},[t._v("It's Crypto You can Tweet!")])])]),t._v(" "),t._m(1)])])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 text-center"},[s("div",{staticClass:"heading"},[s("div",{staticClass:"space-10"}),this._v(" "),s("h1",[this._v("Our Community ")]),this._v(" "),s("p",[this._v("Contact: info@cryptoraves.space")])]),this._v(" "),s("div",{staticClass:"space-60"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-lg-6 col-md-6 col-sm-12 d-flex-end"},[s("div",{staticClass:"single-community mid-social"},[s("a",{staticClass:"twitter",attrs:{href:"https://twitter.com/cryptoraves"}},[s("i",{staticClass:"fa fa-twitter"})])]),this._v(" "),s("div",{staticClass:"single-community mid-social"},[s("a",{staticClass:"youtube",attrs:{href:"https://www.reddit.com/user/cryptoraves"}},[s("i",{staticClass:"fa fa-reddit"})])]),this._v(" "),s("div",{staticClass:"single-community mid-social"},[s("a",{staticClass:"github",attrs:{href:"https://www.facebook.com/CryptoRaves/"}},[s("i",{staticClass:"fa fa-facebook"})])]),this._v(" "),s("div",{staticClass:"single-community mid-social"},[s("a",{staticClass:"behance",attrs:{href:"https://medium.com/@cryptoraves"}},[s("i",{staticClass:"fa fa-medium"})])])])}]};var c=e("VU/8")(n,r,!1,function(t){e("XZRx")},null,null).exports,l=e("/ocq"),v={name:"Landing",data:function(){return{title:"It's Crypto You Can Tweet!",copyTweet:"@cryptoraves #makeitrave",message:"",user:"",userList:[]}},created:function(){this.getUserList()},methods:{clipboardSuccessHandler:function(t){t.value,t.event;this.message="copied successfully"},goPortfolio:function(t){this.userList.includes(this.user)&&this.$router.push({name:"Portfolio",query:{user:this.user}})},getUserList:function(){var t=this;o.a.get("https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=searchBar").then(function(s){t.userList=s.data.userList}).catch(function(s){t.errors.push(s)})},clipboardErrorHandler:function(t){t.value,t.event;this.message="copy error"},goTweeter:function(){window.open("https://twitter.com")},goComingSoon:function(){window.open("https://medium.com/@cryptoraves/announcing-the-cryptoraves-roadmap-launch-plans-part-4-cb3879264368")},goCryptoToken:function(){window.open("https://medium.com/@cryptoraves/the-compelling-value-of-blockchain-technology-is-tokenization-part-1-1e421d3ef1df")},goBlog:function(){window.open("https://medium.com/@cryptoraves")}}},d={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"landing"},[a("div",{staticClass:"welcome-area wow fadeInUp",attrs:{id:"home"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"space-90"}),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-12 align-self-center"},[a("div",{staticClass:"welcome-right"},[a("div",{staticClass:"welcome-text"},[a("h1",[t._v("It's Crypto You Can Tweet!")]),t._v(" "),t._m(0),t._v(" "),a("br"),t._v(" "),a("h3",{staticClass:"link",on:{click:t.goComingSoon}},[t._v("Coming soon...")])])])])]),t._v(" "),a("div",{staticClass:"space-90"})])]),t._v(" "),a("div",{staticClass:"distibution-bg"},[a("div",{staticClass:"distibution wow fadeInUp",attrs:{id:"token"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 mt-2"},[a("div",{staticClass:"single-about",attrs:{id:"getToken"}},[a("div",{staticClass:"single-about-text"},[a("h4",[t._v("Get Your Tokens!")]),t._v(" "),a("p",[t._v("\n                                      Tweet: @cryptoraves #makeitrave\n                                      "),a("i",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.copyTweet,expression:"copyTweet"},{name:"clipboard",rawName:"v-clipboard:success",value:t.clipboardSuccessHandler,expression:"clipboardSuccessHandler",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.clipboardErrorHandler,expression:"clipboardErrorHandler",arg:"error"}],staticClass:"fa fa-copy link"}),t._v(" "),a("i",{staticClass:"fa fa-twitter link",on:{click:t.goTweeter}})]),t._v(" "),a("p",[t._v(t._s(t.message))]),t._v(" "),a("img",{staticStyle:{width:"90px"},attrs:{src:e("LOA1"),alt:""}})])])]),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 mt-4"},[a("div",{staticClass:"single-about"},[a("div",{staticClass:"single-about-text"},[a("h4",[t._v("See Your Balance!")]),t._v(" "),a("p",{staticClass:"d-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],staticClass:"form-control c-search-input",attrs:{type:"text",list:"mylist",placeholder:"Search for Twitter handle."},domProps:{value:t.user},on:{change:t.goPortfolio,input:function(s){s.target.composing||(t.user=s.target.value)}}}),t._v(" "),a("datalist",{attrs:{id:"mylist"}},t._l(t.userList,function(s){return a("option",{key:s,domProps:{value:s}},[t._v("\n                                              "+t._s(s)+"\n                                          ")])}),0),t._v(" "),a("span",{staticClass:"gradient-btn subscribe c-search link",on:{click:t.goPortfolio}},[a("i",{staticClass:"fa fa-search"})])]),t._v(" "),t._m(2),t._v(" "),t._m(3)])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 mt-4"},[a("div",{staticClass:"single-about"},[a("div",{staticClass:"single-about-text"},[a("h4",[t._v("What are cryptoraves Tokens?")]),t._v(" "),a("p",[t._v("                                        \n                                      Cryptoraves are Ethereum-based tokens that you can Tweet for free to grow your online cred. "),a("br"),t._v(" \n                                      Social media users like you spend a lot of time online, "),a("br"),t._v("\n                                      but you don’t have a way to capitalize on the value you are creating. "),a("br"),t._v(" \n                                      Sharing cryptoraves tokens empowers you to increase your social credibility, and allows you to"),a("br"),t._v(" "),a("u",{staticClass:"link",on:{click:t.goCryptoToken}},[t._v("reap the benefits of a tokenized economy.")])])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 mt-4"},[a("div",{staticClass:"single-about"},[a("div",{staticClass:"single-about-text"},[a("h4",[t._v("Learn More!")]),t._v(" "),a("p",[t._v("\n                                      Visit our social media pages for recent announcements, \n                                      and read our "),a("u",{staticClass:"link",on:{click:t.goBlog}},[t._v("Medium blog series")]),t._v(" for more info on cryptoraves.\n                                  ")])])])]),t._v(" "),t._m(4)])]),t._v(" "),a("div",{staticClass:"space-90"})])]),t._v(" "),t._m(5)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h4",[this._v("Get free tokens. Share without fees.\n                          "),s("br"),this._v("Add value to your online cred.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-lg-6 mt-2"},[e("div",{staticClass:"single-about"},[e("div",{staticClass:"single-about-text"},[e("h4",[t._v("Share Them!")]),t._v(" "),e("p",[t._v("\n                                      This "),e("b",[t._v("Tweet")]),t._v(" sends 2000 tokens to @Alice:\n                                      "),e("br"),e("span",[t._v("@cryptoraves 2000 @Alice")]),e("br"),t._v(" "),e("br"),t._v("This "),e("b",[t._v("Tweet reply")]),t._v(" sends 2000 tokens to the original poster: \n                                      "),e("br"),e("span",[t._v("@cryptoraves 2000")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h6",{staticClass:"d-flex d-space"},[s("span",[this._v("Total Cryptoraves Token Balance "),s("b",{staticClass:"ml-4"},[this._v("45,000,000.5")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"table-responsive"},[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("From")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Amount")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("To")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Date")])])]),t._v(" "),e("tbody",[e("tr",[e("th",{attrs:{scope:"row"}},[t._v("1")]),t._v(" "),e("td",[t._v("@Alice")]),t._v(" "),e("td",[t._v("1000")]),t._v(" "),e("td",[t._v("@Bob")]),t._v(" "),e("td",[t._v("05/01/2019")])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("2")]),t._v(" "),e("td",[t._v("@Alice")]),t._v(" "),e("td",[t._v("2000")]),t._v(" "),e("td",[t._v("@Friedrick")]),t._v(" "),e("td",[t._v("06/01/2019")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-lg-6 mt-4"},[s("div",{staticClass:"single-about"},[s("div",{staticClass:"single-about-text"},[s("h4",[this._v("Donate Here")]),this._v(" "),s("p",[this._v(" Wallet Address : "),s("br"),this._v(" "),s("b",[this._v("0xE1A3435B683d863bCB6c8aA093De08ED0557eE99")])]),this._v(" "),s("img",{staticStyle:{width:"45px"},attrs:{src:e("QJKT"),alt:""}})])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"roadmap-area section-padding wow fadeInUp",attrs:{id:"roadmap"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center"},[a("div",{staticClass:"heading"},[a("h1",[t._v("Development Roadmap")])]),t._v(" "),a("div",{staticClass:"space-60 d-none d-sm-block"})])])]),t._v(" "),a("div",{staticClass:"container"},[a("div",[a("div",{staticClass:"roadmap-item"},[a("div",{staticClass:"single-roadmap text-center road-left"},[a("div",{staticClass:"single-roadmap-img"},[a("img",{attrs:{src:e("nulN"),alt:""}})]),t._v(" "),a("div",{staticClass:"roadmap-text"},[a("p",[t._v("Q2 2019")]),t._v(" "),a("div",{staticClass:"space-10"}),t._v(" "),a("h5",[t._v("Alpha Launch")])])])]),t._v(" "),a("div",{staticClass:"roadmap-item"},[a("div",{staticClass:"single-roadmap text-center road-left"},[a("div",{staticClass:"single-roadmap-img"},[a("img",{attrs:{src:e("n+AU"),alt:""}})]),t._v(" "),a("div",{staticClass:"roadmap-text"},[a("p",[t._v("Q2 ~ Q4 2019")]),t._v(" "),a("div",{staticClass:"space-10"}),t._v(" "),a("h5",[t._v("Building Beta Product")])])])]),t._v(" "),a("div",{staticClass:"roadmap-item"},[a("div",{staticClass:"single-roadmap text-center road-left"},[a("div",{staticClass:"single-roadmap-img"},[a("img",{attrs:{src:e("NhTv"),alt:""}})]),t._v(" "),a("div",{staticClass:"roadmap-text"},[a("p",[t._v("Q1 2020")]),t._v(" "),a("div",{staticClass:"space-10"}),t._v(" "),a("h5",[t._v("Beta Launch")])])])])])])])}]},u=e("VU/8")(v,d,!1,null,null,null).exports,p={name:"Portfolio",data:function(){return{txnId:"",txnID:"",tableRows:[]}},created:function(){this.txnId=this.$route.query.txnId,this.getTransaction(this.txnId)},methods:{getTransaction:function(t){var s=this;o.a.get("https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=confirmationPage&txnHash="+t).then(function(t){var e=t.data;s.tableRows=e.tableRows,s.txnID=s.tableRows[0].txn_hash}).catch(function(t){console.log(t)})},goAnother:function(t){this.$router.push({name:"Portfolio",query:{user:t}})}}},m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"welcome-area wow fadeInUp",attrs:{id:"home"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"space-90"}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-12 align-self-center"},[e("div",{staticClass:"welcome-right"},[e("div",{staticClass:"welcome-text"},[e("h1",[t._v("It's Crypto You Can Tweet!")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("Transaction Confirmed.")]),t._v(" "),e("h4",[t._v(t._s(t.txnID))])])])])]),t._v(" "),e("div",{staticClass:"space-90"})])]),t._v(" "),e("div",{staticClass:"distibution-bg"},[e("div",{staticClass:"distibution wow fadeInUp",attrs:{id:"token"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"single-about"},[e("div",{staticClass:"single-about-text"},[e("p",{staticClass:"table-responsive"},[e("table",{staticClass:"table"},[t._m(1),t._v(" "),e("tbody",t._l(t.tableRows,function(s){return e("tr",{key:s.txnId},[e("td",{staticClass:"link",on:{click:function(e){return t.goAnother(s.from)}}},[e("b",[t._v(t._s(s.from))])]),t._v(" "),e("td",[t._v(t._s(s.amount))]),t._v(" "),e("td",{staticClass:"link",on:{click:function(e){return t.goAnother(s.to)}}},[e("b",[t._v(t._s(s.to))])]),t._v(" "),e("td",[t._v(t._s(s.date))])])}),0)])])])])])])]),t._v(" "),e("div",{staticClass:"space-90"})])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h4",[this._v("Get free tokens. Share without fees.\n                            "),s("br"),this._v("Add value to your online cred.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[this._v("From")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("Amount")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("To")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("Date")])])])}]},_=e("VU/8")(p,m,!1,null,null,null).exports,h=e("M4fF"),f=e.n(h),g={name:"Portfolio",data:function(){return{user:"",tableRows:[],rowCount:0,tokenBalance:"0",earliestDatetime:"",latestDatetime:"",initialPagePtr:0,visibleNext:!0,visiblePrev:!0}},created:function(){this.user=this.$route.query.user,this.getPortfolio(this.user,0)},beforeRouteUpdate:function(t,s,e){this.user=t.query.user,this.getPortfolio(this.user,0),e()},methods:{goNext:function(){this.getPortfolio(this.user,1)},goPrev:function(){this.getPortfolio(this.user,2)},getPortfolio:function(t,s){var e=this;0==s?o.a.get("https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=portfolioPage&userName="+t).then(function(s){e.user=t;var a=s.data;e.tableRows=f.a.cloneDeep(a.tableRows),e.rowCount=a.rowCount,e.tokenBalance=a.tokenBalance,e.earliestDatetime=a.earliestDatetime,e.latestDatetime=a.latestDatetime,e.initialPagePtr=0,e.visiblePrev=!1,e.visibleNext=!!a.next}).catch(function(t){console.log(t)}):1==s?o.a.get("https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=portfolioPage&userName="+t+"&earliestDatetime="+this.earliestDatetime).then(function(s){e.user=t;var a=s.data;e.tableRows=f.a.cloneDeep(a.tableRows),e.rowCount=a.rowCount,e.tokenBalance=a.tokenBalance,e.latestDatetime=a.latestDatetime,e.earliestDatetime=a.earliestDatetime,e.initialPagePtr++,e.visiblePrev=!0,e.visibleNext=!!a.next}).catch(function(t){console.log(t)}):o.a.get("https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=portfolioPage&userName="+t+"&latestDatetime="+this.latestDatetime).then(function(s){e.user=t;var a=s.data;e.tableRows=f.a.cloneDeep(a.tableRows),e.rowCount=a.rowCount,e.tokenBalance=a.tokenBalance,e.latestDatetime=a.latestDatetime,e.earliestDatetime=a.earliestDatetime,e.initialPagePtr--,e.visiblePrev=!!a.prev,e.visibleNext=!0}).catch(function(t){console.log(t)})},goAnother:function(t){this.getPortfolio(t)},goTransaction:function(t){this.$router.push({name:"Confirmation",query:{txnId:t}})}}},C={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"welcome-area wow fadeInUp",attrs:{id:"home"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"space-90"}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-12 align-self-center"},[e("div",{staticClass:"welcome-right"},[e("div",{staticClass:"welcome-text"},[e("h1",[t._v(t._s(t.user)+"'s Cryptoraves Tokens")]),t._v(" "),t._m(0)])])])]),t._v(" "),e("div",{staticClass:"space-90"})])]),t._v(" "),e("div",{staticClass:"distibution-bg"},[e("div",{staticClass:"distibution wow fadeInUp",attrs:{id:"token"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"single-about"},[e("div",{staticClass:"single-about-text"},[e("h4",[t._v("Total Cryptoraves Token Balance "),e("b",{staticClass:"ml-4"},[t._v(t._s(t.tokenBalance))])]),t._v(" "),e("p",{staticClass:"table-responsive"},[e("table",{staticClass:"table"},[t._m(1),t._v(" "),e("tbody",t._l(t.tableRows,function(s,a){return e("tr",{key:s.txnId,attrs:{index:a}},[e("th",{staticClass:"link",attrs:{scope:"row"},on:{click:function(e){return t.goTransaction(s.txnHash)}}},[e("b",[t._v(t._s(t._f("truncate")(s.txnHash)))])]),t._v(" "),e("td",{staticClass:"link",on:{click:function(e){return t.goAnother(s.from)}}},[e("b",[t._v(t._s(s.from))])]),t._v(" "),e("td",[t._v(t._s(s.amount))]),t._v(" "),e("td",{staticClass:"link",on:{click:function(e){return t.goAnother(s.to)}}},[e("b",[t._v(t._s(s.to))])]),t._v(" "),e("td",[t._v(t._s(s.date))])])}),0),t._v(" "),e("tfoot",[e("td",{attrs:{colspan:"5"}},[e("span",{staticClass:"btn btnpagination",class:[t.visiblePrev?"":"disabledbtn"],on:{click:t.goPrev}},[e("i",{staticClass:"fa fa-angle-left"})]),t._v("\r\n                                                    Page "+t._s(t.initialPagePtr+1)+"\r\n                                                    "),e("span",{staticClass:"btn btnpagination",class:[t.visibleNext?"":"disabledbtn"],attrs:{href:"#"},on:{click:t.goNext}},[e("i",{staticClass:"fa fa-angle-right"})])])])])])])])])])]),t._v(" "),e("div",{staticClass:"space-90"})])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h4",[this._v("Get free tokens. Share without fees.\r\n                            "),s("br"),this._v("Add value to your online cred.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("From")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Amount")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("To")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Date")])])])}]},b=e("VU/8")(g,C,!1,null,null,null).exports;a.a.use(l.a);var w=new l.a({routes:[{path:"/",name:"Landing",component:u},{path:"/confirmation/:txnId?",name:"Confirmation",component:_},{path:"/portfolio/:user?",name:"Portfolio",component:b}]}),y=e("DOD7"),x=e.n(y),k=e("bm7V"),T=e.n(k);e("K3J8");a.a.config.productionTip=!1,a.a.use(x.a),a.a.use(T.a),a.a.filter("truncate",function(t){return t?t=t.substring(0,6):""}),new a.a({el:"#app",router:w,components:{App:c},template:"<App/>"}).$mount("#app")},NhTv:function(t,s,e){t.exports=e.p+"static/img/OLVCJG11.b372ba5.png"},QJKT:function(t,s,e){t.exports=e.p+"static/img/ethereum.a9a5bf7.png"},R4aY:function(t,s,e){t.exports=e.p+"static/img/cryptoraves_Horozontal Alignment_Full Color_JPG2.7bc8b54.png"},XZRx:function(t,s){},"n+AU":function(t,s,e){t.exports=e.p+"static/img/OLVCJG10.631b3ab.png"},nulN:function(t,s,e){t.exports=e.p+"static/img/OLVCJG9.a226332.png"}},["NHnr"]);
//# sourceMappingURL=app.871abad8c401b26518b0.js.map