import { Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-promote-business',
  templateUrl: './promote-business.component.html',
  styleUrls: ['./promote-business.component.scss']
})
export class PromoteBusinessComponent implements OnInit {

//accordian
 acc: any;
  // Prevent panel toggle code
  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === '2') {
      $event.preventDefault();
    }
    if ($event.panelId === '3' && $event.nextState === false) {
      $event.preventDefault();
    }
  };
  constructor() { }

  ngOnInit() {
   $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');



    $(".close").click(function(){
  alert("hi");
        $(".alert").hide();
     });
  }



}
