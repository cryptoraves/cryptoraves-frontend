<template>  
  <div id="app">
    <div class="header-area header-absolate" id="nav"  v-bind:class="{'fadeIn':(showHeader === true)}">
        <div class="container">
            <div class="row">              
                <div class="col-4 col-lg-2">
                    <div class="logo-area">
                      <router-link to="/"><img src="./assets/img/cryptoraves_Horozontal Alignment_Full Color_JPG.png" alt=""></router-link>                       
                    </div>
                </div>             
                <div class="col-8 col-lg-10 text-right">
                    <div class="d-flex d-flex-right form-group mt-3">                        
                        <div class="d-flex">                            
                            <input type="text" v-model="user" @change="goPortfolio" list="mylist" class="form-control c-search-input" placeholder="Search for Twitter handle." />
                            <datalist id="mylist">
                                <option v-bind:key="item" v-for="item in userList" :value="item">
                                    {{item}}
                                </option>
                            </datalist>                            
                            
                            <a href="#" v-on:click="goPortfolio" class="gradient-btn subscribe c-search">
                              <i class="fa fa-search"></i>
                            </a>                            
                        </div>
                        <router-link to="/" v-scroll-to="{
                            el: '#getToken',
                            duration: 500,
                            easing: 'linear',
                            offset: -250,
                            force: true,
                            onDone: onDone,
                            cancelable: true,                            
                        }" class="gradient-btn subscribe animated-button ml-2">Get Your Tokens!</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <router-view/>

    <div class="community-area wow fadeInUp section-padding" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="heading">
                        <div class="space-10"></div>
                        <h1>Our Community </h1>
                        <p>Contact: info@cryptoraves.space</p>
                    </div>
                <div class="space-60"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="single-footer">
                        <div class="logo-area footer">
                          <router-link to="/"><img src="./assets/img/cryptoraves_Horozontal Alignment_Full Color_JPG2.png" alt=""></router-link>                            
                        </div>
                        <p class="ml-2 mt-1">It's Crypto You can Tweet!</p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 d-flex-end">                   
                    <div class="single-community mid-social">
                        <a class="twitter" href="https://twitter.com/cryptoraves"><i class="fa fa-twitter"></i></a>
                    </div> 
                    <div class="single-community mid-social">
                        <a class="youtube" href="https://www.reddit.com/user/cryptoraves"><i class="fa fa-reddit"></i></a>
                    </div>
                    <div class="single-community mid-social">
                        <a class="github" href="https://www.facebook.com/CryptoRaves/"><i class="fa fa-facebook"></i></a>
                    </div> 
                    <div class="single-community mid-social">
                        <a class="behance" href="https://medium.com/@cryptoraves"><i class="fa fa-medium"></i></a>
                    </div>                        
                </div>               
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'App',
	data() {
		return {
			postBody: '',
			errors: [],
            user: '',
            userList: [],
            currentScroll: 0,
            showHeader: false           
		}
    },
    mounted () {				
	},
	created() {
        window.addEventListener('scroll', this.handleScroll);
        this.getUserList();
	},
	destroyed() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	methods: {
		getUserList() {
			axios.get('https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=searchBar').then(response => {
				// JSON responses are automatically parsed.
                this.userList = response.data.userList;                
			}).catch(e => {
				this.errors.push(e)
			})
        },
        onDone(){
            document.querySelector("#getToken").style.animation = 'shadow-pulse 1s';
            document.querySelector("#getToken").style.animationIterationCount = '3';
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
		handleScroll(e) {              
			// Any code to be executed when the window is scrolled            
            if(this.currentScroll > e.srcElement.scrollingElement.scrollTop){
                //scroll up
                if(e.srcElement.scrollingElement.scrollTop <= 100){
                    this.showHeader = false;
                }
            }
            else{
                //scroll down
                if(e.srcElement.scrollingElement.scrollTop > 100){
                    this.showHeader = true;
                }
            }	
            this.currentScroll = e.srcElement.scrollingElement.scrollTop;		
        }       
	}
}

</script>

<style lang="scss">
@import url('./assets/css/font-awesome.min.css');
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import url('./assets/css/style.css');
@import url('./assets/css/responsive.css');
</style>
