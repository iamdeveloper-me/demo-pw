import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
@Component({
  selector: 'app-business-services',
  templateUrl: './business-services.component.html',
  styleUrls: ['./business-services.component.scss'],

})
export class BusinessServicesComponent implements OnInit {


   private serveiceget: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Categories/categorieswithservices'
   private serveicepost: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/savebusinessservices'
   private userservesicege:string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/businessservices'
  

  
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
  constructor(public http: Http)
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


          this.http.get(this.userservesicege,{headers:headers}).subscribe(data =>{console.log(data.json())
            this.User_services = data.json();
          });

          this.http.get(this.serveiceget,{headers:headers}).subscribe(data =>{
            this.categoryserveice = data.json() as string[];
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
    console.log(data);
    this.pricelist = data.name;
    this.pricelistArray = data.customFieldOptionList;
    console.log(this.pricelistArray);
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

}



