
import { Pipe, PipeTransform} from '@angular/core';

import { OnInit, Component, HostListener } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { MasterserviceService } from 'app/ngservices/masterservice.service';
import {RatingModule} from 'ngx-rating';
import { CustompipePipe } from 'app/custompipe.pipe';
import { CategoryPipePipe } from 'app/category-pipe.pipe';
import { apiService } from 'app/shared/service/api.service';
import { filterParam } from 'app/vendorcard/vendorcard.component';
import { SlidesOutputData } from 'ngx-owl-carousel-o';
import { toBase64String } from '@angular/compiler/src/output/source_map';


@Pipe({ name: 'defaultImage' })
export class PP implements PipeTransform {
  transform(
    value: string,
    fallback: string,
    forceHttps: boolean = false
  ): string {
    let image = "";
    if (value) {
      
      image = value;
    } else {
      image = fallback;
    }

    if (forceHttps) {
      if (image.indexOf("https") == -1) {
        image = image.replace("http", "https");
      }
    }

    return image;
  }
  
}

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss'],
  providers: [CustompipePipe, CategoryPipePipe]
})
export class SearchresultComponent implements OnInit {
  customOptions: any = {
    loop: false,
    margin: 20,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    nav: false,
    autoplay: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    //autoplaySpeed:1
  }

  activeSlides: SlidesOutputData;

  slidesStore: any[];
  collection = [];
  objSearchFilter: filterParam
  locations:any;
  categories:any;
  filters: any;
  count:number = 3
  loading=false;
  selectedLocationsCount = 0;
  objSearchlistvm: SearchListingVM;
  objSearchResultItems:any;
  locationFilterParam:string='';
  categoryFilterParam:string='';
  pageNumber=0;
//  pageSize:number=3;
  disableLoadingButton=true;
  blankImg='../../assets/img/noImg.png';

  constructor(public _route:Router, private _activeRoute: ActivatedRoute, private _masterservice: MasterserviceService, private api: apiService) {  
    // this._route.routeReuseStrategy.shouldReuseRoute.call(this.paginate(this.objSearchFilter.pageSize));
    this._activeRoute.params.subscribe(res=>{
      this.objSearchFilter =JSON.parse(sessionStorage.getItem('filterParam'));
      this.collection=[];
      this.paginate(this.objSearchFilter.pageSize)
    })
    this.objSearchFilter=new filterParam();
    this.objSearchlistvm = new SearchListingVM();
    if(this._activeRoute!=undefined){
      this.objSearchFilter =JSON.parse(sessionStorage.getItem('filterParam'));
      this.objSearchlistvm.categoryId.push(this.objSearchFilter.catId);
      this.objSearchlistvm.districtId.push(this.objSearchFilter.locationId);
    }
    this.getLocations();
    this.getCategories();
    this.getFilters();
   // this.objSearchlistvm.categoryId.push(this.objSearchFilter.catId);
    this._masterservice.getFilterResult(this.objSearchlistvm).subscribe(res =>{
      this.objSearchResultItems = res;
      this.slidesStore =  this.objSearchResultItems['items']
      this.getSearchFilterResult();
      console.log(JSON.stringify(this.objSearchResultItems));
    },error=>{
      console.log(JSON.stringify(error));
    });
 //   this.paginate(this.objSearchFilter.pageSize);
  }
  getData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }
 ngOnInit() {   
  //$.getScript('./assets/js/owljsor.js');
  $.getScript('./assets/js/searchresult.js'); 
  $.getScript('./assets/register/js/jquery-2.2.4.min.js');
  $.getScript('./assets/register/js/bootstrap.min.js');
  //$.getScript('./assets/register/js/jquery.bootstrap.js');

  $.getScript('./assets/jss/core/popper.min.js');
  $.getScript('./assets/jss/core/bootstrap-material-design.min.js');
  $.getScript('./assets/jss/plugins/perfect-scrollbar.jquery.min.js');
  $.getScript('./assets/jss/plugins/chartist.min.js');
  $.getScript('./assets/jss/plugins/bootstrap-notify.js');
  $(".slider_use_anather_compo").hide();
  }
  goToPortfolioDetail(vendor){
    // debugger;
    let url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PerfectWedding/vendordetails';
    this.api.getData(url+'?id='+vendor.vendorId).subscribe(res=>{
      sessionStorage.setItem('vendorDetails',JSON.stringify(res));
    this._route.navigate(['home/detailprofile',0]);
  });
}
  getLocations(){
    this._masterservice.getAllLocation().subscribe(res=>{
      this.locations=res;
      if(this.objSearchFilter.locationId>0){
        if(this.objSearchFilter.locationId>0){
          this.locations=this.locations.filter(l=>l.id==this.objSearchFilter.locationId);
          this.locations.forEach(element => {
            element.isSelect=false;
          });
        }
      }
    });
      
  }

  getCategories(){
     this._masterservice.getAllCategories().subscribe(res=>{
   //    res.forEach(element => {
     //    element['pageSize'] = this.objSearchlistvm.pageSize
     //  });
      this.categories=res;
      if(this.objSearchFilter.catId>0){
       // this.categories=this.categories.filter(c=>c.categoryId==this.objSearchFilter.categoryId);
        this.categories.forEach(element => {
          if(element.categoryId==this.objSearchFilter.catId){
          element.isSelect=true;}else{element.isSelect=false;}
        });
      }
    })
    
  }
  getFilters(){
    let filter_paramArray=[];
    filter_paramArray.push(this.objSearchFilter.catId);
    this._masterservice.getFilters(filter_paramArray).subscribe(res=>{
      this.filters=res;
      if(this.filters.length>0){
      this.filters.services.forEach(element => {
        element.isSelect=false;
      });
    }
    },error=>{
      console.log(error);
    })
  }
  getSearchFilterResult(){
    this.objSearchlistvm = new SearchListingVM();
    if(this.filters){
    if(this.filters.services!=null){
    this.filters.services.forEach(element => {
      if(element.isSelect){
        this.objSearchlistvm.serviceId.push(element.servicesId);
      }
    });
    this.filters.filters.forEach(element => {
      if(element.isSelect){
      element.customFieldOptionList.forEach(cfo => {
        this.objSearchlistvm.customField =new FieldSearchVM();
        if(cfo.isSelect){
          this.objSearchlistvm.customField.customFieldId=element.customFieldId;
          this.objSearchlistvm.customField.userValue=cfo.key;
          this.objSearchlistvm.customsFields.push(this.objSearchlistvm.customField);
        }
      });
    } 
      this.objSearchlistvm.customField = new FieldSearchVM();
    });
  }
  if(this.categories){
    this.categories.forEach(element => {
      if(element.isSelect){
        this.objSearchlistvm.categoryId.push(element.categoryId);
      }
    });
  }
    this.locations.forEach(element => {
      if(element.isSelect){
        this.objSearchlistvm.districtId.push(element.districtId)
      }else{
        element.isSelect=false;
      }
    });
  }
  this.loading=true;
    // this._masterservice.getFilterResult(this.objSearchlistvm).subscribe(res =>{
    //   this.loading=false;  
    //   this.objSearchResultItems = res;
    //   this.setBlankImg();
    //   this.addToCollection();
    //   console.log(JSON.stringify(this.collection)) ;
    // },error=>{
    //   this.loading=false; 
    // });
     this.paginate(this.objSearchFilter.pageSize);
   // this.paginate(this.objSearchFilter.pageSize);
  }
  clearFilters(){
    this.locations.forEach(element => { element.isSelect=false; });
    this.objSearchlistvm.districtId = [];
    this.categories.forEach(element => { element.isSelect=false; });
    this.objSearchlistvm.categoryId = [];
  }
  addToCollection(){
    this.objSearchResultItems.items.forEach(element => {
      this.collection.push(element);
    });
  }
  filterLocations(ev){
    let filterResult=this.locations.filter(n=>n.name.startwith(ev.value));
    this.locations=filterResult;
  }
  setBlankImg(){
    if(this.objSearchResultItems){
      this.objSearchResultItems.items.forEach(element => {
          if(element.profileImage==null){
            element.profileImage=this.blankImg;
       }
       });
      }
  }
   paginate (pageSize) {
     debugger;
    this.loading=true; 
  this._masterservice.getFilterResult(this.objSearchlistvm).subscribe(res =>{
    this.objSearchResultItems = res;
    this.setBlankImg();
    this.addToCollection();
    this.loading=false; 
  console.log(this.objSearchResultItems) ; 
  },error=>{
    this.loading = false;
  });   
  this.disableLoadingButton=false;
   
 }
 @HostListener("window:scroll", [])
 scrollToBottom(){
   debugger;
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    // you're at the bottom of the page
    this.pageNumber+=1;
    this.paginate(this.objSearchFilter.pageSize);
}
 }
}
export class SearchFilterVm{
  categoryId:number=1;
  locationId:number=0;
  searchInFeaturedLocation:boolean=true;
  searchInDreamLocation:boolean=true;
}
export class SearchListingVM{
  page: number;
  pageSize: number;
  sortDir:string;
  sortBy: string;
  searchQuery:string;
  districtId:Array<number>;
  categoryId:Array<number>;
  serviceId:Array<number>;
  customsFields:Array<FieldSearchVM>;
  customField:FieldSearchVM;
  constructor(){
    this.pageSize=25;
    this.page=1;
    this.districtId=[];
    this.categoryId=[];
    this.serviceId=[];
    this.customsFields = new Array<FieldSearchVM>();
    this.customField = new FieldSearchVM();
  }
  
}
export class FieldSearchVM{
  customFieldId: number;
  userValue:string;
}