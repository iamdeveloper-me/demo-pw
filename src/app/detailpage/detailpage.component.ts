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
  lng: number = 7.809007;
  
  private url: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PerfectWedding/vendordetails/'
  sliderImgaes: any = [];
  trading_hours_popups:any= {isMondayOpen: ''};
  report= false;
  succesfull_report = ""
  vendorId: number;
  vendorDetails: any;
  data_arr = []
  businessServices_length ;
  portfolioAndAlbumImagesTotal: number = 0;
  similarVendors:any;
  reviewButtonLabel:string='Show reviews';
  ratingmodel: ratingStars;
  portfolioImages = [];
  lightBoxImages=[];
  similarVendors_length;
  vendorVideo_details:any = [];
  @ViewChild('albumgallarypopup') albumgallarypopup: ElementRef;
  @ViewChild(AgmMap) map: AgmMap;
  @ViewChild('gmapInput') gmapInput: ElementRef;
  constructor(public http: Http, 
     public toastr: ToastrService, 
     private apiService: apiService,
     private masterservice: MasterserviceService,
     public mapsApiLoader: MapsAPILoader,
     private router: Router,
   ) { 
      this.ratingmodel = new ratingStars();
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
    this.vendorDetails = JSON.parse(sessionStorage.getItem('vendorDetails'));
    this.showHideReviews();
    console.log( this.vendorDetails )
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
            "image" : img.path
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
            "image" : dxg.path
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
    //  console.log(this.colors)
      
      setTimeout(() => {
        $('.fancybox-toolbar').append('<a class="fancybox-button" title="Share" href="whatsapp://send?text=Text to send withe message: http://13.59.229.254"><i class="material-icons">share</i></a><button data-fancybox-zoom="" class="fancybox-button fancybox-button--share" title="Like"><i class="material-icons">favorite_border</i></button>')  
    }, 50);
  }
  review = { rating: '', comments: "", rateVendorID: 'a96129c3-8861-43aa-8bc9-1c155f1ffd79' }
 
  putReview(review) {
   
    var authToken = localStorage.getItem('userToken');
    if (!authToken) {
      this.toastr.error('Login To Give Your Review', 'Inconceivable!');
    }

    var rating1 = review.rating;
    var comments1 = review.comments;

    this.apiService.postData(this.apiService.serverPath+this.url, {
      rating: rating1, comments:
        comments1, rateVendorID: this.vendorDetails.vendorUniqueId
    }).subscribe(data => {
      console.log(data)
      }, error => { console.log(error) }
      );


  
  }
 
  setLightboxImages(pi,ev){
    this.lightBoxImages=[];
    pi.albumImages.forEach(element => {
        this.lightBoxImages.push(element.path);  
    });
  }
  
  goToPhotogallary(vendorDetails){
    sessionStorage.setItem('Vendorimages',JSON.stringify(this.vendorDetails.albums));
    this.router.navigateByUrl('/home/Photogallary');
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
    debugger;
    this.vendorDetails.reviews.forEach((element,index) => {
      if(this.reviewButtonLabel==='Show More')
      {
        element.visible=true;
      }else{
        if(index<=1){
          element.visible=true;
      } else {
          element.visible=false;
      }
      }
    });
    if(this.vendorDetails.reviews.filter(r=>r.visible==true).length>2){
      this.reviewButtonLabel = 'Show Less';
    }else{
      this.reviewButtonLabel = 'Show More';
    }
    
  }
}

