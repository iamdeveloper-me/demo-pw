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

 
  }

}
