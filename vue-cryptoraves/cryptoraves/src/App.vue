<template>  
  <div id="app">
    <div class="header-area wow fadeInDown header-absolate" id="nav" data-0="position:fixed;" data-top-top="position:fixed;top:0;" data-edge-strategy="set">
        <div class="container">
            <div class="row">
                <div class="col-4 d-block d-lg-none">
                    <div class="mobile-menu"></div>
                </div>
                <div class="col-4 col-lg-2">
                    <div class="logo-area">
                      <router-link to="/"><img src="./assets/img/cryptoraves_Horozontal Alignment_Full Color_JPG.png" alt=""></router-link>                       
                    </div>
                </div>             
                <div class="col-8 col-lg-10 d-none d-lg-block text-right">
                    <div class="d-flex d-flex-right form-group mt-3">                        
                        <div class="d-flex">                            
                            <input type="text" class="form-control c-search-input" placeholder="Search for Twitter handle.">
                            <router-link to="/portfolio" class="gradient-btn subscribe c-search">
                              <i class="fa fa-search"></i>
                            </router-link>                            
                        </div>
                        <router-link to="/" class="gradient-btn subscribe animated-button ml-2">Get Your Tokens!</router-link>                        
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
                        <h5>Great Community</h5>
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
                        <a class="github" href="#"><i class="fa fa-facebook"></i></a>
                    </div> 
                    <div class="single-community mid-social">
                        <a class="twitter" href="#"><i class="fa fa-twitter"></i></a>
                    </div> 
                    <div class="single-community mid-social">
                        <a class="youtube" href="#"><i class="fa fa-reddit"></i></a>
                    </div>
                    <div class="single-community mid-social">
                        <a class="behance" href="#"><i class="fa fa-medium"></i></a>
                    </div>                        
                </div>               
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url('./assets/css/animate.min.css');
@import url('./assets/css/font-awesome.min.css');
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import url('./assets/css/slicknav.min.css');
@import url('./assets/css/animation.css');
@import url('./assets/css/material-design-iconic-font.min.css');
@import url('./assets/css/style.css');
@import url('./assets/css/responsive.css');
</style>
