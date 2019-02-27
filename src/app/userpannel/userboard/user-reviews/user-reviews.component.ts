import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { apiService } from 'app/shared/service/api.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-reviews',
  templateUrl: './user-reviews.component.html',
  styleUrls: ['./user-reviews.component.scss']
})
export class UserReviewsComponent implements OnInit {
  
  SortBy = [
    { id:1,name:"Newest First" },
    { id:2,name:"Oldest First" }
  ];

  ReviewSearchVMObj = new CoupleReviewSearchVM();
  reviewsArray:any[];
  filtered_reviews:any=[];
  constructor(private http: Http,private apiService : apiService,public toastr: ToastrService) { }
  ngOnInit() {  
    this.myReviews();
                $("li").removeClass("user");
                $("#login").hide();
  }

  myReviews(){
    this.apiService.postData(this.apiService.serverPath+'Couple/MyReviews',{
    }).subscribe(data => {
      this.reviewsArray = data;
      this.filtered_reviews = this.reviewsArray;
      console.log(this.reviewsArray)
    },
      error => {
      console.log(error)
      this.toastr.error(error._body);
      }
    )
  }
  
  changeData(){
    // debugger
    if(this.ReviewSearchVMObj.status){
    this.filtered_reviews = this.reviewsArray.filter(r=>r.reviewStatus===this.ReviewSearchVMObj.status);
    }
    else{
      this.filtered_reviews = this.reviewsArray;
    }
    console.log(this.filtered_reviews);
  }

}


export class CoupleReviewSearchVM {
  status:string;
  Enum:number;
}