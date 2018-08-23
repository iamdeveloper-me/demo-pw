import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion-audience',
  templateUrl: './promotion-audience.component.html',
  styleUrls: ['./promotion-audience.component.scss']
})
export class PromotionAudienceComponent implements OnInit {

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
