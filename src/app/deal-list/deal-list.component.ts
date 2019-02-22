import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { apiService } from 'app/shared/service/api.service';
@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.scss']
})
export class DealListComponent implements OnInit {
  vendorid;
  vendorDetails
  constructor( private router: Router,  private route : ActivatedRoute,  private apiService: apiService,) { 
    
    this.route.paramMap.subscribe(params => {
    this.vendorid = params
   console.log(params)
      this.apiService.getData(this.apiService.serverPath+'PerfectWedding/vendordetails'+'?id='+this.vendorid.params.id).subscribe(data=>{    
        this.vendorDetails  = data;   
        //this.albums =     data.albums  
        console.log( data  )})     
     })
  }

  ngOnInit() {
  }
  goto_detail_of_deals(deal){
    console.log(deal)
    console.log(this.vendorDetails)
    const a = this.vendorDetails.vendorCategories[0].categories.categoryName;
    const b = this.vendorDetails.vendorId;
    const c = this.vendorDetails.nameOfBusiness;
    const l = deal.dealId
    this.router.navigateByUrl('/home/Deal_Details/'+a+'/'+b+'/'+c.replace(/\s/g,'')+'/'+'deals'+'/'+l);


  }
}
