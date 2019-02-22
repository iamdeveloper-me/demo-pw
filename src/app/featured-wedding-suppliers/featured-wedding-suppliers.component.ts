import { Component, OnInit } from '@angular/core';
import { apiService } from '../shared/service/api.service';
@Component({
  selector: 'app-featured-wedding-suppliers',
  templateUrl: './featured-wedding-suppliers.component.html',
  styleUrls: ['./featured-wedding-suppliers.component.scss']
})
export class FeaturedWeddingSuppliersComponent implements OnInit {
  featured_supplier_data =[]
  constructor( private apiService: apiService) { }

  ngOnInit() {
  this.featured_supplier();
  
  }
  featured_supplier(){
    this.apiService.getData(this.apiService.serverPath+'PerfectWedding/featuredsuppliers').subscribe(data => {
      this.featured_supplier_data = data.featuredWeddingSuppliers;
    },
      error => {
       console.log(error)
      }
    )
  }
}
