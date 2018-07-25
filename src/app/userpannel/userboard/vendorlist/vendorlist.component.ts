import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.scss']
})
export class VendorlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {  $("li").removeClass("user");
  $("#login").hide();
  }

}
