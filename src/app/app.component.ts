import { Component,  OnInit } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
constructor(){
    $.getScript('./assets/js/jssor.slider.min.js');
   
}

ngOnInit() {

}

}