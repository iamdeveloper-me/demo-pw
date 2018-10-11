import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-promotion',
  templateUrl: './create-promotion.component.html',
  styleUrls: ['./create-promotion.component.scss']
})
export class CreatePromotionComponent implements OnInit {

  constructor(public http: Http,public toastr: ToastrService) { }
  private createpromo: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PromoteBusiness/saveadlog';
  code = {voucherCode: ""}
  private allpromo: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PromoteBusiness/allPromotion';
  private adtypes: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/PromoteBusiness/adtypes';
  
  HomePage:any = [];
  selecteditem:any = [];
  sum = 0 ;
  sub = 0;
  ngOnInit() {
     
    $('.togglebtnmenu').on('click', function(){
     //alert("h1");
    //$(this).toggleClass('cross');
      //$('.blackoverlaymobile').toggleClass('blockmobile');
    //$('#page-content-wrapper').toggleClass('overhidden');
     $('#wrapper').toggleClass('toggled');
    });

  

     $('.mobilefixedcart').on('click', function(){
     //alert("hi  ");
     $('.mobilefixedcart').toggleClass('bottom0px');
      //$('.mobilebtncart').addClass('nonevisi');
    });
   

    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
  
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);


  
  this.http.get(this.allpromo,{headers:headers}).subscribe(data =>{data.json();
 
    console.log(data.json());
  },error => { console.log(error)});
      
  


  this.http.get(this.adtypes,{headers:headers}).subscribe(data =>{ data.json();
    console.log(data.json());
    this.HomePage.push(data.json()[0]);
    console.log(this.HomePage);
  },error => { console.log(error)});
      


  }
  prmocode(code){
  // alert("xcdfds");
   console.log(code);

    let headers = new Headers();
              var authToken = localStorage.getItem('userToken');
              headers.append('Accept', 'application/json')
              headers.append('Content-Type', 'application/json');
              headers.append("Authorization",'Bearer '+authToken);
              
            
                 console.log( this.selecteditem);
            const  promoData = {
              adTypeId: code.value.adTypeId,
              voucherCode: code.value.voucherCode,
              slotIds: this.selecteditem
            }
              console.log(promoData)
    this.http.post(this.createpromo,promoData,{headers:headers}).subscribe(data =>{
    console.log(data.json());
    this.toastr.success( data.json().message);

    })


  

}

package(list){

this.selecteditem.push(list);
console.log(this.selecteditem);

this.sum = 0;
for (let i of this.selecteditem) {
  this.sum = this.sum + i.cost;
}

console.log(this.sum);
}

deletepackage(selecteditem ,a){
  

console.log(a);
  for (let i of this.selecteditem) {
    this.sum = this.sum - i.cost;
   
    //debugger
 
  }
  this.selecteditem.splice(a,1);
  console.log(this.sum); 
}

}
