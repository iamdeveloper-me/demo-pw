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
  // reviewArray:string[];
  reviewsArray:any[];
  constructor(private http: Http,private apiService : apiService,public toastr: ToastrService) { }
  ngOnInit() {  
    this.myReviews();
                $("li").removeClass("user");
                // var headers = new Headers();
                // var authToken = localStorage.getItem('userToken');
                // headers.append('Accept', 'application/json')
                // headers.append('Content-Type', 'application/json');
                // headers.append("Authorization",'Bearer '+authToken);
                $("#login").hide();
                // this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Reviews/myreviews",
                // {headers:headers}).subscribe(
                //   data =>{ this.reviewArray =data.json() as string[];
                // });

  }

  myReviews(){
    this.apiService.postData(this.apiService.serverPath+'Couple/myreviews',{
    }).subscribe(data => {
      this.reviewsArray = data;
      console.log(this.reviewsArray)
    },
      error => {
      console.log(error)
      this.toastr.error(error._body);
      }
    )
  }


}
