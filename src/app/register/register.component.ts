import { Component} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  ngOnInit() {    
                  $.getScript('./assets/register/js/jquery-2.2.4.min.js');
                  $.getScript('./assets/register/js/bootstrap.min.js');
                  $.getScript('./assets/register/js/jquery.bootstrap.js');
                  $.getScript('./assets/register/js/jquery.validate.min.js');
                  $.getScript('./assets/register/js/material-bootstrap-wizard.js');
  }
    constructor( ) {}

    loadScript(){
      this.ngOnInit();
    }
  
}
