import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { apiService } from 'app/shared/service/api.service';
import { Observable } from 'rxjs';

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
}
