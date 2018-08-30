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

    var messageId = 0;
    var subject = "hello";
    var message = "good day";
    var sendToUserId = "34e8ea73-a8b3-4776-b032-a4c8b085671f";
    var sendByUserId = "65de65c1-d50d-4277-90be-16aad31024a9";
    var replyTo = 0;
    var sentDate = "2018-08-30T06:53:14.594Z";
    var messageStatus = 0;
    // var sendByFullName = "nkdjghfui"
    // var sendByEmail = "asd@gmail.com";

    // const header = new Headers({'Content-Type': 'application/json'});
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);

    return this.http.post('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Messages/Post',{messageId:messageId,subject:subject,message:message,sendToUserId:sendToUserId,sendByUserId:sendByUserId,replyTo:replyTo,sentDate:sentDate,messageStatus:messageStatus,sendByFullName:"fdgdf dfgdfg",sendByEmail:"asd@gmail.com"},{headers: headers})

  }

  vendorHis(){
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);

   
     console.log(headers)
     return this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Messages/messagehistory',{headers:headers})

  // }
  
  // marksread(){
  //   let headers = new Headers();
  //   var authToken = localStorage.getItem('userToken');
  //   headers.append('Accept', 'application/json')
  //   headers.append('Content-Type', 'application/json');
  //   headers.append("Authorization",'Bearer '+authToken);
  //    return this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Messages/markasread',{headers:headers})

  // }

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
