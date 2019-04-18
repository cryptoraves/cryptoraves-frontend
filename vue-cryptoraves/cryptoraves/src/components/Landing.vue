<template> 
  <div class="landing">
    <!--welcome area start-->
    <div class="welcome-area wow fadeInUp" id="home">
        <div class="container">
            <div class="space-90"></div>
            <div class="row">
                <div class="col-12 col-md-12 align-self-center">
                    <div class="welcome-right">                        
                        <div class="welcome-text">
                            <h1>It's Crypto You Can Tweet!</h1>
                            <h4>Get free tokens. Share without fees.
                            <br>Add value to your online cred.</h4>
                            <br>
                            <h3 v-on:click="goComingSoon"
                            v-scroll-to="{
                                            el: '#getToken',
                                            duration: 500,
                                            easing: 'linear',
                                            offset: -250,
                                            force: true,
                                            onDone: onDone,
                                            cancelable: true,
                                        }"
                            class="link blinking">Live On Testnet Only!!! Tokens Will Be Deleted Before Alpha Launch!</h3>
                        </div>                       
                    </div>
                </div>              
            </div>
            <div class="space-90"></div>
        </div>
    </div>
    <!--welcome area end-->
    
    <!--distibution-bg start-->
    <div class="distibution-bg">
        <!---distibution area start-->
        <div class="distibution wow fadeInUp" id="token">
                <div class="container">                   
                    <div class="row">
                        <div class="col-lg-6 mt-2">
                            <div class="single-about" id="getToken">                               
                                <div class="single-about-text">
                                    <h4>Get Your Tokens!</h4>
                                    <p>
                                        Tweet: @cryptoraves #makeitrave
                                        <i class="fa fa-copy link" v-clipboard="copyTweet"
                                        v-clipboard:success="clipboardSuccessHandler"
                                        v-clipboard:error="clipboardErrorHandler"></i>
                                        <i class="fa fa-twitter link" v-on:click="goTweeter"></i>
                                        <br/>
                                        {{message}}                                        
                                    </p>
                                    <img src="../assets/img/1.png" style="width:90px" alt=""><br />
                                    <small>By Tweeting @cryptoraves, you agree to our <br/>
                                    <u v-on:click="goFaq" class="link">Terms of Service & Privacy Policy</u>.</small>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mt-2">
                            <div class="single-about">                               
                                <div class="single-about-text">
                                    <h4>Share Them!</h4>
                                    <p>
                                        This <b>Tweet</b> sends 2000 tokens to @Alice:
                                        <br><span>@cryptoraves 2000 @Alice</span><br>
                                        <br>This <b>Tweet reply</b> sends 2000 tokens to the original poster: 
                                        <br><span>@cryptoraves 2000</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">                       
                        <div class="col-lg-12 mt-4">
                            <div class="single-about">                               
                                <div class="single-about-text">
                                    <h4>See Your Balance!</h4>
                                    <p class="d-flex">
                                        <input type="text" v-model="user" @change="goPortfolio" list="mylist" class="form-control c-search-input" placeholder="Search for Twitter handle." />
                                        <datalist id="mylist">
                                            <option v-bind:key="item" v-for="item in userList" :value="item">
                                                {{item}}
                                            </option>
                                        </datalist>
                                        <span v-on:click="goPortfolio"
                                        v-scroll-to="{
                                            el: '#getToken',
                                            duration: 500,
                                            easing: 'linear',
                                            offset: -250,
                                            force: true,
                                            onDone: onDone,
                                            cancelable: true,
                                        }"
                                         class="gradient-btn subscribe c-search link">
                                            <i class="fa fa-search"></i>
                                        </span>                    
                                    </p>
                                    <h6 class="d-flex d-space">
                                        <span>Total Cryptoraves Token Balance <b class="ml-4">45,000,000.5</b></span>                                        
                                    </h6>                                    
                                    <p class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">From</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">To</th>
                                                <th scope="col">Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <th scope="row">1</th>
                                                <td>@Alice</td>
                                                <td>1,000</td>
                                                <td>@Bob</td>
                                                <td>05/01/2019</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">2</th>
                                                <td>@Alice</td>
                                                <td>2,000</td>
                                                <td>@Friedrick</td>
                                                <td>06/01/2019</td>
                                                </tr>                                               
                                            </tbody>
                                        </table>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 mt-4">
                            <div class="single-about">                             
                                <div class="single-about-text">
                                    <h4>What are cryptoraves Tokens?</h4>
                                    <p>                                        
                                        Cryptoraves are Ethereum-based tokens that you can Tweet for free to grow your online cred. <br> 
                                        Social media users like you spend a lot of time online, <br>
                                        but you don’t have a way to capitalize on the value you are creating. <br> 
                                        Sharing cryptoraves tokens empowers you to increase your social credibility, and allows you to<br>
                                        <u v-on:click="goCryptoToken"
                                        v-scroll-to="{
                                            el: '#getToken',
                                            duration: 500,
                                            easing: 'linear',
                                            offset: -250,
                                            force: true,
                                            onDone: onDone,
                                            cancelable: true,
                                        }"
                                         class="link">reap the benefits of a tokenized economy.</u>                    
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 mt-4">
                            <div class="single-about">                               
                                <div class="single-about-text">
                                    <h4>Learn More!</h4>
                                    <p>
                                        Visit our social media pages for recent announcements, 
                                        and read our <u v-on:click="goBlog"
                                        v-scroll-to="{
                                            el: '#getToken',
                                            duration: 500,
                                            easing: 'linear',
                                            offset: -250,
                                            force: true,
                                            onDone: onDone,
                                            cancelable: true,
                                        }"
                                        class="link">Medium blog series</u> for more info on cryptoraves.<br /><br />
                                        For our FAQ, including instructions on how to verify your token transactions on the blockchain, 
                                        <u v-on:click="goFaq" v-scroll-to="{
                                            el: '#getToken',
                                            duration: 500,
                                            easing: 'linear',
                                            offset: -250,
                                            force: true,
                                            onDone: onDone,
                                            cancelable: true,
                                        }" class="link">click here.</u>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mt-4">
                            <div class="single-about">                              
                                <div class="single-about-text">
                                    <h4>Donate Here</h4>
                                    <p> Wallet Address : <br> <b>0xE1A3435B683d863bCB6c8aA093De08ED0557eE99</b> </p>
                                    <img src="../assets/img/ethereum.png" style="width:45px" alt="">                               
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="space-90"></div>
        </div>
        <!---distibution area end-->
    </div>
    <!--distibution-bg end-->

    <!--roadmap area start-->
    <div class="roadmap-area section-padding wow fadeInUp" id="roadmap">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="heading">
                        <h1>Development Roadmap</h1>
                    </div>
                    <div class="space-60 d-none d-sm-block"></div>
                </div>
            </div>
            
        </div>
        <div class="container">
            <div>
                <div class="roadmap-item">
                    <div class="single-roadmap text-center road-left">
                        <div class="single-roadmap-img">
                            <img src="./../assets/img/OLVCJG9.png" alt="">
                        </div>                        
                        <div class="roadmap-text">
                            <p>Q2 2019</p>
                            <div class="space-10"></div>
                            <h5>Alpha Launch</h5>
                        </div>
                    </div>
                </div>  
                <div class="roadmap-item">
                    <div class="single-roadmap text-center road-left">
                        <div class="single-roadmap-img">
                            <img src="./../assets/img/OLVCJG10.png" alt="">
                        </div>                        
                        <div class="roadmap-text">
                            <p>Q2 ~ Q4 2019</p>
                            <div class="space-10"></div>
                            <h5>Building Beta Product</h5>
                        </div>
                    </div>
                </div>               
                <div class="roadmap-item">
                    <div class="single-roadmap text-center road-left">
                        <div class="single-roadmap-img">
                            <img src="./../assets/img/OLVCJG11.png" alt="">
                        </div>                        
                        <div class="roadmap-text">
                            <p>Q1 2020</p>
                            <div class="space-10"></div>
                            <h5>Beta Launch</h5>
                        </div>
                    </div>
                </div>             
            </div>
        </div>
    </div>
    <!--roadmap area end-->
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Landing',
  data () {
    return {
      title: 'It\'s Crypto You Can Tweet!',
      copyTweet: '@cryptoraves #makeitrave',
      message: '',
      user: '',
      userList: [],
    }
  },
  created() {
        this.getUserList();
  },
  methods: {
    clipboardSuccessHandler ({ value, event }) {      
      this.message = 'copied successfully'
    },
    goPortfolio: function(event) {
        // `this` inside methods points to the Vue instance
        if (this.userList.includes(this.user)) {
            this.$router.push({
                name: 'Portfolio',
                query: {
                    user: this.user
                }
            })
        }
    },
    goFaq: function(event){
        this.$router.push({
                name: 'Faq'
            })
    },
    getUserList() {
        axios.get('https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=searchBar').then(response => {
            // JSON responses are automatically parsed.
            this.userList = response.data.userList;           
        }).catch(e => {
            this.errors.push(e)
        })
    },
    clipboardErrorHandler ({ value, event }) {      
      this.message = 'copy error'
    },
    goTweeter(){
        window.open("https://twitter.com");
    },
    goComingSoon(){
        window.open('https://medium.com/@cryptoraves/announcing-the-cryptoraves-roadmap-launch-plans-part-4-cb3879264368');        
    },
    goCryptoToken(){
        window.open("https://medium.com/@cryptoraves/the-compelling-value-of-blockchain-technology-is-tokenization-part-1-1e421d3ef1df");
    },
    goBlog(){
        window.open("https://medium.com/@cryptoraves");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
