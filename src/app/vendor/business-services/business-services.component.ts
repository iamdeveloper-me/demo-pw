import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-services',
  templateUrl: './business-services.component.html',
  styleUrls: ['./business-services.component.scss'],

})
export class BusinessServicesComponent implements OnInit {

  Services = ['Photography','Photo + Vedio','Vediography'];
 
  Price = '12$';
  photo_ved = '344$'; photo_off = '45$'; travel = '233$'; payment='24$'; 
  experience = '654'; photod = '24$' ;
  prewed = '556$'; studio= "45$" ;cinema = '23$'; candid = '44$ ' ;
  ngOnInit() {
  $.getScript('./assets/js/vertical-timeline.js');
  // $.getScript('./assets/js/profile.js'); 
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
  $.getScript('./assets/js/vendorsidebar.js');
  }



}

