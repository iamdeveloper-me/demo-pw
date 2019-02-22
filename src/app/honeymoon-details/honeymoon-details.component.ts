import { Component, OnInit } from '@angular/core';
import { SlidesOutputData } from 'ngx-owl-carousel-o';
import { MasterserviceService } from 'app/ngservices/masterservice.service';
import { filterParam } from '../vendorcard/vendorcard.component'
import { apiService } from 'app/shared/service/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-honeymoon-details',
  templateUrl: './honeymoon-details.component.html',
  styleUrls: ['./honeymoon-details.component.scss'],
  providers: [apiService]
})
export class HoneymoonDetailsComponent  {
  objFilterParam: filterParam;
  customOptions: any = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: false,
    navSpeed: 700,
    margin:12,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true,
    //autoplaySpeed:1
  };
  locationClickData : any;
  Honeymoon_detail:any;
  categoryClickData : any;
  activeSlides: SlidesOutputData;
  slidesStore: any[];
  locationId:number=0;
  constructor( private router: Router ,public _masterservice: MasterserviceService,private apiService: apiService) {
    this.objFilterParam = new filterParam();
    // this.slidesStore = [
    //   {
    //     src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     business_name: "Business Name" 
    //   },
    //   {
    //     src: "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

    //   },
    //   {
    //     src: "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

    //   },
    //   {
    //     src: "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

    //   },
    //   {
    //     src: "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

    //   }
    // ]
    this.getSliderData(); 
    this.Honeymoon_detail= JSON.parse(sessionStorage.getItem('Honeymoon_detail'));

    console.log(this.Honeymoon_detail)
  }
  getData(data: SlidesOutputData) {
    this.activeSlides = data;
  }
  getSliderData(){
    const data = {
      "categoryId" : 4,
      "districtId" : 1
    }
    this._masterservice.getFilterResult(data).subscribe(res =>{
      this.slidesStore =  res['items']  
    },error=>{
      console.log(JSON.stringify(error));
    });
  }
  ngOnInit() {   
              $.getScript('./assets/js/searchresult.js'); 
              this.apiService.getData(this.apiService.serverPath+'PerfectWedding/vendorsinhoneymoonandtravel').subscribe(data => {
                this.slidesStore = data;
                }, error => { console.log(error) }
                );
  }
  getSearchFilterResult(){}
  clear_the_session(){
    this.Honeymoon_detail = null;
  }


  search(e,isAllSupplier,isDreamLocation,var_data){
    if(var_data == null){
        this.objFilterParam.catId  = e.value.category?e.value.category.categoryId:0;
        this.objFilterParam.categoryName= e.value.category?e.value.category.categoryName: '' ;
        this.objFilterParam.categoryName=this.objFilterParam.categoryName==undefined?'All Categories':this.objFilterParam.categoryName;
        this.objFilterParam.isDreamLocation=isDreamLocation;
        this.objFilterParam.isAllSupplier=isAllSupplier;
        this.objFilterParam.page = 1;
        this.objFilterParam.pageSize = 25;
        this.objFilterParam.sortDir = "";
        this.objFilterParam.sortedBy ="";
        this.objFilterParam.searchQuery ="";
        this.objFilterParam.locationId = this.locationId['districtId'];
    }else{
        this.objFilterParam.catId  = var_data['category'] != 0 ?var_data['category']['categoryId']:0;
        this.objFilterParam.categoryName= var_data['category']?var_data['category']['categoryName']: '' ;
        this.objFilterParam.isDreamLocation=isDreamLocation;
        this.objFilterParam.isAllSupplier=isAllSupplier;
        this.objFilterParam.page = 1;
        this.objFilterParam.pageSize = 25;
        this.objFilterParam.sortDir = "";
        this.objFilterParam.sortedBy ="";
        this.objFilterParam.searchQuery ="";
        this.objFilterParam.locationId = var_data['location'];
      }
        sessionStorage.setItem('filterParam',JSON.stringify(this.objFilterParam));
        this.router.navigate(['home/weddingvendors',this.objFilterParam.categoryName.replace(/\s/g,'')]);
}

searchmore(data){
    this.locationClickData = data.honeymoonLocationId;
    const var_data = {
      category:  0,
      location: this.locationClickData
    }
    this.search(null,true,false,var_data)
}
}
