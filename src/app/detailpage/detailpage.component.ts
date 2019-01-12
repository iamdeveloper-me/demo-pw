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
  portfolioAndAlbumImagesTotal: number = 0;
  similarVendors:any;
  portfolioImages = [];
  lightBoxImages=[];
  @ViewChild('albumgallarypopup') albumgallarypopup: ElementRef;
  constructor(public http: Http, public toastr: ToastrService, private api: apiService,
     private activeroute: ActivatedRoute, private router: Router, private masterservice: MasterserviceService) { 

  }
  ngOnInit() {
    $.getScript('./assets/js/prism.min.js');
    $.getScript('./assets/js/owljsor.js');
    $.getScript('./assets/js/jquery.fancybox.min.js');
    $.getScript('./assets/js/curosselfun.js');
    $("#Vediogallarypopup").on('hidden.bs.modal', function (e) {
      $("#Vediogallarypopup iframe").attr("src", $("#Vediogallarypopup iframe").attr("src"));
    });
    this.vendorDetails = JSON.parse(sessionStorage.getItem('vendorDetails'));
    this.getSimilarVendors();
    this.vendorDetails.vendorLocations.reverse();
    this.vendorDetails.albums.forEach(element => {
      element.albumImages.forEach(img => {
        this.sliderImgaes.push(img.path);
      });
    });
    this.vendorDetails.albums.forEach(element => {
      this.portfolioAndAlbumImagesTotal += element.albumImages.length ? element.albumImages.length : 0;
    });
    this.portfolioAndAlbumImagesTotal += this.vendorDetails.portfolio.length;
    this.vendorDetails.portfolio.forEach(element => {
      this.portfolioImages.push(element.files.path);
    });
    

  }
  review = { rating: '', comments: "", rateVendorID: 'a96129c3-8861-43aa-8bc9-1c155f1ffd79' }
  putReview(review) {

    var headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization", 'Bearer ' + authToken);

    if (!authToken) {
      this.toastr.error('Login To Give Your Review', 'Inconceivable!');
    }

    var rating1 = review.rating;
    var comments1 = review.comments;
    this.http.post(this.url, {
      rating: rating1, comments:
        comments1, rateVendorID: this.vendorDetails.vendorUniqueId
    },
      { headers: headers }).subscribe(data => {
      }, error => { console.log(error) }
      );
  }
  setLightboxImages(pi,ev){
    this.lightBoxImages=[];
    pi.albumImages.forEach(element => {
        this.lightBoxImages.push(element.path);  
    });
  }
  goToPhotogallary(){
    sessionStorage.setItem('Vendorimages',JSON.stringify(this.vendorDetails.albums));
    this.router.navigateByUrl('/home/Photogallary');
    
  }
  getSimilarVendors(){
    let CatId=[];
    this.vendorDetails.vendorCategories.forEach(element => {
      CatId.push(element.categoryId);
    });
   let obj={
     vendoreId: this.vendorDetails.vendorId,
     categoryId:CatId}
  
     
   this.masterservice.getSimilarVendors(obj).subscribe(res=>{
     this.similarVendors=res;
   })
  }
}
