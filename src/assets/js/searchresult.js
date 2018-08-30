$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item col-sm-12');$('#products .item').removeClass('grid-group-item col-sm-4');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item col-sm-12');$('#products .item').addClass('grid-group-item col-sm-4');});
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
});