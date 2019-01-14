import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.scss']
})
export class AdvertiseComponent implements OnInit {

  constructor(private apiService: apiService, public toastr: ToastrService) { }
  contactInfoObj  = new ContactUsVM()
  messageType = 1;
  Phone_no ;

  ngOnInit() { }

  contact(list){
    this.apiService.postData(this.apiService.serverPath+'Home/contactus',list.value).subscribe(data => {
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
      this.Phone_no = "Not a Number";
    }else{  this.Phone_no = " "}
  }

}

export class ContactUsVM {
  name :	string
  email:	string
  subject:	string
  phoneNumber:	string
  message:	string
  messageType=1
}