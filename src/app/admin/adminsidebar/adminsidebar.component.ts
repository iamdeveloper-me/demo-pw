import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminsidebar',
  templateUrl: './adminsidebar.component.html',
  styleUrls: ['./adminsidebar.component.scss']
})
export class AdminsidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('./assets/js/jquery.slimscroll.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
  }

}
