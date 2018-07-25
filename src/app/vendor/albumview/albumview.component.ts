import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albumview',
  templateUrl: './albumview.component.html',
  styleUrls: ['./albumview.component.scss']
})
export class AlbumviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  
   $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');


      $.getScript('https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js');
    $.getScript('https://code.jquery.com/jquery-1.11.1.min.js');

   //$(document).ready(function(){
   //$(".fancybox").fancybox({
    //alert('hi');
   //    openEffect: "none",
   //    closeEffect: "none"
   //});


   
  
  }

}
