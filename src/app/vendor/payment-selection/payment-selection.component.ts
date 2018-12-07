import { Router } from '@angular/router';
import { apiPath } from './../../shareApi/apiPath';
import { Http ,Headers} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { copyStyles } from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-payment-selection',
  templateUrl: './payment-selection.component.html',
  styleUrls: ['./payment-selection.component.scss']
})
export class PaymentSelectionComponent implements OnInit {
  url = apiPath.url;
  selection:undefined[]
  constructor(public http: Http,public router: Router) { }
  public MainData: MainData;
  totalAmount:number = 0;
  WhichPlan:undefined[]
  ngOnInit() {
    $.getScript('./assets/js/membershipslider.js'); 

    
    // console.log(JSON.parse(sessionStorage.getItem('selected_plan')))
    this.MainData   =    JSON.parse(sessionStorage.getItem('selected_plan'));
    console.log(this.MainData)

    if(this.MainData.route_key == 0){
      debugger
      this.WhichPlan =   JSON.parse(sessionStorage.getItem('which_plan'))
      console.log(this.WhichPlan)
      if(this.MainData.payFrequency == 1){
        this.titleGet();
        this.totalAmount = this.WhichPlan['monthlyPrice'] * 6
      }
      if(this.MainData.payFrequency == 2){
        this.titleGet();

        this.totalAmount = (this.WhichPlan['monthlyPrice'] * 12) - (this.WhichPlan['noOfMonthFeeOff'] * 2) 
      }

      
    }
    if(this.MainData.route_key == 1){
      this.MainData.slotIds.forEach(ele=>{
        this.totalAmount =  this.totalAmount + ele.cost;
       }) 
    }
    
  

}

PayPalPayment(){


  let headers = new Headers();
  var authToken = localStorage.getItem('userToken');
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer '+authToken);

  


  this.http.post(this.url+'api/Supplier/upgrademembership',this.MainData,{headers:headers}).subscribe( (data)=> { 
    
        console.log(data.json())
        this.router.navigate([]).then(result => {  window.open(data.json().url); });
        
        },
        (error)=>{
          console.log(error);
        },   
      );
}

titleGet(){
  let headers = new Headers();
  var authToken = localStorage.getItem('userToken');
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer '+authToken);


  this.http.get(this.url+'api/Supplier/mymembership',{headers:headers}).subscribe(
    data =>{ 
      
      console.log(data.json());
      this.MainData.title =  data.json()['pricingPlan']['title']

    });
}
}
export class MainData {
  adTypeId:number;
  slotIds:Array<OptionslotIdsArray> ;
  voucherCode: string
  route_key:number

  constructor(){
    this.slotIds = new Array<OptionslotIdsArray>();
  }



  payFrequency:number;
  pricingPlanId:number;

title:string
}





export class OptionslotIdsArray {
  adTypeId: number;
  availability: number;
  cost: number;
  isSelected: boolean;
  month:string;
  monthNo:number;
  noOfDaysVisible:number;
  slotId:number;
  week:string;
  weekNo:number;
  year:number
}

// { "pricingPlanId": 2, "payFrequency": "1" }fff