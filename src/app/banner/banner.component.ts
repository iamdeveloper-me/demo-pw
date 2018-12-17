import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(private apiService: apiService) { }
  Categories = [];
  locations = [];
  ngOnInit() {
    this.Categorie();
    this.location();
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
    this.apiService.getData(this.apiService.url_services +'Categories/allcategories').subscribe(data => {
      console.log(data);
      this.Categories = data;
     },error => {  console.log(error) })
  }
  location(){ 
    this.apiService.getData(this.apiService.url_services +'LookupMaster/alllocation').subscribe(data => {
      console.log(data);
      this.locations = data;
     },error => {  console.log(error) })
  }
}
