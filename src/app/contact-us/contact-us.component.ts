import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
 
  constructor(private apiService: apiService, public toastr: ToastrService) { }
  messageType =1
  name: "string"
  email: "string"
  subject: "string"
  phoneNumber: "string"
  message: "string"
  Phone_no ;
  ngOnInit() {
    //this.contactus(c)
  }
  contactus(list){
    console.log(list.value)
    this.apiService.postData(this.apiService.serverPath+'Home/contactus',list.value).subscribe(data => {
      console.log(data)
      this.toastr.success(data.message);
      list.reset()
    },
      error => {
       console.log(error)
       this.toastr.error(error._body.split('[')[1].split(']')[0]);
      }
    )
  }
  keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
      this.Phone_no = "not a number";
    }else{  this.Phone_no = " "}
  }
}
