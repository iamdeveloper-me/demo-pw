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
  public arr = []
dom : boolean = true;
  val:string;
  person:boolean = true
  serviceId:number
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
  //  private serveiceget: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Categories/categorieswithservices'
   private serveicepost: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/savebusinessservices'
  //  private userservesicege:string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/businessservices'
   
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
  constructor(public http: Http,private fb: FormBuilder)
  {

  
  }  

  ngOnInit() {  
           this.show = false;
           this.allservices = true;
              $.getScript('./assets/js/vertical-timeline.js');
              $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
              $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
              $.getScript('./assets/js/vendorsidebar.js');
            

            setTimeout(function(){ $(".servicecontainer div:first").removeClass("activehide"); $(".servicecontainer div:first").addClass("activedisplay"); $(".servicecontainer div:first button").click(); }, 2000);

              // 

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

              $(document).on('click', ".saveall", function() {
                  $(this).parents('.modal').css("display", "none");
                  $(this).parents('.modal').removeClass("show");
                  $('.modal-backdrop').hide();
                  $('.modal-backdrop').removeClass("fade");
                  $('.modal-backdrop').removeClass("show");
                  $('body').removeClass("modal-open");
                })

          let headers = new Headers();
          var authToken = localStorage.getItem('userToken');
          var categoryid = localStorage.getItem('categoryid');
          console.log(categoryid);
          headers.append('Accept', 'application/json')
          headers.append('Content-Type', 'application/json');
          headers.append("Authorization",'Bearer '+authToken);

          
          
         //jo data post kar rhe h 
          this.http.get(this.api+'api/Supplier/businessservices',{headers:headers}).subscribe(data =>{
            console.log(data.json())
            this.User_services = data.json();
            // Hemant 2
            // data.json().forEach(serviceName => {
            //   if(serviceName.customFields !=null){
            //     this.seviceName = serviceName['serviceName'];
            //     this.serviceId = serviceName['servicesId'];
            //     console.log('serviceId',this.serviceId )
            //   }
            // });
            

            // this.Selected_serveice = this.categoryserveice[]
            this.categoryserveice = JSON.parse(localStorage.getItem('categoryserveice'));


            console.log(this.categoryserveice)
            this.categoryserveice.forEach((e,p)=>{
              if(e.categoryId == data.json()[0]['categoryId']){
                this.Selected_serveice = e['services']
                this.serviceShow = true;
                
                console.log('kkk',this.Selected_serveice)
                e['services'].forEach(el => {
                  if(el.servicesId == data.json()[0]['servicesId']){
                    console.log(el.customFields)
                    this.dom = true;

                    el.customFields[0]['checked'] = true
                    this.customFieldsa = el.customFields
                  }
                });
              }
            })
            this.serviceShow = true;
            // // selected customfield
            // // index##customFieldId
            // this.User_services[0].customFields.forEach((e,p)=>{
            //  this.arr.push(e.customFieldId+'##'+p);
            // })
            // console.log('first time update get result',this.arr)

            // this.Selected_serveice = this.categoryserveice[this.serviceId-1]
            // console.log('Selected_serveice', this.Selected_serveice)


            // this.serviceShow = true
            // console.log(data.json()[0]['categoryId'])
            // this.User_services.forEach((ele,pos)=>{
            //   if(ele.categoryId == data.json()[0]['categoryId']){
            //     this.services_all = ele
            //     console.log('cat',this.services_all)
            //   }
            // })
            // this.Selected_serveice 
            // this.service_provide_dailog = false;

            // console.log('fffff',  this.User_services[0].customFields)
            // this.User_services['customFields'].forEach((elem,pos)=>{
            //   if(elem.servicesId == data.json()[0]['servicesId']){
            //     this.services_all = elem
            //     console.log('cat',this.services_all)
            //   }
            // })
            

            // console.log(data.json()[0]['servicesId'])
            // console.log(this.Selected_serveice[data.json()[0]['servicesId']])
            // this.Selected_serveice = this.Selected_serveice[data.json()[0]['servicesId']]
            // debugger
          });


          this.http.get(this.api+'/api/Supplier/businessservices',{headers:headers}).subscribe(data =>{
            console.log('Data /api/Supplier/businessservices',JSON.stringify(data.json()))
            
          });
          // 20 data
          this.http.get(this.api+'api/Categories/categorieswithservices',{headers:headers}).subscribe(data =>{
            this.categoryserveice = data.json() as string[];
            localStorage.setItem('categoryserveice', JSON.stringify(this.categoryserveice));

            console.log(this.categoryserveice)
            this.services_all = this.categoryserveice[0].services;

            console.log( this.categoryserveice);
            for(var i = 0; i < this.categoryserveice.length; i++){
          
               if(this.categoryserveice[i].categoryId == categoryid )
             {
                  this.first_category = this.categoryserveice[i];
                 console.log(this.first_category );
              }
            }
          });

          this.myForm = this.fb.group({
            // useremail: this.fb.array([]),
            genderControl: this.fb.array([]),
            // priceControl: this.fb.array([]),
          });
          this.myForm2 = this.fb.group({
            // useremail: this.fb.array([]),
            priceControl: this.fb.array([]),

          });
       
  }
  submitS(form: FormGroup){
console.log(form.value)
console.log('**************************')
console.log(this.serviceData)
this.serviceData.push(form.value)
console.log(this.serviceData)
console.log('**************************')
console.log(this.modaldata)
this.service_provide_dailog = false;
localStorage.setItem('id_of_selected_service', this.serviceData[0]['servicesId']);

this.dom = false;
this.modaldata.forEach(element => {
  if(element.servicesId == form.value.servicesId){
    
    console.log(this.Selected_serveice)
    console.log('ss1',element)
    this.seviceName = element.serviceName;
    element.customFields.forEach(field => {
      field['up'] = false;
      field['data'] = false;
    });
    console.log('+++++++++++++++++',element)
    
    this.Selected_serveice = element;
    console.log('Length',this.emptyArray)
    this.serviceShow = true;
  }
});
// this.Selected_serveice = this.modaldata;
  }
  submitP(form: FormGroup){
    this.customFieldsIds = ''
    console.log(form.value)
    this.closeModel();
    this.service_provide_dailog_2 = false;

    debugger
    const o = {
      "customFieldId": form.value.customFieldId.split('xx')[0],
      "userValue": form.value.customFieldId.split('xx')[1]
    }
    this.serviceData.push(o)


    console.log('@@@@@@@@@@@@',this.serviceData)
  // console.log(this.pricelistArray)
  console.log(this.Selected_serveice.customFields)
  this.pricelistArray.forEach((data)=>{
    data['pick'] = false;
  })
  
    this.pricelistArray.forEach((element,pos)=>{
      if(element.key == form.value.customFieldId.split('xx')[1]){
        // console.log('ss2',element)
        element['pick'] = true;
        this.selectP = pos;
      }

      console.log(this.selectP)
    })
    // this.pricelistArray.customFieldId
    console.log(this.pricelistArray)
      }
  onChange(email: string, isChecked: boolean) {
     this.serviceFormArray = <FormArray>this.myForm.controls.useremail;
    //  this.genderControl = <FormArray>this.myForm.controls.useremail;

    if (isChecked) {
      this.serviceFormArray = new FormControl(email);
      console.log(this.serviceFormArray)
      // this.service(this.serviceFormArray.value[this.serviceFormArray.value.length-1])
      // this.serviceShow = !this.serviceShow
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
    console.log(info);
  
    this.Selected_serveice = info;


  }
  back_services(){ this.show = false;
    this.allservices = true;
    if(this.Selected_serveice.customFields.length > 0){
      this.Selected_serveice.customFields = [];
    }}

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
    
    console.log(this.Selected_serveice.servicesId);
    console.log(custom);
    this.final.push({customFieldId: custom.customFieldId, userValue: custom.key });
   var data =  {  servicesId: this.Selected_serveice.servicesId ,  
                  serviceFields: this.final}

                  console.log(data);

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
    
  console.log(category);
  this.modaldata = category;}

  showcontent:boolean=false;
  readioSelected:any;
  readioService:any;
  service_data:any = {categoryName:"category"};
  services_all =[];
  costserviceTrue:boolean;
  
  /////////////////////////////////////
  showContent(){
  
    this.showcontent =this.readioSelected;
    this.service_data = this.categoryserveice[this.readioSelected];
    console.log(this.service_data );
    this.services_all = this.service_data['services']
    console.log(  this.services_all);
    if(this.Selected_serveice.customFields.length > 0){
      this.Selected_serveice.customFields = [];
    }

  
    this.costserviceTrue = true;
  }


  serviceShowFunc(){
    this.serviceShow = !this.serviceShow
  }
  serviceProvide(){
    console.log(this.serviceFormArray)  
  }


  closeModel(){
       
    this.service_provide_dailog = false;
    this.service_provide_dailog_2 = false;
  }




  dataSaveDB(){
    console.log('-------->>>')
  //  1
  this.serviceData.forEach((dc)=>{
   console.log(dc)
  })
 const db = {
    "categoryId": localStorage.getItem('id_of_selected_category')
    ,
    "servicesId": localStorage.getItem('id_of_selected_service'),

    "serviceFields": this.serviceData.splice(1)
    
  }
  console.log(db)
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
          {headers:headers}).subscribe(data =>{console.log( data.json()) 
  
      
          },error => {console.log(error)});
}
  

  checkingService(i,eve:Event){
    console.log(i)
    console.log(eve)
    console.log(this.val)
  }
  showService(i){
    this.readioService = i;
    console.log(this.readioService)
    

    const var_cat_id = this.readioService;

    
    this.seviceName = this.User_services[var_cat_id].serviceName
    console.log(this.User_services[var_cat_id])
    this.first_category = this.User_services[var_cat_id]
    const CategoryId = this.first_category.categoryId
    const ServiceId = this.first_category.servicesId
    if(this.first_category.customFields != null){
      localStorage.setItem('id_of_selected_category', this.first_category.categoryId);
      localStorage.setItem('id_of_selected_service', this.first_category.servicesId);
      const CustomFieldsId = this.first_category.customFields[0].fieldValue
      console.log(CustomFieldsId)
      this.serviceId = ServiceId;
      this.customFieldsIds = CustomFieldsId;
    }
    

    console.log(this.categoryserveice )
    this.categoryserveice.forEach((ele)=>{
      if(ele.categoryId == CategoryId){
        this.modaldata = ele.services
      }
    })
    console.log(this.modaldata)

  }
}


