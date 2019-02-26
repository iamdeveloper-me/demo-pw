import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { apiService } from 'app/shared/service/api.service';
@Component({
  selector: 'app-photogallary',
  templateUrl: './photogallary.component.html',
  styleUrls: ['./photogallary.component.scss']
})
export class PhotogallaryComponent implements OnInit {

  albums:any;
  vendorDetails:any = {}
  vendorid
  constructor(private router: Router,    private route : ActivatedRoute,  private apiService: apiService, ) { }
  albumName:any[];
  albumImages:any[];
  ngOnInit() {
    $.getScript('./assets/js/prism.min.js'); 
    $.getScript('./assets/js/owljsor.js');
    $.getScript('./assets/js/jquery.fancybox.min.js');
    $.getScript('./assets/js/curosselfun.js');
    this.route.paramMap.subscribe(params => {
     this.vendorid = params
     this.apiService.getData(this.apiService.serverPath+'PerfectWedding/vendordetails'+'?id='+this.vendorid.params.id).subscribe(data=>{    
       this.vendorDetails  = data;   
       this.albums =     data.albums  
       console.log(  this.vendorDetails  )})     
    })

}

goto_detail_of_album(a){
  
  console.log( this.vendorDetails);
  sessionStorage.setItem('portfolio_count',JSON.stringify('0'));
  const a1 =  this.vendorDetails.vendorCategories[0].categories.categoryName;
  const b = a.vendorId;
  const c =  this.vendorDetails.nameOfBusiness;
  const j = 'album';
  const k = a.albumName;
  const h = a.albumsId;
  this.router.navigateByUrl('/home/weddingvendorsss/'+a1+'/'+b+'/'+c.replace(/\s/g,'')+'/'+j+'/'+h+'/'+k);

}

goto_detail_of_portfolio(d){
  console.log(d);
//  sessionStorage.setItem('portfolios',JSON.stringify(d));
  sessionStorage.setItem('portfolio_count',JSON.stringify('1'));
  const a = this.vendorDetails.vendorCategories[0].categories.categoryName;
  const b = this.vendorDetails.vendorId;
  const c = this.vendorDetails.nameOfBusiness;
  const j = 'portfolios';
  const k = "image";
  const h = this.vendorDetails.vendorId;
  this.router.navigateByUrl('/home/weddingvendorsss/'+a+'/'+b+'/'+c.replace(/\s/g,'')+'/'+j+'/'+h+'/'+k);
  //this.router.navigate(['home/Photogallerydetail']);
}

    go_back_link_page(){

      
      this.route.paramMap.subscribe(params => {
        this.vendorid = params
        console.log(params)
      
        const a =  this.vendorid.params.categoryname;
        const b = this.vendorid.params.id;
        const c = this.vendorid.params.bussinesname;
        this.router.navigateByUrl('/home/weddingvendorsdetailprofile/'+a+'/'+b+'/'+c.replace(/\s/g,''));
      })
    }
}