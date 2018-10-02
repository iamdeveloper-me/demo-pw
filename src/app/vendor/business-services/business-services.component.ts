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
  cardtitle:string;
  costserviceTrue:boolean = false;
  // toggle
  optionone:boolean = false;
  optiontwo:boolean = false;
  optionthree:boolean = false;
  optionfour:boolean = false;
  optionfive:boolean = false;
  optionsix:boolean = false;
  optionseven:boolean = false;
  private urlget: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/LookupMaster/services'
  private serveiceget: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Categories/categorieswithservices'
  
  
  data: any;
  categoryId;
 
  selectedEntry;
  
  Services = [];
  categoryserveice = [];
  services_all =[]
  Price = '12$';
  photo_ved = '344$'; photo_off = '45$'; travel = '233$'; payment='24$'; 
  experience = '1 Year'; photod = '24$' ;
  prewed = '556$'; studio= "45$" ;cinema = '23$'; candid = '44$ ' ;

  readioSelected:any;
  readioSelected_serv:boolean;
  RoleServiceService:any
  showcontent:boolean=false;
  checkboxarry =[] ;
  service_data:any;
  field_length=[]
  customFields=[];
  customFieldOptionList=[];
  price = []
  strating_price:any = [];
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
  constructor(public http: Http)
  {

    this.data = {};
  
  }  
 




  ngOnInit() {

    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
  
    this.http.get(this.urlget,{headers:headers}).subscribe(data =>{
    
    console.log(data.json());
    
    this.Services = data.json() as string[]
    this.cardtitle = 'Api for get service data when registration';
    console.log(data['data']);
    console.log(this.categoryId);

  });


  this.http.get(this.serveiceget,{headers:headers}).subscribe(data =>{
    
    console.log(data.json());
    this.categoryserveice = data.json() as string[]
    //debugger
  });

  

  $.getScript('./assets/js/vertical-timeline.js');
  // $.getScript('./assets/js/profile.js'); 
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
  $.getScript('./assets/js/vendorsidebar.js');



   $(document).on('click', ".saveall", function() {
      //alert("hi")
      // $(this).parents('.modal').modal('toggle');
      // $(this).parents('.modal').removeClass('show');
      // $(this).parents('.modal').modal('hide');
      $(this).parents('.modal').css("display", "none");
      $(this).parents('.modal').removeClass("show");
      $('.modal-backdrop').hide();
      $('.modal-backdrop').removeClass("fade");
      $('.modal-backdrop').removeClass("show");
      $('body').removeClass("modal-open");



    })

  }
  onSelectionChange(entry){
    this.selectedEntry = entry;
    console.log(this.selectedEntry)
  }
  showContent(){
    this.showcontent=this.readioSelected;
    this.cardtitle = this.categoryserveice[this.readioSelected].categoryName
    this.service_data = this.categoryserveice[this.readioSelected];
    this.services_all = this.service_data['services']
    this.costserviceTrue = true;
  }
  
  serv_all(data){
    console.log(data) 
    console.log(this.readioSelected_serv )
  }
  selection(data){
    this.customFields = data['customFields']
    console.log(this.customFields)
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

  checkbox(data){
    
if(this.customFieldOptionList.length > 0  ){
    for (let i in this.customFieldOptionList)
    {
      alert("qqqqf"+i);
      if(this.customFieldOptionList[i].customFieldId == data.customFieldId)
        {
        alert("dff"+this.customFieldOptionList[i].customFieldId+"="+data.customFieldId);
        this.customFieldOptionList[i].splice(i, 1);
        const index = this.customFieldOptionList.indexOf(i);
        this.customFieldOptionList.splice(index, 1);
        console.log(this.customFieldOptionList)
        }
      }
      
    }
    this.customFieldOptionList.push(data);
 

  console.log(data);
    
  //this.customFieldOptionList.push(data);
   console.log(this.customFieldOptionList)
    // this.listOfLanguagues.splice(index, 1);
   
    // this.strating_price = this.customFields[0]
    // this.a_lable = this.strating_price['name'];
    // this.p = this.strating_price['customFieldOptionList']

  }

  serveicedata(service){}
  // option_one(){
  //   this.optionone = !this.optionone;
  // }
  // option_two(){
  //   this.optiontwo = !this.optiontwo;
  // }
  // option_three(){
  //   this.optionthree = !this.optionthree;
  // }
  // option_four(){
  //   this.optionfour = !this.optionfour;
  // }
  // option_five(){
  //   this.optionfive = !this.optionfive;
  // }
  // option_six(){
  //   this.optionsix = !this.optionsix;
  // }
  // option_seven(){
  //   this.optionseven = !this.optionseven;
  // }
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
}

