import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
 
})
export class TicketsComponent implements OnInit {
open(){}


  ngOnInit() {    
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
     $("#openticketdetail").show();
     $("#closeticketdetail").hide(); 
     $(".imagetabdetail").show(); 
     $(".listingtabdetail").show();
     $(".phonetabdetail").show();  

    $(".openticket").click(function(){
      $("#openticketdetail").show();
      $(".openticket").addClass("selected");
      $(".closeticket").removeClass("selected");
      $("#closeticketdetail").hide();
      $(".imagetabdetail").show(); 
      $(".listingtabdetail").show();
      $(".phonetabdetail").show();
    });
    
    $(".closeticket").click(function(){
      $("#openticketdetail").hide();
      $("#closeticketdetail").show();
      $(".imagetabdetail").show(); 
      $(".listingtabdetail").show();
      $(".phonetabdetail").show();
      $(".openticket").removeClass("selected");
      $(".closeticket").addClass("selected");
    });

    $(".alltab").click(function(){
      $(".imagetabdetail").show(); 
      $(".listingtabdetail").show();
      $(".phonetabdetail").show();
  });
    $(".imagetab").click(function(){
      $(".imagetabdetail").show(); 
      $(".listingtabdetail").hide();
      $(".phonetabdetail").hide();   
  });
    $(".listingtab").click(function(){
      $(".imagetabdetail").hide(); 
      $(".listingtabdetail").show();
      $(".phonetabdetail").hide();    
  });
    $(".phonetab").click(function(){
      $(".imagetabdetail").hide(); 
      $(".listingtabdetail").hide();
      $(".phonetabdetail").show();     
  });


  }


 
}
