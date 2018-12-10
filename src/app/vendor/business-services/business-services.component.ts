import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { apiPath } from '../../shareApi/apiPath';
import { BusinessCategoriesVM } from './BusinessServiceVm';
import { forEach } from '@angular/router/src/utils/collection';
import { BusinessService } from 'app/ngservices/business.service';
import { ToastrService } from 'ngx-toastr';
import { element } from 'protractor';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { getDate, getHours, getMinutes } from 'date-fns';
import { CustomFormsModule } from 'ng2-validation';
@Component({
  selector: 'app-business-services',
  templateUrl: './business-services.component.html',
  styleUrls: ['./business-services.component.scss'],
  providers: [ BusinessService]
})
export class BusinessServicesComponent implements OnInit {
  private api = apiPath.url; 
  name_d= ''
  selectedCategoryName='';
  selected_category:Array<any>=[];
  categoryserveice= [];
  categoryIndex:number=0;
  showLoader:boolean=false;
  serviceDialog:boolean=false;
  cropperupload:boolean=false;
  customDialog:boolean=false;
  customFields=new Array<any>();
  customFieldSelectOptions=Array<any>();
  services: any;
  service_provide_dailog = false;
  objVenderServiceVm: VendorServiceVM;
  service_provide_dailog_2 = false;
  service_provide_dailog_3 = false;
  service_provide_dailog_4 = false;
  header:Headers;
  beforeUpdateData:VendorServiceVM;
  businessServiceEntity: BusinessServiceEntityModel;

  constructor(private config: NgbCarouselConfig,private router: Router,public http: Http, public bs_service: BusinessService, public toastr: ToastrService){ 
    this.objVenderServiceVm = new VendorServiceVM();
    this.businessServiceEntity = new BusinessServiceEntityModel();
  }  
  ngOnInit() {  
    $.getScript('./assets/js/vendorsidebar.js');
    setTimeout(function(){ $(".servicecontainer div:first").removeClass("activehide"); $(".servicecontainer div:first").addClass("activedisplay"); $(".servicecontainer div:first span").click(); }, 1000);
              let headers = new Headers();
              var authToken = localStorage.getItem('userToken');
              var categoryid = localStorage.getItem('categoryid');
              headers.append('Accept', 'application/json')
              headers.append('Content-Type', 'application/json');
              headers.append("Authorization",'Bearer '+authToken);
              this.header = headers;
              this.showLoader=true;
              this.http.get(this.api+'api/Supplier/mybusinessservices',{headers:headers}).subscribe(data =>{
               this.categoryserveice = data.json() as string[];
               console.log(JSON.stringify(this.categoryserveice));
               this.selected_category=this.categoryserveice.filter(c=>c.isSelect==true);

               if(this.selected_category.length==0){
                 this.selected_category=this.categoryserveice;
               }
               /// Set Category For EntityModel
               if(this.selected_category.length>0){
                this.objVenderServiceVm.categoryId = this.selected_category[0].categoryId;
                this.businessServiceEntity.categoryId=this.selected_category[0].categoryId;
                this.selectedCategoryName=this.selected_category[0].categoryName;
               }              
               /// Set Service For EntityModel

               this.services= this.selected_category.filter(c=>c.categoryId==this.objVenderServiceVm.categoryId)[0].services;               
               
               if(this.services==undefined || this.services.length<0){
                 this.objVenderServiceVm.serviceName='No Service Selected ! ';
                this.name_d = this.objVenderServiceVm.serviceName  
                this.objVenderServiceVm.servicesId=0;
                this.businessServiceEntity.servicesId=0;
               }else{
                 if(this.objVenderServiceVm.serviceName!=undefined){
               this.objVenderServiceVm.serviceName= this.services.filter(s=>s.isSelect==true)[0].serviceName;
               this.name_d = this.objVenderServiceVm.serviceName;
               this.objVenderServiceVm.servicesId = this.services.filter(s=>s.isSelect==true)[0].servicesId;
               this.getServicesByCategory(this.objVenderServiceVm.categoryId);
               this.getCustomFieldBySreviceId(this.objVenderServiceVm.servicesId,this.objVenderServiceVm.serviceName);
               this.saveServiceWithoutOptions();
               this.showLoader=false;
               }else{
                 // Dt:07/12/18
                 let service = this.services.filter(s=>s.isSelect==true)[0];
                 this.objVenderServiceVm.servicesId = service.servicesId;
                 this.objVenderServiceVm.serviceName=service.serviceName;
                 this.name_d=this.objVenderServiceVm.serviceName;
               this.getServicesByCategory(this.objVenderServiceVm.categoryId);
               this.getCustomFieldBySreviceId(this.objVenderServiceVm.servicesId,this.objVenderServiceVm.serviceName);
               this.saveServiceWithoutOptions();
                this.showLoader=false;
               }}
               },error => {console.log(error)
                this.showLoader=false;
               });
    }
      getServicesByCategory(catId){
       if(this.objVenderServiceVm==undefined){
        this.objVenderServiceVm = new VendorServiceVM();}
        this.objVenderServiceVm.categoryId=catId;
        this.resetCustomFileds();  
        let cat= this.categoryserveice.filter(m=>m.categoryId==catId)[0];
        if(this.objVenderServiceVm.servicesId==undefined){
        this.services= cat.services;
        }else{
          this.services=cat.services;
        }
        console.log(this.services);
      }
      resetCustomFileds(){
        this.customFields=[];
        this.customFieldSelectOptions=[];
      }
      navigateToCategory(arrow){
        if(arrow=='r' && this.categoryserveice.length> this.categoryIndex){
          this.categoryIndex+=1;
            var active = $('.nextbtn').siblings('.servicecontainer').find('.activedisplay');
            if (active.next('div').hasClass('activehide')) {
              active.find('input').prop("checked", false);
              active.removeClass('activedisplay');
              active.addClass('activehide');
              active.next('div').removeClass('activehide');
              active.next('div').addClass('activedisplay');
              active.next('div').find("span").click();
            }
        }else{
          if(this.categoryIndex>0){
          this.categoryIndex-=1
            var active = $('.prebtn').siblings('.servicecontainer').find('.activedisplay');
            if (active.prev('div').hasClass('activehide')) {
              active.find('input').prop("checked", false);
              active.removeClass('activedisplay');
              active.addClass('activehide');
              active.prev('div').removeClass('activehide');
              active.prev('div').addClass('activedisplay');
              active.prev('div').find("span").click();
              }
          }
        }
        this.selectedCategoryName= this.selected_category[this.categoryIndex].categoryName;
        this.objVenderServiceVm.categoryId = this.selected_category[this.categoryIndex].categoryId;
       let service=this.selected_category[this.categoryIndex].services.filter(s=>s.isSelect==true)[0];
       if(service!=undefined){
       this.name_d=service.serviceName;
       this.objVenderServiceVm.serviceName= service.serviceName;
       this.objVenderServiceVm.servicesId=service.servicesId;
       }
      this.services= this.selected_category[this.categoryIndex].services;
      this.getServicesByCategory(this.categoryserveice[this.categoryIndex].categoryId);
      this.getCustomFieldBySreviceId(this.objVenderServiceVm.servicesId,this.objVenderServiceVm.serviceName);
      this.saveServiceWithoutOptions();
   }
   SetInto_serviceTempStorage(id,name){
     debugger;
    this.beforeUpdateData.servicesId=id;
    this.beforeUpdateData.serviceName=name;
    this.businessServiceEntity.servicesId=id;
   }
      getCustomFieldBySreviceId(id,name){
        this.resetCustomFileds();
       this.objVenderServiceVm.servicesId = id ;
       this.objVenderServiceVm.serviceName=name;
       this.name_d=name;
       let isServiceExist=this.selected_category.filter(c=>c.categoryId==this.objVenderServiceVm.categoryId)[0].services.filter(s=>s.isSelect==true)[0];
       console.log(isServiceExist);
      if(isServiceExist!=undefined){
       this.selected_category.filter(c=>c.categoryId==this.objVenderServiceVm.categoryId)[0].services.filter(s=>s.isSelect==true)[0].isSelect=false;
       this.selected_category.filter(c=>c.categoryId==this.objVenderServiceVm.categoryId)[0].services.filter(s=>s.servicesId==id)[0].isSelect=true;
      }
      }
      saveServiceWithoutOptions(){

        // this.customFields=[];
        // let customFields=this.categoryserveice.filter(c=>c.categoryId==this.objVenderServiceVm.categoryId)[0].services.filter(s=>s.servicesId==this.objVenderServiceVm.servicesId)[0].customFields;
        // if(customFields!=undefined){
        //   for (let i = 0; i < customFields.length; i++) {
        //   let selectedOption= this.categoryserveice.filter(c=>c.categoryId==this.objVenderServiceVm.categoryId)[0].services.filter(s=>s.servicesId==this.objVenderServiceVm.servicesId)[0].customFields.filter(c=>c.customFieldId==customFields[i].customFieldId)[0].customFieldOptionList.filter(s=>s.isSelect==true)[0];
        //   console.log(selectedOption);
        //   if(selectedOption){
        //      customFields[i].isEnable=false;
        //      customFields[i].SelectedOptionValue=selectedOption.displayText;
        //      customFields[i].SelectedOptionId=selectedOption.id;
        //      customFields[i].fieldType=customFields[i].fieldType;
        //      this.customFields.push(customFields[i])
        //    }else{
        //      customFields[i].SelectedOptionValue='NA';
        //      customFields[i].SelectedOptionId=78;
        //      customFields[i].fieldType=customFields[i].fieldType;
        //     // alert(customFields[i].fieldType);
        //      this.customFields.push(customFields[i])
        //    }
        //   }}
        //   console.log(this.customFields);

        this.bs_service.SaveIntoDb(this.businessServiceEntity).subscribe(res=>{
          console.log(res);
        })

      }
      getSelectOptions(customField){
        console.log(JSON.stringify(customField));
      
          this.customFieldSelectOptions = this.categoryserveice.filter(c=>c.categoryId==this.objVenderServiceVm.categoryId)[0].services.filter(s=>s.servicesId==this.objVenderServiceVm.servicesId)[0].customFields.filter(cf=>cf.customFieldId==customField.customFieldId)[0].customFieldOptionList;
          console.log(this.customFieldSelectOptions);
          this.customFieldSelectOptions.forEach(element => {
           element.isSelected=false;
           element.fieldType=customField.fieldType;
          });
          this.customDialog=true;

      }
      getSelectedCustomFieldOption(customField){
       return customField.customFieldOptionList.filter(o=>o.isSelect==true)[0].FieldValue
      }
      showServiceDialog(){
        this.beforeUpdateData=new VendorServiceVM();
        this.serviceDialog=true;
        this.cropperupload=true;
      }
      closeCustomDialog(){
        this.customDialog=false;
      }
      seveCustomField(cfo,fieldType) {
        if(fieldType==='5'){
        cfo.isSelected=true;
        let smv=new ServiceFieldValuesVM();
        smv.FieldValue= cfo.key;
        smv.customFieldId = cfo.customFieldId;
        this.customFields.filter(c=>c.customFieldId==cfo.customFieldId)[0].SelectedOptionId=smv.id;
        this.customFields.filter(c=>c.customFieldId==cfo.customFieldId)[0].SelectedOptionValue=smv.FieldValue;        
        let options= this.customFields.filter(c=>c.customFieldId==cfo.customFieldId)[0].customFieldOptionList;
        let CustomfieldType=this.customFields.filter(c=>c.customFieldId==cfo.customFieldId)[0].fieldType;
        options.forEach(element => {
          if(element.id!=cfo.id){
            element.isSelect=false;
          }
        });
        if(this.objVenderServiceVm.serviceFields==undefined){
        this.objVenderServiceVm.serviceFields=[];
      }
       this.objVenderServiceVm.serviceFields.push(smv);
       this.bs_service.SaveIntoDb(this.businessServiceEntity).subscribe(res=>{
         if(res.status==200){
           this.toastr.success(res.json().message);
           this.objVenderServiceVm.serviceFields=[];
          //   if(CustomfieldType==5){
            this.customDialog=false;
         }else{
          this.toastr.error(res.json().message);
         }
       });
      }
      else if(fieldType=='0'){
        this.customFieldSelectOptions.forEach(element => {
          if(element.isSelect==true){
        let smv=new ServiceFieldValuesVM();
        smv.FieldValue= element.key;
        smv.customFieldId = element.customFieldId;
        if(this.objVenderServiceVm.serviceFields==undefined){
          this.objVenderServiceVm.serviceFields=[];
        }
        this.objVenderServiceVm.serviceFields.push(smv);
        }
      });
      /// Post Data To Server
      this.showLoader=true;
      this.bs_service.SaveIntoDb(this.businessServiceEntity).subscribe(res=>{
        if(res.status==200){
          this.toastr.success(res.json().message);
          this.objVenderServiceVm.serviceFields=[];
          this.showLoader=false;
          this.customDialog=false;
        }else{
          this.showLoader=false;
         this.toastr.error(res.json().message);
        }
      });
    }
    }
      SaveIntoDb(){
        if(this.beforeUpdateData!=undefined){
          this.getCustomFieldBySreviceId(this.beforeUpdateData.servicesId,this.beforeUpdateData.serviceName);
        }else{
          this.getCustomFieldBySreviceId(this.objVenderServiceVm.servicesId,this.objVenderServiceVm.serviceName);
        }
        this.saveServiceWithoutOptions();
        this.showLoader=true;
        this.services.filter(s=>s.isSelect=true)[0].isSelect=false;
        this.services.filter(s=>s.servicesId==this.objVenderServiceVm.servicesId)[0].isSelect=true;
        this.bs_service.SaveIntoDb(this.businessServiceEntity).subscribe((response)=>{
        this.toastr.success(response.json().message);
        this.serviceDialog = false;
        this.showLoader=false;
      },error=>{
        this.toastr.error(error);
        this.showLoader=false;
      });
       }
       closeModel(dialogname){
         if(dialogname=='customDialog'){
           this.customDialog=false;
         }else{
        this.serviceDialog=false;
        this.beforeUpdateData=new VendorServiceVM();}
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
export class BusinessServiceEntityModel{
  servicesId:number;
  categoryId:number;
  customFieldId:number;
  fieldValue:string;
  constructor(){
    this.servicesId=0;
    this.categoryId=0;
    this.customFieldId=0;
    this.fieldValue='N/A';
  }
}


