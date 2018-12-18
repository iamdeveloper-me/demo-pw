import { Component, OnInit } from '@angular/core';
import { MasterserviceService } from '../ngservices/masterservice.service';
import { apiService } from '../shared/service/api.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {


  constructor( private router: Router ,private masterservice: MasterserviceService , private apiService: apiService) { }

  Categories = [];
  locations = [];
  banner_data = []
  ngOnInit() {
    this.Categorie();
    this.location();
    this.banner();

    

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

  search(e){
    console.log(e.value.category);
    console.log(e.value.category.categoryId);
    console.log(e.value.category.categoryName);
    alert("cvvfvfvfvf");
    this.router.navigate(['../searchresult' + '/' + e.value.category.categoryId +'/'+ e.value.category.categoryName]);
    //searchresult
  }

}
