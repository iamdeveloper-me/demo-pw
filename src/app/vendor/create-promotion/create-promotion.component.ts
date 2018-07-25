import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-promotion',
  templateUrl: './create-promotion.component.html',
  styleUrls: ['./create-promotion.component.scss']
})
export class CreatePromotionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $(document).ready(function(){
    $('.togglebtnmenu').on('click', function(){
     //alert("h1");
      $(this).toggleClass('cross');
     $('.blackoverlaymobile').toggleClass('blockmobile');
    $('#page-content-wrapper').toggleClass('overhidden');
     $('#wrapper').toggleClass('toggled');
    });

    $('.blackoverlaymobile').on('click', function(){
     //alert("h1");
     $('#wrapper').toggleClass('toggled');
     $('.togglebtnmenu').toggleClass('cross');
      $('.blackoverlaymobile').toggleClass('blockmobile');
      $('#page-content-wrapper').toggleClass('overhidden');
       $('#wrapper').toggleClass('toggled');
    });
});
  }

}
