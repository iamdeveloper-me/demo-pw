import { value } from './../../shared/data/dropdowns';
import { FormGroup, FormBuilder, FormArray, FormControl, Form } from '@angular/forms';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
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
  val:string;
  person:boolean = true
  service_provide_dailog = false;
  public serviceData = []
  form = new FormGroup({
    servicesId: new FormControl(),
  });
  formPrice = new FormGroup({
    customFieldId: new FormControl(),
  });
  seviceName: string;
price:string;


emptyArray=[]
   private serveiceget: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Categories/categorieswithservices'
   private serveicepost: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/savebusinessservices'
   private userservesicege:string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/businessservices'
   
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
            
              $(document).on('click', '.nextbtn', function(){
                var active = $(this).siblings('.servicecontainer').find('.activedisplay');
                if (active.next('div').hasClass('activehide')) {
                  active.find('input').prop("checked", false);
                  active.removeClass('activedisplay');
                  active.addClass('activehide');
                 // active.next('div').find('input').prop("checked", true);
                  active.next('div').removeClass('activehide');
                  active.next('div').addClass('activedisplay');
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
          this.http.get(this.userservesicege,{headers:headers}).subscribe(data =>{
            console.log(data.json())
            this.User_services = data.json();
            debugger
          });


          // 20 data
          this.http.get(this.serveiceget,{headers:headers}).subscribe(data =>{
            this.categoryserveice = data.json() as string[];
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
this.serviceData.push(form.value)
console.log(this.modaldata)
this.service_provide_dailog = false;


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
    console.log(form.value)
    const o = {
      "customFieldId": form.value.customFieldId,
      "userValue": "string"
    }
    this.serviceData.push(o)


    console.log('@@@@@@@@@@@@',this.serviceData)
  // console.log(this.pricelistArray)
  console.log(this.Selected_serveice.customFields)
  this.pricelistArray.forEach((data)=>{
    data['pick'] = false;
  })
  
    this.pricelistArray.forEach((element,pos)=>{
      if(element.key == form.value.customFieldId){
        // console.log('ss2',element)
        element['pick'] = true;
      }
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
     this.http.post(this.serveicepost,data,
            {headers:headers}).subscribe(data =>{console.log( data.json()) 
    
        
            },error => {console.log(error)});
  }

  modal1(category){ 
    
  console.log(category);
  this.modaldata = category;}

  showcontent:boolean=false;
  readioSelected:any;
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
  }




  dataSaveDB(){
    console.log('++++++++++++++++++*********************************++++++++++++++++++++++++++++')
  //  1
  this.serviceData.forEach((dc)=>{
   console.log(dc)
  })
 const db = {
    "servicesId": this.serviceData[0]['servicesId'],

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

}



