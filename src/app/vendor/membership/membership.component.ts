import { Component, OnInit, AfterViewInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { Http,Headers } from '@angular/http';
import { Router ,ActivatedRoute} from '@angular/router';
import { SlidesOutputData } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
   providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class MembershipComponent implements OnInit {
  customOptions: any = {
    margin: 20,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    nav: false,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      767: {
        items: 3
      },
      1024: {
        items: 3
      }
    },
    //autoplaySpeed:1
  }
  customOptionsB: any = {
    margin: 20,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    nav: false,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      767: {
        items: 3
      },
      1024: {
        items: 3
      }
    },
    //autoplaySpeed:1
  }

  activeSlides: SlidesOutputData;
  activeSlidesB: SlidesOutputData;

  slidesStore: any[];
  slidesStoreB: any[];

   showStyle: false;
     getStyle() {
    if(this.showStyle) {
      return "yellow";
    } else {
      return "";
    }
  }


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
  
    $.getScript('./assets/js/membershipslider.js'); 

    $(document).ready(function(){
      $(".panel-footer").find("button.disabled").css({"color": "red", "border": "2px solid red"});
    });

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
    data =>{ 
            this.myplans = data.json();
           this.statdate = data.json().startDateString;
           this.endDateString   = data.json().endDateString; 
           this.pricingPlantitle   = data.json().pricingPlan.title;
           this.pricingPlanId   = data.json().pricingPlanId;
           this.payFrequency = data.json().payFrequency;
           this.account_create_date = data.json().dateAddedOn;

           },error => {console.log(error)});


  this.http.get(this.pricingplans,{headers:headers}).subscribe(
    data =>{ 
                     this.pricing = data.json();
                     this.slidesStore = this.pricing
                    
            },error => {console.log(error)});
  }
  ngAfterViewChecked(): void {
 
  }
  
  constructor(config: NgbCarouselConfig,public http: Http,private router: Router) {
  
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    this.slidesStore = [
      {
        src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        src: "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

      },
      {
        src: "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

      },
     
    ]
  }
  getData(data: SlidesOutputData) {
    this.activeSlides = data;
  
  }
  getDataB(data: SlidesOutputData) {
    this.activeSlidesB = data;
 
  }
  Voucher(vo){
   
    this.palnvoucher = vo.value.Voucher;
  }
  monthlyPrice(plan){
  
    sessionStorage.setItem('which_plan',JSON.stringify(plan))
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
  voucherCode: palnvoucher,
  route_key: 0
}
sessionStorage.setItem('selected_plan',JSON.stringify(plan))
this.router.navigate(['../vendor/payment-selection'])


  }
  getDecimal(monthlyPrice,noOfMonthFeeOff){

var number = (monthlyPrice * (12 - noOfMonthFeeOff))/12
var a = (monthlyPrice * (12 - noOfMonthFeeOff))/ 12 | number
return number.toFixed(2).split(".")[1]
  }
}

