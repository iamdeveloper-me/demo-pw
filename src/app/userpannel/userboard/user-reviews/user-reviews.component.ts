import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-reviews',
  templateUrl: './user-reviews.component.html',
  styleUrls: ['./user-reviews.component.scss']
})
export class UserReviewsComponent implements OnInit {
  reviewArray:string[];
  constructor(private http: HttpClient) { }

  ngOnInit() {  $("li").removeClass("user");
  $("#login").hide();
  let obs = this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Reviews/myreviews");
    
    obs.subscribe(data => {
      this.reviewArray =data as string[];
    })
  }

}
