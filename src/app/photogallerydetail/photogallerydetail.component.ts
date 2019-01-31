import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photogallerydetail',
  templateUrl: './photogallerydetail.component.html',
  styleUrls: ['./photogallerydetail.component.scss']
})
export class PhotogallerydetailComponent implements OnInit {

  constructor() { }
  vendorDetails:any;
  portpholio = [];
  portfolios_length:any;
   albumImages:any = {};
  albumName: string;
  ngOnInit() {
   $.getScript('./assets/js/prism.min.js'); 
    $.getScript('./assets/js/owljsor.js');
    $.getScript('https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.2/dist/jquery.fancybox.min.js');
    $.getScript('./assets/js/curosselfun.js');
   
   
     if( JSON.parse(sessionStorage.getItem('portfolio_count')) == '1'){
        this.portpholio =  JSON.parse(sessionStorage.getItem('portfolios'));
        this.portfolios_length = this.portpholio.length
        console.log(this.portpholio.length)
     }else{
      this.vendorDetails = JSON.parse(sessionStorage.getItem('albumimages'));
     }

  } 
  session_data(){
    
    if(JSON.parse(sessionStorage.getItem('portfolio_count')) == '1'){
      this.portpholio = [];
    }
  }
}
