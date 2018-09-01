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
  data 
  modelfield : any = {};
  obj = [];
  
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
  // console.log( data.json());
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
   // console.log("asdxsdcs-----------------------------------------");
  //console.log(b);
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
var infotitle = info.value.title1;
var infosundayOpen =  info.value.sundayOpen;
var infosundayClose =  info.value.sundayClose;

var infomondayOpen =  info.value.mondayOpen;
var infomondayClose =  info.value.mondayClose;

var infotuesdayOpen =  info.value.tuesdayOpen;
var infotuesdayClose =  info.value.tuesdayClose;

var infowednesdayOpen =  info.value.wednesdayOpen;
var infowednesdayClose =  info.value.wednesdayClose;

var infothursdayOpen =  info.value.thursdayOpen;
var infothursdayClose =  info.value.thursdayClose;

var infofridayOpen =  info.value.fridayOpen;
var infofridayClose =  info.value.fridayClose;

var infosaturdayOpen =  info.value.saturdayOpen;
var infosaturdayClose =  info.value.saturdayClose;

 var infoisFridayOpen  = info.value.isFridayOpen;

 var infoisMondayOpen =  info.value.isMondayOpen;

 var infoisPrimary =  info.value.isPrimary;

 var infoisSaturdayOpen = info.value.isSaturdayOpen;

 var infoisSundayOpen = info.value.isSundayOpen ;

 var infoisThursdayOpen = info.value.isThursdayOpen;

 var infoisTuesdayOpen = info.value.isTuesdayOpen;

 var infoisWednesdayOpen =  info.value.isWednesdayOpen;


     console.log(  infoisMondayOpen  );
  

    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);


     this.http.post(this.urlpost,{
      vendorLocationId: infovendorLocationId,
      title: infotitle,
      countryId: infocountryId,
      vendorId: infovendorId,
      country: {countryId: infocountryId,countryName: infocountryName},
      city:  infocity,
      postalCode:  infopostalCode,
      address:  infoaddress,
      phone: infophone,
      mobile:   infomobile ,
      sundayOpen:     infosundayOpen,
      sundayClose:    infosundayClose,
      mondayOpen:     infomondayOpen,
      mondayClose:    infomondayClose,
      tuesdayOpen:    infotuesdayOpen,
      tuesdayClose:   infotuesdayClose,
      wednesdayOpen:  infowednesdayOpen,
      wednesdayClose: infowednesdayClose,
      thursdayOpen:   infothursdayOpen,
      thursdayClose:  infothursdayClose,
      fridayOpen:     infofridayOpen,
      fridayClose:    infofridayClose,
      saturdayOpen:   infosaturdayOpen,
      saturdayClose:  infosaturdayClose,
      isFridayOpen:   infoisFridayOpen,
      isMondayOpen:   infoisMondayOpen,
      isPrimary:      infoisPrimary,
      isSaturdayOpen: infoisSaturdayOpen,
      isSundayOpen:   infoisSundayOpen,
      isThursdayOpen: infoisThursdayOpen,
      isTuesdayOpen:  infoisTuesdayOpen,
      isWednesdayOpen:infoisWednesdayOpen,
     

    },{headers:headers}).subscribe( (data)=> { console.log(data)}
,      (responce)=>{ console.log(responce); });
   }
abc(event){
      console.log(event)
    }
  p =  true;
  enable1 =  true;
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