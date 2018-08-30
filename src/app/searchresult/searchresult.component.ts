import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {

  constructor(public _route:Router) { }

 ngOnInit() {   
  $.getScript('./assets/js/owljsor.js');
  $.getScript('./assets/js/searchresult.js'); 
   
  $.getScript('./assets/register/js/jquery-2.2.4.min.js');
  $.getScript('./assets/register/js/bootstrap.min.js');
  //$.getScript('./assets/register/js/jquery.bootstrap.js');

  $.getScript('./assets/jss/core/popper.min.js');
  $.getScript('./assets/jss/core/bootstrap-material-design.min.js');;
  $.getScript('./assets/jss/plugins/perfect-scrollbar.jquery.min.js')
  $.getScript('./assets/jss/plugins/chartist.min.js');
  $.getScript('./assets/jss/plugins/bootstrap-notify.js');

  

  $(".slider_use_anather_compo").hide();






  }
  xyz(){
    this._route.navigate(['home/detailprofile']);
  }
}
