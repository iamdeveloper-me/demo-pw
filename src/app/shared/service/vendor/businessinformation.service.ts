import { Injectable } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessinformationService {

  constructor(config: NgbCarouselConfig ,public http: Http) { 
    
  }
  ngOnInit()  {

    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);   
    this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/myprofile',{headers:headers}).subscribe(data =>{ 
    
      })
   }

}

