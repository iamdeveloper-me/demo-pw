import { Component, OnInit } from '@angular/core';
import{ ratingStars } from '../ngservices/ratingstars';
import { apiService } from '../shared/service/api.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.scss']
})
export class AllReviewsComponent implements OnInit {

  reviewsArray:any;
  vendorDetails:any = {};
  ratingmodel: ratingStars;
  user_login_token;
  responce_review = true;
  responce_thanks = false;
  constructor(private apiService : apiService, public toastr: ToastrService, ) {
    this.ratingmodel = new ratingStars();
    this.user_login_token = sessionStorage.getItem('userToken')
    console.log(this.user_login_token);
   }

  ngOnInit() {
    this.vendorDetails = JSON.parse(sessionStorage.getItem('vendorDetails'));
    console.log(this.vendorDetails);
    this.reviewsArray = this.vendorDetails.reviews;
    console.log(this.reviewsArray);
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
      }, error => { 
        console.log(error);
        this.toastr.error(error.statusText);
       }
      );
    }



  
  }

}
