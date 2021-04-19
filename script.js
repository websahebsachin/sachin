$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 70){
      $('.navbar').addClass("sticky");
    }
    else{
      $('.navbar').removeClass("sticky");
    }
    if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show");
      // $('.menu .active').css("color","white");
    }
    else{
      $('.scroll-up-btn').removeClass("show");
      // $('.menu .active').css("color","crimson");
    }
  });
  // slide-up script
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0})
  })
  
  // toggle menu/navbar script
  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");  
  });
  $('.menu-btn').click(function(){
     $('body').toggleClass("active1")
    })
  // typing animation script
  var typed = new Typed(".typing", {
    strings:["Web Developer"," Web Designer","Blogger"],
    typeSpeed: 100,
    backSpeed: 40,
    loop:true
  })
  // owl carousel script
  $('.carousel').owlCarousel({
     margin:20,
     loop:true,
     autoplayTimeOut:2000,
     autoplayHoverPause:true,
     responsive:{
        0:{
          items:1,
          nav:false
        },
        600:{
          items:2,
          nav:false
        },
        1000:{
          items:3,
          nav:false
        }
     }
  });
});

 