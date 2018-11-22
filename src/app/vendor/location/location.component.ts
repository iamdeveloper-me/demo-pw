import { Component, OnInit ,Input , ViewChild, NgZone, ElementRef,} from '@angular/core';
import { Http,Headers } from '@angular/http';
//import { } from 'googlemaps';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup,FormArray,FormBuilder, Validators, NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import { apiService } from '../../shared/service/api.service';

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
  @ViewChild('f') floatingLabelForm: NgForm;
  @ViewChild('vform') validationForm: FormGroup;
  @ViewChild("search")  public searchElementRef: ElementRef;
  regularForm: FormGroup;

  ao:string;
  bo:string;
  co:string;
  arra_col =[];
  phone = []
  typePhone= []
  columns = [{
    locationPhoneId: '',
    phoneType: '',
    vendorLocationId:'',
    phoneNumber: '',
    isPrimary:'',
    
   }];
   Location_columns = [];
   locationPhoneId_tocreate = 0;
   isPrimary:boolean = true;
   col = [];
   current_lat;
   current_lng;
   first = true;
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
  locationPhoneId=0;
  address_modelfield:any = 
  { vendorLocationId: "", 
    title: "", 
    countryId: "", 
    districtId: "", 
    suburbId: "", 
    vendorId: "",
     country: { countryId: "", 
                countryName: "", 
              }, 
    districts:{districtId: "",
               name:""},
      suburb:{ name :  "",
              suburbId: ""},

    city: "", 
    postalCode: "", 
    address: "  ", 
    lat: "", 
    long: "", 
    addedOn: "", 
    phone: "", 
    mobile: "", 
    isPrimary: false, 
    isActive: false, 
    sundayOpen: null, 
    sundayClose: null, 
    isSundayOpen: false, 
    mondayOpen: null, 
    mondayClose: null, 
    isMondayOpen: false,
    tuesdayOpen: null, 
    tuesdayClose: null, 
    isTuesdayOpen: true, 
    wednesdayOpen: "", 
    wednesdayClose: "", 
    isWednesdayOpen: true, 
    thursdayOpen: null, 
    thursdayClose: null, 
    isThursdayOpen: false, 
    fridayOpen: null, 
    fridayClose: null, 
    isFridayOpen: false, 
    saturdayOpen: "",
    saturdayClose: "", 
    isSaturdayOpen: true, 
    locationPhones: [] };
    
  address : any = '';
  obj = [];
  k;
  l;
  zoom:any;
  create_phone = [];
  update_phone1 = [];
  formPhone : any;
  phoneData : any;
  mapDailog : boolean = false;
 private urlget: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/mylocations'
 private post_phone_number: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/addupdatephones'
 private remove_phone_number: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/deletelocationphone'
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
    console.log(m);
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
    zoom: 25
  };

  Find_current_location(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
       (position) => {
      let geocoder = new google.maps.Geocoder();
      let latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let request = { latLng: latlng };
      geocoder.geocode(request, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          let result = results[0];
          let rsltAdrComponent = result.address_components;
          let resultLength = rsltAdrComponent.length;
          if (result != null) {
             console.log('xxxxxxxxxxxxxxxxx',position,results);
            this.mapDialogObj.mapAddress = results[0].formatted_address;
            this.address = results[0].formatted_address;
            this.mapDialogObj.lat = position.coords.latitude
            this.mapDialogObj.lng = position.coords.longitude;
          } else {
            alert('No address available!');
          }
        }
      });
        
                
       }, (error) => {
        
         console.log('Geolocation error: '+ error);
       });
     } else {
       console.log('Geolocation not supported in this browser');
      
     }
  }

  @ViewChild(AgmMap) map: AgmMap;
  @ViewChild('gmapInput') gmapInput : ElementRef;
  
  constructor(public toastr: ToastrService,
    public mapsApiLoader: MapsAPILoader,
    public http: Http,private zone: NgZone,
    private wrapper: GoogleMapsAPIWrapper,
    private _fb: FormBuilder,
    private apiService : apiService,
  )
  {
      this.mapsApiLoader = mapsApiLoader;
      this.zone = zone;
      this.wrapper = wrapper;
      this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
      });
    }
    
      ngOnInit(): void {
        $.getScript('./assets/js/vendorsidebar.js');
            this.formPhone = this._fb.group({
              phoneArry: new FormArray([
                
            ])
            });
            this.mapsApiLoader.load().then(() => {
              this.geocoder = new google.maps.Geocoder();
              let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ["address"]
              });
              autocomplete.addListener("place_changed", () => {
            
                  this.zone.run(() => {
                    let place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                      return;
                    }
                    this.mapDialogObj.mapAddress = place.formatted_address;
                    this.address = place.formatted_address;
                    this.mapDialogObj.lat = place.geometry.location.lat();
                    this.mapDialogObj.lng = place.geometry.location.lng();
                     this.zoom = 25;
                  });
                  
                });
              });
                  this.location.marker.draggable = true;
                  let headers = new Headers();
                  var authToken = localStorage.getItem('userToken');
                  headers.append('Accept', 'application/json')
                  headers.append('Content-Type', 'application/json');
                  headers.append("Authorization",'Bearer '+authToken);
                                    
                  this.http.get(this.urlget,{headers:headers}).subscribe((data) => { 
                  this.location_Array = data.json() ;
                  })
                  this.loadCountries();
          }
      keyPress(event: any) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
          event.preventDefault();
          this.toastr.error('Only Numbers');
        }
      }
       openModel(b) { 
            this.loadCountries();
            this.district =  this.arra.filter(c=>c.countryId == b.countryId)[0].districts;
            this.dist_id=b.districtId;
            this.suburb= this.district[0].suburb;
            this.sub_id = b.suburbId;
            this.address_modelfield  = b;
         
       }
      openphone(b){
                      this.phone_dailog = true
                      this.phoneData = b;
                      this.modelfield  = Object.assign({}, b);
                      this.formPhone = this._fb.group({phoneArry: new FormArray([])});
                      let control = <FormArray>this.formPhone.controls['phoneArry'];
                      if(b.locationPhones.length){
                        for(let i = 0; i<b.locationPhones.length;i++){
                          control.push(this._fb.group({
                              // list all your form controls here, which belongs to your form array
                              phoneType: [b.locationPhones[i].phoneType],
                              number: [b.locationPhones[i].phoneNumber],
                              isprime: [b.locationPhones[i].isPrimary],
                              vendorLocationId :[b.locationPhones[i].vendorLocationId],
                              locationPhoneId: [b.locationPhones[i].locationPhoneId]
                          }));
                          }
                      }else{
                        this.addNewColumn();
                      }
      }

      addNewColumn() {
                        let control = <FormArray>this.formPhone.controls['phoneArry'];
                        control.push(this._fb.group({
                            phoneType: ['Phone'],
                            number: [],
                            isprime: [false],
                            vendorLocationId :[],
                            locationPhoneId: 0
                        }));
                        this.arra_col = control.value;
      }

  update_phone(){
         let reqObj = [];
        for(let i=0;i<this.formPhone.value.phoneArry.length;i++){
         let obj = {
              "locationPhoneId": this.formPhone.value.phoneArry[i].locationPhoneId,
              "vendorLocationId": this.formPhone.value.phoneArry[i].vendorLocationId,
              "phoneType": this.formPhone.value.phoneArry[i].phoneType,
              "phoneNumber":this.formPhone.value.phoneArry[i].number,
              "isPrimary": this.formPhone.value.phoneArry[i].isprime
            }

            reqObj.push(obj)
        }
        if(reqObj.length > 0){ 
            for (var item of  reqObj ) {
               if(item.locationPhoneId == 0){
                        this.create_phone.push(item);
                }else{
                  this.update_phone1.push(item);                      
                }
             }    
        }
          this.apiService.postData(this.post_phone_number,reqObj).subscribe(data =>{
            this.toastr.success(data.statusText);
            this.phone_dailog = false;
            this.create_phone = [];
            this.phoneData.locationPhones = reqObj
            },
            error => {
              this.toastr.error(error._body);
              }
          )    
      }

      removePhone(phoneObj,index) {
       
                if(phoneObj.value.locationPhoneId){
                      let con = confirm('Are you sure you want to delete this?')
                      if (con) {

                                      let obj = {
                                        "locationPhoneId": phoneObj.value.locationPhoneId,
                                        "vendorLocationId": phoneObj.value.vendorLocationId,
                                        "phoneType": phoneObj.value.phoneType,
                                        "phoneNumber":phoneObj.value.number,
                                        "isPrimary": phoneObj.value.isprime
                                      }
                                      let headers = new Headers();
                                      var authToken = localStorage.getItem('userToken');
                                      headers.append('Accept', 'application/json')
                                      headers.append('Content-Type', 'application/json');
                                      headers.append("Authorization",'Bearer '+authToken);
                                      this.http.post(this.remove_phone_number,obj,{headers:headers}).subscribe( 
                                        (data)=> { 
                                                    this.toastr.success(data.statusText);
                                                    let control = <FormArray>this.formPhone.controls['phoneArry'];
                                                    control.removeAt(index);
                                                  },(error)=>{ console.log(error);
                                                               this.toastr.error(error._body);
                      });
                             }}
                             else{
                                     let control = <FormArray>this.formPhone.controls['phoneArry'];
                                     control.removeAt(index);
                                  }
  }
       openweek(b){
                    this.modelfield  = b;
                    this.week_dailog =true;
                  }
     
       mapDialogObj : any;
       OpenmapDailog(locationObj){
            this.mapDialogObj = locationObj
            this.address = this.mapDialogObj.mapAddress
            this.mapDailog = true;
        }
    findLocation(address) {
      if (!this.geocoder) this.geocoder = new google.maps.autocomplete.Geocoder()
      this.geocoder.geocode({
        'address': address
      }, (results, status) => {
         
      this.address = results[0].formatted_address      ;
      if (status == google.maps.GeocoderStatus.OK) {  
          this.k = results[0].geometry.location.lat();
          this.l = results[0].geometry.location.lng();
        for (var i = 0; i < results[0].address_components.length; i++) {
         
          let types = results[0].address_components[i].types
          if (types.indexOf('locality') != -1) {
            this.location.address_level_2 = results[0].address_components[i].long_name
          }
          if (types.indexOf('country') != -1) {
            this.location.address_country = results[0].address_components[i].long_name
          }
          if (types.indexOf('postal_code') != -1) {
            this.location.address_zip = results[0].address_components[i].long_name;
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
          console.log( results[0].geometry.location);
        }
        
        this.map.triggerResize()
      } else {
        alert("Sorry, this search produced no results.");
      }
    })
  }

       update__googlemap(e,a)
      { 
          const loc_add = {
                              mapAddress: this.address,
                              vendorId:a.vendorId,
                              vendorLocationId:a.vendorLocationId,
                              postalCode: a.postalCode,
                             
                              countryId: a.countryId,
                              districtId: a.districtId,
                              suburbId:  a.suburbId ,
                            
                              address: a.Address,
                              lat:  this.mapDialogObj.lat,
                              long: this.mapDialogObj.lng,
                              isActive: a.isActive,
                              locationPhones:a.locationPhones,
                              phone: a.phone ,
                              mobile:  a.mobile,
                              sundayOpen:  a.sundayOpen,
                              sundayClose:  a.sundayClose,
                              isSundayOpen: a.isSundayOpen,

                              mondayOpen:  a.mondayOpen,
                              mondayClose:  a.mondayClose,
                              isMondayOpen:  a.isMondayOpen,

                              tuesdayOpen:  a.tuesdayOpen,
                              tuesdayClose:  a.tuesdayClose,
                              isTuesdayOpen: a.isTuesdayOpen,

                              wednesdayOpen:  a.wednesdayOpen,
                              wednesdayClose:  a.wednesdayClose,
                              isWednesdayOpen:  a.isWednesdayOpen,

                              thursdayOpen:  a.thursdayOpen,
                              thursdayClose: a.thursdayClose,
                              isThursdayOpen:  a.isThursdayOpen,

                              fridayOpen:  a.fridayOpen,
                              fridayClose:  a.fridayClose,
                              isFridayOpen:  a.isFridayOpen,

                              saturdayOpen: a.saturdayOpen,
                              saturdayClose:  a.saturdayClose,
                              isSaturdayOpen:  a.isSaturdayOpen
                            }
                          this.week_dailog = false ;
                          let headers = new Headers();
                          var authToken = localStorage.getItem('userToken');
                          headers.append('Accept', 'application/json')
                          headers.append('Content-Type', 'application/json');
                          headers.append("Authorization",'Bearer '+authToken);
                              this.http.post(this.urlpost,loc_add,{headers:headers}).subscribe( (data)=> { 
                                console.log(data);
                                this.mapDailog =false;
                                this.toastr.success(data.statusText);
                                this.http.get(this.urlget,{headers:headers}).subscribe((data) => { 
                                     this.location_Array = data.json() ;
                            })
                              },(error)=>{ console.log(error); 
                                  this.toastr.success(error.statusText);}); 
      }
      update__week(e){
        this.week_dailog = false ;
        let headers = new Headers();
        var authToken = localStorage.getItem('userToken');
        headers.append('Accept', 'application/json')
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization",'Bearer '+authToken);
            this.http.post(this.urlpost,{
              vendorLocationId: e.value.vendorLocationId,
              countryId: e.value.country.countryId  ,
              vendorId: e.value.vendorId,
              country: e.value.country,
              postalCode: e.value.postalCode  ,
              districtId: e.value.districtId,
              districts: {  districtId: e.value.districtId,
                            name:  e.value.districts.name },
                suburb : {
                                name : e.value.suburb.name,
                                suburbId:   e.value.suburb.suburbId
              }  ,
              suburbId:  e.value.suburbId ,        
              address: e.value.address,
              mapAddress: e.value.mapAddress,
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
              isSaturdayOpen: e.value.isSaturdayOpen,
              
              locationPhones: this.col
            },{headers:headers}).subscribe( (data)=> { console.log(data)
              this.toastr.success(data.statusText);},(error)=>{ console.log(error); 
                this.toastr.success(error.statusText);});              
      }
     
      isActive(b,e){ 
             let headers = new Headers();
             var authToken = localStorage.getItem('userToken');
             headers.append('Accept', 'application/json')
             headers.append('Content-Type', 'application/json');
             headers.append("Authorization",'Bearer '+authToken);
                     this.http.post(this.urlpost,e,{headers:headers}).subscribe( (data)=> { console.log(data);
                      if(b == false)
                      { this.toastr.info('Your location NOT Active');
                      
                      }else{this.toastr.success("Your location is Active")}}
               ,(error)=>{ console.log(error);   });
      }
      cerate(e){
        this.create_location_dailog = false;
        let headers = new Headers();
        var authToken = localStorage.getItem('userToken');
        var vendorID = localStorage.getItem('vendorid');
        headers.append('Accept', 'application/json')
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization",'Bearer '+authToken);

      
        this.http.post(this.urlpost,{
          vendorLocationId: 0,
          countryId: e.value.country_id  ,
          districtId: e.value.dist_id  ,
          suburbId: e.value.sub_id ,
          vendorId: vendorID,
          city: "",
          postalCode: e.value.postalCode          ,
          address: e.value.Address,
          lat: 0,
          long: 0,
          addedOn: "2018-11-04T15:49:35.234Z",
          phone: e.value.phone ,
          mobile: "",
          isActive: false,
          sundayOpen: "",
          sundayClose: "",
          isSundayOpen: false,
          mondayOpen: "",
          mondayClose: "",
          isMondayOpen: false,
          tuesdayOpen: "",
          tuesdayClose: "",
          isTuesdayOpen: false,
          wednesdayOpen: "",
          wednesdayClose: "",
          isWednesdayOpen: false,
          thursdayOpen: "",
          thursdayClose: "",
          isThursdayOpen: false,
          fridayOpen: "",
          fridayClose: "",
          isFridayOpen: false,
          saturdayOpen: "",
          saturdayClose: "",
          isSaturdayOpen: false,
         
        }
        ,{headers:headers}).subscribe( 
          (data)=> {console.log(data.json())
          this.toastr.success(data.json().message);
        },(err)=>{ console.log(err); 
          this.toastr.error(err._body );
         } );
      }
    



      Update_Address(e)
     {
          console.log(e.value.country_id,e.value.dist_id,e.value.sub_id);
            const datapanel =  {
                vendorLocationId: e.value.vendorLocationId,
                countryId: this.address_modelfield.countryId ,
                districtId: this.dist_id, 
                suburbId:  this.sub_id, 
                vendorId: e.value.vendorid ,
                postalCode: e.value.Postal_code,
                address: e.value.Address,
                lat: e.value.lat,
                long: e.value.long,
                isActive: e.value.isActive,
                mapAddress: e.value.mapAddress,
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
            }
          let headers = new Headers();
          var authToken = localStorage.getItem('userToken');
          headers.append('Accept', 'application/json')
          headers.append('Content-Type', 'application/json');
          headers.append("Authorization",'Bearer '+authToken);
                  this.http.post(this.urlpost,datapanel,{headers:headers}).subscribe(    (responce)=>{ console.log(responce);
                                this.toastr.success(responce.statusText);
                               if(responce.status == 200)
                                {
                                  this.photo_ved_dailog = false;
                                } 
                                  
            },(error)=> { console.log(error) ;
              this.toastr.error(error._body );
              this.toastr.error(error.json().text() );
                       });                
      }    
      closeResult: string;
     
      country(event): void {  
                  const newVal = event.target.value;
                 let country=this.arra.filter(c=>c.countryId == newVal)[0]; 
                 this.c_id= this.arra.filter(c=>c.countryId == newVal)[0].countryId;
                  this.address_modelfield.country_id=country.countryId;
                  this.country_name =country.countryName
                 this.district = country.districts
      }
      districtA(event): void {  
                const newVal = event.target.value;
                this.d_id = this.district[newVal].districtId
                this.district_name =this.district[newVal].name
                this.suburb = this.district[newVal].suburb
      }
      subr(event): void {  
            const newVal = event.target.value;
            let suburb= this.district.filter(s=>s.suburbId== newVal)[0];
                this.s_id = this.suburb[newVal].suburbId
            this.subr_name =this.suburb[newVal].name
      }
      closeModel(){ 
            this.photo_ved_dailog = false;
            this.phone_dailog = false;
            this.create_location_dailog = false;
            this.week_dailog = false ;
            this.mapDailog =false;
            this.ngOnInit();
      } 
      loadCountries(){
        let country = this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/LookupMaster/countries");
        country.subscribe(data => { 
          this.countryArray = data.json();
          console.log( this.countryArray);  
          this.arra = this.countryArray
        })
        $.getScript('./assets/js/vertical-timeline.js');
      }
      


      

    
    
      
     
}