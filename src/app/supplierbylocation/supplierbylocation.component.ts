import { Component, OnInit } from '@angular/core';
import { MasterserviceService } from '../ngservices/masterservice.service';
import { apiService } from '../shared/service/api.service';
import { filterParam } from '../vendorcard/vendorcard.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplierbylocation',
  templateUrl: './supplierbylocation.component.html',
  styleUrls: ['./supplierbylocation.component.scss']
})
export class SupplierbylocationComponent implements OnInit {
  objFilterParam: filterParam;
  constructor(private router: Router ,private masterservice: MasterserviceService , private apiService: apiService,){
    this.objFilterParam = new filterParam();
  }
  locations = [];
  Categories = [];
  locationId:number=0;
  ngOnInit(){
    this.Categorie();
    this.location();
  }

  Categorie(){ 
      this.masterservice.getAllCategories().subscribe(data => {
      this.Categories = data;
      // console.log(this.Categories);
      },error => {  console.log(error) })
  }

  location(){ 
      this.masterservice.getAllLocation().subscribe(data => {
      this.locations = data;
      console.log(this.locations);
      },error => {  console.log(error) })
  }

  searchCat(e,isAllSupplier,isDreamLocation){      
    if(e){
        this.objFilterParam.catId  = e?e.categoryId:0;
        this.objFilterParam.categoryName= e?e.categoryName: '' ;
        this.objFilterParam.isDreamLocation=isDreamLocation;
        this.objFilterParam.isAllSupplier=isAllSupplier;
        this.objFilterParam.page = 1;
        this.objFilterParam.pageSize = 25;
        this.objFilterParam.sortDir = "";
        this.objFilterParam.sortedBy ="";
        this.objFilterParam.searchQuery ="";
        this.objFilterParam.locationId = this.locationId;
    }
    sessionStorage.setItem('filterParam',JSON.stringify(this.objFilterParam));
    this.router.navigate(['home/weddingvendors',this.objFilterParam.locationId]);


}





}
