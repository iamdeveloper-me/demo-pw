import { Component, OnInit } from '@angular/core';
import { apiService } from '../../../shared/service/api.service';
import { PagerService } from 'app/_services';

@Component({
  selector: 'app-inspirations',
  templateUrl: './inspirations.component.html',
  styleUrls: ['./inspirations.component.scss']
})
export class InspirationsComponent implements OnInit {

  constructor(private apiService : apiService,  private pagerService: PagerService,) { }
  
  pager: any = {};
  pagedItems: any = {};
  allItems: any = {};
  photosArray:any = {};
  eventsArray:any = {};
  ngOnInit() {  
   
    /* Photos API */
    this.apiService.getData(this.apiService.serverPath+'Couple/myinspirationsphotos',).subscribe(
      data => {
        this.photosArray = data;
        console.log(this.photosArray)
      });  

    /* Events API */
    this.apiService.getData(this.apiService.serverPath+'Couple/myinspirationevents',).subscribe(
      data => {
        this.eventsArray = data;
        console.log(this.eventsArray);
      });

    $.getScript('../../assets/register/jquery.fancybox.min.js');
    $.getScript('./assets/js/prism.min.js'); 
    $.getScript('./assets/js/curosselfun.js');


     $("li").removeClass("user");
     $("#login").hide();

$('.allclick').click(function(e){

    $(".photobox").show();
    $(".eventbox").show();
});
$('.photoclick').click(function(e){

    $(".photobox").show();
    $(".photoclick").addClass("pink");
    $(".eventclick").removeClass("pink");
    $(".eventbox").hide();
});
$('.eventclick').click(function(e){

    $(".photobox").hide();
    $(".photoclick").removeClass("pink");
    $(".eventclick").addClass("pink");
    $(".eventbox").show();
});



$('.filterbtnmobile').click(function(e){

    $(".FilterDialog").show();
});
$('.icon-small').click(function(e){

    $(".FilterDialog").hide();
});
$('.regular').click(function(e){

    $(".FilterDialog").hide();
});

  let modalId = $('#image-gallery');

$(document)
  .ready(function () {

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
      $('#show-previous-image, #show-next-image')
        .show();
      if (counter_max === counter_current) {
        $('#show-next-image')
          .hide();
      } else if (counter_current === 1) {
        $('#show-previous-image')
          .hide();
      }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr) {
      let current_image,
        selector,
        counter = 0;

      $('#show-next-image, #show-previous-image')
        .click(function () {
          if ($(this)
            .attr('id') === 'show-previous-image') {
            current_image--;
          } else {
            current_image++;
          }

          selector = $('[data-image-id="' + current_image + '"]');
          updateGallery(selector);
        });

      function updateGallery(selector) {
        let $sel = selector;
        current_image = $sel.data('image-id');
        $('#image-gallery-title')
          .text($sel.data('title'));
        $('#image-gallery-image')
          .attr('src', $sel.data('image'));
        disableButtons(counter, $sel.data('image-id'));
      }

      if (setIDs == true) {
        $('[data-image-id]')
          .each(function () {
            counter++;
            $(this)
              .attr('data-image-id', counter);
          });
      }
      $(setClickAttr)
        .on('click', function () {
          updateGallery($(this));
        });
    }
  });

// build key actions
$(document)
  .keydown(function (e) {
    switch (e.which) {
      case 37: // left
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
          $('#show-previous-image')
            .click();
        }
        break;
 
      case 39: // right
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
          $('#show-next-image')
            .click();
        }
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });
  }

  setPage(page: number) {
    this.pager = this.pagerService.getPagerEvent(this.allItems.length, page);
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
