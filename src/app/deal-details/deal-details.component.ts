import { Component, OnInit } from '@angular/core';
import { SlidesOutputData } from 'ngx-owl-carousel-o';
import { apiService } from 'app/shared/service/api.service';
import { Meta, Title } from '@angular/platform-browser';
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
  constructor(private apiService:apiService,private meta : Meta, private title : Title) {
    
  }
  noImage:string='https://s3.us-east-2.amazonaws.com/prefect-image/store_noimg.jpg';
  data;
  all_event:any;
  highlighteddeal = [];
  districtdeal = [];
  suburbdeal = [];
  albumArray = [];
  dealsAlbumArray = [];
  getData(data: SlidesOutputData) {
      this.activeSlides = data;
  }
  ngOnInit() {

    this.data = JSON.parse(sessionStorage.getItem('deal,mydeal'));
    this.data = sessionStorage.getItem('deal');
    console.log(this.data);

          //Meta Tags
    this.title.setTitle(this.data.title + ` | Perfect Weddings ` );   

    this.dealsAlbumArray = this.data.dealsImages
    console.log(this.dealsAlbumArray)
    console.log(this.dealsAlbumArray.length)
    this.albumArray = this.data.albums;
    console.log(this.albumArray);

  }
}
