import { Injectable } from '@angular/core';
import { Headers , Http ,Response } from '@angular/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SignupVendorService {

  constructor(private http: Http,public toastr: ToastrService) { }

  signup(user)
  {
    console.log(user);
    var firstname = user.logInInfo.firstName;
    var lastname = user.logInInfo.lastName;
    var upassword = user.logInInfo.password;
    var cpassword = user.logInInfo.confirmPassword;

    var contactPerson = user.contactInfo.contactPerson;

    var email = user.contactInfo.email;
    // var phone = user.contactInfo.phone;
    var website = user.contactInfo.website;
    var city = user.businessInfo.city;
    var postalcode = user.businessInfo.postalCode;
    var address =user.businessInfo.address ;
    var nameOfBusiness = user.businessInfo.nameOfBusiness;
    var planId = user.businessInfo;
    var categoryId = user.vendorCategories[0].categoryId;
    const header = new Headers({'Content-Type': 'application/json'});
 
    return this.http.post('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/register',
      { logInInfo: {  firstName: firstname,lastName:lastname, password:upassword,confirmPassword: cpassword},

        contactInfo: { contactPerson: contactPerson, email: email, phone: "9826812185", website: website},
        businessInfo: {countryId:1, city: city, postalCode: postalcode,address: address, nameOfBusiness: nameOfBusiness, 
                       pricingPlanId:planId['pricingPlanId'] ,payFrequency:planId['payFrequency'] },
        vendorCategories: [ { categoryId: categoryId }]
        } ,{headers: header});


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



}
