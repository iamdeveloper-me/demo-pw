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
    $("#location_on").removeClass("colour");hhhh
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


$(document).ready(function() {
  document.getElementById('pro-image').addEventListener('change', readImage, false);
  
  $( ".preview-images-zone" ).sortable();
  
  $(document).on('click', '.image-cancel', function() {
      let no = $(this).data('no');
      $(".preview-image.preview-show-"+no).remove();
  });
});
var num = 4;
function readImage() {
  if (window.File && window.FileList && window.FileReader) {
      var files = event.target.files; //FileList object
      var output = $(".preview-images-zone");

      for (let i = 0; i < files.length; i++) {
          var file = files[i];
          if (!file.type.match('image')) continue;
          
          var picReader = new FileReader();
          
          picReader.addEventListener('load', function (event) {
              var picFile = event.target;
              var html =  '<div class="preview-image preview-show-' + num + '">' +
                          '<div class="image-cancel" data-no="' + num + '">x</div>' +
                          '<div class="image-zone"><img id="pro-img-' + num + '" src="' + picFile.result + '"></div>' +
                          '<div class="tools-edit-image"><a href="javascript:void(0)" data-no="' + num + '" class="btn btn-light btn-edit-image">edit</a></div>' +
                          '</div>';

              output.append(html);
              num = num + 1;
          });

          picReader.readAsDataURL(file);
      }
      $("#pro-image").val('');
  } else {
      console.log('Browser not support');
  }
}



  $(function () {
      $('[data-toggle="tooltip"]').tooltip()
  })



  $(document).on('click' ,".labelclick", function() {
    //alert("dfdf");
    // $('.ulbox_text').show();
    $(this).find("ul").addClass('showdiv');
    $(this).removeClass('labelclick');
    $(this).addClass('showtik');
  });

  $(document).on('click' ,".showtik", function() {
    //alert("dfdf");
    // $('.ulbox_text').show();
    $(this).find("ul").removeClass('showdiv');
    $(this).addClass('labelclick');
    $(this).removeClass('showtik');
  });

  // function showDropDown() {
  //   jQuery(this).parents("li").find("ul").toggleClass('showdiv');
  // }