$(document).ready(function () {
  $("#supplierscarousel").owlCarousel({
      autoplay: true,
      margin: 20,
       /*
      lazyLoad: true,
      loop: true,
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

      autoplay: false,
      lazyLoad: true,
      //loop: true,
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
      if ($(this).scrollTop() > 450) {
          $('.tabmobile').addClass('tabfixedmobile');
      } else  {
         $('.tabmobile').removeClass('tabfixedmobile');
      }
  });

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
});
$(".aboutbox").click(function() {
    $('html,body').animate({scrollTop: $("#about").offset().top-150},'slow');
    $('.aboutbox').addClass('activebuttontab');
});
$(".overviewbox").click(function() {
    $('html,body').animate({scrollTop: $(".weddingvenue").offset().top-150},'slow');
    $('.overviewbox').addClass('activebuttontab');
});
$(".gallerybox").click(function() {
    $('html,body').animate({scrollTop: $(".gallery").offset().top-150},'slow');
    $('.gallerybox').addClass('activebuttontab');
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