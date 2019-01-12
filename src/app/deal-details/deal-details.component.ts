import { Component, OnInit } from '@angular/core';


import { SlidesOutputData } from 'ngx-owl-carousel-o';



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
  constructor() {
  this.slidesStore = [
                        {
                          src: "https://static1.squarespace.com/static/51d17d80e4b0df98a9be4719/54aa5cd6e4b0b365f776ab79/59a42ecf6b8f5b86e3a49497/1503932119299/RJH+Wedding+Photography-IMG_5895.jpg?format=2500w"
                        },
                        {
                          src: "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

                        },
                        {
                          src: "https://static1.squarespace.com/static/51d17d80e4b0df98a9be4719/54aa5cd6e4b0b365f776ab79/59a42ecf6b8f5b86e3a49497/1503932119299/RJH+Wedding+Photography-IMG_5895.jpg?format=2500w"

                        },
  ] 
  }
  getData(data: SlidesOutputData) {
      this.activeSlides = data;
  }
  ngOnInit() {
  }
}
