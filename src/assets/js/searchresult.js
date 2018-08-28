$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');$('#products .item').removeClass('col-sm-6 grid-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('col-sm-6 list-group-item');$('#products .item').addClass('col-sm-6 grid-group-item');});
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