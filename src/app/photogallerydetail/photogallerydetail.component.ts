import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photogallerydetail',
  templateUrl: './photogallerydetail.component.html',
  styleUrls: ['./photogallerydetail.component.scss']
})
export class PhotogallerydetailComponent implements OnInit {

  constructor() { }
  vendorDetails = {};
  ngOnInit() {
   $.getScript('./assets/js/prism.min.js'); 
    $.getScript('./assets/js/owljsor.js');
    $.getScript('https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.2/dist/jquery.fancybox.min.js');
    $.getScript('./assets/js/curosselfun.js');
    this.vendorDetails = JSON.parse(sessionStorage.getItem('vendorDetails'));
    console.log( this.vendorDetails);
     
  }

}
