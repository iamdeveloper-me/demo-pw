import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminadvertising',
  templateUrl: './adminadvertising.component.html',
  styleUrls: ['./adminadvertising.component.scss']
})
export class AdminadvertisingComponent implements OnInit {

  constructor() { }
 
  ngOnInit() { 
    $(".Supplier").show();   
    $(".Location").hide();
    $(".Banner").hide();  
    $(".Result").hide();  
    $(".Carrers").hide();    
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
  $.getScript('./assets/js/vendorsidebar.js');
  $("#Location").click(function(){
    $(".Location").show();
    $(".Banner").hide();  
    $(".Result").hide();  
    $(".Carrers").hide(); 
    $(".Supplier").hide(); 
  });

  $("#Banner").click(function(){
    $(".Banner").show();
    $(".Location").hide();  
    $(".Result").hide();  
    $(".Carrers").hide(); 
    $(".Supplier").hide(); 
  });

  $("#Carrers").click(function(){
    $(".Carrers").show();
    $(".Banner").hide();  
    $(".Location").hide();  
    $(".Result").hide(); 
    $(".Supplier").hide(); 
  });
  
  $("#Result").click(function(){
    $(".Result").show();
    $(".Banner").hide();  
    $(".Location").hide();  
    $(".Carrers").hide(); 
    $(".Supplier").hide(); 
  });

  $("#Supplier").click(function(){
    $(".Supplier").show();
    $(".Banner").hide();  
    $(".Location").hide();  
    $(".Carrers").hide(); 
    $(".Result").hide(); 
  });

  }
  }


  



