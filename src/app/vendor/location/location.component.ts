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
  Country;
  mobile;
  postalCode;
  city;
  Phone;
  Address;
 data;
 m;
  circleRadius:number = 5000;
  milesToRadius(value) {
    this.circleRadius = value / 0.00062137;
 }

 circleRadiusInMiles() {
   return this.circleRadius * 0.00062137;
 }
  
  markerDragEnd(m: any) {
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
    console.log(address);
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
     enable = true;
  modelfield : any = {};
  address : any = {};
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
    // console.log( data.countryId );

})
   

    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
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
  openModel(b)
  {
    this.modelfield  = b;
   // this.address  = c;
  }
  upForm(info)
  {

    console.log( this.modelfield );
    console.log(info);

    var infovendorLocationId = info.value.vendorLocationId;
    var infoaddress =this.modelfield.address;
    var infocity = this.modelfield.city;
    var infomobile = info.value.mobile;
    var infovendorId = info.value.vendorId;
    var infocountryName =this.modelfield.country;
    var infocountryId = info.value.countryId;
    var infopostalCode = this.modelfield.postalCode;
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
   
cerate(e){
console.log(e);

var address = e.value.Address ;
var country = e.value.Country ;
var Phone = e.value.Phone ;
var city = e.value.city ;
var postalCode = e.value.postalCode ;

        let headers = new Headers();
        var authToken = localStorage.getItem('userToken');
        var countryId = localStorage.getItem('countryid');
        console.log( countryId);
        headers.append('Accept', 'application/json')
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization",'Bearer '+authToken);


        this.http.post(this.urlpost,{
          vendorLocationId: 0,
          title: 'info',
          countryId: countryId,
          vendorId: 66,
          country: {countryId: countryId, countryName: country},
          city:  city,
          postalCode:  postalCode,
          address:  address,
          phone: Phone,
          mobile:      'info' ,
          sundayOpen:     'info',
          sundayClose:    'info',
          mondayOpen:     'info',
          mondayClose:    'info',
          tuesdayOpen:    'info',
          tuesdayClose:   'info',
          wednesdayOpen:  'info',
          wednesdayClose: 'info',
          thursdayOpen:   'info',
          thursdayClose:  'info',
          fridayOpen:     'info',
          fridayClose:    'info',
          saturdayOpen:   'info',
          saturdayClose:  'info',
          isFridayOpen:   true,
          isMondayOpen:   true,
          isPrimary:      true,
          isSaturdayOpen: true,
          isSundayOpen:   true,
          isThursdayOpen: true,
          isTuesdayOpen:  true,
          isWednesdayOpen:true,
         
    
        },{headers:headers}).subscribe( (data)=> { console.log(data)}
    ,      (responce)=>{ console.log(responce); });


}


   locationForm(info)
   {
 
     console.log(this.modelfield );
     console.log(info);
 
    
 
 var addraddresslineone = info.address_level_1;
 var city = info.address_state;
 var Country = info.address_country;
 var Postalcode = info.address_zip ;
 var lat = info.lat;
 var lng = info.lng;
 var infovendorLocationId = this.modelfield.vendorLocationId;
 var infomobile = this.modelfield.mobile;
 var infovendorId = this.modelfield.vendorId;
 var infocountryId = this.modelfield.countryId;
 var infophone = this.modelfield.phone;
 var infotitle = this.modelfield.title;
 console.log(infotitle);
 var infosundayOpen = this.modelfield.sundayOpen;
 var infosundayClose =  this.modelfield.sundayClose;
 var infomondayOpen =  this.modelfield.mondayOpen;
 var infomondayClose =  this.modelfield.mondayClose;
 var infotuesdayOpen =  this.modelfield.tuesdayOpen;
 var infotuesdayClose =  this.modelfield.tuesdayClose;
 var infowednesdayOpen = this.modelfield.wednesdayOpen;
 var infowednesdayClose = this.modelfield.wednesdayClose;
 var infothursdayOpen =  this.modelfield.thursdayOpen;
 var infothursdayClose = this.modelfield.thursdayClose;
 var infofridayOpen = this.modelfield.fridayOpen;
 var infofridayClose = this.modelfield.fridayClose;
 var infosaturdayOpen = this.modelfield.saturdayOpen;
 var infosaturdayClose = this.modelfield.saturdayClose;
 var infoisFridayOpen  =this.modelfield.isFridayOpen;
 var infoisMondayOpen =  this.modelfield.isMondayOpen;
 var infoisPrimary = this.modelfield.isPrimary;
 var infoisSaturdayOpen = this.modelfield.isSaturdayOpen;
 var infoisSundayOpen = this.modelfield.isSundayOpen ;
 var infoisThursdayOpen = this.modelfield.isThursdayOpen;
 var infoisTuesdayOpen = this.modelfield.isTuesdayOpen;
 var infoisWednesdayOpen = this.modelfield.isWednesdayOpen;
 
 
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
       lat: lat,
       long: lng,
       country: {countryId: infocountryId,countryName: Country},
       city:  city,
       postalCode:  Postalcode,
       address:  addraddresslineone,
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
  
closeResult: string;
}