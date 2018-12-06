import { Component, OnInit, AfterViewInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { Http,Headers } from '@angular/http';
import { Router ,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
   providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class MembershipComponent implements OnInit {

  private mymembership: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/mymembership'
  private updatemember: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/upgrademembership'
  private pricingplans: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/LookupMaster/pricingplans'
  myplans:any = {}; 
  pricing:any = [];
  palnvoucher:any;
  vo = {Voucher: ""}
  statdate;
  endDateString;
  pricingPlantitle;
  account_create_date;
  pricingPlanId:number;
  payFrequency:number;
  ngOnInit() {

  //  $.getScript('./assets/js/vendorsidebar.js');  
    $.getScript('./assets/js/membershipslider.js'); 

    $(".Suppliertab").click(function(){
    $("#filter").show();
    $("#action").hide();  
    $(".Suppliertab").addClass("selected"); 
    $(".Registertab").removeClass("selected");  
  
  });

    $(".Registertab").click(function(){
    $("#filter").hide();
    $("#action").show();  
    $(".Suppliertab").removeClass("selected"); 
    $(".Registertab").addClass("selected");  
  });

 

  let headers = new Headers();
  var authToken = localStorage.getItem('userToken');
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer '+authToken);


  this.http.get(this.mymembership,{headers:headers}).subscribe(
    data =>{ console.log(data.json());
            this.myplans = data.json();
           this.statdate = data.json().startDateString;
           this.endDateString   = data.json().endDateString; 
           this.pricingPlantitle   = data.json().pricingPlan.title;
           this.pricingPlanId   = data.json().pricingPlanId;
           this.payFrequency = data.json().payFrequency;
           this.account_create_date = data.json().dateAddedOn;

           },error => {console.log(error)});


  this.http.get(this.pricingplans,{headers:headers}).subscribe(
    data =>{ console.log(data.json());
                     this.pricing = data.json();
                     console.log('Pricing', this.pricing)
            },error => {console.log(error)});
  }
  ngAfterViewChecked(): void {
  //Called after every check of the component's view. Applies to components only.
  //Add 'implements AfterViewChecked' to the class.

  }
  
  constructor(config: NgbCarouselConfig,public http: Http,private router: Router) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    
  }

  Voucher(vo){
    console.log(vo.value.Voucher);
    this.palnvoucher = vo.value.Voucher;
  }
  monthlyPrice(plan){
    console.log(plan)
    var planid = plan.pricingPlanId;
    var  payFrequency = '1';
     this.updatemembership(planid,payFrequency);
  }
  annualPrice(plan){ 
    var planid = plan.pricingPlanId;
    var  payFrequency = '2';
    this.updatemembership(planid,payFrequency);
  }
  updatemembership(planid,payFrequency){


    // this.router.navigate([]).then(result => {  window.open('http://localhost:4200/#/vendor/payment-selection/'+planid+'-'+payFrequency, '_blank'); });





    alert("dfcdr");
    console.log(planid);
    console.log(payFrequency);
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'applicatissson/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
   
    var palnvoucher = this.palnvoucher;

const plan = 
{
  pricingPlanId: planid,
  payFrequency: payFrequency,
  voucherCode: palnvoucher
}
sessionStorage.setItem('selected_plan',JSON.stringify(plan))
this.router.navigate(['../vendor/payment-selection'])

console.log(plan)
//     this.http.post(this.updatemember,
     
//       {
//         pricingPlanId: planid,
//         payFrequency: payFrequency,
//         voucherCode: palnvoucher
//       }
//     ,{headers:headers}).subscribe( (data)=> { console.log(data.json())
    
     
//       this.router.navigate([]).then(result => {  window.open(data.json().url, '_blank'); });
    
//     },(error)=>{console.log(error);}
// ,    );
  }
  getDecimal(monthlyPrice,noOfMonthFeeOff){
  // {{((plan.monthlyPrice * (12 - plan.noOfMonthFeeOff))/12 | number:'1.0-2')}}
var number = (monthlyPrice * (12 - noOfMonthFeeOff))/12
var a = (monthlyPrice * (12 - noOfMonthFeeOff))/ 12 | number
return number.toFixed(2).split(".")[1]
  }
}


// 123.25468544824
// 123
// 25