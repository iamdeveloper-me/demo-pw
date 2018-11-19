import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ViewCell } from 'ng2-smart-table';
@Component({
  selector: 'app-promotion-priority',
  templateUrl: './promotion-priority.component.html',
  styleUrls: ['./promotion-priority.component.scss']
})
export class PromotionPriorityComponent implements OnInit {

  private createpromo: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PromoteBusiness/saveadlog';
  code = {voucherCode: ""}
  private allpromo: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PromoteBusiness/allPromotion';
  private adtypes: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PromoteBusiness/adtypes';
  
  HomePage:any = [];
  selecteditem:any = [];
  sum = 0 ;
  sub = 0;
  headers = new Headers();
  constructor(public http: Http,public toastr: ToastrService,private router: Router) { }
  ngOnInit() {

    $('.togglebtnmenu').on('click', function(){
     $('#wrapper').toggleClass('toggled');
    });

     $('.mobilefixedcart').on('click', function(){
     $('.mobilefixedcart').toggleClass('bottom0px');
    });

   // let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
  
    this.headers.append('Accept', 'application/json')
    this.headers.append('Content-Type', 'application/json');
    this.headers.append("Authorization",'Bearer '+authToken);
    this.http.get(this.allpromo,{headers:this.headers}).subscribe(data =>{data.json();
    },error => { console.log(error)});

  this.http.get(this.adtypes,{headers:this.headers}).subscribe(data =>{ data.json();
    this.HomePage.push(data.json()[1]);
    for (let i = 0; i < this.HomePage[0].adAvailableSlots.length; i++) {
      let obj={};
      obj= this.HomePage[0].adAvailableSlots[i];
      obj['isSelected']=false;
      this.HomePage[0].adAvailableSlots[i] = obj;
      }    
  },error => { console.log(error)});
  }
  navigateTo(){
    this.router.navigateByUrl('/vendor/PromoteBusiness');
  }
  prmocode(code){
              const  promoData = {
                adTypeId: code.value.adTypeId,
                voucherCode: code.value.voucherCode,
                slotIds: this.selecteditem
              }
      this.http.post(this.createpromo,promoData,{headers:this.headers}).subscribe(data =>{
      console.log(data.json());
      this.router.navigate([]).then(result => {  window.open(data.json().url, '_blank'); });
      this.toastr.success( data.json().message);
     })
  }
  
  package(list){
    list.isSelected=true;   
    this.selecteditem = this.HomePage[0].adAvailableSlots.filter(m=>m.isSelected===true);
       this.sum = 0;
       this.calculateSum(this.selecteditem);
     }
  calculateSum(selecteditem){
    this.sum = 0;
    this.selecteditem = this.HomePage[0].adAvailableSlots.filter(m=>m.isSelected===true);
    for (let i = 0; i < this.selecteditem.length; i++) {
        this.sum =this.sum+ this.selecteditem[i].cost;
      }
  }
  
  deletepackage(selecteditem ,a){
   selecteditem[a].isSelected = false;
  this.selecteditem = this.HomePage[0].adAvailableSlots.filter(m=>m.isSelected===true);
  this.calculateSum(this.selecteditem);
  }
}
