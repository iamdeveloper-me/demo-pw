import { Component, OnInit ,Input , ViewChild, NgZone,} from '@angular/core';
import { Http,Headers } from '@angular/http';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';

declare var google: any;
 
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
 
interface Location {
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  address_level_1?:string;
  address_level_2?: string;
  address_country?: string;
  address_zip?: string;
  address_state?: string;
  marker?: Marker;
}
 
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

 data;
  circleRadius:number = 5000;
  milesToRadius(value) {
    this.circleRadius = value / 0.00062137;
 }

 circleRadiusInMiles() {
   return this.circleRadius * 0.00062137;
 }
  
  markerDragEnd(m: any, $event: any) {
    this.location.marker.lat = m.coords.lat;
    this.location.marker.lng = m.coords.lng;
    this.findAddressByCoordinates();
   }
   findAddressByCoordinates() {
    this.geocoder.geocode({
      'location': {
        lat: this.location.marker.lat,
        lng: this.location.marker.lng
      }
    }, (results, status) => {
      this.decomposeAddressComponents(results);
    })
  }

  decomposeAddressComponents(addressArray) {
    if (addressArray.length == 0) return false;
    let address = addressArray[0].address_components;
 
    for(let element of address) {
      if (element.length == 0 && !element['types']) continue
 
      if (element['types'].indexOf('street_number') > -1) {
        this.location.address_level_1 = element['long_name'];
        continue;
      }
      if (element['types'].indexOf('route') > -1) {
        this.location.address_level_1 += ', ' + element['long_name'];
        continue;
      }
      if (element['types'].indexOf('locality') > -1) {
        this.location.address_level_2 = element['long_name'];
        continue;
      }
      if (element['types'].indexOf('administrative_area_level_1') > -1) {
        this.location.address_state = element['long_name'];
        continue;
      }
      if (element['types'].indexOf('country') > -1) {
        this.location.address_country = element['long_name'];
        continue;
      }
      if (element['types'].indexOf('postal_code') > -1) {
        this.location.address_zip = element['long_name'];
        continue;
      }
    }
  }

  geocoder:any;
  public location:Location = {
    lat: 51.678418,
    lng: 7.809007,
    marker: {
      lat: 51.678418,
      lng: 7.809007,
      draggable: true
    },
    zoom: 5
  };
  updateOnMap() {
    let full_address:string = this.location.address_level_1 || ""
    if (this.location.address_level_2) full_address = full_address + " " + this.location.address_level_2
    if (this.location.address_state) full_address = full_address + " " + this.location.address_state
    if (this.location.address_country) full_address = full_address + " " + this.location.address_country

    this.findLocation(full_address) ;
  }
  findLocation(address) {
    if (!this.geocoder) this.geocoder = new google.maps.Geocoder()
    this.geocoder.geocode({
      'address': address
    }, (results, status) => {
      console.log(results);
      if (status == google.maps.GeocoderStatus.OK) {
        for (var i = 0; i < results[0].address_components.length; i++) {
          let types = results[0].address_components[i].types
 
          if (types.indexOf('locality') != -1) {
            this.location.address_level_2 = results[0].address_components[i].long_name
          }
          if (types.indexOf('country') != -1) {
            this.location.address_country = results[0].address_components[i].long_name
          }
          if (types.indexOf('postal_code') != -1) {
            this.location.address_zip = results[0].address_components[i].long_name
          }
          if (types.indexOf('administrative_area_level_1') != -1) {
            this.location.address_state = results[0].address_components[i].long_name
          }
        }
        if (results[0].geometry.location) {
          this.location.lat = results[0].geometry.location.lat();
          this.location.lng = results[0].geometry.location.lng();
          this.location.marker.lat = results[0].geometry.location.lat();
          this.location.marker.lng = results[0].geometry.location.lng();
          this.location.marker.draggable = true;
          this.location.viewport = results[0].geometry.viewport;
        }
        
        this.map.triggerResize()
      } else {
        alert("Sorry, this search produced no results.");
      }
    })
  }

  @ViewChild(AgmMap) map: AgmMap;
  constructor(public mapsApiLoader: MapsAPILoader,public http: Http,
    private zone: NgZone,
    private wrapper: GoogleMapsAPIWrapper) {
      this.mapsApiLoader = mapsApiLoader;
      this.zone = zone;
      this.wrapper = wrapper;
      this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
      });
     }




  modelfield : any = {};
  obj = [];



  private urlget: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/mylocations'
  private urlpost: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/savelocation'

  // location: any = {};

  countryArray:string[];

  ngOnInit(): void {
    this.location.marker.draggable = true;
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
  


//   showPage(page: string) {
//     this.currentPage = page;
// }
//model
closeResult: string;
}