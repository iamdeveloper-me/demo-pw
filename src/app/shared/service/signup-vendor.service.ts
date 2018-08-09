import { Injectable } from '@angular/core';
import {Headers , Http ,Response } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class SignupVendorService {

  constructor(private http: Http,public toastr: ToastrService) { }

  signup(user)
  {
    console.log(user);
    var firstname = user.logInInfo.userName;
    var upassword = user.logInInfo.password;
    var cpassword = user.logInInfo.confirmPassword;
    var contactPerson = user.contactInfo.contactPerson;
    var email = user.contactInfo.email;
    var phone = user.contactInfo.phone;
    var website = user.contactInfo.website;
    var countryName = user.businessInfo.country.countryName;
    var city = user.businessInfo.city;
    var postalcode = user.businessInfo.postalCode;
    var address =user.businessInfo.address ;
    var nameOfBusiness = user.businessInfo.nameOfBusiness; 
    const header = new Headers({'Content-Type': 'application/json'});
      // return this.http.post('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Accounts',{email: uemail, password: upassword, firstName: fname, lastName: lname} ,{headers: header}).map((res: Response )  =>  console.log(res));

      // return this.http.post('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Accounts',{email: email, password: upassword} ,{headers: header});

      return this.http.post('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/register',
      { logInInfo: {  userName: firstname, password: upassword,confirmPassword: cpassword},
          contactInfo: { contactPerson: contactPerson, email: email,phone: phone, website: website},
          businessInfo: {  country: {  countryName: countryName }, city: city, postalCode: postalcode,address: address, nameOfBusiness: nameOfBusiness}
        } ,{headers: header});
    }

     typeSuccess() {
      this.toastr.success('Account created!', 'Success!');
  }

}
