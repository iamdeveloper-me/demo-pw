import { Component, OnInit , Input} from '@angular/core';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  })
export class LoginComponent implements OnInit {
  ngOnInit() {
 
     //loginpage
     $("#id9").hide();
     $("#id19").hide();
     $(".signup_click").click(function(){
       $("#panel8").addClass( "in");
       $("#panel8").addClass( "active");
       $("#panel7").removeClass( "active");
       $("#panel7").removeClass( "show");
       $("#panel7").removeClass( "in");
       $(".logintab").removeClass( "active");
       $(".registertab").addClass( "active");
     });
 
     $(".signin_click").click(function(){
       $("#panel8").removeClass( "in");
       $("#panel8").removeClass( "active");
       $("#panel8").removeClass( "show");
       $("#panel7").addClass( "active");
       $("#panel7").addClass( "show");
       $("#panel7").addClass( "in");
       $(".logintab").addClass( "active");
       $(".registertab").removeClass( "active");
     });
 
    
    //end
  }
 //loginpage
 loadScript(){ 
    $("#panel9").addClass( "in");
    $("#panel9").addClass( "active");
    $("#panel9").addClass( "show");
    $("#panel7").removeClass( "active");
    $("#panel7").removeClass( "show");
    $("#panel7").removeClass( "in");
    $("#panel8").removeClass( "in");
    $("#panel8").removeClass( "active");
    $("#panel8").removeClass( "show");
   $(".vendorlogin").show();
   $(".customerlogin").hide();
   
   }
   userin(){
   $("#panel9").removeClass( "in");
   $("#panel9").removeClass( "active");
   $("#panel9").removeClass( "show");
   $("#panel7").addClass( "active");
   $("#panel7").addClass( "show");
   $("#panel7").addClass( "in");
   $("#panel8").removeClass( "in");
   $("#panel8").removeClass( "active");
   $("#panel8").removeClass( "show");
   $(".vendorlogin").hide();
   $(".customerlogin").show();
   }
//end


  constructor() {}
}
