import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion-homepage',
  templateUrl: './promotion-homepage.component.html',
  styleUrls: ['./promotion-homepage.component.scss']
})
export class PromotionHomepageComponent implements OnInit {

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
