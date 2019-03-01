import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { apiService } from 'app/shared/service/api.service';

@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.scss']
})
export class UseraccountComponent implements OnInit {

  //Popup
  personal_info:boolean=false;
  UpdatePersonal_Info:boolean=false;
  changePassword_form:boolean=false;
  wedding_details:boolean=false;
  wedding_details_update:boolean=false;
  personalInfoArray:any = {};
  UpdateInfoArray:any= {};
  //
  weddingArray:any = {};
  updateWeddingArray:any = {};
  constructor(private apiService : apiService,public toastr: ToastrService) { }
  ProfileVMObj = new MemberProfileVM();
  changePassObj = new ChangePasswordViewModel();
  WeddingDetailsObj = new MemberWeddingDetails();
  ngOnInit() {
    this.personalInfo();
    this.weddingdetails();
  }

  //Get Data Personal Info
  personalInfo(){
    this.apiService.getData(this.apiService.serverPath+'Couple/personalinfo',).subscribe(
      data => {
        // console.log(data);
        this.personalInfoArray = data;
        console.log(this.personalInfoArray)
        // this.toastr.success(data.body);
    },
      error => {
      console.log(error)
      this.toastr.error(error.statusText);
      }
    )
}

  getData_edit(personalInfoArray){
    this.ProfileVMObj = personalInfoArray;
    console.log(personalInfoArray);
    this.personal_info = true ;
    // this.personalInfo();
  }
  //Post Data Personal Info
  UpdatePersonalInfo(info){
    console.log(info);
      this.apiService.postData(this.apiService.serverPath+'Couple/UpdatePersonalInfo',info.value).subscribe(
        data => {
          console.log(info.value)
          console.log(data)
          this.UpdateInfoArray = data;
        this.toastr.success(data.message);
        this.personal_info = false ;
        info.resetForm();
        this.personalInfo();
      },
        error => {
         console.log(error)
         this.toastr.error(error.statusText);
        }
      )
  }

  aboutUpdate(infoPartner){
    this.apiService.postData(this.apiService.serverPath+'Couple/UpdatePersonalInfo',infoPartner.value).subscribe(
      data => {
        console.log(infoPartner.value)
        console.log(data)
        this.toastr.success(data.message);
        this.UpdatePersonal_Info = false;
        this.personalInfo();
        infoPartner.resetForm();
    },
      error => {
       console.log(error)
       this.toastr.error(error.statusText);
      }
    )
  }

  getWedding(weddingArray) {
    this.WeddingDetailsObj = weddingArray;
    console.log(weddingArray);
    // this.personalInfo();
  }

  //Get Wedding Details
  weddingdetails(){
    this.apiService.getData(this.apiService.serverPath+'Couple/weddingdetails',).subscribe(
      data => {
        this.weddingArray = data;
        console.log(this.weddingArray);
    },
      error => {
      console.log(error)
      this.toastr.error(error.statusText);
      }
    )
  }

  //Post Wedding Details
  UpdateWeddingDetails(wedding){
    this.apiService.postData(this.apiService.serverPath+'Couple/UpdateWeddingDetails',wedding.value).subscribe(
      data => {
        console.log(data)
        this.updateWeddingArray = data;
        console.log(this.updateWeddingArray)
        this.toastr.success(data.message);
        this.wedding_details_update = false;
        // wedding.resetForm();
        this.weddingdetails();
    },
      error => {
       console.log(error)
       this.toastr.error(error.statusText);
      }
    )
  }

    //Change Password API
    changePassword(f){
      this.apiService.postData(this.apiService.serverPath+'Accounts/changepassword',f.value).subscribe(data => {
        this.toastr.success(data.message);
          this.changePassword_form =false;
          f.resetForm();
        },
        error => {
          console.log(error)
      });
    }

  closeModel(){
    this.personal_info = false;
    this.changePassword_form =false;
    this.UpdatePersonal_Info=false;
    this.changePassword_form=false;
    this.wedding_details=false;
    this.wedding_details_update=false;
  }

}

export class MemberProfileVM {
  firstName:	string;
  lastName:	string;
  gender:	string;
  partnerFirstName:	string;
  partnerLastName:	string;
  partnerGender:	string;
  email:	string;
  phoneNumber:	string;
}

export class MemberWeddingDetails {
  weddingLocation:	string;
  // lat:	number;
  // long:	number;
  weddingDate:	string;
  numberOfGuests:	number;
  weddingVenue:	string;
  estimatedCost:	number;
  aboutWedding:	string;
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