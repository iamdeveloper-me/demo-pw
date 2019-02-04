import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {

  constructor(private meta:Meta) {
    this.meta.addTag({ name: 'description', content: 'Great Wedding Deals and Offers | Perfect Weddings' });
   }

  ngOnInit() {
  }

}
