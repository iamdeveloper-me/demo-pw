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
    // this.xyz=promoData;
    console.log(promoData)
    sessionStorage.setItem('selected_plan', JSON.stringify(promoData));
    //   this.http.post(this.createpromo,promoData,{headers:this.headers}).subscribe(data =>{
    //   console.log(data.json());
    //   this.router.navigate([]).then(result => {  window.open(data.json().url, '_blank'); });
    //   this.toastr.success( data.json().message);
    //  })
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
      console.log(this.countryArray);
      this.arra = this.countryArray
    })
  }
  country(event): void {
    const newVal = event.target.value;
    let country = this.arra.filter(c => c.countryId == newVal)[0];
    // this.c_id = this.arra.filter(c => c.countryId == newVal)[0].countryId;
    // this.address_modelfield.country_id = country.countryId;
    // this.country_name = country.countryName
    // this.district = country.districts

  }
  route() {
    alert('ffffffffffff')
    this.router.navigate['../../home']
  }
}
