import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
   providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers

})
export class DashboardComponent implements OnInit {
    currentLocation = 'Dubai  (Primary Location)';
    PhoneEdit = '5555555' ;
    angularLogo = 'https://s3.us-east-2.amazonaws.com/prefect-image/deco4.jpg';

    constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;


  }
// Variable Declaration
  x: any;
  greeting = {};
  name = 'World';

  // Context and manual triggers section
  @ViewChild('x') public tooltip: NgbTooltip;

  public changeGreeting(greeting: any): void {
    const isOpen = this.tooltip.isOpen();
    this.tooltip.close();
    if (greeting !== this.greeting || !isOpen) {
      this.greeting = greeting;
      this.tooltip.open(greeting);
    }
  }
      ngOnInit() {
          $.getScript('./assets/js/prism.min.js');
          $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
          $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
          $.getScript('https://www.jssor.com/script/jssor.slider-27.4.0.min.js');
          $.getScript('./assets/js/vendorsidebar.js');
          // $("div").click(function(){
            $("div").removeClass( "modal-backdrop");
          // });  
          //$(document).ready(function(){

           // $('[data-toggle="tooltip"]').tooltip();   

         // });
          //  jQuery(document).ready(function ($) {
       // var options = { $AutoPlay: 1 };
       // var jssor1_slider = new $JssorSlider$("jssor_1", options);
   // });

            function testAnim(x) {
              $('.modal .modal-dialog').addClass('animated');
              $('.modal .modal-dialog').addClass('bounceIn');
          };
          $('#BusinessCover').on('show.bs.modal', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#BusinessCover').on('hide.bs.modal', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })
          $('#Description').on('show.bs.modal', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#Description').on('hide.bs.modal', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })
          $('#Photos').on('show.bs.modal', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#Photos').on('hide.bs.modal', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })
          $('#Service').on('show.bs.modal', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#Service').on('hide.bs.modal', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })
          $('#Location').on('show.bs.modal', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#Location').on('hide.bs.modal', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })
          $('#camera').on('show.bs.modal', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#camera').on('hide.bs.modal', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })
          $('#PhoneEdit').on('show.bs.modal', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#PhoneEdit').on('hide.bs.modal', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })
          $('#currentLocation').on('show.bs.modal', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#currentLocation').on('hide.bs.modal', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })
          if(window.location.pathname == '/vendor/dashboard' )
          { $("body").removeClass( "modal-open");
          
            $("body").css({ 'padding-right' : '' });
          }
          
          var acc = document.getElementsByClassName("accordion");
          var i;

          for (i = 0; i < acc.length; i++) {
              acc[i].addEventListener("click", function() {
                  /* Toggle between adding and removing the "active" class,
                  to highlight the button that controls the panel */
                  this.classList.toggle("active");

                  /* Toggle between hiding and showing the active panel */
                  var panel = this.nextElementSibling;
                  if (panel.style.display === "block") {
                      panel.style.display = "none";
                  } else {
                      panel.style.display = "block";
                  }
              });
          }
    }

   
}





