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
  $.getScript('./assets/register/js/jquery-2.2.4.min.js');
  $.getScript('./assets/register/js/bootstrap.min.js');
  $.getScript('./assets/register/js/jquery.bootstrap.js');
  $.getScript('./assets/js/searchresult.js');
  $(".slider_use_anather_compo").hide();
  

  $.getScript('./assets/jss/core/popper.min.js');
  $.getScript('./assets/jss/core/bootstrap-material-design.min.js');
  $.getScript('./assets/jss/plugins/perfect-scrollbar.jquery.min.js');
  $.getScript('./assets/jss/plugins/chartist.min.js');
  $.getScript('./assets/jss/plugins/bootstrap-notify.js');

 $(".cityinput2").click(function(){
      //alert("city_open");
      $("#citybox").show();
    });
 $(".venueinput").click(function(){
      //alert("category_open");
      $("#categorybox").show();
    });


 $(".icon-small").click(function(){
     //alert("close");
      $("#citybox").hide();
      $("#categorybox").hide();
    });
 $(".regular").click(function(){
     //alert("close");
       $("#citybox").hide();
      $("#categorybox").hide();
    });
 $(".filterbtnmobile").click(function(){
 //alert("hi");
    $("#searchfilterbox").show();
    });

  }
  xyz(){
    this._route.navigate(['home/detailprofile']);
  }
}
