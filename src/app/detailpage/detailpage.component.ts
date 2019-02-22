import { Component, OnInit, ViewChild, ElementRef,NgZone } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { apiService } from 'app/shared/service/api.service';
import{ratingStars} from '../ngservices/ratingstars';
import { Router, ActivatedRoute } from '@angular/router';
import { MasterserviceService } from 'app/ngservices/masterservice.service';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import { utilities } from 'app/utilitymodel';
import { Meta, Title } from '@angular/platform-browser';
import { ContactUsVM } from '../advertise/advertise.component';
import { filterParam } from '../vendorcard/vendorcard.component'
import { SignupVendorService } from 'app/shared/service/signup-vendor.service';
import { LoginServiceService } from 'app/shared/service/login-service.service';
import { SlidesOutputData } from 'ngx-owl-carousel-o';
import '../../assets/js/icon';
declare var google: any;

interface Marker {lat: number;lng: number;label?: string;draggable: boolean;}

interface Location {
  lat: number;lng: number;viewport?: Object;zoom: number;
  address_level_1?: string;address_level_2?: string;address_country?: string;
  address_zip?: string;address_state?: string;marker?: Marker;
}
@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss'],
  providers: [apiService],
})
export class DetailpageComponent implements OnInit {
 
  customOptions: any = {
    margin: 0,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: { 0: { items: 1, stagePadding: 10 }, 768: { items: 1, stagePadding: 10 }, 1024: { items: 1 }, 1366: { items: 1 } },
    nav: false,
  }
  templateText:string = '“Hi, I would like to know more about your services and offers for my upcoming wedding event.Please let me know of a suitable time to discuss. Thank you. “'
  usercouple = {username:'',password:''}
  user = {username:'',password:''}
  error = {} ;
  activeSlides: SlidesOutputData;
  lat: number = 51.678418;
  role:string;
  lng: number = 7.809007;
  MessagesVMObj  = new MessagesVM();
  contactInfoObj: ContactUsVM;
  MemberSince:string;
  vendorid ;
  responce_review = true;
  responce_thanks = false;
  showLoader: boolean = true;
  sliderImgaes: any = [];
  trading_hours_popups:any= {isMondayOpen: ''};
  report= false;
  succesfull_report = ""
  vendorId: number;
  public vendorDetails: any;

  showD:boolean = false
  businessServices_length ;
  portfolioAndAlbumImagesTotal: number = 0;
  similarVendors:any;
  ratingmodel: ratingStars;
  portfolioImages = [];
  lightBoxImages=[];
  similarVendors_length;
  user_login_token;
  userId;
  currentDate
  vendorVideo_details:any = [];
  CatName;
  phone_hover = false;
  public show: boolean = false;
  public hide: boolean = true;
  public buttonName: any = 'Show More';

  reviewButtonLabel= 'View All';
  dealButtonLabel= 'View All';
  vendorLocationsButtonLabel = 'View All'
  objFilterParam: filterParam;
  @ViewChild('albumgallarypopup') albumgallarypopup: ElementRef;
  @ViewChild(AgmMap) map: AgmMap;
  @ViewChild('gmapInput') gmapInput: ElementRef;
  constructor(public http: Http, 
              public toastr: ToastrService, 
              private apiService: apiService,
              private masterservice: MasterserviceService,
              public mapsApiLoader: MapsAPILoader,
              private router: Router,
              private meta : Meta,
              private title : Title,
              private uservice: SignupVendorService,
              private route : ActivatedRoute,
              private cservice: LoginServiceService
   ) { 
    this.MessagesVMObj.message ="Hi, I would like to know more about your services and offers for my upcoming wedding event Please let me know of a suitable time to discuss. Thank you ";

      this.ratingmodel = new ratingStars();
      this.contactInfoObj = new ContactUsVM();
      var dateObj = new Date();
      this.currentDate  = dateObj.getDay()  //months from 1-12
      this.role = (sessionStorage.getItem('role'))
      if(sessionStorage.getItem('role') == 'Users'){
        this.showD = true
      }else{
        this.showD = false
      }
      console.log(this.user_login_token);
      this.objFilterParam = new filterParam();
      this.route.paramMap.subscribe(params => {
        this.vendorid = params
          this.apiService.getData(this.apiService.serverPath+'PerfectWedding/vendordetails'+'?id='+this.vendorid.params.id).subscribe(data=>{    
            this.vendorDetails  = data;     
            console.log(  this.vendorDetails  )

            this.vendorDetails.vendorLocations.forEach((element,index) => {
              if(index<=2){ element.visible=true; 
              this.vendorLocationsButtonLabel='View All';
              }else{ element.visible=false; }
              });
              
            for (let cat of this.vendorDetails.vendorCategories) {
              this.CatName = cat.categories.categoryName;
              console.log(this.CatName)
            }
              //Meta Tags
              this.title.setTitle(this.vendorDetails.nameOfBusiness + ` , ` + this.vendorDetails.district.name + ` , ` + this.CatName + ` | Perfect Weddings` );   
              this.meta.addTag({name:'description',content:'Team Contact | Perfect Weddings'});  

              this.vendorVideo_details = this.vendorDetails.vendorVideos.length;
              this.businessServices_length = this.vendorDetails.businessServices.length;

              this.getSimilarVendors();

              this.vendorDetails.vendorLocations.reverse();

              this.vendorDetails.albums.forEach(vendor => {
                if(vendor.albumImages != []){
                  vendor.albumImages.forEach(img => {
                  const data = {
                      "name" : vendor.albumName,
                      "image" : img.path,
                      "likeCounts": img.likeCounts
                    }
                    this.sliderImgaes.push(data);
                  });
                }
              });

              this.vendorDetails.portfolios.forEach(dxg => {
                const data = {
                    "name" : "PORTFOLIO",
                    "image" : dxg.path,
                    "likeCounts": dxg.likeCounts
                  }
                  this.sliderImgaes.push(data);   
              });

              this.vendorDetails.albums.forEach(element => {
                this.portfolioAndAlbumImagesTotal += element.albumImages.length ? element.albumImages.length : 0;
              });

              this.portfolioAndAlbumImagesTotal += this.vendorDetails.portfolios.length;

              this.vendorDetails.portfolios.forEach(element => {
                  this.portfolioImages.push(element.path);
              });
      },error =>{console.log(error)}); });
  }
  ngOnInit() {
    $('.weekdate').hide();
    $('.currentdate').show();
                $.getScript('./assets/js/prism.min.js');
                $.getScript('./assets/js/owljsor.js');
                $.getScript('./assets/js/curosselfun.js');
                $.getScript('./assets/js/detailpagescroll_active.js');
                $.getScript('https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.2/dist/jquery.fancybox.min.js');
                $("#Vediogallarypopup").on('hidden.bs.modal', function (e) {
                  $("#Vediogallarypopup iframe").attr("src", $("#Vediogallarypopup iframe").attr("src"));
                });
                $.getScript('./assets/js/prism.min.js');        
 
                
  }
  classAdd(item){
      //alert("hi");
      setTimeout(() => {
        $('.fancybox-toolbar').append('<a class="fancybox-button" title="Share" href="whatsapp://send?text=Text to send withe message: http://13.59.229.254"><i class="material-icons">share</i></a><button data-fancybox-zoom="" class="fancybox-button fancybox-button--share" title="Like"><i class="material-icons">favorite_border</i></button>')  
    }, 50);
  }
  review = { rating: '', comments: "", rateVendorID: '' }
  putReview(review) {
   
    
    if (!sessionStorage.getItem('userToken')) {
      this.toastr.error('Login To Give Your Review', 'Inconceivable!');
    }else{

    var rating1 = review.rating;
    var comments1 = review.comments;
    const a = {
      rating: rating1, 
      comments: comments1,
      rateVendorID:  this.vendorDetails.vendorUniqueId
   }
    console.log(this.user_login_token);
    this.apiService.postData(this.apiService.serverPath+'Reviews/postreview', a).subscribe(data => {
      console.log(data)
      this.responce_review = false;
      this.responce_thanks = true;
      }, error => { console.log(error) }
      );
    }



  
  }
  setLightboxImages(pi,ev){
    this.lightBoxImages=[];
    pi.albumImages.forEach(element => {
        this.lightBoxImages.push(element.path);  
    });
  }
  goToPhotogallary(vendorDetails){
    console.log(vendorDetails);
    //sessionStorage.setItem('Vendorimages',JSON.stringify(this.vendorDetails.albums));
    const a = vendorDetails.vendorCategories[0].categories.categoryName;
    const b = vendorDetails.vendorId;
    const c = vendorDetails.nameOfBusiness;
    this.router.navigateByUrl('/home/weddingvendorss/'+a+'/'+b+'/'+c.replace(/\s/g,'')+'/'+'Allalbum');
  }
  getSimilarVendors(){
    let CatId=[];
    this.vendorDetails.vendorCategories.forEach(element => {
      CatId.push(element.categoryId);
    });
   let obj={
     vendoreId: this.vendorDetails.vendorId,
     categoryId:CatId}
  
     
   this.masterservice.getSimilarVendors(obj).subscribe(data=>{
     this.similarVendors=data;
     console.log( this.similarVendors)
     this.similarVendors_length = data.length;
   },error => {console.log(error)})
  }
  goto_detail_of_album(a){
  
    console.log(a);
    sessionStorage.setItem('albumimages',JSON.stringify(a));
    sessionStorage.setItem('portfolio_count',JSON.stringify('0'));
    
    this.router.navigate(['home/Photogallerydetail']);
  }
  goto_detail_of_portfolio(d){
   // sessionStorage.setItem('portfolios',JSON.stringify(d));
    sessionStorage.setItem('portfolio_count',JSON.stringify('1'));
    
    this.router.navigate(['home/Photogallerydetail']);
  }
  goto_detail_of_deals(deal){
    console.log(deal)
    console.log(this.vendorDetails)
    const a = this.vendorDetails.vendorCategories[0].categories.categoryName;
    const b = this.vendorDetails.vendorId;
    const c = this.vendorDetails.nameOfBusiness;
    const l = deal.dealId
    this.router.navigateByUrl('/home/Deal_Details/'+a+'/'+b+'/'+c.replace(/\s/g,'')+'/'+'deals'+'/'+l);


  }
  report_fun(){
   this.succesfull_report = "Thank you for your feedback."
  }
  trading_hours_popup(a){
       this.trading_hours_popups =a;
  }
  //GoToAllReviews
  goToAllReviews(vendorDetails){
    const a = vendorDetails.vendorCategories[0].categories.categoryName;
    const b = vendorDetails.vendorId;
    const c = vendorDetails.nameOfBusiness;
    const j = "allReviews";
    this.router.navigateByUrl('/home/weddingsvendors/'+a+'/'+b+'/'+c.replace(/\s/g,'')+'/'+j);
  }
  //GoToAlldeals
  goToAlldeals(vendorDetails){
    const a = vendorDetails.vendorCategories[0].categories.categoryName;
    const b = vendorDetails.vendorId;
    const c = vendorDetails.nameOfBusiness;
    this.router.navigateByUrl('/home/vendordealslist/'+a+'/'+b+'/'+c.replace(/\s/g,'')+'/'+'deals');
  }
  showHidetrading_hours() {
    this.show = !this.show;
    this.hide = this.hide;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show)
      {
        this.buttonName = "Show Less";
        $('.weekdate').show();
    } else
     { 
        this.buttonName = "Show More";
        $('.weekdate').hide();
    }
  }
  message(msg){
    this.user_login_token = sessionStorage.getItem('userToken');
    this.userId = sessionStorage.getItem('userId'); 
    msg.value.sendToUserId =  sessionStorage.getItem('userId'); 
    console.log(msg.value)
    if (!sessionStorage.getItem('userToken')) {
      this.toastr.error('Login To Give Your Message');
      msg.resetForm();
    } 
      else
    {
      this.apiService.postData(this.apiService.serverPath+'Messages/Post',msg.value).subscribe(data => {
      console.log(data)
      msg.resetForm();
      this.toastr.success(data.message);
  },error=>{
    this.toastr.error(error._body);
    // this.toastr.error(error);
  })
}
  }
  display_loginuser_contactno(){
    if(sessionStorage.getItem('userToken')){
           this.phone_hover = !this.phone_hover
    }  
  }
  contact(list){
    this.apiService.postData(this.apiService.serverPath+'Home/contactus',list.value).subscribe(data => {
      this.toastr.success(data.message);
      list.resetForm();
    },
      error => {
      console.log(error)
      this.toastr.error(error._body);
      }
    )
  }
  search(e){    
    if(e){
      this.objFilterParam.catId  = e.categoryId?e.categoryId:0;
      this.objFilterParam.categoryName= e.categoryName?e.categoryName: '' ;
      this.objFilterParam.page = 0;
      this.objFilterParam.pageSize = 25;
      this.objFilterParam.sortDir = "";
      this.objFilterParam.sortedBy ="";
      this.objFilterParam.searchQuery ="";
     }
      sessionStorage.setItem('filterParam',JSON.stringify(this.objFilterParam));
      this.router.navigate(['home/weddingvendors',this.objFilterParam.categoryName.replace(/\s/g,''), this.objFilterParam.catId]);
  }
///////////////////////////////////////////////////////////////loginpage
      loadScript(){ 
          $("#VendorsLogin").removeClass( "in");
          $("#VendorsLogin").removeClass( "active");
          $("#VendorsLogin").removeClass( "show");
          $("#CouplesLogin").removeClass( "active");
          $("#CouplesLogin").removeClass( "show");
          $("#CouplesLogin").removeClass( "in");
          $("#panel8").addClass( "in");
          $("#panel8").addClass( "active");
          $("#panel8").addClass( "show");
          $("#panel10").removeClass( "in");
          $("#panel10").removeClass( "active");
          $("#panel10").removeClass( "show");
          $("#panel11").removeClass( "in");
          $("#panel11").removeClass( "active");
          $("#panel11").removeClass( "show");
      }
      userin(){
          $("#VendorsLogin").removeClass( "in");
          $("#VendorsLogin").removeClass( "active");
          $("#VendorsLogin").removeClass( "show");
          $("#CouplesLogin").addClass( "active");
          $("#CouplesLogin").addClass( "show");
          $("#CouplesLogin").addClass( "in");
          $("#panel8").removeClass( "in");
          $("#panel8").removeClass( "active");
          $("#panel8").removeClass( "show");
          $("#panel10").removeClass( "in");
          $("#panel10").removeClass( "active");
          $("#panel10").removeClass( "show");
          $("#panel11").removeClass( "in");
          $("#panel11").removeClass( "active");
          $("#panel11").removeClass( "show");
      }
      forgotbox(){ 
        alert("hi")
          $("#VendorsLogin").removeClass( "in");
          $("#VendorsLogin").removeClass( "active");
          $("#VendorsLogin").removeClass( "show");
          $("#CouplesLogin").removeClass( "active");
          $("#CouplesLogin").removeClass( "show");
          $("#CouplesLogin").removeClass( "in");
          $("#panel8").removeClass( "in");
          $("#panel8").removeClass( "active");
          $("#panel8").removeClass( "show");
          $("#panel10").addClass( "in");
          $("#panel10").addClass( "active");
          $("#panel10").addClass( "show");
          $("#panel11").removeClass( "in");
          $("#panel11").removeClass( "active");
          $("#panel11").removeClass( "show");
      }
      forgotvendor(){ 
          $("#VendorsLogin").removeClass( "in");
          $("#VendorsLogin").removeClass( "active");
          $("#VendorsLogin").removeClass( "show");
          $("#CouplesLogin").removeClass( "active");
          $("#CouplesLogin").removeClass( "show");
          $("#CouplesLogin").removeClass( "in");
          $("#panel8").removeClass( "in");
          $("#panel8").removeClass( "active");
          $("#panel8").removeClass( "show");
          $("#panel10").removeClass( "in");
          $("#panel10").removeClass( "active");
          $("#panel10").removeClass( "show");
          $("#panel11").addClass( "in");
          $("#panel11").addClass( "active");
          $("#panel11").addClass( "show");
      }
      //end
      remove(){
          if(window.location.pathname == '/home' )
          {     
              $("body").removeClass( "modal-open");
              $("body").css({ 'padding-right' : '' }); 
          }
      }
       onSubmit(){ 
    this.cservice.login(this.usercouple).subscribe((data)=> {
                        if (data.statusText == "OK" && data.json().role =="Vendors" ) {
                            this.typeSuccess();
                            localStorage.setItem('userId',data.json().id);
                            localStorage.setItem('role',data.json().role);
                            localStorage.setItem('userToken',data.json().auth_token);
                            sessionStorage.setItem('userToken',data.json().auth_token);
                            this.router.navigate(['/home/detailprofile/0'])
                            $("body").removeClass( "modal-open");
                            $("div").removeClass( "modal-backdrop"); 
                        }
        },(ERROR)=>{
                        if (ERROR.statusText == "Bad Request" ) {
                            this.error  = ERROR.json().login_failure[0];
                        this.typeWarning();
                        }
                    
        });
       }
      typeSuccess() {
          this.cservice.typeSuccess();
      }
      typeWarning() {
          this.cservice.typeWarning();
      }
      typeLogout() {
          this.cservice.typeLogout();
      }
//--------------------------------user login 
userlogin(){ 
                this.cservice.login(this.user).subscribe((data)=> {
                    
                            if (data.statusText == "OK"  && data.json().role =="Users") {
                                sessionStorage.setItem('userToken',data.json().auth_token);
                                sessionStorage.setItem('userId',data.json().id);
                                sessionStorage.setItem('role',data.json().role);

                                // localStorage.setItem('userId',data.json().id);
                                this.router.navigate(['/home/detailprofile/0'])
                                this.typeSuccess();
                                $("div").removeClass( "modal-backdrop fade show");
                                $("body").removeClass( "modal-open");
                                $("body").removeClass( "modal-open");
                                $("div").removeClass( "modal-backdrop"); 
                            }
                },(ERROR)=>{     
                            if (ERROR.statusText == "Bad Request" ) {
                                this.error  = ERROR.json().login_failure[0];
                                this.typeWarning();
                            }
                        });
}
userSingUp = {email:' ',password:' ',confirmpass:'', firstName:'',lastName:''} 
userSubmit(){
                this.uservice.usignup(this.userSingUp).subscribe(( data )  =>  {
                },(error)=>{this.toastr.warning(error._body);
                });
}
//----------------userpanellogout
//carosal\\
getData(data: SlidesOutputData) {
  this.activeSlides = data;
}

  
}


export class MessagesVM {
  sendByFirstName: string;
  sendByLastName: string;
  sendByEmail: string;
  subject:	string;
  message:	string;
  sendToUserId:	string;
  isFromAdmin:boolean = false;
  sentDate:number
}

