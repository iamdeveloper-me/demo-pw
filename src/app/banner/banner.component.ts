import { Component, OnInit } from '@angular/core';
import { MasterserviceService } from '../ngservices/masterservice.service';
import { apiService } from '../shared/service/api.service';
import { filterParam } from '../vendorcard/vendorcard.component'
import { Router } from '@angular/router';
import { CustompipePipe } from 'app/custompipe.pipe';
import { CategoryPipePipe } from 'app/category-pipe.pipe';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  providers: [CustompipePipe, CategoryPipePipe]

})
export class BannerComponent implements OnInit {
  objFilterParam: filterParam;
  constructor( private router: Router ,private masterservice: MasterserviceService , private apiService: apiService) { 
    this.objFilterParam = new filterParam();
  }
  locationFilterParam:string='';
  categoryFilterParam:string=''
  Categories = [];
  locations = [];
  banner_data = [];
  locationId:number=0;
  categoryClickData : any;
  locationClickData : any;
  ngOnInit() {
   
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
      this.Categories = data;
      console.log( this.Categories )
     },error => {  console.log(error) })
  }
  location(){ 
    this.masterservice.getAllLocation().subscribe(data => {
      this.locations = data;
      console.log(  this.locations )
     },error => {  console.log(error) })
  }
  banner(){
    this.apiService.getData(this.apiService.serverPath+'PerfectWedding/banners').subscribe(data => {
      this.banner_data = data
      console.log(this.banner_data)
      },
      error => {
       console.log(error)
      }
    )
  }
  search(e,isAllSupplier,isDreamLocation,var_data){
    debugger;
      if(var_data == null){
          this.objFilterParam.catId  = e.value.category?e.value.category.categoryId:0;
          this.objFilterParam.categoryName= e.value.category?e.value.category.categoryName: '' ;
          this.objFilterParam.categoryName=this.objFilterParam.categoryName==undefined?'All Categories':this.objFilterParam.categoryName;
          this.objFilterParam.isDreamLocation=isDreamLocation;
          this.objFilterParam.isAllSupplier=isAllSupplier;
          this.objFilterParam.page = 1;
          this.objFilterParam.pageSize = 25;
          this.objFilterParam.sortDir = "";
          this.objFilterParam.sortedBy ="";
          this.objFilterParam.searchQuery ="";
          this.objFilterParam.locationId = this.locationId;
      }else{
          this.objFilterParam.catId  = var_data['category'] != 0 ?var_data['category']['categoryId']:0;
          this.objFilterParam.categoryName= var_data['category']?var_data['category']['categoryName']: '' ;
          this.objFilterParam.isDreamLocation=isDreamLocation;
          this.objFilterParam.isAllSupplier=isAllSupplier;
          this.objFilterParam.page = 1;
          this.objFilterParam.pageSize = 25;
          this.objFilterParam.sortDir = "";
          this.objFilterParam.sortedBy ="";
          this.objFilterParam.searchQuery ="";
          this.objFilterParam.locationId = var_data['location'];
        }
          sessionStorage.setItem('filterParam',JSON.stringify(this.objFilterParam));
          this.router.navigate(['home/weddingvendors',this.objFilterParam.categoryName.replace(/\s/g,'')]);
  }
  // Mobile size click to forword serch result page 
  categoryClick(data){
    if(data == 0 ){
       this.categoryClickData = 0;
    }else{
      this.categoryClickData = data;
    }
  }
  locationClick(data){
      this.locationClickData = data;
      const var_data = {
        category:  this.categoryClickData,
        location: this.locationClickData
      }
      this.search(null,true,false,var_data)
  }

}
