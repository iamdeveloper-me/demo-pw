import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { apiService } from '../shared/service/api.service';
import { find } from 'rxjs-compat/operator/find';
import { Router } from '@angular/router';
import { SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-vendorcard',
  templateUrl: './vendorcard.component.html',
  styleUrls: ['./vendorcard.component.scss'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class VendorcardComponent implements OnInit {

  customOptions: any = {
    margin: 20,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
        stagePadding: 40
      },
      768: {
        items: 2,
        stagePadding: 40
      },
      1024: {
        items: 4
      },
      1366: {
        items: 4
      }
    },
    nav: true,
    //autoplaySpeed:1
  }

  

  featured_supplier_data = []
  max = []
  dream_wedding_location = []
  dream_wedding_location_length;
  all_category = []
  Popular_Wedding_array = []
  Popular=''
  objFilterParam: filterParam;
  activeSlides: SlidesOutputData;

  slidesStore: any[];
  constructor( private router: Router ,config: NgbCarouselConfig, private apiService: apiService) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    this.objFilterParam = new filterParam();
    // this.slidesStore = [
    //   {
    //     src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    //   },
    //   {
    //     src: "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

    //   },
    //   {
    //     src: "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

    //   },
    //   {
    //     src: "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

    //   },
    //   {
    //     src: "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

    //   }
    // ] 
    
  }
  


  getData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
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
      
      this.featured_supplier_data = data.featuredWeddingSuppliers;



      this.slidesStore = this.featured_supplier_data

      this.featured_supplier_data.forEach(element => {
        element.reviews.forEach(element => {           
          this.max.push(element.rating) 
          this.max.sort((a,b) => 0 - (a > b ? 1 : -1))
        });
      });
     console.log(this.slidesStore)


      // this.featured_supplier_data.forEach(element => {
      //   element.reviews.forEach(element => {           
      //     this.max.push(element.rating) 
      //     this.max.sort((a,b) => 0 - (a > b ? 1 : -1))
      //   });
      // });



      //this.max = [];
      console.log(data.featuredWeddingSuppliers)
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
      this.dream_wedding_location_length = this.dream_wedding_location.length
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
        console.log( this.Popular_Wedding_array)
      }
      
    
    },
      error => {
       console.log(error)
      }
    )
  }
  Categories_each(c,isAllSupplier,isDreamLocation){
    if(c){
      console.log(this.objFilterParam);
   this.objFilterParam.catId  = c.categoryId;
   this.objFilterParam.categoryName= c.categoryName;
   this.objFilterParam.isDreamLocation=isDreamLocation;
   this.objFilterParam.isAllSupplier=isAllSupplier;
   this.objFilterParam.page = 0;
   this.objFilterParam.pageSize = 25;
   this.objFilterParam.sortDir = "";
   this.objFilterParam.sortedBy ="";
   this.objFilterParam.searchQuery ="";

  }
   sessionStorage.setItem('filterParam',JSON.stringify(this.objFilterParam));
    this.router.navigate(['home/searchresult',this.objFilterParam.categoryName.replace(/\s/g,'')]);
  }
  supplier_all(c,isAllSupplier,isDreamLocation){
// debugger
      this.objFilterParam.catId  = c?c.categoryId:0;
      this.objFilterParam.categoryName= c?c.categoryName:'';
      this.objFilterParam.isDreamLocation=isDreamLocation;
      this.objFilterParam.isAllSupplier=isAllSupplier;
      this.objFilterParam.page = 0;
      this.objFilterParam.pageSize = 25;
      this.objFilterParam.sortDir = "";
      this.objFilterParam.sortedBy ="";
      this.objFilterParam.searchQuery ="";
  
    sessionStorage.setItem('filterParam',JSON.stringify(this.objFilterParam));
    this.router.navigate(['home/searchresult',this.objFilterParam.categoryName.replace(/\s/g,'')]);
   // console.log(this.objFilterParam.categoryName);
  }
  // location_all(c){
   
  //   let catId= c.categoryId;
  //   let CatName= c.categoryName;
  //   alert("location")
  //   console.log(c)
  //   this.router.navigate(['home/searchresult',true]);
  // }
}

export class filterParam{
  catId:number=0;
  categoryName:string='';
  isAllSupplier:boolean=false;
  isDreamLocation:boolean=false;
  page:number=1;
  pageSize: number=3;
  sortDir: "";
  sortedBy: "";
  searchQuery: "";
  locationId:number;
  totalCount:number;
}