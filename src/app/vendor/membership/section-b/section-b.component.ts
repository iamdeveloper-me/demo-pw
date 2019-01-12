import { Component, OnInit } from '@angular/core';
import { SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-section-b',
  templateUrl: './section-b.component.html',
  styleUrls: ['./section-b.component.scss']
})
export class SectionBComponent implements OnInit {
  payFrequency = 1
  customOptions: any = {
    margin: 20,
    loop: false,
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
      767: {
        items: 3
      },
      1024: {
        items: 3
      }
    },
    //autoplaySpeed:1
  }
  activeSlides: SlidesOutputData;
  slidesStore: any[];

  constructor() { 


   this.slidesStore  = [{"pricingPlanId":1,"title":"Basic (Free)","shortDescription":"Basic (Free)","isStoreFront":true,"isLeadManagement":true,"isLinkedAccount":true,"isCalendar":true,"isPromoteProfile":true,"isPublishEvents":true,"isReviewManagement":true,"pinnedReviews":false,"unlimitedPhotos":false,"unlimitedAlbums":false,"performanceAnalytics":0,"mulipleBranches":false,"priorityInSearch":0,"monthlyPrice":0,"isActive":true,"dateAddedOn":"2018-08-11T11:00:21.063","noOfLocationAllowed":1,"noOfMonthFeeOff":0,"dealsAndDiscount":false},{"pricingPlanId":2,"title":"Premium","shortDescription":"Premium","isStoreFront":true,"isLeadManagement":true,"isLinkedAccount":true,"isCalendar":true,"isPromoteProfile":true,"isPublishEvents":true,"isReviewManagement":true,"pinnedReviews":true,"unlimitedPhotos":true,"unlimitedAlbums":true,"performanceAnalytics":1,"mulipleBranches":true,"priorityInSearch":1,"monthlyPrice":500,"isActive":true,"dateAddedOn":"2018-08-11T11:00:21.063","noOfLocationAllowed":2,"noOfMonthFeeOff":2,"dealsAndDiscount":true},{"pricingPlanId":3,"title":"Ultimate","shortDescription":"Ultimate","isStoreFront":true,"isLeadManagement":true,"isLinkedAccount":true,"isCalendar":true,"isPromoteProfile":true,"isPublishEvents":true,"isReviewManagement":true,"pinnedReviews":true,"unlimitedPhotos":true,"unlimitedAlbums":true,"performanceAnalytics":2,"mulipleBranches":true,"priorityInSearch":2,"monthlyPrice":1000,"isActive":true,"dateAddedOn":"2018-08-11T11:00:21.063","noOfLocationAllowed":3,"noOfMonthFeeOff":2,"dealsAndDiscount":true}]
  }
  getData(data: SlidesOutputData) {
    this.activeSlides = data;

  }
  ngOnInit() {
  }

}
