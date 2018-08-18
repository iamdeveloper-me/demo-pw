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
 user = { logInInfo: {  userName: "", password: "",confirmPassword: "",contactPerson: "",email: "",phone: "", phoneType: ""},
          contactInfo: {   },
          businessInfo: { countryId: 0, country: { countryId: 0, countryName: "" }, city: "", website: "",address: "",lat: 0,long: 0, nameOfBusiness: "", businessDetails: ""}
        }
   ngOnInit() {  
    $(".loginnav").hide(); 
    $.getScript('./assets/js/register.js');             
    $(".show").hide();
     $("div").removeClass( "modal-backdrop");
    let obs = this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Categories");

    obs.subscribe(data => {
      this.categoryArray =data as string[];
    })


$(".Suppliertab").click(function(){
    $("#filter").show();
    $("#action").hide();  
    $(".Suppliertab").addClass("gradint_blue"); 
    $(".Registertab").removeClass("gradint_blue");  
  
  });

    $(".Registertab").click(function(){
    $("#filter").hide();
    $("#action").show();  
    $(".Suppliertab").removeClass("gradint_blue"); 
    $(".Registertab").addClass("gradint_blue");  
  });

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
