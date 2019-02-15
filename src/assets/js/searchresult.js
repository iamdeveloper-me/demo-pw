// $(document).ready(function() {
//     $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item col-sm-12');$('#products .item').removeClass('grid-group-item col-sm-4 col-6 mobpad5px');});
//     $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item col-sm-12');$('#products .item').addClass('grid-group-item col-sm-4 col-6 mobpad5px');});
//     $('#photoview').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item col-sm-12 col-6 mobpad5px grid-group-item');$('#products .item').addClass('photo-group-item col-sm-4');});
//     $('#gridmobile').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item col-sm-12');$('#products .item').addClass('grid-group-item col-sm-4 col-6 mobpad5px');});
// });

$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#list').addClass('active');$('#grid').removeClass('active');$('#products').addClass('listing-group');$('#products').removeClass('griding-group');});
    $('#grid').click(function(event){event.preventDefault();$('#list').removeClass('active');$('#grid').addClass('active');$('#products').addClass('griding-group');$('#products').removeClass('listing-group');});    
    $('#photoview').click(function(event){event.preventDefault();$('#photoview').addClass('active');$('#gridmobile').removeClass('active');$('#products').addClass('photo-group');$('#products').removeClass('griding-group');});    
    $('#gridmobile').click(function(event){event.preventDefault();$('#gridmobile').addClass('active');$('#photoview').removeClass('active');$('#products').addClass('griding-group');$('#products').removeClass('listing-group');$('#products').removeClass('photo-group');});    

});

function toggleChevron(e) {
	$(e.target)
		.prev('.panel-heading')
		.find("i.indicator")
		.toggleClass('fa-caret-down fa-caret-right');
}
// $('#accordion').on('hidden.bs.collapse', toggleChevron);
// $('#accordion').on('shown.bs.collapse', toggleChevron);

// if ($(window).width() < 514) {
//     $('.collapse').removeClass('in');
// } 

// $(document).ready(function () {
//   $("#supplierscarousel").owlCarousel({
//       autoplay: true,
//       margin: 20,
//       loop: true,
//        /*
//       lazyLoad: true,
//       animateOut: 'fadeOut',
//       animateIn: 'fadeIn',
//       */
//       autoHeight: true,
//       autoplayTimeout: 7000,
//       smartSpeed: 800,
//       nav: true,
//       responsiveClass: true,
//       responsive: {
//         0: {
//           items: 1,
//           stagePadding: 40
//         },
    
//         600: {
//           items: 1,
//           stagePadding: 40
//         },
    
//         1024: {
//           items: 4
//         },
    
//         1366: {
//           items: 4
//         }
//       }
    
//     });
// });


$(".showhidefilter").click(function(){
        $("#searchfilterbox").toggle();
        $(".showhidefilter").toggleClass("textshowhide");
        $(".tik3").toggleClass("col-sm-4");
        $(".tik4").toggleClass("col-sm-3");
        $(".listingtab").toggleClass("col-sm-9");
      });

 $(".backicon").click(function(){
      $(".filterselectbox").show();
      $("#searchfilterbox").hide();
      $(".locationboxmobile").hide();
      $(".categoryboxmobile").hide();
      $(".serviceboxmobile").hide(); 
      $(".priceboxmobile").hide();
      $(".featureboxmobile").hide();
      $(".ratingboxmobile").hide();
      $(".dealboxmobile").hide();
      $(".filterboxmobile").hide();
      
      $(".collapse").removeClass("show in");
    });
 $(".clearbtn").click(function(){
      $(".filterselectbox").hide();
    });
  $(".applybtn").click(function(){
      $(".filterselectbox").hide();
    });
 $(".filterbtnmobile").click(function(){
 //alert("hi");
    $(".filterselectbox").show();
    });
 $(".locationfilter").click(function(){
 //alert("location");
    $(".filterselectbox").hide();
    $("#searchfilterbox").show();
     $(".locationboxmobile").show();
      $(".categoryboxmobile").hide();
      $(".serviceboxmobile").hide(); 
      $(".priceboxmobile").hide();
      $(".featureboxmobile").hide();
      $(".ratingboxmobile").hide();
      $(".dealboxmobile").hide();
      $(".filterboxmobile").hide();
    $(".collapse").addClass("show in");
    
    });

$(".categoryfilter").click(function(){
 //alert("category");
    $(".filterselectbox").hide();
    $("#searchfilterbox").show();
     $(".locationboxmobile").hide();
      $(".categoryboxmobile").show();
      $(".serviceboxmobile").hide(); 
      $(".priceboxmobile").hide();
      $(".featureboxmobile").hide();
      $(".ratingboxmobile").hide();
      $(".dealboxmobile").hide();
      $(".filterboxmobile").hide();
    $(".collapse").addClass("show in");   
    });

$(".pricefilter").click(function(){
// alert("price");
    $(".filterselectbox").hide();
    $("#searchfilterbox").show();
     $(".locationboxmobile").hide();
      $(".categoryboxmobile").hide();
      $(".serviceboxmobile").hide(); 
      $(".priceboxmobile").show();
      $(".featureboxmobile").hide();
      $(".ratingboxmobile").hide();
      $(".dealboxmobile").hide();
      $(".filterboxmobile").hide();
    $(".collapse").addClass("show in");
    });



$(".featuredfilter").click(function(){
// alert("price");
    $(".filterselectbox").hide();
    $("#searchfilterbox").show();
     $(".locationboxmobile").hide();
      $(".categoryboxmobile").hide();
      $(".serviceboxmobile").hide(); 
      $(".priceboxmobile").hide();
      $(".featureboxmobile").show();
      $(".ratingboxmobile").hide();
      $(".dealboxmobile").hide();
      $(".filterboxmobile").hide();
    $(".collapse").addClass("show in");
    });


$(".dealsoffer").click(function(){
// alert("price");
    $(".filterselectbox").hide();
    $("#searchfilterbox").show();
     $(".locationboxmobile").hide();
      $(".categoryboxmobile").hide();
      $(".serviceboxmobile").hide(); 
      $(".priceboxmobile").hide();
      $(".featureboxmobile").hide();
      $(".ratingboxmobile").hide();
      $(".dealboxmobile").show();
      $(".filterboxmobile").hide();
    $(".collapse").addClass("show in");
    });



$(".servicefilter").click(function(){
// alert("price");
    $(".filterselectbox").hide();
    $("#searchfilterbox").show();
     $(".locationboxmobile").hide();
      $(".categoryboxmobile").hide();
      $(".serviceboxmobile").show(); 
      $(".priceboxmobile").hide();
      $(".featureboxmobile").hide();
      $(".ratingboxmobile").hide();
      $(".dealboxmobile").hide();
      $(".filterboxmobile").hide();
    $(".collapse").addClass("show in");
    });

   



$(".filteroffer").click(function(){
// alert("price");
    $(".filterselectbox").hide();
    $("#searchfilterbox").show();
     $(".locationboxmobile").hide();
      $(".categoryboxmobile").hide();
      $(".serviceboxmobile").hide(); 
      $(".priceboxmobile").hide();
      $(".featureboxmobile").hide();
      $(".ratingboxmobile").hide();
      $(".dealboxmobile").hide();
      $(".filterboxmobile").show();
    $(".collapse").addClass("show in");
    });
 
    



$(".rating").click(function(){
 // alert("hi")
   $(this).toggleClass("active");
    });


// $(".panel-heading").click(function(){
//   // alert("price");
//    $(this).toggleClass("arrowup");
// });


// $(".panel-heading").click(function(){
//   // debugger
//   // console.log($(this).parents('.panel-body').find('.panel-collapse'))
//  // $(this).parents('.panel-body').find('.panel-collapse').hasClass('in');
//    // debugger
//   //  var _this = $(this);
//   // setTimeout(function () {
//     if (_this.parent().find(".panel-collapse").hasClass('in')) {
//       _this.removeClass('in');
//     } 

//     // if (_this.parent().find(".panel-collapse").not('.in')) {
//     //   _this.addClass('in');
//     // } 
   
//   }, 500);






 $('.panel-collapse').on('show.bs.collapse', function () {
   alert("show");
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
     alert("hide");
    $(this).siblings('.panel-heading').removeClass('active');
  });