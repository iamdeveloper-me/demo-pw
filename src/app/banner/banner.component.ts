import { Component, OnInit } from '@angular/core';
import { MasterserviceService } from '../ngservices/masterservice.service';
import { apiService } from '../shared/service/api.service';
import { filterParam } from '../vendorcard/vendorcard.component'
import { Router } from '@angular/router';
import { CustompipePipe } from '../custompipe.pipe';
import { CategoryPipePipe } from '../category-pipe.pipe';
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
  categ:any;
  locationData:any;
  catShow:boolean= false
  locShow:boolean= false
  catImage:string =''
  locationFilterParam:string='';
  categoryFilterParam:string=''
  Categories = [];
  locations = [];
  banner_data = [];
  locationId:number=0;
  defaultbanner = false;
  categoryClickData : any;
  locationClickData : any;
  configCategory = {
    displayKey: "categoryName", //if objects array passed which key to be displayed defaults to description
    limitTo: 20,
    placeholder:'All Categories'
  };
  configLocation = {
    displayKey: "name", //if objects array passed which key to be displayed defaults to description
    limitTo: 20,
    placeholder:'All Locations',
  };
 categoryTitle:string = 'Select Category'
 locationTitle:string = 'Select Locations'
  ngOnInit() {
    debugger;
   $.getScript('http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js',function(){
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
  }); 
   // $.getScript('./assets/js/homebannersearch.js');
    this.Categorie();
    this.location();
    this.banner();
	 
  }
  Categorie(){ 
    this.masterservice.getAllCategories().subscribe(data => {
      this.Categories = data;
      localStorage.setItem('catlist',JSON.stringify(data));
      // console.log(this.Categories);
     },error => {  console.log(error) })
  }
  location(){ 
    this.masterservice.getAllLocation().subscribe(data => {
      this.locations = data;
      // console.log(this.locations);
     },error => {  console.log(error) })
  }
  banner(){
    this.apiService.getData(this.apiService.serverPath+'PerfectWedding/banners').subscribe(data => {
      this.banner_data = data
      // console.log(this.banner_data);
      if(this.banner_data.length == 0){
        this.defaultbanner = true ;
      }
      },
      error => {
       console.log(error)
      }
    )
  }
  search(e,isAllSupplier,isDreamLocation,var_data){
    debugger
      if(var_data == null){
          this.objFilterParam.catId  = this.categ?this.categ.categoryId:0;
          this.objFilterParam.categoryName= e.value.category?e.value.category.categoryName: '' ;
          this.objFilterParam.categoryName=this.objFilterParam.categoryName==undefined?'All Categories':this.objFilterParam.categoryName;
          this.objFilterParam.isDreamLocation=isDreamLocation;
          this.objFilterParam.isAllSupplier=isAllSupplier;
          this.objFilterParam.page = 1;
          this.objFilterParam.pageSize = 25;
          this.objFilterParam.sortDir = "";
          this.objFilterParam.sortedBy ="";
          this.objFilterParam.searchQuery ="";
          this.objFilterParam.locationId = this.locationData['districtId'];
          debugger
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
  cateDena(data){
    this.categ = data
    this.categoryTitle = data['categoryName']
    this.catImage = data['iconImageURL']

  }
  locationDena(data){
    this.locationData = data
    this.locationTitle = data['name']

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
