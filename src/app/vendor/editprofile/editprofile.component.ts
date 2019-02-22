import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { apiService } from '../../shared/service/api.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})

export class EditprofileComponent implements OnInit {

  profileInfoObj = new PersonalInfoVM()
  changePassObj = new ChangePasswordViewModel()
  subscriptionObj  = new SubscriptionSettingsVM()

 constructor(private apiService: apiService,private router: Router,public http: Http ,public toastr: ToastrService) { }

  fbAvailable = false;
  personal_data_update = false;
  changePassword_form = false;
  myprofile:any = [];
  SubscriptionArray:any = [];
  myplans:any = []; 

  ngOnInit() {  
    this.getData(); 
    this.memberShip();
    this.GetSubscription();
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
  }

  //getData Profile
  getData(){
    this.apiService.getData(this.apiService.serverPath+'Supplier/mypersonalinfo').subscribe(data => {
      this.myprofile = data;
      this.profileInfoObj = data;
      },
        error => {
         console.log(error)
    });
}
  getData_edit(){
    this.personal_data_update = true ;
    this.getData();
  }

  //update Data Profile
  updateData(f1){
    this.apiService.postData(this.apiService.serverPath+'Supplier/updatepersonalinfo',f1.value).subscribe(data => {
      this.toastr.success(data.message);
      f1.resetForm();
        this.personal_data_update = false ;
        this.getData();
      },
      error => {
        console.log(error);
        this.toastr.error("Profile Not Update!");
    })  
  }

  //Change Password API
  changePassword(f){
    this.apiService.postData(this.apiService.serverPath+'Accounts/changepassword',f.value).subscribe(data => {
      this.toastr.success(data.message);
      f.resetForm();
        this.changePassword_form =false;
        f.resetForm();
      },
      error => {
        console.log(error)
    });
  }

  //membership api
  memberShip(){
    this.apiService.getData(this.apiService.serverPath+'Supplier/mymembership').subscribe(data => {
    this.myplans = data;
      },
      error => {
        console.log(error)
      }); 
  }

  //Subscription API
  GetSubscription(){
    this.apiService.getData(this.apiService.serverPath+'Supplier/subscriptionsettings').subscribe(data => {
    this.SubscriptionArray = data;
    },
    error => {
      console.log(error)
    }); 
  }
//Update Subscription API
  updatesub(s){
    this.apiService.postData(this.apiService.serverPath+'Supplier/updatesubscriptionsettings',s.value).subscribe(data => {
    this.toastr.success(data.message);
      s.reset()
    },
    error => {
      console.log(error)
    })
  }
//Close Model
  closeModel(){
    this.personal_data_update = false;
    this.changePassword_form =false;
  }

}
// Main Class END

export class PersonalInfoVM {
  firstName:	string;
  lastName:	string;
  email:	string;
  phoneNumber:	string;
}

export class SubscriptionSettingsVM {
  marketingEmails: boolean;
  notifications:	boolean;
  appUpdates:	boolean;
}

export class ChangePasswordViewModel {
  oldPassword:	string;
  newPassword:	string;
  maxLength: number
  minLength: number
  confirmPassword: string;
  constructor(){
    this.maxLength = 100;
    this.minLength = 6;
  }
}