import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { apiPath } from '../../shareApi/apiPath';
import { BusinessCategoriesVM } from './BusinessServiceVm';


@Component({
  selector: 'app-business-services',
  templateUrl: './business-services.component.html',
  styleUrls: ['./business-services.component.scss'],

})
export class BusinessServicesComponent implements OnInit {
  private api = apiPath.url; 
  selected_category;
  categoryserveice= [];
  customFields=new Array<any>();
  customFieldSelectOptions=Array<any>();
  bc: Array<BusinessCategoriesVM>;
  categories: Array<CategoryVm>;
  services: any;
  categoryWiseService:BusinessCategoriesVM;
  service_provide_dailog = false;
  objVenderServiceVm: VendorServiceVM;
  service_provide_dailog_2 = false;
  service_provide_dailog_3 = false;
  service_provide_dailog_4 = false;
  radioSelected:any;
  constructor(public http: Http){ 
    this.objVenderServiceVm = new VendorServiceVM();
    this.objVenderServiceVm.categoryId
    this.categories = new Array<CategoryVm>();
    this.bc=new Array<BusinessCategoriesVM>();
    this.categoryWiseService = new BusinessCategoriesVM();
    
  }  
  ngOnInit() {  
            
              $.getScript('./assets/js/vendorsidebar.js');
              let headers = new Headers();
              var authToken = localStorage.getItem('userToken');
              var categoryid = localStorage.getItem('categoryid');
              headers.append('Accept', 'application/json')
              headers.append('Content-Type', 'application/json');
              headers.append("Authorization",'Bearer '+authToken);
              //jo data post kar rhe h 
              this.http.get(this.api+'api/Supplier/businessservices',{headers:headers}).subscribe(data =>{
               // this.categories = data.json();
                this.bc=data.json();
                });
              this.http.get(this.api+'api/Categories/categorieswithservices',{headers:headers}).subscribe(data =>{
                this.categoryserveice = data.json() as string[];
              },error => {console.log(error)});
      }
      getServicesByCategory(catId){

      let abc= this.categoryserveice.filter(m=>m.categoryId==catId)[0];
      this.services=abc.services;
      
      }
      radioFun(){
        alert(this.objVenderServiceVm.servicesId);
      }
      getCustomFieldBySreviceId(id){
       this.objVenderServiceVm.servicesId = id ;
       let servicecustomfield= this.services.filter(s=>s.servicesId==this.objVenderServiceVm.servicesId)[0];
       this.customFields = servicecustomfield.customFields;
       console.log(this.customFields);
      }
      getSelectOptions(customFieldId){
         // this.customFieldSelectOptions= this.customFields.filter(f=>f.fieldId==customFieldId);
          this.customFieldSelectOptions = customFieldId
          console.log(customFieldId);
      }
}
export class VendorServiceVM{
  public servicesId	: number;
  public serviceName: string;
  public categoryId	: number;
  public serviceFields: Array<ServiceFieldValuesVM>;
  public serviceField: ServiceFieldValuesVM;
  constructor(){
    this.serviceField = new ServiceFieldValuesVM();
    this.serviceFields = new Array<ServiceFieldValuesVM>();
  }
}
export class ServiceFieldValuesVM{
  public customFieldId:number;
  public userValue:string;
}
export class CategoryVm{
  public categoryId:number;
  public categoryName: string;
  public serviceName: string;
  public servicesId: number;
}


