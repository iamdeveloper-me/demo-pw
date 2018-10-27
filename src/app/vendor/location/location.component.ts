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
  country_id:any;
  public c_id:any;
  public country_name:any;
  public d_id:any;
  public district_name:any;
  public s_id:any;
  public subr_name:any;
  primery = true;
  photo_ved_dailog = false;
  create_location_dailog = false;
  phone_dailog = false;
  week_dailog =false;
  city_id:any;
  sub_id:any;
  mobile;
  postalCode;
  city;
  Phone;
  Address;
  data;
  dist_id;
  m;
  enable = true;
  modelfield:any = {mobile:""};
  address_modelfield:any = {mobile:""};
  address : any = {};
  obj = [];
 private urlget: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/mylocations'
 private urlpost: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/savelocation'
 public arra = new Array();public district = new Array();public suburb = new Array();
 // location: any = {};

 countryArray:string[];
 location_Array:string[];
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
  constructor(public mapsApiLoader: MapsAPILoader,public http: Http,private zone: NgZone,private wrapper: GoogleMapsAPIWrapper)
  {
      this.mapsApiLoader = mapsApiLoader;
      this.zone = zone;
      this.wrapper = wrapper;
      this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
      });
    }
    
  ngOnInit(): void {


          this.location.marker.draggable = true;
          let headers = new Headers();
          var authToken = localStorage.getItem('userToken');
          headers.append('Accept', 'application/json')
          headers.append('Content-Type', 'application/json');
          headers.append("Authorization",'Bearer '+authToken);
                            
          this.http.get(this.urlget,{headers:headers}).subscribe((data) => { 
          this.location_Array = data.json() as string[]
          console.log( data.json() as string[] );
          })

   
          let country = this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/LookupMaster/countries");
          country.subscribe(data => { 
            this.countryArray = data.json();  
            this.arra = this.countryArray
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
      
        this.address_modelfield  = b;
        console.log(this.address_modelfield);
       }
       openphone(b){
        this.phone_dailog = true
        this.modelfield  = b;
        console.log(this.modelfield);
       }
       openweek(b){
         
        this.modelfield  = b;
        console.log(this.modelfield);
        this.week_dailog =true;
       }
    update_location_week_googlemap(e)
  {
    this.phone_dailog = false;
   // console.log( this.modelfield );
   console.log(e);
   
    this.week_dailog = false ;
        let headers = new Headers();
        var authToken = localStorage.getItem('userToken');
        headers.append('Accept', 'application/json')
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization",'Bearer '+authToken);
      


        this.http.post(this.urlpost,{
          vendorLocationId: e.value.vendorLocationId,
          title: e.value.title,
          countryId: e.value.country.countryId  ,
          vendorId: e.value.vendorId,
          country: e.value.country,
          city: e.value.city,
          postalCode: e.value.postalCode          ,
          address: e.value.address,
          lat: e.value.lat,
          long: e.value.long,
          phone: e.value.phone ,
          mobile: e.value.mobile,
          isActive: e.value.isActive,
          sundayOpen: e.value.sundayOpen,
          sundayClose: e.value.sundayClose,
          isSundayOpen: e.value.isSundayOpen,
          mondayOpen: e.value.mondayOpen,
          mondayClose: e.value.mondayClose,
          isMondayOpen: e.value.isMondayOpen,
          tuesdayOpen: e.value.tuesdayOpen,
          tuesdayClose: e.value.tuesdayClose,
          isTuesdayOpen: e.value.isTuesdayOpen,
          wednesdayOpen: e.value.wednesdayOpen,
          wednesdayClose: e.value.wednesdayClose,
          isWednesdayOpen: e.value.isWednesdayOpen,
          thursdayOpen: e.value.thursdayOpen,
          thursdayClose: e.value.thursdayClose,
          isThursdayOpen: e.value.isThursdayOpen,
          fridayOpen: e.value.fridayOpen,
          fridayClose: e.value.fridayClose,
          isFridayOpen: e.value.isFridayOpen,
          saturdayOpen: e.value.saturdayOpen,
          saturdayClose: e.value.saturdayClose,
          isSaturdayOpen: e.value.isSaturdayOpen
        },{headers:headers}).subscribe( (data)=> { console.log(data)
        }
    ,      (error)=>{ console.log(error);
     });
       }
       isActive(b,e){ 
             console.log(b);
             console.log(e);
             let headers = new Headers();
             var authToken = localStorage.getItem('userToken');
             headers.append('Accept', 'application/json')
             headers.append('Content-Type', 'application/json');
             headers.append("Authorization",'Bearer '+authToken);
             var vendorID = localStorage.getItem('vendorid');
          

            
                     this.http.post(this.urlpost,e,{headers:headers}).subscribe( (data)=> { console.log(data)}
               ,(error)=>{ console.log(error);   });
      }
    cerate(e){
        console.log(e);
        
        this.create_location_dailog = false;
   
        let headers = new Headers();
        var authToken = localStorage.getItem('userToken');
        var vendorID = localStorage.getItem('vendorid');

        headers.append('Accept', 'application/json')
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization",'Bearer '+authToken);

      
        this.http.post(this.urlpost,{
          vendorLocationId: 0,
          title: "string",
          countryId: e.value.country_id  ,
          districtId: e.value.dist_id  ,
          suburbId: e.value.sub_id ,
          vendorId: vendorID,
          country: {
            countryId: e.value.country_id,
            countryName: this.country_name,
            districts: [
              {
                districtId: e.value.dist_id ,
                countryId:e.value.country_id,
                name: this.district_name,
                suburb: [
                  {
                    suburbId: e.value.sub_id,
                    districtId: e.value.dist_id ,
                    name: this.subr_name
                  }
                ]
              }
            ]
          },
          city: "string",
          postalCode: e.value.postalCode          ,
          address: e.value.Address,
          lat: 0,
          long: 0,
          addedOn: "2018-10-26T07:08:26.542Z",
          phone: e.value.phone ,
          mobile: "string",
          isActive: true,
          sundayOpen: "string",
          sundayClose: "string",
          isSundayOpen: true,
          mondayOpen: "string",
          mondayClose: "string",
          isMondayOpen: true,
          tuesdayOpen: "string",
          tuesdayClose: "string",
          isTuesdayOpen: true,
          wednesdayOpen: "string",
          wednesdayClose: "string",
          isWednesdayOpen: true,
          thursdayOpen: "string",
          thursdayClose: "string",
          isThursdayOpen: true,
          fridayOpen: "string",
          fridayClose: "string",
          isFridayOpen: true,
          saturdayOpen: "string",
          saturdayClose: "string",
          isSaturdayOpen: true
        }
        ,{headers:headers}).subscribe( (data)=> {console.log(data)
        },(err)=>{ console.log(err); } );

   }
   Update_Address(e)
   {

          //console.log(this.modelfield );
          console.log(e);
      
          let headers = new Headers();
          var authToken = localStorage.getItem('userToken');
          headers.append('Accept', 'application/json')
          headers.append('Content-Type', 'application/json');
          headers.append("Authorization",'Bearer '+authToken);
          var vendorID = localStorage.getItem('vendorid');
                  this.http.post(this.urlpost,{
                    vendorLocationId: e.value.vendorLocationId,
                    title: e.value.title,
                    countryId: e.value.Country.countryId  ,
                    districtId: e.value.Country.districts[0].districtId  ,
                    suburbId:  e.value.Country.districts[0].suburb[0].suburbId  ,
                    vendorId: vendorID,
                    country: {
                      countryId:  e.value.Country.countryId ,
                      countryName:  e.value.Country.countryName ,
                      districts: [
                        {
                          districtId: e.value.Country.districts[0].districtId ,
                          countryId:  e.value.Country.countryId ,
                          name: e.value.Country.districts[0].name,
                          suburb: [
                            {
                              suburbId: e.value.Country.districts[0].suburb[0].suburbId ,
                              districtId: e.value.Country.districts[0].districtId ,
                              name: e.value.Country.districts[0].suburb[0].name
                            }
                          ]
                        }
                      ]
                    },
                    city: e.value.city,
                    postalCode: e.value.Postal_code          ,
                    address: e.value.Address,
                    lat: e.value.lat,
                    long: e.value.long,
                    isActive: e.value.isActive,
                    phone: e.value.phone ,
                    mobile: e.value.mobile,
                    sundayOpen: e.value.sundayOpen,
                    sundayClose: e.value.sundayClose,
                    isSundayOpen: e.value.isSundayOpen,
                    mondayOpen: e.value.mondayOpen,
                    mondayClose: e.value.mondayClose,
                    isMondayOpen: e.value.isMondayOpen,
                    tuesdayOpen: e.value.tuesdayOpen,
                    tuesdayClose: e.value.tuesdayClose,
                    isTuesdayOpen: e.value.isTuesdayOpen,
                    wednesdayOpen: e.value.wednesdayOpen,
                    wednesdayClose: e.value.wednesdayClose,
                    isWednesdayOpen: e.value.isWednesdayOpen,
                    thursdayOpen: e.value.thursdayOpen,
                    thursdayClose: e.value.thursdayClose,
                    isThursdayOpen: e.value.isThursdayOpen,
                    fridayOpen: e.value.fridayOpen,
                    fridayClose: e.value.fridayClose,
                    isFridayOpen: e.value.isFridayOpen,
                    saturdayOpen: e.value.saturdayOpen,
                    saturdayClose: e.value.saturdayClose,
                    isSaturdayOpen: e.value.isSaturdayOpen
                  
                  },{headers:headers}).subscribe( (data)=> { console.log(data)
                  if(data.status == 200)
                  {
                    this.photo_ved_dailog = false;
                    this.phone_dailog = false;
                    //console.log("saved");
                  }}
            ,      (responce)=>{ console.log(responce);

              if(responce.status == 200)
              {
                this.photo_ved_dailog = false;
                this.phone_dailog = false;
                ///console.log("saved");
              }
            });

      }
    abc(event){
    //  console.log(event)
      }
      
    closeResult: string;
    country(event): void {  
      const newVal = event.target.value;
     // console.log(newVal)
      this.c_id = this.arra[newVal].countryId
      this.country_name =this.arra[newVal].countryName
      this.district = this.arra[newVal].districts
     // console.log(this.district)
    }
    districtA(event): void {  
      const newVal = event.target.value;
      this.d_id = this.district[newVal].districtId
      this.district_name =this.district[newVal].name
      this.suburb = this.district[newVal].suburb
    }
    subr(event): void {  
      const newVal = event.target.value;
      this.s_id = this.suburb[newVal].suburbId
      this.subr_name =this.suburb[newVal].name
     // console.log(newVal)
    }
    closeModel(){ 
      this.photo_ved_dailog = false;
      this.phone_dailog = false;
      this.create_location_dailog = false;
      this.week_dailog = false ;
    } 
}