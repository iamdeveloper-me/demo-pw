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
    console.log(user);
    var firstname = user.logInInfo.firstName;
    var lastname = user.logInInfo.lastName;
    var upassword = user.logInInfo.password;
    var cpassword = user.logInInfo.confirmPassword;

    var contactPerson = user.contactInfo.contactPerson;

    var email = user.contactInfo.email;
     var phone = user.contactInfo.phone;
    var website = user.contactInfo.website;
    var city = user.businessInfo.city;


    var countryId = user.businessInfo.countryId;
    var districtId = user.businessInfo.districtId;
    var suburbId = user.businessInfo.suburbId;



    var postalcode = user.businessInfo.postalCode;
    var address =user.businessInfo.address ;
    var nameOfBusiness = user.businessInfo.nameOfBusiness;
    var planId = user.businessInfo;
    console.log(planId);
    var categoryId = user.vendorCategories[0].categoryId;
    const header = new Headers({'Content-Type': 'application/json'});
 const a =    { logInInfo: {  firstName: firstname,lastName:lastname, password:upassword,confirmPassword: cpassword},

 contactInfo: { contactPerson: contactPerson, email: email, phone: phone, website: website},
 businessInfo: {countryId:countryId,districtId:districtId ,suburbId:suburbId,city: city, postalCode: postalcode,address: address, nameOfBusiness: nameOfBusiness, 
                pricingPlanId:planId.pricingPlanId ,payFrequency: parseInt(planId.payFrequency) },
 vendorCategories: [ { categoryId: categoryId }]
 }
 console.log(a)
    return this.http.post('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/register',a
    ,{headers: header});


    }

     typeSuccess() {
      this.toastr.success('Account created!', 'Success !!');

 


  }
     typeError() {
      this.toastr.error('Account Not Created', 'Error !!');
  }
  typeWarning(error) {
    this.toastr.warning(error);
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
  phoneType: string;
}
export class businessInfo {
  countryId: 0;
  districtId: 0;
  suburbId: 0;
  city:string;
  postalCode:string;
  address:string;
  lat: 0;
  long: 0;
  nameOfBusiness:string;
  businessDetails: string;
  pricingPlanId: 0;
  payFrequency: 0;
  website: string;
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
  logInInfo: VendorLogInInfo;
  contactInfo:	VendorContactInfo
  businessInfo:	VendorBusinessInfo
  vendorCategories:Array<VendorCatrgoryAddVM>
 }