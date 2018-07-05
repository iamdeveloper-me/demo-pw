import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#mylist").hide();
    $("#chat").hide();
    $("#myaccount").hide();
    $("#editprofile").hide();
    $("#gallery").hide();
    $.getScript('./assets/js/vendordashboard.js');
   
  }
  loadScript(){
    this.ngOnInit();
  }

}
