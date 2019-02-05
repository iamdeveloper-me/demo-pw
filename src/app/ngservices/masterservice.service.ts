import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Object } from 'core-js/library/web/timers';
import { apiService } from '../shared/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class MasterserviceService {
 
  constructor(private apiservice: apiService) {

   }
   getAllCategories(): Observable<any>{
    return this.apiservice.getData(this.apiservice.serverPath+'Categories/categorieswithservices');
   }
   getAllLocation(){
     return this.apiservice.getData(this.apiservice.serverPath+'LookupMaster/alllocation');
   }
   getFilters(categoryId){
     return this.apiservice.postData(this.apiservice.serverPath + 'PerfectWedding/searchfilters/',categoryId);
   }
   getFilterResult(obj){
    console.log(JSON.stringify(obj));
       if(obj.districts.length==1 && obj.districts[0]==null){
        obj.districts=[];
        }
    return this.apiservice.postData(this.apiservice.serverPath + 'PerfectWedding/searchlisting',obj);
   }
   getSimilarVendors(obj){
  return this.apiservice.postData(this.apiservice.serverPath + 'PerfectWedding/similarvendors',obj);     
   }

}
