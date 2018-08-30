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
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    if(!authToken) 
   {  this.router.navigate(['../home']);
    }
    
}

}