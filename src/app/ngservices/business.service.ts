import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { apiPath } from '../shareApi/apiPath';
import { VendorServiceVM } from 'app/vendor/business-services/business-services.component';
@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  savedBusinessService='savedService';
  private api = apiPath.url;
  public oldModel:any;
  private postUrl='/api/Supplier/savebusinessservices'; 
  private header:Headers;
  constructor(public http:Http) {
    this.header = new Headers()
    var authToken = localStorage.getItem('userToken');
              var categoryid = localStorage.getItem('categoryid');
              this.header.append('Accept', 'application/json')
              this.header.append('Content-Type', 'application/json');
              this.header.append("Authorization",'Bearer '+authToken);
   }  
   
   SaveIntoDb(obj){
   return this.http.post(this.api+'/api/Supplier/savebusinessservices',obj,{headers:this.header});    
  }
  update_VendorSocialLink(model): Observable<any>{
   return this.http.post(this.api+'/api/Supplier/updatebusinessinfo',model,{headers:this.header});
  }

}
