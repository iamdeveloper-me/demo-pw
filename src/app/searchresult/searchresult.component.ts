import { OnInit, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MasterserviceService } from 'app/ngservices/masterservice.service';
import {RatingModule} from 'ngx-rating';
import { CustompipePipe } from 'app/custompipe.pipe';
import { CategoryPipePipe } from 'app/category-pipe.pipe';
import { apiService } from 'app/shared/service/api.service';
import { filterParam } from 'app/vendorcard/vendorcard.component';


@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss'],
  providers: [CustompipePipe, CategoryPipePipe]
})
export class SearchresultComponent implements OnInit {
  collection = [];
  objSearchFilter: filterParam
  locations:any;
  categories:any;
  filters: any;
  count:number = 3
  objSearchlistvm: SearchListingVM;
  objSearchResultItems:any;
  locationFilterParam:string='';
  categoryFilterParam:string='';
  pageNumber=0;
//  pageSize:number=3;
  disableLoadingButton=true;
  blankImg='../../assets/img/noImg.png';

  constructor(public _route:Router, private _activeRoute: ActivatedRoute, private _masterservice: MasterserviceService, private api: apiService) {  

    this.objSearchFilter=new filterParam();
    this.objSearchlistvm = new SearchListingVM();
    if(this._activeRoute!=undefined){

      this.objSearchFilter =JSON.parse(sessionStorage.getItem('filterParam'));
      console.log(this.objSearchFilter);
      // let query=this._activeRoute.snapshot.params['id'].split('/');
      // this.objSearchFilter.categoryId = this._activeRoute.snapshot.params['id'].split('/')[0];
      // this.objSearchFilter.searchInDreamLocation=this._activeRoute.snapshot.params['id'].split('/')[3];
      // this.objSearchFilter.searchInFeaturedLocation  = this._activeRoute.snapshot.params['id'].split('/')[2];
      this.objSearchlistvm.categoryId.push(this.objSearchFilter.catId);
      this.objSearchlistvm.districtId.push(this.objSearchFilter.locationId);
    }
    this.getLocations();
    this.getCategories();
    this.getFilters();
    this.objSearchlistvm.categoryId.push(this.objSearchFilter.catId);
    this._masterservice.getFilterResult(this.objSearchlistvm).subscribe(res =>{
      this.objSearchResultItems = res;
      this.getSearchFilterResult();
      console.log(JSON.stringify(this.objSearchResultItems));
    },error=>{
      console.log(JSON.stringify(error));
    });
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
    let url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PerfectWedding/vendordetails/';
    this.api.getData(url+'?='+vendor.vendorUniqueId).subscribe(res=>{
      sessionStorage.setItem('vendorDetails',JSON.stringify(res));
    this._route.navigate(['home/detailprofile']);
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
      this.filters.services.forEach(element => {
        element.isSelect=false;
      });
  
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
      }
    });
  }
    this._masterservice.getFilterResult(this.objSearchlistvm).subscribe(res =>{
      this.objSearchResultItems = res;
      this.paginate(this.objSearchFilter.pageSize);
    })
  }
  filterLocations(ev){
    let filterResult=this.locations.filter(n=>n.name.startwith(ev.value));
    this.locations=filterResult;
  }
  findVendorRating(reviews,rating){
    return reviews*rating
  }
   paginate (pageSize) {
     this.disableLoadingButton=false;
   let c=this.objSearchResultItems.items.slice(this.pageNumber * pageSize, (this.pageNumber + 1) * pageSize);
   if(c.length<this.objSearchFilter.pageSize){
    this.disableLoadingButton=true;
   }
    c.forEach(element => {
      if(element.profileImage==null){
        element.profileImage=this.blankImg;
      }
    this.collection.push(element); 
   });
   this.pageNumber+=1;
  }
  
   // Variable Declaration
   page2 = 4;
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
    this.pageSize=10;
    this.page=0;
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