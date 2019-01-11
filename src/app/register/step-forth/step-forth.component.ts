import { Component, OnInit, ViewChild } from '@angular/core';
import { SignupVendorService, VendorDetails } from '../../shared/service/signup-vendor.service';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-step-forth',
  templateUrl: './step-forth.component.html',
  styleUrls: ['./step-forth.component.scss']
})
export class StepForthComponent implements OnInit {
  categoryArray:string[];
  planArray:string[];
  country_id:any;
  city_id:any;
  sub_id:any;
  objVendorDetail: VendorDetails;
  countryArray:string[];
  public arra = new Array();public district = new Array();public suburb = new Array();
  user = 
  { logInInfo: { firstName: "", lastName: "", password: "", confirmPassword: "" },
   contactInfo: { contactPerson: "", email: "", phone: "", website: ""},
   businessInfo: { countryId: 0, districtId: 0,suburbId: 0 ,city: "" ,postalCode: "", address: "" ,nameOfBusiness: "",pricingPlanId: "" ,payFrequency:""}, 
   vendorCategories: [ { categoryId: "" } ] }
    ngOnInit() {
          
                $.getScript('./assets/js/membershipslider.js');            
                let obs = this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Categories/allcategories");
                obs.subscribe(data => { this.categoryArray = data as string[];  
                });
            
                let country = this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/LookupMaster/countries");
                country.subscribe(data => { 
                  this.countryArray = data as string[];  
                  this.arra = this.countryArray
                });
          
                let obj = this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/LookupMaster/pricingplans");
                obj.subscribe(data => {
                  this.planArray = data as string[]; 
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
    constructor( private cservice: SignupVendorService,private http: HttpClient , private router: Router ) {
      this.objVendorDetail = new VendorDetails();
      this.objVendorDetail= JSON.parse(localStorage.getItem('VednorDetails'));
    }
    @ViewChild('x') public tooltip: NgbTooltip;
    loadScript(){this.ngOnInit;}
    onSubmit() {   
                  if(this.user.businessInfo.pricingPlanId == '1'){
                    
                        this.cservice.signup(this.objVendorDetail).subscribe(( data )  =>  
                        {
                          this.cservice.typeSuccess();
                          this.router.navigate(['../home'])
                        }
                        ,error => {console.log(error);
                      this.cservice.typeWarning(error);
                      })
                  }else{
                            const plan = {
                                            pricingPlanId: this.user.businessInfo.pricingPlanId,
                                            payFrequency: this.user.businessInfo.payFrequency,
                                            route_key: 3,
                                            hem:'Hemant'
                                          }
                            sessionStorage.setItem('selected_plan',JSON.stringify(plan))
                            this.router.navigate(['../register/step5'])
                  }
    }
    idgenerate(users){
      sessionStorage.setItem('which_plan' ,JSON.stringify(users));
      this.objVendorDetail.businessInfo.pricingPlanId=users.pricingPlanId;
      this.user.businessInfo.pricingPlanId = users.pricingPlanId;
      this.user.businessInfo.payFrequency = '1';
    
    }
    annualPrice(users){ 
      sessionStorage.setItem('which_plan' ,JSON.stringify(users));
      this.objVendorDetail.businessInfo.pricingPlanId =users.pricingPlanId;
      this.objVendorDetail.businessInfo.payFrequency = 2;
      this.user.businessInfo.pricingPlanId = users.pricingPlanId;
      this.user.businessInfo.payFrequency = '2';
    }
    country(event): void {  
      const newVal = event.target.value;
      this.district = this.arra[newVal].districts
    }
    districtA(event): void {  
      const newVal = event.target.value;
      this.suburb = this.district[newVal].suburb
    }
    subr(event): void {  
      const newVal = event.target.value;
    }
    getDecimal(monthlyPrice,noOfMonthFeeOff){
          var number = (monthlyPrice * (12 - noOfMonthFeeOff))/12
          var a = (monthlyPrice * (12 - noOfMonthFeeOff))/ 12 | number
          return number.toFixed(2).split(".")[1]
    }
}
