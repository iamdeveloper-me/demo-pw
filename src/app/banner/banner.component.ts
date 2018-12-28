import { Component, OnInit } from '@angular/core';
import { MasterserviceService } from '../ngservices/masterservice.service';
import { apiService } from '../shared/service/api.service';
import{filterParam} from '../vendorcard/vendorcard.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  objFilterParam: filterParam;
  constructor( private router: Router ,private masterservice: MasterserviceService , private apiService: apiService) { 
    this.objFilterParam = new filterParam();
  }

  Categories = [];
  locations = [];
  banner_data = []
  ngOnInit() {
    // alert("tiktik");
    this.Categorie();
    this.location();
    this.banner();
                $(document).on('click', ".mobvendorebtn", function(){
                  $("#tiktik").show();
                });

                $(document).on('click', ".category-body .regular", function(){
                  $(".category-body").hide();
                  $(".city-body").show();
                });

                $(document).on('click', ".icon-small", function(){
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

  search(e,isAllSupplier,isDreamLocation){
  
    if(e){
      this.objFilterParam.catId  = e.value.category.categoryId;
      this.objFilterParam.categoryName= e.value.category.categoryName ;
      this.objFilterParam.isDreamLocation=isDreamLocation;
      this.objFilterParam.isAllSupplier=isAllSupplier;
      this.objFilterParam.page = 0;
      this.objFilterParam.pageSize = 25;
      this.objFilterParam.sortDir = "";
      this.objFilterParam.sortedBy ="";
      this.objFilterParam.searchQuery ="";
     
     }
       localStorage.setItem('filterParam',JSON.stringify(this.objFilterParam));
       this.router.navigate(['home/searchresult',this.objFilterParam.categoryName]);
   
   // this.router.navigate(['../searchresult/', e.value.category.categoryId]);
    // let catId=0;
    // let CatName='';
    // if(e.value.category!=undefined){
    //   catId=e.value.category.categoryId;
    //   CatName=e.value.category.categoryName;
    // }
    // this.router.navigate(['home/searchresult',catId+'/'+CatName]);

    //searchresult

   // this.router.navigate(['/home/searchresult']);

  }

}
