

(function($) {
    "use strict";
    jQuery(document).on("ready", function() {

    //logo acrousel active
    $(".logo-carousel").owlCarousel({
       loop:true,
        nav:false,
        margin:30,
        autoplay:true,
        autoplayspeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    });
    //single blog quite area  acrousel active
    $(".quite-area").owlCarousel({
       loop:true,
        nav:false,
        margin:30,
        autoplay:true,
        autoplayspeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

        
    //roadmap carosusel active
    $(".roadmap-carousel").owlCarousel({
       loop:true,
       nav:true,
       margin:30,
       autoplay:true,
       autoplayspeed:1000,
        navText:['<i class="fa fa-long-arrow-left">','<i class="fa fa-long-arrow-right">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
 //faq area carousel active
    $(".faq-carousel").owlCarousel({
       loop:true,
       nav:true,
       margin:30,
       autoplay:true,
       autoplayspeed:1000,
        navText:['<i class="fa fa-long-arrow-left">','<i class="fa fa-long-arrow-right">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
        //animation active
    new WOW().init();
    //menu scrollr    
    $('.main-menu li a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top - 60;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });

    //scrolling menu adding active class 
    var scrolllink = $('.scroll');
    
    $(window).scroll(function(){
        var scrollbarLocation = $(this).scrollTop();
        scrolllink.each(function(){
            var sectionOffset = $(this.hash).offset().top - 140
            if (sectionOffset <= scrollbarLocation){
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })
    })
      //mobile-menu
     $("#slick-nav").slicknav({
        prependTo:'.mobile-menu',
        allowParentlinks:true
    });
  });
    jQuery(window).on("load", function() { 
    
    //skroll active
    skrollr.init({
      forceHeight: false
    });
    
    var vibBtn = setInterval(function(){
      $("#vibBtn").css("top",Math.floor(Math.random() * 2));
      $("#vibBtn").css("left",Math.floor(Math.random() * 2));
    },80);
    


})(jQuery);



/*================================ End ====================================*/