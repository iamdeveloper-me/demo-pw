import { Component, OnInit } from '@angular/core';
import { SlidesOutputData } from 'ngx-owl-carousel-o';
import { apiService } from 'app/shared/service/api.service';
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
  constructor(private apiService:apiService) {
    
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
    console.log(this.data);
    this.dealsAlbumArray = this.data.dealsImages
    console.log(this.dealsAlbumArray)
    this.albumArray = this.data.albums;
    // console.log(this.albumArray);
    // this.albumArray = this.data.albums[0].albumImages;
    console.log(this.albumArray);

  }
}
