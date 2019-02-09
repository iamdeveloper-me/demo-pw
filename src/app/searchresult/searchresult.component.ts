
import { Pipe, PipeTransform , OnInit, Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import {} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
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
import { ToastrService } from 'ngx-toastr';
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
  isTostPopulated=false;
  userRatingArray:any;
  dealsAndOfferArray:any;
  featuredListingArray:any;
  SelectedCategory:any;
  ratingmodel: ratingStars;
  Honeymoon_detail:any = {};
    constructor(public _route:Router, public _activeRoute: ActivatedRoute, 
    private _masterservice: MasterserviceService, private api: apiService,
    public toastr: ToastrService) {
      
      this._activeRoute.params.subscribe((params) => {
        this.initializeResult();   
     });
     //honeymoon page code
     this.Honeymoon_detail= JSON.parse(sessionStorage.getItem('Honeymoon_detail'));

     console.log(this.Honeymoon_detail) 
      
  }
  initializeResult(){
    this.generateStaticArray();
    this.objSearchFilter=new filterParam();
    this.objSearchFilter =JSON.parse(sessionStorage.getItem('filterParam'));
    this.objSearchlistvm = new SearchListingVM();
    if(this.objSearchFilter.locationId != 0){
    this.objSearchlistvm.districts.push(this.objSearchFilter.locationId);}
    this.getLocations();
    this.getCategories();
    this.ratingmodel = new ratingStars();
    console.log(JSON.stringify(this.categories));
    this.basicPlan = parseInt(localStorage.getItem('basic-plan'))
    this.getFilters();
 //   this.getSearchFilterResult();
 console.log(JSON.stringify(this.categories));
 if(this.categories[0].services[0].customFields[0].customFieldOptionList.length == 1){
  this.categories[0].services[0].customFields[0].customFieldOptionList.forEach(element => {element['isSelect'] = true});
 }else{
  this.categories[0].services[0].customFields[0].customFieldOptionList.forEach(element => {element['isSelect'] = false});
 }


   
 

  }
  getData(data: SlidesOutputData) {
    this.activeSlides = data;
  }
  getCategoryName(i):string{
    if(this.SelectedCategory){
      return this.SelectedCategory.categoryName;
    }else{
      return i.vendorCategories[0].categories.categoryName;
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
  
    this.categories = JSON.parse(localStorage.getItem('catlist'));
    console.log(this.categories);
    if(this.objSearchFilter.catId>0){
      this.categories.filter(c=>c.categoryId==this.objSearchFilter.catId)[0].isSelect=true;
      this.SelectedCategory = this.categories.filter(c=>c.isSelect==true)[0];
      this.showALlCategories=false;
    }
    this.collection=[];
    this.paginate(this.objSearchFilter.pageSize);  
    this.showALlCategories=false;
  }
  clearFilters(){
    
  }
  getFilters(){
    let filter_paramArray=[];
   // this.selectCategory('id',this.objSearchFilter.catId);
    if(this.SelectedCategory!=null){
    filter_paramArray.push(this.SelectedCategory.categoryId);}
    this._masterservice.getFilters(filter_paramArray).subscribe(res=>{
      this.filters=res;
      console.log(this.filters)
      if(this.filters.services!=null){
        if(this.filters.services.length == 1){
          this.filters.services.forEach(element => { element.isSelect=true; });
        }else{
          this.filters.services.forEach(element => { element.isSelect=false; });
        }
      this.filters.filters.forEach(element => { element.isSelect=false;});
     
      this.priceRange = this.filters.filters[0].customFieldOptionList;
      this.priceRange.forEach(element => {
        element.isSelect = false;
      });
      
    }
    },error=>{
      console.log(error);
    })

  }
  getSearchFilterResult(){
    if(this.filters && this.filters.filters!=null){
    if(this.filters.filters.services!=null){
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
      this.checkUncheckFilter(FilterValue);
     if(FilterValue.isSelect){
      this.SelectedCategory = FilterValue;
      this.objSearchFilter.catId = this.SelectedCategory.categoryId;
      this.getFilters();
      this.showALlCategories = false;}else{
        this.showALlCategories = true;
        this.SelectedCategory=null;
      }
       break;
      case 2: // Service
       break;
      case 3: // location
      this.checkUncheckFilter(FilterValue);
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
     // this.objSearchlistvm.customsFields=[];
      this.checkUncheckFilter(FilterValue);break;
      case 5: // Custom Field Option
      this.objSearchlistvm.customsFields=[];
      break;
      case 6: // Rating
      
      this.checkUncheckFilter(FilterValue); break;
      case 7: // Pricing
      this.checkUncheckFilter(FilterValue); break;
      case 8: // Feature Listing
      this.checkUncheckFilter(FilterValue); break;
      case 9: // Deals And Offer
      this.checkUncheckFilter(FilterValue); break;
    }
    if(filterType!==4){ 
      this.isTostPopulated = false;
      this.paginate(this.objSearchFilter.page)
    };
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
    if(this.SelectedLocation){
      this.objSearchlistvm.districts=[];
    this.objSearchlistvm.districts.push(this.SelectedLocation.districtId);}
    if(this.filters!=null && this.filters.filters!=null){
    let selectedServices = this.filters.services.filter(s=>s.isSelect==true);
    if(selectedServices.length>0){
      this.objSearchlistvm.serviceId=[];
    selectedServices.forEach(element => {
      this.objSearchlistvm.serviceId.push(element.servicesId);
      
    });}
    if(this.filters.filters){
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
}

  // Set Featured List 
  
let SelectedFeaturedList= this.featuredListingArray.filter(fl=>fl.isSelect==true);
if(SelectedFeaturedList && SelectedFeaturedList.length>0){
  this.objSearchlistvm.listing='';
  SelectedFeaturedList.forEach(element => {
    this.objSearchlistvm.listing += element.key+','; 
  });
   }
  // Set Price Range
 if(this.priceRange!=undefined){
  this.objSearchlistvm.price='';
  let selectedprices = this.priceRange.filter(p=>p.isSelect==true);
  if(selectedprices && selectedprices.length>0){
    this.objSearchlistvm.price='';
    selectedprices.forEach(element => {
      this.objSearchlistvm.price+=element.key+',';
    });
    this.objSearchlistvm.price= this.objSearchlistvm.price.substring(0,this.objSearchlistvm.price.length-1);
  }
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
    this.objSearchlistvm.deals='';
    SelectedDealsOffers.forEach(element => {
      this.objSearchlistvm.deals +=element.key+',';  
    });
    
  }
  console.log(this.objSearchlistvm);
    this._masterservice.getFilterResult(this.objSearchlistvm).subscribe(res =>{
    this.objSearchResultItems = res;
    console.log(this.objSearchResultItems);
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
   if ((window.innerHeight + window.scrollY) == document.body.offsetHeight) {
    this.objSearchlistvm.page+=1;
    this.paginate(this.objSearchFilter.pageSize); }
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
  this.featuredListingArray=[
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
// export class AppliedFilters{
//   services:SafeHtml;
//   pricerange:string;
//   featuredListing:string;
//   customerRating:string;
//   deals:string;
//   filters:string;
// }
