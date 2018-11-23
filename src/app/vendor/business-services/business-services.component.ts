import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { apiPath } from '../../shareApi/apiPath';
import { BusinessCategoriesVM } from './BusinessServiceVm';
import { forEach } from '@angular/router/src/utils/collection';
import { BusinessService } from 'app/ngservices/business.service';


@Component({
  selector: 'app-business-services',
  templateUrl: './business-services.component.html',
  styleUrls: ['./business-services.component.scss'],
  providers: [ BusinessService]

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
  header:Headers;
  constructor(public http: Http, public bs_service: BusinessService){ 
    this.objVenderServiceVm = new VendorServiceVM();
    this.objVenderServiceVm.categoryId
    this.categories = new Array<CategoryVm>();
    this.bc=new Array<BusinessCategoriesVM>();
    this.categoryWiseService = new BusinessCategoriesVM();
    
  }  
  ngOnInit() {  
            
    $.getScript('./assets/js/vendorsidebar.js');

    setTimeout(function(){ $(".servicecontainer div:first").removeClass("activehide"); $(".servicecontainer div:first").addClass("activedisplay"); $(".servicecontainer div:first span").click(); }, 1000);
      $(document).on('click', '.nextbtn', function(){
        var active = $(this).siblings('.servicecontainer').find('.activedisplay');
        if (active.next('div').hasClass('activehide')) {
          active.find('input').prop("checked", false);
          active.removeClass('activedisplay');
          active.addClass('activehide');
        // active.next('div').find('input').prop("checked", true);
          active.next('div').removeClass('activehide');
          active.next('div').addClass('activedisplay');
          active.next('div').find("span").click();
        }
      });
    $(document).on('click', '.prebtn', function(){
      var active = $(this).siblings('.servicecontainer').find('.activedisplay');
      if (active.prev('div').hasClass('activehide')) {
        active.find('input').prop("checked", false);
        active.removeClass('activedisplay');
        active.addClass('activehide');
    //    active.prev('div').find('input').prop("checked", true);
        active.prev('div').removeClass('activehide');
        active.prev('div').addClass('activedisplay');
        active.prev('div').find("span").click();
        }
    });
              let headers = new Headers();
              var authToken = localStorage.getItem('userToken');
              var categoryid = localStorage.getItem('categoryid');
              headers.append('Accept', 'application/json')
              headers.append('Content-Type', 'application/json');
              headers.append("Authorization",'Bearer '+authToken);
              this.header = headers;
              //jo data post kar rhe h 
              this.http.get(this.api+'api/Supplier/businessservices',{headers:headers}).subscribe(data =>{
                this.bc=data.json();
                });
              this.http.get(this.api+'api/Categories/categorieswithservices',{headers:headers}).subscribe(data =>{
                this.categoryserveice = data.json() as string[];
              },error => {console.log(error)});

              console.log(this.objVenderServiceVm);
      }
      getServicesByCategory(catId){
        this.objVenderServiceVm = new VendorServiceVM();
        this.objVenderServiceVm.categoryId=catId;
        this.resetCustomFileds();  
        let abc= this.categoryserveice.filter(m=>m.categoryId==catId)[0];
        this.services=abc.services;
      }
      resetCustomFileds(){
        this.customFields=[];
        this.customFieldSelectOptions=[];
      }
      getCustomFieldBySreviceId(id){
        this.resetCustomFileds();
       this.objVenderServiceVm.servicesId = id ;
      // this.SaveIntoDb();
       let servicecustomfield= this.services.filter(s=>s.servicesId==this.objVenderServiceVm.servicesId)[0];
       this.customFields = servicecustomfield.customFields;
       for (let i = 0; i < this.customFields.length; i++) {
         this.customFields[i].prop('isEnable',false);
       }
       
      }
      getSelectOptions(customFieldId){
          this.customFieldSelectOptions = customFieldId
      }
      seveCustomField(cfo) {
        let smv=new ServiceFieldValuesVM();
        smv.FieldValue= cfo.key;
        smv.customFieldId = cfo.customFieldId;

       if(this.objVenderServiceVm.serviceFields.length>0){
         let isCustomFieldExist= this.objVenderServiceVm.serviceFields.filter(cfid=> cfid.customFieldId== cfo.customFieldId)[0];
        if(isCustomFieldExist){
          this.objVenderServiceVm.serviceFields.splice(this.objVenderServiceVm.serviceFields.indexOf(isCustomFieldExist),1);
          this.objVenderServiceVm.serviceFields.push(smv) ;
       }else{
         this.objVenderServiceVm.serviceFields.push(smv)}
       }else{
        this.objVenderServiceVm.serviceFields.push(smv)
       }
       this.bs_service.SaveIntoDb(this.objVenderServiceVm);
      }
      SaveIntoDb(){
        this.bs_service.SaveIntoDb(this.objVenderServiceVm).subscribe((response)=>{
          console.log(response);
          let existingServices= localStorage.getItem(this.bs_service.savedBusinessService);
          if(existingServices){
            let objExistingServices= JSON.parse(existingServices);
            this.objVenderServiceVm.serviceFields.forEach(element => {
              objExistingServices.serviceFields.push(element);
            });
            localStorage.setItem(this.bs_service.savedBusinessService,JSON.stringify(objExistingServices));
            this.objVenderServiceVm.serviceFields = objExistingServices;
          }else{
            localStorage.setItem(this.bs_service.savedBusinessService,JSON.stringify(this.objVenderServiceVm));
          }
        console.log(this.objVenderServiceVm);
      },error=>{
        console.log(error);
      });
      }
}
export class VendorServiceVM{
  public servicesId	: number;
  public serviceName: string;
  public categoryId	: number;
  public serviceFields: Array<ServiceFieldValuesVM>;
  constructor(){
    this.serviceFields = new Array<ServiceFieldValuesVM>();
  }
}
export class ServiceFieldValuesVM{
  public customFieldId:number;
  public FieldValue:string;
  public displayText:string;
}
export class CategoryVm{
  public categoryId:number;
  public categoryName: string;
  public serviceName: string;
  public servicesId: number;
}


