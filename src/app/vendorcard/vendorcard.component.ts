import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vendorcard',
  templateUrl: './vendorcard.component.html',
  styleUrls: ['./vendorcard.component.scss'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class VendorcardComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  }

  ngOnInit() { 
    $.getScript('./assets/jss/core/popper.min.js');
    $.getScript('./assets/jss/core/bootstrap-material-design.min.js');
    $.getScript('./assets/jss/plugins/perfect-scrollbar.jquery.min.js');
    $.getScript('./assets/jss/plugins/chartist.min.js');
    $.getScript('./assets/jss/plugins/bootstrap-notify.js');
    $.getScript('./assets/js/owljsor.js');
    $.getScript('./assets/js/curosselfun.js');
 
  }

}
