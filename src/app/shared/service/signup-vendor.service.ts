import { Injectable } from '@angular/core';
import {Headers , Http ,Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SignupVendorService {

  constructor(private http: Http) { }

  signup(user)
  {
    var useremail = user.email;
    var userpassword = user.password;
    var fname = user.firstName;
    var lname = user.lastName;
    
    const header = new Headers({'Content-Type': 'application/json'});
      return this.http.post('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Accounts',{email: useremail, password: userpassword, firstName: fname, lastName: lname} ,{headers: header}).map((res: Response )  =>  console.log(res));
     }
}
