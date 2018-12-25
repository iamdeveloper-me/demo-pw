import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { apiService } from '../shared/service/api.service';
import { find } from 'rxjs-compat/operator/find';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vendorcard',
  templateUrl: './vendorcard.component.html',
  styleUrls: ['./vendorcard.component.scss'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class VendorcardComponent implements OnInit {
  featured_supplier_data = []
  max = []
  dream_wedding_location = []
  all_category = []
  Popular_Wedding_array = []
  constructor( private router: Router ,config: NgbCarouselConfig, private apiService: apiService) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;

  }

  ngOnInit() { 
    this.featured_supplier()
    this.Dream_Wedding()
    this.Popular_Wedding()

    $.getScript('./assets/jss/core/popper.min.js');
    $.getScript('./assets/jss/core/bootstrap-material-design.min.js');
    $.getScript('./assets/jss/plugins/perfect-scrollbar.jquery.min.js');
    $.getScript('./assets/jss/plugins/chartist.min.js');
    $.getScript('./assets/jss/plugins/bootstrap-notify.js');
    $.getScript('./assets/js/owljsor.js');
    $.getScript('./assets/js/curosselfun.js');   



  }

  featured_supplier(){
    this.apiService.getData(this.apiService.serverPath+'PerfectWedding/featuredsuppliers').subscribe(data => {
      console.log(data.featuredWeddingSuppliers)
      this.featured_supplier_data = data.featuredWeddingSuppliers;
      this.featured_supplier_data.forEach(element => {
        element.reviews.forEach(element => {           
          this.max.push(element.rating) 
          this.max.sort((a,b) => 0 - (a > b ? 1 : -1))
          
        });
       
      });
      //this.max = [];
    },
      error => {
       console.log(error)
      }
    )
  }

  Dream_Wedding(){
    this.apiService.getData(this.apiService.serverPath+'PerfectWedding/dreamweddinglocation').subscribe(data => {
      console.log(data.dreamWeddingLocations)
      this.dream_wedding_location =  data.dreamWeddingLocations;
    },
      error => {
       console.log(error)
      }
    )
  }
  Popular_Wedding(){
    this.apiService.getData(this.apiService.serverPath+'Categories/categorieswithlistingcount').subscribe(data => {
      console.log(data)
      for (let i of data) {
        if(i.isPopular == true){
          this.Popular_Wedding_array.push(i);
        }
        //console.log( this.Popular_Wedding_array)
      }
      
    
    },
      error => {
       console.log(error)
      }
    )
  }

  Categories_each(c,isAllSupplier,isDreamLocation){
    let catId=0;
    let CatName='';
    if(c){
     catId= c.categoryId;
     CatName= c.categoryName;
  }
    console.log(c)
    this.router.navigate(['home/searchresult',catId+'/'+CatName+'/'+isAllSupplier+'/'+isDreamLocation]);
  }

  // supplier_all(c){
   
  //   let catId= c.categoryId;
  //   let CatName= c.categoryName;
  //   alert("fdgdfg");
  //   console.log(c)
  //   this.router.navigate(['home/searchresult',true]);
  // }

  // location_all(c){
   
  //   let catId= c.categoryId;
  //   let CatName= c.categoryName;
  //   alert("location")
  //   console.log(c)
  //   this.router.navigate(['home/searchresult',true]);
  // }
}
