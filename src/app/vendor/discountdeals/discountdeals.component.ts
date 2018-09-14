import { Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-discountdeals',
  templateUrl: './discountdeals.component.html',
  styleUrls: ['./discountdeals.component.scss']
})
export class DiscountdealsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');



    $(".close").click(function(){
        $(".alert").hide();
     });

     $(".gallery").click(function(){
        $(".homegallerybox").show();
        $(".prioritybox").hide();
        $(".audiencebox").hide();
        $(".dealsbox").hide();
        $(".homebannerbox").hide();
     });
      $(".priority").click(function(){
        $(".homegallerybox").hide();
        $(".prioritybox").show();
        $(".audiencebox").hide();
        $(".dealsbox").hide();
        $(".homebannerbox").hide();
     });
      $(".audience").click(function(){
        $(".homegallerybox").hide();
        $(".prioritybox").hide();
        $(".audiencebox").show();
        $(".dealsbox").hide();
        $(".homebannerbox").hide();
     });
      $(".deals").click(function(){
        $(".homegallerybox").hide();
        $(".prioritybox").hide();
        $(".audiencebox").hide();
        $(".dealsbox").show();
        $(".homebannerbox").hide();
     });
      $(".homebanner").click(function(){
        $(".homegallerybox").hide();
        $(".prioritybox").hide();
        $(".audiencebox").hide();
        $(".dealsbox").hide();
        $(".homebannerbox").show();
     });

  }

open(c){console.log(c);}

}
