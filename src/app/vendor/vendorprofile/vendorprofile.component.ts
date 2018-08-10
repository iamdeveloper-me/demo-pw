import { Component, OnInit , ViewChild } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vendorprofile',
  templateUrl: './vendorprofile.component.html',
  styleUrls: ['./vendorprofile.component.scss']
})
export class VendorprofileComponent implements OnInit {
  currentPage: string = "About"
  constructor() { }

  ngOnInit() { $.getScript('./assets/js/vertical-timeline.js');
  // $.getScript('./assets/js/profile.js');
 
  }
  showPage(page: string) {
    this.currentPage = page;
}



 // Variable Declaration
 x: any;
 greeting = {};
 name = 'World';

 // Context and manual triggers section
 @ViewChild('x') public tooltip: NgbTooltip;

 public changeGreeting(greeting: any): void {
   const isOpen = this.tooltip.isOpen();
   this.tooltip.close();
   if (greeting !== this.greeting || !isOpen) {
     this.greeting = greeting;
     this.tooltip.open(greeting);
   }
 }
}
