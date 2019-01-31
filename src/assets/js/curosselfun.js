$(document).ready(function () {
  $("#supplierscarousel").owlCarousel({
      autoplay: true,
      margin: 20,
      loop: true,
      lazyLoad: false,
       /*
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      */
      autoHeight: true,
      autoplayTimeout: 7000,
      smartSpeed: 800,
      nav: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          stagePadding: 40
        },
    
        600: {
          items: 1,
          stagePadding: 40
        },
        768: {
          items: 2,
          stagePadding: 40
        },
    
        1024: {
          items: 4
        },
    
        1366: {
          items: 4
        }
      }
    
    });

    $("#detailpagecarousel").owlCarousel({

      autoplay: true,
      lazyLoad: true,
      loop: true,
      margin: 20,
       /*
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      */
      responsiveClass: true,
      autoHeight: true,
      //autoplayTimeout: 7000,
      smartSpeed: 800,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
    
        600: {
          items: 1
        },
    
        1024: {
          items: 1
        },
    
        1366: {
          items: 1
        }
      }
    });


 $("#albumcarousel").owlCarousel({

      autoplay: true,
      lazyLoad: true,
      loop: true,
      margin: 20,
       /*
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      */
      responsiveClass: true,
      autoHeight: true,
      //autoplayTimeout: 7000,
      smartSpeed: 800,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
    
        600: {
          items: 1
        },
    
        1024: {
          items: 1
        },
    
        1366: {
          items: 1
        }
      }
    });

    
});

 $(window).scroll(function(){
      if ($(this).scrollTop() > 450) {
          $('.tabdesktop').addClass('fixedpostioneddesktop');
      } else  {
         $('.tabdesktop').removeClass('fixedpostioneddesktop');
      }
  });


 $(window).scroll(function(){
      if ($(this).scrollTop() > 200) {
          $('.bottomsticky').addClass('bottomstickydisplay');
      } else  {
         $('.bottomsticky').removeClass('bottomstickydisplay');
      }
  });

 // $(window).scroll(function(){
 //      if ($(this).scrollTop() > 450) {
 //          $('.tabmobile').addClass('tabfixedmobile');
 //      } else  {
 //         $('.tabmobile').removeClass('tabfixedmobile');
 //      }
 //  });

//  $(window).scroll(function(){
//       if ($(this).scrollTop() > 100) {
//           $('.leftfixed').addClass('positionfixedleftdesktop');
//       } else  {
//          $('.leftfixed').removeClass('positionfixedleftdesktop');
//       }
//   });

// $(window).scroll(function(){
//       if ($(this).scrollTop() > 1400) {
//           $('.leftfixed').removeClass('positionfixedleftdesktop');
//       } else  {
//          $('.leftfixed').addClass('positionfixedleftdesktop');
//       }
//   });


$(".linkshow").click(function() {
  //alert("hhhh");
    $('.vp_about_txt_description').addClass('showtik');
    $('.linkshow').hide();
    $('.linkless').show();
});
$(".linkless").click(function() {
    $('.vp_about_txt_description').removeClass('showtik');
    $('.linkshow').show();
    $('.linkless').hide();
});



$(".startprice .showdetail").click(function() {
    $('.detailpri').addClass('heightauto');
    $('.startprice .showdetail').hide();
    $('.startprice .showless').show();
});
$(".startprice .showless").click(function() {
    $('.detailpri').removeClass('heightauto');
    $('.startprice .showless').hide();
    $('.startprice .showdetail').show();
});

$(".barnchtableshow").click(function(){
  //alert("hi")
   $(".branchdefaulttable").toggleClass("in");
   $(".branchdetailtable").toggleClass("in");
   $(".barnchtableshow").hide();
   $(".barnchtablenone").show();
});

$(".barnchtablenone").click(function(){
  //alert("hi")
   $(".branchdefaulttable").toggleClass("in");
   $(".branchdetailtable").toggleClass("in");
   $(".barnchtableshow").show();
   $(".barnchtablenone").hide();
});


// tab desktop
$(".dealbox").click(function() {
    $('html,body').animate({scrollTop: $("#deals").offset().top-150},'slow');
    $('.reviewbox').removeClass('activebuttontab');
    $('.aboutbox').removeClass('activebuttontab');
    $('.overviewbox').removeClass('activebuttontab');
    $('.gallerybox').removeClass('activebuttontab');
    $('.dealbox').addClass('activebuttontab');
});

$(".reviewbox").click(function() {
    $('html,body').animate({scrollTop: $("#review").offset().top-150},'slow');
    $('.reviewbox').addClass('activebuttontab');
    $('.aboutbox').removeClass('activebuttontab');
    $('.overviewbox').removeClass('activebuttontab');
    $('.gallerybox').removeClass('activebuttontab');
    $('.dealbox').removeClass('activebuttontab');
});
$(".aboutbox").click(function() {
    $('html,body').animate({scrollTop: $("#about").offset().top-150},'slow');
    $('.aboutbox').addClass('activebuttontab');
    $('.reviewbox').removeClass('activebuttontab');
    $('.overviewbox').removeClass('activebuttontab');
    $('.gallerybox').removeClass('activebuttontab');
    $('.dealbox').removeClass('activebuttontab');
});

$(".mobileabout").click(function() {
    $('html,body').animate({scrollTop: $("#aboutmobile").offset().top-150},'slow');
    $('.mobileabout').addClass('activebuttontab');
    $('.reviewbox').removeClass('activebuttontab');
    $('.overviewbox').removeClass('activebuttontab');
    $('.gallerybox').removeClass('activebuttontab');
    $('.dealbox').removeClass('activebuttontab');
});

$(".overviewbox").click(function() {
    $('html,body').animate({scrollTop: $(".weddingvenue").offset().top-150},'slow');
    $('.overviewbox').addClass('activebuttontab');
    $('.reviewbox').removeClass('activebuttontab');
    $('.aboutbox').removeClass('activebuttontab');
    $('.gallerybox').removeClass('activebuttontab');
    $('.dealbox').removeClass('activebuttontab');
});

$(".gallerybox").click(function() {
    $('html,body').animate({scrollTop: $(".gallery").offset().top-150},'slow');
    $('.gallerybox').addClass('activebuttontab');
    $('.reviewbox').removeClass('activebuttontab');
    $('.aboutbox').removeClass('activebuttontab');
    $('.overviewbox').removeClass('activebuttontab');
    $('.dealbox').removeClass('activebuttontab');
});

// tab Mobile
$(".overviewbtn").click(function() {
    $('html,body').animate({scrollTop: $(".overviewsection").offset().top-100},'slow');
    $('.overviewbtn').addClass('btnactive');
});


$(".gallerybtn").click(function() {
    $('html,body').animate({scrollTop: $(".gallery").offset().top-100},'slow');
    $('.reviewbox').addClass('btnactive');
});

$(".aboutbtn").click(function() {
    $('html,body').animate({scrollTop: $(".aboutsection").offset().top-100},'slow');
    $('.reviewbox').addClass('btnactive');
});

$(".reviewbtn").click(function() {
    $('html,body').animate({scrollTop: $(".reviewsection").offset().top-100},'slow');
    $('.reviewbtn').addClass('btnactive');
});

$(".callbtn").click(function() {
     $('.callinfo').show();
     $('.callbtn').hide();
     $('.callbtnhide').show();
});
$(".callbtnhide").click(function() {
      $('.callinfo').hide();
     $('.callbtn').show();
     $('.callbtnhide').hide();
});

$(document).ready(function() {
    var $lightbox = $('#lightbox');
    
    $('[data-target="#lightbox"]').on('click', function(event) {
        var $img = $(this).find('img'), 
            src = $img.attr('src'),
            alt = $img.attr('alt'),
            css = {
                'maxWidth': $(window).width() - 100,
                'maxHeight': $(window).height() - 100
            };
    
        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css("max-width", "100%");
    });
    
    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');
            
        $lightbox.find('.modal-dialog').css({'width': $img.width()});
        $lightbox.find('.close').removeClass('hidden');
    });
});





$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if(scroll >= 450)  {
        $(".overviewbox").addClass("activebuttontab");
        $(".aboutbox").removeClass("activebuttontab");
        $(".gallerybox").removeClass("activebuttontab");
        $(".reviewbox").removeClass("activebuttontab");
        $(".dealbox").removeClass("activebuttontab");  
    } 
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if(scroll >= 1160) {
        $(".aboutbox").removeClass("activebuttontab");
        $(".overviewbox").removeClass("activebuttontab");
        $(".gallerybox").addClass("activebuttontab");
        $(".reviewbox").removeClass("activebuttontab");
        $(".dealbox").removeClass("activebuttontab");  
    } 
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if(scroll >= 1560) {
      $(".gallerybox").removeClass("activebuttontab");
      $(".aboutbox").addClass("activebuttontab");
      $(".overviewbox").removeClass("activebuttontab");
      $(".reviewbox").removeClass("activebuttontab");
      $(".dealbox").removeClass("activebuttontab");  
    } 
}); 
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if(scroll >= 1820) {
      $(".reviewbox").addClass("activebuttontab");
      $(".gallerybox").removeClass("activebuttontab");
      $(".aboutbox").removeClass("activebuttontab");
      $(".overviewbox").removeClass("activebuttontab");
      $(".dealbox").removeClass("activebuttontab");  
    } 
});   
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if(scroll >= 2000) {
      $(".reviewbox").removeClass("activebuttontab");
      $(".gallerybox").removeClass("activebuttontab");
      $(".aboutbox").removeClass("activebuttontab");
      $(".overviewbox").removeClass("activebuttontab");
      $(".dealbox").addClass("activebuttontab");  
    } 
});  
$(window).scroll(function(){
      if ($(this).scrollTop() > 270) {
          $('.icon-div').addClass('fixedpostioneddesktop');
      } else  {
         $('.icon-div').removeClass('fixedpostioneddesktop');
      }
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if(scroll >= 300) {
    $('.wedding-icon1').addClass('btnactive');
    $('.wedding-icon2').removeClass('btnactive');
    $('.wedding-icon3').removeClass('btnactive');
    $('.wedding-icon4').removeClass('btnactive');
    } 
}); 
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if(scroll >= 740) {
    $('.wedding-icon3').addClass('btnactive');
    $('.wedding-icon1').removeClass('btnactive');
    $('.wedding-icon2').removeClass('btnactive');
    $('.wedding-icon4').removeClass('btnactive');
    } 
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if(scroll >= 1200) {
    $('.wedding-icon2').addClass('btnactive');
    $('.wedding-icon1').removeClass('btnactive');
    $('.wedding-icon3').removeClass('btnactive');
    $('.wedding-icon4').removeClass('btnactive');
    } 
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if(scroll >= 1670) {
    $('.wedding-icon4').addClass('btnactive');
    $('.wedding-icon1').removeClass('btnactive');
    $('.wedding-icon2').removeClass('btnactive');
    $('.wedding-icon3').removeClass('btnactive');
    } 
});
$(".wedding-icon1").click(function() {
    $('.wedding-icon1').addClass('btnactive');
    $('.wedding-icon2').removeClass('btnactive');
    $('.wedding-icon3').removeClass('btnactive');
    $('.wedding-icon4').removeClass('btnactive');
});

$(".wedding-icon2").click(function() {
    $('.wedding-icon2').addClass('btnactive');
    $('.wedding-icon1').removeClass('btnactive');
    $('.wedding-icon3').removeClass('btnactive');
    $('.wedding-icon4').removeClass('btnactive');
});
$(".wedding-icon3").click(function() {
    $('.wedding-icon3').addClass('btnactive');
    $('.wedding-icon1').removeClass('btnactive');
    $('.wedding-icon2').removeClass('btnactive');
    $('.wedding-icon4').removeClass('btnactive');
});
$(".wedding-icon4").click(function() {
    $('.wedding-icon4').addClass('btnactive');
    $('.wedding-icon1').removeClass('btnactive');
    $('.wedding-icon2').removeClass('btnactive');
    $('.wedding-icon3').removeClass('btnactive');
});
window.onload = function(){
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function(e) {
               document.querySelector('.img-preview').setAttribute('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    var imageInput = document.querySelector('#logo-id');
    imageInput.onchange=changeEventHandler;
    
    function changeEventHandler(event) {
        readURL(this);
    }
};
