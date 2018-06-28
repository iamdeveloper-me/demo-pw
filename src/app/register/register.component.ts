import { Component, OnInit } from '@angular/core';
import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular5-social-login';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {



  ngOnInit() {
  }
    constructor( private socialAuthService: AuthService ) {}

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
}
