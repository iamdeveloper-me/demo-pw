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

                      $('.allbtn').click(function(e){
                          $(".bookedbox").show();
                          $(".savedbox").show();
                          $(".shortlistbox").show();
                      });
                      $('.bookbtn').click(function(e){
                          $(".bookedbox").show();
                          $(".savedbox").hide();
                          $(".shortlistbox").hide();
                      });
                        $('.savebtn').click(function(e){
                          $(".bookedbox").hide();
                          $(".savedbox").show();
                          $(".shortlistbox").hide();
                      });
                        $('.shortlistbtn').click(function(e){
                          $(".bookedbox").hide();
                          $(".savedbox").hide();
                          $(".shortlistbox").show();
                      });





                });

                let headers = new Headers();
                var authToken = localStorage.getItem('userToken');
                headers.append('Accept', 'application/json')
                headers.append('Content-Type', 'application/json');
                headers.append("Authorization",'Bearer '+authToken);
                this.http.get(this.urlg,{headers:headers}).subscribe(
                data =>{ this.countryArray = data.json();});
  }

}
