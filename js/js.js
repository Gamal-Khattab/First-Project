/*global document,$,window */
$(function(){
    /* header */
    $(".header").height($(window).height());
        $(window).resize(function(){
        
        $(".header").height($(window).height());
        $(".slider").each(function(){
        
       $(".slider").css("paddingTop",($(window).height() -$(".slider li").height()) / 2); 
        
    });
    
        
        
    });
    /*header*/
    /* nav */
    $(".nav .links li a").click(function(){
        $(this).addClass("home").siblings().removeClass("home");
    });
    /*nav*/
    /*slider*/
    $(".slider").bxSlider({
        
        pager:false
    });
    $(".slider").each(function(){
        
       $(".slider").css("paddingTop",($(window).height()-$(".slider li").height())/2); 
        
    });
    $(".links li a").click(function(){
        $("html,body").animate({
            
            scrollTop:$("#"+$(this).data("value")).offset().top
        });
    });
    function autoOne(){
        $(".conts1 .cont").each(function(){
    if (!$(this).is(":last-child")){
        
        $(this).delay(3000).fadeOut(2000,function(){
            $(this).removeClass("cont").next().addClass("cont").fadeIn();
            autoOne();
            
        });
        
        
        
    }  
    else{
         $(this).delay(3000).fadeOut(2000,function(){
             
             $(this).removeClass("cont");
             $(".conts1 div:first-child").addClass("cont").fadeIn();
             autoOne();
             
         });
    }
      })  ;
        
    }
autoOne();




window.mixitup($("#Container"),{
    
});
  
});


