

(function($) {
    "use strict";
    jQuery(document).on("ready", function() {

    //animation active
    
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
    });

})(jQuery);



/*================================ End ====================================*/