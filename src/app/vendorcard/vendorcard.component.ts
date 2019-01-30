import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { apiService } from '../shared/service/api.service';
import { Router } from '@angular/router';
import { SlidesOutputData } from 'ngx-owl-carousel-o';

import{ratingStars} from '../ngservices/ratingstars';
import { SearchresultComponent } from '../searchresult/searchresult.component';
@Component({
  selector: 'app-vendorcard',
  templateUrl: './vendorcard.component.html',
  styleUrls: ['./vendorcard.component.scss'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class VendorcardComponent implements OnInit {
  ratingmodel: ratingStars;
  customOptions: any = {
    margin: 20,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: { 0: { items: 1, stagePadding: 40 }, 768: { items: 2, stagePadding: 40 }, 1024: { items: 4 }, 1366: { items: 4 } },
    nav: true,
  }
  featured_supplier_data = []
  max = []
  dream_wedding_location = []
  dream_wedding_location_length;
  all_category = []
  Popular_Wedding_array = []
  Popular=''
  objFilterParam: filterParam;
  activeSlides: SlidesOutputData;
  slidesStore: any[];
  constructor( private router: Router ,config: NgbCarouselConfig, private apiService: apiService) {
    // customize default values of carousels used by this component tree
    this.ratingmodel = new ratingStars();
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    this.objFilterParam = new filterParam();
  }
  getData(data: SlidesOutputData) {
    this.activeSlides = data;
  }
  

  

  ngOnInit() {
    
    this.featured_supplier()
    this.Dream_Wedding()
    this.Popular_Wedding()
    $.getScript('./assets/jss/core/popper.min.js');
    $.getScript('./assets/jss/core/bootstrap-material-design.min.js');
    $.getScript('./assets/jss/plugins/perfect-scrollbar.jquery.min.js');
    $.getScript('./assets/jss/plugins/chartist.min.js');
    $.getScript('./assets/jss/plugins/bootstrap-notify.js');
    $.getScript('./assets/js/owljsor.js');
    $.getScript('./assets/js/curosselfun.js');  
  }
  featured_supplier(){
      this.apiService.getData(this.apiService.serverPath+'PerfectWedding/featuredsuppliers').subscribe(data => {
      this.featured_supplier_data = data.featuredWeddingSuppliers;
      this.slidesStore = this.featured_supplier_data;
      if(this.featured_supplier_data.length > 0){
        this.featured_supplier_data.forEach(element => {
          if(element.reviews != null)
          {
            element.reviews.forEach(element => {           
              this.max.push(element.rating) 
              this.max.sort((a,b) => 0 - (a > b ? 1 : -1))
            });
          }
        });
      }
    },error => {
       console.log(error)
      }
    )
  }
  Dream_Wedding(){
    this.apiService.getData(this.apiService.serverPath+'PerfectWedding/dreamweddinglocation').subscribe(data => {
      this.dream_wedding_location =  data.dreamWeddingLocations;
      this.dream_wedding_location_length = this.dream_wedding_location.length
    },
      error => {
       console.log(error)
      }
    )
  }
  Popular_Wedding(){
    this.apiService.getData(this.apiService.serverPath+'Categories/categorieswithlistingcount').subscribe(data => {
     for (let i of data) {
        if(i.isPopular == true){
          this.Popular_Wedding_array.push(i);
        }
      }
    },
      error => {
       console.log(error)
      }
    )
  }
  goToVendordetails(slide) {
      let url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PerfectWedding/vendordetails';
      this.apiService.getData(url+'?id='+slide.vendorId).subscribe(res=>{
        sessionStorage.setItem('vendorDetails',JSON.stringify(res));

       this.router.navigate(['home/detailprofile',0]);
    });
   // this.router.navigate(['home/detailprofile/',slide.vendorId])
  }
  Categories_each(c,isAllSupplier,isDreamLocation){
    if(c){
    

   this.objFilterParam.catId  = c.categoryId;
   this.objFilterParam.categoryName= c?c.categoryName:'';
   this.objFilterParam.isDreamLocation=isDreamLocation;
   this.objFilterParam.isAllSupplier=isAllSupplier;
   this.objFilterParam.page = 0;
   this.objFilterParam.pageSize = 25;
   this.objFilterParam.sortDir = "";
   this.objFilterParam.sortedBy ="";
   this.objFilterParam.searchQuery ="";

  }

   sessionStorage.setItem('filterParam',JSON.stringify(this.objFilterParam));
    this.router.navigate(['home/weddingvendors',this.objFilterParam.categoryName.replace(/\s/g,'')]);
  }
  supplier_all(c,isAllSupplier,isDreamLocation){
      this.objFilterParam.catId  = c?c.categoryId:0;
      this.objFilterParam.categoryName= c?c.categoryName:'';
      this.objFilterParam.isDreamLocation=isDreamLocation;
      this.objFilterParam.isAllSupplier=isAllSupplier;
      this.objFilterParam.page = 0;
      this.objFilterParam.pageSize = 25;
      this.objFilterParam.sortDir = "";
      this.objFilterParam.sortedBy ="";
      this.objFilterParam.searchQuery ="";

  
    sessionStorage.setItem('filterParam',JSON.stringify(this.objFilterParam));
    this.router.navigate(['home/weddingvendors',this.objFilterParam.categoryName.replace(/\s/g,'')]);
  
  }

}
export class filterParam{
  catId:number=0;
  categoryName:string='';
  isAllSupplier:boolean=false;
  isDreamLocation:boolean=false;
  page:number=0;
  pageSize: number=3;
  sortDir: "";
  sortedBy: "";
  searchQuery: "";
  locationId:number;
  totalCount:number;
}