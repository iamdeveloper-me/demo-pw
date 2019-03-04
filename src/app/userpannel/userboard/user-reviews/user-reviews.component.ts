import { Component, OnInit } from '@angular/core';
import { apiService } from 'app/shared/service/api.service';
import { ratingStars } from '../../../ngservices/ratingstars';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-reviews',
  templateUrl: './user-reviews.component.html',
  styleUrls: ['./user-reviews.component.scss'],
  providers: []
})
export class UserReviewsComponent implements OnInit {
  
  SortBy = [
    { id:1,name:"Newest First" },
    { id:2,name:"Oldest First" }
  ];
  Newtast_dialog: boolean = false;
  ReviewSearchVMObj = new CoupleReviewSearchVM();
  reviewsArray:any[];
  filtered_reviews:any=[];
  ifFormInEditMode:false;
  updateReviewObj = new UpdateReviewVM();
  constructor(
    private apiService: apiService, 
    public toastr: ToastrService, 
    // public tskService: taskService
    ) {}
  
  ngOnInit() {  
    this.myReviews();
                $("li").removeClass("user");
                $("#login").hide();
  }

  myReviews(){
    this.apiService.postData(this.apiService.serverPath+'Couple/MyReviews',{}).subscribe(data => {
      this.Newtast_dialog = false;
      this.reviewsArray = data;
      this.filtered_reviews = this.reviewsArray;
      console.log(this.reviewsArray);
    },
      error => {
      console.log(error)
      this.toastr.error(error.statusText);
      }
    )
  }

  updateReview(rev){
    console.log(rev);
    this.apiService.postData(this.apiService.serverPath+'Couple/UpdateReview',rev.value).subscribe(
      data => {
        console.log(data);
        this.toastr.success(data.message);
        this.Newtast_dialog = false;
      },
      error => {
        this.toastr.error(error.statusText);
      }
    )
  }
  
  // showNewTaskPopup(obj,action) {
  //   debugger;
  //   this.tskService.objTodoVm = obj;
  //   if(action=='edit'){
  //    this.tskService.objTodoVm.status=1; 
  //   }
  //   this.Newtast_dialog = true;
    
  // }
  showNewTaskPopup(review) {
    this.updateReviewObj = review;
    console.log(review);
    this.Newtast_dialog = true;  
  }
  close() {
    this.Newtast_dialog = false;
  }

  changeData(){
    //   debugger
    if(this.ReviewSearchVMObj.Enum){
    this.filtered_reviews = this.reviewsArray.filter(r=>r.reviewStatus==this.ReviewSearchVMObj.Enum);
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

export class UpdateReviewVM {
  reviewId : number;
  rating : number;
  comments : string;
}