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
     //alert("h1");
    //$(this).toggleClass('cross');
      //$('.blackoverlaymobile').toggleClass('blockmobile');
    //$('#page-content-wrapper').toggleClass('overhidden');
     $('#wrapper').toggleClass('toggled');
    });

  

     $('.mobilefixedcart').on('click', function(){
     //alert("hi  ");
     $('.mobilefixedcart').toggleClass('bottom0px');
      //$('.mobilebtncart').addClass('nonevisi');
    });

  }

}
