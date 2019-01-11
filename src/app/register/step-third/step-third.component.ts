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
              console.log(this.countryArray);
              this.arra = this.countryArray
            });
         

            // let obj = this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/LookupMaster/pricingplans");
            // obj.subscribe(data => {
            //   this.planArray = data as string[]; 
            //   console.log(this.planArray);
            // });

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
    constructor( private cservice: SignupVendorService,private http: HttpClient , private router: Router,public toastr: ToastrService, ) {
      this.objVendorDetails = new VendorDetails();
      this.objVendorDetails.contactInfo.website  
      if(localStorage.getItem('VednorDetails')){
      this.objVendorDetails= JSON.parse(localStorage.getItem('VednorDetails'));
      console.log(this.objVendorDetails);
      }
    }

 loadScript(){this.ngOnInit;}

    onSubmit(f) {   
   console.log(this.country_id);
   this.arra.forEach((element,pos) => {
     if(pos == this.country_id){
       this.user.businessInfo.countryId = Number(element.countryId);
      //  this.user.businessInfo.countryName = element.countryName;
     }
    this.district.forEach((dist ,d_pos) => {
      if(d_pos == this.city_id){
        this.user.businessInfo.districtId = Number(dist.districtId);
        this.user.businessInfo.city = dist.name;
        this.objVendorDetails.businessInfo.city=dist.name;
      } 
    }); 
    console.log(this.sub_id)

    this.suburb.forEach((subr ,s_pos) => {
      if(s_pos == this.sub_id){
        this.user.businessInfo.suburbId = Number(subr.suburbId);
      } 
    }); 
   });
 console.log(this.user)
      this.cservice.signup(this.user).subscribe(( data )  =>  
      { console.log(data.json())
        this.cservice.typeSuccess();
        // this.router.navigate(['../home'])
       }
      ,error => {console.log(error);
     this.cservice.typeWarning(error);
    //  this.toastr.warning(error._body);
    })
    f.form.reset();
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

    country(a): void {  
      
     // const newVal = event.target.value;
     console.log(this.countryArray,);
     console.log(a);
 
      this.district = this.arra.filter(c=>c.countryId==this.objVendorDetails.businessInfo.countryId)[0].districts;
     console.log( this.objVendorDetails.businessInfo.countryId[0].districts);
     console.log( this.district);
 
    }
    districtA(event,b): void {  
//      let district=event.target;

      console.log(b);
// debugger;

      this.objVendorDetails.businessInfo.city=this.district.filter(d=>d.districtId==this.objVendorDetails.businessInfo.districtId)[0].name;
     // this.objVendorDetails.businessInfo.districtId=district.districtId;
      const newVal = event.target.value  ;
      console.log(newVal)
      this.suburb =   this.district.filter(d=>d.districtId==b && d.countryId == this.objVendorDetails.businessInfo.countryId)[0].suburb
     
    }
    subr(event,c): void {  
      console.log(c);
      const newVal = event.target.value;
      console.log(newVal)
    }
    GoToNextStep(){
      
      // console.log(JSON.stringify(this.objVendorDetails));
      console.log(this.objVendorDetails);
      localStorage.setItem('VednorDetails',JSON.stringify(this.objVendorDetails));
      this.cservice.GoToNextStep('/register/step4');
    }
    

    getDecimal(monthlyPrice,noOfMonthFeeOff){
      // {{((plan.monthlyPrice * (12 - plan.noOfMonthFeeOff))/12 | number:'1.0-2')}}
    var number = (monthlyPrice * (12 - noOfMonthFeeOff))/12
    var a = (monthlyPrice * (12 - noOfMonthFeeOff))/ 12 | number
    return number.toFixed(2).split(".")[1]
      }
}
