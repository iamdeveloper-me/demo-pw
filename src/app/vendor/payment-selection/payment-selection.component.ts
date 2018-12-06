import { Component, OnInit } from '@angular/core';
import { copyStyles } from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-payment-selection',
  templateUrl: './payment-selection.component.html',
  styleUrls: ['./payment-selection.component.scss']
})
export class PaymentSelectionComponent implements OnInit {

  selection:[]
  constructor() { }
  public MainData: MainData;
  ngOnInit() {
    $.getScript('./assets/js/membershipslider.js'); 
    // console.log(JSON.parse(sessionStorage.getItem('selected_plan')))
    // this.MainData   =    JSON.parse(sessionStorage.getItem('selected_plan'));
    
    

}

}
export class MainData {
  adTypeId:number;
  slotIds:Array<OptionslotIdsArray> ;
  voucherCode: string
  constructor(){
    this.slotIds = new Array<OptionslotIdsArray>();
  }
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