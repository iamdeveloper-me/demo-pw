import { Component} from '@angular/core';
import { SignupVendorService } from '../shared/service/signup-vendor.service';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  categoryArray:string[];
  planArray:string[];

  countryArray:string[];
  public arra = new Array();public district = new Array();public suburb = new Array();
  user = 
  {logInInfo: { firstName: "", lastName: "", password: "", confirmPassword: "" },
  contactInfo: { contactPerson: "", email: "", phone: "", website: ""},
   businessInfo: { countryId: "", city: "", postalCode: "", address: "", countryName: "" ,nameOfBusiness: "",pricingPlanId: "" ,payFrequency:""}, 
   vendorCategories: [ { categoryId: "" } ] }

  ngOnInit() {
            $(".loginnav").hide(); 
            $.getScript('./assets/js/register.js');  
            $.getScript('./assets/js/membershipslider.js');            
            $(".show").hide();

            $("div").removeClass( "modal-backdrop");
            let obs = this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Categories/allcategories");
            obs.subscribe(data => { this.categoryArray = data as string[];  
            });
          
            let country = this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/LookupMaster/countries");
            country.subscribe(data => { 
              this.countryArray = data as string[];  
              console.log(this.countryArray);
              this.arra = this.countryArray
            });
            let obj = this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/LookupMaster/pricingplans");
            obj.subscribe(data => {
              this.planArray = data as string[]; 
              console.log(this.planArray);
            });

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
    constructor( private cservice: SignupVendorService,private http: HttpClient , private router: Router ) {}

 loadScript(){this.ngOnInit;}

    onSubmit() {   
   
      this.cservice.signup(this.user).subscribe(( data )  =>  
      { console.log(data.json())
        this.cservice.typeSuccess();
        this.router.navigate(['../home'])
       }
      ,error => {console.log(error);
     this.cservice.typeWarning(error);
    })

  }
    //   this.cservice.signup(this.user).subscribe(( data )  =>  {
    //     console.log(data.json())
    //     var abc = data.json()
        
    //    if(data.json().message == 'Account created'){
    //      this.cservice.typeSuccess();
    //    }else{
    //     this.cservice.typeError(); 
    //    } 
        
    // });}

idgenerate(users){
  console.log(users)
   this.user.businessInfo.pricingPlanId = users.pricingPlanId;
   this.user.businessInfo.payFrequency = '1';
   console.log(this.user.businessInfo.payFrequency );
}
annualPrice(users){ 
  this.user.businessInfo.pricingPlanId = users.pricingPlanId;
  this.user.businessInfo.payFrequency = '2';
  console.log(this.user.businessInfo.payFrequency );
 }
 typeSuccess() {
        // this.cservice.typeSuccess();

    }

    country(event): void {  
      const newVal = event.target.value;
      this.district = this.arra[newVal].districts
    }
    districtA(event): void {  
      const newVal = event.target.value;
      this.suburb = this.district[newVal].suburb
    }

}











