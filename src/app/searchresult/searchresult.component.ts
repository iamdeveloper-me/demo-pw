import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MasterserviceService } from 'app/ngservices/masterservice.service';
import {RatingModule} from 'ngx-rating';
@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss'],
})
export class SearchresultComponent implements OnInit {
  collection = [];
  objSearchFilter: SearchFilterVm
  locations:any;
  categories:any;
  filters: any;
  count:number = 3
  objSearchlistvm: SearchListingVM;
  objSearchResultItems:any;
  
  constructor(public _route:Router, private _activeRoute: ActivatedRoute, private _masterservice: MasterserviceService) {  
    this.objSearchFilter=new SearchFilterVm();
    this.objSearchlistvm = new SearchListingVM();
    if(this._activeRoute!=undefined){
    //  this.objSearchFilter=JSON.parse(this._activeRoute.snapshot.params['']);   
    }
    this.getLocations();
    this.getCategories();
    this.getFilters();
    this.objSearchlistvm.categoryId.push(this.objSearchFilter.categoryId);
    this._masterservice.getFilterResult(this.objSearchlistvm).subscribe(res =>{
      this.objSearchResultItems = res;
      console.log(JSON.stringify(res));
    });
  }
 ngOnInit() {   
  //$.getScript('./assets/js/owljsor.js');
  $.getScript('./assets/js/searchresult.js'); 
  $.getScript('./assets/register/js/jquery-2.2.4.min.js');
  $.getScript('./assets/register/js/bootstrap.min.js');
  //$.getScript('./assets/register/js/jquery.bootstrap.js');

  $.getScript('./assets/jss/core/popper.min.js');
  $.getScript('./assets/jss/core/bootstrap-material-design.min.js');;
  $.getScript('./assets/jss/plugins/perfect-scrollbar.jquery.min.js')
  $.getScript('./assets/jss/plugins/chartist.min.js');
  $.getScript('./assets/jss/plugins/bootstrap-notify.js');
  $(".slider_use_anather_compo").hide();
  }
  goToPortfolioDetail(){
    this._route.navigate(['home/detailprofile']);
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
      console.log(this.locations);
    });
      
  }
  getCategories(){
     this._masterservice.getAllCategories().subscribe(res=>{
      this.categories=res;
      if(this.objSearchFilter.categoryId>0){
        this.categories=this.categories.filter(c=>c.categoryId==this.objSearchFilter.categoryId);
        this.categories.forEach(element => {
          if(element.categoryId==this.objSearchFilter.categoryId){
          element.isSelect=true;}else{element.isSelect=false;}
        });
       console.log(this.categories);
      }
    })
    
  }
  getFilters(){
    let filter_paramArray=[];
    filter_paramArray.push(this.objSearchFilter.categoryId);
    this._masterservice.getFilters(filter_paramArray).subscribe(res=>{
      this.filters=res;
      this.filters.services.forEach(element => {
        element.isSelect=false;
      });
      console.log(this.filters);
    })
  }
  getSearchFilterResult(){
    this.objSearchlistvm = new SearchListingVM();
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
    this.categories.forEach(element => {
      if(element.isSelect){
        this.objSearchlistvm.categoryId.push(element.categoryId);
      }
    });
    this.locations.forEach(element => {
      if(element.isSelect){
        this.objSearchlistvm.districtId.push(element.districtId)
      }
    });
    this._masterservice.getFilterResult(this.objSearchlistvm).subscribe(res =>{
      this.objSearchResultItems = res;
      console.log(JSON.stringify(res));
    })
  }
  
   // Variable Declaration
   page2 = 4;
}
export class SearchFilterVm{
  categoryId:number=1;
  locationId:number=0;
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