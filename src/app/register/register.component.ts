import { Component} from '@angular/core';
import { SignupVendorService } from '../shared/service/signup-vendor.service';
import { HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  categoryArray:string[];
 user = { logInInfo: {  userName: "", password: "",confirmPassword: ""},
          contactInfo: { contactPerson: "", email: "",phone: "", website: "", phoneType: "" },
          businessInfo: { countryId: 0, country: { countryId: 0, countryName: "" }, city: "", postalCode: "",address: "",lat: 0,long: 0, nameOfBusiness: "", businessDetails: ""}
        }
   ngOnInit() {  
    $(".loginnav").hide(); 
    $.getScript('./assets/js/register.js');             
    $(".show").hide();
    let obs = this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Categories");

    obs.subscribe(data => {
      this.categoryArray =data as string[];
    })

  }
    constructor( private cservice: SignupVendorService,private http: HttpClient) {}

    loadScript(){this.ngOnInit;}
    onSubmit() {   
      //console.log(this.user); 
      //this.cservice.signup(this.user).subscribe((response) => console.log(response),(error)=>console.log(error)); 
   
      this.cservice.signup(this.user).subscribe(( data )  =>  {
        console.log(data);
    });}


    // Success Type
    typeSuccess() {
      this.cservice.typeSuccess();
  }

}
