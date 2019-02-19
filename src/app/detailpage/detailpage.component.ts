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
  lat: number = 51.678418;
  role:string;
  lng: number = 7.809007;
  MessagesVMObj  = new MessagesVM();
  contactInfoObj: ContactUsVM;
  private url: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PerfectWedding/vendordetails/'
  responce_review = true;
  responce_thanks = false;
  showLoader: boolean = true;
  sliderImgaes: any = [];
  trading_hours_popups:any= {isMondayOpen: ''};
  report= false;
  succesfull_report = ""
  vendorId: number;
  vendorDetails: any;
  data_arr = []
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
     private title : Title
   ) { 
      this.ratingmodel = new ratingStars();
      this.contactInfoObj = new ContactUsVM();
      var dateObj = new Date();
      this.currentDate  = dateObj.getDay()  //months from 1-12
      console.log(this.currentDate )
      this.user_login_token = sessionStorage.getItem('userId')
      this.role = (sessionStorage.getItem('role'))
      
  if(sessionStorage.getItem('role') == 'Users'){
    this.show = true
  }else{
    this.show = false

  }
      console.log(this.user_login_token);
      this.objFilterParam = new filterParam();
  }
  ngOnInit() {

    $.getScript('./assets/js/prism.min.js');

    $.getScript('./assets/js/owljsor.js');
    $.getScript('./assets/js/curosselfun.js');
    $.getScript('./assets/js/detailpagescroll_active.js');
    $.getScript('https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.2/dist/jquery.fancybox.min.js');
    $("#Vediogallarypopup").on('hidden.bs.modal', function (e) {
      $("#Vediogallarypopup iframe").attr("src", $("#Vediogallarypopup iframe").attr("src"));
    });
    $.getScript('./assets/js/prism.min.js');

   
    this.vendorDetails = JSON.parse(sessionStorage.getItem('vendorDetails'));
    console.log(this.vendorDetails)
    // setTimeout(function () { 
    // alert("dfdsff") 
    // this.showLoader = false;}, 2900);
    this.vendorDetails.reviews.forEach((element,index) => {
      if(index<=2){ element.visible=true;this.reviewButtonLabel='View All'; } 
            else { element.visible=false; }
            
    });
    this.vendorDetails.deals.forEach((element,index) => {
      if(index<=2){ element.visible=true; 
        this.dealButtonLabel='View All';
      }else{  
        element.visible=false; }
    });
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
      console.log(this.vendorDetails.vendorCategories)
      

    this.vendorVideo_details = this.vendorDetails.vendorVideos.length;
    this.businessServices_length = this.vendorDetails.businessServices.length;
    this.getSimilarVendors();
    this.vendorDetails.vendorLocations.reverse();
    
     this.data_arr = this.vendorDetails.albums
    console.log(this.data_arr)
    this.data_arr.forEach(vendor => {
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
    console.log(this.sliderImgaes)
    console.log(this.vendorDetails.portfolios)
      
      this.vendorDetails.portfolios.forEach(dxg => {
        const data = {
            "name" : "PORTFOLIO",
            "image" : dxg.path,
            "likeCounts": dxg.likeCounts
          }
          this.sliderImgaes.push(data);
          
          
        });

        console.log(this.sliderImgaes)

    this.vendorDetails.albums.forEach(element => {
      this.portfolioAndAlbumImagesTotal += element.albumImages.length ? element.albumImages.length : 0;
    });
   
    this.portfolioAndAlbumImagesTotal += this.vendorDetails.portfolios.length;
    this.vendorDetails.portfolios.forEach(element => {
      // this.portfolioImages.push(element.files.path);
         this.portfolioImages.push(element.path);
    });

  }
  classAdd(item){
      
      setTimeout(() => {
        $('.fancybox-toolbar').append('<a class="fancybox-button" title="Share" href="whatsapp://send?text=Text to send withe message: http://13.59.229.254"><i class="material-icons">share</i></a><button data-fancybox-zoom="" class="fancybox-button fancybox-button--share" title="Like"><i class="material-icons">favorite_border</i></button>')  
    }, 50);
  }
  review = { rating: '', comments: "", rateVendorID: 'a96129c3-8861-43aa-8bc9-1c155f1ffd79' }
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
    sessionStorage.setItem('Vendorimages',JSON.stringify(this.vendorDetails.albums));
    const a = vendorDetails.vendorCategories[0].categories.categoryName;
    const b = vendorDetails.vendorId;
    const c = vendorDetails.nameOfBusiness;
    this.router.navigateByUrl('/home/weddingvendorss/'+a+'/'+b+'/'+c);
    // this.router.navigate(['home/Photogallary'])
    
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
    sessionStorage.setItem('portfolios',JSON.stringify(d));
    sessionStorage.setItem('portfolio_count',JSON.stringify('1'));
    
    this.router.navigate(['home/Photogallerydetail']);
  }
  report_fun(){
   this.succesfull_report = "Thank you for your feedback."
  }
  trading_hours_popup(a){
       this.trading_hours_popups =a;
  }
  showHideReviews(){
    this.vendorDetails.reviews.forEach((element,index) => {
        if(this.reviewButtonLabel=='View All')
        {
              element.visible=true;
        }else{
              if(index<=2){
                   element.visible=true;
              } else {
                   element.visible=false;
              }
        }
    });
    if(this.vendorDetails.reviews.filter(r=>r.visible==true).length>3){
      this.reviewButtonLabel = 'Veiw Less';

    }else{
      this.reviewButtonLabel = 'Veiw All';
    }
    
  }

  //GoToAllReviews
  goToAllReviews(vendorDetails){
    sessionStorage.setItem('Vendorimages',JSON.stringify(this.vendorDetails.reviews));
    this.router.navigateByUrl('/home/allReviews');
  }

  showHideevents(){
 
     this.vendorDetails.deals.forEach((element,index) => {
      if(this.dealButtonLabel=='Show More')
      {
            element.visible=true;
      }else{
            if(index<=4){
                 element.visible=true;
            } else {
                 element.visible=false;
            }
      }
     });

     if(this.vendorDetails.deals.filter(r=>r.visible==true).length>3){
      this.dealButtonLabel = 'Show Less';

    }else{
      this.dealButtonLabel = 'Show More';
    }

  }
  showHidetrading_hours() {
    this.show = !this.show;
    this.hide = this.hide;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show)
      {this.buttonName = "Show Less";
        $('.tabledesktop').hide();
    } else
     { 
        this.buttonName = "Show More";
        $('.tabledesktop').show();
    }
  }


    message(msg){
      this.user_login_token = sessionStorage.getItem('userToken');
      this.userId = localStorage.getItem('userId'); 
      msg.value.sendToUserId =  localStorage.getItem('userId'); 
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
      this.objFilterParam.catId  = e.category?e.categoryId:0;
      this.objFilterParam.categoryName= e.categoryName?e.categoryName: '' ;
      this.objFilterParam.page = 0;
      this.objFilterParam.pageSize = 25;
      this.objFilterParam.sortDir = "";
      this.objFilterParam.sortedBy ="";
      this.objFilterParam.searchQuery ="";
     }
      sessionStorage.setItem('filterParam',JSON.stringify(this.objFilterParam));
      this.router.navigate(['home/weddingvendors',this.objFilterParam.categoryName.replace(/\s/g,'')]);
  }
  deal_Detail(a){
    sessionStorage.setItem('Deal_Details',JSON.stringify(a));
   
    this.router.navigate(['home/Deal_Details']);
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

