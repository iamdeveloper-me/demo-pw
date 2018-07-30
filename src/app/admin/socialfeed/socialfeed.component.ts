import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socialfeed',
  templateUrl: './socialfeed.component.html',
  styleUrls: ['./socialfeed.component.scss']
})
export class SocialfeedComponent implements OnInit {

  constructor() { }

  ngOnInit() {    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
  $.getScript('./assets/js/vendorsidebar.js');
  }

}
