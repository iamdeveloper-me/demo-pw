import { Component} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  ngOnInit() {    
                  $.getScript('./assets/register/js/register.js');
                 $(".show").hide();
                  
  }
    constructor( ) {}

    loadScript(){this.ngOnInit;}

}
