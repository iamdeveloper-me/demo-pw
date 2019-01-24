import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { apiService } from '../../shared/service/api.service';
// Add the RxJS Observable operators we need in this app.

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  jobArray:string[];
  VendorDashboard_data_image;
  myplans:any = []; 
  location_Array: Array<any>;
  location_Array_length;
  x: any;
  greeting = {};
  total;
  buinessPhone;
  businessProfilePic;
  businessService;
  coverImage;
  description;
  mapSettings;
  photos;
  pricingPlanId = {pricingPlanId:''};
  tradingName;
  ph;
  ct;
  images_dialog = false;
  isPrimary;
  test = 12.5;
  test1 = 0;
  totaljobArray;
  noPhone;
  VendorDashboard_data = {portfolioImage : '',portfolioCount: '',albumImageCount:'',
  videoCount : '',albumCount: '',impression: '',enquiries: '',loveCount: '',reviews: ''};
  vendor: any = {suburb: {suburbId: '', districtId: '', name: ""}};
  bussiness_name;
  image_data:number;
  constructor( private apiService: apiService,private router: Router) {
      this.memberShip();
      this.vendor_board();
      this.apiService.getData(this.apiService.serverPath+'Supplier/allimages').subscribe(
        data =>{ this.image_data = data ; }, error=>{console.log(error)});

      this.apiService.getData(this.apiService.serverPath+'Supplier/myprofile').subscribe(
      data =>{ this.vendor = data
                this.bussiness_name = data.nameOfBusiness,
                this.pricingPlanId = this.vendor.pricingPlan;
                this.noPhone = this.vendor.vendorLocations[0].locationPhones[0].phoneNumber.length;
              
                if(this.vendor.vendorLocations[0].locationPhones.length > 1){
                  this.ph = this.vendor.vendorLocations[0].locationPhones.length-1;
                }else{
                  this.ph = 0;
                }
                  if(this.vendor.vendorLocations.length > 1){
                    this.ct = this.vendor.vendorLocations.length-1;
                  }else{
                    this.ct = 0;
                  }
               
                 localStorage.setItem('categoryid',data.vendorCategories[0].categoryId);
                 localStorage.setItem('firstName',data.firstName);
                 localStorage.setItem('countryid',data.countryId);
                 localStorage.setItem('vendorid',data.vendorId);
                 localStorage.setItem('basic-plan',data.pricingPlan.pricingPlanId);
               
      }, error=>{console.log(error)});

      this.apiService.getData(this.apiService.serverPath+'VendorDashboard/Home').subscribe(
      data =>{      
                this.VendorDashboard_data = data
                this.VendorDashboard_data_image = data.portfolioImage;           
      }, error=>{console.log(error)});     

      this.apiService.getData(this.apiService.serverPath+'Supplier/mylocations').subscribe(
      data => {
        debugger;
                this.location_Array = data;
                let temp_locationArray = this.location_Array.filter(l=>l.data.address!==null);
                this.location_Array.forEach(element => {
                  if(element.data.address!=null){
                    element.data.address?element.data.address+' ,':'' ;
                  }
                  if(element.data.suburb.name!=null){
                    element.data.suburb.name?element.data.suburb.name+' ,':'' ;
                  }
                  if(element.data.districts.name!=null){
                    element.data.districts.name?element.data.districts.name+ ',':'' ;
                  }
                  
                });
                this.location_Array_length = this.location_Array.length;
                this.location_Array.sort(p=>p.isPrimary).reverse();
                this.location_Array[0].locationPhones.reverse();
      }, error=>{console.log(error)});     
          
      this.apiService.postData(this.apiService.serverPath+'VendorJobs/myjobs',{filter: 2}).subscribe(
        data =>{
          this.jobArray = data; 
          this.totaljobArray =   this.jobArray.length; 
        }, error=>{console.log(error)}); 
  }
        ngOnInit()  {
        var authToken = localStorage.getItem('userToken');
        if(!authToken){  this.router.navigate(['../home']); }
        $.getScript('./assets/js/prism.min.js');
        $.getScript('./assets/js/owljsor.js');
        $.getScript('./assets/js/vendorsidebar.js');
                
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
        //ngOnInit End
        memberShip(){
                      this.apiService.getData(this.apiService.serverPath+'Supplier/mymembership').subscribe(data => {
                      this.myplans = data; },
                      error => {console.log(error) }); 
        }
        closeModel(){
          this.images_dialog = false;
        }
        setportfolio_image(image){ 
         $("img").addClass("greentext");
         console.log(image.type)
         if(image.type == 'Portfolio'){
          
            this.apiService.getData(this.apiService.serverPath+'supplier/setasstorefrontimage?PortfolioId'+ '=' + image.id).subscribe(data =>{
              console.log(data)
              this.vendor_board()
             }, error=>{console.log(error)});
         }else{
            this.apiService.getData(this.apiService.serverPath+'albums/setasstorefrontimage?AlbumImageId'+ '=' + image.id).subscribe(data =>{
              console.log(data)
              this.vendor_board();
             }, error=>{console.log(error)});
          }
        }
        vendor_board(){
                        this.apiService.getData(this.apiService.serverPath+'VendorDashboard/Home').subscribe(
                          data =>{ 
                                    console.log(data)
                                    this.VendorDashboard_data_image = data.portfolioImage;
                                    this.images_dialog = false;
                                    this.total = data.profileCompletion.total;
                                    var profile = localStorage.getItem('profile');
                                    if( profile == '1' && this.total == '100'){
                                              localStorage.setItem('profile','2');
                                            
                                            swal({
                                              title: "Profile Completed",
                                          text: "Thankyou!",
                                          type: "warning",
                                          showCancelButton: false,
                                          confirmButtonClass: "btn-default",
                                          confirmButtonText: "OK",
                                          cancelButtonText: "Cancel!",  

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
                                    this.buinessPhone = data.profileCompletion.buinessPhone;
                                    this.businessProfilePic = data.profileCompletion.businessProfilePic;
                                    this.businessService = data.profileCompletion.businessService;
                                    this.coverImage = data.profileCompletion.coverImage;
                                    this.description = data.profileCompletion.description;
                                    this.mapSettings = data.profileCompletion.mapSettings;
                                    this.photos = data.profileCompletion.photos;
                                    this.tradingName = data.profileCompletion.tradingName;
                          } , error=>{console.log(error)});
        }
        goToLink(){
                    this.apiService.getData(this.apiService.serverPath+'PerfectWedding/storefrontview').subscribe(
                      data => {
                              this.apiService.getData(this.apiService.serverPath+'VendorDashboard/Home').subscribe(
                                  data => { 
                                            this.total = data.profileCompletion.total;
                                            if( this.total ==100){
                                                                  let url ="../../home/detailprofile/"+data.vendorUniqueId
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
                                                                              },error=>{ })
                                                                          return;
                                            }
                                },
                                  error => { console.log(error) })
                      },  error => { console.log(error) } )
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
                              if(res.value===true){ this.router.navigate(['../vendor/membership'])}
            },error=>{ alert(JSON.stringify(error));})
            return;    
          }else{this.router.navigate(['../vendor/albumview'])}                   
        }           
}

