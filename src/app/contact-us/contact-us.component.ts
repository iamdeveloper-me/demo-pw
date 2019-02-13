import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
import { ToastrService } from 'ngx-toastr';
import { ContactUsVM } from '../advertise/advertise.component';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactInfoObj: ContactUsVM;
  subjects = ["General Enquiry","Business Enquiry - Advertising","Complaints"];
  constructor(private apiService: apiService, public toastr: ToastrService, private meta : Meta, private title : Title ) {
    this.contactInfoObj = new ContactUsVM();
  }
  Phone_no ;
  ngOnInit() {
    this.title.setTitle('Team Contact | Perfect Weddings');    
    this.meta.addTag({name:'description',content:'Team Contact | Perfect Weddings'});   

  }
  contact(list){
    this.apiService.postData(this.apiService.serverPath+'Home/contactus',list.value).subscribe(data => {
      this.toastr.success(data.message);
      list.resetForm();
    },
      error => {
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
