import { Component, OnInit } from '@angular/core';
import { apiService } from 'app/shared/service/api.service';
import { filterParam } from '../vendorcard/vendorcard.component'
import { Router } from '@angular/router';
@Component({
  selector: 'app-honeymoon-destinatation',
  templateUrl: './honeymoon-destinatation.component.html',
  styleUrls: ['./honeymoon-destinatation.component.scss']
})
export class HoneymoonDestinatationComponent implements OnInit {

  constructor(private apiService : apiService,private router : Router) { }
  Honeymoon_destinations:any[];
  objFilterParam: filterParam;
  locationClickData : any;
  locationId:number=0;
  ngOnInit() {
    this.apiService.getData(this.apiService.serverPath+'PerfectWedding/honeymoondestinations').subscribe(data => {
      this.Honeymoon_destinations =data;
      console.log(this.Honeymoon_destinations);
      },error => { 
        console.log(error) 
      });
    }

    search(e,isAllSupplier,isDreamLocation,var_data){
    
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
          this.objFilterParam.locationId = this.locationId['districtId'];
      }else{
          this.objFilterParam.catId  = var_data['category'] != 0 ?var_data['category']['categoryId']:0;
          this.objFilterParam.categoryName= var_data['place_name'] ;
          this.objFilterParam.isDreamLocation=isDreamLocation;
          this.objFilterParam.isAllSupplier=isAllSupplier;
          this.objFilterParam.page = 1;
          this.objFilterParam.pageSize = 25;
          this.objFilterParam.sortDir = "";
          this.objFilterParam.sortedBy ="";
          this.objFilterParam.searchQuery ="";
          this.objFilterParam.locationId = var_data['location'];
        }
  
        console.log( this.objFilterParam.categoryName)
          sessionStorage.setItem('filterParam',JSON.stringify(this.objFilterParam));
          this.router.navigate(['home/weddingvendors',this.objFilterParam.categoryName.replace(/\s/g,'') ,this.objFilterParam.locationId ]);
    }
    searchmore(data){
      sessionStorage.setItem('Honeymoon_detail',JSON.stringify(data));
        this.locationClickData = data.honeymoonLocationId;
        const var_data = {
          category:  0,
          location: this.locationClickData,
          place_name: data.name
        }
       
        this.search(null,true,false,var_data)
    }





  }
