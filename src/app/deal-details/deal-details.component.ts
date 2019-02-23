import { Component, OnInit } from '@angular/core';
import { SlidesOutputData } from 'ngx-owl-carousel-o';
import { apiService } from 'app/shared/service/api.service';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-deal-details',
  templateUrl: './deal-details.component.html',
  styleUrls: ['./deal-details.component.scss']
})
export class DealDetailsComponent implements OnInit {
  customOptions: any = {
                          loop: true,
                          mouseDrag: true,
                          touchDrag: true,
                          pullDrag: true,
                          dots: true,
                          autoplay: true,
                          navSpeed: 700,
                          nav: false,
                          navText: ['', ''],
                          responsive: {
                          0: {
                          items: 1
                          },
                          400: {
                          items: 1
                          },
                          740: {
                          items: 1
                          },
                          940: {
                          items: 1
                          }
                          }
                          //autoplaySpeed:1
  }
  activeSlides: SlidesOutputData;
  slidesStore: any[];
  constructor(
    private apiService:apiService,
    private meta : Meta, 
    private title : Title,
    private route : ActivatedRoute
    ) { }
  noImage:string='https://s3.us-east-2.amazonaws.com/prefect-image/store_noimg.jpg';
  data;
  highlighteddeal = [];
  districtdeal = [];
  suburbdeal = [];
  albumArray = [];
  dealsAlbumArray = [];
  animals
  deals:any[];
  all_deals:any[];
  DataArray:any[];
  getData(data: SlidesOutputData) {
      this.activeSlides = data;
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.animals = params
      console.log(this.animals.params.dealId);
      this.DealDetail(this.animals.params.dealId);
    });

    // if(sessionStorage.getItem('deal,mydeal')){
    //   this.data = JSON.parse(sessionStorage.getItem('deal,mydeal'));
    // }else{
    //   this.data = JSON.parse(sessionStorage.getItem('Deal_Details'));
    // } 
   
    // console.log(this.data);

    //  //Meta Tags
    // this.title.setTitle(this.data.title + ` | Perfect Weddings ` );   

    // this.dealsAlbumArray = this.data.dealsImages
    // console.log(this.dealsAlbumArray)
    // console.log(this.dealsAlbumArray.length)
    // this.albumArray = this.data.albums;
    // console.log(this.albumArray);
  }

  DealDetail(a){
    console.log(a)
    this.apiService.getData(this.apiService.serverPath+'PerfectWedding/dealsanddiscount').subscribe(res => {
      console.log(res)
      // this.deals = res.discounts;
      this.all_deals = res.deals;
      // this.DataArray = res;
      this.data = this.all_deals.filter(items => items.dealId == a);
      console.log(this.data) 
      this.dealsAlbumArray = this.data[0].dealsImages
      });  
  }


}
