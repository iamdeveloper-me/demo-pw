import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	  $.getScript('http://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js');
      $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
      $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
      $.getScript('http://code.jquery.com/jquery-1.11.1.min.js');
      $.getScript('https://code.jquery.com/ui/1.12.1/jquery-ui.js');
      $.getScript('./assets/js/vendorsidebar.js');
  }

}
