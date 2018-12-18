import { Component, OnInit } from '@angular/core';
import { SignupVendorService } from '../../shared/service/signup-vendor.service';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-step-first',
  templateUrl: './step-first.component.html',
  styleUrls: ['./step-first.component.scss']
})
export class StepFirstComponent implements OnInit {
  categoryArray:string[];

  public arra = new Array();
  user = 
  {
   vendorCategories: [ { categoryId: "" } ] 
  }

  ngOnInit() {
            // $(".loginnav").hide(); 
            // $.getScript('./assets/js/register.js');  
            // $.getScript('./assets/js/membershipslider.js');            
            // $(".show").hide();

            // $("div").removeClass( "modal-backdrop");
            let obs = this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Categories/allcategories");
            obs.subscribe(data => { this.categoryArray = data as string[];  
            });

            // $(".Suppliertab").click(function(){
            //     $("#filter").show();
            //     $("#action").hide();  
            //     $(".Suppliertab").addClass("gradint_blue"); 
            //     $(".Registertab").removeClass("gradint_blue");  
            //   });

            //     $(".Registertab").click(function(){

            //     $("#filter").hide();
            //     $("#action").show();  
            //     $(".Suppliertab").removeClass("gradint_blue"); 
            //     $(".Registertab").addClass("gradint_blue");  
            //   });

  }
    constructor( private cservice: SignupVendorService,private http: HttpClient , private router: Router ) {}

 loadScript(){
   this.ngOnInit;
  }

    onSubmit1() {  
      // this.router.navigate(['/register/step-second']);  
 
      console.log(this.user)
      this.cservice.signup(this.user).subscribe(( data )  =>  
      { console.log(data.json())
        this.cservice.typeSuccess();
        // this.router.navigate(['../home'])
       }
      ,error => {console.log(error);
     this.cservice.typeWarning(error);
    })

  }


}
