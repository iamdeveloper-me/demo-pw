import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendorprofile',
  templateUrl: './vendorprofile.component.html',
  styleUrls: ['./vendorprofile.component.scss']
})
export class VendorprofileComponent implements OnInit {
  currentPage: string = "About"
  constructor() { }

  ngOnInit() { $.getScript('./assets/js/vertical-timeline.js');
  $.getScript('./assets/js/profile.js');
  }
  showPage(page: string) {
    this.currentPage = page;
}
}
