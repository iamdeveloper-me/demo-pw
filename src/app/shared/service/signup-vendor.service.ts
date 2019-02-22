import { Injectable } from '@angular/core';
import { Headers , Http ,Response } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupVendorService {
  ObjVendorDetails:VendorDetails;
  constructor(private http: Http,public toastr: ToastrService, public router: Router) {
    this.ObjVendorDetails = new VendorDetails();
   }

  signup(user)
  {
     const header = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/register',user
    ,{headers: header});
    }
     typeSuccess() {
      this.toastr.success('Account created!', 'Success !!');
     }
     typeError() {
      this.toastr.error('Account Not Created', 'Error !!');
  }
  typeWarning(error) {
    this.toastr.warning(error._body);
  }
  usignup(userSingUp){
    var email = userSingUp.email;
    var password = userSingUp.password;
    var confirmpass = userSingUp.confirmpass;
    var firstName = userSingUp.firstName;
    var lastName = userSingUp.lastName;
    const header = new Headers({'Content-Type': 'application/json'});
    if (password==confirmpass){
      return this.http.post('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Accounts',{email: email, password: password ,firstName:firstName, lastName:lastName} ,{headers: header});
    }
    else
      console.log("password and confirmpassword does not match");
  }

GoToNextStep(path){
this.router.navigateByUrl(path);
}

}
export class logInInfo
 {
  firstName:string;
  lastName: string;
  password: string;
  confirmPassword:string;
}
export class contactInfo {
  email: string;
  phone: string;
  website: string;
}
export class businessInfo {
  countryId: number;
  districtId: number;
  suburbId: number;
  city:string;
  postalCode:string;
  address:string;
  nameOfBusiness:string;
  pricingPlanId: number;
  payFrequency: number;
  constructor(){
    this.payFrequency=2;
    this.city="";
    this.districtId=0;
  }
}
export class vendorCategories{
  vendorCategories: Array<VendorCatrgoryAddVM>;
  constructor(){
    this.vendorCategories = new Array<VendorCatrgoryAddVM>();
  }
 }
 export class VendorCatrgoryAddVM {
  categoryId:number;
 }
 export class VendorDetails{
   logInInfo: logInInfo;
   contactInfo:	contactInfo;
   businessInfo:	businessInfo;
  vendorCategories:Array<VendorCatrgoryAddVM>;
  constructor(){
    this.logInInfo = new logInInfo();
    this.contactInfo = new contactInfo();
    this.businessInfo = new businessInfo();
    this.vendorCategories = new Array<VendorCatrgoryAddVM>();

  }
 }