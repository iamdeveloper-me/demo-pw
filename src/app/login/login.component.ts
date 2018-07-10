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
    $.getScript('./assets/js/hideshow.js');
                
    $("#signupform").hide(); 
    $("#signupheading").hide();
    $("#signinuser").hide();  
  }
  loadScript(){
    this.ngOnInit();
  
  }



  constructor(private router:Router, private socialAuthService: AuthService ,private modalService: NgbModal ) {}
  closeResult: string;
  // Open default modal
  open(content) {
      this.modalService.open(content).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }
  // This function is used in open
  private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
      } else {
          return `with: ${reason}`;
      }
  }

  // Open modal with dark section
  openModal(customContent) {
      this.modalService.open(customContent, { windowClass: 'dark-modal' });
  }

    public socialSignIn(socialPlatform : string) {
      let socialPlatformProvider;
      if(socialPlatform == "facebook"){
          socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
      }else if(socialPlatform == "google"){
          socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      }

      this.socialAuthService.signIn(socialPlatformProvider).then(
          (userData) => {console.log(socialPlatform+" sign in data : " , userData)
          }
      );
    }

    vendor(){
        this.router.navigate(['vendor/dashboard']);
    }
}
