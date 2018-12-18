import { Component, OnInit } from '@angular/core';
import { MasterserviceService } from '../ngservices/masterservice.service';
import { apiService } from '../shared/service/api.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(private masterservice: MasterserviceService , private apiService: apiService) { }
  Categories = [];
  locations = [];
  banner_data = []
  ngOnInit() {
    this.Categorie();
    this.location();
    this.banner();
    this.search();
                $(".mobvendorebtn").click(function(){
                  $("#tiktik").show();
                });
                $(".category-body .regular").click(function(){
                  $(".category-body").hide();
                  $(".city-body").show();
                });
                $(".icon-small").click(function(){
                  $("#tiktik").hide();
                  $(".category-body").show();
                  $(".city-body").hide();
                });	 
  }



  Categorie(){ 
    this.masterservice.getAllCategories().subscribe(data => {
     // console.log(data);
      this.Categories = data;
     },error => {  console.log(error) })
  }
  location(){ 
    this.masterservice.getAllLocation().subscribe(data => {
    //  console.log(data);
      this.locations = data;
     },error => {  console.log(error) })
  }
  banner(){
    this.apiService.getData(this.apiService.serverPath+'PerfectWedding/banners').subscribe(data => {
      console.log("banner_Api")
    
      this.banner_data = data
      console.log( this.banner_data)
    },
      error => {
       console.log(error)
      }
    )
  }
  search(){
    const a ={
      "page": 0,
      "pageSize": 0,
      "sortDir": "string",
      "sortedBy": "string",
      "searchQuery": "string",
      "location": "string",
      "eventType": "string",
      "dates": "string"
    }
    this.apiService.postData(this.apiService.serverPath+'Home/searchevents',a).subscribe(data => {
      console.log(data)
    
     
    },
      error => {
       console.log(error)
      }
    )
  }
}
