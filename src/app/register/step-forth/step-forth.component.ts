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
  {logInInfo: { firstName: "", lastName: "", password: "", confirmPassword: "" },
  contactInfo: { contactPerson: "", email: "", phone: "", website: ""},
   businessInfo: { countryId: 0, districtId: 0,suburbId: 0 ,city: "" ,postalCode: "", address: "" ,nameOfBusiness: "",pricingPlanId: "" ,payFrequency:""}, 
   
   vendorCategories: [ { categoryId: "" } ] }
 
  ngOnInit() {
            // $(".loginnav").hide(); 
            // $.getScript('./assets/js/register.js');  
            $.getScript('./assets/js/membershipslider.js');            
            // $(".show").hide();

            // $("div").removeClass( "modal-backdrop");
            let obs = this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Categories/allcategories");
            obs.subscribe(data => { this.categoryArray = data as string[];  
            });
          
            let country = this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/LookupMaster/countries");
            country.subscribe(data => { 
              this.countryArray = data as string[];  
              // console.log(this.countryArray);
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
    constructor( private cservice: SignupVendorService,private http: HttpClient , private router: Router ) {
      this.objVendorDetail = new VendorDetails();
      this.objVendorDetail= JSON.parse(localStorage.getItem('VednorDetails'));
    }
    @ViewChild('x') public tooltip: NgbTooltip;
 loadScript(){this.ngOnInit;}

    onSubmit() {   
     
//    console.log(this.country_id)
//    this.arra.forEach((element,pos) => {
//      if(pos == this.country_id){
//        this.user.businessInfo.countryId = Number(element.countryId);
//       //  this.user.businessInfo.countryName = element.countryName;
//      }
//     this.district.forEach((dist ,d_pos) => {
//       if(d_pos == this.city_id){
//         this.user.businessInfo.districtId = Number(dist.districtId);
//         this.user.businessInfo.city = dist.name;
//       } 
//     }); 
//     console.log(this.sub_id)

//     this.suburb.forEach((subr ,s_pos) => {
//       if(s_pos == this.sub_id){
//         this.user.businessInfo.suburbId = Number(subr.suburbId);
//       } 
//     }); 
//    });


debugger

if(this.user.businessInfo.pricingPlanId == '1'){

  alert('free')
  console.log(JSON.stringify(this.objVendorDetail));
  // this.objVendorDetail.businessInfo.website=this.objVendorDetail.contactInfo.website;
      this.cservice.signup(this.objVendorDetail).subscribe(( data )  =>  
      { console.log(data.json())
        this.cservice.typeSuccess();
        this.router.navigate(['../home'])
       }
      ,error => {console.log(error);
     this.cservice.typeWarning(error);
    })
}else{
  alert('payment page')

debugger
  const plan = 
{
  pricingPlanId: this.user.businessInfo.pricingPlanId,
  payFrequency: this.user.businessInfo.payFrequency
  ,
  // voucherCode: palnvoucher,
  route_key: 3,
  hem:'Hemant'
}
sessionStorage.setItem('selected_plan',JSON.stringify(plan))
this.router.navigate(['../payment-selection'])
  // this.router.navigate(['../payment-selection'])
}
  

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
  console.log(users);
  alert('which plan from idgenerate');
  sessionStorage.setItem('which_plan' ,JSON.stringify(users));
  
  this.objVendorDetail.businessInfo.pricingPlanId=users.pricingPlanId;
   this.user.businessInfo.pricingPlanId = users.pricingPlanId;
   this.user.businessInfo.payFrequency = '1';
   console.log(this.user.businessInfo.payFrequency );
}
annualPrice(users){ 
  alert('which plan from annual');
  sessionStorage.setItem('which_plan' ,JSON.stringify(users));
  this.objVendorDetail.businessInfo.pricingPlanId =users.pricingPlanId;
  this.objVendorDetail.businessInfo.payFrequency = 2;
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
    subr(event): void {  
      const newVal = event.target.value;
      console.log(newVal)
    }


    getDecimal(monthlyPrice,noOfMonthFeeOff){
      // {{((plan.monthlyPrice * (12 - plan.noOfMonthFeeOff))/12 | number:'1.0-2')}}
    var number = (monthlyPrice * (12 - noOfMonthFeeOff))/12
    var a = (monthlyPrice * (12 - noOfMonthFeeOff))/ 12 | number
    return number.toFixed(2).split(".")[1]
      }
}
