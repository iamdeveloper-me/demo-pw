import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { Http,Headers } from '@angular/http';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { apiService } from '../../shared/service/api.service';
// Add the RxJS Observable operators we need in this app.


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [NgbCarouselConfig]
})

export class DashboardComponent implements OnInit {
  jobArray:string[];
  images_colour = false ;
  VendorDashboard_data_image;
    // PhoneEdit = '5555555' ;
    private urll: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/';
    angularLogo = 'https://s3.us-east-2.amazonaws.com/prefect-image/deco4.jpg';
    private urlget: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/mylocations'
    constructor( private apiService: apiService,config: NgbCarouselConfig ,public http: Http ,private router: Router) {
      
    //config.interval = 10000;
   // config.wrap = false;
    //config.keyboard = false;
  }

  private membershipurl : string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/mymembership'
  // membershipdetail : any = {
  //   startDateString:'',
  //   endDateString:'',
  //   pricingPlan: {title: ''},
  // };
//membership api
myplans:any = {}; 
  pricing:any = [];
  palnvoucher:any;
  vo = {Voucher: ""}
  statdate;
  endDateString;
  pricingPlantitle;
  account_create_date;
  // pricingPlanId:number;
  payFrequency:number;

  location_Array: Array<any>;
  location_Array_length;
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
  pricingPlanId = {pricingPlanId:''};
  tradingName;
  add;
  ph;
  mb;
  ct;
  images_dialog = false;
  total_phone_no;
  priceplantitle;
  isPrimary;
  test = 12.5;
  test1 = 0;
  albumCount;
  totaljobArray;
  noPhone;
  banner_image;
  VendorDashboard_data = {portfolioImage : '',portfolioCount: '',albumImageCount:'',
  videoCount : '',albumCount: '',impression: '',enquiries: '',loveCount: '',reviews: ''};
  //VendorDashboard
  vendorUniqueId
  baseUrl = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/'
  // Context and manual triggers section
  @ViewChild('x') public tooltip: NgbTooltip;
   private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/myprofile'
  private dashboard: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/VendorDashboard/EnquiriesAndLeads'
  private images: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/allimages'

  private VendorDashboard:string = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/VendorDashboard/Home";
  private geturl: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/VendorJobs/myjobs';
  vendor: any = {suburb:
    {suburbId: '', districtId: '', name: ""}};
  bussiness_name;
  image_data:number;
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
        this.http.get(this.images,{headers:headers}).subscribe(data =>{
        this.image_data = data.json();
          console.log(data.json());
       
         });
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

              //membership api
    this.http.get(this.membershipurl,{headers:headers}).subscribe(
      data =>{  
               console.log(data.json());
              // this.membershipdetail = data.json();
              this.myplans = data.json();
              this.statdate = data.json().startDateString;
              this.endDateString   = data.json().endDateString; 
              this.pricingPlantitle   = data.json().pricingPlan.title;
              this.pricingPlanId   = data.json().pricingPlanId;
              this.payFrequency = data.json().payFrequency;
              this.account_create_date = data.json().dateAddedOn;
      });

        if(!authToken) 
       {  this.router.navigate(['../home']);
        }

        this.http.get(this.url,{headers:headers}).subscribe(
          data =>{ this.vendor = data.json();
                  this.bussiness_name = data.json().nameOfBusiness,
                  this.pricingPlanId = this.vendor.pricingPlan;
                  this.priceplantitle = this.vendor.pricingPlan.title
                  this.add = this.vendor.vendorLocations[0].mapAddress;
                  this.noPhone = this.vendor.vendorLocations[0].locationPhones[0].phoneNumber.length;
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
                
                   this.vendor_board()

                    //EnquiriesAndLeads
                    this.http.get(this.dashboard,{headers:headers}).subscribe(
                      data =>{  
                              this.dashboard = data.json();
                             });

                      this.http.get(this.VendorDashboard,{headers:headers}).subscribe(
                        data =>{  
                                 console.log(data.json());
                                //  this.venderDash = data.json() as string[]; 
                                this.VendorDashboard_data = data.json();
                                this.VendorDashboard_data_image = data.json().portfolioImage;
                               
                        });


 




                  $.getScript('./assets/js/prism.min.js');
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
          
          this.http.get(this.urlget, { headers: headers }).subscribe((data) => {
            this.location_Array = data.json();
            this.location_Array_length = this.location_Array.length;
            this.location_Array.sort(p=>p.isPrimary).reverse();
            this.location_Array[0].locationPhones.reverse();
            console.log(JSON.stringify(this.location_Array));
          });
        
        }

        getEvents(){
    
          let headers = new Headers();
          var authToken = localStorage.getItem('userToken');
          headers.append('Accept', 'application/json')
          headers.append('Content-Type', 'application/json');
          headers.append("Authorization",'Bearer '+authToken);
        
         
        }

        closeModel(){
          this.images_dialog = false;
        }

        setportfolio_image(image){ 
          let headers = new Headers();
          var authToken = localStorage.getItem('userToken');
        
            $("img").addClass("greentext");
       
          headers.append('Accept', 'application/json')
          headers.append('Content-Type', 'application/json');
          headers.append("Authorization",'Bearer '+authToken);

          if(image.type == 'Portfolio'){
            this.http.get(this.urll+'api/supplier/setasstorefrontimage?PortfolioId'+ '=' + image.id,{headers:headers}).subscribe(data =>{
            
              console.log(data.json());
                    this.getstoreimage();
                    this.vendor_board()
             });
          }else{
            this.http.get(this.urll+'/api/albums/setasstorefrontimage?AlbumImageId'+'='+image.id,{headers:headers}).subscribe(data =>{
          
              console.log(data.json());
              this.getstoreimage();
              this.vendor_board();
            
             });
          }
         

        }


        getstoreimage(){
          let headers = new Headers();
          var authToken = localStorage.getItem('userToken');
          
          headers.append('Accept', 'application/json')
          headers.append('Content-Type', 'application/json');
          headers.append("Authorization",'Bearer '+authToken);
          this.http.get(this.VendorDashboard,{headers:headers}).subscribe(
            data =>{  
                  console.log(data.json())
                    this.VendorDashboard_data_image = data.json().portfolioImage;
                    this.banner_image = "../../../assets/img/store_noimg.jpg"
                    this.images_dialog = false;
            });
        }
        freeuser(){
          this.pricingPlanId
         
          if(this.pricingPlanId.pricingPlanId == '1' ){
            swal({
              title: "Want to unlock this feature?",
          text: "Choose a different subscription plan",
          type: "warning",
          showCancelButton: true,
          confirmButtonClass: "btn-default",
          confirmButtonText: "View Plans",
          }).then((res)=>{
            if(res.value===true){
              this.router.navigate(['../vendor/membership'])
          }

            },error=>{
              alert(JSON.stringify(error));
          })
            return;    
          
          }
          else{
            this.router.navigate(['../vendor/albumview'])
           
          }                   
        } 
         
        vendor_board(){
                             let headers = new Headers();
                            var authToken = localStorage.getItem('userToken');
                            headers.append('Accept', 'application/json')
                            headers.append('Content-Type', 'application/json');
                            headers.append("Authorization",'Bearer '+authToken);
                          
                           
                                   this.http.get(this.VendorDashboard,{headers:headers}).subscribe(
                                      data =>{  console.log(data.json().profileCompletion);
                                                console.log(data.json().profileCompletion.total);
                                      
                                            this.total = data.json().profileCompletion.total;
                                        
                                           var profile = localStorage.getItem('profile');
                                            if( profile == '1' && this.total == '100')
                                            {
                                              localStorage.setItem('profile','2');
                                           
                                            swal({
                                              title: "Profile Completed",
                                          text: "Thankyou!",
                                          type: "warning",
                                          showCancelButton: false,
                                          confirmButtonClass: "btn-default",
                                          confirmButtonText: "OK",
                                          cancelButtonText: "Cancel!",  

                                      // }).then((res)=>{
                                      //                 if(res.value===true){
                                      //                   this.router.navigate(['../vendor/membership']);
                                      //                }

                                          }).then((res)=>{
                                            $(".profile").hide();
                          
                                            },error=>{
                                              alert(JSON.stringify(error));
                                          })
                                            return;
                                          } 

                                          if( profile == '2'){
                                            $(".profile").hide();
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

        }
        goToLink(){
         
          alert("Boom!");
          this.apiService.getData(this.apiService.serverPath+'PerfectWedding/storefrontview').subscribe(data => {
            console.log(data)
            this.vendorUniqueId = data.vendorUniqueId;
            console.log(this.vendorUniqueId)
            this.apiService.getData(this.apiService.serverPath+'VendorDashboard/Home').subscribe(data => {
              console.log(data)
              this.total = data.profileCompletion.total;
                                          
              console.log(  this.total)
              if( this.total ==100){
                alert("sdfgvsdf");
               
              console.log(this.vendorUniqueId)
              let url ="../../home/detailprofile/"+this.vendorUniqueId
              console.log(url)
              //window.open(url, "_blank");
              this.router.navigate([url])
              }else{
                swal({
                  title: "Profile Not Completed add Listing is not active",
              text: "Thankyou!",
              type: "warning",
              showCancelButton: false,
              confirmButtonClass: "btn-default",
              confirmButtonText: "OK",
              cancelButtonText: "Cancel!",  
              }).then((res)=>{
                this.router.navigate(['../vendor/membership'])
                },error=>{
                 
              })
                return;
              }
            },
              error => {
               console.log(error)
              }
            )
          },
            error => {
             console.log(error)
            }
          )
     

          // setTimeout(function(){
           
         
            
          // }, 2000);
      
       

        }
                        
                    
}

