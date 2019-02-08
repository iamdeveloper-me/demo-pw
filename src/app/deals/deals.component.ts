import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { apiService } from 'app/shared/service/api.service';
@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
  providers: [apiService],
})
export class DealsComponent implements OnInit {
  deals=[];
  all_deals= [];
  constructor(private meta:Meta,   private apiService: apiService,) {
    this.meta.addTag({ name: 'description', content: 'Great Wedding Deals and Offers | Perfect Weddings' });
   }

  ngOnInit() {
    this.apiService.getData(this.apiService.serverPath+'PerfectWedding/dealsanddiscount').subscribe(data => {
    this.deals = data.discounts;
    this.all_deals = data.deals;
    console.log( this.deals);
    console.log( this.all_deals)
  });
  
  }

}
