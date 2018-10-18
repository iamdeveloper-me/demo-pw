import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
@Component({
  selector: 'app-business-services',
  templateUrl: './business-services.component.html',
  styleUrls: ['./business-services.component.scss'],

})
export class BusinessServicesComponent implements OnInit {
  
// 

  costserviceTrue:boolean = false;
  // toggle
  optionone:boolean = false;
  optiontwo:boolean = false;
  optionthree:boolean = false;
  optionfour:boolean = false;
  optionfive:boolean = false;
  optionsix:boolean = false;
  optionseven:boolean = false;
   private serveiceget: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Categories/categorieswithservices'
   private serveicepost: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/savebusinessservices'
   private userservesicege:string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/businessservices'
  
  data: any;
  categoryId;
 selectedservices = [];
  selectedEntry;
  min:any = {};
  Services = [];
  first_category:any = {};
  categoryserveice = [ ];
  User_services = [];
  services_all =[]
  Price = '12$';
  photo_ved = '344$'; photo_off = '45$'; travel = '233$'; payment='24$'; 
  experience = '1 Year'; photod = '24$' ;
  prewed = '556$'; studio= "45$" ;cinema = '23$'; candid = '44$ ' ;

  readioSelected:any;
  readioSelected_serv:boolean;
  service_type:boolean;
  service_category:boolean;
  RoleServiceService:any
  showcontent:boolean=false;
  checkboxarry =[] ;

  service_data:any = {categoryName:"category"};

  field_length=[]
  customFields=[];
  customFieldOptionList=[];
  price = []
  strating_price:any = [];
  final_array:any = [];
  name;
  b= []
  c= []
  d =[]
  e=[]
  f=[]
  g=[]
  p =[]
  q =[]
  r =[]
  s=[]
  t=[]
  u=[]
  v=[]

  delivery_type= []
  payment_terms = []
  travel_cost = []
  experien = []

  a_lable:string
  b_lable:string
  c_lable:string
  d_lable:string
  e_lable:string
  f_lable:string
  g_lable:string

  jsonadata:any;
  constructor(public http: Http)
  {

    this.data = {};
  
  }  

  ngOnInit() {  
            
           
              $.getScript('./assets/js/vertical-timeline.js');
              $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
              $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
              $.getScript('./assets/js/vendorsidebar.js');

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


          this.http.get(this.userservesicege,{headers:headers}).subscribe(data =>{console.log(data.json())
            this.User_services = data.json();
          });

          this.http.get(this.serveiceget,{headers:headers}).subscribe(data =>{
            this.categoryserveice = data.json() as string[]
            console.log( this.categoryserveice);
            for(var i = 0; i < this.categoryserveice.length; i++){
              this.min = this.categoryserveice[i]; 
              if(this.min.categoryId == categoryid )
              { //alert("dfdf");
              this.first_category = this.min;
              this.service_data = this.categoryserveice[i];
              this.services_all = this.service_data['services']
              this.costserviceTrue = true;
              }
            }
          });



       
  }
  onSelectionChange(entry){
    this.selectedEntry = entry;
    console.log(this.selectedEntry)
  }
  showContent(){
  
    this.showcontent =this.readioSelected;
    this.service_data = this.categoryserveice[this.readioSelected];
    console.log(this.service_data );
    this.services_all = this.service_data['services']
    console.log(this.service_data);
    this.costserviceTrue = true;
  }
  
  serv_all(data){
    console.log(data) 
    console.log(this.readioSelected_serv )
  }
  selection(data){
    $('.field').show();
    console.log(data);
   // this.selectedservices = data.servicesId;
   // console.log( this.selectedservices);
    this.customFields = data['customFields']
   // console.log(this.customFields)
    this.strating_price = this.customFields[0]
    this.a_lable = this.strating_price['name'];
    this.p = this.strating_price['customFieldOptionList']


    // this.b = this.customFields[1]
    // this.b_lable = this.b['name'];
    // this.q = this.b['customFieldOptionList']


    // this.c = this.customFields[2]
    // this.c_lable = this.c['name'];
    // this.r = this.c['customFieldOptionList']

    // this.d = this.customFields[3]
    // this.d_lable = this.d['name'];
    // this.s = this.d['customFieldOptionList']

    
    // this.e = this.customFields[4]
    // this.e_lable = this.e['name'];
    // this.t = this.e['customFieldOptionList']

    // this.f = this.customFields[5]
    // this.f_lable = this.f['name'];
    // this.u = this.f['customFieldOptionList']


    // this.g = this.customFields[6]
    // this.g_lable = this.g['name'];
    // this.v = this.g['customFieldOptionList']
  }

  checkbox(l){
    console.log(l.key) 
    console.log(l.customFieldId) 

    this.final_array.push({customFieldId: l.customFieldId , userValue: l.key});


  }

  serveicedata(service){
    console.log(service.value);
    console.log(service.value.serviceId  );
    console.log( this.final_array);
   
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);

     this.http.post(this.serveicepost,{ 
                                        ServicesId: service.value.serviceId,
                                        ServiceFields: this.final_array
                                   },
            {headers:headers}).subscribe(data =>{console.log( data.json()) 
              this.ngOnInit();
             
            
            },error => {console.log(error)});
           
          }

  arrayEmpty(){

  
    this.services_all = []
    this.costserviceTrue = false

    this.a_lable = ''
    this.strating_price = []
    this.p = []
    
    this.b_lable = ''
    this.q = []
    this.b = []

    this.c_lable = ''
    this.r = []
    this.c = []
    
    this.d_lable = ''
    this.s = []
    this.d = []
    
    this.e_lable = ''
    this.t = []
    this.e = []

    this.f_lable = ''
    this.u = []
    this.f = []

    this.g_lable = ''
    this.v = []
    this.g = []
    
  }


  showDropDown(){}

}

