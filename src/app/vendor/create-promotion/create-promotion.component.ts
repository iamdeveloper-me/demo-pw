import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { utilities } from 'app/utilitymodel';
@Component({
  selector: 'app-create-promotion',
  templateUrl: './create-promotion.component.html',
  styleUrls: ['./create-promotion.component.scss']
})
export class CreatePromotionComponent implements OnInit {

   countryArray: string[];
      public arra = new Array(); public district = new Array(); public suburb = new Array();

  constructor(public http: Http,public toastr: ToastrService,private router: Router) { }
  private createpromo: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PromoteBusiness/saveadlog';
  code = {voucherCode: ""}
  private allpromo: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PromoteBusiness/allPromotion';
  private adtypes: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PromoteBusiness/adtypes';
  HomePage:any = [];
  selecteditem:any = [];
  headers = new Headers();
  objutility: utilities = new utilities();
  sum = 0 ;
  sub = 0;
  ngOnInit() {
    $('.togglebtnmenu').on('click', function(){
     $('#wrapper').toggleClass('toggled');
    });
     $('.mobilefixedcart').on('click', function(){
     $('.mobilefixedcart').toggleClass('bottom0px');
    });
    var authToken = localStorage.getItem('userToken');
    this.headers.append('Accept', 'application/json')
    this.headers.append('Content-Type', 'application/json');
    this.headers.append("Authorization",'Bearer '+authToken);
    this.http.get(this.allpromo,{headers:this.headers}).subscribe(data =>{data.json();
  },error => { console.log(error)});
  
  this.http.get(this.adtypes,{headers:this.headers}).subscribe(data =>{ data.json();
    this.HomePage.push(data.json()[0]);
    for (let i = 0; i < this.HomePage[0].adAvailableSlots.length; i++) {
      let obj={};
      obj= this.HomePage[0].adAvailableSlots[i];
      obj['isSelected']=false;
      this.HomePage[0].adAvailableSlots[i] = obj;
      }
  },error => { console.log(error)});
  }
  prmocode(code){
            const  promoData = {
              adTypeId: code.value.adTypeId,
              voucherCode: code.value.voucherCode,
               countryId: code.value.country_id,
              slotIds: this.selecteditem
            }
             console.log(promoData)
    this.http.post(this.createpromo,promoData,{headers:this.headers}).subscribe(data =>{
    this.router.navigate([]).then(result => {  window.open(data.json().url, '_blank'); });
    this.toastr.success( data.json().message);
    })
}

package(list){
  list.isSelected=true;   
 this.selecteditem = this.HomePage[0].adAvailableSlots.filter(m=>m.isSelected===true);
    this.calculateSum(this.selecteditem);
}
navigateTo(){
  this.router.navigateByUrl('/vendor/PromoteBusiness');
}
deletepackage(selecteditem ,i){
selecteditem[i].isSelected = false;
this.selecteditem = this.HomePage[0].adAvailableSlots.filter(m=>m.isSelected===true);
this.calculateSum(selecteditem);
  }
  calculateSum(selecteditem){
    this.sum = 0;
    this.selecteditem = this.HomePage[0].adAvailableSlots.filter(m=>m.isSelected===true);
    for (let i = 0; i < this.selecteditem.length; i++) {
        this.sum =this.sum+ this.selecteditem[i].cost;
      }
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
}
