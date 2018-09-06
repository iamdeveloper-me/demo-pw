$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$(document).ready(function () {
   
    $("#carousel").owlCarousel({

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
      autoplayTimeout: 7000,
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

    $("#membership").owlCarousel({

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
        autoplayTimeout: 7000,
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
      $("#membership2").owlCarousel({

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
        autoplayTimeout: 7000,
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
if(window.location.pathname == '/vendor/dashboard' ) {
    $("#dashboard").addClass("colour");
    $("#Services").removeClass("colour");
    $("#message").removeClass("colour");
    $("#photo_album").removeClass("colour");
    $("#play_circle_outline").removeClass("colour");
    $("#stars").removeClass("colour");
    $("#event_available").removeClass("colour");
    $("#card_membership").removeClass("colour");
    $("#Calender").removeClass("colour");
    $("#Promotions").removeClass("colour");
    $("#Statistics").removeClass("colour");
    $("#account_circle").removeClass("colour");
    $("#business").removeClass("colour");

} else if(window.location.pathname == '/vendor/business') {

  $("#business").addClass("colour");
  $("#Services").removeClass("colour");
  $("#message").removeClass("colour");
  $("#photo_album").removeClass("colour");
  $("#play_circle_outline").removeClass("colour");
  $("#stars").removeClass("colour");
  $("#event_available").removeClass("colour");
  $("#card_membership").removeClass("colour");
  $("#Calender").removeClass("colour");
  $("#Promotions").removeClass("colour");
  $("#Statistics").removeClass("colour");
  $("#account_circle").removeClass("colour");
  $("#dashboard").removeClass("colour");
} else if(window.location.pathname == '/vendor/location') {
    $("#location_on").addClass("colour");
    $("#Services").removeClass("colour");
    $("#message").removeClass("colour");
    $("#photo_album").removeClass("colour");
    $("#play_circle_outline").removeClass("colour");
    $("#stars").removeClass("colour");
    $("#event_available").removeClass("colour");
    $("#card_membership").removeClass("colour");
    $("#Calender").removeClass("colour");
    $("#Promotions").removeClass("colour");
    $("#Statistics").removeClass("colour");
    $("#account_circle").removeClass("colour");
    $("#business").removeClass("colour");
    $("#dashboard").removeClass("colour");
} else if(window.location.pathname == '/vendor/business-services') {
    $("#Services").addClass("colour");
    $("#location_on").removeClass("colour");
    $("#message").removeClass("colour");
    $("#photo_album").removeClass("colour");
    $("#play_circle_outline").removeClass("colour");
    $("#stars").removeClass("colour");
    $("#event_available").removeClass("colour");
    $("#card_membership").removeClass("colour");
    $("#Calender").removeClass("colour");
    $("#Promotions").removeClass("colour");
    $("#Statistics").removeClass("colour");
    $("#account_circle").removeClass("colour");
    $("#business").removeClass("colour");
    $("#dashboard").removeClass("colour");
} else if(window.location.pathname == '/vendor/Message') {
    $("#message").addClass("colour");
    $("#location_on").removeClass("colour");
    $("#Services").removeClass("colour");
    $("#photo_album").removeClass("colour");
    $("#play_circle_outline").removeClass("colour");
    $("#stars").removeClass("colour");
    $("#event_available").removeClass("colour");
    $("#card_membership").removeClass("colour");
    $("#Calender").removeClass("colour");
    $("#Promotions").removeClass("colour");
    $("#Statistics").removeClass("colour");
    $("#account_circle").removeClass("colour");
    $("#business").removeClass("colour");
    $("#dashboard").removeClass("colour");
} else if(window.location.pathname == '/vendor/gallery') {
    $("#photo_album").addClass("colour");
    $("#location_on").removeClass("colour");
    $("#Services").removeClass("colour");
    $("#message").removeClass("colour");
    $("#play_circle_outline").removeClass("colour");
    $("#stars").removeClass("colour");
    $("#event_available").removeClass("colour");
    $("#card_membership").removeClass("colour");
    $("#Calender").removeClass("colour");
    $("#Promotions").removeClass("colour");
    $("#Statistics").removeClass("colour");
    $("#account_circle").removeClass("colour");
    $("#business").removeClass("colour");
    $("#dashboard").removeClass("colour");
} else if(window.location.pathname == '/vendor/Videos') {
    $("#play_circle_outline").addClass("colour");
    $("#location_on").removeClass("colour");
        $("#Services").removeClass("colour");
        $("#message").removeClass("colour");
        $("#photo_album").removeClass("colour");
        $("#stars").removeClass("colour");
        $("#event_available").removeClass("colour");
        $("#card_membership").removeClass("colour");
        $("#Calender").removeClass("colour");
        $("#Promotions").removeClass("colour");
        $("#Statistics").removeClass("colour");
        $("#account_circle").removeClass("colour");
        $("#business").removeClass("colour");
        $("#dashboard").removeClass("colour");
} else if(window.location.pathname == '/vendor/mylisting') {
    $("#event_available").addClass("colour");
    $("#location_on").removeClass("colour");
    $("#Services").removeClass("colour");
    $("#message").removeClass("colour");
    $("#photo_album").removeClass("colour");
    $("#play_circle_outline").removeClass("colour");
    $("#stars").removeClass("colour");
  $("#event_available").removeClass("colour");
  $("#card_membership").removeClass("colour");
  $("#Calender").removeClass("colour");
  $("#Promotions").removeClass("colour");
  $("#Statistics").removeClass("colour");
  $("#account_circle").removeClass("colour");
  $("#business").removeClass("colour");
  $("#dashboard").removeClass("colour");
} else if(window.location.pathname == '/vendor/membership') {
    $("#card_membership").addClass("colour");
    $("#location_on").removeClass("colour");
        $("#Services").removeClass("colour");
        $("#message").removeClass("colour");
        $("#photo_album").removeClass("colour");
        $("#play_circle_outline").removeClass("colour");
        $("#stars").removeClass("colour");
        $("#event_available").removeClass("colour");
        $("#Calender").removeClass("colour");
        $("#Promotions").removeClass("colour");
        $("#Statistics").removeClass("colour");
        $("#account_circle").removeClass("colour");
        $("#business").removeClass("colour");
        $("#dashboard").removeClass("colour");
} else if(window.location.pathname == '/vendor/PromoteBusiness') {
    $("#Promotions").addClass("colour");
    $("#location_on").removeClass("colour");
    $("#Services").removeClass("colour");
    $("#message").removeClass("colour");
    $("#photo_album").removeClass("colour");
    $("#play_circle_outline").removeClass("colour");
    $("#stars").removeClass("colour");
    $("#event_available").removeClass("colour");
    $("#card_membership").removeClass("colour");
    $("#Calender").removeClass("colour");
    $("#Statistics").removeClass("colour");
    $("#account_circle").removeClass("colour");
    $("#business").removeClass("colour");
    $("#dashboard").removeClass("colour");
} else if(window.location.pathname == '/vendor/statistics') {
    $("#Statistics").addClass("colour");
    $("#location_on").removeClass("colour");
    $("#Services").removeClass("colour");
    $("#message").removeClass("colour");
    $("#photo_album").removeClass("colour");
    $("#play_circle_outline").removeClass("colour");
    $("#stars").removeClass("colour");
    $("#event_available").removeClass("colour");
    $("#card_membership").removeClass("colour");
    $("#Calender").removeClass("colour");
    $("#Promotions").removeClass("colour");
    $("#account_circle").removeClass("colour");
    $("#business").removeClass("colour");
    $("#dashboard").removeClass("colour");
} else if(window.location.pathname == '/vendor/editprofile') {
    $("#account_circle").addClass("colour");
    $("#location_on").removeClass("colour");
    $("#Services").removeClass("colour");
    $("#message").removeClass("colour");
    $("#photo_album").removeClass("colour");
    $("#play_circle_outline").removeClass("colour");
    $("#stars").removeClass("colour");
    $("#event_available").removeClass("colour");
    $("#card_membership").removeClass("colour");
    $("#Calender").removeClass("colour");
    $("#Promotions").removeClass("colour");
    $("#Statistics").removeClass("colour");
    $("#business").removeClass("colour");
    $("#dashboard").removeClass("colour");

} else if(window.location.pathname == '/vendor/calender') {
    $("#Calender").addClass("colour");
    $("#location_on").removeClass("colour");
    $("#Services").removeClass("colour");
    $("#message").removeClass("colour");
    $("#photo_album").removeClass("colour");
    $("#play_circle_outline").removeClass("colour");
    $("#stars").removeClass("colour");
    $("#event_available").removeClass("colour");
    $("#card_membership").removeClass("colour");
    $("#account_circle").removeClass("colour");
    $("#Promotions").removeClass("colour");
    $("#Statistics").removeClass("colour");
    $("#business").removeClass("colour");
    $("#dashboard").removeClass("colour");
}else{}




$(document).ready(function()
{
  $("#fileuploader").uploadFile({
  url:"YOUR_FILE_UPLOAD_URL",
  fileName:"myfile"
  });
});