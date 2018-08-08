import { Component} from '@angular/core';
import { SignupVendorService } from '../shared/service/signup-vendor.service';
import 'rxjs/Rx';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  user = {"email": "","password": "","firstName": "","lastName": ""}
  ngOnInit() {  
//  $.material.init();
    $(".loginnav").hide(); 
    $.getScript('./assets/js/register.js');             
                 $(".show").hide();

  }
    constructor( private cservice: SignupVendorService) {}

    loadScript(){this.ngOnInit;}
    onSubmit() {   
      alert('responce');
      this.cservice.signup(this.user).subscribe((response) => console.log(response),(error)=>console.log(error)); 
      alert('responce');
    }
}
