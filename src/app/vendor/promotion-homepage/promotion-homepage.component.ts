import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-promotion-homepage',
  templateUrl: './promotion-homepage.component.html',
  styleUrls: ['./promotion-homepage.component.scss']
})
export class PromotionHomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    $('.togglebtnmenu').on('click', function(){
     $('#wrapper').toggleClass('toggled');
    });
     $('.mobilefixedcart').on('click', function(){
     $('.mobilefixedcart').toggleClass('bottom0px');
    });

  }
  navigateTo(){
    this.router.navigateByUrl('/vendor/PromoteBusiness');
  }
  PromoteBusiness

}
