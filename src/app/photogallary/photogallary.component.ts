import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photogallary',
  templateUrl: './photogallary.component.html',
  styleUrls: ['./photogallary.component.scss']
})
export class PhotogallaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('./assets/js/prism.min.js'); 
    $.getScript('./assets/js/owljsor.js');
    $.getScript('./assets/js/jquery.fancybox.min.js');
    $.getScript('./assets/js/curosselfun.js');
   
}

}