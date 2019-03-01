import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { apiService } from 'app/shared/service/api.service';
@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.scss']
})
export class VendorlistComponent implements OnInit {
  private urlg: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com//api/Reviews/myreviews'
  countryArray:string[];
  mySuppliers:any = {};
  savedArray:any = {};
  listedArray:any = {};
  bookedArray:any = {};
  constructor(public http: Http,private apiService : apiService) { }
  MySuppliersObj = new MySuppliersSearchVM();
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
                var authToken = localStorage.getItem('_u');
                headers.append('Accept', 'application/json')
                headers.append('Content-Type', 'application/json');
                headers.append("Authorization",'Bearer '+authToken);
                this.http.get(this.urlg,{headers:headers}).subscribe(
                data =>{ 
                  this.countryArray = data.json();
                console.log(data);
                });
                this.all();
                this.saved();
                this.booked();
                this.listed();

  }

  all(){
      this.apiService.postData(this.apiService.serverPath+'PerfectWedding/searchmysuppliers',{
        "supplierStatus": 0
    }).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  saved(){
      this.apiService.postData(this.apiService.serverPath+'PerfectWedding/searchmysuppliers',{
        "supplierStatus": 1
    }).subscribe(
      data => {
        this.savedArray = data;
        console.log(this.savedArray)
      },
      error => {
        console.log(error);
      }
    )
  }
  listed(){
      this.apiService.postData(this.apiService.serverPath+'PerfectWedding/searchmysuppliers',{
        "supplierStatus": 2
    }).subscribe(
      data => {
        this.listedArray = data;
        console.log(this.listedArray)
      },
      error => {
        console.log(error);
      }
    )
  }
  booked(){
    this.apiService.postData(this.apiService.serverPath+'PerfectWedding/searchmysuppliers',{
        "supplierStatus": 3
    }).subscribe(
      data => {
        this.bookedArray = data;
        console.log(this.bookedArray);
      },
      error => {
        console.log(error);
      }
    )
  }


}


export class MySuppliersSearchVM {
  supplierStatus:number
}

//SupplierStatus All=0, Saved=1, ShortListed=2, Booked=3)