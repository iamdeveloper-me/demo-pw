import { Component, OnInit } from '@angular/core';
import { SlidesOutputData } from 'ngx-owl-carousel-o';
import { MasterserviceService } from 'app/ngservices/masterservice.service';
import { apiService } from 'app/shared/service/api.service';
@Component({
  selector: 'app-honeymoon-details',
  templateUrl: './honeymoon-details.component.html',
  styleUrls: ['./honeymoon-details.component.scss']
})
export class HoneymoonDetailsComponent  {

  customOptions: any = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: false,
    navSpeed: 700,
    margin:12,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true,
    //autoplaySpeed:1
  }
  Honeymoon_detail:any;
  activeSlides: SlidesOutputData;
  slidesStore: any[];
  constructor(public _masterservice: MasterserviceService,private apiService: apiService) {
    // this.slidesStore = [
    //   {
    //     src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //     business_name: "Business Name" 
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
    this.getSliderData(); 
    this.Honeymoon_detail= JSON.parse(sessionStorage.getItem('Honeymoon_detail'));

    console.log(this.Honeymoon_detail)
  }
  getData(data: SlidesOutputData) {
    this.activeSlides = data;
  }
  getSliderData(){
    const data = {
      "categoryId" : 4,
      "districtId" : 1
    }
    this._masterservice.getFilterResult(data).subscribe(res =>{
      this.slidesStore =  res['items']  
    },error=>{
      console.log(JSON.stringify(error));
    });
  }
  ngOnInit() {   
              $.getScript('./assets/js/searchresult.js'); 
              this.apiService.getData(this.apiService.serverPath+'PerfectWedding/vendorsinhoneymoonandtravel').subscribe(data => {
                this.slidesStore = data;
                }, error => { console.log(error) }
                );
  }
  getSearchFilterResult(){}
  clear_the_session(){
    this.Honeymoon_detail = null;
  }
}
