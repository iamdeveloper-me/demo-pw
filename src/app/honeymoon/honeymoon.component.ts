import { Component, OnInit } from '@angular/core';
import { SlidesOutputData } from 'ngx-owl-carousel-o';
import { MasterserviceService } from 'app/ngservices/masterservice.service';
import { apiService } from 'app/shared/service/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-honeymoon',
  templateUrl: './honeymoon.component.html',
  styleUrls: ['./honeymoon.component.scss'],
  providers: [apiService],
})
export class HoneymoonComponent implements OnInit{
  Honeymoon_destinations:any;
  vendors_of_honeymoon:any;
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
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
  ngOnInit() {
      this.apiService.getData(this.apiService.serverPath+'PerfectWedding/vendorsinhoneymoonandtravel').subscribe(data => {
        this.slidesStore = data;
        console.log(data);
        }, error => { console.log(error) }
        );

  }
  activeSlides: SlidesOutputData;
  slidesStore: any[];
  constructor(public _masterservice: MasterserviceService,private apiService: apiService,private router: Router,) {
    this.getSliderData(); 
    this.apiService.getData(this.apiService.serverPath+'PerfectWedding/honeymoondestinations').subscribe(data => {
      this.Honeymoon_destinations =data;
      console.log( this.Honeymoon_destinations);
      },error => { console.log(error) });
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
      this.slidesStore =  res['items']  ;
    },error=>{
      console.log(JSON.stringify(error));
    });
  }
  honeymoondetail_page(a){
    sessionStorage.setItem('Honeymoon_detail',JSON.stringify(a));
    this.router.navigateByUrl('/home/Honeymoon_Details');
  }
}
