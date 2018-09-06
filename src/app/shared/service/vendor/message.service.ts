import { Injectable } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
 
  constructor(config: NgbCarouselConfig ,public http: Http) { }

  message(vendor){
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    var userId = localStorage.getItem('userId')
    var vendorId = localStorage.getItem('vendorId')
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
   
    
    // var messageId = 0;
    var subject = "hello";
    var message = vendor.message;
    var sendToUserId = userId;
    var sendByUserId = vendorId;
    var replyTo = 0;
    // var sentDate = "2018-08-30T06:53:14.594Z";
    // var messageStatus = 0;
    var sendByFirstName = vendor.sendByFirstName;
    var sendByLastName = vendor.sendByLastName;
    var sendByEmail = vendor.sendByEmail;
    
    alert("jhihuihuih");
    console.log(sendByFirstName);
    console.log(sendByLastName);
    return this.http.post('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Messages/Post',{subject:subject,message:message,replyTo:replyTo,sendByFirstName:sendByFirstName,sendByLastName:sendByLastName,sendByUserId:sendByUserId,sendToUserId:sendToUserId,sendByEmail:sendByEmail},{headers: headers})

  }

  vendorHis(){
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
    return this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Messages/messagehistory',{headers:headers})

  // }
  
  // marksread(){
  //   let headers = new Headers();
  //   var authToken = localStorage.getItem('userToken');
  //   headers.append('Accept', 'application/json')
  //   headers.append('Content-Type', 'application/json');
  //   headers.append("Authorization",'Bearer '+authToken);
  //    return this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Messages/markasread',{headers:headers})

  

  // markstared(){
  //   let headers = new Headers();
  //   var authToken = localStorage.getItem('userToken');
  //   headers.append('Accept', 'application/json')
  //   headers.append('Content-Type', 'application/json');
  //   headers.append("Authorization",'Bearer '+authToken);
  //   return this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Messages/markstared',{headers:headers})


  }
  ngOnInit()  {

    
   
}

}
