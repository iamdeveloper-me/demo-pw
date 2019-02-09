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
    this.locations=[
      { 'districtId':1, 'locationName': 'Black River', 'className': 'col-sm-12 citybox1', 'locationUrl': '../../assets/img/black_river_img.jpg'},
      { 'districtId':3, 'locationName': 'Flacq', 'className': 'col-sm-6 citybox cityboxcontant mob375', 'locationUrl': '../../assets/img/flacq.jpg'},
      { 'districtId':2, 'locationName': 'Grand Port', 'className': 'col-sm-6 citybox cityboxcontant', 'locationUrl': '../../assets/img/gand_port.jpg'},
      { 'districtId':4, 'locationName': 'Moka', 'className': 'col-sm-4 citybox', 'locationUrl': '../../assets/img/moka_img.jpg'},
      { 'districtId':5, 'locationName': 'Pamplemousses', 'className': 'col-sm-8 citybox', 'locationUrl': '../../assets/img/pamless.jpg'},
      { 'districtId':6, 'locationName': 'Plaines-Wilhems', 'className': 'col-sm-8 citybox', 'locationUrl': '../../assets/img/plains_will.jpg'},
      { 'districtId':7, 'locationName': 'Port-Louis', 'className': 'col-sm-4 citybox', 'locationUrl': '../../assets/img/port_louis.jpg'},
      { 'districtId':8, 'locationName': 'Riviere du Rempart', 'className': 'col-sm-6 citybox citybox1', 'locationUrl': '../../assets/img/maxresdefault.jpg'},
      { 'districtId':18, 'locationName': 'Roche Bon Dieu - Trefles', 'className': 'col-sm-6 citybox', 'locationUrl': '../../assets/img/rodrigues.jpg'},
    ]
      this.masterservice.getAllLocation().subscribe(data => {
//      this.locations = data;
      console.log(JSON.stringify(data));
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
      this.router.navigate(['home/weddingvendors']);
}

}
export class Locations{
  locationId:number;
  locationName:string;
  locationUrl:string;
  locationClass:string;
}
