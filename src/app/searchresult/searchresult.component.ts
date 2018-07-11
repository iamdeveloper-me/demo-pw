import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {

  constructor(public _route:Router) { }

 ngOnInit() {    $.getScript('./assets/register/js/jquery-2.2.4.min.js');
                 $.getScript('./assets/register/js/bootstrap.min.js');
                 $.getScript('./assets/register/js/jquery.bootstrap.js');
                 $.getScript('./assets/js/searchresult.js');
 $(".slider_use_anather_compo").hide();

  }
  xyz(){
    this._route.navigate(['home/searchresult/detailprofile']);
  }
}
