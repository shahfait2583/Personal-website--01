$(function(){
    // BACK -TO-TOP
    
    $('.back-to-top').click(function(){
        $('html,body').animate({scrollTop:0},1000)
    });
    $(window).scroll(function(){
        var scrolling=$(this).scrollTop();

        if(scrolling>300){
            $('.back-to-top').fadeIn(500);
        }
        else{
            $('.back-to-top').fadeOut(500);
        }
        if(scrolling>200){
            $('.navbar-area').addClass('nav-bg') 
            }
            else{
                $('.navbar-area').removeClass('nav-bg')
            }
    })

    // one page nav

    $('#nav').onePageNav();
    
  
   



});