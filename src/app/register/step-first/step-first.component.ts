import { Component, OnInit, ViewChild } from '@angular/core';
import { SignupVendorService, VendorDetails, vendorCategories, VendorCatrgoryAddVM } from '../../shared/service/signup-vendor.service';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/Rx';
import { CategoryVm } from 'app/vendor/business-services/business-services.component';

@Component({
  selector: 'app-step-first',
  templateUrl: './step-first.component.html',
  styleUrls: ['./step-first.component.scss']
})
export class StepFirstComponent implements OnInit {
  categoryArray:string[];
  objVendorDetails: VendorDetails;
  public arra = new Array();
  num_CategoryId:0;
  user = 
  {
   vendorCategories: [ { categoryId: "" } ] 
  }
   @ViewChild('x') public tooltip: NgbTooltip;
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
    constructor( private cservice: SignupVendorService,private http: HttpClient , private router: Router ) {
      this.objVendorDetails = new VendorDetails();
    }

 loadScript(){
   this.ngOnInit;
  }
  goToNextStep(){
    let VC= new VendorCatrgoryAddVM();
    VC.categoryId = this.num_CategoryId;
    this.objVendorDetails.vendorCategories.push(VC);
    console.log(this.objVendorDetails);
    localStorage.setItem('VednorDetails',JSON.stringify(this.objVendorDetails));
    this.cservice.GoToNextStep('/register/step-second');

  }

    onSubmit(f) {  
      console.log(f.value);
      // this.router.navigate(['/register/step-second']);  
      // localStorage.setItem('category', 'categoryId');yy

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
