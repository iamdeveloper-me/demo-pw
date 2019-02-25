import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Object } from 'core-js/library/web/timers';
import { apiService } from '../shared/service/api.service';
import { AuthGuardService } from 'app/services/auth-guard.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MasterserviceService {
 
  constructor(public router : Router,private auth : AuthGuardService,private apiservice: apiService) {

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
    if(obj.categoryId.length==1 && obj.categoryId[0]==0){
      obj.categoryId=[];
    }
       if(obj.districts!=undefined && obj.districts.length==1 && obj.districts[0]==null||obj.districts[0]==undefined) {
        obj.districts=[];
        }
    return this.apiservice.postData(this.apiservice.serverPath + 'PerfectWedding/searchlisting',obj);
   }
   getSimilarVendors(obj){
  return this.apiservice.postData(this.apiservice.serverPath + 'PerfectWedding/similarvendors',obj);     
   }

   fillBookmark(id, type, action_which_lacation){
     if(this.auth.userActive()){
      const data = {
        "id": id,
        "type": type,
        "action": action_which_lacation,
        "promoted": true
      }
      return this.apiservice.postData(this.apiservice.serverPath + 'PerfectWedding/loguseraction',data);     
  
     }else{
      this.router.navigateByUrl('/home',{ queryParams: { login: true}});
      

     }
    
   }

}
