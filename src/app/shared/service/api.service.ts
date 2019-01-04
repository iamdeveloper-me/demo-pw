import { Injectable, } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable ,  Subscription } from 'rxjs';

@Injectable()
export class apiService {
  constructor(private http: HttpClient) { }
  serverPath = "http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/"
  getData(url) : Observable<any> {
    var authToken = localStorage.getItem('userToken');

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept' : 'application/json',
        'Authorization': 'Bearer '+authToken
      })
    };

    return this.http.get(url,httpOptions);
  }


  postData(url, reqObj) : Observable<any> {
    var authToken = localStorage.getItem('userToken');

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept' : 'application/json',
        'Authorization': 'Bearer '+authToken
      })
    };

    return this.http.post(url,reqObj,httpOptions);
  }




  // Calender Date 12-12-2019 to {year:2019,month:12,day:12}

  returnJsonDate(dashed_date){
   const date =  { "year": parseInt(dashed_date.split('-')[0])   , 
     "month": parseInt(dashed_date.split('-')[1])  ,
     "day": parseInt( dashed_date.split('-')[2])}
    return date;
  }

}