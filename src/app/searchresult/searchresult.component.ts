import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {

  constructor() { }

 ngOnInit() {    $.getScript('./assets/register/js/jquery-2.2.4.min.js');
                 $.getScript('./assets/register/js/bootstrap.min.js');
                 $.getScript('./assets/register/js/jquery.bootstrap.js');
                 $.getScript('./assets/js/searchresult.js');
 $(".slider_use_anather_compo").hide();

 $.getScript('./assets/js/jssor.slider.min.js');
 $.getScript('./assets/js/searchslide.js');

  }

}
