import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {



  ngOnInit() {    $.getScript('./assets/register/js/jquery-2.2.4.min.js');
                  $.getScript('./assets/register/js/bootstrap.min.js');
                  $.getScript('./assets/register/js/jquery.bootstrap.js');
                  $.getScript('./assets/register/js/jquery.validate.min.js');
                  $.getScript('./assets/register/js/material-bootstrap-wizard.js');
  }
    constructor( ) {}
}
