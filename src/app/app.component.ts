import { Component, ViewContainerRef } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
constructor(){
    $.getScript('./assets/js/jssor.slider.min.js');
}
}