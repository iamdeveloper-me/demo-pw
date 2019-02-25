import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
import { ToastrService } from 'ngx-toastr';
import { ContactUsVM } from '../advertise/advertise.component';
import { Meta, Title } from '@angular/platform-browser';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactInfoObj: ContactUsVM;
  listCaptchaValue;
  subjects = [
    { id:1,name:"General Enquiry" },
    { id:3,name:"Business Enquiry - Advertising" },
    { id:4,name:"Complaints" }
  ];
  constructor(private apiService: apiService, public toastr: ToastrService, private meta : Meta, private title : Title,private router : Router ) {
    this.contactInfoObj = new ContactUsVM();
  }
  Phone_no ;
  ngOnInit() {
    this.title.setTitle('Team Contact | Perfect Weddings');    
    this.meta.addTag({name:'description',content:'Team Contact | Perfect Weddings'});   

  }

  resolved(captchaResponse: string) {
    // console.log(`Resolved captcha with response ${captchaResponse}:`);
}


  contact(list){
    this.apiService.postData(this.apiService.serverPath+'Home/contactus',list.value).subscribe(data => {
      console.log(list.value);
      console.log(data);
      list.resetForm();
      // this.toastr.success(data.message);
      grecaptcha.reset();
      swal({
  
        title: "Thank You!",
        text: "Your submition has been received.",
        type: "success",
        showCancelButton: true,
        confirmButtonClass: "btn-default",
        confirmButtonText: "Back to Homepage",
        cancelButtonText: "Close",
    }).then((res)=>{
                    if(res.value===true){
                      this.router.navigate(['/home'])
                   } else{
                      //  console.log('Cancel Process !');
                    }
  },error=>{
      alert(JSON.stringify(error));
      this.toastr.error(error._body.split('[')[1].split(']')[0]);
    })
    return;
   
    },)
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
