import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
constructor(private router: Router){
    $.getScript('./assets/js/jssor.slider.min.js');
   
}

ngOnInit() {
    $.getScript('./assets/jss/core/popper.min.js');
    $.getScript('./assets/jss/core/bootstrap-material-design.min.js');
    // $.getScript('./assets/jss/plugins/perfect-scrollbar.jquery.min.js');
    $.getScript('./assets/jss/plugins/chartist.min.js');
    $.getScript('./assets/jss/plugins/bootstrap-notify.js');
    $.getScript('./assets/js/owljsor.js');
    $.getScript('./assets/js/curosselfun.js');
 
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    if(!authToken) 
   {  this.router.navigate(['../home']);
    }
    
}

}