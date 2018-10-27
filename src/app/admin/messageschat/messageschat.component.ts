import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messageschat',
  templateUrl: './messageschat.component.html',
  styleUrls: ['./messageschat.component.scss']
})
export class MessageschatComponent implements OnInit {

  constructor() { }

  ngOnInit() {    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
  $.getScript('./assets/js/vendorsidebar.js');
  }

}
