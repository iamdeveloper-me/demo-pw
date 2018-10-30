import { Component, OnInit ,Input , ViewChild, NgZone,} from '@angular/core';
import { Http,Headers } from '@angular/http';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
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

  columns = [{
    phoneType: 'mobile',
    phoneNumber: '',
    
   }];
   col = [];
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
  address_modelfield:any = 
  { vendorLocationId: 9, 
    title: "string", 
    countryId: 1, 
    districtId: 0, 
    suburbId: 0, 
    vendorId: 23,
     country: { countryId: 1, 
                countryName: "MAURITIUS", 
                districts: [ {
                          districtId: 2, 
                          countryId: 1, 
                          name: "Grand Port", 
                          suburb: [ { 
                            suburbId: 70, 
                            districtId: 2, 
                            name: "Camp Jardin" 
                          } ] } ] }, 
    city: "Brffrvgrfg", 
    postalCode: "16356ghhhhhhhhhhhhhhhhhhhhhh", 
    address: "Royal road ", 
    lat: 9, 
    long: 9, 
    addedOn: "2018-10-22T14:25:15.0403994", 
    phone: "9876543210", 
    mobile: "9232323123", 
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
    wednesdayOpen: "03:24", 
    wednesdayClose: "12:23", 
    isWednesdayOpen: true, 
    thursdayOpen: null, 
    thursdayClose: null, 
    isThursdayOpen: false, 
    fridayOpen: null, 
    fridayClose: null, 
    isFridayOpen: false, 
    saturdayOpen: "21:23",
    saturdayClose: "23:23", 
    isSaturdayOpen: true, 
    locationPhones: [] };
  address : any = {};
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

        
    this.regularForm = new FormGroup({
      'inputEmail': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]),
      'textArea': new FormControl(null, [Validators.required]),
      'radioOption': new FormControl('Option one is this')
  }, {updateOn: 'blur'});
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

  typeError() {
    this.toastr.error('Only Numbers');
}

  keyPress(event: any) {
    const pattern = /[0-9]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
        this.typeError();
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

    add_more_Phone(){
      
    }   
    update_location_week_googlemap(e)
  {
    console.log(this.columns)
      this.phone_dailog = false;
     // console.log( this.modelfield );
     console.log(e);
   
        this.week_dailog = false ;
        let headers = new Headers();
        var authToken = localStorage.getItem('userToken');
        headers.append('Accept', 'application/json')
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization",'Bearer '+authToken);
      
        this.columns.forEach((el)=>{
          this.col.push(el.phoneNumber);
        })

            this.http.post(this.urlpost,{
              vendorLocationId: e.value.vendorLocationId,
              title: e.value.title,
              countryId: e.value.country.countryId  ,
              vendorId: e.value.vendorId,
              country: e.value.country,
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
              isSaturdayOpen: e.value.isSaturdayOpen,
              
              locationPhones: this.col
            },{headers:headers}).subscribe( (data)=> { console.log(data)
              this.toastr.success(data.statusText);
            }
        ,      (error)=>{ console.log(error);
        });


        this.http.post(this.post_phone_number,{
          locationPhoneId: 0,
          vendorLocationId: e.value.vendorLocationId,
          phoneType: this.columns[0].phoneType,
          phoneNumber: this.columns[0].phoneNumber
          // new_key: this.columns
        },{headers:headers}).subscribe( (data)=> { console.log(data)
          this.toastr.success(data.statusText);
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
          title: "EDIT MAP.",
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
          city: " ",
          postalCode: e.value.postalCode          ,
          address: e.value.Address,
          lat: 0,
          long: 0,
          addedOn: " ",
          phone: e.value.phone ,
          mobile: " -",
          isActive: true,
          sundayOpen: " -",
          sundayClose: " -",
          isSundayOpen: true,
          mondayOpen: " -",
          mondayClose: " -",
          isMondayOpen: true,
          tuesdayOpen: " -",
          tuesdayClose: " -",
          isTuesdayOpen: true,
          wednesdayOpen: " -",
          wednesdayClose: " -",
          isWednesdayOpen: true,
          thursdayOpen: " -",
          thursdayClose: " -",
          isThursdayOpen: true,
          fridayOpen: " -",
          fridayClose: " -",
          isFridayOpen: true,
          saturdayOpen: " -",
          saturdayClose: " -",
          isSaturdayOpen: true,
         
        }
        ,{headers:headers}).subscribe( 
          (data)=> {console.log(data.json())
          this.toastr.success(data.json());
        },(err)=>{ console.log(err); 
          this.toastr.error(err._body );
         } );

   }



      Update_Address(e)
   {
        this.regularForm.reset();
          //console.log(this.modelfield );
          console.log(e.value);
       const datapanel =  {
        vendorLocationId: e.value.vendorLocationId,
        countryId: e.value.country_id ,
        districtId: e.value.dist_id,
        suburbId:  e.value.sub_id ,
        vendorId: e.value.vendorid ,
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
      
      }
      console.log(datapanel);
          let headers = new Headers();
          var authToken = localStorage.getItem('userToken');
          headers.append('Accept', 'application/json')
          headers.append('Content-Type', 'application/json');
          headers.append("Authorization",'Bearer '+authToken);
          var vendorID = localStorage.getItem('vendorid');
                  this.http.post(this.urlpost,datapanel,{headers:headers}).subscribe(    (responce)=>{ console.log(responce);
                                this.toastr.success(responce.statusText);
                               if(responce.status == 200)
                                {
                                  
                                  this.photo_ved_dailog = false;
                                  this.phone_dailog = false;
                                }   
      
              
                ///console.log("saved");
           
            },(error)=> { console.log(error) ;
              this.toastr.error(error.statusText );
              this.toastr.error(error.json().text() );
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
    addNewColumn() {
      var newItemNo = this.columns.length + 1;
    
    
      //  alert(newItemNo);
      this.columns.push({
        phoneType: 'mobile',
        phoneNumber: '',
       
     });
    
    
     }
     removeColumn(index) {
      if (this.columns.length >= 2) {
       this.columns.splice(index, 1);
      }
      alert();
      let headers = new Headers();
      var authToken = localStorage.getItem('userToken');
      headers.append('Accept', 'application/json')
      headers.append('Content-Type', 'application/json');
      headers.append("Authorization",'Bearer '+authToken);
      this.http.post(this.remove_phone_number,{
        locationPhoneId: 2,
        vendorLocationId: 27,
        phoneType: "mobile",
        phoneNumber: "12321124444443"
      },{headers:headers}).subscribe( (data)=> { console.log(data)
        this.toastr.success(data.statusText);
      }
  ,      (error)=>{ console.log(error);
  });
    
    
     }
    
}