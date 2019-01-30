
import { Pipe, PipeTransform , OnInit, Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import {} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MasterserviceService } from 'app/ngservices/masterservice.service';
import {RatingModule, Rating} from 'ngx-rating';
import { CustompipePipe } from 'app/custompipe.pipe';
import { CategoryPipePipe } from 'app/category-pipe.pipe';
import { apiService } from 'app/shared/service/api.service';
import { filterParam} from 'app/vendorcard/vendorcard.component';
import { SlidesOutputData } from 'ngx-owl-carousel-o';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import{ratingStars} from '../ngservices/ratingstars';
import { setTimeout } from 'timers';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { forEach } from '@angular/router/src/utils/collection';
@Pipe({ name: 'defaultImage' })
export class PP implements PipeTransform {
  transform(value: string, fallback: string, forceHttps: boolean = false ): string {
    let image = "";
    if (value) { image = value; } else { image = fallback; }
    if (forceHttps) { if (image.indexOf("https") == -1) {  image = image.replace("http", "https"); } }
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
  customOptions: any = { loop: false, margin: 20, mouseDrag: true, touchDrag: true, pullDrag: true, dots: true,
    nav: false, autoplay: true, navSpeed: 700, responsive: { 0: { items: 1 }, 400: { items: 2 }, 740: { items: 3 }, 
    940: { items: 4 } },
  }
  activeSlides: SlidesOutputData;
  slidesStore: any[];
  collection = [];
  objSearchFilter: filterParam
  locations:any;
  categories:any;
  filters: any;
  SelectedLocation:any;
  objAppliedFilters:AppliedFilters;
  @ViewChild('servicefilters') servicefilters:SafeHtml;
  loading=false;
  showALlCategories:boolean;
  showAllLocation:boolean=false;
  selectedLocationsCount = 0;
  objSearchlistvm: SearchListingVM;
  objSearchResultItems:any;
  locationFilterParam:string='';
  categoryFilterParam:string='';
  pageNumber=0;
  priceRange: any;
  disableLoadingButton=true;
  blankImg='../../assets/img/noImg.png';
  basicPlan:number;
  userRatingArray:any;
  dealsAndOfferArray:any;
  faaturedListingArray:any;
  SelectedCategory:any;
  ratingmodel: ratingStars
  constructor(public _route:Router, public _activeRoute: ActivatedRoute, 
    private _masterservice: MasterserviceService, private api: apiService, private domsanitizar: DomSanitizer) {
      this.objAppliedFilters = new AppliedFilters();
      this.objSearchFilter=new filterParam();
      this.ratingmodel = new ratingStars();
      this.generateStaticArray();
      this.basicPlan = parseInt(localStorage.getItem('basic-plan'))
      // this.objSearchFilter =JSON.parse(sessionStorage.getItem('filterParam'));
      this._activeRoute.params.subscribe(res=>{
      this.objSearchFilter =JSON.parse(sessionStorage.getItem('filterParam'));
      this.objSearchlistvm = new SearchListingVM();
      if(this.objSearchFilter.locationId!=0){
      this.objSearchlistvm.districts.push(this.objSearchFilter.locationId);}
    })
    this.objSearchFilter=new filterParam();
    if(this._activeRoute!=undefined){
      this.objSearchFilter =JSON.parse(sessionStorage.getItem('filterParam'));
    }
    //debugger;
    this.getLocations();
    this.getCategories();
    if(this._activeRoute!=undefined){ this.objSearchFilter =JSON.parse(sessionStorage.getItem('filterParam')); }
    this.getFilters();
    this.selectCategory('id',this.objSearchFilter.catId);
       this._activeRoute.params.subscribe(params => {
     if(this.categories){
      this.objSearchFilter =JSON.parse(sessionStorage.getItem('filterParam'));
      this.selectCategory('id',this.objSearchFilter.catId);
      this.showHideCategories(this.categories.indexOf(this._activeRoute.snapshot.params['id']));
     }
     this.getSearchFilterResult();
     });
  }
  getData(data: SlidesOutputData) {
    this.activeSlides = data;
  }
  getCategoryName(i):string{
    //debugger;
    if(this.SelectedCategory){
      return this.SelectedCategory.categoryName;
    }else{
      return i.vendorCategories.filter(c=>c.isPrimary===true)[0].categoryName;
    }
  }
  ngOnInit() {   
 
  $.getScript('./assets/js/searchresult.js'); 
  $.getScript('./assets/register/js/jquery-2.2.4.min.js');
  $.getScript('./assets/register/js/bootstrap.min.js');
  $.getScript('./assets/jss/core/popper.min.js');
  $.getScript('./assets/jss/core/bootstrap-material-design.min.js');
//  $.getScript('./assets/jss/plugins/perfect-scrollbar.jquery.min.js');
  $.getScript('./assets/jss/plugins/chartist.min.js');
  $.getScript('./assets/jss/plugins/bootstrap-notify.js');
  $(".slider_use_anather_compo").hide();
  }
  goToPortfolioDetail(vendor){
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
         // this.locations=this.locations.filter(l=>l.districtId==this.objSearchFilter.locationId);
         // this.SelectedLocation = this.locations[0];
          this.locations.forEach(element => {
            if(element.districtId== this.objSearchFilter.locationId){
              element.isSelect=true;
              this.SelectedLocation = element;
            }else{
          element.isSelect=false;}
          });
        }else{
          this.showAllLocation = true;
        }
    });
  }
  getCategories(){
     this._masterservice.getAllCategories().subscribe(res=>{
      this.categories=res;
      console.log(JSON.stringify(this.categories));
      if(this.objSearchFilter.catId>0){
        this.categories.filter(c=>c.categoryId==this.objSearchFilter.catId)[0].isSelect=true;
        this.SelectedCategory = this.categories.filter(c=>c.isSelect==true)[0];
        this.showALlCategories=false;
      }
      this.collection=[];
      this.paginate(this.objSearchFilter.pageSize);  
         this.showALlCategories=false;
    }) 
  }
  getFilters(){
    let filter_paramArray=[];
    filter_paramArray.push(this.objSearchFilter.catId);
    this._masterservice.getFilters(filter_paramArray).subscribe(res=>{
      this.filters=res;
      console.log(JSON.stringify(this.filters));
      this.filters.services.forEach(element => { element.isSelect=false; });
      this.filters.filters.forEach(element => { element.isSelect=false;});
      this.priceRange = this.filters.filters[0].customFieldOptionList;
      this.priceRange.forEach(element => {
        element.isSelect = false;
      });
    },error=>{
      console.log(error);
    })
  }
  getSearchFilterResult(){
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
    this.locations.forEach(element => {
      if(element.isSelect){
        this.objSearchlistvm.districts = this.locations.filter(l=>l.isSelect==true);
      }else{
        element.isSelect=false;
      }
    });
  }
  }
  // clearFilters(){
  //   this.locations.forEach(element => { element.isSelect=false; });
  //   this.objSearchlistvm.districts = [];
  //   this.categories.forEach(element => { element.isSelect=false; });
  //   this.objSearchlistvm.categoryId = [];
  // }
  addToCollection(){
    this.objSearchResultItems.items.forEach(element => {
      this.collection.push(element);
      this.slidesStore = this.collection
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
  setFilterOptions(filterType,FilterValue){
    this.collection=[];
    this.objSearchlistvm.page=0;
    switch(filterType){
      case 1: // Category
      this.objSearchlistvm= new SearchListingVM();
      this.deselectAllCategories();
     this.checkUncheckFilter(FilterValue);
     if(FilterValue.isSelect){
      this.SelectedCategory = FilterValue;
      this.showALlCategories = false;}else{
        this.showALlCategories = true;
        this.SelectedCategory=null;
      }
      this.getFilters();
       break;
      case 2: // Service
       break;
      case 3: // location
      this.checkUncheckFilter(FilterValue);
     debugger
     if(FilterValue.isSelect){
       this.SelectedLocation = FilterValue;
       this.showAllLocation = false;
     }else{
       this.SelectedLocation = null;
       this.showAllLocation = true;
     }
      this.objSearchlistvm.districts=[];
      break;
      case 4: // custom Field Id
      this.objSearchlistvm.customsFields=[];
      this.checkUncheckFilter(FilterValue);break;
      case 5: // Custom Field Option
      debugger;
      this.checkUncheckFilter(FilterValue); break;
      case 6: // Rating
      debugger;
      this.checkUncheckFilter(FilterValue); break;
      case 7: // Pricing
      this.checkUncheckFilter(FilterValue); break;
      case 8: // Feature Listing
      this.checkUncheckFilter(FilterValue); break;
      case 9: // Deals And Offer
      this.checkUncheckFilter(FilterValue); break;
    }
    if(filterType!==4){ this.paginate(this.objSearchFilter.page)};
  }
  checkUncheckFilter(filterValie){
    if(filterValie.isSelect){
      filterValie.isSelect=false;
    }else{
      filterValie.isSelect=true;
    }
  }
   paginate (pageSize) {
    this.loading=true; 
    this.objSearchlistvm.categoryId=[];
    if(this.categories){
      if(this.SelectedCategory){
    this.objSearchlistvm.categoryId.push(this.SelectedCategory.categoryId);}
    this.SelectedLocation = this.locations.filter(l=>l.isSelect===true)[0];
    if(this.SelectedLocation){
      this.objSearchlistvm.districts=[];
    this.objSearchlistvm.districts.push(this.SelectedLocation.districtId);}
    let selectedServices = this.filters.services.filter(s=>s.isSelect==true);
    if(selectedServices.length>0){
      this.objSearchlistvm.serviceId=[];
    selectedServices.forEach(element => {
      this.objSearchlistvm.serviceId.push(element.servicesId);
      this.objAppliedFilters.services= '<span class="badge">'+element.serviceName+'</span>';
    });}
    this.objSearchlistvm.customsFields=[];
    if(this.filters.filters[0].customFieldOptionList){
      this.filters.filters.forEach(el => {
        el.customFieldOptionList.forEach(element => {
          if(element.isSelect){
            this.objSearchlistvm.customsFields.push({
              'customFieldId':element.customFieldId,
              'userValue':element.key
            });
          }
        });        
      });
  }

  // Set Featured List 
let SelectedFeaturedList= this.faaturedListingArray.filter(fl=>fl.isSelect==true);
if(SelectedFeaturedList && SelectedFeaturedList.length>0){
  this.objSearchlistvm.listing='';
  SelectedFeaturedList.forEach(element => {
    this.objSearchlistvm.listing += element.key+','; 
  });
   }
  // Set Price Range
  let selectedprices = this.priceRange.filter(p=>p.isSelect==true);
  if(selectedprices && selectedprices.length>0){
    this.objSearchlistvm.price='';
    selectedprices.forEach(element => {
      this.objSearchlistvm.price+=element.key+',';
    });
  }
  // Set Rating values
  let userRating = this.userRatingArray.filter(ur=>ur.isSelect==true);
  if(userRating){
    this.objSearchlistvm.rating='';
    userRating.forEach(element => {
      this.objSearchlistvm.rating+=element.key+',';
    });
  }
  // Set Deals And Offers
  let SelectedDealsOffers = this.dealsAndOfferArray.filter(dd=>dd.isSelect==true);
  if(SelectedDealsOffers && SelectedDealsOffers.length>0){
    this.objSearchlistvm.deals =SelectedDealsOffers[0].key;
  }
    this._masterservice.getFilterResult(this.objSearchlistvm).subscribe(res =>{
    this.objSearchResultItems = res;
    this.setBlankImg();
    this.addToCollection();
    this.loading=false; 
  },error=>{
    this.loading = false;
  });
}
 }
 @HostListener("window:scroll", [])
 scrollToBottom(){
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
   // this.objSearchlistvm.page+=1;
  //  this.paginate(this.objSearchFilter.pageSize); 
  }
 }
 showHideCategories(ind){
  this.deselectAllCategories();
  if(ind!=-1){    
    if(this.categories.length>0){
  this.selectCategory('index',ind);
  } else{
   
  }
  }else{
    this.SelectedCategory=null;
    this.objSearchFilter.catId=0;
    this.getFilters();
  }
  this.paginate(this.objSearchFilter.pageSize);
}
deselectAllCategories(){
  if(this.categories){
  this.categories.forEach(element => {
    element.isSelect=false;
  });
}
  this.showALlCategories=true;
  this.objSearchlistvm.page=0;
  this.collection=[];
}

selectCategory(paramType,Param){
  this.deselectAllCategories();
  if(paramType=='index'){
    if(this.categories){
      this.categories[Param].isSelect=true;
      this.SelectedCategory= this.categories[Param];
      this.objSearchFilter.catId = this.SelectedCategory.categoryId;
    }
   }else if(paramType=='id'){
      if(this.categories){
        this.categories.filter(c=>c.categoryId==Param)[0].isSelect=true;
        this.SelectedCategory= this.categories.filter(c=>c.isSelect=true)[0];
        this.objSearchFilter.catId = this.SelectedCategory.categoryId;
      }
  }
  sessionStorage.setItem('filterParam', JSON.stringify(this.objSearchFilter));
  this.showALlCategories = false;
}
generateStaticArray(){
  this.userRatingArray=[
    {'key':'Any',isSelect:false},
    {'key':'2.0+',isSelect:false},
    {'key':'3.0+',isSelect:false},
    {'key':'4.0+',isSelect:false}
  ];
  this.dealsAndOfferArray = [
    {'key':'Yes',isSelect:false},
    {'key':'No',isSelect:false}
  ];
  this.faaturedListingArray=[
    {'key':'Priority Listing',isSelect:false},
    {'key':'Top Listing',isSelect:false},
  ]

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
  districts:Array<number>;
  categoryId:Array<number>;
  serviceId:Array<number>;
  rating: string;
  price:string;
  deals:string;
  listing:string;
  customsFields:Array<FieldSearchVM>;
  customField:FieldSearchVM;
  constructor(){
    this.pageSize=25;
    this.page=0;
    this.districts=[];
    this.categoryId=[];
    this.serviceId=[];
    this.sortDir='asc';
    this.price='';
    this.rating='';
    this.deals='';
    this.listing='';
    this.customsFields = new Array<FieldSearchVM>();
    this.customField = new FieldSearchVM();
  }
  
}
export class FieldSearchVM{
  customFieldId: number;
  userValue:string;
}
export class AppliedFilters{
  services:SafeHtml;
  pricerange:string;
  featuredListing:string;
  customerRating:string;
  deals:string;
  filters:string;
}
