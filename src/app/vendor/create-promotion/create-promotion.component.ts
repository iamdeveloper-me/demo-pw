import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-promotion',
  templateUrl: './create-promotion.component.html',
  styleUrls: ['./create-promotion.component.scss']
})
export class CreatePromotionComponent implements OnInit {

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
