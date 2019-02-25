import { Component, OnInit } from '@angular/core';
import { apiService } from 'app/shared/service/api.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-photogallerydetail',
  templateUrl: './photogallerydetail.component.html',
  styleUrls: ['./photogallerydetail.component.scss']
})
export class PhotogallerydetailComponent implements OnInit {

  constructor(private router: Router, private route : ActivatedRoute,  private apiService: apiService) { }
  vendorDetails:any={};
  portpholio = [];
  vendorid
  portfolios_length:any;
   albumImages:any = {};
  albumName: string;
  ngOnInit() {
   $.getScript('./assets/js/prism.min.js'); 
    $.getScript('./assets/js/owljsor.js');
    $.getScript('https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.2/dist/jquery.fancybox.min.js');
    $.getScript('./assets/js/curosselfun.js');
    this.route.paramMap.subscribe(params => {
      this.vendorid = params
      console.log(params)

      if( JSON.parse(sessionStorage.getItem('portfolio_count')) == '1'){
        this.apiService.getData(this.apiService.serverPath+'PerfectWedding/vendordetails'+'?id='+this.vendorid.params.id).subscribe(data=>{    
              
          this.portpholio = data.portfolios
          console.log(  this.portpholio)
          this.portfolios_length = this.portpholio.length
        })     
          if( this.vendorDetails === undefined)
          {alert("no such data")}
     }else{
     // this.vendorDetails = JSON.parse(sessionStorage.getItem('albumimages'));
      this.apiService.getData(this.apiService.serverPath+'PerfectWedding/vendordetails'+'?id='+this.vendorid.params.id).subscribe(data=>{    

        this.vendorDetails = data.albums.filter(items => items.albumsId ==   this.vendorid.params.albumid && items.albumName ==  this.vendorid.params.albumname)[0];
        console.log(  this.vendorDetails)})     
        if( this.vendorDetails === undefined)
        {alert("no such data")}
     }

     })
   
 

  } 



  go_back_link_page(){
    if(JSON.parse(sessionStorage.getItem('portfolio_count')) == '1'){
      this.portpholio = [];
    }
     this.route.paramMap.subscribe(params => {
       this.vendorid = params
      const a =  this.vendorid.params.categoryname;
      const b = this.vendorid.params.id;
      const c = this.vendorid.params.bussinesname;
      this.router.navigateByUrl('/home/weddingvendorss/'+a+'/'+b+'/'+c.replace(/\s/g,'')+'/'+'Allalbum');
   })
  }
}
