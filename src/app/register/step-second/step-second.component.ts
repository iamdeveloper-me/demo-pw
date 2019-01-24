import { Component, OnInit, ViewChild } from '@angular/core';
import { SignupVendorService, VendorDetails } from '../../shared/service/signup-vendor.service';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-step-second',
  templateUrl: './step-second.component.html',
  styleUrls: ['./step-second.component.scss']
})
export class StepSecondComponent implements OnInit {
  categoryArray:string[];
  planArray:string[];
  country_id:any;
  city_id:any;
  sub_id:any;
  countryArray:string[];
  Phone_no;
  objvendorDetails:VendorDetails;
  @ViewChild('x') public tooltip: NgbTooltip;
  public arra = new Array();public district = new Array();public suburb = new Array();
  user = 
  {logInInfo: { firstName: "", lastName: "", password: "", confirmPassword: "" },
  contactInfo: { contactPerson: "", email: "", phone: "", website: ""},
   businessInfo: { countryId: 0, districtId: 0,suburbId: 0 ,city: "" ,postalCode: "", address: "" ,nameOfBusiness: "",pricingPlanId: "" ,payFrequency:""}, 
   
   vendorCategories: [ { categoryId: "" } ] }

  ngOnInit() {

  }
    constructor( private cservice: SignupVendorService,private http: HttpClient , private router: Router ) {
      this.objvendorDetails = new VendorDetails();
      if(localStorage.getItem('VednorDetails')){
        this.objvendorDetails = JSON.parse(localStorage.getItem('VednorDetails'));
      }
    }

 loadScript(){this.ngOnInit;}

 goToNextStep(){
  localStorage.setItem('VednorDetails',JSON.stringify(this.objvendorDetails));
  this.cservice.GoToNextStep('/register/step3');
}
 
    onSubmit(f) { 

   this.arra.forEach((element,pos) => {
     if(pos == this.country_id){
       this.user.businessInfo.countryId = Number(element.countryId);
     }
    this.district.forEach((dist ,d_pos) => {
      if(d_pos == this.city_id){
        this.user.businessInfo.districtId = Number(dist.districtId);
        this.user.businessInfo.city = dist.name;
      } 
    }); 
  
    this.suburb.forEach((subr ,s_pos) => {
      if(s_pos == this.sub_id){
        this.user.businessInfo.suburbId = Number(subr.suburbId);
      } 
    }); 
   });
 
      this.cservice.signup(this.user).subscribe(( data )  =>  
      {
        this.cservice.typeSuccess();
        // this.router.navigate(['../home'])
       }
      ,error => {console.log(error);
     this.cservice.typeWarning(error);
    })
    f.form.reset();
  }


idgenerate(users){
 
   this.user.businessInfo.pricingPlanId = users.pricingPlanId;
   this.user.businessInfo.payFrequency = '1';
   
}
annualPrice(users){ 
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

      keyPress(event: any) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
          event.preventDefault();
          this.Phone_no = "Enter a valid number!";
        }else{  this.Phone_no = " "}
      }


}
