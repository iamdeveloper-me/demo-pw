import { Component, OnInit, ViewChild } from '@angular/core';
import { SignupVendorService, VendorDetails } from '../../shared/service/signup-vendor.service';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import { ToastrService } from 'ngx-toastr';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-step-third',
  templateUrl: './step-third.component.html',
  styleUrls: ['./step-third.component.scss']
})
export class StepThirdComponent implements OnInit {

  categoryArray:string[];
  planArray:string[];
  country_id:any;
  city_id:any;
  sub_id:any;
  objVendorDetails: VendorDetails;
  countryArray:string[];
  public arra = new Array();public district = new Array();public suburb = new Array();
  user = 
  {logInInfo: { firstName: "", lastName: "", password: "", confirmPassword: "" },
  contactInfo: { contactPerson: "", email: "", phone: "", website: ""},
   businessInfo: { 
    countryId: 0, 
    districtId: 0,
    suburbId: 0 ,
    city: "" ,
    postalCode: "", 
    address: "" ,
    nameOfBusiness: "",
    pricingPlanId: "" ,
    payFrequency:""
  }, 
   
   vendorCategories: [ { categoryId: "" } ] }
   @ViewChild('x') public tooltip: NgbTooltip;
  ngOnInit() {
            // $(".loginnav").hide(); 
            // $.getScript('./assets/js/register.js');  
            // $.getScript('./assets/js/membershipslider.js');            
            // $(".show").hide();

            // $("div").removeClass( "modal-backdrop");
            $('.selectwet').on("focus", function(){
              $(".selectlabel").addClass("bottomtik");
            });
          
            $('.selectwet').on("focusout", function(){
              if($(this).val() === null){
                $(".selectlabel").removeClass("bottomtik");
              }
            });
            $('.selectwet1').on("focus", function(){
              $(".selectlabel1").addClass("bottomtik");
            });
          
            $('.selectwet1').on("focusout", function(){
              if($(this).val() === null){
                $(".selectlabel1").removeClass("bottomtik");
              }
            });
            $('.selectwet2').on("focus", function(){
              $(".selectlabel2").addClass("bottomtik");
            });
          
            $('.selectwet2').on("focusout", function(){
              if($(this).val() === null){
                $(".selectlabel2").removeClass("bottomtik");
              }
            });

            let obs = this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Categories/allcategories");
            obs.subscribe(data => { this.categoryArray = data as string[];  
            });
          
            let country = this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/LookupMaster/countries");
            country.subscribe(data => { 
              this.countryArray = data as string[];  
              this.arra = this.countryArray
            });
  }
    constructor( private cservice: SignupVendorService,private http: HttpClient , private router: Router,public toastr: ToastrService, ) {
      this.objVendorDetails = new VendorDetails();
      this.objVendorDetails.contactInfo.website  
      if(localStorage.getItem('VednorDetails')){
      this.objVendorDetails= JSON.parse(localStorage.getItem('VednorDetails'));
      }
    }

 loadScript(){this.ngOnInit;}

    onSubmit(f) {   
   this.arra.forEach((element,pos) => {
     if(pos == this.country_id){
       this.user.businessInfo.countryId = Number(element.countryId);
     }
    this.district.forEach((dist ,d_pos) => {
      if(d_pos == this.city_id){
        this.user.businessInfo.districtId = Number(dist.districtId);
        this.user.businessInfo.city = dist.name;
        this.objVendorDetails.businessInfo.city=dist.name;
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

    country(a): void {  
      this.district = this.arra.filter(c=>c.countryId==this.objVendorDetails.businessInfo.countryId)[0].districts;
    }
    districtA(event,b): void {  
      this.objVendorDetails.businessInfo.city=this.district.filter(d=>d.districtId==this.objVendorDetails.businessInfo.districtId)[0].name;
      const newVal = event.target.value  ;
      this.suburb =   this.district.filter(d=>d.districtId==b && d.countryId == this.objVendorDetails.businessInfo.countryId)[0].suburb
    }
    subr(event,c): void {  
      const newVal = event.target.value;
    }
    GoToNextStep(){
      localStorage.setItem('VednorDetails',JSON.stringify(this.objVendorDetails));
      this.cservice.GoToNextStep('/register/step4');
    }
    getDecimal(monthlyPrice,noOfMonthFeeOff){
    var number = (monthlyPrice * (12 - noOfMonthFeeOff))/12
    var a = (monthlyPrice * (12 - noOfMonthFeeOff))/ 12 | number
    return number.toFixed(2).split(".")[1]
      }
}
