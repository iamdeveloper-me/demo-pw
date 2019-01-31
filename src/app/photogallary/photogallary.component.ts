import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-photogallary',
  templateUrl: './photogallary.component.html',
  styleUrls: ['./photogallary.component.scss']
})
export class PhotogallaryComponent implements OnInit {

  albums:any;
  vendorDetails:any = {}
  constructor(private router: Router ) { }

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

goto_detail_of_album(a){
  
  console.log(a);
  sessionStorage.setItem('albumimages',JSON.stringify(a));
  sessionStorage.setItem('portfolio_count',JSON.stringify('0'));
  
  this.router.navigate(['home/Photogallerydetail']);
}

goto_detail_of_portfolio(d){
  sessionStorage.setItem('portfolios',JSON.stringify(d));
  sessionStorage.setItem('portfolio_count',JSON.stringify('1'));
  
  this.router.navigate(['home/Photogallerydetail']);
}
}