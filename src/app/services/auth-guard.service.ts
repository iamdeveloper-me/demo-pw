import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate,CanActivateChild {
  token = sessionStorage.getItem('userToken')
  constructor(private router:Router) { }
  canActivate(){
   if(this.token == null || this.token == undefined){
      this.router.navigateByUrl('/home');
    }else{
      return true;
    }
  }
  canActivateChild(){
    if(this.token == null || this.token == undefined){
      this.router.navigateByUrl('/home');
    }else{
    return true;
  }
  }
  userActive(){
    if(sessionStorage.getItem('_u')==null || sessionStorage.getItem('_u')==undefined){ 
      return false;
    }else{
      return true;
    }
}
  vendorActive(){
    if(sessionStorage.getItem('_v')==null || sessionStorage.getItem('_v')==undefined){
     return false;
    }else{
    return true;
  }
  }
}


