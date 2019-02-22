import { Component, OnInit } from '@angular/core';
import { SlidesOutputData } from 'ngx-owl-carousel-o';
import { MasterserviceService } from 'app/ngservices/masterservice.service';
import { apiService } from 'app/shared/service/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { filterParam } from '../vendorcard/vendorcard.component'
import { SearchListingVM } from 'app/searchresult/searchresult.component';
@Component({
  selector: 'app-honeymoon',
  templateUrl: './honeymoon.component.html',
  styleUrls: ['./honeymoon.component.scss'],
  providers: [apiService],
})
export class HoneymoonComponent implements OnInit{
  Honeymoon_destinations:any;
  objFilterParam: filterParam;
  vendors_of_honeymoon:any;
  locationId:number=0;
  locationClickData : any;
  searchlistvm: SearchListingVM;
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    margin:12,
    navText: ['', ''],
    responsive: { 0: { items: 1 }, 400: { items: 1 },
      740: { items: 4 }, 940: { items: 4 } },
    nav: true,
    //autoplaySpeed:1
  }
  ngOnInit() {
    this.title.setTitle('Honeymoon & Travel | Perfect Weddings');    
    this.meta.addTag({name:'description',content:'Honeymoon & Travel | Perfect Weddings'});    

      this.apiService.getData(this.apiService.serverPath+'PerfectWedding/vendorsinhoneymoonandtravel').subscribe(data => {
        this.slidesStore = data;
        console.log(data);
        }, error => { console.log(error) }
        );

  }
  activeSlides: SlidesOutputData;
  slidesStore: any[];
  constructor(public _masterservice: MasterserviceService,private apiService: apiService,private router: Router,private meta:Meta, private title : Title) {
    this.objFilterParam = new filterParam();
    this.searchlistvm = new SearchListingVM();
   this.getSliderData(); 
    this.apiService.getData(this.apiService.serverPath+'PerfectWedding/honeymoondestinations').subscribe(data => {
      this.Honeymoon_destinations =data;
      console.log( this.Honeymoon_destinations);
      },error => { console.log(error) });
  }
  getData(data: SlidesOutputData) {
    this.activeSlides = data;
  }
  getSliderData(){
    this.searchlistvm.categoryId.push(4);
    this._masterservice.getFilterResult(this.searchlistvm).subscribe(res =>{
      this.slidesStore =  res['items']  ;
      console.log( this.slidesStore)
    },error=>{
      console.log(JSON.stringify(error));
    });
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
        this.objFilterParam.categoryName= var_data['place_name'] ;
        this.objFilterParam.isDreamLocation=isDreamLocation;
        this.objFilterParam.isAllSupplier=isAllSupplier;
        this.objFilterParam.page = 1;
        this.objFilterParam.pageSize = 25;
        this.objFilterParam.sortDir = "";
        this.objFilterParam.sortedBy ="";
        this.objFilterParam.searchQuery ="";
        this.objFilterParam.locationId = var_data['location'];
      }

      console.log( this.objFilterParam.categoryName)
        sessionStorage.setItem('filterParam',JSON.stringify(this.objFilterParam));
        this.router.navigate(['home/weddingvendors',this.objFilterParam.categoryName.replace(/\s/g,'') ,this.objFilterParam.locationId ]);
  }
  searchmore(data){
    sessionStorage.setItem('Honeymoon_detail',JSON.stringify(data));
      this.locationClickData = data.honeymoonLocationId;
      const var_data = {
        category:  0,
        location: this.locationClickData,
        place_name: data.name
      }
     
      this.search(null,true,false,var_data)
  }
  // honeymoondetail_page(a){
    
  //   sessionStorage.setItem('Honeymoon_detail',JSON.stringify(a));
  //  // this.router.navigateByUrl(['/home/Honeymoon_Details/', a.name]);
  //   this.router.navigate(['home/weddingvendors',a.name.replace(/\s/g,''),a.honeymoonLocationId]);
  
  // }
}
