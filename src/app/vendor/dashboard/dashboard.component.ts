import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { Http,Headers } from '@angular/http';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

// Add the RxJS Observable operators we need in this app.


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [NgbCarouselConfig]
})

export class DashboardComponent implements OnInit {
  jobArray:string[];


    // PhoneEdit = '5555555' ;

    angularLogo = 'https://s3.us-east-2.amazonaws.com/prefect-image/deco4.jpg';
    
    constructor(config: NgbCarouselConfig ,public http: Http ,private router: Router) {
      
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  }

  private membershipurl : string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/mymembership'
  membershipdetail : any = {
    startDateString:'',
    endDateString:'',
    pricingPlan: {title: ''},
  };
//membership api

  x: any;
  greeting = {};
  name = 'World';
  total;
  total_business_Services;
  buinessPhone;
  businessProfilePic;
  businessService;
  coverImage;
  description;
  mapSettings;
  photos;
  pricingPlanId;
  tradingName;
  add;
  ph;
  mb;
  ct;
  total_phone_no;
  priceplantitle;
  isPrimary;
  test = 12.5;
  test1 = 0;
  albumCount;
  totaljobArray;
  VendorDashboard_data = {portfolioImage : '',portfolioCount: '',
  videoCount : '',albumCount: '',impression: '',enquiries: '',loveCount: '',reviews: ''};
  //VendorDashboard
  
  baseUrl = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/'
  // Context and manual triggers section
  @ViewChild('x') public tooltip: NgbTooltip;
   private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/myprofile'
  private dashboard: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/VendorDashboard/EnquiriesAndLeads'
 
  private VendorDashboard:string = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/VendorDashboard/Home";
  private geturl: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/VendorJobs/myjobs';
  vendor: any = {suburb:
    {suburbId: '', districtId: '', name: ""}};

  public changeGreeting(greeting: any): void {
    const isOpen = this.tooltip.isOpen();
    this.tooltip.close();
    if (greeting !== this.greeting || !isOpen) {
      this.greeting = greeting;
      this.tooltip.open(greeting);
    }
  }
 // supArray:string[];  
      ngOnInit()  {
     
        let headers = new Headers();
        var authToken = localStorage.getItem('userToken');
        headers.append('Accept', 'application/json')
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization",'Bearer '+authToken);
        this.http.post(this.geturl,{ filter: 2 },{headers:headers}).subscribe(data =>{
          this.jobArray = data.json(); 
          console.log(this.jobArray);
          this.totaljobArray =   this.jobArray.length; 
          console.log( this.totaljobArray);
         });
        this.http.get(this.dashboard,{headers:headers}).subscribe((data)=> 
        {

          // console.log(data.json());
          });


        if(!authToken) 
       {  this.router.navigate(['../home']);
        }

        this.http.get(this.url,{headers:headers}).subscribe(
          data =>{ this.vendor = data.json();
                   console.log(this.vendor);
                   if(!this.vendor.profileImage )
                   {
                  
                   this.vendor.profileImage = "https://openclipart.org/download/247324/abstract-user-flat-1.svg"
                  }

                  this.priceplantitle = this.vendor.pricingPlan.title


                   this.add = this.vendor.vendorLocations[0].mapAddress;
                  
                  //  console.log(this.vendor.vendorLocations[0].locationPhones[0].phoneNumber);
                 
                  if(this.vendor.vendorLocations[0].locationPhones.length > 1){
                    this.ph = this.vendor.vendorLocations[0].locationPhones.length-1;
                  }else{
                    this.ph = 0;
                  }
               
                  
               
                  if(this.vendor.vendorCategories.length > 1){
                    this.total_business_Services = this.vendor.vendorCategories.length-1;
                  }else{
                    this.total_business_Services = 0;
                  }
                  this.total_phone_no = Math.abs(this.vendor.vendorLocations.length ); 
                   
                    console.log(this.total_phone_no);

                    if(this.vendor.vendorLocations.length > 1){
                      this.ct = this.vendor.vendorLocations.length-1;
                    }else{
                      this.ct = 0;
                    }
                 

                   localStorage.setItem('categoryid',data.json().vendorCategories[0].categoryId);
                   localStorage.setItem('firstName',data.json().firstName);
                   localStorage.setItem('countryid',data.json().countryId);
                   localStorage.setItem('vendorid',data.json().vendorId);
                   localStorage.setItem('basic-plan',data.json().pricingPlan.pricingPlanId);
                 
                   
                 
           
    
                 });

                 this.http.get(this.VendorDashboard,{headers:headers}).subscribe(
                    data =>{  console.log(data.json().profileCompletion);
                              console.log(data.json().profileCompletion.total);
                    
                          this.total = data.json().profileCompletion.total;

                          if(this.total == '100')
                          {
                          
                          
                        
                          swal({
                            title: "Are you sure?",
                        text: "profile completed",
                        type: "warning",
                        showCancelButton: true,
                      
                        }).then((res)=>{
                          $(".profile").hide();
        
                          },error=>{
                            alert(JSON.stringify(error));
                        })
                          return;
                        } 
                          this.buinessPhone = data.json().profileCompletion.buinessPhone;
                          this.businessProfilePic = data.json().profileCompletion.businessProfilePic;
                          this.businessService = data.json().profileCompletion.businessService;
                          this.coverImage = data.json().profileCompletion.coverImage;
                          this.description = data.json().profileCompletion.description;
                          this.mapSettings = data.json().profileCompletion.mapSettings;
                          this.photos = data.json().profileCompletion.photos;
                          this.tradingName = data.json().profileCompletion.tradingName;
                    } , error=>{console.log(error)});

                    //EnquiriesAndLeads
                    this.http.get(this.dashboard,{headers:headers}).subscribe(
                      data =>{  
                              // console.log("zxdfdsf");

                              //  console.log(data.json());

                              this.dashboard = data.json();
                
                      });

                      this.http.get(this.VendorDashboard,{headers:headers}).subscribe(
                        data =>{  


                                 console.log(data.json());
                                //  this.venderDash = data.json() as string[]; 
                                this.VendorDashboard_data = data.json();
                                                       
                        });

                  $.getScript('./assets/js/prism.min.js');
             //     $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
              //    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');

             //     $.getScript('https://www.jssor.com/script/jssor.slider-27.4.0.min.js');

                  $.getScript('./assets/js/owljsor.js');
                  $.getScript('./assets/js/vendorsidebar.js');
                
          // 
          function testAnim(x) {
            $('.modal .modal-dialog').addClass('animated');
            $('.modal .modal-dialog').addClass('bounceIn');
          };
          $('#BusinessCover').on('show.bs.modal', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#BusinessCover').on('hide.bs.modal', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })
          $('#Description').on('show.bs.modal', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#Description').on('hide.bs.modal', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })
          $('#Photos').on('show.bs.modal', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#Photos').on('hide.bs.modal', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })
          $('#Service').on('show.bs.modal', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#Service').on('hide.bs.modal', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })
          $('#Location').on('show.bs.modal', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#Location').on('hide.bs.modal', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })
          $('#camera').on('show.bs.modal', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#camera').on('hide.bs.modal', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })
          $('#PhoneEdit').on('show.bs.modal', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#PhoneEdit').on('hide.bs.modal', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })
          $('#currentLocation').on('show.bs.modal', function (e) {
            var anim = $('#entrance').val();
                testAnim(anim);
          })
          $('#currentLocation').on('hide.bs.modal', function (e) {
            var anim = $('#exit').val();
                testAnim(anim);
          })
           
          if(window.location.pathname == '/vendor/dashboard' )
          { $("body").removeClass( "modal-open");
            $("div").removeClass( "modal-backdrop"); 
            $("body").css({ 'padding-right' : '' });
          }
          
          var acc = document.getElementsByClassName("accordion");
          var i;

          for (i = 0; i < acc.length; i++) {
              acc[i].addEventListener("click", function() {
                  /* Toggle between adding and removing the "active" class,
                  to highlight the button that controls the panel */
                  this.classList.toggle("active");

                  /* Toggle between hiding and showing the active panel */
                  var panel = this.nextElementSibling;
                  if (panel.style.display === "block") {
                      panel.style.display = "none";
                  } else {
                      panel.style.display = "block";
                  }
              });
          }
    
        
        }

        getEvents(){
    
          let headers = new Headers();
          var authToken = localStorage.getItem('userToken');
          headers.append('Accept', 'application/json')
          headers.append('Content-Type', 'application/json');
          headers.append("Authorization",'Bearer '+authToken);
        
         
        }
}

