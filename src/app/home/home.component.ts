import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  $("#id9").hide();
   $("#id19").hide();
  
$(".signin_click").click(function(){
   $("#panel8").removeClass( "show");

});

$(".signup_click").click(function(){
   $("#panel7").removeClass( "show");

});

  }
  
   loadScript(){
	$("#id9").show();
	 $("#id19").show();
	$("#id7").hide();
	$("#id17").hide();
  }
  userin(){
  $("#id9").hide();
	$("#id7").show();
  }
 



}
