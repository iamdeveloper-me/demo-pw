import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private apiService: apiService) { }
  messageType =1
  ngOnInit() {
    //this.contactus(c)
  }
  contactus(c){
    console.log(c.value)
    this.apiService.postData(this.apiService.serverPath+'Home/contactus',{
      name: "string",
      email: "string",
      subject: "string",
      phoneNumber: "string",
      message: "string",
      messageType: 1
    }).subscribe(data => {
      console.log(data)
      
    },
      error => {
       console.log(error)
      }
    )
  }
}
