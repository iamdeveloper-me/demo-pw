import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { apiService } from 'app/shared/service/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
  providers: [apiService],
})
export class DealsComponent implements OnInit {
  deals:any[];
  all_deals:any[]; 
  districtdeal: any[]; 
  suburbdeal:any []; 
  highlighteddeal : any[];
  constructor(private meta:Meta,   private apiService: apiService,private router:Router) {
    this.meta.addTag({ name: 'description', content: 'Great Wedding Deals and Offers | Perfect Weddings' });
   }

  ngOnInit() {
    this.apiService.getData(this.apiService.serverPath+'PerfectWedding/dealsanddiscount').subscribe(data => {
    this.deals = data.discounts;
    this.all_deals = data.deals;
    console.log(data)
  });

  this.apiService.getData(this.apiService.serverPath+'PerfectWedding/highlighteddeal').subscribe(data => {
    // console.log(data)
    this.highlighteddeal = data;
    console.log(this.highlighteddeal);
    this.districtdeal = data.districts;
    this.suburbdeal = data.suburb;
  }, error => {
     console.log(error)
  })

  
  }

  goToNextPage(a){
    sessionStorage.setItem('deal,mydeal',JSON.stringify(a));
    this.router.navigate(['home/Deal_Details']);
  }



}
