import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { apiPath } from '../shareApi/apiPath';
import { VendorServiceVM, ServiceFieldValuesVM } from 'app/vendor/business-services/business-services.component';
@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  savedBusinessService='savedService';
  private api = apiPath.url;
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
   setIntoLocalDb(data){
    localStorage.setItem('savedService',JSON.stringify(data));
   }
   SaveIntoDb(objVenderServiceVm:VendorServiceVM){
     console.log(objVenderServiceVm);
    if(objVenderServiceVm.serviceFields.length<1){
      let svm=new ServiceFieldValuesVM();
      svm.customFieldId=28;
      svm.FieldValue='Custum';
      objVenderServiceVm.serviceFields.push(svm);
    }
   return this.http.post(this.api+'/api/Supplier/savebusinessservices',objVenderServiceVm,{headers:this.header});    
  }
  update_VendorSocialLink(model): Observable<any>{
   return this.http.post(this.api+'/api/Supplier/updatebusinessinfo',model,{headers:this.header});
  }

}
