import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminexpenses',
  templateUrl: './adminexpenses.component.html',
  styleUrls: ['./adminexpenses.component.scss']
})
export class AdminexpensesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  $.getScript('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js');

  $.getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js');
  $.getScript('https://use.fontawesome.com/4e4388f72e.js');
  $.getScript('./assets/js/curosselfun.js');
  



  }

}
