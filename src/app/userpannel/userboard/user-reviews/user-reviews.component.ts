import { Component, OnInit } from '@angular/core';
//import { HttpClient} from '@angular/common/http';
import { Http,Headers } from '@angular/http';
@Component({
  selector: 'app-user-reviews',
  templateUrl: './user-reviews.component.html',
  styleUrls: ['./user-reviews.component.scss']
})
export class UserReviewsComponent implements OnInit {
  reviewArray:string[];
  constructor(private http: Http) { }

  ngOnInit() {  $("li").removeClass("user");
  var headers = new Headers();
var authToken = localStorage.getItem('userToken');
headers.append('Accept', 'application/json')
headers.append('Content-Type', 'application/json');
headers.append("Authorization",'Bearer '+authToken);
  $("#login").hide();
  // let obs = this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Reviews/myreviews",{headers:headers});
    
  //   obs.subscribe(data => {
  //     this.reviewArray =data as string[];
  //   })



    this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Reviews/myreviews",
    {headers:headers}).subscribe(
      data =>{ 
        this.reviewArray =data.json() as string[];
          console.log( this.reviewArray);  
             });
  }

}
