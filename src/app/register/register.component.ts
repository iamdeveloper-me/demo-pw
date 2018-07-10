import { Component} from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  ngOnInit() {  
//  $.material.init();
    $(".loginnav").hide(); 
    $.getScript('./assets/js/register.js');             
  }
    constructor( ) {}

    loadScript(){this.ngOnInit;}
}
