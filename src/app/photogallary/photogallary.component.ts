import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photogallary',
  templateUrl: './photogallary.component.html',
  styleUrls: ['./photogallary.component.scss']
})
export class PhotogallaryComponent implements OnInit {

  albums:any;
  vendorDetails:any = {}
  constructor() { }

  ngOnInit() {
    $.getScript('./assets/js/prism.min.js'); 
    $.getScript('./assets/js/owljsor.js');
    $.getScript('./assets/js/jquery.fancybox.min.js');
    $.getScript('./assets/js/curosselfun.js');
    const Images=JSON.parse(sessionStorage.getItem('Vendorimages'));
     this.vendorDetails = JSON.parse(sessionStorage.getItem('vendorDetails'));
    console.log( this.vendorDetails );
   this.albums=Images;
}

}