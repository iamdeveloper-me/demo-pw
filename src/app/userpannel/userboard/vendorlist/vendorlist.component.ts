import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.scss']
})
export class VendorlistComponent implements OnInit {
  private urlg: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com//api/Reviews/myreviews'
  countryArray:string[];
  constructor(public http: Http) { }

  ngOnInit() {  $("li").removeClass("user");
  $("#login").hide();

    $(document).ready(function(){
          $('.filterbtn').click(function(e){
              $(".filterboxtik").toggleClass( "in");
          });
          $('.closebtn').click(function(e){
            $(this).parent('.yikyik').addClass("hip");
            });
    });

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


  }

}
