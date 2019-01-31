import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { apiService } from 'app/shared/service/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MasterserviceService } from 'app/ngservices/masterservice.service';
@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss'],
  providers: [apiService],
})
export class DetailpageComponent implements OnInit {
  private url: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PerfectWedding/vendordetails/'
  sliderImgaes: any = [];
  vendorId: number;
  vendorDetails: any;
  data_arr = []
  businessServices_length ;
  portfolioAndAlbumImagesTotal: number = 0;
  similarVendors:any;
  portfolioImages = [];
  lightBoxImages=[];
  similarVendors_length;
  vendorVideo_details:any = [];
  @ViewChild('albumgallarypopup') albumgallarypopup: ElementRef;
  constructor(public http: Http, public toastr: ToastrService, private apiService: apiService,
     private activeroute: ActivatedRoute, private router: Router, private masterservice: MasterserviceService) { 

  }
  ngOnInit() {
    $.getScript('./assets/js/prism.min.js');
    $.getScript('./assets/js/owljsor.js');
    $.getScript('./assets/js/curosselfun.js');
     $.getScript('./assets/js/jquery.fancybox.min.js');
    $("#Vediogallarypopup").on('hidden.bs.modal', function (e) {
      $("#Vediogallarypopup iframe").attr("src", $("#Vediogallarypopup iframe").attr("src"));
    });
    this.vendorDetails = JSON.parse(sessionStorage.getItem('vendorDetails'));
    console.log( this.vendorDetails )
    this.vendorVideo_details = this.vendorDetails.vendorVideos.length;
    this.businessServices_length = this.vendorDetails.businessServices.length;
    this.getSimilarVendors();
    this.vendorDetails.vendorLocations.reverse();
    debugger
     this.data_arr = this.vendorDetails.albums
    console.log(this.data_arr)
    this.data_arr.forEach(vendor => {
      debugger
      vendor.albumImages.forEach(img => {
        
        const data = {
          "name" : vendor.albumName,
          "image" : img.path
        }
        this.sliderImgaes.push(data);
      });
    });
    this.vendorDetails.albums.forEach(element => {
      this.portfolioAndAlbumImagesTotal += element.albumImages.length ? element.albumImages.length : 0;
    });
   
    this.portfolioAndAlbumImagesTotal += this.vendorDetails.portfolios.length;
    this.vendorDetails.portfolios.forEach(element => {
      // this.portfolioImages.push(element.files.path);
         this.portfolioImages.push(element.path);
    });
    

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
}
//this.router.navigate(['home/detailprofile/',slide.vendorId])