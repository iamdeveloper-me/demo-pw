import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate,CanActivateChild {

  constructor(private router:Router) { }
  canActivate(){
    let Sessiondata=sessionStorage.getItem('userToken');
    

    if(sessionStorage.getItem('userToken')==null || sessionStorage.getItem('userToken')==undefined){
   
      this.router.navigateByUrl('/home');
    }else{
    return true;}
  }
  canActivateChild(){
    if(sessionStorage.getItem('userToken')==null || sessionStorage.getItem('userToken')==undefined){
      this.router.navigateByUrl('/home');
    }else{
    return true;}
  }
}


