$(document).ready(function () {
  $("#membershipcarousel").owlCarousel({
      autoplay: false,
      lazyLoad: false,
      loop: false,
      // animateOut: 'fadeOut',
      // animateIn: 'fadeIn',
      autoHeight: true,
      autoplayTimeout: 7000,
      smartSpeed: 800,
      nav: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          Padding: 40
        },
    
        600: {
          items: 1,
        },
    
        1024: {
          items: 3
        },
    
        1366: {
          items: 3
        }
      }
    
    });
});
$(document).ready(function () {
  $("#membershipcarouselann").owlCarousel({
      autoplay: false,
      lazyLoad: false,
      loop: false,
      // animateOut: 'fadeOut',
      // animateIn: 'fadeIn',
      autoHeight: true,
      autoplayTimeout: 7000,
      smartSpeed: 800,
      nav: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          Padding: 40
        },
    
        600: {
          items: 1,
        },
    
        1024: {
          items: 3
        },
    
        1366: {
          items: 3
        }
      }
    
    });
});