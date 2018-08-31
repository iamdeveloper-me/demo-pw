import { Component, OnInit ,Input} from '@angular/core';
import { Http,Headers } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  modelfield : any = {};
  currentPage: string = "About"
  obj = [];
  name= 'fgdfgdfgdfgdf'
  Country = 'India'; 
  District = 'Delhi';
  StreetAddress = '12, Park Street road';
  phone1 = '0731-666666';
  phone2 = '0731-555555';
  phone3 = '1234567890';
  Sunday = 'Closed';
  Mondayopen = '9:00' ;Mondayclose = '5:00';
  Tuesdayopen= '9:00' ;Tuesdayclose= ' 5:00';
  Wednesdayopen ='9:00';Wednesdayclose ='5:00';
  Thursdayopen = '9:00';Thursdayclose = '5:00';
  Fridayopen =  '9:00';Fridayclose=  '5:00';
  Saturday = 'Closed';
  constructor(public http: Http) {}
  private urlget: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/mylocations'
  private urlpost: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/savelocation'

  location: any = {};

  countryArray:string[];

  ngOnInit(): void {

    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
                      
    this.http.get(this.urlget,{headers:headers}).subscribe((data) => { 
    this.countryArray = data.json() as string[]
   console.log( data.json() as string[] );
   console.log( data.json());
});
   

    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
    //edit js
    $.getScript('./assets/js/vertical-timeline.js');
    function testAnim(x) {
      $('.modal .modal-dialog').addClass('animated');
      $('.modal .modal-dialog').addClass('bounceIn');
  };
 
  $('#location').on('show.bs.modal', function (e) {
    var anim = $('#entrance').val();
        testAnim(anim);
  })
  $('#location').on('hide.bs.modal', function (e) {
    var anim = $('#exit').val();
        testAnim(anim);
  })
  $('#phone').on('show.bs.modal', function (e) {
    var anim = $('#entrance').val();
        testAnim(anim);
  })
  $('#phone').on('hide.bs.modal', function (e) {
    var anim = $('#exit').val();
        testAnim(anim);
  })
  }
  openModel(b){
    //console.log(b);
    this.modelfield  = b;
    console.log("asdxsdcs-----------------------------------------");
  console.log(b);
  }
  upForm(info){

 console.log(info);

var infovendorLocationId = info.value.vendorLocationId;
var infoaddress = info.value.address;
var infocity = info.value.city;
var infomobile = info.value.mobile;
var infovendorId = info.value.vendorId;
var infocountryName = info.value.country;
var infocountryId = info.value.countryId;
var infopostalCode = info.value.postalCode;
var infophone = info.value.phone;
var infotitle = info.value.title;
    // console.log(infovendorLocationId );
    //  console.log( infotitle);
    //   console.log( infocountryId );
    //    console.log( infovendorId);
        console.log( infocountryName);
    //      console.log(infocity);
    //       console.log(infopostalCode);
    //       console.log(infoaddress);
    //       console.log(infophone);
    //       console.log( infomobile );
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
    // console.log(info);
   // console.log(infophone)
  var data = {
         vendorLocationId: infovendorLocationId,
        title: infotitle,
       // countryId: infocountryId,
         vendorId: infovendorId,
        country: {countryId: infocountryId,countryName: infocountryName},
        city:  infocity,
         postalCode:  infopostalCode,
         address:  infoaddress,
         phone: infophone,
         mobile:   infomobile ,
       }
       console.log(data)
     this.http.post(this.urlpost,data,{headers:headers}).subscribe( (data)=> { console.log(data)}
,      (responce)=>{ console.log(responce); });
   }
abc(event){
      console.log(event)
    }
  enable =  true;
  enable1 =  false;
  enable2 =  true;
  enable3 =  true;
  enable4 =  true;
  enable5 =  true;
  enable6 =  true;
  enable7 =  true;
  count = 0;
  onSubmit() { }

  onChange() {
    this.count++;
  }

  showPage(page: string) {
    this.currentPage = page;
}
//model
closeResult: string;
}