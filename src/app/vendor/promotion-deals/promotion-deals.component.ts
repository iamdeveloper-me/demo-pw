import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion-deals',
  templateUrl: './promotion-deals.component.html',
  styleUrls: ['./promotion-deals.component.scss']
})
export class PromotionDealsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.togglebtnmenu').on('click', function(){
     $('#wrapper').toggleClass('toggled');
    });

  

     $('.mobilefixedcart').on('click', function(){
   
     $('.mobilefixedcart').toggleClass('bottom0px');
      
    });

  }

}
