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
  countryArray:string[];

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

     this.http.get(this.urlg,{headers:headers}).subscribe(
      data =>{ 
        this.countryArray = data.json();  
          console.log(this.countryArray);  
             });

    // this.http.post(this.url,{
    //   rating: 2,
    //   comments: "Excellent Service.Very Friendly Staff and on time. Would highly recommend Excellent Service.Very Friendly Staff and on time",
    //   rateVendorID: '65de65c1-d50d-4277-90be-16aad31024a9'
    // },{headers:headers}).subscribe(
    //   data =>{ 
    //            console.log( data.json());
    //          });


           
  }


  

}

