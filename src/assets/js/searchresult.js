$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item col-sm-12');$('#products .item').removeClass('grid-group-item col-sm-4 col-6 mobpad5px');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item col-sm-12');$('#products .item').addClass('grid-group-item col-sm-4 col-6 mobpad5px');});
    $('#photoview').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item col-sm-12 col-6 mobpad5px grid-group-item');$('#products .item').addClass('photo-group-item col-sm-4');});
    $('#gridmobile').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item col-sm-12');$('#products .item').addClass('grid-group-item col-sm-4 col-6 mobpad5px');});
   
});

function toggleChevron(e) {
	$(e.target)
		.prev('.panel-heading')
		.find("i.indicator")
		.toggleClass('fa-caret-down fa-caret-right');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);

if ($(window).width() < 514) {
    $('.collapse').removeClass('in');
} 

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
      $(".priceboxmobile").hide();
      $(".categoryboxmobile").hide();
      $(".ratingboxmobile").hide();
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
    $(".priceboxmobile").hide();
    $(".categoryboxmobile").hide();
    $(".ratingboxmobile").hide();
    $(".collapse").addClass("show in");
    
    });

$(".categoryfilter").click(function(){
 //alert("category");
    $(".filterselectbox").hide();
    $("#searchfilterbox").show();
    $(".locationboxmobile").hide();
    $(".priceboxmobile").hide();
    $(".categoryboxmobile").show();
    $(".ratingboxmobile").hide();
    $(".collapse").addClass("show in");   
    });

$(".pricefilter").click(function(){
// alert("price");
    $(".filterselectbox").hide();
    $("#searchfilterbox").show();
    $(".locationboxmobile").hide();
    $(".priceboxmobile").show();
    $(".categoryboxmobile").hide();
    $(".ratingboxmobile").hide();
    $(".collapse").addClass("show in");
    });
$(".rating").click(function(){
 // alert("hi")
   $(this).toggleClass("active");
    });
