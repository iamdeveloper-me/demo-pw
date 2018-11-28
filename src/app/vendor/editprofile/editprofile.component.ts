import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

 constructor(private router: Router,public http: Http ,public toastr: ToastrService) { }
 private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/myprofile'
 vendor: any = {
    firstName: '',
    lastName: '',
    phoneNumber:'',
    // email : '',
    vendorContactInfo:{ email:''}
};
fbAvailable = false;
personal_data_update = false;
changePassword_form = false;
 private geturl : string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/mypersonalinfo'
  getaccount : any = {};

 private updateurl : string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/updatepersonalinfo' 
  updateaccount : any = {};

 private changepassurl : string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Accounts/changepassword'
  changepass : any = {};

 private membershipurl : string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/mymembership'
  membershipdetail : any = {
    startDateString:'',
    endDateString:'',
    pricingPlan: {
      title: '',
      dateAddedOnString:''
    },
  };

  private subscriptionurl : string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/subscriptionsettings'
  mysub : any = {};

  private subupdateurl : string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/updatesubscriptionsettings'
  myupdatesub : any = {};
  
  ngOnInit() {   
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');


    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
    if(!authToken) 
   {  this.router.navigate(['../home']);
    }
    this.http.get(this.url,{headers:headers}).subscribe(
      data =>{ this.vendor = data.json();
               console.log(this.vendor);
      });

    //membership api
    this.http.get(this.membershipurl,{headers:headers}).subscribe(
      data =>{  
              // console.log("zxdfdsf");
               console.log(data.json());
              this.membershipdetail = data.json();
      });
    
  }

  //Subscription Api
  getSub(data){
    this.mysub = data;
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);

    this.http.get(this.subscriptionurl,{headers:headers}).subscribe(
      data =>{ this.mysub = data.json();
               console.log(this.mysub);
      });
  }


  updatesub(data){
    console.log(data);
    // console.log(s);
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);

    const sub =  
    {
      appUpdates: data.value.appUpdates,
      marketingEmails: data.value.marketingEmails,
      notifications: data.value.notifications,
    }
    console.log(sub);
    this.http.post(this.subupdateurl,sub,{headers:headers}).subscribe(
      data =>{ 
        this.myupdatesub = data.json();
         alert("Profile Updated!");
        this.toastr.success("subscription update sucessfully");
    },error=>{console.log(error)});

   }

  //getData Profile
  getData(data){
    this.getaccount = data;
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('  Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);

    this.http.get(this.geturl,{headers:headers}).subscribe(
      data =>{ this.vendor = data.json();
               console.log(this.vendor);
      });
}

  //update Data Profile
  updateData(data){
    // this.updateaccount = data;
    console.log(data);
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);

    const update =  
      {
        firstName : data.value.firstName,
        lastName : data.value.lastName,
        email : data.value.email,
        phoneNumber : data.value.phoneNumber,
      }
    console.log(update);
    this.personal_data_update = false;
    this.http.post(this.updateurl,update,{headers:headers}).subscribe(
      data =>{ 
        this.vendor = data.json();
        this.toastr.success("profile update sucessfully");
         alert("Profile Updated!");
        this.personal_data_update = false;
    },error=>{console.log(error)});
  }

  changePassword(f){
  //  console.log(f.value);
    const cp = {
      OldPassword : f.value.OldPassword,
      NewPassword :  f.value.NewPassword,
      ConfirmPassword : f.value.ConfirmPassword
    }
    console.log(cp);
    if(f.value.NewPassword == f.value.ConfirmPassword){
      // alert("Password Match!");
      let headers = new Headers();
      var authToken = localStorage.getItem('userToken');
      headers.append('Accept', 'application/json')
      headers.append('Content-Type', 'application/json');
      headers.append("Authorization",'Bearer '+authToken);
      this.http.post(this.changepassurl,cp,{headers:headers}).subscribe(
        data =>{
                 console.log(data.json());
                 this.toastr.success("your password reset sucessfully");
                 alert("password reset sucessfully!");
                 this.changePassword_form =false;
        },error=>{console.log(error)});
    }
  }


closeModel(){
  this.personal_data_update = false;
  this.changePassword_form =false;
}


}
