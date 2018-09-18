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

$(".tradinghours .showdetail").click(function() {
    $('.detailtra').addClass('heightauto');
    $('.tradinghours .showdetail').hide();
    $('.tradinghours .showless').show();
});
$(".tradinghours .showless").click(function() {
    $('.detailtra').removeClass('heightauto');
    $('.tradinghours .showless').hide();
    $('.tradinghours .showdetail').show();
});

// tab desktop

$(".reviewbox").click(function() {
    $('html,body').animate({scrollTop: $("#review").offset().top-150},'slow');
    $('.reviewbox').addClass('activebuttontab');

    $('.aboutbox').removeClass('activebuttontab');
    $('.overviewbox').removeClass('activebuttontab');
    $('.gallerybox').removeClass('activebuttontab');
});
$(".aboutbox").click(function() {
    $('html,body').animate({scrollTop: $("#about").offset().top-150},'slow');
    $('.aboutbox').addClass('activebuttontab');

    $('.reviewbox').removeClass('activebuttontab');
    $('.overviewbox').removeClass('activebuttontab');
    $('.gallerybox').removeClass('activebuttontab');
});

$(".mobileabout").click(function() {
    $('html,body').animate({scrollTop: $("#aboutmobile").offset().top-150},'slow');
    $('.mobileabout').addClass('activebuttontab');
    $('.reviewbox').removeClass('activebuttontab');
    $('.overviewbox').removeClass('activebuttontab');
    $('.gallerybox').removeClass('activebuttontab');
});




$(".overviewbox").click(function() {
    $('html,body').animate({scrollTop: $(".weddingvenue").offset().top-150},'slow');
    $('.overviewbox').addClass('activebuttontab');

     $('.reviewbox').removeClass('activebuttontab');
    $('.aboutbox').removeClass('activebuttontab');
    $('.gallerybox').removeClass('activebuttontab');
});







$(".gallerybox").click(function() {
    $('html,body').animate({scrollTop: $(".gallery").offset().top-150},'slow');
    $('.gallerybox').addClass('activebuttontab');

    $('.reviewbox').removeClass('activebuttontab');
    $('.aboutbox').removeClass('activebuttontab');
    $('.overviewbox').removeClass('activebuttontab');
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


$(document).ready(function(){
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});



$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if(scroll >= 450)  {
        $(".overviewbox").addClass("activebuttontab");
         $(".aboutbox").removeClass("activebuttontab");
          $(".gallerybox").removeClass("activebuttontab");
           $(".reviewbox").removeClass("activebuttontab");
    } 
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if(scroll >= 1150) {
        $(".aboutbox").addClass("activebuttontab");
        $(".overviewbox").removeClass("activebuttontab");
         $(".gallerybox").removeClass("activebuttontab");
          $(".reviewbox").removeClass("activebuttontab");
    } 
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if(scroll >= 1400) {
      $(".gallerybox").addClass("activebuttontab");
        $(".aboutbox").removeClass("activebuttontab");
        $(".overviewbox").removeClass("activebuttontab");
        $(".reviewbox").removeClass("activebuttontab");
    } 
}); 
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if(scroll >= 1800) {
       $(".reviewbox").addClass("activebuttontab");
       $(".gallerybox").removeClass("activebuttontab");
        $(".aboutbox").removeClass("activebuttontab");
        $(".overviewbox").removeClass("activebuttontab");
    } 
});   



$(window).scroll(function(){
      if ($(this).scrollTop() > 400) {
          $('.icon-div').addClass('fixedpostioneddesktop');
      } else  {
         $('.icon-div').removeClass('fixedpostioneddesktop');
      }
  });