import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ViewCell } from 'ng2-smart-table';
import { MainData } from '../payment-selection/payment-selection.component';
@Component({
  selector: 'app-promotion-priority',
  templateUrl: './promotion-priority.component.html',
  styleUrls: ['./promotion-priority.component.scss']
})
export class PromotionPriorityComponent implements OnInit {

  public xyz: MainData;
  page_title: string
  countryArray: string[];
  public arra = new Array(); public district = new Array(); public suburb = new Array();

  private createpromo: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PromoteBusiness/saveadlog';
  code = { voucherCode: "" }
  private allpromo: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PromoteBusiness/allPromotion';
  private adtypes: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PromoteBusiness/adtypes';

  HomePage: any = [];
  selecteditem: any = [];
  sum = 0;
  sub = 0;
  btnFalse: boolean = false
  selecteditemlength: number
  PageData: undefined[]
  headers = new Headers();
  constructor(public http: Http, public toastr: ToastrService, private router: Router) { }
  ngOnInit() {
    sessionStorage.removeItem('selected_plan');
    if (this.code.voucherCode == '') {
      this.btnFalse = false
    } else {
      this.btnFalse = true
    }
    this.loadCountries();
    $('.togglebtnmenu').on('click', function () {
      $('#wrapper').toggleClass('toggled');
    });

    $('.mobilefixedcart').on('click', function () {
      $('.mobilefixedcart').toggleClass('bottom0px');
    });

    // let headers = new Headers();
    var authToken = localStorage.getItem('userToken');

    this.headers.append('Accept', 'application/json')
    this.headers.append('Content-Type', 'application/json');
    this.headers.append("Authorization", 'Bearer ' + authToken);
    this.http.get(this.allpromo, { headers: this.headers }).subscribe(data => {
      data.json();
      this.PageData = data.json();
    }, error => { console.log(error) });

    this.http.get(this.adtypes, { headers: this.headers }).subscribe(data => {
      data.json();
      this.HomePage.push(data.json()[1]);
      for (let i = 0; i < this.HomePage[0].adAvailableSlots.length; i++) {
        let obj = {};
        obj = this.HomePage[0].adAvailableSlots[i];
        obj['isSelected'] = false;
        this.HomePage[0].adAvailableSlots[i] = obj;
        this.page_title = 'Priority Listing';

      }
    }, error => { console.log(error) });
    
    $(".gallery").click(function(){
      $(".homegallerybox").show();
      $(".prioritybox").hide();
      $(".audiencebox").hide();
      $(".dealsbox").hide();
      $(".homebannerbox").hide();
      $(".homelocationbox").hide();
   });

   $(".location").click(function(){
   
    $(".homegallerybox").hide();
    $(".homelocationbox").show();
    $(".prioritybox").hide();
    $(".audiencebox").hide();
    $(".dealsbox").hide();
    $(".homebannerbox").hide();
 });


    $(".priority").click(function(){
      $(".homegallerybox").hide();
      $(".prioritybox").show();
      $(".audiencebox").hide();
      $(".dealsbox").hide();
      $(".homebannerbox").hide();
      $(".homelocationbox").hide();
   });
    $(".audience").click(function(){
      $(".homegallerybox").hide();
      $(".prioritybox").hide();
      $(".audiencebox").show();
      $(".dealsbox").hide();
      $(".homebannerbox").hide();
      $(".homelocationbox").hide();
   });
    $(".deals").click(function(){
      $(".homegallerybox").hide();
      $(".prioritybox").hide();
      $(".audiencebox").hide();
      $(".dealsbox").show();
      $(".homebannerbox").hide();
      $(".homelocationbox").hide();
   });
    $(".homebanner").click(function(){
      $(".homegallerybox").hide();
      $(".prioritybox").hide();
      $(".audiencebox").hide();
      $(".dealsbox").hide();
      $(".homebannerbox").show();
      $(".homelocationbox").hide();
   });

    
  }
  navigateTo() {
    this.router.navigateByUrl('/vendor/PromoteBusiness');
  }
  prmocode(code) {
    const promoData = {
      adTypeId: code.value.adTypeId,
      voucherCode: code.value.voucherCode,
      countryId: code.value.country_id,
      countryName: code.value.countryName,
      slotIds: this.selecteditem,
      route_key: 1,
      title: this.page_title
    }
    sessionStorage.setItem('selected_plan', JSON.stringify(promoData));
    this.router.navigate(['/vendor/payment-selection'])
  }

  package(list) {
    list.isSelected = true;
    this.btnFalse = true;
    this.selecteditem = this.HomePage[0].adAvailableSlots.filter(m => m.isSelected === true);
    this.sum = 0;
    this.calculateSum(this.selecteditem);
    const num = this.selecteditem.length
    this.selecteditemlength = num
  }
  calculateSum(selecteditem) {
    this.sum = 0;
    this.selecteditem = this.HomePage[0].adAvailableSlots.filter(m => m.isSelected === true);
    for (let i = 0; i < this.selecteditem.length; i++) {
      this.sum = this.sum + this.selecteditem[i].cost;
    }
  }

  deletepackage(selecteditem, a) {
    this.btnFalse = false
    selecteditem[a].isSelected = false;
    this.selecteditem = this.HomePage[0].adAvailableSlots.filter(m => m.isSelected === true);
    this.calculateSum(this.selecteditem);
  }

  loadCountries() {
    let country = this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/LookupMaster/countries");
    country.subscribe(data => {
      this.countryArray = data.json();
   
      this.arra = this.countryArray
    })
  }
  country(event): void {
    const newVal = event.target.value;
    let country = this.arra.filter(c => c.countryId == newVal)[0];
  }
  route() {
   
    this.router.navigate['../../vendor/payment-selection']
  }
}
