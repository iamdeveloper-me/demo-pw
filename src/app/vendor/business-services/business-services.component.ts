import { value } from './../../shared/data/dropdowns';
import { FormGroup, FormBuilder, FormArray, FormControl, Form } from '@angular/forms';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { apiPath } from '../../shareApi/apiPath';
export interface MainCategory {
  categoryId: number;
  categoryName:string;
  imagePath: string;
  isDeleted: boolean;
  isFeatured:  boolean;
  services: any;
}
@Component({
  selector: 'app-business-services',
  templateUrl: './business-services.component.html',
  styleUrls: ['./business-services.component.scss'],

})
export class BusinessServicesComponent implements OnInit {
  //  private serveiceget: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Categories/categorieswithservices'
  private serveicepost: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/savebusinessservices'
  //  private userservesicege:string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/businessservices'
  public arr = []
  val:string;
  serviceId:number
  dom : boolean = true;
  person:boolean = true
  service_provide_dailog   = false;
  service_provide_dailog_2 = false;
  public selectP :number;
  public serviceData = []
  form = new FormGroup({
    servicesId: new FormControl(),
  });
  formPrice = new FormGroup({
    customFieldId: new FormControl(),
  });
  seviceName: string;
  price:string;
  customFieldsIds:any;
  private api = apiPath.url;
  emptyArray=[]
  option=[]
  myForm: FormGroup;
  myForm2: FormGroup;
  serviceShow:boolean = false;
  public serviceFormArray:any;
  first_category:any = {};
  categoryserveice = [];
  User_services = []; 
  Selected_serveice = {servicesId: '', customFields: []};
  pricelist;
  pricelistArray = [] ;
  modaldata = []; 
  radio = 5;
  checkbox= 6;
  textbox = 4;
  show = false;
  allservices = true; 
  customFieldsa=[]
  final =[];
  constructor(public http: Http,private fb: FormBuilder){ }  
  ngOnInit() {  
              this.show = false;
              this.allservices = true;
              $.getScript('./assets/js/vendorsidebar.js');
              setTimeout(function(){ $(".servicecontainer div:first").removeClass("activehide"); $(".servicecontainer div:first").addClass("activedisplay"); $(".servicecontainer div:first button").click(); }, 2000);
                $(document).on('click', '.nextbtn', function(){
                  var active = $(this).siblings('.servicecontainer').find('.activedisplay');
                  if (active.next('div').hasClass('activehide')) {
                    active.find('input').prop("checked", false);
                    active.removeClass('activedisplay');
                    active.addClass('activehide');
                  // active.next('div').find('input').prop("checked", true);
                    active.next('div').removeClass('activehide');
                    active.next('div').addClass('activedisplay');
                    active.next('div').find("button").click();
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
                  active.prev('div').find("button").click();
                  }
              });
              let headers = new Headers();
              var authToken = localStorage.getItem('userToken');
              var categoryid = localStorage.getItem('categoryid');
              headers.append('Accept', 'application/json')
              headers.append('Content-Type', 'application/json');
              headers.append("Authorization",'Bearer '+authToken);
              //jo data post kar rhe h 
                this.http.get(this.api+'api/Supplier/businessservices',{headers:headers}).subscribe(data =>{
                  this.User_services = data.json();
                  this.categoryserveice = JSON.parse(localStorage.getItem('categoryserveice'));
                  this.serviceShow = true;
                });
               this.http.get(this.api+'/api/Supplier/businessservices',{headers:headers}).subscribe(data =>{
                console.log('Data /api/Supplier/businessservices',JSON.stringify(data.json()))  
               });
          this.http.get(this.api+'api/Categories/categorieswithservices',{headers:headers}).subscribe(data =>{
            this.categoryserveice = data.json() as string[];
            localStorage.setItem('categoryserveice', JSON.stringify(this.categoryserveice));
            this.services_all = this.categoryserveice[0].services;
            for(var i = 0; i < this.categoryserveice.length; i++){
               if(this.categoryserveice[i].categoryId == categoryid )
             {
                  this.first_category = this.categoryserveice[i];
              }
            }
          });

          this.myForm = this.fb.group({
            // useremail: this.fb.array([]),
            genderControl: this.fb.array([]),
            // priceControl: this.fb.array([]),
          });
          this.myForm2 = this.fb.group({
            priceControl: this.fb.array([]),

          });
       
  }
  submitS(form: FormGroup){
this.serviceData.push(form.value)
this.service_provide_dailog = false;
localStorage.setItem('id_of_selected_service', this.serviceData[0]['servicesId']);

this.dom = false;
this.modaldata.forEach(element => {
  if(element.servicesId == form.value.servicesId){
    this.seviceName = element.serviceName;
    element.customFields.forEach(field => {
      field['up'] = false;
      field['data'] = false;
    });
    this.Selected_serveice = element;
    this.serviceShow = true;
  }
});
  }
  submitP(form: FormGroup){
    this.customFieldsIds = ''
    this.closeModel();
    this.service_provide_dailog_2 = false;

    debugger
    const o = {
      "customFieldId": form.value.customFieldId.split('xx')[0],
      "userValue": form.value.customFieldId.split('xx')[1]
    }
    this.serviceData.push(o)
  this.pricelistArray.forEach((data)=>{
    data['pick'] = false;
  })
  this.pricelistArray.forEach((element,pos)=>{
      if(element.key == form.value.customFieldId.split('xx')[1]){
        element['pick'] = true;
        this.selectP = pos;
      }
  })
  }
  onChange(email: string, isChecked: boolean) {
     this.serviceFormArray = <FormArray>this.myForm.controls.useremail;
    if (isChecked) {
      this.serviceFormArray = new FormControl(email);
    } else {
      let index = this.serviceFormArray.controls.findIndex(x => x.value == email)
      this.serviceFormArray.removeAt(index);
    }
  }
  toggleBool: boolean=true;
  changeEvent(event) {
        if (event.target.checked) {         
            this.toggleBool= false;
        }
        else {
            this.toggleBool= true;
        }
  }
  service(info){
    //console.log(info);
    this.Selected_serveice = info;
  }
  back_services(){ this.show = false;
    this.allservices = true;
    if(this.Selected_serveice.customFields.length > 0){
      this.Selected_serveice.customFields = [];
    }
  }
  addnew_services(){
    this.show = true;
    this.allservices = false;
  }
  customFieldsdata(data){
    // console.log(data);
    this.pricelist = data.name;
    this.pricelistArray = data.customFieldOptionList;
    // console.log(this.pricelistArray);
  }
  result(custom){
                  this.Selected_serveice.servicesId; 
                  this.final.push({customFieldId: custom.customFieldId, userValue: custom.key });
                  var data =  {  
                                servicesId: this.Selected_serveice.servicesId ,  
                                serviceFields: this.final
                              }
                  let headers = new Headers();
                  var authToken = localStorage.getItem('userToken');
                  headers.append('Accept', 'application/json')
                  headers.append('Content-Type', 'application/json');
                  headers.append("Authorization",'Bearer '+authToken);
                  // yha se selection post hoga
                  this.http.post(this.api+'api/Supplier/savebusinessservices',data,
                          {headers:headers}).subscribe(data =>{console.log( data.json()) 
                          },error => {console.log(error)});
  }
  modal1(category){ 
    this.modaldata = category;
  }
  showcontent:boolean=false;
  readioSelected:any;
  readioService:any;
  service_data:any = {categoryName:"category"};
  services_all =[];
  costserviceTrue:boolean;
  showContent(){
    this.showcontent =this.readioSelected;
    this.service_data = this.categoryserveice[this.readioSelected];
    this.services_all = this.service_data['services']
    if(this.Selected_serveice.customFields.length > 0){
      this.Selected_serveice.customFields = [];
    }
    this.costserviceTrue = true;
  }
  serviceShowFunc(){
    this.serviceShow = !this.serviceShow
  }
  serviceProvide(){
  }
  closeModel(){     
    this.service_provide_dailog = false;
    this.service_provide_dailog_2 = false;
  }
  dataSaveDB(){
                  this.serviceData.forEach((dc)=>{
                  console.log(dc)
                  })
                  const db = {
                    "categoryId": localStorage.getItem('id_of_selected_category'),
                    "servicesId": localStorage.getItem('id_of_selected_service'),
                    "serviceFields": this.serviceData.splice(1)     
                  }
                  this.Selected_serveice
                  // 2
                  // 3
                  let headers = new Headers();
                  var authToken = localStorage.getItem('userToken');
                  headers.append('Accept', 'application/json')
                  headers.append('Content-Type', 'application/json');
                  headers.append("Authorization",'Bearer '+authToken);
                  // yha se selection post hoga
                  this.http.post(this.serveicepost,db,
                          {headers:headers}).subscribe(data =>{//console.log( data.json()) 
                          },error => {
                            //console.log(error)
                          });
  }
  checkingService(i,eve:Event){
  }
  showService(i){
                      this.readioService = i;
                      const var_cat_id = this.readioService;
                      this.seviceName = this.User_services[var_cat_id].serviceName
                      this.first_category = this.User_services[var_cat_id]
                      const CategoryId = this.first_category.categoryId
                      const ServiceId = this.first_category.servicesId
                      if(this.first_category.customFields != null){
                        localStorage.setItem('id_of_selected_category', this.first_category.categoryId);
                        localStorage.setItem('id_of_selected_service', this.first_category.servicesId);
                        const CustomFieldsId = this.first_category.customFields[0].fieldValue
                        this.serviceId = ServiceId;
                        this.customFieldsIds = CustomFieldsId;
                      }
                      this.categoryserveice.forEach((ele)=>{
                        if(ele.categoryId == CategoryId){
                          this.modaldata = ele.services
                        }
                      })
  }
}


