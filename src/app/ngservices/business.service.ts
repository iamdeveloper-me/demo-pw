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
   SaveIntoDb(objVenderServiceVm){
     debugger;
     if(objVenderServiceVm.serviceFields==undefined){
      objVenderServiceVm.serviceFields=[];
     }
    if(objVenderServiceVm.serviceFields.length<1 || objVenderServiceVm.serviceFields.length==undefined){
      let svm={customFieldId:28,FieldValue:'Custum', id:7};
      objVenderServiceVm.serviceFields.push(svm);
    }
    console.log(JSON.stringify(objVenderServiceVm ));
   return this.http.post(this.api+'/api/Supplier/savebusinessservices',objVenderServiceVm,{headers:this.header});    
  }
  update_VendorSocialLink(model): Observable<any>{
   return this.http.post(this.api+'/api/Supplier/updatebusinessinfo',model,{headers:this.header});
  }

}
