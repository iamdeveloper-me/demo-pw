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
  num_CategoryId:number;
  user = 
  {
   vendorCategories: [ { categoryId: "" } ] 
  }
   @ViewChild('x') public tooltip: NgbTooltip;
  ngOnInit() {
    $('div').removeClass('modal-backdrop fade in show');
  
            let obs = this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Categories/allcategories");
            obs.subscribe(data => { this.categoryArray = data as string[];  
            });

  }
    constructor( private cservice: SignupVendorService,private http: HttpClient , private router: Router ) {
      this.objVendorDetails = new VendorDetails();
      if(localStorage.getItem('VednorDetails') != undefined){
        this.num_CategoryId =       parseInt(JSON.parse(localStorage.getItem('VednorDetails'))['vendorCategories'][0]['categoryId'])

      }

    }

 loadScript(){
   this.ngOnInit;
  }
  goToNextStep(){
    let VC= new VendorCatrgoryAddVM();
    VC.categoryId = this.num_CategoryId;
    this.objVendorDetails.vendorCategories.push(VC);
    localStorage.setItem('VednorDetails',JSON.stringify(this.objVendorDetails));
    this.cservice.GoToNextStep('/register/step2');

  }

    onSubmit(f) {  
      this.cservice.signup(this.user).subscribe(( data )  =>  
      {
        this.cservice.typeSuccess();
       }
      ,error => {console.log(error);
     this.cservice.typeWarning(error);
    })

  }


}
