import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { apiService } from 'app/shared/service/api.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss'],
  providers: [apiService],
})
export class DetailpageComponent implements OnInit {
 // private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Reviews/postreview'

 private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PerfectWedding/vendordetails/'
 sliderImgaes:any=[];
 vendorId:number;
 vendorDetails:any;
 portfolioAndAlbumImagesTotal:number=0;
  constructor(public http: Http,public toastr: ToastrService, private api: apiService,private activeroute: ActivatedRoute) { }
  ngOnInit() {
  //  window.location.reload;
   // $.getScript('./assets/js/jssor.slider.min.js');
   // $.getScript('./assets/js/jsorslider.js');
    $.getScript('./assets/js/prism.min.js'); 
    $.getScript('./assets/js/owljsor.js');
    $.getScript('./assets/js/jquery.fancybox.min.js');
    $.getScript('./assets/js/curosselfun.js');
    $("#Vediogallarypopup").on('hidden.bs.modal', function (e) {
      $("#Vediogallarypopup iframe").attr("src", $("#Vediogallarypopup iframe").attr("src"));
    });
    this.vendorDetails =JSON.parse(sessionStorage.getItem('vendorDetails'));
        this.vendorDetails.albums.forEach(element => {
          element.albumImages.forEach(img => {
            this.sliderImgaes.push(img.path);  
          });
        });
        this.vendorDetails.albums.forEach(element => {
          this.portfolioAndAlbumImagesTotal+=element.albumImages.length?element.albumImages.length:0;
        });
        this.portfolioAndAlbumImagesTotal+=this.vendorDetails.portfolio.length;

    console.log(JSON.stringify(this.vendorDetails));
}
review =  {  rating: '', comments: "", rateVendorID: 'a96129c3-8861-43aa-8bc9-1c155f1ffd79' }
putReview(review){
 
var headers = new Headers();
var authToken = localStorage.getItem('userToken');
headers.append('Accept', 'application/json')
headers.append('Content-Type', 'application/json');
headers.append("Authorization",'Bearer '+authToken);

if(!authToken) 
{  this.toastr.error('Login To Give Your Review', 'Inconceivable!');
}

 console.log(review);
 var rating1 = review.rating;
 var comments1 = review.comments;
 
console.log(comments1);
console.log(rating1);

this.http.post(this.url,{ rating: rating1, comments: 
  comments1,rateVendorID: this.vendorDetails.vendorUniqueId},
  {headers:headers}).subscribe(data =>{  console.log( data.json());
                                        },error=>{console.log(error)}
                              );

console.log("dcxzs"); 
        }
}
