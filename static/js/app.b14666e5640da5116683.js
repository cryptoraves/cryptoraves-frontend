webpackJsonp([1],{AiIB:function(t,e,s){t.exports=s.p+"static/img/cryptoraves_Horozontal Alignment_Full Color_JPG.9bb7237.png"},LOA1:function(t,e,s){t.exports=s.p+"static/img/1.dba7044.png"},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=s("mtWM"),o=s.n(i),n={name:"App",data:function(){return{postBody:"",errors:[],user:"",userList:[],currentScroll:0,showHeader:!1}},created:function(){var t=this;window.addEventListener("scroll",this.handleScroll),this.getUserList(),this.$on("changeUser",function(e){t.user=""})},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{getUserList:function(){var t=this;o.a.get("https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=searchBar").then(function(e){t.userList=e.data.userList}).catch(function(e){t.errors.push(e)})},onDone:function(){document.querySelector("#getToken").style.animation="shadow-pulse 1s",document.querySelector("#getToken").style.animationIterationCount="3"},goPortfolio:function(t){this.userList.includes(this.user)&&(document.getElementById("autoSelect").blur(),this.$router.push({name:"Portfolio",query:{user:this.user}}))},handleScroll:function(t){this.currentScroll>t.srcElement.scrollingElement.scrollTop?t.srcElement.scrollingElement.scrollTop<=100&&(this.showHeader=!1):t.srcElement.scrollingElement.scrollTop>100&&(this.showHeader=!0),this.currentScroll=t.srcElement.scrollingElement.scrollTop},goAnother:function(t){this.user=""},goTransaction:function(t){this.user=""}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"header-area header-absolate",class:{fadeIn:!0===t.showHeader},attrs:{id:"nav"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-lg-2"},[a("div",{staticClass:"logo-area"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:s("AiIB"),alt:""}})])],1)]),t._v(" "),a("div",{staticClass:"col-sm-12 col-lg-10 text-right"},[a("div",{staticClass:"d-flex d-flex-right form-group mt-3"},[a("div",{staticClass:"d-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],staticClass:"form-control c-search-input",attrs:{type:"text",list:"mylist",id:"autoSelect",placeholder:"Search for Twitter handle."},domProps:{value:t.user},on:{change:t.goPortfolio,input:function(e){e.target.composing||(t.user=e.target.value)}}}),t._v(" "),t.user.length>2?a("datalist",{attrs:{id:"mylist"}},t._l(t.userList,function(e){return a("option",{key:e,domProps:{value:e}},[t._v("\n                                  "+t._s(e)+"\n                              ")])}),0):t._e(),t._v(" "),a("a",{staticClass:"gradient-btn subscribe c-search",attrs:{href:"#"},on:{click:t.goPortfolio}},[a("i",{staticClass:"fa fa-search"})])]),t._v(" "),a("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#getToken",duration:500,easing:"linear",offset:-250,force:!0,onDone:t.onDone,cancelable:!0},expression:"{\n                          el: '#getToken',\n                          duration: 500,\n                          easing: 'linear',\n                          offset: -250,\n                          force: true,\n                          onDone: onDone,\n                          cancelable: true,\n                      }"}],staticClass:"gradient-btn subscribe animated-button ml-2",attrs:{to:"/"}},[t._v("Get Your Tokens!")])],1)])])])]),t._v(" "),a("router-view"),t._v(" "),a("div",{staticClass:"community-area wow fadeInUp section-padding",attrs:{id:"contact"}},[a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 col-md-6 col-sm-12"},[a("div",{staticClass:"single-footer"},[a("div",{staticClass:"logo-area footer"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:s("R4aY"),alt:""}})])],1),t._v(" "),a("p",{staticClass:"ml-2 mt-1"},[t._v("It's Crypto You can Tweet!")])])]),t._v(" "),t._m(1)])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center"},[e("div",{staticClass:"heading"},[e("div",{staticClass:"space-10"}),this._v(" "),e("h1",[this._v("Our Community ")]),this._v(" "),e("p",[this._v("Contact: info@cryptoraves.space")])]),this._v(" "),e("div",{staticClass:"space-60"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-6 col-md-6 col-sm-12 d-flex-end"},[e("div",{staticClass:"single-community mid-social"},[e("a",{staticClass:"twitter",attrs:{href:"https://twitter.com/cryptoraves"}},[e("i",{staticClass:"fa fa-twitter"})])]),this._v(" "),e("div",{staticClass:"single-community mid-social"},[e("a",{staticClass:"youtube",attrs:{href:"https://www.reddit.com/user/cryptoraves"}},[e("i",{staticClass:"fa fa-reddit"})])]),this._v(" "),e("div",{staticClass:"single-community mid-social"},[e("a",{staticClass:"github",attrs:{href:"https://www.facebook.com/CryptoRaves/"}},[e("i",{staticClass:"fa fa-facebook"})])]),this._v(" "),e("div",{staticClass:"single-community mid-social"},[e("a",{staticClass:"behance",attrs:{href:"https://medium.com/@cryptoraves"}},[e("i",{staticClass:"fa fa-medium"})])])])}]};var l=s("VU/8")(n,r,!1,function(t){s("UiOS")},null,null).exports,c=s("/ocq"),v={name:"Landing",data:function(){return{title:"It's Crypto You Can Tweet!",copyTweet:"@cryptoraves #makeitrave",message:"",user:"",userList:[]}},created:function(){this.getUserList()},methods:{clipboardSuccessHandler:function(t){t.value,t.event;this.message="copied successfully"},goPortfolio:function(t){this.userList.includes(this.user)&&this.$router.push({name:"Portfolio",query:{user:this.user}})},goFaq:function(t){this.$router.push({name:"Faq"})},getUserList:function(){var t=this;o.a.get("https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=searchBar").then(function(e){t.userList=e.data.userList}).catch(function(e){t.errors.push(e)})},clipboardErrorHandler:function(t){t.value,t.event;this.message="copy error"},goTweeter:function(){window.open("https://twitter.com")},goComingSoon:function(){window.open("https://medium.com/@cryptoraves/announcing-the-cryptoraves-roadmap-launch-plans-part-4-cb3879264368")},goCryptoToken:function(){window.open("https://medium.com/@cryptoraves/the-compelling-value-of-blockchain-technology-is-tokenization-part-1-1e421d3ef1df")},goBlog:function(){window.open("https://medium.com/@cryptoraves")}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"landing"},[a("div",{staticClass:"welcome-area wow fadeInUp",attrs:{id:"home"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"space-90"}),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-12 align-self-center"},[a("div",{staticClass:"welcome-right"},[a("div",{staticClass:"welcome-text"},[a("h1",[t._v("It's Crypto You Can Tweet!")]),t._v(" "),t._m(0),t._v(" "),a("br"),t._v(" "),a("h3",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#getToken",duration:500,easing:"linear",offset:-250,force:!0,onDone:!1,cancelable:!0},expression:"{\n                                          el: '#getToken',\n                                          duration: 500,\n                                          easing: 'linear',\n                                          offset: -250,\n                                          force: true,\n                                          onDone: false,                                         \n                                          cancelable: true\n                                      }"}],staticClass:"link blinking",on:{click:t.goComingSoon}},[t._v("Live On Testnet Only!!! Tokens Will Be Deleted Before Alpha Launch!")])])])])]),t._v(" "),a("div",{staticClass:"space-90"})])]),t._v(" "),a("div",{staticClass:"distibution-bg"},[a("div",{staticClass:"distibution wow fadeInUp",attrs:{id:"token"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 mt-2"},[a("div",{staticClass:"single-about",attrs:{id:"getToken"}},[a("div",{staticClass:"single-about-text"},[a("h4",[t._v("Get Your Tokens!")]),t._v(" "),a("p",[t._v("\n                                      Tweet: @cryptoraves #makeitrave\n                                      "),a("i",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.copyTweet,expression:"copyTweet"},{name:"clipboard",rawName:"v-clipboard:success",value:t.clipboardSuccessHandler,expression:"clipboardSuccessHandler",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.clipboardErrorHandler,expression:"clipboardErrorHandler",arg:"error"}],staticClass:"fa fa-copy link"}),t._v(" "),a("i",{staticClass:"fa fa-twitter link",on:{click:t.goTweeter}}),t._v(" "),a("br"),t._v("\n                                      "+t._s(t.message)+"                                        \n                                  ")]),t._v(" "),a("img",{staticStyle:{width:"90px"},attrs:{src:s("LOA1"),alt:""}}),a("br"),t._v(" "),a("small",[t._v("By Tweeting @cryptoraves, you agree to our "),a("br"),t._v(" "),a("u",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#getToken",duration:500,easing:"linear",offset:-250,force:!0,onDone:!1,cancelable:!0},expression:"{\n                                          el: '#getToken',\n                                          duration: 500,\n                                          easing: 'linear',\n                                          offset: -250,\n                                          force: true,\n                                          onDone: false,\n                                          cancelable: true,\n                                      }"}],staticClass:"link",on:{click:t.goFaq}},[t._v("Terms of Service & Privacy Policy")]),t._v(".")])])])]),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 mt-4"},[a("div",{staticClass:"single-about"},[a("div",{staticClass:"single-about-text"},[a("h4",[t._v("See Your Balance!")]),t._v(" "),a("p",{staticClass:"d-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],staticClass:"form-control c-search-input",attrs:{type:"text",list:"mylist",placeholder:"Search for Twitter handle."},domProps:{value:t.user},on:{change:t.goPortfolio,input:function(e){e.target.composing||(t.user=e.target.value)}}}),t._v(" "),a("datalist",{attrs:{id:"mylist"}},t._l(t.userList,function(e){return a("option",{key:e,domProps:{value:e}},[t._v("\n                                              "+t._s(e)+"\n                                          ")])}),0),t._v(" "),a("span",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#getToken",duration:500,easing:"linear",offset:-250,force:!0,onDone:!1,cancelable:!0},expression:"{\n                                          el: '#getToken',\n                                          duration: 500,\n                                          easing: 'linear',\n                                          offset: -250,\n                                          force: true,\n                                          onDone: false,\n                                          cancelable: true,\n                                      }"}],staticClass:"gradient-btn subscribe c-search link",on:{click:t.goPortfolio}},[a("i",{staticClass:"fa fa-search"})])]),t._v(" "),t._m(2),t._v(" "),t._m(3)])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 mt-4"},[a("div",{staticClass:"single-about"},[a("div",{staticClass:"single-about-text"},[a("h4",[t._v("What are cryptoraves Tokens?")]),t._v(" "),a("p",[t._v("                                        \n                                      Cryptoraves are Ethereum-based tokens that you can Tweet for free to grow your online cred. "),a("br"),t._v(" \n                                      Social media users like you spend a lot of time online, "),a("br"),t._v("\n                                      but you don’t have a way to capitalize on the value you are creating. "),a("br"),t._v(" \n                                      Sharing cryptoraves tokens empowers you to increase your social credibility, and allows you to"),a("br"),t._v(" "),a("u",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#getToken",duration:500,easing:"linear",offset:-250,force:!0,onDone:!1,cancelable:!0},expression:"{\n                                          el: '#getToken',\n                                          duration: 500,\n                                          easing: 'linear',\n                                          offset: -250,\n                                          force: true,\n                                          onDone: false,\n                                          cancelable: true,\n                                      }"}],staticClass:"link",on:{click:t.goCryptoToken}},[t._v("reap the benefits of a tokenized economy.")])])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 mt-4"},[a("div",{staticClass:"single-about"},[a("div",{staticClass:"single-about-text"},[a("h4",[t._v("Learn More!")]),t._v(" "),a("p",[t._v("\n                                      Visit our social media pages for recent announcements, \n                                      and read our "),a("u",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#getToken",duration:500,easing:"linear",offset:-250,force:!0,onDone:!1,cancelable:!0},expression:"{\n                                          el: '#getToken',\n                                          duration: 500,\n                                          easing: 'linear',\n                                          offset: -250,\n                                          force: true,\n                                          onDone: false,\n                                          cancelable: true,\n                                      }"}],staticClass:"link",on:{click:t.goBlog}},[t._v("Medium blog series")]),t._v(" for more info on cryptoraves."),a("br"),a("br"),t._v("\n                                      For our FAQ, including instructions on how to verify your token transactions on the blockchain, \n                                      "),a("u",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#faq",duration:500,easing:"linear",offset:-250,force:!0,onDone:!1,cancelable:!0},expression:"{\n                                          el: '#faq',\n                                          duration: 500,\n                                          easing: 'linear',\n                                          offset: -250,\n                                          force: true,\n                                          onDone: false,                                          \n                                          cancelable: true,\n                                      }"}],staticClass:"link",on:{click:t.goFaq}},[t._v("click here.")])])])])]),t._v(" "),t._m(4)])]),t._v(" "),a("div",{staticClass:"space-90"})])]),t._v(" "),t._m(5)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h4",[this._v("Get free tokens. Share without fees.\n                          "),e("br"),this._v("Add value to your online cred.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-6 mt-2"},[s("div",{staticClass:"single-about"},[s("div",{staticClass:"single-about-text"},[s("h4",[t._v("Share Them!")]),t._v(" "),s("p",[t._v("\n                                      This "),s("b",[t._v("Tweet")]),t._v(" sends 2000 tokens to @Alice:\n                                      "),s("br"),s("span",[t._v("@cryptoraves 2000 @Alice")]),s("br"),t._v(" "),s("br"),t._v("This "),s("b",[t._v("Tweet reply")]),t._v(" sends 2000 tokens to the original poster: \n                                      "),s("br"),s("span",[t._v("@cryptoraves 2000")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticClass:"d-flex d-space"},[e("span",[this._v(" Total Cryptoraves Token Balance "),e("b",{staticClass:"ml-4"},[this._v("45,000,000.5")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"table-responsive"},[s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("From")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Amount")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("To")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Date")])])]),t._v(" "),s("tbody",[s("tr",[s("th",{attrs:{scope:"row"}},[t._v("1")]),t._v(" "),s("td",[t._v("@Alice")]),t._v(" "),s("td",[t._v("1,000")]),t._v(" "),s("td",[t._v("@Bob")]),t._v(" "),s("td",[t._v("05/01/2019")])]),t._v(" "),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("2")]),t._v(" "),s("td",[t._v("@Alice")]),t._v(" "),s("td",[t._v("2,000")]),t._v(" "),s("td",[t._v("@Friedrick")]),t._v(" "),s("td",[t._v("06/01/2019")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-6 mt-4"},[e("div",{staticClass:"single-about"},[e("div",{staticClass:"single-about-text"},[e("h4",[this._v("Donate Here")]),this._v(" "),e("p",[this._v(" Wallet Address : "),e("br"),this._v(" "),e("b",[this._v("0xE1A3435B683d863bCB6c8aA093De08ED0557eE99")])]),this._v(" "),e("img",{staticStyle:{width:"45px"},attrs:{src:s("QJKT"),alt:""}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"roadmap-area section-padding wow fadeInUp",attrs:{id:"roadmap"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center"},[a("div",{staticClass:"heading"},[a("h1",[t._v("Development Roadmap")])]),t._v(" "),a("div",{staticClass:"space-60 d-none d-sm-block"})])])]),t._v(" "),a("div",{staticClass:"container"},[a("div",[a("div",{staticClass:"roadmap-item"},[a("div",{staticClass:"single-roadmap text-center road-left"},[a("div",{staticClass:"single-roadmap-img"},[a("img",{attrs:{src:s("nulN"),alt:""}})]),t._v(" "),a("div",{staticClass:"roadmap-text"},[a("p",[t._v("Q2 2019")]),t._v(" "),a("div",{staticClass:"space-10"}),t._v(" "),a("h5",[t._v("Alpha Launch")])])])]),t._v(" "),a("div",{staticClass:"roadmap-item"},[a("div",{staticClass:"single-roadmap text-center road-left"},[a("div",{staticClass:"single-roadmap-img"},[a("img",{attrs:{src:s("n+AU"),alt:""}})]),t._v(" "),a("div",{staticClass:"roadmap-text"},[a("p",[t._v("Q2 ~ Q4 2019")]),t._v(" "),a("div",{staticClass:"space-10"}),t._v(" "),a("h5",[t._v("Building Beta Product")])])])]),t._v(" "),a("div",{staticClass:"roadmap-item"},[a("div",{staticClass:"single-roadmap text-center road-left"},[a("div",{staticClass:"single-roadmap-img"},[a("img",{attrs:{src:s("NhTv"),alt:""}})]),t._v(" "),a("div",{staticClass:"roadmap-text"},[a("p",[t._v("Q1 2020")]),t._v(" "),a("div",{staticClass:"space-10"}),t._v(" "),a("h5",[t._v("Beta Launch")])])])])])])])}]},d=s("VU/8")(v,u,!1,null,null,null).exports,h={name:"Portfolio",data:function(){return{txnId:"",txnID:"",tableRows:[]}},created:function(){this.txnId=this.$route.query.txnId,this.getTransaction(this.txnId)},methods:{getTransaction:function(t){var e=this;o.a.get("https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=confirmationPage&txnHash="+t).then(function(t){var s=t.data;console.log(s),e.tableRows=s.tableRows,e.txnID=e.tableRows[0].txn_hash}).catch(function(t){console.log(t)})},goAnother:function(t){this.$parent.$emit("changeUser",t),this.$router.push({name:"Portfolio",query:{user:t}})},goBlock:function(){window.open("https://blockexplorer.loomx.io/?rpc=https://extdev-plasma-us1.dappchains.com")}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"welcome-area wow fadeInUp",attrs:{id:"home"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"space-90"}),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-12 align-self-center"},[s("div",{staticClass:"welcome-right"},[s("div",{staticClass:"welcome-text"},[s("h1",[t._v("It's Crypto You Can Tweet!")]),t._v(" "),s("h2",{staticClass:"blinking"},[t._v("Live On Testnet Only!!! Tokens Will Be Deleted Before Alpha Launch!")]),t._v(" "),s("h2",[t._v("Transaction Confirmed.")]),t._v(" "),s("h4",[t._v(t._s(t.txnID))])])])])]),t._v(" "),s("div",{staticClass:"space-90"})])]),t._v(" "),s("div",{staticClass:"distibution-bg"},[s("div",{staticClass:"distibution wow fadeInUp",attrs:{id:"token"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"single-about"},[s("div",{staticClass:"single-about-text"},[s("p",{staticClass:"table-responsive"},[s("table",{staticClass:"table"},[t._m(0),t._v(" "),s("tbody",t._l(t.tableRows,function(e){return s("tr",{key:e.txnId},[s("td",{staticClass:"link",on:{click:function(s){return t.goAnother(e.from)}}},[s("b",[t._v(t._s(e.from))])]),t._v(" "),s("td",[t._v(t._s(t._f("comma")(e.amount)))]),t._v(" "),s("td",{staticClass:"link",on:{click:function(s){return t.goAnother(e.to)}}},[s("b",[t._v(t._s(e.to))])]),t._v(" "),s("td",{staticClass:"link",on:{click:function(e){return t.goBlock()}}},[s("b",[t._v(t._s(e.blockNumber))])]),t._v(" "),s("td",[t._v(t._s(e.date))])])}),0)])])])])])])]),t._v(" "),s("div",{staticClass:"space-90"})])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("From")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Amount")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("To")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("BlockNumber")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Date")])])])}]},m=s("VU/8")(h,p,!1,null,null,null).exports,_=s("M4fF"),f=s.n(_),g={name:"Portfolio",data:function(){return{user:"",tableRows:[],rowCount:0,tokenBalance:"0",earliestDatetime:"",latestDatetime:"",initialPagePtr:0,visibleNext:!0,visiblePrev:!0}},created:function(){this.user=this.$route.query.user,this.getPortfolio(this.user,0)},beforeRouteUpdate:function(t,e,s){this.user=t.query.user,this.getPortfolio(this.user,0),s()},methods:{goNext:function(){this.visibleNext&&this.getPortfolio(this.user,1)},goPrev:function(){this.visiblePrev&&this.getPortfolio(this.user,2)},getPortfolio:function(t,e){var s=this;0==e?o.a.get("https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=portfolioPage&userName="+t).then(function(e){s.user=t;var a=e.data;s.tableRows=f.a.cloneDeep(a.tableRows),s.rowCount=a.rowCount,s.tokenBalance=a.tokenBalance,s.earliestDatetime=a.earliestDatetime,s.latestDatetime=a.latestDatetime,s.initialPagePtr=0,s.visiblePrev=!1,s.visibleNext=!!a.next}).catch(function(t){console.log(t)}):1==e?o.a.get("https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=portfolioPage&userName="+t+"&earliestDatetime="+this.earliestDatetime).then(function(e){s.user=t;var a=e.data;s.tableRows=f.a.cloneDeep(a.tableRows),s.rowCount=a.rowCount,s.tokenBalance=a.tokenBalance,s.latestDatetime=a.latestDatetime,s.earliestDatetime=a.earliestDatetime,s.initialPagePtr++,s.visiblePrev=!0,s.visibleNext=!!a.next}).catch(function(t){console.log(t)}):o.a.get("https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=portfolioPage&userName="+t+"&latestDatetime="+this.latestDatetime).then(function(e){s.user=t;var a=e.data;s.tableRows=f.a.cloneDeep(a.tableRows),s.rowCount=a.rowCount,s.tokenBalance=a.tokenBalance,s.latestDatetime=a.latestDatetime,s.earliestDatetime=a.earliestDatetime,s.initialPagePtr--,s.visiblePrev=!!(a.prev&&s.initialPagePtr>0),s.visibleNext=!0}).catch(function(t){console.log(t)})},goAnother:function(t){this.$parent.$emit("changeUser",t),this.$router.push({name:"Portfolio",query:{user:t}})},goTransaction:function(t){this.$parent.$emit("changeUser",t),this.$router.push({name:"Confirmation",query:{txnId:t}})}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"welcome-area wow fadeInUp",attrs:{id:"home"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"space-90"}),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-12 align-self-center"},[s("div",{staticClass:"welcome-right"},[s("div",{staticClass:"welcome-text"},[s("h1",[t._v(t._s(t.user)+"'s Cryptoraves Tokens")]),t._v(" "),s("h2",{staticClass:"blinking"},[t._v("Live On Testnet Only!!! Tokens Will Be Deleted Before Alpha Launch!")])])])])]),t._v(" "),s("div",{staticClass:"space-90"})])]),t._v(" "),s("div",{staticClass:"distibution-bg"},[s("div",{staticClass:"distibution wow fadeInUp",attrs:{id:"token"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"single-about"},[s("div",{staticClass:"single-about-text"},[s("h4",[t._v("Total Cryptoraves Token Balance "),s("b",{staticClass:"ml-4"},[t._v(t._s(t._f("comma")(t.tokenBalance)))])]),t._v(" "),s("p",{staticClass:"table-responsive"},[s("table",{staticClass:"table"},[t._m(0),t._v(" "),s("tbody",t._l(t.tableRows,function(e,a){return s("tr",{key:e.txnId,attrs:{index:a}},[s("th",{staticClass:"link",attrs:{scope:"row"},on:{click:function(s){return t.goTransaction(e.txnHash)}}},[s("b",[t._v(t._s(t._f("truncate")(e.txnHash)))])]),t._v(" "),s("td",{staticClass:"link",on:{click:function(s){return t.goAnother(e.from)}}},[s("b",[t._v(t._s(e.from))])]),t._v(" "),s("td",[t._v(t._s(t._f("comma")(e.amount)))]),t._v(" "),s("td",{staticClass:"link",on:{click:function(s){return t.goAnother(e.to)}}},[s("b",[t._v(t._s(e.to))])]),t._v(" "),s("td",[t._v(t._s(e.date))])])}),0),t._v(" "),s("tfoot",[s("td",{attrs:{colspan:"5"}},[s("span",{staticClass:"btn btnpagination",class:[t.visiblePrev?"":"disabledbtn"],on:{click:t.goPrev}},[s("i",{staticClass:"fa fa-angle-left"})]),t._v("\r\n                                                    Page "+t._s(t.initialPagePtr+1)+"\r\n                                                    "),s("span",{staticClass:"btn btnpagination",class:[t.visibleNext?"":"disabledbtn"],attrs:{href:"#"},on:{click:t.goNext}},[s("i",{staticClass:"fa fa-angle-right"})])])])])])])])])])]),t._v(" "),s("div",{staticClass:"space-90"})])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("From")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Amount")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("To")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Date")])])])}]},C=s("VU/8")(g,b,!1,null,null,null).exports,w={name:"Faq",created:function(){window.scrollTo(0,0)},methods:{goHome:function(){window.open("https://cryptoraves.space")}}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("div",{staticClass:"distibution-bg"},[s("div",{staticClass:"distibution wow fadeInUp"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12 mt-4"},[s("div",{staticClass:"single-about"},[s("div",{staticClass:"single-about-text"},[s("h4",[t._v("What are cryptoraves tokens?")]),t._v(" "),s("p",{staticClass:"text-left"},[t._v("\r\n                                    It’s crypto you can Tweet! You can share your tokens for free to grow your online cred. \r\n                                    Social media users like you spend a lot of time online, \r\n                                    but you don’t have a way to capitalize on the value you are creating. \r\n                                    Sharing cryptoraves tokens empowers you to increase your social credibility, and "),s("u",{staticClass:"link",on:{click:t.goHome}},[t._v("reap the benefits of a tokenized economy.")]),t._v(" "),s("br"),s("br"),t._v("Request your tokens by Tweeting: @cryptoraves #makeitrave"),s("br"),t._v(" "),s("br"),t._v("Share them for free!\r\n                                    "),s("br"),t._v("●\tThis Tweet shares 2000 tokens with @Alice: @cryptoraves 2000 @Alice\r\n                                    "),s("br"),t._v("●\tThis Tweet reply shares 2000 tokens with the OP: @cryptoraves 2000"),s("br"),t._v(" "),s("br"),t._v("Sharing your tokens creates social value amongst your network and connections. \r\n                                    You can view your portfolio of tokens, and freely share tokens with those you deem worthy. \r\n                                    This allows you to experience and participate in a real tokenized economy, possible only through blockchain technology.\r\n                                ")])])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12 mt-4"},[s("div",{staticClass:"single-about"},[s("div",{staticClass:"single-about-text"},[s("h4",[t._v("How do I check my cryptoraves transactions on the blockchain?")]),t._v(" "),s("p",{staticClass:"text-left"},[t._v("\r\n                                    Cryptoraves uses Loom PlasmaChain, a Layer 2 solution built on the Ethereum blockchain. \r\n                                    The Loom Block Explorer does allow verification of your transactions, but it takes multiple steps."),s("br"),s("br"),t._v(" "),s("b",[t._v("1.")]),t._v("\tGo to the transaction confirmation page on the "),s("u",{staticClass:"link",on:{click:t.goHome}},[t._v("cryptoraves website.")]),s("br"),t._v(" "),s("b",[t._v("2.")]),t._v("\tCopy the Block Number displayed on the confirmation page to your clipboard."),s("br"),t._v(" "),s("b",[t._v("3.")]),t._v("\tClick the block number hyperlink to the Loom Block Explorer, \r\n                                    and paste the block number into the Loom Block Explorer search field."),s("br"),t._v(" "),s("b",[t._v("4.")]),t._v("\tIn the pop-up window, click on the Hash (please note, this does not match the Hash on cryptoraves website)."),s("br"),t._v(" "),s("b",[t._v("5.")]),t._v("\tCtrl-F search for the Transaction Hash displayed on the cryptoraves confirmation page within those results.\r\n                                ")])])])])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)]),t._v(" "),s("div",{staticClass:"space-90"})])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"welcome-area wow fadeInUp",attrs:{id:"home"}},[e("div",{staticClass:"container",attrs:{id:"faq"}},[e("div",{staticClass:"space-90"}),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-12 align-self-center"},[e("div",{staticClass:"welcome-right"},[e("div",{staticClass:"welcome-text"},[e("h1",[this._v("Cryptoraves Alpha-Launch FAQ & Reference")])])])])]),this._v(" "),e("div",{staticClass:"space-90"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 mt-4"},[e("div",{staticClass:"single-about"},[e("div",{staticClass:"single-about-text"},[e("h4",[this._v("What is the cryptoraves Privacy Policy?")]),this._v(" "),e("p",{staticClass:"text-left"},[this._v("\r\n                                    By Tweeting: @cryptoraves #makeitrave, or by Tweeting any command request tagging @cryptoraves, \r\n                                    you agree to our Privacy Policy, as follows:\r\n                                    "),e("br"),this._v(" "),e("br"),this._v("●\tThe cryptoraves platform is public, \r\n                                    and token transactions requested by our users are immediately viewable and searchable on our website.\r\n                                    "),e("br"),this._v("●\tCryptoraves collects information contained in Tweets when @cryptoraves is tagged. \r\n                                    We collect the Tweeter’s @userhandle, the token amounts specified for transfer, \r\n                                    the @userhandle of the token recipient, and number of followers for both users. \r\n                                    We use this information to execute the request, either by sending cryptoraves tokens directly to you, \r\n                                    or by sending your cryptoraves tokens to the indicated recipient. \r\n                                    We display the information derived from these Tweets on our website in the form of transaction-level details, \r\n                                    user-level details (including token portfolios), and Leaderboard statistics.\r\n                                    "),e("br"),this._v("●\tIf you have any questions about how your data is being used, \r\n                                    please email us at info@cryptoraves.space. It may take us 3–5 days to respond to requests."),e("br")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 mt-4"},[e("div",{staticClass:"single-about"},[e("div",{staticClass:"single-about-text"},[e("h4",[this._v("What are the cryptoraves Terms of Service?")]),this._v(" "),e("p",{staticClass:"text-left"},[this._v("\r\n                                    By Tweeting: @cryptoraves #makeitrave, or by Tweeting any command request tagging @cryptoraves, \r\n                                    you agree to our Terms of Service, as follows:\r\n                                    "),e("br"),this._v(" "),e("br"),this._v("●\tYou must comply with Twitter policies at all times.\r\n                                    "),e("br"),this._v("●\tTweet commands can not be reversed once they are requested.\r\n                                    "),e("br"),this._v("●\tPlease follow common sense, courtesy, and respect for others. \r\n                                    If your intentions seem to be of ill will or to cause harm, we will suspend your account. \r\n                                    This is at the discretion of cryptoraves, LLC.\r\n                                ")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 mt-4"},[e("div",{staticClass:"single-about"},[e("div",{staticClass:"single-about-text"},[e("h4",[this._v("How do I opt out of Auto-Replies?")]),this._v(" "),e("p",{staticClass:"text-left"},[this._v("                                        \r\n                                    Please email your Twitter handle to "),e("b",[this._v("info@cryptoraves.space")]),this._v(". \r\n                                    Send us an email entitled: Opt Out of Auto Replies. It may take 3–5 days to respond to your request.\r\n                                ")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 mt-4"},[e("div",{staticClass:"single-about"},[e("div",{staticClass:"single-about-text"},[e("h4",[this._v("What if I have additional questions?")]),this._v(" "),e("p",{staticClass:"text-left"},[this._v("                                        \r\n                                    You can email us at "),e("b",[this._v("info@cryptoraves.space")]),this._v(". It may take us 3–5 days to respond to requests.  \r\n                                ")])])])])])}]},k=s("VU/8")(w,y,!1,null,null,null).exports;a.a.use(c.a);var x=new c.a({routes:[{path:"/",name:"Landing",component:d},{path:"/faq",name:"Faq",component:k},{path:"/confirmation/:txnId?",name:"Confirmation",component:m},{path:"/portfolio/:user?",name:"Portfolio",component:C}]}),T=s("DOD7"),P=s.n(T),D=s("bm7V"),E=s.n(D);s("K3J8");a.a.config.productionTip=!1,a.a.use(P.a),a.a.use(E.a),a.a.filter("truncate",function(t){return t?t=t.substring(0,6):""}),a.a.filter("comma",function(t){return t?parseFloat(t).toLocaleString(void 0,{maximumFractionDigits:10}):""}),new a.a({el:"#app",router:x,components:{App:l},template:"<App/>"}).$mount("#app")},NhTv:function(t,e,s){t.exports=s.p+"static/img/OLVCJG11.b372ba5.png"},QJKT:function(t,e,s){t.exports=s.p+"static/img/ethereum.a9a5bf7.png"},R4aY:function(t,e,s){t.exports=s.p+"static/img/cryptoraves_Horozontal Alignment_Full Color_JPG2.7bc8b54.png"},UiOS:function(t,e){},"n+AU":function(t,e,s){t.exports=s.p+"static/img/OLVCJG10.631b3ab.png"},nulN:function(t,e,s){t.exports=s.p+"static/img/OLVCJG9.a226332.png"}},["NHnr"]);
//# sourceMappingURL=app.b14666e5640da5116683.js.map