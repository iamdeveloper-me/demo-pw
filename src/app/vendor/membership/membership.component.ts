import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
   providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class MembershipComponent implements OnInit {



  ngOnInit() {
    //  Code formatting script
      $.getScript('./assets/js/prism.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');


    $(".Suppliertab").click(function(){
    $("#filter").show();
    $("#action").hide();  
    $(".Suppliertab").addClass("selected"); 
    $(".Registertab").removeClass("selected");  
  
  });

    $(".Registertab").click(function(){
    $("#filter").hide();
    $("#action").show();  
    $(".Suppliertab").removeClass("selected"); 
    $(".Registertab").addClass("selected");  
  });
  }

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  }
}
