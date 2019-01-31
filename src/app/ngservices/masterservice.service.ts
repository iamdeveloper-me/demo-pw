import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { apiService } from 'app/shared/service/api.service';
import { Observable } from 'rxjs';
import { Object } from 'core-js/library/web/timers';

@Injectable({
  providedIn: 'root'
})
export class MasterserviceService {
  abc:Array<any>;
  constructor(private apiservice: apiService) {

   }
   getAllCategories(): Observable<any>{
    return this.apiservice.getData(this.apiservice.serverPath+'Categories/categorieswithservices');
   }
   getAllLocation(){
     return this.apiservice.getData(this.apiservice.serverPath+'LookupMaster/alllocation');
   }
   getFilters(categoryId){
     console.log(categoryId);
     debugger;
     return this.apiservice.postData(this.apiservice.serverPath + 'PerfectWedding/searchfilters/',categoryId);
   }
   getFilterResult(obj){
     debugger;
     if(obj.districts.length==1 && obj.districts[0]==null){
      obj.districts=[];
     }
     if(obj.categoryId.length==0){
       obj.categoryId.push(0);
     }
     console.log(JSON.stringify(obj));
    return this.apiservice.postData(this.apiservice.serverPath + 'PerfectWedding/searchlisting',obj);
   }
   getSimilarVendors(obj){
  return this.apiservice.postData(this.apiservice.serverPath + 'PerfectWedding/similarvendors',obj);     
   }

}
