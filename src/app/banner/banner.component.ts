import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	 $(".mobvendorebtn").click(function(){
  	 //	alert("open");
  	  $("#tiktik").show();
      //$(".FilterDialog").removeClass( "mob_dis_none");
    });
  	  $(".category-body .regular").click(function(){
  	 //	alert("cityopen");
  	  $(".category-body").hide();
  	  $(".city-body").show();
      //$(".FilterDialog").removeClass( "mob_dis_none");
    });
  	  $(".icon-small").click(function(){
  	 //	alert("close");
  	  $("#tiktik").hide();
  	   $(".category-body").show();
  	  $(".city-body").hide();
      //$(".FilterDialog").removeClass( "mob_dis_none");
    });




  	 
  }

}
