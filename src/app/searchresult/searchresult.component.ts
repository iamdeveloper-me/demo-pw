import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MasterserviceService } from 'app/ngservices/masterservice.service';
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
  objSearchlistvm: SearchListingVM;
  constructor(public _route:Router, private _activeRoute: ActivatedRoute, private _masterservice: MasterserviceService) {  
    this.objSearchFilter=new SearchFilterVm();
    this.objSearchlistvm = new SearchListingVM();
    if(this._activeRoute!=undefined){
    //  this.objSearchFilter=JSON.parse(this._activeRoute.snapshot.params['']);   
    }
    this.getLocations();
    this.getCategories();
    this.getFilters();
    this.objSearchlistvm.categoryId.push=this.objSearchFilter.categoryId[0];
    
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
          element.isselect=false;
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
      console.log(this.filters);
    })
  }
  getSearchFilterResult(customFieldId,optionId,paramType){
    switch(paramType){
      case '':
      break;
    }
    this._masterservice.getFilterResult(this.objSearchlistvm).subscribe(res =>{
      console.log(res);
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
  customsFields: FieldSearchVM;
  constructor(){
    this.pageSize=10;
    this.page=0;
    this.districtId=[];
    this.categoryId=[];
    this.serviceId=[];
    this.customsFields = new FieldSearchVM();
  }
  addRemoveDistId(){

  }
  addRemoveCategoryId(){

  }
  addRemoveServiceId(){

  }
  
}
export class FieldSearchVM{
  customFieldId: number;
  userValue:string;
}