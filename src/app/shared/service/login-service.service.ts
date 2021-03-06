import { Injectable } from '@angular/core';
import {Headers , Http ,Response } from '@angular/http';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: Http,public toastr: ToastrService) { }
  
  login(user)
  {
  var username = user.username;
  var password = user.password; 
  localStorage.setItem('profile','1');
  // localStorage.setItem('profile','2');
  //Profile Completed Popup!!
  const headers = new Headers({'Content-Type':'application/json'});
  return this.http.post("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/auth/login",{userName: username , password: password},{headers:headers});
}
typeSuccess() {
  this.toastr.success('Login successfully', 'Success!');
}

typeWarning() {
  this.toastr.warning('Invalid Username or Password');
}

typeLogout() {
  this.toastr.success('Logout successfully', 'Success!');
}
}