import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
@Component({
  selector: 'app-mylisting',
  templateUrl: './mylisting.component.html',
  styleUrls: ['./mylisting.component.scss']
})
export class MylistingComponent implements OnInit {
  private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Reviews/postreview'
  private urlg: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com//api/Reviews/myreviews'
 
  review: any = {};
  constructor(public http: Http) { }

  ngOnInit() {
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
     alert("drfvc");

     this.http.get(this.urlg,{headers:headers}).subscribe(
      data =>{ this.review = data.json();
               console.log(this.review);
             });

    this.http.post(this.url,{
      rating: 0,
      comments: "string",
      sendToUserId: '34e8ea73-a8b3-4776-b032-a4c8b085671f'
    },{headers:headers}).subscribe(
      data =>{ this.review = data.json();
               console.log(this.review);
             });


           
  }


  

}
