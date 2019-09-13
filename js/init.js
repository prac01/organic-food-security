$(window).on('load scroll resize orientationchange', function(){
    if($(window).scrollTop()){
        $("header").css("background-color","#fff");     
        $("header").css("opacity","0.96");
        $("header").css("box-shadow", "0px 0px 6px #666");
        $(".navbar-nav").css("background-color", "#fff");
        $(".navbar-nav").css("opacity", "0.96"); 
        
        $(".menu-div i").css("color", "#333"); 
        $('.menu-div i').hover(function(){$(this).css({"color":"#fff"});},function(){$(this).css({"color":"#333"});}); //hover style js

       
        $( 'header').each(function () {
            this.style.setProperty( 'background-color', '#fff', 'important' );
        }); 

        $( '.navbar-dark .nav-item.active .nav-link').each(function () {
            this.style.setProperty( 'color', '#333', 'important' );
        }); 
        $( '.navbar-nav .nav-item .nav-link').each(function () {
            this.style.setProperty( 'color', '#444', 'important' );
        }); 
                   

    } else {
        
        $("header").css("background-color","transparent");
        $("header").css("box-shadow", "0px 0px 6px transparent");
        $("header").css("transition", "all .2s ease");
        $(".navbar-nav").css("background-color", "#332b16");
        $(".navbar-nav").css("opacity", "1");
        
        $(".menu-div i").css("color", "#fff");        

        $( '.navbar-dark .nav-item.active .nav-link').each(function () {
            this.style.setProperty( 'color', '#fff', 'important' );
        });
        $(".navbar-nav .nav-item .nav-link").css("color", "#d9bf8e"); 
        
    }
})

// show more practice
$(function () {
    $('.viewProducts-btn').click(function () {
        $('.products-content div:hidden').slice(0, 4).show();
        if ($('.products-content div').length == $('.products-content div:visible').length) {
            $('.viewProducts-btn ').hide();
        } 
    });
});

// offset margin-top fixed header
$('.nav-link').click(function(){    
    var divId = $(this).attr('href');
     $('html, body').animate({
      scrollTop: $(divId).offset().top - 140
    }, 100);
  });