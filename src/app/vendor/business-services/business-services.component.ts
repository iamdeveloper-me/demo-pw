import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { apiPath } from '../../shareApi/apiPath';
import { BusinessCategoriesVM } from './BusinessServiceVm';
import { forEach } from '@angular/router/src/utils/collection';
import { BusinessService } from 'app/ngservices/business.service';
import { ToastrService } from 'ngx-toastr';
import { element } from 'protractor';
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
  // SavedService:any;
  showLoader:boolean=false;
  serviceDialog:boolean=false;
  cropperupload:boolean=false;
  customDialog:boolean=false;
  customFields=new Array<any>();
  customFieldSelectOptions=Array<any>();
  SavedServices: Array<any>;
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
  constructor(public http: Http, public bs_service: BusinessService, public toastr: ToastrService){ 
    this.objVenderServiceVm = new VendorServiceVM();
    this.objVenderServiceVm.categoryId
    this.categories = new Array<CategoryVm>();
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
              // this.http.get(this.api+'api/Supplier/businessservices',{headers:headers}).subscribe(data =>{
              // this.SavedServices = data.json();
              // console.log(JSON.stringify(this.SavedServices));
              // });
              // api/Categories/categorieswithservices
              this.showLoader=true;
              this.http.get(this.api+'api/Supplier/mybusinessservices',{headers:headers}).subscribe(data =>{
                this.categoryserveice = data.json() as string[];
                
                 this.selected_category=this.categoryserveice.filter(c=>c.isSelect==true);
                 console.log(JSON.stringify(this.selected_category));
                // if(this.SavedServices!=undefined && this.SavedServices!=null){
//                 this.selected_category =   this.SavedServices[0].categoryId;
//               this.objVenderServiceVm.categoryId = this.selected_category;
//               let Service=this.SavedServices.filter(m=>m.categoryId==this.selected_category)[0];
              
//               this.objVenderServiceVm.serviceName= Service.serviceName;
//               this.objVenderServiceVm.servicesId = Service.servicesId;
//               this.objVenderServiceVm.serviceFields = Service.serviceFields;
//               this.getServicesByCategory(this.objVenderServiceVm.categoryId);
//               this.getCustomFieldBySreviceId(this.objVenderServiceVm.servicesId,'');
// //              this.getSelectedCustomFieldOption(this.customFields);
//             }else{
//               this.selected_category =   this.SavedServices[0].categoryId;
//               this.objVenderServiceVm.categoryId =this.selected_category;
//               this.objVenderServiceVm.categoryId = this.categoryserveice.filter(c=>c.isSelect==true)[0]
//             }
                
               this.objVenderServiceVm.categoryId = this.selected_category[0].categoryId;
               let x=this.selected_category.filter(c=>c.categoryId==this.objVenderServiceVm.categoryId)[0].services;
              console.log(x);
              this.services= this.selected_category.filter(c=>c.categoryId==this.objVenderServiceVm.categoryId)[0].services;               
              this.objVenderServiceVm.serviceName= this.services[0].serviceName;
              this.objVenderServiceVm.servicesId = this.services[0].servicesId;
             // this.objVenderServiceVm.serviceFields = Service.serviceFields;
              this.getServicesByCategory(this.objVenderServiceVm.categoryId);
              this.getCustomFieldBySreviceId(this.objVenderServiceVm.servicesId,'');
            this.showLoader=false;
              },error => {console.log(error)
                this.showLoader=false;
              });
    }
      getServicesByCategory(catId){
       if(this.objVenderServiceVm==undefined){
        this.objVenderServiceVm = new VendorServiceVM();}
        this.objVenderServiceVm.categoryId=catId;
        this.resetCustomFileds();  
        let abc= this.categoryserveice.filter(m=>m.categoryId==catId)[0];
        if(this.objVenderServiceVm.servicesId==undefined){
        this.services= abc.services;
        }else{
          this.services=abc.services;
        }
        console.log(this.services);
      }
      resetCustomFileds(){
        this.customFields=[];
        this.customFieldSelectOptions=[];
      }
      gatNavTest(){
        this.getCustomFieldBySreviceId(this.objVenderServiceVm.servicesId,'');
      }
      getCustomFieldBySreviceId(id,name){
       this.resetCustomFileds();
       this.objVenderServiceVm.servicesId = id ;
       this.objVenderServiceVm.serviceName=name;
      console.log(this.categoryserveice.filter(c=>c.categoryId==this.objVenderServiceVm.categoryId)[0])
       let customFields=this.categoryserveice.filter(c=>c.categoryId==this.objVenderServiceVm.categoryId)[0].services.filter(s=>s.servicesId==id)[0].customFields;
       if(customFields!=undefined){
       for (let i = 0; i < customFields.length; i++) {
      console.log(customFields[i]);
       let selectedOption= this.categoryserveice.filter(c=>c.categoryId==this.objVenderServiceVm.categoryId)[0].services.filter(s=>s.servicesId==this.objVenderServiceVm.servicesId)[0].customFields.filter(c=>c.customFieldId==customFields[i].customFieldId)[0].customFieldOptionList.filter(s=>s.isSelect==true)[0];
       if(selectedOption){
       customFields[i].isEnable=false;
          customFields[i].SelectedOptionValue=selectedOption.displayText;
          customFields[i].SelectedOptionId=selectedOption.id;
          this.customFields.push(customFields[i])
        }else{
          customFields[i].SelectedOptionValue=0;
          customFields[i].SelectedOptionId=0;
          this.customFields.push(customFields[i])
        }         
       }}
       console.log(this.customFields);
      }
      getSelectOptions(customField){
          this.customFieldSelectOptions = this.categoryserveice.filter(c=>c.categoryId==this.objVenderServiceVm.categoryId)[0].services.filter(s=>s.servicesId==this.objVenderServiceVm.servicesId)[0].customFields.filter(cf=>cf.customFieldId==customField.customFieldId)[0].customFieldOptionList;
          this.customFieldSelectOptions.forEach(element => {
           element.isSelected=false;
          });
          console.log(this.customFieldSelectOptions);
          this.customDialog=true;
      }
      getSelectedCustomFieldOption(customField){
       return customField.customFieldOptionList.filter(o=>o.isSelect==true)[0].FieldValue
      }
      showServiceDialog(){
        this.serviceDialog=true;
        this.cropperupload=true;
      }
      closeCustomDialog(){
        this.customDialog=false;
      }
      seveCustomField(cfo) {
        cfo.isSelected=true;
        let smv=new ServiceFieldValuesVM();
        smv.FieldValue= cfo.displayText;
        smv.customFieldId = cfo.customFieldId;
        smv.id=cfo.id;
        this.customFields.filter(c=>c.customFieldId==cfo.customFieldId)[0].SelectedOptionId=smv.id;
        this.customFields.filter(c=>c.customFieldId==cfo.customFieldId)[0].SelectedOptionValue=smv.FieldValue;
        debugger;
        if(this.objVenderServiceVm.serviceFields==undefined){
        this.objVenderServiceVm.serviceFields=[];
      }
       this.objVenderServiceVm.serviceFields.push(smv);
       this.bs_service.SaveIntoDb(this.objVenderServiceVm).subscribe(res=>{
         if(res.status==200){
           this.toastr.success(res.json().message);
           this.customDialog=false;
         }else{
          this.toastr.error(res.json().message);
         }
       });
      }
      SaveIntoDb(){
        console.log(this.services);
        this.services.filter(s=>s.isSelect=true)[0].isSelect=false;
        this.services.filter(s=>s.servicesId==this.objVenderServiceVm.servicesId)[0].isSelect=true;
        this.bs_service.SaveIntoDb(this.objVenderServiceVm).subscribe((response)=>{
          this.toastr.success(response.json().message);
          this.serviceDialog = false;
      },error=>{
        this.toastr.error(error);
        console.log(error);
      });
       }

       closeModel(dialogname){
        this.serviceDialog=false;
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
  public id:number;
}
export class CategoryVm{
  public categoryId:number;
  public categoryName: string;
  public serviceName: string;
  public servicesId: number;
}


