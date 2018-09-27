import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
@Component({
  selector: 'app-business-services',
  templateUrl: './business-services.component.html',
  styleUrls: ['./business-services.component.scss'],

})
export class BusinessServicesComponent implements OnInit {



  private urlget: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/LookupMaster/services'
  private serveiceget: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Categories/categorieswithservices'
  
  
  data: any;
  // serviceArray:any= {};
  selectedEntry;
  Services = [];
  categoryserveice = [];
  services_all =[]
  Price = '12$';
  photo_ved = '344$'; photo_off = '45$'; travel = '233$'; payment='24$'; 
  experience = '1 Year'; photod = '24$' ;
  prewed = '556$'; studio= "45$" ;cinema = '23$'; candid = '44$ ' ;

  readioSelected:any;
  readioSelected_serv:any
  showcontent:boolean=false;

  service_data:any;
  field_length=[]
  customFields:[];
  price = []
  strating_price= []
  b= []
  c= []
  p =[]
  q =[]
  r =[]

  delivery_type= []
  payment_terms = []
  travel_cost = []
  experien = []
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
  });

  this.http.get(this.serveiceget,{headers:headers}).subscribe(data =>{
    
    console.log(data.json());
    this.categoryserveice = data.json() as string[]
    debugger
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
    console.log(this.readioSelected)
    console.log(this.categoryserveice[this.readioSelected])
    this.service_data = this.categoryserveice[this.readioSelected];
     this.services_all = this.service_data['services']
     console.log(this.services_all)
  }
  
  serv_all(data){
    console.log(data) 
    console.log(this.readioSelected_serv )
  }
  selection(data){
    this.customFields = data['customFields']
    console.log(this.customFields)
    this.strating_price = this.customFields[0]

    this.p = this.strating_price['customFieldOptionList']


    this.b = this.customFields[1]

    this.q = this.b['customFieldOptionList']


    this.c = this.customFields[2]

    this.r = this.c['customFieldOptionList']
  }
}

