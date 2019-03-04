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
                            <div class="single-about">                               
                                <div class="single-about-text">
                                    <h4>Get Your Tokens!</h4>
                                    <p>
                                        Tweet: @cryptoraves #makeitrave
                                        <i class="fa fa-copy" v-clipboard="copyTweet"
                                        v-clipboard:success="clipboardSuccessHandler"
                                        v-clipboard:error="clipboardErrorHandler"></i>
                                        <i class="fa fa-twitter" v-on:click="goTweeter"></i>
                                    </p>
                                    <p>{{message}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mt-2">
                            <div class="single-about">                               
                                <div class="single-about-text">
                                    <h4>Share Them!</h4>
                                    <p>
                                        This <b>Tweet</b> sends 2000 tokens to @Alice:
                                        <br><span>@cryptoraves 2000 @Alice</span>
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
                                        <input type="text" class="form-control c-search-input" placeholder="Get Your Twiter Handle!"> 
                                        <span class="gradient-btn subscribe c-search"><i class="fa fa-search"></i></span>                                
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
                                                <td>1000</td>
                                                <td>@mdo</td>
                                                <td>05/01/2019</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">2</th>
                                                <td>@Alice</td>
                                                <td>2000</td>
                                                <td>@fat</td>
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
                                        Cryptoraves are Ethereum based tokens that you can share on Twitter.
                                        Social media users like you will have more control over your online voice.
                                        You can give and receive cryptoraves tokens as recognition for important ideas.
                                        You now become empowered to build a new kind of social value system.
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
                                        See our Reddit Alpha-Lounch Announcement. (link)
                                        Read our blog series. (Medium icon, link to our page)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mt-4">
                            <div class="single-about">                              
                                <div class="single-about-text">
                                    <h4>Donate Here</h4>
                                    <p>                                         
                                        Click here for a link to our wallet.                                
                                    </p>
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
                        <h5>history Timeline</h5>
                        <div class="space-10"></div>
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
                            <p>Q1 2019</p>
                            <div class="space-10"></div>
                            <h5>Alpha-Launch (link to M blog)</h5>
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
                            <h5>Building the cryptoraves Vision (link to M blog)</h5>
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
                            <h5>Beta-Launch (link to M blog)</h5>
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
export default {
  name: 'Landing',
  data () {
    return {
      title: 'It\'s Crypto You Can Tweet!',
      copyTweet: '@cryptoraves #makeitrave',
      message: ''
    }
  },
  methods: {
    clipboardSuccessHandler ({ value, event }) {      
      this.message = 'copied successfully'
    },
 
    clipboardErrorHandler ({ value, event }) {      
      this.message = 'copy error'
    },

    goTweeter(){
        window.open("https://twitter.com");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import './../node_modules/foo/bar.css'; */
</style>
