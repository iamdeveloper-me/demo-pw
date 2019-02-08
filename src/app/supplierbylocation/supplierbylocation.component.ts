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
  locationClickData : any;
  ngOnInit(){
    this.location();
  }

  location(){ 
      this.masterservice.getAllLocation().subscribe(data => {
      this.locations = data;
      console.log(this.locations);
      },error => {  console.log(error) })
  }

  searchLocation(location:any){      
    console.log(JSON.stringify(location));
    if(location!= null){
      this.objFilterParam.categoryName=this.objFilterParam.categoryName==undefined?'All Categories':this.objFilterParam.categoryName;
      this.objFilterParam.isDreamLocation=false;
      this.objFilterParam.isAllSupplier=false;
      this.objFilterParam.page = 0;
      this.objFilterParam.pageSize = 25;
      this.objFilterParam.sortDir = "";
      this.objFilterParam.sortedBy ="";
      this.objFilterParam.searchQuery ="";
      this.objFilterParam.locationId = location.districtId;
  }
      sessionStorage.setItem('filterParam',JSON.stringify(this.objFilterParam));
      this.router.navigate(['home/weddingvendors',this.objFilterParam.categoryName.replace(/\s/g,'')]);
}

}
