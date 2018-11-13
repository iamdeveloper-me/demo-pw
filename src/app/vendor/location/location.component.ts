import { Component, OnInit ,Input , ViewChild, NgZone, ElementRef,} from '@angular/core';
import { Http,Headers } from '@angular/http';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import swal from 'sweetalert2';

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
  regularForm: FormGroup;

  ao:string;
  bo:string;
  co:string;

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
    if (!this.geocoder) this.geocoder = new google.maps.autocomplete.Geocoder()
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
          alert("rfr");
          this.location.lat = results[0].geometry.location.lat();
          this.location.lng = results[0].geometry.location.lng();
          this.location.marker.lat = results[0].geometry.location.lat();
          this.location.marker.lng = results[0].geometry.location.lng();
          this.location.marker.draggable = true;
          this.location.viewport = results[0].geometry.viewport;
          console.log( this.location.viewport );
        }
        
        this.map.triggerResize()
      } else {
        alert("Sorry, this search produced no results.");
      }
    })



  }

  Find_current_location(){
    alert("dsfcds");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
       (position) => {
         console.log(position);
         this.location.lat =  position.coords.longitude;
         this.location.lng =  position.coords.latitude;
         this.location.marker.lat =  position.coords.longitude;
         this.location.marker.lng =  position.coords.latitude;
         this.location.marker.draggable = true;
         console.log(  this.location.lat);
         console.log( this.location.lng);
        
       }, (error) => {
        
         console.log('Geolocation error: '+ error);
       });
     } else {
       console.log('Geolocation not supported in this browser');
      
     }
  }

  @ViewChild(AgmMap) map: AgmMap;
  @ViewChild('gmapInput') gmapInput : ElementRef;
  
  constructor(public toastr: ToastrService,public mapsApiLoader: MapsAPILoader,public http: Http,private zone: NgZone,private wrapper: GoogleMapsAPIWrapper)
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
          this.location_Array = data.json() ;
      
          console.log(  this.location_Array  );
          })

   
          let country = this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/LookupMaster/countries");
          country.subscribe(data => { 
            this.countryArray = data.json();
            console.log( this.countryArray);  
            this.arra = this.countryArray
          })
          $.getScript('./assets/js/vertical-timeline.js');

         
       
       
  }

       

      keyPress(event: any) {
        const pattern = /[0-9]/;

        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
          event.preventDefault();
          this.toastr.error('Only Numbers');
        }
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
     
       mapDailog : boolean = false;
       OpenmapDailog(){
        this.mapDailog = true;
        setTimeout(()=>{  
                
             
          //let input = this.gmapInput;
          let autocomplete = new google.maps.places.Autocomplete(
            <HTMLInputElement>document.getElementById("gmapInput"), {
            types: ['gmapInput']
        });

        

          //var autocomplete = new google.maps.places.Autocomplete(input.nativeElement);

        // Set initial restrict to the greater list of countries.
        autocomplete.setComponentRestrictions(
            {'country': ['us', 'pr', 'vi', 'gu', 'mp']});

        // Specify only the data fields that are needed.
        autocomplete.setFields(
            ['address_components', 'geometry', 'icon', 'name']);


        google.maps.event.addListener(autocomplete, 'place_changed', () => { // arrow function
          var place = autocomplete.getPlace();
          console.log('place',place)
          if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
          }

          var address = '';
          if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
          }
        });
      }, 3000);  
        
       }

       update__googlemap(e,a)
      {
        console.log(e.value)
        console.log(a);
        this.week_dailog = false ;
        let headers = new Headers();
        var authToken = localStorage.getItem('userToken');
        headers.append('Accept', 'application/json')
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization",'Bearer '+authToken);
            this.http.post(this.urlpost,a,{headers:headers}).subscribe( (data)=> { console.log(data)
              this.toastr.success(data.statusText);},(error)=>{ console.log(error); 
                this.toastr.success(error.statusText);}); 

                

      }
      update__week(e){
        console.log(e);
        console.log(e);
   
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
      update_phone(f,g){
        console.log(f.value)
        console.log(g)
        this.phone_dailog = false;
        let headers = new Headers();
        var authToken = localStorage.getItem('userToken');
        headers.append('Accept', 'application/json')
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization",'Bearer '+authToken);
          console.log(this.Location_columns.length);

          this.Location_columns.push(f.value);
          
          console.log(this.Location_columns);
          if(this.Location_columns.length > 0){ 
            
                           


                                this.http.post(this.post_phone_number,this.Location_columns,{headers:headers}).subscribe( (data)=> { console.log(data)
                                    this.toastr.success(data.statusText);
                                    this.phone_dailog = false;
                                  },(error)=>{ console.log(error);
                                    this.toastr.error(error._body);});
            
            }
      }
      isActive(b,e){ 
             console.log(b);
           
             console.log(e);
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
        console.log(e.value);
        
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
          
          console.log(this.arra)
          this.arra.forEach((ele,pos)=>{
            if(pos  == e.value.country_id){
              this.ao = ele.countryId;
              ele['districts'].forEach((elem,pp) => {
                  if(pp == e.value.dist_id){
                    this.bo = elem.districtId;
                    elem['suburb'].forEach((eleme,oo) => {
                      if(oo == e.value.sub_id){
                       this.co = eleme.suburbId;
                      }
                    });
                  }
              });
            }
          })
          console.log('main'+this.ao,this.bo,this.co)
       const datapanel =  {
        vendorLocationId: e.value.vendorLocationId,
        countryId: this.ao ,
        districtId: this.bo,
        suburbId:  this.co ,
        vendorId: e.value.vendorid ,
        postalCode: e.value.Postal_code          ,
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
      console.log(datapanel);
          let headers = new Headers();
          var authToken = localStorage.getItem('userToken');
          headers.append('Accept', 'application/json')
          headers.append('Content-Type', 'application/json');
          headers.append("Authorization",'Bearer '+authToken);
          // var vendorID = localStorage.getItem('vendorid');
                  this.http.post(this.urlpost,datapanel,{headers:headers}).subscribe(    (responce)=>{ console.log(responce);
                                this.toastr.success(responce.statusText);
                               if(responce.status == 200)
                                {
                                  
                                  this.photo_ved_dailog = false;
                                 
                                }   
      
              
                ///console.log("saved");
           
            },(error)=> { console.log(error) ;
              this.toastr.error(error._body );
              this.toastr.error(error.json().text() );
                       });

              

                     
      }    
      closeResult: string;
      country(event): void {  
      const newVal = event.target.value;
     // console.log(newVal)
      this.c_id = this.arra[newVal].countryId
      this.country_name =this.arra[newVal].countryName
      this.district = this.arra[newVal].districts
     console.log(  this.country_name)
      }
      districtA(event): void {  
      const newVal = event.target.value;
      this.d_id = this.district[newVal].districtId
      this.district_name =this.district[newVal].name
      this.suburb = this.district[newVal].suburb
      console.log(  this.district_name)
      }
      subr(event): void {  
      const newVal = event.target.value;
      this.s_id = this.suburb[newVal].suburbId
      this.subr_name =this.suburb[newVal].name
      console.log(this.subr_name )
      }
      closeModel(){ 
      this.photo_ved_dailog = false;
      this.phone_dailog = false;
      this.create_location_dailog = false;
      this.week_dailog = false ;
      } 
      addNewColumn(f) {
      var newItemNo = this.columns.length + 1;
    
      console.log(f.value)
      //  alert(newItemNo);
       this.columns.push({
        locationPhoneId: '0',
        vendorLocationId:'',
        phoneType: '',
        phoneNumber: '',
        isPrimary:'',
       
     });
    
    
      }


      removeColumn(index) {
       
                this.phone_dailog = false;
                let con = confirm('Are you sure you want to delete this?')
                if (con) {
                        if (this.columns.length >= 2) {
                this.columns.splice(index, 1);
                }
                console.log(index);
                let headers = new Headers();
                var authToken = localStorage.getItem('userToken');
                headers.append('Accept', 'application/json')
                headers.append('Content-Type', 'application/json');
                headers.append("Authorization",'Bearer '+authToken);
                this.http.post(this.remove_phone_number,index,{headers:headers}).subscribe( (data)=> { console.log(data)
                  this.toastr.success(data.statusText);
                  this.phone_dailog = false;
                }
                ,      (error)=>{ console.log(error);
                        this.toastr.error(error._body);
                });

      }

    
    
      }
    
}