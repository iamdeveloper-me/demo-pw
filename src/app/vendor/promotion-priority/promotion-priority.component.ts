import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion-priority',
  templateUrl: './promotion-priority.component.html',
  styleUrls: ['./promotion-priority.component.scss']
})
export class PromotionPriorityComponent implements OnInit {

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
