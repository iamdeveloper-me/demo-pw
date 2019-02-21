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
  albumName:any[];
  albumImages:any[];
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
  
  console.log( this.vendorDetails);
  sessionStorage.setItem('albumimages',JSON.stringify(a));
  sessionStorage.setItem('portfolio_count',JSON.stringify('0'));
  const a1 =  this.vendorDetails.vendorCategories[0].categories.categoryName;
  const b = a.vendorId;
  const c =  this.vendorDetails.nameOfBusiness;
  const j = 'album';
  const k = a.albumName;
  this.router.navigateByUrl('/home/weddingvendorsss/'+a1+'/'+b+'/'+c+'/'+j+'/'+k);
  //this.router.navigate(['home/Photogallerydetail']);
}

goto_detail_of_portfolio(d){
  console.log(d);
  sessionStorage.setItem('portfolios',JSON.stringify(d));
  sessionStorage.setItem('portfolio_count',JSON.stringify('1'));
  const a = this.vendorDetails.vendorCategories[0].categories.categoryName;
  const b = d.vendorId;
  const c = this.vendorDetails.nameOfBusiness;
  const j = 'portfolios';
  const k = d.vendorId;
  this.router.navigateByUrl('/home/weddingvendorsss/'+a+'/'+b+'/'+c+'/'+j+'/'+k);
  //this.router.navigate(['home/Photogallerydetail']);
}
}