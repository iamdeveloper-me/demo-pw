import { Injectable, } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable ,  Subscription } from 'rxjs';

@Injectable()
export class apiService {
  constructor(private http: HttpClient) { }

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
}